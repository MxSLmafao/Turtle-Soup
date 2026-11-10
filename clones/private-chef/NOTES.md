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
