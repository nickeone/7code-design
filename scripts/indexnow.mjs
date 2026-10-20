/**
 * Tells Bing (and other IndexNow engines) about new or updated pages.
 * Runs after each production deploy (.github/workflows/live-check.yml).
 *
 * Reads the live sitemap and submits every URL whose <lastmod> is within
 * the last DAYS days. Pass --all to submit every URL in the sitemap.
 *
 * The key file /36c8d97b158443f1fdf94973afffa9d7.txt must stay at the site root.
 * Usage:  node scripts/indexnow.mjs [--all] [--days=N]
 */

const SITE = "https://www.7code.tech";
const KEY = "36c8d97b158443f1fdf94973afffa9d7";
const all = process.argv.includes("--all");
const daysArg = process.argv.find(a => a.startsWith("--days="));
const DAYS = daysArg ? Number(daysArg.split("=")[1]) : 2;

const xml = await (await fetch(SITE + "/sitemap.xml")).text();
const entries = [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>(?:\s*<lastmod>([^<]+)<\/lastmod>)?/g)]
  .map(m => ({ loc: m[1].trim(), lastmod: m[2] ? m[2].trim() : null }));

const cutoff = Date.now() - DAYS * 24 * 3600 * 1000;
const urls = entries
  .filter(e => all || (e.lastmod && Date.parse(e.lastmod) >= cutoff))
  .map(e => e.loc);

if (!urls.length) {
  console.log("indexnow: nothing new in the last " + DAYS + " days.");
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: "www.7code.tech", key: KEY, keyLocation: SITE + "/" + KEY + ".txt", urlList: urls }),
});
console.log("indexnow: HTTP " + res.status + " for " + urls.length + " URL(s)");
urls.forEach(u => console.log("  " + u));
// 200 = accepted, 202 = accepted (key validation pending). Anything else is
// reported but does not fail the workflow: indexing hints must never block a deploy.
