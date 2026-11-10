# Reverse-engineering notes: juice-bar (source: https://project-acai.com/)

Method: curl of homepage (Squarespace 7.1 site), Playwright render at 1440px (full-page screenshot OK),
computed-style sampling. Source files kept in the scratchpad, not in the repo.
Render: YES (desktop 1440 and mobile 390 both rendered; full-page 2929px tall at desktop).

## Section order and heights (desktop 1440, original)
1. Header 137px, lilac bg, logo left, nav centred-right, olive pill "Order" button right.
2. Hero 759px full-bleed photo, oversized serif headline "All the Things You Love" running across, cropped at edges.
3. Intro band 190px, cream: serif line "Singapore's Original Acai Since 2015" flanked by two line drawings; italic small caps-ish sub line listing locations separated by dots.
4. Three-tile grid, 3 equal cards ~ 400x~370 each, gutters ~ 30px, 4:5-ish portrait tiles; centred italic serif labels on images.
5. Marquee band 266px lilac: large serif "Freshly Blended" text on a slightly rotated/wavy baseline, scrolling.
6. Instagram-style 4-up grid of 9:16 video tiles with play icons and overlay captions, handle at top-left of first.
7. Footer 297px dark brown: 4 columns (serif headings 21px, Open Sans 14px links in olive), copyright bottom-right.

## Type scale
- Display: Libre Baskerville 700 (hero) and 400 (intro, footer headings ~21px).
- Body: Open Sans 400 16px, line-height 1.4, letter-spacing 0.16px.
- Nav links: Lato 400 20px, letter-spacing 0.384px, black on lilac.
- Button: Almarai 400 16px, cream text on olive, fully rounded.

## Palette
- Cream `#FEF5EC` (page bg), plum-brown `#673D37` (body text, header text), lilac `#DBD1E0` (header and marquee bg),
  olive `#7D7A45` (button, footer links), dark brown `#533C24` (footer bg), black `#000` (nav links).

## Interaction
- Header: sticky-ish, dropdown carets on About and Join Us.
- Hero/tiles: hover reveals a darker overlay; tiles use scale on hover.
- Marquee: continuous horizontal scroll.
- Scroll reveals: fade and rise on section entry (site uses parallax on images).

## Responsive
- Breakpoint around 768px: nav collapses to hamburger, tile grid stacks to 1 column, IG grid to 2 columns.

## Fonts

| Role | Source family | Clone loads | Licence status |
|---|---|---|---|
| Hero h1, intro title, footer headings | Libre Baskerville (400, 700) | Google Fonts, same family | Free (SIL OFL) |
| Body, captions, footer links, copyright | Open Sans (400, 700) | Google Fonts, same family | Free (SIL OFL) |
| Nav links | Lato (400) | Google Fonts, same family | Free (SIL OFL) |
| Nav CTA button | Almarai (400) | Google Fonts, same family | Free (SIL OFL) |

All four families are open-licence Google Fonts, so no name-first fallback stack was needed.

Computed values matched to the source (desktop 1440 / mobile 390):
- Hero h1: Libre Baskerville 400, 128px / 86px (fluid), line-height 1.4, letter-spacing -0.02em.
- Intro title (h3-level): Libre Baskerville 400, 28px / 23.6px fluid, line-height 1.17, -0.02em.
- Nav: Lato 400 20px, line-height 1, letter-spacing 0.384px (desktop).
- CTA: Almarai 400 16px.
- Body: Open Sans 400 16px, line-height 1.4, letter-spacing 0.16px.
- Footer headings: Libre Baskerville 400 21.184px. Footer links and copyright: Open Sans 14.272px, line-height 1.4.

Known gaps: the source footer link colour (olive on cocoa) is low-contrast; the clone uses a lighter tan for legibility.
Mobile nav sizes are not measured because the source collapses its nav behind a menu at 390px.
