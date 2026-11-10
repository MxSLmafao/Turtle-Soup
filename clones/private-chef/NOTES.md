# Design notes: private-chef clone

Source studied: https://www.takeachef.com/en-sg (homepage). Rendered with Playwright at 1440px and 390px.
Source CSS (scratchpad only): frontend.731d43fe64.css, frontend_homepage.b5cffb2e2d.css, g8.ff532faa7b.css.
Extraction: full render succeeded (cookie banner dismissed via DOM for captures). Imagery and logos NOT copied.

## Section order (1440px, y in px)
1. Header 0-80: white, logo left, centre nav (4 links), grey "Login" pill, yellow "Find" pill right.
2. Hero 80-700: left column text (x140, H1 45px Alata/500, 2-line paragraph, yellow pill CTA 153x57),
   right: 3 staggered columns of rounded photo tiles (radius 10px). Bottom strip with review line (y635-700).
3. Intro 780-1744 (grey #f0efef page bg): white rounded card (radius 20px, x75..1365). Heading left, two
   paragraphs in the top row, staggered 4-tile photo collage, centred H2 "How it works".
4. How it works: 3x2 white cards (radius 10px, shadow), yellow CTA card "Find your chef" with white pill.
5. Chef carousel (white, y2685): heading + copy + "See more" link left; portrait photo cards 350x420 with
   name, italic location, rating pill; circular white arrow buttons.
6. Reviews (y3171): white grey-tinted card, big yellow score 4.42, four category stats with yellow
   headings, review carousel of three cards (side cards faded, centre card emphasised).
7. Menus (y4196): H2 centred, three menu tiles (portrait), mosaic of yellow blocks with a yellow CTA card.
8. About (y5840): white rounded card, centred H2 + paragraph, stat tiles (one solid yellow, others outlined
   yellow border), three pillars with uppercase yellow headings.
9. Partners (y7112): centred H2, paragraph, logo row.
10. Destination list and services links (y7654-8214, white).
11. Footer (dark #182427): social circles, contact, three link columns, wordmark, copyright.

## Tokens
- Text #182427; body #212529; muted #6c757d; page grey #f0efef; border #dee2e6; accent #f4c858 (hover #ffd965);
  alt accent #f2ac57; footer bg #182427; footer text grey.
- Fonts: Alata (headings, 400 weight used in headings at 500) and Nunito Sans (body, 400/600/700).
  Both are free Google Fonts.
- H1/H2 45px / 54px line height (desktop), 30px mobile. H3 35px / 42px. Body 16px / 1.5.
- Pills: radius 800px. Cards: radius 10px; intro cards: 20px top radius.
- Container: 75px gutter inside 1440, content 1290px max, column content 1160px.
- Breakpoints observed: 576, 768, 992, 1200, 1400.

## Behaviour
- Header solid white, fixed, 80px tall. Mobile: hamburger, panel drop-down.
- Carousels: horizontal scroll with arrow buttons, scroll-snap.
- Reveal-on-scroll fade/translate for sections (respecting prefers-reduced-motion).
- Hover: pills darken/brighten accent, cards lift shadow, links underline.

## Gaps
- Photography replaced by drawn gradient and SVG "art" tiles at the same aspect ratios.
- Brand, chef names, reviews, stats, copy are all invented placeholders.
- Cookie banner, chat widget and third-party scripts omitted.

## Fonts

Source families (computed styles on the live homepage): **Alata** (headings) and **Nunito Sans** (body, nav, buttons, captions, footer). Both are free Google Fonts under the SIL Open Font License. No commercial or licensed family is used, so no name-first stack or metric tuning is needed.

| Role | Source family | Clone loads | Licence |
|---|---|---|---|
| Nav links | Nunito Sans 700, 16/24 | Nunito Sans (Google Fonts) | OFL, free |
| Section H1 and H2 | Alata 500, 45/54 desktop (>=992px), 30/36 below | Alata 500 (Google Fonts) | OFL, free |
| Card and CTA titles | Alata 400: menu tiles 30/36, CTA 35.2/43.2, score H2 30/36 | Alata | OFL, free |
| H3 (chef name, step title) | Nunito Sans 400 20/30 (chef), 700 16/24 (step) | Nunito Sans | OFL, free |
| Hero lead | Nunito Sans 400, 18/27 | Nunito Sans | OFL, free |
| Body | Nunito Sans 400, 16/24 | Nunito Sans | OFL, free |
| Pills and buttons | Nunito Sans 700, 14.88/22.32 desktop, 16/24 mobile | Nunito Sans | OFL, free |
| Captions and ratings | Nunito Sans 400, 12.8/19.2 (ratings: 13.92/20.88 desktop) | Nunito Sans | OFL, free |
| Stat numbers | Alata 400, 80/109 desktop, 64/76.8 mobile | Alata | OFL, free |
| Stat labels, score label | Nunito Sans 400, 22/33 desktop, 18/27 mobile | Nunito Sans | OFL, free |
| Metric titles | Alata 400, 15/18 | Alata | OFL, free |
| Footer links and labels | Nunito Sans 300, 16/32 | Nunito Sans 300 | OFL, free |
| Copyright | Nunito Sans 400, 12.8/19.2 | Nunito Sans | OFL, free |

Weights loaded: Alata 400 (Google only ships regular, so the source's 500 headings render from the same face). Nunito Sans 300, 400, 600, 700 plus italic 400 (the Google link requests exactly these).

Not verified against the source at 1440px: the trust strip caption (14.88/22.32 is an estimate; 390px measured 14/21).
Placeholder logo wordmark uses Alata, so the source's logo is not reproduced.

## Visual diff

Compared against fresh captures of the source and the clone at 1440px and 390px (after scrolling to trigger lazy images). Two compare-fix rounds were run.

Fixed in round 1:
- Intro: collage staggered in four columns and overflowing the card bottom, as in the source. Heading narrowed to wrap onto two lines.
- Chef carousel: cards top-aligned at 350x400 (were alternating offsets).
- Reviews: side review cards now have the light grey box (#f8f9fa); centre card white.
- Menus: tiles 374px wide with 20px gap. Mosaic moved to absolutely positioned tiles with the custom-menu card overlapping, as in the source.
- About: stat tiles in the source's two-column staggered grid, with a photo tile at the right. Stacked on mobile.
- Partners: plain placeholder wordmarks in a five-column grid, no boxes.
- Destinations: no top rules above items.
- Footer: neutral payment-badge placeholders in place of payment marks.

Left as is:
- Hero mosaic column heights and offsets are approximate.
- Photo slots still use drawn art (see 7b status below).
- Menu section heading is shorter (copy), so the mosaic sits higher than in the source.
- Mobile About: the source stacks the photo below the stats; the clone's photo tile is a tall drawn panel.
- Mobile intro: the source uses a single-column collage with uneven heights; the clone uses a two-column grid.
- Trust strip uses a placeholder review badge instead of the source's logo.
- Header logo is a placeholder monogram wordmark.

## Generated photography status

The Gemini image tool (`mcp__Geminimage__generate_image`) returned a quota-exhausted error (429, resets in about 2h40m). No photos were generated and `img/` was not created. All photo slots keep the drawn gradient and SVG art, at the same sizes and aspect ratios as the source. Regenerate once the quota resets.

## Gap fixes

Placeholders used: domain `https://www.example.com/private-chef/`, address "1 Sample Street, Singapore 000000", phone "+65 0000 0000", hours 09:00-21:00 daily, sample social URLs on example.com, geo at a generic Singapore point. Brand "Hearthside Chefs" is a placeholder.

| # | Gap | Before | After |
|---|---|---|---|
| 1 | Image alt text | No `<img>` on the page; photo-like art was drawn in CSS | Unchanged in substance: every visual is decorative and marked `aria-hidden`, so no alt is needed. Verified: 0 `<img>` elements, 0 without alt |
| 2 | Local business structured data | None | JSON-LD `@graph` with `FoodEstablishment` (name, url, telephone, priceRange, servesCuisine, PostalAddress, GeoCoordinates, openingHours, hasMenu, acceptsReservations, ReserveAction, sameAs) and `WebSite`. Parses as valid JSON |
| 3 | Heading structure | One h1; h4 used under h2 for metrics, reviews and footer labels (levels skipped) | One h1. Metrics and review names are h3; footer labels are h2 (styled as before) |
| 4 | Title tag | "Hearthside Chefs \| Private chefs for your home" (brand-led) | "Private Chef Service in Singapore \| Hearthside Chefs" (52 characters) |
| 5 | Meta description | Present, short | 160 characters, one sentence with a call to action |
| 6 | Technical basics | `lang="en"`, viewport present, no canonical, no OG, no robots, no sitemap | `lang="en-SG"`, canonical, `robots` meta, og:type/title/description/url/locale, twitter:card; no og:image (no photo in img/ yet). robots.txt and sitemap.xml added |
| 7 | Reviews | Carousel with full names and dates | First names only plus month and year; HTML comment marks them and the scores as sample content |
| 8 | Newsletter | None | Band with labelled email input, native pill submit button, one-line reason. Uses site fonts, colours and pill styling |
| 9 | Chat or WhatsApp button | None | Fixed bottom-right accent circle with aria-label, 56px desktop and 52px mobile, placed to avoid the content column |

Still open: og:image (add once a photo exists in img/); the newsletter form has no backend, so `action="#"` is a placeholder.
