// Compiles project/*.jsx (plain global-namespace scripts, JSX syntax only —
// no ESM, no bundler resolution; see IMPLEMENTATION-LOG.md) into
// project/compiled/*.js + *.min.js, then concatenates + minifies the two
// shipped bundles: bundle-core.min.js (loaded synchronously) and
// bundle-routes.min.js (loaded async, gated behind app.jsx's `routesReady`).
//
// This formalizes a previously undocumented manual step (babel + terser were
// installed as devDependencies but no script ran them) — needed here because
// this change adds new .jsx files that must ship in the compiled bundles.
//
// Usage:  node scripts/build-bundles.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as babel from "@babel/core";
import { minify } from "terser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PROJECT = path.join(ROOT, "project");
const OUT = path.join(PROJECT, "compiled");

// Same file → bundle assignment as the previously hand-built output,
// extended with the new files this rebuild adds (booking.jsx, blocks.jsx,
// content-pages.jsx). Order mostly doesn't affect correctness — everything
// here is a top-level `function` declaration (hoisted within the
// concatenated script) — but is kept close to the original for a minimal
// diff against what was there before.
const CORE_FILES = ["icons.jsx", "tweaks-panel.jsx", "layout.jsx", "heroes.jsx", "sections.jsx", "blocks.jsx", "pages.jsx", "app.jsx"];
const ROUTES_FILES = ["case-studies.jsx", "case-study.jsx", "expertise-detail.jsx", "blog.jsx", "service-detail.jsx", "resources.jsx", "booking.jsx", "content-pages.jsx"];

function compileOne(filename) {
  const srcPath = path.join(PROJECT, filename);
  const src = fs.readFileSync(srcPath, "utf8");
  const { code } = babel.transform(src, {
    filename: srcPath,
    plugins: [["@babel/plugin-transform-react-jsx", { pragma: "React.createElement", pragmaFrag: "React.Fragment" }]],
    babelrc: false,
    configFile: false,
    retainLines: false,
  });
  const base = filename.replace(/\.jsx$/, "");
  fs.writeFileSync(path.join(OUT, base + ".js"), code);
  return { base, code };
}

async function minifyOne(base, code) {
  const result = await minify(code, { mangle: true, compress: true });
  fs.writeFileSync(path.join(OUT, base + ".min.js"), result.code);
  return result.code;
}

async function buildBundle(files, bundleName) {
  const compiled = files.map(compileOne);
  const minified = [];
  for (const { base, code } of compiled) {
    minified.push(await minifyOne(base, code));
  }
  const concatenated = minified.join("\n");
  const result = await minify(concatenated, { mangle: true, compress: true });
  fs.writeFileSync(path.join(OUT, bundleName), result.code);
  console.log(`  ${bundleName}  (${files.length} files, ${(result.code.length / 1024).toFixed(0)} KB)`);
}

console.log("Compiling project/*.jsx → project/compiled/ …\n");
await buildBundle(CORE_FILES, "bundle-core.min.js");
await buildBundle(ROUTES_FILES, "bundle-routes.min.js");
console.log("\nDone.");
