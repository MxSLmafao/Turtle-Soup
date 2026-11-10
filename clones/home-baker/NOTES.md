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

## Fonts

Source family: Poppins for every text role (computed on the live site at 1440 and 390). The source's only other font is "Material Symbols Outlined" for its icons (the clone uses inline SVG instead), and the newsletter input falls back to system Arial 13.33px (the clone matches that).

| Role | Source (1440 / 390) | Clone (1440 / 390) |
|------|---------------------|--------------------|
| Announcement | 14/700, lh 18.2, ls 1px / 12/700, lh 15.6, ls 1px | same |
| Nav links | 14/400, lh 18.2, ls -0.4 | same |
| Logo wordmark (text) | 24/700, lh 36, ls -0.4 | same |
| Hero H1 | 48/700, lh 57.6, ls normal / 32/700, lh 38.4 | same |
| Hero sub | 30/500, lh 36, ls normal / 32/500, lh 38.4 | same |
| Hero note | 16/400, lh 24, ls -0.4 / 15/400, lh 22.5 | same |
| CTA buttons | 16/600 uppercase, ls 1px / 14/600 | same |
| Section H2 (incl. story H2) | 48/500, lh 57.6, ls -1.2, capitalize / 32/500, lh 38.4, ls -0.8 | same |
| Locations H2 | 36/700, lh 36, ls -0.9 / 25.2/700, ls -0.63 | same |
| Card H3 | 22/600, lh 28.6, ls -0.55 / 18/600, lh 23.4, ls -0.45 | same |
| Card body | 16/400, lh 25.6, ls -0.4 / 14/400, lh 22.4, ls -0.375 | same |
| Card button | 14/600, lh 21, ls -0.4 / 14/600 | same |
| Story eyebrow | 21/700, lh 31.5 | same |
| Location name | 20/600, lh 20, ls -0.5 | same |
| Address and hours | 14/400, lh 21, ls -0.4 | same |
| Instagram title | 17/400, lh 17, ls -0.425 | same |
| Newsletter H2 | 48/600, lh 57.6 / 32/600, lh 38.4 | same |
| Newsletter body | 16/400, lh 24 / 14/400, lh 21 | same |
| Subscribe button | 16/600 / 14/600 | same |
| Footer heading | 18/600, lh 18, ls -0.45, capitalize | same |
| Footer links | 14/400, lh 21, ls -0.4 | same |
| Copyright | 11/400, lh 16.5, ls -0.4 | same |

Licence status: Poppins is free (SIL Open Font License 1.1) and is loaded from Google Fonts (weights 400, 500, 600, 700, 800). Because it is free, the clone uses the exact family with no name-first licence fallback. No font files were downloaded or copied from the source. Material Symbols (Apache 2.0) is not used in the clone.

Source-values capture: Playwright computed styles on the live homepage (text nodes, visible elements), then compared to the clone with the same script.

## Visual diff

Method: fresh Playwright captures of the original (1440 and 390, full page plus per-section element shots, text-matched where needed) and the clone, paired side by side in a private scratch folder. Two compare-fix rounds, then a mobile round.

Fixed:
- Hero (desktop): height 496 -> 441px, copy vertically centred as in the original.
- Bestseller and ingredient buttons: uppercase labels, as in the original.
- Story: headline wraps to two lines at desktop (copy shortened); on mobile the eyebrow and headline sit above the image, as in the original.
- Ingredients: "Shop now" left-aligned under the grid on desktop (full width on mobile).
- Locations: desktop 5-card row spanning the viewport (257px cards, 31px gaps, 216x200 image window); mobile stacks five full-width cards with 2:1 images (was a horizontal snap row).
- Social band: horizontal row of 176px tiles starting at 122px (116px tiles on mobile), as in the original.
- Newsletter: section height 380px (was 435); subscribe button cyan gradient with a 2px black border; mobile keeps input and button in one row.
- Footer: height 446 -> 430px; mobile copyright and payment badges centred.
- Header: cart count badge removed (the original shows none).

Left as is:
- All photo slots (hero, four bestseller cards, story portrait, four ingredient tiles, five location storefronts, six Instagram tiles) remain drawn SVG/gradient art. Image generation is blocked: the Gemini image tool returned a 429 quota error on every attempt ("exhausted your capacity", reset in about 2h41m).
- Copy wording, the placeholder wordmark and monogram, and the payment badges (text chips, where the source uses logo images).
- Source headings look slightly lighter in weight than the clone's; the typography pass (section 6) already matched computed values, so this is judged to be rendering rather than a measured mismatch.

## Gap fixes

Source: the fnb-site-gaps checklist (nine gaps). All business data is placeholder: domain https://www.example.com/home-baker/, "1 Sample Street, Singapore 000000", "+65 0000 0000", sample hours, example.com social URLs.

| # | Gap | Before | After | Placeholders / notes |
|---|-----|--------|-------|----------------------|
| 1 | Image alt text | No `<img>` tags. Meaningful SVG art was `aria-hidden`, and the hero wrapper was `aria-hidden`. | 20 meaningful art SVGs have `role="img"` and a specific `aria-label`. Decorative SVGs stay `aria-hidden`. Hero wrapper no longer hidden. | No `<img>`, so width/height and lazy loading do not apply yet. Add them when photos replace the art. |
| 2 | Local business structured data | None. | One JSON-LD graph: Organization, WebSite, a main Bakery and four outlet Bakery entries. Parses as valid JSON. | Street address, phone, geo (Singapore centre, placeholder), sample hours, hasMenu and OrderAction on example.com, sameAs on example.com. `image` set to the hero photo on example.com. |
| 3 | Heading structure | Footer used `<h4>` with no `<h3>` above it (skipped levels). | Exactly one `<h1>` (hero). Sections and footer use `<h2>`, cards use `<h3>`. | None. |
| 4 | Title tag | "Cocoa Lane \| Chewy, Molten, Baked Daily" (brand plus slogan). | "Home Bakery Cookies and Brownies in Singapore \| Cocoa Lane" (58 characters). | Brand is the placeholder Cocoa Lane. |
| 5 | Meta description | "Sample bakery homepage design study." | 144-character sentence on what is sold, where, and a call to action. | Singapore. |
| 6 | Technical basics | `lang="en"`. No canonical, robots, Open Graph or Twitter tags. robots.txt and sitemap.xml absent. | `lang="en-SG"`. Canonical, robots meta, og:type/site_name/title/description/url/locale, twitter:card summary_large_image. robots.txt and sitemap.xml created. | `og:image` now set to the hero photo (see section 9). Canonical and sitemap use example.com. |
| 7 | Reviews | None. | Three sample reviews in the site's card style, first names only, labelled as sample in an HTML comment. | Mei, Daniel and Priya are invented. No real or attributable reviews. |
| 8 | Newsletter sign-up | Input labelled (sr-only). Form had no accessible name. | Form has `aria-label="Newsletter sign-up"`. Input and button unchanged. | None. |
| 9 | Floating contact button | None. | Fixed bottom-right "Contact us" pill linking to #contact. On mobile it becomes an icon-only circle with an aria-label. | Links to the in-page contact section, not a real phone or chat service. |

Verification: one `<h1>`, zero `<img>`, JSON-LD parses, no console errors, no horizontal overflow at 1440 or 390, no source-brand names in the code files.

## Photo slots (section 9)

Wired: the hero photo `img/hero-cookie-box.jpg` (1264x848, 113 KB) replaces the drawn hero art. It is an `<img>` with alt text, width and height, and `fetchpriority="high"`. It fills the right half with `object-fit: cover`, and the existing left fade keeps the headline readable on desktop and mobile. It is also the `og:image`, `twitter:image` and JSON-LD `image`, all on https://www.example.com/home-baker/.

Still drawn (SVG or gradient art, with role="img" labels): bestseller cards 1 to 4, the story split panel, ingredient tiles 1 to 4, location storefronts 1 to 5, and Instagram tiles 1 to 6. Image generation stopped at the first call: the quota error came back (429, reset in about 4h48m). The brief says not to retry, so no further photos were generated. img/ holds only the hero photo.

Notes: the `.hero-svg` CSS rules are now unused but harmless.

## Polish pass

Tools: replica compare (layout, style, pixels), a rendered-state check per section at 1440 and 390, and the interaction and reduced-motion checks from the clone skills. Scratch and blueprints are in polish-home-baker/ under the scratchpad root.

Scores (replica `structure` level, reference = source homepage at 1440 and 390):

| Run | Layout | Style | Pixels | Notes |
|-----|--------|-------|--------|-------|
| Baseline (before polish) | 35.9 | 90.2 | 0.0 | Full page; added reviews section left in its space (hidden with visibility) |
| Final, full page | 41.1 | 90.3 | 0.0 | Same as the deliverable, with added sections hidden |
| Final, added sections excluded | 49.5 | 90.9 | 0.0 | Scratch copy with the reviews section and floating button removed, per the brief |

The layout gate of 90 is not reached. Remaining layout items are mostly reference-only elements (an Instagram feed, the header's hidden heading link, and a location card structure with different markup), plus copy line-count differences. Pixels stay near zero because photos, copy and brand differ on purpose.

Changes (in order):
- Story headline: shortened to two lines to match the reference's height (115px).
- Hero (mobile): image is a 390px square; hero copy spacing matched; grid uses minmax(0, 1fr) to stop overflow.
- Bestsellers (mobile): the gradient "Fresh From The Oven" span is a block line, matching the two-line heading.
- Bestsellers (desktop): descriptions use their natural height; buttons align to the card bottom (margin-top auto). One description shortened to match the two-line length.
- Ingredients: one description shortened to one line.
- Social band: row starts at x=59 on desktop, matching the reference.
- Locations (mobile): cards 10px taller (bottom padding 30px), matching the reference card heights.
- Story (mobile): gaps between eyebrow, headline, photo and paragraph tightened to 12px, matching the reference.
- Footer (mobile): bottom bar spacing and payment badge size adjusted; footer height now matches (539px).
- Header (mobile): wordmark 16px (was 24px).

Interaction and accessibility (already in the clone, checked):
- Hover: buttons lift 2px with a shadow; nav links underline; product and tile images scale; location cards lift.
- Focus: visible keyboard focus ring on all links, buttons and form controls.
- Header: sticky, background firms up after scrolling 40px.
- Menus: mobile menu toggles with aria-expanded.
- Transitions: 0.3s and cubic-bezier(0.25, 0.46, 0.45, 0.94), matching the source measurements.
- Reduced motion: transitions and scroll reveal disabled for prefers-reduced-motion.

Final checks at 1440, 768 and 390: no horizontal overflow, no console errors, no failed requests, one h1, JSON-LD parses, every image has alt text (the hero photo and the drawn art use role="img" with labels), and no source-brand names in code.

Still off: Instagram feed (reference-only), location card markup, copy line counts in a few cards, photos (drawn art except the hero), and the header wordmark is a placeholder monogram rather than the source's logo.
