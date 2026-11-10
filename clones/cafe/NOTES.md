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
