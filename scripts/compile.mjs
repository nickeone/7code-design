// Compiles JSX source files to plain JS (babel) then minifies (terser),
// then concatenates into bundle-core.min.js and bundle-routes.min.js.
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PROJ = path.join(ROOT, "project");
const COMPILED = path.join(PROJ, "compiled");
const BABEL = path.join(ROOT, "node_modules/.bin/babel");
const TERSER = path.join(ROOT, "node_modules/.bin/terser");
const BABEL_OPTS = "--plugins=@babel/plugin-transform-react-jsx --out-dir=" + COMPILED;

const CORE_FILES = ["icons", "layout", "heroes", "sections", "pages", "app"];
const ROUTES_FILES = ["case-studies", "case-study", "expertise-detail", "blog", "service-detail", "resources"];

function compile(name) {
  const src = path.join(PROJ, name + ".jsx");
  const out = path.join(COMPILED, name + ".js");
  const min = path.join(COMPILED, name + ".min.js");
  console.log(`  babel  ${name}.jsx`);
  execSync(`"${BABEL}" "${src}" ${BABEL_OPTS} --filename=${name}.jsx`, { cwd: ROOT });
  // babel writes to compiled/<name>.jsx.js if we pass --filename, so move it:
  const babelOut = path.join(COMPILED, name + ".jsx");
  if (fs.existsSync(babelOut)) fs.renameSync(babelOut, out);
  console.log(`  terser ${name}.js`);
  execSync(`"${TERSER}" "${out}" --compress --mangle -o "${min}"`);
}

function bundle(files, outName) {
  const content = files
    .map(n => fs.readFileSync(path.join(COMPILED, n + ".min.js"), "utf8"))
    .join("\n");
  fs.writeFileSync(path.join(COMPILED, outName), content);
  console.log(`  → wrote ${outName} (${Math.round(content.length / 1024)}kB)`);
}

console.log("\nCompiling CORE:");
for (const f of CORE_FILES) compile(f);

console.log("\nCompiling ROUTES:");
for (const f of ROUTES_FILES) compile(f);

console.log("\nBundling:");
bundle(CORE_FILES, "bundle-core.min.js");
bundle(ROUTES_FILES, "bundle-routes.min.js");

console.log("\nDone.");
