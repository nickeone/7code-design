/**
 * Rebuilds every compiled asset from its source, in one deterministic step.
 *
 *   project/*.jsx        → project/compiled/*.js + *.min.js   (babel + terser)
 *   compiled/*.js        → bundle-core.min.js / bundle-routes.min.js
 *   project/bundle.css   → project/bundle.min.css               (clean-css)
 *
 * Usage:
 *   node scripts/build-assets.mjs           write the files
 *   node scripts/build-assets.mjs --check   write nothing, exit 1 if any
 *                                           compiled file is out of date
 *
 * The --check mode is what scripts/check-site.mjs uses to catch an edited
 * .jsx/.css file whose compiled output was never regenerated (the site would
 * otherwise keep serving the old content, or a half-updated bundle).
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { transformAsync } from "@babel/core";
import { minify } from "terser";
import CleanCSS from "clean-css";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PROJECT = join(ROOT, "project");
const COMPILED = join(PROJECT, "compiled");
const CHECK = process.argv.includes("--check");

// Source modules that are compiled one-to-one.
export const MODULES = [
  "icons", "layout", "sections", "heroes", "pages", "tweaks-panel", "app",
  "case-studies", "case-study", "expertise-detail", "blog", "service-detail", "resources",
];

// Order matters: later files use globals defined by earlier ones.
export const BUNDLES = {
  "bundle-core.min.js":   ["icons", "layout", "sections", "heroes", "pages", "tweaks-panel", "app"],
  "bundle-routes.min.js": ["case-studies", "case-study", "expertise-detail", "blog", "service-detail", "resources"],
};

const TERSER_OPTS = { compress: true, mangle: true };

async function compileJsx(name) {
  const src = await readFile(join(PROJECT, name + ".jsx"), "utf8");
  const out = await transformAsync(src, {
    filename: "project/" + name + ".jsx",
    babelrc: false,
    configFile: false,
    plugins: ["@babel/plugin-transform-react-jsx"],
  });
  return out.code + "\n";
}

export async function buildAll() {
  const files = {}; // relative path → expected content
  const js = {};
  for (const m of MODULES) {
    js[m] = await compileJsx(m);
    files["project/compiled/" + m + ".js"] = js[m];
    files["project/compiled/" + m + ".min.js"] = (await minify(js[m], TERSER_OPTS)).code;
  }
  // bundle-core: the per-module .min.js files joined, each followed by "\n".
  // bundle-routes: one terser pass over the route modules' .js files.
  // (Same recipe as the bundles committed on main.)
  files["project/compiled/bundle-core.min.js"] = BUNDLES["bundle-core.min.js"]
    .map(p => files["project/compiled/" + p + ".min.js"] + "\n").join("");
  files["project/compiled/bundle-routes.min.js"] =
    (await minify(BUNDLES["bundle-routes.min.js"].map(p => js[p]).join(""), TERSER_OPTS)).code;
  const css = await readFile(join(PROJECT, "bundle.css"), "utf8");
  const cssOut = new CleanCSS().minify(css);
  if (cssOut.errors.length) throw new Error("CSS errors in project/bundle.css:\n" + cssOut.errors.join("\n"));
  files["project/bundle.min.css"] = cssOut.styles;
  return files;
}

export async function main() {
  let files;
  try {
    files = await buildAll();
  } catch (err) {
    console.error("✗ build-assets: a source file could not be compiled.\n");
    console.error("  " + (err.message || err).split("\n").join("\n  "));
    console.error("\n  This usually means a missing comma, quote or bracket in the file named above.");
    process.exit(1);
  }

  const stale = [];
  for (const [rel, content] of Object.entries(files)) {
    let current = null;
    try { current = await readFile(join(ROOT, rel), "utf8"); } catch {}
    if (current === content) continue;
    if (CHECK) stale.push(rel);
    else { await writeFile(join(ROOT, rel), content); console.log("  ✓ wrote " + rel); }
  }

  if (CHECK) {
    if (stale.length) {
      console.error("✗ build-assets --check: compiled files are out of date:");
      for (const s of stale) console.error("    " + s);
      console.error("\n  Fix: run `npm run build` and commit the result.");
      process.exit(1);
    }
    console.log("build-assets --check: compiled files match their sources ✓");
  } else {
    console.log("build-assets: done.");
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
