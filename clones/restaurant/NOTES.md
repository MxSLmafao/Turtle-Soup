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
