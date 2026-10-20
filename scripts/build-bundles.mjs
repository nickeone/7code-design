// Kept for existing docs and habits: the rebuild now lives in build-assets.mjs,
// which check-site.mjs also uses to detect stale compiled files.
//
// Usage: node scripts/build-bundles.mjs   (same as: npm run build:assets)
// Remember to bump the ?v= cache-bust with scripts/bump-bundle-version.mjs.
import { main } from "./build-assets.mjs";
await main();
