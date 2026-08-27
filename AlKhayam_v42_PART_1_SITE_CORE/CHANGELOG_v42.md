# v42 FOUNDATION — Changelog

Date: 2026-08-27
Source: `AlKhayam_Studio_Website_v41_LUXURY_RATINGS_2026-08-25.zip`

## Foundation
- Kept static HTML/CSS/Vanilla JS; no framework or backend dependency added.
- Rebuilt core content as crawlable HTML instead of generating branches/services/FAQ with JavaScript.
- JavaScript is now progressive enhancement only: navigation, reveal animation, open/closed status and nearest-branch geolocation.
- Content remains visible and navigable when JavaScript is unavailable.
- Removed the inactive `/api/reviews-summary` network request until a real backend is approved and deployed.
- Consolidated accumulated CSS overrides into one v42 design system.
- Added safe optional Apache cache/compression rules in `.htaccess`.
- Added a custom `404.html`.

## Arabic / English SEO
- Added `/en/` as a separate indexable English home page.
- Added `/en/kh1/` through `/en/kh10/` for all eight branches.
- Added reciprocal `ar-SA` / `en-SA` / `x-default` hreflang on paired pages.
- Updated canonical metadata, Open Graph metadata and sitemap alternates.

## Home / UX
- Fixed the hero preload mismatch; preload now targets the KH5 hero actually used.
- Simplified the main navigation.
- Shortened the home page and reduced card/shadow/gold overload.
- Replaced the automatic review slider with three static review cards.
- Reduced home FAQ to a short preview and moved the fuller FAQ to a dedicated page.
- Preserved KH5 as the current hero image because no replacement asset was supplied.

## Services
Added Arabic and English landing pages for:
- Passport & ID photos
- Visa / Schengen / U.S. visa photos
- Portraits / CV / LinkedIn
- Photo printing / Wood Lamination / Foam Board
- Photo restoration / scanning / background editing
- Corporate / employee / property / project photography

## Branch pages
- Rebuilt all eight Arabic branch pages and added eight English versions.
- Added unique location copy using only confirmed street/district/location data.
- Kept verified Maps, phone, WhatsApp, coordinates, hours and current v41 rating fallback data.
- Added GeoCoordinates and opening-hours structured data.
- Added service links and stronger internal linking between services and branches.
- Refined mobile branch hero typography and fixed RTL phone-number rendering.

## Owner confirmations used in this build
- `053 277 1684` is accepted as the general contact number.
- Website services are requestable from all eight branches; specialised preparation may still be handled centrally and collection timing is branch/order dependent.

## Preserved
- Existing branch images and original branding asset.
- Privacy and Terms body text (not rewritten).
- Existing legal JavaScript/CSS behavior.
- Existing legacy descriptive branch redirect pages.
- v37 remains prohibited.
