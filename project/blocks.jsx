/* global React, Icon */

const { useEffect: useEffectBLK, useRef: useRefBLK } = React;

// ──────────────────────────────────────────────────────────────────
// Cal.com inline embed loader — lives here (not booking.jsx) because
// CloseBlock (below) renders it on every money/package/hub/home page, and
// the homepage renders synchronously before the deferred bundle-routes.js
// (where booking.jsx's BookPage lives) is guaranteed to have loaded.
// BOOKING_PROVIDER lives in project/site-config.js (window.SITE_CONFIG),
// the single place that decides which calendar tool sits behind every
// /book/<slug> route and every embed rendered here.
// ──────────────────────────────────────────────────────────────────

let _calEmbedLoaded = false;
function loadCalEmbedScript() {
  if (_calEmbedLoaded) return;
  _calEmbedLoaded = true;
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  window.Cal("init", { origin: "https://cal.com" });
}

function CalEmbed({ calLink }) {
  const ref = useRefBLK(null);
  const elId = "cal-inline-" + calLink.replace(/[^a-z0-9]/gi, "-");

  useEffectBLK(() => {
    const provider = (window.SITE_CONFIG && window.SITE_CONFIG.BOOKING_PROVIDER) || "cal.com";
    if (provider !== "cal.com") return; // HubSpot Meetings path would branch here once integrated.

    loadCalEmbedScript();
    window.Cal("inline", {
      elementOrSelector: "#" + elId,
      calLink,
      layout: "month_view",
    });
    window.Cal("ui", {
      styles: { branding: { brandColor: "#06B6D4" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, [calLink]);

  return (
    <div
      ref={ref}
      id={elId}
      className="cal-embed"
      style={{ width: "100%", minHeight: 560, overflow: "hidden", borderRadius: "var(--radius-lg)", border: "1px solid var(--slate-200)" }}
    />
  );
}

// ──────────────────────────────────────────────────────────────────
// Shared block-rendering library for money pages, package pages, hub
// articles and the homepage. One component per parsed node/block shape
// from scripts/parse-content.mjs + project/content-data.js — this is the
// architecture called for in 7code-build/CLAUDE-CODE-PROMPT.md Step 3.
//
// Money-page blocks (13, fixed order): hero, trustStrip, diagnosis,
// successHorizon, proof, cta, whatWeBuild, howWeDeliver, package, cta,
// pointOfView, faq, close. Everything except hero/trustStrip/proof/faq/cta/
// close is plain prose+bullets+tables, so it all renders through the one
// generic RichSection component below — see parse-content.mjs's comment on
// why the block-name-specific parsers stop at hero/trustStrip/successHorizon/
// router/close/faq.
// ──────────────────────────────────────────────────────────────────

// Display names for case studies referenced by slug in `proof[]` front-matter
// — the .mdx proof body prose is for human readability only; the front-matter
// (caseStudySlug/metric/tags) is what's actually rendered, so this is the one
// place a case study's public name needs to be known. Sourced from
// _brief/CONTENT-STANDARDS.md §4 ("facts you may use").
const CASE_STUDY_NAMES = {
  "hera": "Hera Health Tech",
  "wholesum": "WholeSum",
  "numerize": "Numerize",
  "g42-fleet": "G42",
  "lidl-road-safety": "Lidl Romania",
  "daily8": "Daily8",
  "revote": "Revote",
  "cloud-of-legacy": "Cloud of Legacy",
  "melsonic": "Melsonic",
  "drum-bun": "Drum Bun",
};

// ── inline nodes (text / bold / link) ───────────────────────────────────────
function InlineNodes({ nodes }) {
  if (!nodes || !nodes.length) return null;
  return (
    <>
      {nodes.map((n, i) => {
        if (n.type === "bold") return <strong key={i}>{n.value}</strong>;
        if (n.type === "link") return <a key={i} href={n.href}>{n.label}</a>;
        return <React.Fragment key={i}>{n.value}</React.Fragment>;
      })}
    </>
  );
}

// ── rich body (h2 / p / ul / table) ─────────────────────────────────────────
function RichText({ nodes }) {
  if (!nodes || !nodes.length) return null;
  return (
    <>
      {nodes.map((n, i) => {
        if (n.type === "h2") return <h2 key={i}>{n.text}</h2>;
        if (n.type === "p") return <p key={i} className="block-p"><InlineNodes nodes={n.inline} /></p>;
        if (n.type === "ul") {
          return (
            <ul key={i} className="block-ul">
              {n.items.map((item, j) => <li key={j}><InlineNodes nodes={item} /></li>)}
            </ul>
          );
        }
        if (n.type === "table") {
          const [head, ...rows] = n.rows;
          return (
            <div key={i} className="block-table-wrap">
              <table className="block-table">
                {head && (
                  <thead><tr>{head.map((c, j) => <th key={j}><InlineNodes nodes={c} /></th>)}</tr></thead>
                )}
                <tbody>
                  {rows.map((row, j) => (
                    <tr key={j}>{row.map((c, k) => <td key={k}><InlineNodes nodes={c} /></td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

// Generic prose section — used for diagnosis, whatWeBuild, howWeDeliver,
// package, pointOfView (money pages); whoThisIsFor, whatYouGet, howItRuns,
// price, notForYouIf (package pages); and every hub article's bespoke
// blocks. The H2 is already embedded as the first rich node, so this
// component doesn't take a separate heading prop.
function RichSection({ nodes, alt }) {
  return (
    <section className={"section block-section" + (alt ? " section--alt" : "")}>
      <div className="container block-prose reveal">
        <RichText nodes={nodes} />
      </div>
    </section>
  );
}

// ── hero ─────────────────────────────────────────────────────────────────
function HeroBlock({ hero, cta }) {
  return (
    <section className="page-hero block-hero">
      <div className="container">
        <h1>{hero.h1}</h1>
        <p>{hero.sub}</p>
        <div className="hero-cta" style={{ justifyContent: "center", marginTop: 24 }}>
          <a href={cta.href} className="btn btn--cyan btn--lg">{cta.label}</a>
        </div>
        <p className="block-reassurance">{cta.reassurance}</p>
      </div>
    </section>
  );
}

// ── trustStrip — always renders above the first `cta` block; see App-level
// ordering guarantee in each page component below, not just this component ──
const TRUST_LOGOS = [
  { label: "Lidl Romania", src: "/project/uploads/Lidl-logo.png" },
  { label: "G42", src: "/project/assets/9681e775df296ad64c7b5a041883805a82c3d2a1.png" },
  { label: "Founders Factory", src: "/project/assets/b6d98b61cd02d867e9a2cd2d32465eb8ba06203f.png" },
  // No logo asset exists for "Life is Hard" (flagged in IMPLEMENTATION-LOG.md
  // for Nicu) — rendered as a text wordmark instead of inventing an image.
  { label: "Life is Hard", src: null },
];

function TrustStripBlock({ trustStrip }) {
  return (
    <section className="section block-truststrip">
      <div className="container">
        <div className="stat-row reveal">
          {trustStrip.stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="trust-logo-row reveal">
          {TRUST_LOGOS.map((l, i) => l.src
            ? <img key={i} src={l.src} alt={l.label} className="trust-logo-sm" loading="lazy" width="120" height="32" />
            : <span key={i} className="trust-logo-text">{l.label}</span>)}
        </div>
      </div>
    </section>
  );
}

// ── proof — service tags always render as links, never plain text ──────────
function ProofBlock({ proof, heading = "Work we can talk about" }) {
  return (
    <section className="section section--alt block-proof">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Proof</span>
          <h2>{heading}</h2>
        </div>
        <div className="proof-grid">
          {proof.map((p, i) => (
            <article key={i} className="proof-card reveal">
              <h3><a href={"/case-study/" + p.caseStudySlug}>{CASE_STUDY_NAMES[p.caseStudySlug] || p.caseStudySlug}</a></h3>
              <p>{p.metric}</p>
              <div className="proof-tags">
                {p.tags.map((t, j) => (
                  <React.Fragment key={j}>
                    {j > 0 && <span className="proof-tag-sep">·</span>}
                    <a href={t.href} className="proof-tag">{t.label}</a>
                  </React.Fragment>
                ))}
              </div>
              <a href={"/case-study/" + p.caseStudySlug} className="btn-link">Read the case study <Icon.arrow /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── successHorizon ───────────────────────────────────────────────────────
function SuccessHorizonBlock({ successHorizon }) {
  return (
    <section className="section block-horizon">
      <div className="container">
        <div className="section-head reveal">
          <h2>{successHorizon.heading}</h2>
        </div>
        <div className="horizon-row">
          {successHorizon.horizons.map((h, i) => (
            <div key={i} className="horizon-card reveal" style={{ transitionDelay: (i * 80) + "ms" }}>
              <div className="horizon-label">{h.label}</div>
              <p><InlineNodes nodes={h.inline} /></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── cta — idempotent: every instance renders spec.cta.label verbatim, never
// a second label. This is the whole enforcement mechanism for the "one CTA
// label per page" rule: nothing else in this file ever renders a button
// with a hardcoded string. ──
function CtaBlock({ cta }) {
  return (
    <section className="section block-cta-strip">
      <div className="container">
        <div className="cta-strip reveal">
          <div className="cta-strip-content">
            <p>{cta.reassurance}</p>
          </div>
          <div className="cta-strip-actions">
            <a href={cta.href} className="btn btn--cyan btn--lg">{cta.label}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── faq — emits FAQPage-shaped markup; the actual JSON-LD is built at build
// time in scripts/prerender.mjs from the same content-data.js so it can
// never drift from what's rendered here. ──
function FaqBlock({ faq, heading = "Questions we get asked before we're hired" }) {
  return (
    <section className="section block-faq">
      <div className="container svc-faq-wrap">
        <div className="section-head reveal">
          <h2>{heading}</h2>
        </div>
        <div className="svc-faq">
          {faq.map((f, i) => (
            <details key={i} className="svc-faq-item reveal" style={{ transitionDelay: (i * 30) + "ms" }}>
              <summary>{f.question}</summary>
              <p><InlineNodes nodes={f.answerInline} /></p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── close — named human, live calendar, contact-form fallback, reassurance ──
function CloseBlock({ close, cta }) {
  const bookingRoutes = (window.SITE_CONFIG && window.SITE_CONFIG.BOOKING_ROUTES) || {};
  const bookSlug = (cta.href || "").replace(/^\/book\//, "");
  const route = bookingRoutes[bookSlug];

  return (
    <section className="section block-close">
      <div className="container" style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="section-head reveal" style={{ textAlign: "center" }}>
          <h2>{close.heading}</h2>
          <p>{close.sub}</p>
        </div>
        <div className="close-human reveal">
          <img src="/project/uploads/authors/nicu-mardari.jpg" alt="Nicu Mardari" className="close-human-photo" width="48" height="48" />
          <div>
            <div className="close-human-name">Nicu Mardari</div>
            <div className="close-human-role">CEO & Co-founder</div>
          </div>
        </div>
        {route ? <CalEmbed calLink={route.calLink} /> : null}
        <p className="block-reassurance" style={{ textAlign: "center" }}>{cta.reassurance}</p>
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <a href="/contact" className="btn-link">Or use the contact form instead <Icon.arrow /></a>
        </div>
      </div>
    </section>
  );
}

// ── router (homepage only) ──────────────────────────────────────────────
function RouterBlock({ router }) {
  return (
    <section className="section block-router">
      <div className="container">
        <div className="section-head reveal">
          <h2>{router.heading}</h2>
        </div>
        <div className="router-grid">
          {router.cards.map((c, i) => (
            <a key={i} href={c.href} className="router-card reveal" style={{ transitionDelay: (i % 2 * 80) + "ms" }}>
              <p className="router-quote">&ldquo;{c.quote}&rdquo;</p>
              <p className="router-body">{c.body}</p>
              <span className="btn-link">{c.linkLabel} <Icon.arrow /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.CalEmbed = CalEmbed;
window.InlineNodes = InlineNodes;
window.RichText = RichText;
window.RichSection = RichSection;
window.HeroBlock = HeroBlock;
window.TrustStripBlock = TrustStripBlock;
window.ProofBlock = ProofBlock;
window.SuccessHorizonBlock = SuccessHorizonBlock;
window.CtaBlock = CtaBlock;
window.FaqBlock = FaqBlock;
window.CloseBlock = CloseBlock;
window.RouterBlock = RouterBlock;
window.CASE_STUDY_NAMES = CASE_STUDY_NAMES;
