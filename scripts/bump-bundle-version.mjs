// Bumps the ?v= cache-bust for bundle-core / bundle-routes in the prerender
// template (index.html) and the hand-maintained shells that prerender.mjs does
// not generate (faq, privacy-policy, terms-and-conditions). Bundles are served
// with a 1-year immutable Cache-Control, so every bundle change needs a bump.
//
// Usage: node scripts/bump-bundle-version.mjs core|routes|both
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const which = process.argv[2] || "both";
const FILES = ["index.html", "faq.html", "privacy-policy.html", "terms-and-conditions.html"];
const names = which === "both" ? ["core", "routes"] : [which];

for (const name of names) {
  const re = new RegExp(`bundle-${name}\\.min\\.js\\?v=(\\d+)`, "g");
  let max = 0;
  for (const f of FILES) for (const m of fs.readFileSync(path.join(ROOT, f), "utf8").matchAll(re)) max = Math.max(max, +m[1]);
  const next = max + 1;
  for (const f of FILES) {
    const p = path.join(ROOT, f);
    fs.writeFileSync(p, fs.readFileSync(p, "utf8").replace(re, `bundle-${name}.min.js?v=${next}`));
  }
  console.log(`bundle-${name}: v=${next}`);
}
