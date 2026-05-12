# SEO Stack Discovery — 7code.tech

_Generated: 2026-05-12_

## Framework & Version

| Property | Value |
|---|---|
| Framework | None (vanilla static HTML) |
| Build tooling | Custom Node.js scripts (`scripts/prerender.mjs`, `@babel/cli`, `clean-css-cli`, `terser`) |
| Runtime JS | React 18 (CDN-style, compiled to `project/compiled/`) |
| Deploy target | **Vercel** (static, no serverless functions) |

## Routing Strategy

**Hybrid: pre-rendered static HTML + client-side hash routing SPA fallback**

### How it works

1. `scripts/prerender.mjs` reads `index.html` as a template and generates a static `.html` file for every route (e.g. `contact.html` → served as `/contact` due to `cleanUrls: true`).
2. Vercel routes static files first. `contact.html` is served at `/contact` before any rewrite fires.
3. For any path without a matching file, `vercel.json` has a catchall rewrite: `/(.*) → /index.html`.
4. `index.html` contains a **path→hash bootstrap script** (lines 192-199) that rewrites the browser URL from `/foo` to `/#/foo` so the React SPA (which uses `useHashRoute`) can pick up the route.
5. The React app (`project/layout.jsx:useHashRoute`) reads `window.location.hash.slice(1) || window.location.pathname` — hash first, pathname as fallback.
6. Pre-rendered pages (non-homepage) do **not** include the bootstrap script (stripped by `prerender.mjs`), so React on those pages falls back to `pathname`.

### Route inventory

All routes have matching `.html` files (Vercel `cleanUrls` strips the extension):

| URL path | File |
|---|---|
| `/` | `index.html` |
| `/about` | `about.html` |
| `/process` | `process.html` |
| `/contact` | `contact.html` |
| `/case-studies` | `case-studies.html` |
| `/expertise` | `expertise.html` |
| `/blog` | `blog.html` |
| `/faq` | `faq.html` |
| `/ai-mvp-development` | `ai-mvp-development.html` |
| `/ai-development-agency-uk` | `ai-development-agency-uk.html` |
| `/service/*` | `service/*.html` (7 pages) |
| `/expertise/*` | `expertise/*.html` (6 pages) |
| `/case-study/*` | `case-study/*.html` (10 pages) |
| `/blog/*` | `blog/*.html` (27 posts) |
| `/compare/*` | `compare/*.html` (1 page) |

### Known hash routing remnant

`index.html` (homepage) pre-rendered HTML contains two hero CTA links that still use hash syntax:
- `href="/#/contact"` → should be `/contact`
- `href="/#/process"` → should be `/process`

The React `pages.jsx` already uses clean paths (`/contact`, `/process`). The hash links are only visible to crawlers reading the pre-rendered HTML of the homepage before JS executes.

**⚠️ History note**: PRs #43–#47 attempted and then reverted a full hash→pathname migration in the React layer. The root cause was that `useHashRoute` listened only to `hashchange` events; changing to `popstate`/`pathname` caused blank-page regressions. The safe fix is: (a) change the two static HTML links above, and (b) leave the React routing layer untouched.

## Where `<head>` Metadata Is Set

| Layer | Mechanism |
|---|---|
| Build time | `scripts/prerender.mjs` injects title, description, canonical, OG, Twitter Card, and JSON-LD per route by string-replacing known patterns in `index.html` template |
| Per-page source of truth | Arrays inside `prerender.mjs` (`MAIN_PAGES`, `SERVICES`, `EXPERTISE`, `CASES`, `BLOG_POSTS`) |
| React (runtime) | `pages.jsx` — each page component calls a `setPageMeta()` helper (if present) or injects a `<script type="application/ld+json">` tag client-side |

No `next/head`, `react-helmet`, or `@vueuse/head` — metadata is written directly into the static HTML template.

## robots.txt

**Location**: `public/robots.txt` does not exist. The live file is `robots.txt` at repo root.

**Current state** (minimal):
```
User-agent: *
Allow: /

Sitemap: https://www.7code.tech/sitemap.xml
```

Missing: `Disallow` rules for `/api/` and `/admin/`, and explicit `Allow` entries for AI bots (GPTBot, ClaudeBot, PerplexityBot, etc.).

There is also a `project/robots.txt` file (inside the project directory) — this is served at `/project/robots.txt` which is irrelevant; the canonical one is at root.

## sitemap.xml

**Location**: `sitemap.xml` at repo root (static file, committed manually).

**Current state**: Manually maintained. Contains ~50 URLs with `<lastmod>`, `<changefreq>`, and `<priority>`. Does not include hash URLs. Does not dynamically pick up new blog posts unless `prerender.mjs` is re-run and `sitemap.xml` is updated.

**Missing**: Auto-generation from route map, automated sitemap ping to Google/Bing on deploy.

## Deploy Target

**Vercel** — static site, no SSR/serverless. Config in `vercel.json`:
- `cleanUrls: true` — `.html` extension stripped from URLs
- `outputDirectory: "."` — serves repo root
- `buildCommand: null` — no build step (pre-built HTML is committed)
- Cache headers: 1-year immutable on `/project/compiled/` and `/project/assets/`
- One existing redirect: `/service/product-strategy` → `/service/ai-product-engineering`
- Catchall rewrite: `/(.*) → /index.html`

## SSR / SSG Mode

**SSG-equivalent via `prerender.mjs`**: every route has a pre-rendered `.html` file committed to the repo. Vercel serves it as a static file — no server-side rendering at request time. Initial HTML contains real text content for crawlers; React hydrates on top.

## Analytics & Verification

- **GA4**: `G-109V5ZWVD8` in `index.html`; `G-KFNLGMZZQG` on some sub-pages (duplicate — should be consolidated)
- **Google Search Console**: verification meta tag `XqL7A8xsWljdsipwo69h7ZBfFhXhy9QVUlPhCfZG61A` in `index.html`
- **Microsoft Clarity**: tag `resfqs6oce`
- **Vercel Analytics + Speed Insights**: injected via `/_vercel/insights/script.js`

## Open Issues

| Priority | Issue | Fix |
|---|---|---|
| High | Two hero CTA links in `index.html` use `/#/contact` / `/#/process` | Change to `/contact` / `/process` in static HTML |
| High | Legacy WordPress URLs indexed (return empty) | Add 301 redirects in `vercel.json` |
| Medium | `robots.txt` missing AI bot allowlist | Update root `robots.txt` |
| Medium | No automated sitemap generation | Extend `prerender.mjs` to write `sitemap.xml` |
| Low | Duplicate GA4 tag on some sub-pages | Consolidate to single tag ID |
| Low | `foundingDate: "2019"` in JSON-LD vs. "2016" in brand context | Verify and correct |
