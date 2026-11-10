# Reverse-engineering notes: burntends.com.sg (homepage)

Source: https://burntends.com.sg/ (WordPress + Elementor, Elementor Pro header/footer). Rendered with Playwright
at 1440x900 and 390x844. Raw HTML and screenshots live in the scratchpad (src-restaurant/, shots/), not in the repo.

## Render vs CSS-only
- Full render worked (Playwright via proxy). Computed styles were read from the live DOM, and the
  litespeed critical CSS and page-level CSS (elementor-2196 rules) were read from the HTML.
- Hero and logo are raster images (JPG/PNG/SVG-as-base64 placeholder). They are NOT copied. Replaced by
  self-drawn SVG art and a CSS/Bebas text wordmark.

## Section order (homepage is one hero + footer; header overlays hero)
1. Header (absolute, opaque black, sticky shadow `0 3px 5px rgba(0,0,0,.5)`)
   - Desktop: height 116px, padding 5px 72px, logo 120x106 at x=72, nav right-aligned ending at x=1368.
   - Mobile: height 92px, logo left, hamburger right.
2. Hero: `min-height: 100vh`, background-size cover, position top centre, no text.
   - Desktop image: landscape roast on coals. Mobile swaps to a portrait crop (short rib on plate).
3. Footer: black, 70px tall desktop. Copyright (DIN Next 14px, #ebebeb) at x=150 (1140px container),
   two 50x50 social icon boxes right-aligned to x=1290, 5px gap, 25px glyphs.
   - Mobile: stacked, copyright wraps to 2 lines, icons below, ~139px tall.

## Type
- Nav: Bebas Neue 18px, line-height 20px, letter-spacing 1px, uppercase, white. Each item padding 13px 17px.
- Body / sub-menu: Radley (serif, Google Font).
- Footer: DIN Next 14px -> nearest free Google Font: Barlow (DIN-derived).
- Logo: stacked outlined wordmark (image in original). Clone uses Bebas Neue text, not the original art.

## Palette
- Header/footer: #000000. Text: #ffffff. Footer copy: #ebebeb.
- Hero is photographic: warm amber/ember tones, charcoal #1a1410 to #0b0806, smoke grey-blue.

## Nav behaviour
- Items: About (dropdown, 4 items), Gallery, Reservations, Book (product), Brands & Venues (dropdown, 3 items), Contact.
- Desktop: dropdowns on hover/focus. Mobile: hamburger toggles a full-width stacked panel.
- Header becomes shadowed after scroll.

## Motion / interactions
- Nav link underline hover (`e--pointer-underline`), fade animation `e--animation-fade`, 0.4s transitions.
- Social icon opacity 0.3s transition.
- Hero is static (no parallax/motion effects on the background). Clone adds a slow smoke drift and ember flicker,
  disabled under prefers-reduced-motion.

## Responsive
- Breakpoint 767px (Elementor mobile). Hero background swaps image at max-width 767px.
- Nav collapses to hamburger at mobile width.

## Fonts

Measured from the live source at 1440px and 390px (computed styles; hidden dropdowns forced visible).
Source families: Bebas Neue, Radley, DinNext (self-hosted commercial file; `@font-face` points at the source's own
`/fonts/DINNextW01-*` files, which are not used here).

| Role | Source family | Source values (1440 / 390) | Clone loads | Licence status |
|---|---|---|---|---|
| Nav links | Bebas Neue | 18px / lh 20px / ls 1px / 400 / uppercase | Bebas Neue (Google Fonts) | Free (OFL). Identical family. |
| Dropdown items | Bebas Neue | 16px / lh 20px / ls 1px / 400 | Bebas Neue (Google Fonts) | Free (OFL). Identical family. |
| Body and page copy | Radley | 16px / lh 24px / ls normal / 400 | Radley (Google Fonts) | Free (OFL). Identical family. |
| Footer copyright | DinNext | 14px / lh 24px / ls normal / 400 / normal | `"DinNext"` name first, then `"Barlow Fallback"` (Barlow 400, Google Fonts host, `size-adjust: 101.8%`) | DinNext is commercial (Linotype / Monotype family). Buy a licence from the foundry or a Linotype/Monotype reseller. Barlow is free (OFL). |
| Mobile nav links | Bebas Neue (presumed) | not measured, popup did not expose its text | Bebas Neue 26px / lh 30px / ls 1px | Unmatched. See gaps. |
| Headings h1 to h3, buttons, captions | none on this page | none in the homepage DOM | n/a | n/a |

Fallback tuning: width of a 100px sample string was 4986.9px in DinNext (source) and 4897.8px in Barlow.
`size-adjust: 101.8%` brings it to 4985.8px (within 0.02%). Line-height and letter-spacing match the source values.

Gaps: the source mobile menu is an Elementor popup that did not expose its text to the render, so its nav typography
was not measured. The clone keeps 26px / 30px in the mobile drawer. The source logo is an image and the clone wordmark
is typeset; neither is a text role.
