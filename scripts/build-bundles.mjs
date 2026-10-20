// Rebuilds project/compiled/* from the JSX sources.
//
// Reproduces the committed bundles byte-for-byte (verified on main, Oct 2026):
//   1. babel  --plugins @babel/plugin-transform-react-jsx  project/<f>.jsx -> compiled/<f>.js
//   2. terser -c -m  compiled/<f>.js -> compiled/<f>.min.js
//   3. bundle-core.min.js   = core .min.js files joined with "\n" (+ trailing "\n")
//   4. bundle-routes.min.js = terser -c -m over the route .js files in one pass
//
// Usage: node scripts/build-bundles.mjs
// Remember to bump the ?v= cache-bust in index.html (and the hand-maintained
// faq/privacy/terms shells) after changing a bundle, then run `npm run build`.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "project/compiled");
const BIN = path.join(ROOT, "node_modules/.bin");

const CORE = ["icons", "layout", "sections", "heroes", "pages", "tweaks-panel", "app"];
const ROUTES = ["case-studies", "case-study", "expertise-detail", "blog", "service-detail", "resources"];

function run(bin, args) {
  execFileSync(path.join(BIN, bin), args, { cwd: ROOT, stdio: "inherit" });
}

for (const f of [...CORE, ...ROUTES]) {
  run("babel", ["--plugins", "@babel/plugin-transform-react-jsx", `project/${f}.jsx`, "-o", `project/compiled/${f}.js`]);
  run("terser", [`project/compiled/${f}.js`, "-c", "-m", "-o", `project/compiled/${f}.min.js`]);
  console.log("  ✓", f);
}

const core = CORE.map(f => fs.readFileSync(path.join(OUT, f + ".min.js"), "utf8") + "\n").join("");
fs.writeFileSync(path.join(OUT, "bundle-core.min.js"), core);
console.log("  ✓ bundle-core.min.js");

run("terser", [...ROUTES.map(f => `project/compiled/${f}.js`), "-c", "-m", "-o", "project/compiled/bundle-routes.min.js"]);
console.log("  ✓ bundle-routes.min.js");
