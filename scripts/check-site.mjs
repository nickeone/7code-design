/**
 * Content safety gate. Runs before every deploy (vercel.json buildCommand) and
 * on every push / pull request (.github/workflows/site-checks.yml).
 *
 * If anything here fails, Vercel refuses the deploy and the live site keeps
 * serving the previous, working version.
 *
 * Checks:
 *   1. Compiled JS/CSS match their sources (no forgotten rebuild)
 *   2. Every blog post / case study / resource in the source data has its
 *      page file, its prerender entries and its sitemap entry
 *   3. No duplicate slugs
 *   4. Every page has a title, meta description, canonical, one <h1> and
 *      pre-rendered body content
 *   5. Every internal link and image points at something that exists
 *   6. No unfinished placeholder text ([€X to €Y], [Booking link], TODO, …)
 *   7. sitemap.xml is valid and only lists pages that exist
 *
 * Usage:  node scripts/check-site.mjs
 */

import { readFile, readdir } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { buildAll } from "./build-assets.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://www.7code.tech";
const errors = [];
const fail = (where, msg) => errors.push({ where, msg });
const read = p => readFile(join(ROOT, p), "utf8");

// ── 1. compiled assets are fresh ─────────────────────────────────────────────
try {
  const files = await buildAll();
  for (const [rel, content] of Object.entries(files)) {
    const current = existsSync(join(ROOT, rel)) ? await read(rel) : null;
    if (current !== content) fail(rel, "out of date with its source file. Run `npm run build` and commit the result.");
  }
} catch (err) {
  fail("project/*.jsx", "a source file does not compile (usually a missing comma, quote or bracket):\n      " + String(err.message || err).split("\n").slice(0, 6).join("\n      "));
}

// ── 2–3. source data ↔ page files ↔ prerender ↔ sitemap ──────────────────────
function slugsFrom(src, startMarker, endMarker) {
  const start = src.indexOf(startMarker);
  if (start < 0) return null;
  const end = endMarker ? src.indexOf(endMarker, start) : src.length;
  const block = src.slice(start, end < 0 ? src.length : end);
  return [...block.matchAll(/^\s{2,4}slug:\s*"([^"]+)"/gm)].map(m => m[1]);
}

const prerender = await read("scripts/prerender.mjs");
const prerenderBody = await read("scripts/prerender-body.mjs");
const sitemap = await read("sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const bodyRoutes = new Set([...prerenderBody.matchAll(/^\s*"(\/[^"]*)",?\s*$/gm)].map(m => m[1]));

function prerenderSlugs(arrayName) {
  const start = prerender.indexOf("const " + arrayName + " = [");
  if (start < 0) return new Set();
  const end = prerender.indexOf("\n];", start);
  return new Set([...prerender.slice(start, end).matchAll(/"?slug"?\s*:\s*"([^"]+)"/g)].map(m => m[1]));
}

const SECTIONS = [
  { label: "Blog post", file: "project/blog.jsx", start: "const POSTS = [", end: "\n];", dir: "blog", arr: "BLOG_POSTS" },
  { label: "Case study", file: "project/case-study.jsx", start: "const CASES = {", end: "\n};", dir: "case-study", arr: "CASES", keyed: true },
  { label: "Resource", file: "project/resources.jsx", start: "const RESOURCES_DATA = {", end: "\n};", dir: "resources", arr: "RESOURCES", keyed: true },
];

for (const s of SECTIONS) {
  const src = await read(s.file);
  let slugs;
  if (s.keyed) {
    const start = src.indexOf(s.start);
    const block = src.slice(start, src.indexOf(s.end, start));
    slugs = [...block.matchAll(/^\s{2}"?([a-z0-9-]+)"?:\s*\{/gm)].map(m => m[1]);
  } else {
    slugs = slugsFrom(src, s.start, s.end);
  }
  if (!slugs || !slugs.length) { fail(s.file, `could not find the ${s.label.toLowerCase()} list — was "${s.start}" renamed?`); continue; }

  const seen = new Set();
  const listed = prerenderSlugs(s.arr);
  for (const slug of slugs) {
    if (seen.has(slug)) fail(s.file, `${s.label} slug "${slug}" is used twice.`);
    seen.add(slug);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(s.file, `${s.label} slug "${slug}" must be lowercase letters, numbers and dashes only.`);
    const path = `/${s.dir}/${slug}`;
    if (!existsSync(join(ROOT, s.dir, slug + ".html"))) fail(path, `page file ${s.dir}/${slug}.html is missing. Run \`npm run build\`.`);
    if (!listed.has(slug)) fail(path, `missing from the ${s.arr} list in scripts/prerender.mjs (needed for title, description and Google data).`);
    if (!bodyRoutes.has(path)) fail(path, "missing from the ROUTES list in scripts/prerender-body.mjs (needed so Google sees the text).");
    if (!sitemapUrls.includes(SITE + path)) fail(path, "missing from sitemap.xml.");
  }
  for (const slug of listed) {
    if (!seen.has(slug)) fail("scripts/prerender.mjs", `${s.arr} lists "${slug}" but there is no such ${s.label.toLowerCase()} in ${s.file}.`);
  }
}

// Blog post fields that the page needs to render.
{
  const src = await read("project/blog.jsx");
  const block = src.slice(src.indexOf("const POSTS = ["), src.indexOf("\n];", src.indexOf("const POSTS = [")));
  const posts = block.split(/\n  \{\n/).slice(1);
  const CATS = ["Strategy", "Engineering", "Case Study", "Operations"];
  for (const p of posts) {
    const slug = (p.match(/slug:\s*"([^"]+)"/) || [])[1] || "(unknown)";
    for (const field of ["slug", "cat", "title", "subtitle", "date", "read", "author", "cover", "body"]) {
      if (!new RegExp("^\\s{4}" + field + ":", "m").test(p)) fail("/blog/" + slug, `blog post is missing the "${field}" field.`);
    }
    const cat = (p.match(/^\s{4}cat:\s*"([^"]+)"/m) || [])[1];
    if (cat && !CATS.includes(cat)) fail("/blog/" + slug, `category "${cat}" is not one of: ${CATS.join(", ")}.`);
    const date = (p.match(/^\s{4}date:\s*"([^"]+)"/m) || [])[1];
    if (date && isNaN(Date.parse(date))) fail("/blog/" + slug, `date "${date}" is not a real date (use e.g. "Oct 20, 2026").`);
  }
}

// ── 4–6. every generated page ───────────────────────────────────────────────
async function walk(dir) {
  const out = [];
  for (const e of await readdir(join(ROOT, dir), { withFileTypes: true })) {
    if (e.name.startsWith(".") || ["node_modules", "project", "docs", "chats", "7code-build", "scripts"].includes(e.name)) continue;
    const rel = dir ? dir + "/" + e.name : e.name;
    if (e.isDirectory()) out.push(...await walk(rel));
    else if (e.name.endsWith(".html")) out.push(rel);
  }
  return out;
}

const vercel = JSON.parse(await read("vercel.json"));
const redirectSources = (vercel.redirects || []).map(r => r.source.replace(/\/$/, ""));

function internalTargetExists(href) {
  let path = href.split("#")[0].split("?")[0];
  if (!path || path === "/") return true;
  try { path = decodeURI(path); } catch {}
  path = path.replace(/\/$/, "");
  if (redirectSources.includes(path)) return true;
  const abs = join(ROOT, path);
  if (existsSync(abs) && statSync(abs).isFile()) return true;
  if (existsSync(abs + ".html")) return true;
  if (existsSync(join(abs, "index.html"))) return true;
  return false;
}

const PLACEHOLDERS = [
  /\[\s*(?:€|£|\$)\s*[XYN]\b[^\]]*\]/i,           // [€X to €Y]
  /\[\s*N\s+(?:weeks?|months?|days?)\s*\]/i,        // [N weeks]
  /\[\s*(?:booking|insert|add|link|placeholder|todo|tbd|tbc)[^\]]*\]/i, // [Booking link]
  /\bTODO\b|\bTBD\b|\bFIXME\b|\bXXX\b/,
  /lorem ipsum/i,
  /\bundefined\b|\bNaN\b|\[object Object\]/,
];

const pages = await walk("");
const pageUrls = new Set();
for (const rel of pages) {
  const html = await read(rel);
  const where = "/" + rel.replace(/(index)?\.html$/, "");
  pageUrls.add(SITE + where.replace(/\/$/, "") );

  const head = html.slice(0, html.indexOf("</head>"));
  const title = (head.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!title || !title.trim()) fail(where, "page has no <title>.");
  const desc = (head.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!desc || desc.trim().length < 50) fail(where, "page has no meta description (or it is under 50 characters).");
  if (!/<link rel="canonical" href="https:\/\/www\.7code\.tech[^"]*"/.test(head)) fail(where, "page has no canonical link.");

  const rootStart = html.indexOf('<div id="root">');
  const body = rootStart >= 0 ? html.slice(rootStart) : "";
  const bodyText = body.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ");
  if (bodyText.trim().length < 300) {
    fail(where, "page body is empty — the pre-render step did not run or the page crashed. Run `npm run build`.");
    continue;
  }
  const h1s = (body.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(where, `page should have exactly one main heading (<h1>), found ${h1s}.`);

  for (const re of PLACEHOLDERS) {
    const m = bodyText.match(re) || desc?.match(re) || title?.match(re);
    if (m) fail(where, `unfinished placeholder text "${m[0]}" — replace it with the real content.`);
  }

  for (const m of body.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) {
    const href = m[1];
    if (href.startsWith("//") || href.startsWith("/_vercel/") || href.startsWith("/#")) continue;
    if (!internalTargetExists(href)) fail(where, `broken link or image: ${href}`);
  }
}

// ── 7. sitemap only lists real pages ────────────────────────────────────────
if (!/^<\?xml[^>]*\?>\s*<urlset[\s>]/.test(sitemap.trim()) || !sitemap.trim().endsWith("</urlset>")) {
  fail("sitemap.xml", "file is not a valid sitemap (check the first and last lines).");
}
const opens = (sitemap.match(/<url>/g) || []).length;
const closes = (sitemap.match(/<\/url>/g) || []).length;
if (opens !== closes) fail("sitemap.xml", `has ${opens} <url> but ${closes} </url> — an entry is not closed.`);
for (const u of sitemapUrls) {
  if (!u.startsWith(SITE)) { fail("sitemap.xml", `URL ${u} is not on ${SITE}.`); continue; }
  if (!internalTargetExists(u.slice(SITE.length) || "/")) fail("sitemap.xml", `lists ${u} but that page does not exist.`);
}
if (new Set(sitemapUrls).size !== sitemapUrls.length) fail("sitemap.xml", "lists the same URL more than once.");

// ── report ─────────────────────────────────────────────────────────────────
if (errors.length) {
  console.error(`\n✗ check-site: ${errors.length} problem(s) found. Nothing will be deployed until these are fixed.\n`);
  for (const e of errors) console.error(`  • ${e.where}\n      ${e.msg}`);
  console.error("");
  process.exit(1);
}
console.log(`check-site: ${pages.length} pages, ${sitemapUrls.length} sitemap URLs — all checks passed ✓`);
