/**
 * Puppeteer body-injection pass.
 *
 * Assumes scripts/prerender.mjs has already generated all per-route HTML files
 * with correct <head> metadata and an empty <div id="root"></div>.
 *
 * This script:
 *   1. Starts a local http-server on a free port
 *   2. Visits each route with headless Chromium
 *   3. Waits for React to fully render #root (non-empty, no loading spinners)
 *   4. Extracts the rendered innerHTML
 *   5. Injects it into the on-disk HTML file so crawlers see real content
 *
 * Routes served:  all routes defined in scripts/prerender.mjs (must stay in sync).
 * Usage:  node scripts/prerender-body.mjs
 */

import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createReadStream, statSync } from "node:fs";
import { extname } from "node:path";
import puppeteer from "puppeteer";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// ── route list (keep in sync with prerender.mjs) ─────────────────────────────

const ROUTES = [
  "/about",
  "/process",
  "/contact",
  "/faq",
  "/case-studies",
  "/expertise",
  "/blog",
  "/ai-mvp-development",
  "/ai-development-agency-uk",
  "/compare/agency-vs-freelancer",
  "/service/ai-product-engineering",
  "/service/system-integrations",
  "/service/ai-automation",
  "/service/cloud-agentic-infra",
  "/service/ai-outstaffing",
  "/service/product-strategy",
  "/service/llm-agent-development",
  "/expertise/healthcare",
  "/expertise/finance",
  "/expertise/energy",
  "/expertise/defence",
  "/expertise/hr",
  "/expertise/operations",
  "/case-study/wholesum",
  "/case-study/daily8",
  "/case-study/revote",
  "/case-study/g42-fleet",
  "/case-study/cloud-of-legacy",
  "/case-study/lidl-road-safety",
  "/case-study/hera",
  "/case-study/melsonic",
  "/case-study/drum-bun",
  "/case-study/numerize",
  "/blog/ai-discovery-mission-de-risk-ai-products",
  "/blog/ship-ai-mvp-six-weeks",
  "/blog/ai-engineering-pricing-fixed-vs-time-materials",
  "/blog/ai-agents-manufacturing-operations",
  "/blog/ai-native-automation-crm-erp-iot",
  "/blog/adrenaline-ai-debugger-case-study",
  "/blog/senior-engineers-ai-leverage",
  "/blog/ai-project-handover",
  "/blog/running-ai-engineering-pods-across-continents",
  "/blog/switch-ai-engineering-partner",
  "/blog/ai-engineering-outstaffing",
  "/blog/lessons-from-london-tech-week-ai",
  "/blog/logistics-tech-tailored-solutions",
  "/blog/changing-software-service-provider",
  "/blog/aws-beanstalk-to-ecs-migration",
  "/blog/aws-ecs-vs-beanstalk-perspective",
  "/blog/adrenaline-ai-code-debugger",
  "/blog/why-mvp-first",
  "/blog/seamless-software-project-handover",
  "/blog/cms-wordpress-vs-custom-development",
  "/blog/osai-revolutionising-ai-interactions",
  "/blog/low-code-no-code-vs-custom-development",
  "/blog/reducing-costs-nearshoring-outstaffing",
  "/blog/migrating-users-auth0-python",
  "/blog/fixed-price-vs-time-and-materials",
  "/blog/7code-discovery-mission",
  "/blog/how-to-hire-nearshore-ai-engineers",
  "/blog/top-nearshore-ai-development-agencies-europe",
];

// ── minimal static file server ────────────────────────────────────────────────

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js":   "application/javascript",
  ".css":  "text/css",
  ".json": "application/json",
  ".svg":  "image/svg+xml",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2":"font/woff2",
  ".woff": "font/woff",
  ".ico":  "image/x-icon",
  ".xml":  "application/xml",
  ".txt":  "text/plain",
};

function startServer(port) {
  return new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      let urlPath = req.url.split("?")[0];

      // Map clean URLs to .html files (Vercel cleanUrls behaviour)
      let filePath = join(ROOT, urlPath);
      if (!extname(urlPath) || urlPath === "/") {
        const candidates = [
          join(ROOT, urlPath, "index.html"),
          join(ROOT, urlPath.replace(/\/$/, "") + ".html"),
        ];
        const found = candidates.find(c => existsSync(c));
        if (found) {
          filePath = found;
        } else {
          // Fallback to index.html (SPA catchall)
          filePath = join(ROOT, "index.html");
        }
      }

      if (!existsSync(filePath)) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      const ext = extname(filePath).toLowerCase();
      const contentType = MIME[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      createReadStream(filePath).pipe(res);
    });

    server.listen(port, "127.0.0.1", () => resolve(server));
    server.on("error", reject);
  });
}

// ── Puppeteer render + inject ─────────────────────────────────────────────────

async function renderRoute(page, baseUrl, route) {
  await page.goto(baseUrl + route, { waitUntil: "networkidle0", timeout: 30000 });

  // Wait until #root has meaningful content (not just an empty div)
  await page.waitForFunction(
    () => {
      const root = document.getElementById("root");
      return root && root.children.length > 0;
    },
    { timeout: 15000 },
  );

  const rootInnerHTML = await page.$eval("#root", el => el.innerHTML);
  return rootInnerHTML;
}

function injectRoot(html, innerHTML) {
  return html.replace(
    /<div id="root">[\s\S]*?<\/div>(?=\s*<script)/,
    `<div id="root">${innerHTML}</div>`,
  );
}

function routeToFilePath(route) {
  const rel = route.startsWith("/") ? route.slice(1) : route;
  return join(ROOT, rel + ".html");
}

// ── main ──────────────────────────────────────────────────────────────────────

const PORT = 54321;

console.log("Puppeteer body-prerender pass…\n");

let server;
let browser;

try {
  server = await startServer(PORT);
  console.log(`  Server listening on http://127.0.0.1:${PORT}`);

  browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  const page = await browser.newPage();
  // Suppress console noise from the page
  page.on("console", () => {});
  page.on("pageerror", () => {});

  const baseUrl = `http://127.0.0.1:${PORT}`;
  let success = 0;
  let failed = 0;

  for (const route of ROUTES) {
    const filePath = routeToFilePath(route);
    if (!existsSync(filePath)) {
      console.warn(`  SKIP  ${route}  (no HTML file found at ${filePath})`);
      continue;
    }

    try {
      const innerHTML = await renderRoute(page, baseUrl, route);
      const original = await readFile(filePath, "utf8");
      const updated = injectRoot(original, innerHTML);

      if (updated !== original) {
        await writeFile(filePath, updated, "utf8");
        console.log(`  ✓  ${route}`);
        success++;
      } else {
        console.log(`  –  ${route}  (no change)`);
        success++;
      }
    } catch (err) {
      console.error(`  FAIL  ${route}  ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone. ${success} injected, ${failed} failed.`);
  if (failed > 0) process.exit(1);
} finally {
  if (browser) await browser.close();
  if (server) server.close();
}
