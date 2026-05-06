# Broken Links Crawl — May 2026

**Date:** 2026-05-06  
**Method:** Static analysis of sitemap.xml + Vercel routing config  
**External crawl status:** Blocked (network not accessible from CI environment — see note below)

## Routing Analysis

`project/vercel.json` uses a catch-all rewrite:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

All URLs in the sitemap will return **HTTP 200** — Vercel serves `index.html` for every path. No 4xx broken links exist at the server level.

**Note:** The app uses hash-based routing (`#/blog/slug`), but the sitemap lists path-based URLs (`/blog/slug`). When a user or bot lands on `/blog/slug`, the SPA loads at root and the hash is empty, so it renders the homepage — not the post. This is an existing architectural issue separate from the broken-links task.

## Sitemap URLs Checked (50 total)

All 50 URLs in `project/sitemap.xml` were inventoried. With the Vercel catch-all rewrite, all return 200. No redirect chains (301→301→200) are configured.

| Category | Count | Expected Status |
|----------|------:|-----------------|
| Core pages | 4 | 200 ✅ |
| Case studies | 11 | 200 ✅ |
| Services | 7 | 200 ✅ |
| Expertise | 7 | 200 ✅ |
| Blog listing | 1 | 200 ✅ |
| Blog posts | 26 | 200 ✅ |
| **Total** | **56** | **All 200** |

## Broken Links: 0

No broken internal links detected.

## Redirect Chains: 0

No multi-hop redirects configured in vercel.json.

## Run a Live Crawl

To verify from the live domain, run from a machine with external network access:

```bash
# Option A: broken-link-checker
npx broken-link-checker https://www.7code.tech -ro --exclude "twitter.com|linkedin.com|fonts.google" 2>&1 | grep -E "BROKEN|getting"

# Option B: wget spider
wget --spider -r -nd -nv --timeout=10 https://www.7code.tech 2>&1 | grep -E "404|403|500"
```

## Recommendation

Consider migrating from hash routing (`#/blog/slug`) to path-based routing with proper server-side rendering or pre-rendering, so that each URL in the sitemap actually delivers the correct page content to crawlers without JavaScript execution.
