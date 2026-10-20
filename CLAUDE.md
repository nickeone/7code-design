# 7code.tech website — rules for Claude

The people adding content here (Nicu, Daniela) are not developers. They paste
an article or case study and expect it on the site, previewed first, with
nothing else broken. Follow this file exactly.

## How the site works (short)

- Static site on Vercel. `main` is production: every push to `main` deploys.
- Content lives in source files, then gets compiled and pre-rendered:
  - Blog posts: `POSTS` array in `project/blog.jsx`
  - Case studies: `CASES` in `project/case-study.jsx` (+ listing in `project/case-studies.jsx`)
  - Resources: `RESOURCES_DATA` in `project/resources.jsx`
- Never edit files in `project/compiled/`, `project/bundle.min.css`, or the
  generated `.html` pages by hand. `npm run build` regenerates them.

## Safety rails (do not remove or weaken)

- `npm run verify` (= `scripts/check-site.mjs` + schema/encoding/hreflang
  checks) is Vercel's `buildCommand`. If it fails, Vercel refuses the deploy
  and the live site stays on the last good version.
- `.github/workflows/site-checks.yml` runs the same checks on every push/PR.
- `.github/workflows/live-check.yml` visits every live page after each
  production deploy and every morning.
- Never disable, skip or loosen a check to get a deploy through. Fix the
  content instead. If a check is genuinely wrong, explain why to the user and
  ask before changing it.

## Adding a blog post — checklist

1. Split pasted text into separate articles by their titles. One article =
   one commit.
2. Add an entry to `POSTS` in `project/blog.jsx`, using the existing block
   types only: `lead`, `h2`, `p`, `p-html`, `bullets`, `table`, `callout`,
   `related-guide`. Keep the author's wording; don't rewrite it.
   - Authors (copy exactly):
     - `{ name: "Daniela Cazac", role: "CMO", initial: "D", photo: "/project/uploads/authors/daniela-cazac.jpg" }`
     - `{ name: "Nicu Mardari", role: "CEO", initial: "N", photo: "/project/uploads/authors/nicu-mardari.jpg" }`
   - `cat` is one of: Strategy, Engineering, Case Study, Operations.
   - `cover` is one of: ink, cyan, finance, energy, ops, health, defence.
     `illus` is one of: radar, blueprint, launch, circuit, gears, globe, skyline.
   - `[Booking link]` → link to `/contact`.
3. Add the same slug to `BLOG_POSTS` in `scripts/prerender.mjs` (title,
   description, `datePublished`), to `ROUTES` in `scripts/prerender-body.mjs`,
   and to both `sitemap.xml` and `project/sitemap.xml`. In `sitemap.xml` use
   `<loc>` + `<lastmod>` only (no `<priority>`/`<changefreq>`), with
   `lastmod` on or after `datePublished`. No FAQPage JSON-LD (retired).
4. Bump the bundle cache-bust: `node scripts/bump-bundle-version.mjs routes`
   (or `core` / `both`, depending on which bundle changed).
5. `npm run build` — compiles (`scripts/build-assets.mjs`), pre-renders, then
   runs `npm run verify`. Before building, merge the latest `origin/main`:
   other sessions publish too.
6. Preview: serve the repo locally, screenshot each new page (desktop and
   mobile) and send the screenshots to the user. **Do not push to `main`
   until the user has seen the preview and said to publish.**
7. Placeholders like `[€X to €Y]`, `[N weeks]`, `TODO` make the checks fail
   on purpose. Ask the user for the real text; never invent prices, numbers,
   client names or results.

## After publishing

- Tell the user the live URL and the commit hash for each article, so a single
  article can be fixed or reverted on its own (`git revert <hash>`).
