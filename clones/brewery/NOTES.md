# Clone notes: Breweries & taprooms (slug: brewery)

Source studied: https://brewerkz.com/ (WordPress + Elementor Pro, child theme). Placeholder brand used in the clone: "Driftwood Brewing Co."

## Extraction
- Rendered with Playwright at 1440px and 390px. Full-page screenshots and computed styles captured to scratchpad (src-brewery/).
- Source fonts: Futura PT (not a free Google Font). Clone uses Jost (closest Google Font).
- Source images, logos and SVG pods are NOT copied. Replaced with inline SVG art, CSS gradients and drawn tiles at the same sizes.

## Section order (desktop, y in px)
1. Top header 0-158: 3px amber top rule, circular amber icon buttons (search left, 5 social/basket right), boxed centred logo (200x45 at y33), centred uppercase nav row at y108 (16px bold, letter-spacing 3px, #5d6486, chevrons).
2. Hero 158-833 (675px): full-bleed photo of cans on timber. Clone: SVG cans on wood slats. Floating "book now" chip right and a pill label at bottom right.
3. Four pillars 833-1463: each 360px column; 200px art sitting on top of a 400px white card with a 2px amber border and scalloped edges. Body 18px #666, centred, lh 27px. Button: amber #fabb3b, 14px bold, letter-spacing 6px, padding 12px 24px, radius 3px, label "Explore".
4. Social grid 1463-2458: H2 40px uppercase #101632, letter-spacing 3px; 4x2 square grid, 1080px wide; blue follow button below.
5. Newsletter 2549-2873: H2 uppercase, outlined email input 340px, amber Subscribe button.
6. Footer copyright line.

## Tokens
- Section background #f1f1f1; surface #fff; body text #666; nav #5d6486; heading #101632; accent #fabb3b.
- Body 18px / 27px, letter-spacing 1px. Display 40px / 45px, nav 16px / 20px, button 14px.

## Behaviour
- Sticky header. Hamburger below 860px with a collapsible menu.
- Reveal-on-scroll on pillar cards (IntersectionObserver, staggered). Respects prefers-reduced-motion.
- Hover: icon buttons lift, pillar art tilts, cans lift, tiles reveal captions, buttons darken and lift.
- Mobile: single-column pillars, 2-column social grid, full-width newsletter form. No horizontal overflow at 390px.

## Known gaps
- Hero, pillar art and social tiles are abstract drawings, not photography.
- No carousels or live Instagram feed; the original footer and cookie/recaptcha widgets are omitted.
- Futura PT is replaced by a metric-tuned Jost fallback (see Fonts). Widths match within 0.1% for the measured strings.

## Fonts

Source families were read from the rendered page and its Typekit kit (use.typekit.net). Sizes are identical at 1440px and 390px except where marked.

| Role | Source family, weight | Size / line-height, letter-spacing, transform, colour | Clone stack and what it loads | Licence status |
|---|---|---|---|---|
| Header nav | futura-pt-bold, 700 | 16px / 20px, 3px, uppercase, #5d6486 | "futura-pt-bold", "Driftwood Futura Bold" (Jost variable woff2, size-adjust 89.21%) | Commercial (Futura PT). Buy via Adobe Fonts or the foundry licence. |
| Card and body copy | futura-pt, 400 | 18px / 24px, 1px, none, #666 | "futura-pt", "Driftwood Futura Regular" (size-adjust 91.74%) | Commercial, as above |
| First card lead line | futura-pt, 500 | 18px / 24px, 1px, none, #666 | "futura-pt", "Driftwood Futura Medium" (size-adjust 87.97%) | Commercial, as above |
| Section heading (H3) | futura-pt-bold, 500 | 40px / 45px desktop; 24px / 32px at 390px; 3px; uppercase; #101632 | "futura-pt-bold", "Driftwood Futura Display Medium" (size-adjust 100.76%) | Commercial, as above |
| Newsletter heading | futura-pt-bold, 700 | 18px / 18px, 3px, uppercase, #5d6486 | Bold fallback | Commercial, as above |
| Buttons | futura-pt-bold, 700 | 14px / 14px, 6px, uppercase, #fff | Bold fallback | Commercial, as above |
| Newsletter line and footer | futura-pt, 400 | 18px / 25.2px (newsletter); 18px / 27px (copyright), 1px, #666 | Regular fallback | Commercial, as above |
| Promo chip, Instagram follow button | Arial (system) | not measured, approximated at 14px and 13px | Arial, unchanged | Not a licensed font |
| Input placeholder | not measured | - | Inherits body stack | - |

Name-first rule: each stack starts with the exact source family name, so the true font is used wherever it is installed or licensed. The fallback loads Jost (SIL Open Font License, Google Fonts). No Typekit kit, no source font files are downloaded, copied or base64-embedded.

Tuning method: the source page was rendered with its own Futura PT, and the same strings were measured there and in the clone. Each size-adjust was solved with letter-spacing counted separately, so the width ratio is 1.000 +/- 0.001 for the measured strings.

Not matched:
- "Veneer Two" is declared in the source CSS but no sampled role uses it.
- "Open Sans" appears in the source's computed font list for one element, not visible in any sampled role. The clone does not use it.

## Visual diff

Method: fresh section screenshots of the original and the clone at 1440px and 390px (scratchpad vd-brewery/). Pairs were read side by side. Round 1 fixes were applied, then pillars were re-checked in round 2.

Fixed in round 1 (and re-checked):
- Header: wider 135px side gutters; icon gap 15px; logo as a navy block with amber border (was white); nav item padding 16px; mobile logo centred with search icon visible.
- Hero: 315px tall on mobile (was 400); right-hand booking badge repositioned (right 30px, 76x84); two slider arrows added; round booking button added beside the floating pill (hidden on mobile).
- Pillars: visible card 324x296 (was 400 tall column); amber top tab and bottom arc now match the original curve; cloud-like white shape behind each image; Explore button 30px from card bottom; section padding 50px top / 90px bottom. Verified: layout and rhythm now match at both widths.
- Pillar copy: the first card's h1 was 500 weight in computed style, but renders visually like the others, so all copy is weight 400.
- Social: award badge row added as neutral placeholders (shield, seal, wordmark); grid widened to 1170px with square tiles; play and multi-photo icons added on the matching tiles; heading-to-grid gap 22px; blue follow button (#0068a0) with Instagram glyph, 14px, 1px tracking.
- Newsletter: input 376px wide with #5d6486 border, 11px gap; title-to-copy 40px.

Still different (open):
- Imagery: every photo slot still uses drawn SVG/gradient art (see Generated photography below).
- Hero slider arrows are visual only; there is no slide logic.
- Mobile social captions are hidden; the original shows no captions.
- Footer: the original's two-line reCAPTCHA notice is replaced by a placeholder disclaimer line.
- Mobile nav is behind a hamburger; the source's mobile nav was not captured.

## Generated photography

Status: blocked. The image tool returned HTTP 429 (quota exhausted, reset after about 2h41m) on 5 of 6 calls. The one image it returned contained readable signage text despite the no-text instruction, so it was discarded. No files were saved to img/. All photo slots (2 hero slides, 4 pillar images, 8 social tiles) still use drawn art.

## Gap fixes

Source: `.claude/skills/fnb-site-gaps/SKILL.md` (nine gaps). Placeholders: domain `https://www.example.com/brewery/`, address "1 Sample Street, Singapore 000000", phone "+65 0000 0000", sample hours, social URLs on example.com, geo at a central-Singapore placeholder point (1.3000, 103.8000).

| # | Gap | Before | After | Placeholders / notes |
|---|---|---|---|---|
| 1 | Image alt text | No `<img>`. Drawn SVG art was `aria-hidden`, tile links had "Post N" labels. | No `<img>` elements. Meaningful drawn art uses `role="img"` with a specific `aria-label` (hero cans, four pillar images). Tile links carry their caption as the label. Badges stay `aria-hidden` as placeholders. | To add alt text on real photos when the image step lands. |
| 2 | Local business structured data | None. | One JSON-LD block (`@graph`: Brewery, Organization, WebSite). Parses. Includes telephone, priceRange, address, geo, openingHoursSpecification, hasMenu, acceptsReservations, potentialAction, sameAs. | `image` and `logo` point to `img/hero.jpg` and `img/logo.png`, which do not exist yet. |
| 3 | Heading structure | No `<h1>`. Pillars had no heading. | One visually hidden `<h1>` ("Driftwood Brewing Co., craft brewery and taproom in Singapore"). Pillars get a hidden `<h2>`. Sections use `<h2>`. | No visible headline in the design. |
| 4 | Title | "Driftwood Brewing Co. \| Taproom and Brewery" (43 chars). | "Craft Brewery and Taproom in Singapore \| Driftwood" (51 chars). | Brand placeholder. |
| 5 | Meta description | "Placeholder brewery and taproom design study." | 150-character sentence on the offer, location and a call to action. | Brand placeholder. |
| 6 | Technical basics | `lang="en"`, viewport only. | `lang="en-SG"`; `robots` meta (`index, follow, max-image-preview:large`); canonical; OG `type/site_name/title/description/url/locale`; `twitter:card` summary_large_image; `robots.txt` and `sitemap.xml` added. | `og:image` omitted because `img/` does not exist yet. Add it once a photo is generated. |
| 7 | Reviews | None. | Three sample quotes, first names only, styled as cards in the clone's surface, amber top border and display fonts. HTML comment marks them as invented. | Mei, Daniel, Priya (sample). |
| 8 | Newsletter | Present; input labelled with `sr-only`. | Form gets `aria-label="Newsletter sign-up"`. Layout unchanged. | None. |
| 9 | Chat / contact button | Round booking icon, desktop only. | Floating round contact button bottom-right (44px, `aria-label`) on all widths. Mobile hero badge moved to bottom-left to avoid overlap. | Link to `https://www.example.com/brewery/contact/`. |

Verification: one `<h1>`; JSON-LD parses; no `<img>` without alt; 1440 and 390 show no horizontal overflow; no console errors or failed requests.
