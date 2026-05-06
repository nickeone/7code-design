# PageSpeed Baseline — May 2026

**Status:** Pending — external network access required to run.

Run from a machine with access to the live site:

```bash
# Option A: Lighthouse CLI (recommended)
npx lighthouse https://www.7code.tech --output json --output-path ./docs/seo/lh-homepage.json --only-categories=performance,accessibility,seo
npx lighthouse https://www.7code.tech/service/ai-automation --output json --output-path ./docs/seo/lh-ai-automation.json --only-categories=performance,accessibility,seo
npx lighthouse https://www.7code.tech/blog/ship-ai-mvp-six-weeks --output json --output-path ./docs/seo/lh-blog-mvp.json --only-categories=performance,accessibility,seo

# Option B: PageSpeed Insights API (replace YOUR_KEY)
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.7code.tech&strategy=mobile&key=YOUR_KEY"
```

## Baseline Table (populate after running)

| Page | Mobile Score | Desktop Score | LCP | CLS | INP | Top Opportunity |
|------|-------------|--------------|-----|-----|-----|-----------------|
| / (homepage) | — | — | — | — | — | — |
| /service/ai-automation | — | — | — | — | — | — |
| /blog/ship-ai-mvp-six-weeks | — | — | — | — | — | — |

## Known Risk Areas (Angular SPA → React SPA)

This is a client-side rendered React SPA served via Vercel with a catch-all rewrite to `index.html`. Key risks:

- **LCP**: Hero section image/text rendered client-side — no SSR. LCP is likely delayed until React hydrates.
- **FCP**: First paint shows blank/loading state until JS bundle executes.
- **CLS**: Dynamic content injection (hero sections, case study images) may cause layout shifts.
- **Bundle size**: All page data (26 blog posts, 6 services, 10 case studies) is loaded in a single JS file — no code splitting.

## Recommended Fixes (before next audit)

1. Add `<link rel="preload">` for hero images
2. Inline critical CSS for above-the-fold content
3. Add `loading="lazy"` to below-fold images
4. Consider static pre-rendering for key landing pages (homepage, service pages)
