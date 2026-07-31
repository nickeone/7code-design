// Regenerates sitemap.xml: keeps every existing <url> entry as-is (lastmod,
// changefreq, priority untouched) and additively inserts any route that
// should be in the sitemap but isn't yet — this rebuild's 17 new pages, the
// /resources, /packages and /hub index pages, and the 4 /book/<slug> routes.
//
// sitemap.xml was previously hand-maintained with no generator at all (see
// IMPLEMENTATION-LOG.md) — this script is additive/idempotent by design so
// re-running it after adding a future page is safe and only affects the new
// route, not everything already there.
//
// Usage:  node scripts/generate-sitemap.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import SITE_CONFIG from "../project/site-config.js";
import CONTENT_DATA from "../project/content-data.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITE = "https://www.7code.tech";
const SITEMAP_PATH = path.join(ROOT, "sitemap.xml");

const today = new Date().toISOString().slice(0, 10);

function urlEntry(loc, { lastmod = today, changefreq = "monthly", priority = "0.7" } = {}) {
  return `  <url><loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

// Routes this rebuild adds. Priority: money pages rank for a commercial head
// term (0.9, just under the homepage) — the whole point of Step 5's flat,
// root-level routing. Packages/hub support them (0.7). Indexes and booking
// utility pages are lower (0.6 / 0.5).
const NEW_ROUTES = [
  ...Object.keys(CONTENT_DATA.MONEY_PAGES).map(slug => ({ loc: `${SITE}/${slug}`, changefreq: "monthly", priority: "0.9" })),
  { loc: `${SITE}/packages`, changefreq: "monthly", priority: "0.6" },
  ...Object.keys(CONTENT_DATA.PACKAGES).map(slug => ({ loc: `${SITE}/packages/${slug}`, changefreq: "monthly", priority: "0.7" })),
  { loc: `${SITE}/hub`, changefreq: "weekly", priority: "0.6" },
  ...Object.keys(CONTENT_DATA.HUB_ARTICLES).map(slug => ({ loc: `${SITE}/hub/${slug}`, changefreq: "monthly", priority: "0.7" })),
  { loc: `${SITE}/resources`, changefreq: "monthly", priority: "0.6" },
  ...Object.keys(SITE_CONFIG.BOOKING_ROUTES).map(slug => ({ loc: `${SITE}/book/${slug}`, changefreq: "monthly", priority: "0.5" })),
];

const existing = fs.readFileSync(SITEMAP_PATH, "utf8");
const existingLocs = new Set([...existing.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]));

const additions = NEW_ROUTES.filter(r => !existingLocs.has(r.loc));

let updated = existing;
if (additions.length) {
  const block = additions.map(r => urlEntry(r.loc, r)).join("\n");
  updated = existing.replace(/<\/urlset>\s*$/, `\n${block}\n</urlset>\n`);
}

fs.writeFileSync(SITEMAP_PATH, updated);

const totalUrls = [...updated.matchAll(/<loc>/g)].length;
console.log(`sitemap.xml: ${additions.length} new route(s) added, ${totalUrls} total <url> entries.`);
if (additions.length) {
  for (const a of additions) console.log("  +", a.loc);
}
