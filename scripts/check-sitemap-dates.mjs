// Fails the build if a sitemap <lastmod> is earlier than the page's datePublished,
// or if <priority>/<changefreq> (ignored by Google) creep back in.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemap = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
const errors = [];
if (/<priority>|<changefreq>/.test(sitemap)) errors.push("sitemap contains <priority>/<changefreq>");
for (const m of sitemap.matchAll(/<loc>https:\/\/www\.7code\.tech([^<]*)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) {
  const route = m[1] || "/";
  const file = path.join(ROOT, route === "/" ? "index.html" : route.slice(1) + ".html");
  if (!fs.existsSync(file)) { errors.push(`${route}: no HTML file`); continue; }
  const pub = (fs.readFileSync(file, "utf8").match(/"datePublished":\s*"([^"]+)"/) || [])[1];
  if (pub && m[2] < pub) errors.push(`${route}: lastmod ${m[2]} is before datePublished ${pub}`);
}
if (errors.length) { console.error("check-sitemap-dates:\n  " + errors.join("\n  ")); process.exit(1); }
console.log("check-sitemap-dates: all lastmod values consistent ✓");
