# Design notes: home-baker (source: https://whiskdom.com/, homepage)

Category: Home / cottage food sellers (design study, placeholder brand "Cocoa Lane").

## Extraction method
- Raw HTML fetched with curl (Shopify storefront, ~330 KB). Stylesheets are Shopify theme CSS (base.css, hero.css, etc.); not copied.
- Rendered with Playwright (chromium, via proxy) at 1440 and 390 widths. Computed styles read from the live DOM.
- Renders succeeded, so layout, sizes, colours and section heights are measured, not guessed.

## Section order and heights (1440px, measured)
| # | Section | y | h | Notes |
|---|---------|---|---|-------|
| 1 | Announcement bar | 0 | 51 | blue `#004a98`, white 16px/600 centred |
| 2 | Sticky header | 51 | 84 | sand `rgba(242,232,226,.6)`, logo left, 5 nav links, cart right |
| 3 | Hero | 135 | 440 | bg `#e8e2d5`, text left, product photo right bleeding to edge with left fade |
| 4 | Bestsellers (4 cards) | 575 | 694 | padding 60px, H2 48px/500, 4 cols ~253px, dark buttons |
| 5 | Story (image + text) | 1269 | 670 | 550px square image left, text right at x=765 |
| 6 | Ingredients (4 tiles) | 1939 | 753 | centred H2 + sub, 4 square tiles, black "Shop now" |
| 7 | Locations (5 cards, overflow row) | 2693 | 529 | cards `#f9f9f9`, 1px border, 8px radius, hours list |
| 8 | Instagram heading | 3222 | 237 | feed did not render in headless (blank space) |
| 9 | Newsletter | 3513 | 379 | white, centred H2 48px/600, input + gradient button |
| 10 | Footer | 3951 | 429 | bg `#004a98`, sand text, 2 link columns, bottom bar |

## Type scale (desktop / mobile 390px)
- Font: Poppins (Google Fonts) throughout. Icon font not used (inline SVG instead).
- Hero heading: bold, navy `#004a98`, ~52px / 56px (desktop); 32px / 38px (mobile).
- Hero sub line: 32px/400, grey `#665e5e`; small line 16px/400 black.
- Section H2: 48px / 57.6px, weight 500, letter-spacing -1.2px (mobile 32px).
- Card title: 22px / 28.6px, weight 600, letter-spacing -0.55px.
- Body: 16px / 25.6px, letter-spacing -0.4px, colour near-black.
- Button (dark): 14px/600, padding 12px 28px, radius 6px, bg `#1f2937`.
- Button (CTA): 16px/600 uppercase, letter-spacing 1px, padding 12-14px 24-32px, radius 4-6px.
- Nav: 15-16px/400, colour `rgba(46,42,57,.9)`.

## Palette
- Brand navy `#004a98` (bar, footer, logo, hero heading)
- Sand `#f2e8e2` (header, footer text), hero bg `#e8e2d5`
- Coral CTA `#ff5c35`
- Ink `#2e2a39` (text/nav), dark button `#1f2937`, black CTA `#000`
- Muted grey `#666`, card bg `#f9f9f9`
- Gradient heading accent: lilac `#9b85c0` to plum `#3d2a55`

## Behaviour
- Header sticky, translucent sand with blur.
- Buttons: colour and transform transitions 0.2-0.3s.
- Cards: image scale on hover, transition 0.4s `cubic-bezier(0.25,0.46,0.45,0.94)`.
- Scroll reveal: sections fade/rise in on entry.
- Mobile (<=900px): hamburger left, centred logo, cart right; hero stacks image-over-text; bestsellers 2 columns; location cards become a horizontal snap row.

## Responsive
- Container 1108px max (166px side gutters at 1440). Mobile gutter 16px.
- Desktop grid: 4 columns, 30px gap.
- Mobile: 2-column grids, stacked story and footer.
