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
- Futura PT is approximated with Jost, so glyph widths differ slightly.
