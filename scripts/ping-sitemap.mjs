/**
 * Pings Google and Bing with the sitemap URL after deploy.
 * Usage:  node scripts/ping-sitemap.mjs
 */

const SITEMAP = "https://www.7code.tech/sitemap.xml";

const targets = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
];

for (const url of targets) {
  try {
    const r = await fetch(url);
    console.log(`${r.status} ${url}`);
  } catch (err) {
    console.error(`FAIL ${url}  ${err.message}`);
  }
}
