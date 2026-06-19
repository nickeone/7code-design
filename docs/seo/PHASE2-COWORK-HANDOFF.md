# 7code.tech Technical SEO — Cowork Handoff

**Status:** Shipped to `main` (PR #75, squash `1f1bdc4`). Vercel production deploy triggered automatically.
**Date:** 2026-06-19

---

## What shipped (in-repo, done)

### Phase 1 — Indexing fundamentals
- **Unique, keyword-aligned `<h1>` on every route.** Root cause fixed: `/services` had no
  route handler and was rendering the homepage (and its H1). Added `ServicesPage` + wired the
  route. Updated H1s on `/about`, `/process`, `/contact`, `/ai-mvp-development`,
  `/ai-development-agency-uk`, `/compare/agency-vs-freelancer`, all 6 `/service/*`, all 6
  `/expertise/*`. **Verified: every built page renders exactly one `<h1>`.**
- **Sitemap reviewed** — already clean (only canonical 200 URLs). The GSC redirect/404/alternate
  buckets come from old WordPress backlinks, not the sitemap. (See "Recommended" below for the one
  cosmetic nit.)

### Phase 2 — Pre-render, schema, on-page
- **TASK A — Initial HTML / SSR.** Inner pages previously shipped an empty `<div id="root">`
  (only the homepage had body content). The Puppeteer body-injection pass now runs reliably for
  **all 70 routes** — `<h1>`, primary copy, and all `<head>` signals are in the first byte, no JS
  required. Added `/services`, `/resources/*`, `/privacy-policy`, `/terms-and-conditions` to the
  pre-render route list (were missing).
  - **Bonus bug fix (user-facing):** `bundle-routes.min.js` loads `async` and dispatches
    `routes-loaded`; a race could leave the app stuck on the "Loading…" placeholder forever for
    real visitors. Fixed in `app.jsx`. This also eliminated intermittent pre-render failures.
- **TASK B — Structured data.** Added **FAQPage** JSON-LD to all 6 `/service/*` and all 6
  `/expertise/*` pages, generated from the existing on-page Q&A (new `scripts/faq-data.mjs` keeps
  schema in lockstep with visible content). Service / Article / BreadcrumbList schema confirmed
  present. **All 72 JSON-LD blocks validate; no duplicate @types.**
- **TASK C — On-page polish.** Added a ~50-word **answer-first paragraph** at the top of
  `/ai-mvp-development`, `/ai-development-agency-uk`, `/compare/agency-vs-freelancer` (facts only:
  6-week MVP, ~7h UK overlap, GDPR, from £25k).

### Verification snapshot
| Check | Result |
|---|---|
| Body injection | 70/70 routes, 0 failures |
| Single `<h1>` per page | ✓ all pages |
| Schema validation | 71 files / 72 blocks valid ✓ |
| Duplicate-schema check | no duplicates ✓ |
| Encoding / hreflang | clean ✓ |
| Vercel preview | green (Ready) before merge |

---

## Flagged for the team (not changed — needs human input)

1. **Thin expertise pages.** All 6 `/expertise/*` pages are ~1,010–1,040 words — just under the
   1,200+ target. Services are fine (1,480–1,570). Per guardrails I did **not** fabricate copy.
   Add ~200–300 words of substantive, question-led content per vertical (cost, timeline,
   compliance, team seniority).
2. **Logo update (blocked).** Could not fetch the Figma logo SVG — the environment's network policy
   blocks `figma.com` and the MCP asset endpoint needs auth (403). The Figma node is also a
   flattened raster, so no vector paths are extractable. **Options:** paste the SVG markup / attach
   the `.svg`, OR add `figma.com` to the env network egress allowlist, OR accept a best-effort
   raster recreation. (Current vs Figma aspect ratios differ — 2.6:1 vs 4.3:1 — so they do differ.)
3. **Sitemap cosmetic nit.** `top-nearshore-ai-development-agencies-europe` has a future `lastmod`
   (2026-07-14). Harmless, but worth normalizing if you want pristine timestamps.

---

## Off-repo steps for Cowork (do these next)

1. **Google Search Console → Sitemaps:** re-submit `https://www.7code.tech/sitemap.xml`. Confirm
   it reads "Success" with the expected URL count.
2. **URL Inspection → Request indexing** for the top ~10 pages only:
   `/`, `/services`, the 6 `/service/*`, `/ai-mvp-development`, `/ai-development-agency-uk`.
   (Don't burn the daily quota on low-priority pages — let the cleared crawl backlog handle the rest.)
3. **Validate live structured data:** run the homepage + one `/service/*` + one `/expertise/*`
   through Google's Rich Results Test once production is deployed, to confirm FAQPage is eligible.
4. **Backlinks / authority:** the remaining GSC "Discovered – not indexed" backlog is a new-domain
   crawl-budget issue. A few quality referring domains will accelerate crawl rate more than any
   further on-page change.
5. **Reviews / E-E-A-T:** keep Clutch (4.9★) and add Google Business reviews; both reinforce the
   LocalBusiness + AggregateRating schema already on the homepage.
6. **KPI tracking:** watch GSC "Indexed" count weekly. Baseline at handoff was 17/61 indexed,
   52 "Discovered – currently not indexed," 0 "Crawled – not indexed." Target: the Discovered
   bucket shrinking as crawl budget clears.

---

## Notes
- No `noindex`, robots disallow, or canonical-strategy changes were made.
- No marketing copy rewritten; no stats invented.
- Build is reproducible: `node scripts/prerender.mjs && node scripts/prerender-body.mjs`.
