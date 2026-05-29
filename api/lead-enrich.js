/**
 * Vercel serverless function: POST /api/lead-enrich
 *
 * Triggered by a Formspree webhook on every contact-form submission.
 * Enriches the lead via Apollo (person + org) and emails an enriched
 * summary to the configured recipient.
 *
 * Cost note: Apollo charges 1 credit per matched person and 1 per matched
 * organisation; 0 credits if not found. Worst case: ~2 credits per lead.
 *
 * Required env vars (see .env.example):
 *   FORMSPREE_WEBHOOK_SECRET  – shared secret appended to the webhook URL
 *   APOLLO_API_KEY            – Apollo.io API key
 *   RESEND_API_KEY            – Resend transactional email API key
 *   LEAD_NOTIFY_TO            – recipient address (default: office@7code.ro)
 */

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Free-mail providers where the email domain is not the company domain. */
const FREE_MAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "hotmail.co.uk",
  "yahoo.com", "yahoo.co.uk", "icloud.com", "me.com", "mac.com",
  "proton.me", "protonmail.com", "aol.com", "gmx.com", "gmx.net",
  "live.com", "msn.com",
]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Safely fetch JSON; returns null on network/parse error. */
async function safeFetch(url, options) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      console.error(`[lead-enrich] HTTP ${res.status} from ${url}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error(`[lead-enrich] fetch error for ${url}:`, err.message);
    return null;
  }
}

/** Extract the domain from an email address. */
function emailDomain(email) {
  const at = (email || "").lastIndexOf("@");
  return at >= 0 ? email.slice(at + 1).toLowerCase() : "";
}

/** Split a full name into first / last (best-effort). */
function splitName(fullName) {
  const parts = (fullName || "").trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: "" };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

// ---------------------------------------------------------------------------
// Apollo enrichment
// ---------------------------------------------------------------------------

async function apolloPeopleMatch(email, name, companyName, apolloKey) {
  const { first, last } = splitName(name);
  const body = {
    api_key: apolloKey, // Apollo also accepts key in body for v1
    email,
    first_name: first,
    last_name: last,
    organization_name: companyName || undefined,
    reveal_personal_emails: false,
  };
  // Remove undefined keys
  Object.keys(body).forEach((k) => body[k] === undefined && delete body[k]);

  const data = await safeFetch("https://api.apollo.io/api/v1/people/match", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apolloKey,
    },
    body: JSON.stringify(body),
  });

  const person = data?.person;
  if (!person) return null;

  return {
    title: person.title || "",
    seniority: person.seniority || "",
    linkedin: person.linkedin_url || "",
    city: person.city || "",
    country: person.country || "",
    organization_name: person.organization?.name || "",
    organization_domain: person.organization?.primary_domain || "",
    employment_title: person.employment_history?.[0]?.title || "",
  };
}

async function apolloOrgEnrich(domain, apolloKey) {
  if (!domain) return null;

  const data = await safeFetch(
    `https://api.apollo.io/api/v1/organizations/enrich?domain=${encodeURIComponent(domain)}`,
    {
      headers: { "X-Api-Key": apolloKey },
    }
  );

  const org = data?.organization;
  if (!org) return null;

  return {
    name: org.name || "",
    domain: org.primary_domain || domain,
    industry: org.industry || "",
    employee_count: org.estimated_num_employees ?? null,
    revenue_range: org.annual_revenue_printed || org.revenue_range || "",
    hq_city: org.city || "",
    hq_country: org.country || "",
    founded_year: org.founded_year || "",
    funding_stage: org.latest_funding_stage || "",
    linkedin: org.linkedin_url || "",
    technologies: (org.technologies || []).slice(0, 8).join(", "),
  };
}

// ---------------------------------------------------------------------------
// Fit scoring — 7code ICP: B2B SME, senior buyer, meaningful budget
// ---------------------------------------------------------------------------

function computeFit({ seniority, employeeCount, budget }) {
  let score = 0;
  const reasons = [];

  const seniorTitles = new Set(["founder", "c_suite", "vp", "head", "director", "owner", "partner"]);
  if (seniority && seniorTitles.has(seniority.toLowerCase())) {
    score += 2;
    reasons.push(`senior seniority (${seniority})`);
  }

  if (employeeCount != null) {
    if (employeeCount >= 11 && employeeCount <= 500) {
      score += 2;
      reasons.push(`SME size (${employeeCount} employees)`);
    } else if (employeeCount > 500) {
      score += 1;
      reasons.push("enterprise size");
    }
  }

  const budgetLow = ["$25k – $50k", "$50k – $150k", "$150k – $500k", "$500k+"];
  if (budget && budgetLow.includes(budget)) {
    score += 2;
    reasons.push(`budget ${budget}`);
  }

  if (score >= 4) return { fit: "high", reason: reasons.join("; ") || "strong ICP signals" };
  if (score >= 2) return { fit: "medium", reason: reasons.join("; ") || "partial ICP match" };
  return { fit: "low", reason: reasons.join("; ") || "weak ICP signals" };
}

// ---------------------------------------------------------------------------
// Email composition
// ---------------------------------------------------------------------------

function buildEmailHtml({ lead, person, org, fitResult }) {
  const v = (x) => x || "<em style='color:#999'>—</em>";
  const row = (label, value) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:4px 0;font-size:13px;color:#0f172a">${v(value)}</td></tr>`;

  const fitColor = { high: "#16a34a", medium: "#d97706", low: "#dc2626" }[fitResult.fit] || "#64748b";

  return `
<!DOCTYPE html><html><body style="font-family:Inter,ui-sans-serif,system-ui,sans-serif;color:#0f172a;max-width:680px;margin:0 auto;padding:24px">
<h2 style="margin:0 0 4px;font-size:20px">New enquiry from ${lead.name}</h2>
<p style="margin:0 0 24px;color:#64748b;font-size:14px">${lead.company || ""}${lead.company && lead.email ? " · " : ""}${lead.email}</p>

<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:20px 24px;margin-bottom:24px">
  <p style="margin:0 0 8px;font-weight:600;font-size:14px">Message</p>
  <p style="margin:0;font-size:14px;line-height:1.7;white-space:pre-wrap">${lead.message}</p>
  ${lead.budget ? `<p style="margin:12px 0 0;font-size:13px;color:#64748b">Budget: <strong>${lead.budget}</strong></p>` : ""}
</div>

<div style="margin-bottom:24px;display:inline-block;padding:8px 16px;border-radius:999px;background:${fitColor};color:#fff;font-size:13px;font-weight:600">
  ${fitResult.fit.toUpperCase()} FIT — ${fitResult.reason}
</div>

${person ? `
<h3 style="margin:0 0 10px;font-size:15px;border-bottom:1px solid #e2e8f0;padding-bottom:6px">Person (Apollo)</h3>
<table style="border-collapse:collapse;margin-bottom:20px">
  ${row("Title", person.title)}
  ${row("Seniority", person.seniority)}
  ${row("LinkedIn", person.linkedin ? `<a href="${person.linkedin}">${person.linkedin}</a>` : null)}
  ${row("Location", [person.city, person.country].filter(Boolean).join(", "))}
</table>` : `<p style="font-size:13px;color:#94a3b8;margin-bottom:20px">Person enrichment: not found in Apollo.</p>`}

${org ? `
<h3 style="margin:0 0 10px;font-size:15px;border-bottom:1px solid #e2e8f0;padding-bottom:6px">Company (Apollo)</h3>
<table style="border-collapse:collapse;margin-bottom:20px">
  ${row("Name", org.name)}
  ${row("Domain", org.domain)}
  ${row("Industry", org.industry)}
  ${row("Employees", org.employee_count)}
  ${row("Revenue", org.revenue_range)}
  ${row("HQ", [org.hq_city, org.hq_country].filter(Boolean).join(", "))}
  ${row("Founded", org.founded_year)}
  ${row("Funding", org.funding_stage)}
  ${row("LinkedIn", org.linkedin ? `<a href="${org.linkedin}">${org.linkedin}</a>` : null)}
  ${org.technologies ? row("Tech stack", org.technologies) : ""}
</table>` : `<p style="font-size:13px;color:#94a3b8;margin-bottom:20px">Company enrichment: not found in Apollo.</p>`}

<h3 style="margin:0 0 10px;font-size:15px;border-bottom:1px solid #e2e8f0;padding-bottom:6px">Traffic &amp; Location</h3>
<table style="border-collapse:collapse;margin-bottom:20px">
  ${row("Location (IP)", [lead.city, lead.region, lead.country].filter(Boolean).join(", "))}
  ${row("Landing page", lead.landing_page ? `<a href="${lead.landing_page}" style="word-break:break-all">${lead.landing_page}</a>` : null)}
  ${row("Referrer", lead.referrer)}
  ${row("UTM source", lead.utm_source)}
  ${row("UTM medium", lead.utm_medium)}
  ${row("UTM campaign", lead.utm_campaign)}
  ${row("First-touch source", lead.ft_utm_source)}
  ${row("First-touch medium", lead.ft_utm_medium)}
  ${row("First-touch campaign", lead.ft_utm_campaign)}
  ${row("GA4 client_id", lead.ga_client_id)}
</table>

<p style="font-size:12px;color:#94a3b8;margin-top:32px;border-top:1px solid #e2e8f0;padding-top:12px">
  Sent by the 7code.tech lead-enrich webhook · ${new Date().toUTCString()}
</p>
</body></html>`;
}

async function sendEmail({ to, subject, html, resendKey }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: "7code Leads <leads@7code.tech>",
      to: [to],
      subject,
      html,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend error ${res.status}: ${body}`);
  }
  return res.json();
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export default async function handler(req, res) {
  // Only POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // ── 1. Verify shared secret ────────────────────────────────────────────────
  const secret = process.env.FORMSPREE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[lead-enrich] FORMSPREE_WEBHOOK_SECRET not set");
    return res.status(500).json({ error: "Server misconfiguration" });
  }

  const receivedSecret =
    req.query?.secret ||
    req.headers?.["x-webhook-secret"] ||
    req.headers?.["x-formspree-secret"];

  if (receivedSecret !== secret) {
    console.warn("[lead-enrich] Rejected: invalid webhook secret");
    return res.status(401).json({ error: "Unauthorized" });
  }

  // ── 2. Parse body ──────────────────────────────────────────────────────────
  // Formspree sends form fields as a flat JSON object (or nested under `data`).
  const raw = req.body || {};
  const fields = raw.data ?? raw;

  const lead = {
    name:           fields.name || "",
    email:          fields.email || fields._replyto || "",
    company:        fields.company || "",
    budget:         fields.budget || "",
    message:        fields.message || "",
    utm_source:     fields.utm_source || "",
    utm_medium:     fields.utm_medium || "",
    utm_campaign:   fields.utm_campaign || "",
    utm_term:       fields.utm_term || "",
    utm_content:    fields.utm_content || "",
    ft_utm_source:  fields.ft_utm_source || "",
    ft_utm_medium:  fields.ft_utm_medium || "",
    ft_utm_campaign:fields.ft_utm_campaign || "",
    ft_landing_page:fields.ft_landing_page || "",
    ft_referrer:    fields.ft_referrer || "",
    landing_page:   fields.landing_page || "",
    referrer:       fields.referrer || "",
    ga_client_id:   fields.ga_client_id || "",
    city:           fields.city || "",
    region:         fields.region || "",
    country:        fields.country || "",
  };

  if (!lead.email) {
    return res.status(400).json({ error: "No email in submission" });
  }

  const apolloKey  = process.env.APOLLO_API_KEY;
  const resendKey  = process.env.RESEND_API_KEY;
  const notifyTo   = process.env.LEAD_NOTIFY_TO || "office@7code.ro";

  if (!apolloKey || !resendKey) {
    console.error("[lead-enrich] Missing APOLLO_API_KEY or RESEND_API_KEY");
    // Still attempt to send a plain email if Resend key exists
    if (!resendKey) return res.status(500).json({ error: "Server misconfiguration" });
  }

  // ── 3. Determine company domain ───────────────────────────────────────────
  const emailDom = emailDomain(lead.email);
  const isFreeMail = FREE_MAIL_DOMAINS.has(emailDom);
  const orgDomain = isFreeMail ? "" : emailDom;

  // ── 4. Apollo enrichment (non-blocking — never throw) ────────────────────
  let person = null;
  let org    = null;

  if (apolloKey) {
    if (!isFreeMail) {
      // Business email: can enrich person and org in parallel (domain known upfront)
      [person, org] = await Promise.all([
        apolloPeopleMatch(lead.email, lead.name, lead.company, apolloKey).catch(() => null),
        apolloOrgEnrich(orgDomain, apolloKey).catch(() => null),
      ]);
    } else {
      // Free-mail: enrich person first to get the org domain, then enrich org
      person = await apolloPeopleMatch(lead.email, lead.name, lead.company, apolloKey).catch(() => null);
      const resolvedDomain = person?.organization_domain || "";
      if (resolvedDomain) {
        org = await apolloOrgEnrich(resolvedDomain, apolloKey).catch(() => null);
      }
    }

    console.log(
      `[lead-enrich] Apollo: person=${person ? "found" : "not found"}, org=${org ? "found" : "not found"}`
    );
  }

  // ── 5. Fit score ─────────────────────────────────────────────────────────
  const fitResult = computeFit({
    seniority:     person?.seniority || "",
    employeeCount: org?.employee_count ?? null,
    budget:        lead.budget,
  });

  // ── 6. Send email ─────────────────────────────────────────────────────────
  try {
    const subject = `New lead: ${lead.name || lead.email} — ${lead.company || org?.name || "Unknown co"} [${fitResult.fit} fit]`;
    const html    = buildEmailHtml({ lead, person, org, fitResult });
    await sendEmail({ to: notifyTo, subject, html, resendKey });
    console.log(`[lead-enrich] Email sent to ${notifyTo} (fit: ${fitResult.fit})`);
  } catch (err) {
    console.error("[lead-enrich] Email send failed:", err.message);
    return res.status(500).json({ error: "Email delivery failed" });
  }

  return res.status(200).json({ ok: true });
}
