# Al Khayam Studio Website — v42 FOUNDATION

**Build date:** 2026-08-27
**Source:** v41 LUXURY RATINGS (2026-08-25)
**Deployment:** upload the contents of this folder directly to the web root. Do not wrap them in an extra folder.

## v42 — Foundation rebuild

- Kept the static HTML/CSS/Vanilla JS architecture; no framework or backend dependency was introduced.
- Fixed the KH5 hero preload mismatch.
- Added real English SEO URLs under `/en/` with canonical + reciprocal `hreflang`.
- Added English branch pages for all 8 branches.
- Rebuilt the home page so core content and branch links exist in HTML without JavaScript.
- JavaScript now enhances only: mobile navigation, reveal animation, open/closed status, nearest-branch geolocation.
- Core content stays visible and usable when JavaScript is disabled.
- Removed the automatic `/api/reviews-summary` request until the backend/API is actually enabled.
- Added six useful service landing pages in Arabic and English.
- Added dedicated FAQ pages in Arabic and English; the home page now shows only a short FAQ preview.
- Rebuilt branch pages with unique location copy based only on confirmed branch address/street/district data.
- Added `GeoCoordinates` and opening-hours structured data to branch schema.
- Rebuilt `sitemap.xml` with Arabic/English alternates.
- Added safe cache/compression rules in `.htaccess` under `IfModule` guards.
- Added a custom 404 page.
- Replaced accumulated v40/v41 CSS overrides with a single consolidated v42 design system in `assets/css/site.css`.
- Preserved existing images, branding assets, legal pages and legacy branch redirects.
- The general contact number remains `053 277 1684` as confirmed by the owner on 2026-08-27.
- Website services are treated as requestable from all 8 branches as confirmed by the owner on 2026-08-27; specialised preparation may still be handled centrally.

## API status

The frontend no longer calls `/api/reviews-summary` while the Google Business API/backend is unavailable. Static rating/review fallbacks remain in the pages. Re-enable live data only when an approved backend endpoint exists; do not place secrets in frontend files.

## Technical principle

This site intentionally remains static-first. For this business, static HTML with small progressive-enhancement JavaScript is the preferred foundation: crawlable, fast, low attack surface, easy to host, and independent of a JavaScript framework.

## Do not use

- v37 is broken and prohibited.
- Do not publish any version without owner approval.
- Do not add secrets/API keys to frontend files.
