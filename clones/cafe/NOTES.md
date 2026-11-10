# Design notes: Cafés & coffee shops (slug: cafe)

Source studied: https://commonmancoffeeroasters.com/ (Shopify theme). Output is a placeholder brand, "Tidewater Coffee Roasters". No source images, logos, fonts or copy were copied.

## Capture method
- HTML: `curl -sSL -A "Mozilla/5.0"` worked. Theme CSS (`_critical.css`, `_main.css`, `_utilities.css`, `custom.css`) was fetched to the scratchpad.
- Render: Playwright (chromium, no-sandbox) rendered the page at 1440 and 390 px. Full-page screenshots and computed styles were read from it.
- Palette was sampled from the 1440 screenshot. Computed type values came from the DOM.

## Section order (1440 layout, y offsets approximate)
1. Announcement bar, 54 px, green.
2. Sticky header, 81 px. Left nav (uppercase 16 px semibold), centred wordmark, right icons plus MENU.
3. Hero, 766 px. Full-bleed image, centred eyebrow, 56 px cream H1, short lede at the bottom.
4. 32 px spacer, then a feature carousel, 480 px. Image is 2/3 width and a cream panel is 1/3, with dot pager.
5. 64 px spacer. Two-up panel (subscription steps, guide bags), 652 px, with a centre hairline.
6. Product grid, 3 by 2, navy cards with uppercase titles and image bottoms.
7. "At a glance" split, 740 px. Left has eyebrow, H3, copy, a 2x4 index list. Right has an isometric illustration with numbered pins.
8. Cafés: centred heading, wide image, then a row of 5 green cards.
9. Wholesale split, 410 px. Image 2/3 and navy panel 1/3.
10. Cream "wisdom" band, centred, 320 px.
11. Footer, green, 482 px. Logo, 3 link columns, newsletter field, social icons, copyright and payment badges.

## Type scale (source, approximate)
- Body 17 px, line-height about 1.5, colour grey (`rgb 144,143,140`), body weight 400.
- H1 hero about 56 px, weight 400, cream.
- Section H2 about 36 to 40 px, weight 400, ink `#222`.
- H3 about 32 px. Card titles uppercase 17 px bold.
- Eyebrow 14 to 15 px, uppercase, semibold, with an arrow glyph.
- Buttons 16 px semibold, 1 px border, square corners, 42 px tall.
- Source font is Founders Grotesk (commercial, not on Google Fonts). Clone uses Hanken Grotesk (closest free grotesque).

## Palette (sampled)
- Background `#fefcf6`. Ink `#222`.
- Brand green `#517252` (announcement and footer, café cards).
- Cream `#fcf2d4` (carousel panel, step art, journal band).
- Navy `#2c4353` (product cards, wholesale panel).
- Sage `#a6b293` (guide bag art).
- Muted body text is darkened to `#6b6a66` from the source grey for contrast.

## Layout and grid
- Container 1376 px max, 32 px gutters. Mobile uses 16 px.
- Product grid 3 columns, 16 px gap. Café row 5 columns, 16 px gap.
- Footer grid: wide logo column, four link columns.

## Interaction and behaviour
- Header becomes sticky and gains a hairline and shadow after 60 px of scroll.
- Carousel auto-advances every 6 s. It pauses on hover, and dots switch slides.
- Full menu toggles from the MENU button, which animates to an X.
- Product and café cards reveal on scroll with a staggered fade-up. Cards lift their art on hover.
- Side "Find your favourite coffee" tab is fixed to the right edge.
- Mobile (at or below 900 px): desktop nav is hidden, the header shows the burger, grids collapse, café row becomes a horizontal snap scroller.
- `prefers-reduced-motion` disables reveals and animations.

## Imagery replacement
- Photos are replaced by CSS gradient and radial-dot art, sized to the same boxes.
- Isometric plan is an original inline SVG generated from a small script, with 8 numbered pins.
- Step and bag icons are hand-drawn inline SVG line art.
- Payment badges are generic text pills, not brand logos.

## Known gaps
- No real cart, search, account or menu drawer. Controls are visual only.
- Mega-menu contents and the second hero carousel slide are simplified.
- Video hero is a static gradient with a CSS pour animation.
- Mobile header omits the sub-wordmark to fit the width.

## Fonts

Source family: **Founders Grotesk**, self-hosted by the source site as WOFF/WOFF2 (Regular 400 and Medium 500 only). Licence: commercial, from the foundry (Klim Type Foundry); buy or licence at klim.co.nz or through a licensed web-font reseller. Its files were not downloaded, copied or hot-linked.

Clone stack: `"Founders Grotesk", "Tidewater Fallback", "Hanken Grotesk", system-ui, ...`. The exact name comes first, so it renders wherever the family is licensed or installed. Nothing in the clone loads it.

Fallback: Hanken Grotesk (SIL OFL, Google Fonts), loaded through the Google Fonts stylesheet (400 and 500) and aliased as "Tidewater Fallback" with `size-adjust` 88.5% (400) and 91% (500). Ratios were measured in the browser against the source face (lowercase copy about 0.88 and 0.91, caps about 0.94 and 0.96). Caps therefore sit slightly wide; no letter-spacing compensation was added.

| Role | Source family | Source size 390 to 1440 | Weight | Line-height | Letter-spacing / transform | Clone |
|---|---|---|---|---|---|---|
| Announcement, body, lede, section copy, card copy | Founders Grotesk | 15.94 to 17 px | 400 | 1.294 (22 px at 17) | none | same family stack, `--fs-base` fluid, `--lh-body` |
| Nav, buttons, card titles, footer headings | Founders Grotesk | 15.94 to 17 px | 500 | 1.294 (buttons, nav) / 1.176 (titles) | nav and titles uppercase; footer headings 0.05em | `--fs-base`, weight 500 |
| Eyebrow | Founders Grotesk | 14.06 to 15 px | 500 | 1.176 | uppercase | `--fs-small`, weight 500 |
| Hero H1 | Founders Grotesk | 31.88 to 50 px | 400 | 1.12 | none | `--fs-h1`, lh 1.12 |
| Section H2 | Founders Grotesk | 31.88 to 34 px | 400 | 1.176 | none | `--fs-h2`, lh 1.176 |
| H3 / panel titles | Founders Grotesk | 25.31 to 27 px | 400 | 1.176 | none | `--fs-h3`, lh 1.176 |
| Small (copyright, captions) | Founders Grotesk | 14.06 to 15 px | 400 | 1.176 | none | `--fs-small` |
| Logo wordmark | image in source | n/a | n/a | n/a | n/a | Big Shoulders Display (Google, OFL), placeholder graphic only |

Verified at 1440 and 390 px: family, size (within 0.3 px), weight, uppercase and line-height match the source values for every role above. Two rows were not directly comparable because the locator matched a different element (for example a card anchor instead of its heading).

Not matched: glyph shapes and metrics (cap height, x-height, ascent and descent) still differ from Founders, so line breaks can fall in different places. Source copyright line measured 15 px at 1440 and 14.06 px at 390, weight 400, line-height 1.176; the clone's small role matches these values. The mobile side tab overlaps body text at 390 px.

## Visual diff

Method: section-by-section screenshots of the original and the clone at 1440 and 390 px (scratch folder vd-cafe), side by side. Two compare-fix rounds.

Fixed:
- Hero, carousel: photo stand-ins replaced with generated photos (see Images below).
- Café banner height 410 to 380 px, to match the source crop.
- "At a glance" min-height 740 to 710 px, to match the source section height.
- Journal band padding 96 to 80 px (source band about 320 px tall, clone was 367).
- Side "Find your favourite coffee" tab: hidden at 900 px and below, because it covered hero copy at 390 px.
- Type sizes, weights and line-heights from the Fonts pass (no discrepancy remains at the token level).

Left:
- Product tiles (6), café cards (5), café banner and wholesale photo: still drawn CSS art. The generation tool hit a quota limit (resets in about 2h40m), so these slots keep the drawn art.
- "At a glance" illustration: the source is a coloured 3D render; the clone is an original line-style isometric drawing with numbered pins.
- Step and bag icons: source uses line illustrations; the clone draws simple line icons.
- Header wordmark and footer logo: placeholder wordmark (Big Shoulders Display). Payment badges are generic text pills.
- Source footer has more links; the clone has fewer link rows.
- Hover and scroll: reveal, image lift and carousel autoplay are present; the source's exact easing and the mega-menu contents are approximations.
- Font metrics differ from the source face, so some line breaks differ.

## Images

Generated (Gemini image tool, JPEG, no text or logos in the prompts):
- `img/hero-pour.jpg` (1264 x 848, about 108 KB): hero background.
- `img/origin-cherries.jpg` (1200 x 805, about 162 KB): feature carousel slide 1.
- `img/origin-beans.jpg` (1000 x 1000, about 133 KB): feature carousel slide 2.

Total img/ size about 404 KB. Still drawn: product tiles, café banner, café cards, wholesale photo, and the isometric illustration (see Visual diff). Regenerate these once the image quota resets.

## Gap fixes

Placeholders used: domain `https://www.example.com/cafe/`, address "1 Sample Street, Singapore 000000", phone "+65 0000 0000", hours Mon to Fri 08:00 to 18:00 and Sat to Sun 09:00 to 19:00 (sample), social links `https://www.example.com/tidewater-sample/instagram` and `/facebook`, WhatsApp link `https://wa.me/6500000000`, geo approximated to the centre of Singapore (1.3521, 103.8198). Reviews are sample content, first names only, and labelled in an HTML comment. `og:image` uses `img/hero-pour.jpg` on the placeholder domain.

| # | Gap | Before | After |
|---|---|---|---|
| 1 | Image alt text | No `<img>` elements. Photo and art blocks were unlabelled divs. | Every photo and art block has `role="img"` and a specific `aria-label`. Decorative SVGs stay `aria-hidden`. Zero `<img>` tags, so zero missing alt. |
| 2 | Local business structured data | None | One JSON-LD block (parsed OK): `CafeOrCoffeeShop` + `FoodEstablishment` with name, url, image, description, telephone, priceRange, address, geo, opening hours, hasMenu, OrderAction, sameAs, plus a `WebSite` entry. |
| 3 | Heading structure | One h1 (hero), sections h2, cards h3 | Unchanged. Exactly one h1. New reviews section uses h2. |
| 4 | Title tag | "Tidewater Coffee Roasters - Specialty coffee, roastery and cafés" (brand + generic) | "Specialty Coffee Roastery and Cafés in Singapore \| Tidewater" (60 characters, category + city + brand) |
| 5 | Meta description | "Sample homepage: specialty coffee roastery, cafés and barista academy (placeholder brand)." | One sentence, 158 characters, category, Singapore, call to action. |
| 6 | Technical basics | `lang="en"`, viewport present, no canonical, no OG or Twitter, no robots | `lang="en-SG"`, canonical, robots (index, follow, max-image-preview:large), OG (type, site_name, title, description, url, image, image:alt, locale en_SG), Twitter summary_large_image, `robots.txt` with sitemap line, `sitemap.xml` with the home URL. |
| 7 | Reviews | None | Three sample reviews section (before footer), styled with cream cards, the site's green stars and Hanken type. |
| 8 | Newsletter sign-up | Present in footer, input labelled, no form name | Same form with `aria-label="Newsletter sign-up"`. One field, one button, one-line reason. |
| 9 | Chat or WhatsApp button | None | Fixed bottom-right green button, `aria-label`, placeholder WhatsApp link. Icon only on phones (52 px) so it covers less content. |

Still open: no real address, phone, hours or reviews. The `og:image` and social URLs are placeholders on the example domain and will 404 until replaced.

## Photo slots (update)

Photos now (generated, JPEG, in `img/`):
- Hero background: `img/hero-pour.jpg` (1264 x 848, about 108 KB). Text sits over a warm overlay; checked readable at 1440 and 390 px.
- Feature carousel, slide 1: `img/origin-cherries.jpg` (about 162 KB).
- Feature carousel, slide 2: `img/origin-beans.jpg` (about 133 KB).
- Café banner: `img/cafe-brunch.jpg` (1264 x 848, about 188 KB). Replaces the drawn plates.

Still drawn (CSS art): the six product tiles, the five café cards, the wholesale split photo, the isometric "at a glance" illustration (drawn SVG), and the step and bag icons.

The image tool quota was hit again after the café banner (retry window about 4h48m). The remaining photo slots stay drawn.

Total img/ size: about 592 KB. Generated images: 4.

## Polish pass

Tools: replica (capture of the source at 1440x900 and 390x844, level `structure`, compare with the reviews section and floating button hidden), then the screenshot and design-clone checks. Scratch output in polish-cafe/ (round-1 to round-6 reports).

Scores (replica, level structure):

| Round | Change | Layout | Style | Pixels | Result |
|---|---|---|---|---|---|
| 1 (baseline) | none | 7.3 | 80.2 | 0.0 | NOT YET |
| 2 | `data-replica="placeholder"` on drawn art tiles | 6.9 | 80.1 | 0.0 | reverted (down) |
| 3 | reverted, check of baseline | 7.3 | 80.2 | 0.0 | — |
| 4 | shop section spacing and tile heights tightened | 6.1 | — | 0.0 | reverted (down) |
| 5 | interaction states added (button press, focus rings, tile focus lift); an underline change was reverted as it lowered style | 7.3 | 80.2 | 0.0 | kept |

Stopped at round 6: two rounds in a row gained nothing, so further patching was not worth it.

Why the layout score stays low: the reference has a video hero, an iframe announcement bar, and a different DOM (more `<img>` elements, a different mobile structure). Its photo, header and carousel elements have no counterpart in this clone, and this clone's added icons do not exist in the source. The layout axis does not reach 90 without copying that DOM, which is out of scope.

Changes kept:
- Button press state (`translateY(1px)` on `:active`).
- Visible focus ring on buttons, the newsletter form, the floating chat button and the side tab.
- Product and café tiles lift slightly when focused by keyboard.
- Existing: header hairline on scroll, carousel pause on hover and focus, `prefers-reduced-motion` disables reveals and animations.

Final checks (1440, 768, 390): no horizontal overflow, zero console errors, zero failed or 4xx requests, exactly one h1, JSON-LD parses (two graph entries), and no source-brand names in the code.
