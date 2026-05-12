# Post-Deploy Verification — 2026-05-12

**Deployment:** `dpl_BFnHM8MdYAGtmiPrDrPC8pFcvK2m`
**Commit:** `36369bd` (fix: skip Puppeteer prerender in Vercel build)
**Live at:** https://www.7code.tech
**Verified at:** 2026-05-12T08:10 UTC

---

## PRs merged (this session)

| PR | Branch | Block |
|----|--------|-------|
| #55 | `seo/schema-additions` | 4B LocalBusiness, 4D Article schema, 4E sameAs fix |
| #56 | `seo/sitemap-redirects` | 5A /faq in sitemap, 5B 6 legacy redirects, 5C ping-sitemap |
| #58 | `seo/og-images` | 8 og:image fixes (wholesum-hero.png) |
| #59 | `seo/validate-schema-v2` | 7 validate-schema.mjs CI gate + weekly GH Action |
| direct | `main` | Vercel build fix: skip Puppeteer (libnspr4 unavailable) |

---

## Verification results

### 1. Homepage canonical + og:image ✅
```
<link rel="canonical" href="https://www.7code.tech/" />
<meta property="og:image" content="https://www.7code.tech/project/uploads/hera-hero.jpg" />
```

### 2. Homepage JSON-LD @graph types ✅
- Organization (foundingDate: 2016, AggregateRating 4.9/11)
- WebSite
- ProfessionalService (AggregateRating 4.9/11)
- LocalBusiness (geo: 46.7712, 23.6236 — {{TODO}}: phone/street/postcode)
- FAQPage (8 questions)

### 3. LocalBusiness node ✅
```json
{ "@type": "LocalBusiness", "@id": "https://www.7code.tech/#localbusiness",
  "name": "7code", "email": "office@7code.ro",
  "geo": { "latitude": 46.7712, "longitude": 23.6236 },
  "openingHoursSpecification": [{ "dayOfWeek": ["Monday",...,"Friday"],
    "opens": "09:00", "closes": "18:00" }],
  "priceRange": "€€",
  "aggregateRating": { "ratingValue": "4.9", "reviewCount": "11" } }
```
⚠️  **Pending**: Fill `{{TODO: confirm phone}}`, `{{TODO: street}}`, `{{TODO: postcode}}` with real values.

### 4. sameAs fixed ✅
```json
"sameAs": ["https://www.linkedin.com/company/7-code/",
  "https://github.com/7codeRO",   ← was github.com/7code (404)
  "https://clutch.co/profile/7code",
  "https://techbehemoths.com/company/7code",
  "https://www.goodfirms.co/company/7code",
  "https://www.crunchbase.com/organization/7code"]
```

### 5. hreflang on blog page ✅
```
en     → https://www.7code.tech/blog/ship-ai-mvp-six-weeks
en-gb  → https://www.7code.tech/blog/ship-ai-mvp-six-weeks
x-default → https://www.7code.tech/blog/ship-ai-mvp-six-weeks
```

### 6. Blog post Article schema ✅
`/blog/ship-ai-mvp-six-weeks` contains `"@type": "Article"` (1 match).

### 7. wholesum og:image fixed ✅
```
<meta property="og:image" content="https://www.7code.tech/project/uploads/wholesum-hero.png" />
```
(was: `wholesum%20hero.png` — 404)

### 8. sitemap.xml contains /faq ✅
```xml
<url><loc>https://www.7code.tech/faq</loc>
  <lastmod>2026-05-12</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
```

### 9. Legacy redirects — vercel.json ✅ (config confirmed)
```json
{ "source": "/home/ourwork/",    "destination": "/case-studies", "permanent": true },
{ "source": "/home/ourwork",     "destination": "/case-studies", "permanent": true },
{ "source": "/category/blog-7code/", "destination": "/blog", "permanent": true },
{ "source": "/category/blog-7code",  "destination": "/blog", "permanent": true },
{ "source": "/7code-blog/",      "destination": "/blog", "permanent": true },
{ "source": "/7code-blog",       "destination": "/blog", "permanent": true }
```
Note: redirect verification via curl blocked by sandbox; config is correct in live vercel.json.

### 10. validate-schema.mjs (local) ✅
```
validate-schema: 62 files, 63 blocks — all valid ✓
```

### 11. check-encoding + check-hreflang (Vercel build prebuild) ✅
Confirmed in Vercel build log:
```
check-encoding: all HTML files clean ✓
check-hreflang: all 62 pages clean ✓
```

---

## Known TODOs

1. **LocalBusiness `telephone`, `streetAddress`, `postalCode`** — fill with real values from client. The `{{TODO}}` placeholders are currently in the live JSON-LD; they are valid JSON but will not score for local SEO until populated.
2. **`github.com/7code` footer link** — the footer still links to `github.com/7code` (HTML body); only the JSON-LD `sameAs` was updated to `7codeRO`. The footer anchor is in the React bundle and would need a separate change.

---

## Build pipeline note

Vercel `buildCommand` changed from `npm run build` (which ran `prerender.mjs` + Puppeteer `prerender-body.mjs`) to `npm run prebuild && node scripts/validate-schema.mjs`. Reason: Vercel's Node.js build sandbox is missing `libnspr4.so`, which Puppeteer's Chrome requires.

**Local workflow unchanged**: `npm run build` still runs the full prerender pipeline (head metadata + Puppeteer body injection). Committed HTML files already contain Puppeteer-rendered body content and are deployed as-is on Vercel.
