# v42 FOUNDATION — QA

Date: 2026-08-27

## Automated checks — PASS
- 45 HTML files parsed.
- 36 sitemap URLs resolve to files in the package.
- Zero broken internal file references detected.
- All JSON-LD blocks parse as valid JSON.
- No duplicate indexable v42 titles/descriptions detected in the generated page set.
- Reciprocal Arabic/English hreflang verified for home, 8 branches, 6 service pages, FAQ and Contact.
- Home contains all 8 branch links in static HTML.
- Home contains all 6 service links in static HTML.
- `/api/reviews-summary` and other frontend fetch calls are absent from `site.js`.
- Hero preload points to KH5 and matches the hero source set.
- Branch phone / WhatsApp / Google Maps values match the branch source used for v41.
- No API-key / client-secret / refresh-token / private-key patterns detected in text assets.
- `site.js` and `branch.js` pass `node --check` syntax validation.

## Visual checks — PASS
Checked representative layouts at:
- Arabic Home — 1440×1100
- Arabic Home — 390×844
- English Home — 1440×1100
- Arabic KH5 branch — 390×844
- Arabic Visa service page — 1440×1000

Verified:
- RTL and LTR layout direction.
- Header/navigation behavior.
- Hero scaling on desktop/mobile.
- Mobile branch typography.
- Phone number direction in RTL.
- Core content remains present as HTML before JavaScript enhancement.

## Still requires live-server QA after owner-approved deployment
- Real production cache/CDN behavior.
- PageSpeed / Core Web Vitals on the live host.
- Search Console crawl/indexing behavior.
- Rich Results / Schema validator against the public URLs.
- Real Google Maps/WhatsApp/call launches on physical mobile devices.
- Production 404 routing behavior (depends on host configuration).
- Google Business API integration once backend approval and endpoint exist.
