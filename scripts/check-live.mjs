/**
 * Live smoke test: after a deploy, visit every page in the live sitemap and
 * confirm it loads with real content, plus the JS/CSS bundles it depends on.
 *
 * Usage:
 *   node scripts/check-live.mjs                     checks https://www.7code.tech
 *   node scripts/check-live.mjs https://preview-url checks a Vercel preview
 *   BASE_URL=https://… node scripts/check-live.mjs
 */

const BASE = (process.argv[2] || process.env.BASE_URL || "https://www.7code.tech").replace(/\/$/, "");
const SITE = "https://www.7code.tech";
const errors = [];

async function get(url) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { redirect: "follow", headers: { "user-agent": "7code-site-check" } });
      return { status: res.status, text: await res.text() };
    } catch (err) {
      if (attempt === 3) return { status: 0, text: String(err) };
      await new Promise(r => setTimeout(r, 2000 * attempt));
    }
  }
}

const sm = await get(BASE + "/sitemap.xml");
if (sm.status !== 200) {
  console.error(`✗ check-live: ${BASE}/sitemap.xml returned ${sm.status}`);
  process.exit(1);
}
const urls = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(SITE, BASE));

const assets = new Set();
const queue = [...urls];
async function worker() {
  while (queue.length) {
    const url = queue.shift();
    const { status, text } = await get(url);
    if (status !== 200) { errors.push(`${url} → HTTP ${status}`); continue; }
    if (!/<title>[^<]+<\/title>/.test(text)) errors.push(`${url} → page has no title`);
    const root = text.indexOf('<div id="root">');
    const body = root >= 0 ? text.slice(root).replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ") : "";
    if (body.trim().length < 300) errors.push(`${url} → page body is empty`);
    for (const m of text.matchAll(/(?:src|href)="(\/project\/[^"]+\.(?:js|css)(?:\?[^"]*)?)"/g)) assets.add(m[1]);
  }
}
await Promise.all(Array.from({ length: 6 }, worker));

for (const a of assets) {
  const { status, text } = await get(BASE + a);
  if (status !== 200 || text.length < 100) errors.push(`${BASE + a} → HTTP ${status} (site code/styles not loading)`);
}

if (errors.length) {
  console.error(`\n✗ check-live: ${errors.length} problem(s) on ${BASE}\n`);
  for (const e of errors) console.error("  • " + e);
  process.exit(1);
}
console.log(`check-live: ${urls.length} pages and ${assets.size} assets on ${BASE} all OK ✓`);
