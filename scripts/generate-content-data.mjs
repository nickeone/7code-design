// Runs the content parser once and writes project/content-data.js — a
// committed, plain-object-literal data file in the same idiom as
// SERVICES_DATA / CASES / RESOURCES_DATA (project/service-detail.jsx,
// case-study.jsx, resources.jsx). Re-run this whenever a .mdx file under
// 7code-build/content/ changes:
//
//   node scripts/generate-content-data.mjs
//
// Output is dual CJS/browser like project/site-config.js, so both the Node
// build scripts and the client bundle can read the same generated data.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadContentSpecs } from "./parse-content.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_FILE = path.join(ROOT, "project", "content-data.js");

function safeJson(value) {
  const LS = String.fromCharCode(0x2028);
  const PS = String.fromCharCode(0x2029);
  // No pretty-printing: this file is a generated cache, not something meant
  // for line-by-line diffing (the .mdx sources are the real source of
  // truth) — Lighthouse flagged the indented form as ~225 KB of pure
  // whitespace shipped to every page that loads it.
  return JSON.stringify(value).split(LS).join("\\u2028").split(PS).join("\\u2029");
}

const { pages, packages, hub } = loadContentSpecs();

const MONEY_PAGES = {};
let HOME_CONTENT = null;
for (const p of pages) {
  if (p.spec.meta.slug === "") {
    HOME_CONTENT = p;
  } else {
    MONEY_PAGES[p.spec.meta.slug] = p;
  }
}

const PACKAGES = {};
for (const p of packages) {
  const slug = p.spec.meta.slug.replace(/^packages\//, "");
  PACKAGES[slug] = p;
}

const HUB_ARTICLES = {};
for (const h of hub) {
  const slug = h.spec.meta.slug.replace(/^hub\//, "");
  HUB_ARTICLES[slug] = h;
}

const banner = `/**
 * GENERATED FILE — do not hand-edit.
 *
 * Produced by scripts/generate-content-data.mjs from the approved copy in
 * 7code-build/content/{pages,packages,hub}/*.mdx. To pick up content changes, re-run:
 *   node scripts/generate-content-data.mjs
 *
 * Dual CJS/browser export, like project/site-config.js: Node build scripts
 * \`require()\` this; the browser loads it via a plain <script> tag before
 * bundle-routes.min.js, where it attaches to window.CONTENT_DATA.
 */
`;

const body = `const MONEY_PAGES = ${safeJson(MONEY_PAGES)};
const PACKAGES = ${safeJson(PACKAGES)};
const HUB_ARTICLES = ${safeJson(HUB_ARTICLES)};
const HOME_CONTENT = ${safeJson(HOME_CONTENT)};

const CONTENT_DATA = { MONEY_PAGES, PACKAGES, HUB_ARTICLES, HOME_CONTENT };

if (typeof module !== "undefined" && module.exports) {
  module.exports = CONTENT_DATA;
}
if (typeof window !== "undefined") {
  window.CONTENT_DATA = CONTENT_DATA;
}
`;

fs.writeFileSync(OUT_FILE, banner + body);
console.log(
  `Wrote ${path.relative(ROOT, OUT_FILE)} — ${Object.keys(MONEY_PAGES).length} money pages, ` +
  `${Object.keys(PACKAGES).length} packages, ${Object.keys(HUB_ARTICLES).length} hub articles, home.`
);
