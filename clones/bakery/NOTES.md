# Design notes: bakery homepage study

Source studied: https://tiongbahrubakery.com/ (Shopify storefront, Singapore bakery). Rendered with Playwright at 1440px (page height ~6222px). Raw HTML and screenshots live in the scratchpad, not in the repo.

## Section order (desktop, 1440px)
1. Announcement marquee, 36px tall, cream bg, brown text, scrolling left.
2. Header, 100px tall (y 36-136). Left: 4 uppercase text links in teal. Centre: stacked logo. Right: "Cart (0)" plus a teal pill button. Sits under the marquee.
3. Hero, 810px tall, full-bleed lilac (#E7D2E7 family). Left: a rough-edged stamp panel with a bold condensed headline and subline. Centre-right: large croissant photo, a magnifier with metal arms, and a honeycomb inset callout.
4. Product feature, 64px top padding. Left: 660x660 framed image (black-to-cream studio shot), right column at x=740: 72px title over 2 lines, body, bold dip list, note, price, "ORDER NOW" pill.
5. Process section, centred 48px heading and 16px subline (max ~460px). Horizontal rail of 4 image cards: side cards 354x435, centre card 544x543, vertically centred. Caption under centre card. Lilac 36px arrow buttons bottom-right.
6. Pairing section, 3 columns: pastry cutout (~380px) | 64px two-line heading + body | coffee cutout. Each cutout sits on a lighter cream polygon. Small line-art illustration centred above.
7. App/loyalty section: 48px bold heading centred. Phone mockup (~425x590) between two columns of 3 lilac feature boxes (310px wide, 6px radius). Doodle top-right. Store-badge line below in serif.
8. Gallery rail: heading, 4 tall cards 325x577, rail bleeds off the left edge. Teal arrow buttons below right.
9. Reviews: heading, full-width lilac card (1360px, ~200px tall) with star row, 32px quote, attribution, teal arrows.
10. Footer: dark brown (#521B0A), 4 columns: two link lists, socials, newsletter with pill input and cream "SUBSCRIBE" pill. Copyright row at bottom-left.

## Tokens (from the page's inline theme variables)
- Cream background: #F4EEE0 (244 238 224)
- Brown text: #521B04 (82 27 4)
- Deep teal (primary button, nav): #004251 (0 66 81)
- Green accent: #009949 (0 153 73)
- Lilac card / hero: #E7D2E7 (231 210 231)
- Mustard accent: #DAA71D (218 167 29)
- Footer brown: #521B0A (82 27 10)
- Body and headings: Inter. Main font weight 500. Heading weight 400, line-height 0.9 for display sizes, letter-spacing 0.
- Type scale: base 16px, ratio 1.335 steps (lg 21.4, xl 24, 2xl 26.9, 3xl 32), with display headings at 48px and 72px.
- Buttons: fully round pills (9999px), uppercase, 48px tall, 0 border.
- Cards and media: 6px radius (0.375rem).
- Spacing: section vertical 4rem, section horizontal 2.5rem on desktop, 1.25rem on mobile, grid gap 2.5rem (40px).
- Max content width: 1360px (40px gutters at 1440).
- Transitions: 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) on buttons. Respects prefers-reduced-motion.
- Breakpoints observed: 390 (mobile), 640, 768, 990, 1400.

## Behaviour
- Header is sticky. Nav collapses on small screens.
- Marquee scrolls continuously. Carousels are horizontal scroll-snap rails with arrow buttons.
- Sections fade up on scroll (reveal).

## Clone choices
- Brand: placeholder "Lantern Row Bakehouse". Copy written from scratch at the same length and role.
- All imagery replaced with inline SVG or CSS gradients drawn for this clone. No photos, logos, fonts or other files copied.
- Fonts: Inter (same family as the original body). The stamp and logo face uses Alfa Slab One, the closest free Google Font to the original hand-drawn display face.
- App-store line uses generic text, not store trademarks.
