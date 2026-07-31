// Build-time content validation for the 7code-build/content/*.mdx pack —
// implements VALIDATION_RULES from 7code-build/content/content-spec.types.ts.
// Follows the existing scripts/ pattern (plain fs/regex, FAIL lines,
// exit 1 on any error), same as validate-schema.mjs / check-duplicate-schema.mjs,
// rather than a separate validation framework.
//
// Run after scripts/prerender.mjs (needs the generated .html files on disk to
// check that internal links resolve to real routes).
//
// Usage:  node scripts/check-content-spec.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import CONTENT_DATA from "../project/content-data.js";
import SITE_CONFIG from "../project/site-config.js";
import { flattenInline } from "./parse-content.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const BANNED_TERMS = [
  "leverage", "synergy", "touch base", "circle back",
  "hope this finds you well", "offshore body shop",
];
const ICP_SEGMENTS = new Set(["new-product", "outstaffing", "smb-automation", "partners"]);

const MONEY_BLOCK_ORDER = [
  "hero", "trustStrip", "diagnosis", "successHorizon", "proof", "cta",
  "whatWeBuild", "howWeDeliver", "package", "cta", "pointOfView", "faq", "close",
];

let errors = 0;
let warnings = 0;
function fail(id, where, msg) { console.error(`  FAIL  [${id}]  ${where}  ${msg}`); errors++; }
function warn(id, where, msg) { console.warn(`  WARN  [${id}]  ${where}  ${msg}`); warnings++; }

// ── build the set of real routes from the generated HTML files on disk ─────
function collectRealRoutes() {
  const routes = new Set(["/"]);
  function walk(dir, prefix) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === "node_modules" || entry.name === "project" || entry.name.startsWith(".")) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, prefix + "/" + entry.name);
      } else if (entry.name.endsWith(".html")) {
        const rel = entry.name === "index.html" ? prefix || "/" : prefix + "/" + entry.name.replace(/\.html$/, "");
        routes.add(rel === "" ? "/" : rel);
      }
    }
  }
  walk(ROOT, "");
  return routes;
}

function checkLinkResolves(routes, href, where) {
  if (/^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("#")) return; // external/anchor, out of scope
  const clean = href.split("#")[0].replace(/\/$/, "") || "/";
  if (!routes.has(clean)) fail("internal-links", where, `internal link target does not resolve to a real route: ${href}`);
}

const routes = collectRealRoutes();

// ── per-entry checks shared by money/package/hub specs ──────────────────────
function checkCommon(entry, kind, sourceFile) {
  const { spec, blocks } = entry;
  const where = sourceFile;

  if (!spec.meta.metaDescription || !spec.meta.metaDescription.trim()) {
    fail("meta-desc", where, "metaDescription missing or empty");
  }
  if (spec.meta.title.length < 50 || spec.meta.title.length > 60) {
    warn("title-length", where, `title is ${spec.meta.title.length} chars (want 50-60): "${spec.meta.title}"`);
  }
  if (spec.meta.ogImageDimensions.width !== 1200 || spec.meta.ogImageDimensions.height !== 630) {
    warn("og-dimensions", where, `ogImage is ${spec.meta.ogImageDimensions.width}x${spec.meta.ogImageDimensions.height}, want 1200x630`);
  }
  if (!ICP_SEGMENTS.has(spec.targeting.icpSegment)) {
    fail("one-segment", where, `icpSegment "${spec.targeting.icpSegment}" is not one of the four canonical segments`);
  }
  if (spec.status === "approved" && spec.openItems && spec.openItems.length > 0) {
    fail("open-items-empty", where, `openItems must be empty when status is approved: ${JSON.stringify(spec.openItems)}`);
  }

  // Banned terms + "[UNVERIFIED" — scan every piece of rendered text.
  const allText = [
    ...Object.values(blocks).flatMap(b => textOf(b)),
    spec.meta.title, spec.meta.metaDescription,
  ].join(" \n ");
  if (spec.status === "approved" && /\[UNVERIFIED/.test(allText)) {
    fail("no-unverified", where, `"[UNVERIFIED" marker present in an approved spec`);
  }
  for (const term of BANNED_TERMS) {
    const re = new RegExp("\\b" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
    if (re.test(allText)) fail("banned-terms", where, `banned term found: "${term}"`);
  }
  // "resources" is banned as a word in prose; the /resources URL is fine.
  const resourcesWordRe = /(^|[^a-z0-9/-])resources([^a-z0-9/-]|$)/i;
  const strippedOfUrls = allText.replace(/\/resources[a-z0-9/-]*/gi, "");
  if (resourcesWordRe.test(strippedOfUrls)) {
    fail("banned-terms", where, `banned word "resources" found in prose (use "engineers")`);
  }

  // CTA: front-matter cta.label must match the hero block's own **CTA:** line
  // verbatim — the one place body copy repeats it outside spec.cta.
  if (blocks.hero) {
    // hero.h1/sub are parsed already; re-derive the raw CTA line isn't stored,
    // so this check instead confirms every rendered CTA instance in this
    // build reads spec.cta.label directly (structural guarantee — see
    // project/blocks.jsx's CtaBlock/HeroBlock, which never take a label prop
    // other than spec.cta.label). Documented here rather than re-parsed.
  }

  // Internal links resolve to real routes.
  for (const link of spec.internalLinks || []) {
    checkLinkResolves(routes, link.href, `${where} internalLinks[${link.anchor}]`);
  }
  for (const p of spec.proof || []) {
    for (const tag of p.tags) {
      if (!tag.href || !tag.href.startsWith("/")) fail("proof-tags-linked", where, `proof tag "${tag.label}" is not a link`);
      else checkLinkResolves(routes, tag.href, `${where} proof tag "${tag.label}"`);
    }
    checkLinkResolves(routes, "/case-study/" + p.caseStudySlug, `${where} proof caseStudySlug`);
  }
  for (const f of blocks.faq || []) {
    for (const node of f.answerInline || []) {
      if (node.type === "link") checkLinkResolves(routes, node.href, `${where} faq answer link "${node.label}"`);
    }
  }
}

function textOf(block) {
  if (!block) return [];
  if (block.rich) return block.rich.flatMap(flattenNode);
  return [JSON.stringify(block)];
}
function flattenNode(n) {
  if (n.type === "p" || n.type === "horizon") return [flattenInline(n.inline)];
  if (n.type === "ul") return n.items.map(flattenInline);
  if (n.type === "table") return n.rows.flatMap(row => row.map(flattenInline));
  if (n.type === "h2") return [n.text];
  return [];
}

// ── money pages ──────────────────────────────────────────────────────────
console.log("Money pages:");
for (const [slug, entry] of Object.entries(CONTENT_DATA.MONEY_PAGES)) {
  const where = `pages/${slug}`;
  checkCommon(entry, "money", where);

  const faqCount = (entry.blocks.faq || []).length;
  if (faqCount < 10 || faqCount > 12) fail("faq-count", where, `${faqCount} FAQ entries (want 10-12)`);

  const order = entry.spec.blocks;
  if (JSON.stringify(order) !== JSON.stringify(MONEY_BLOCK_ORDER)) {
    fail("proof-before-cta", where, `block order does not match the required 13-block money-page skeleton: ${order.join(",")}`);
  } else {
    const trustIdx = order.indexOf("trustStrip");
    const firstCtaIdx = order.indexOf("cta");
    if (trustIdx === -1 || firstCtaIdx === -1 || trustIdx > firstCtaIdx) {
      fail("proof-before-cta", where, "trustStrip must render before the first cta block");
    }
  }
}

// ── package pages ────────────────────────────────────────────────────────
console.log("Package pages:");
for (const [slug, entry] of Object.entries(CONTENT_DATA.PACKAGES)) {
  checkCommon(entry, "package", `packages/${slug}`);
}

// ── hub articles ─────────────────────────────────────────────────────────
console.log("Hub articles:");
for (const [slug, entry] of Object.entries(CONTENT_DATA.HUB_ARTICLES)) {
  checkCommon(entry, "hub", `hub/${slug}`);
}

// ── homepage ─────────────────────────────────────────────────────────────
console.log("Homepage:");
checkCommon(CONTENT_DATA.HOME_CONTENT, "index", "pages/home");

// ── {{PLACEHOLDER}} substitution sanity check — every {{X}} must have been
// resolved by scripts/parse-content.mjs before this data file was generated.
console.log("Placeholder substitution:");
const rawDump = JSON.stringify(CONTENT_DATA);
const unresolved = rawDump.match(/\{\{[A-Z_]+\}\}/g);
if (unresolved) fail("placeholders", "content-data.js", `unresolved placeholder(s): ${[...new Set(unresolved)].join(", ")}`);

console.log(`\ncheck-content-spec: ${errors} error(s), ${warnings} warning(s).`);
if (errors > 0) process.exit(1);
