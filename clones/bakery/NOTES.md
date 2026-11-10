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
- Fonts: see the Fonts section below. The stamp and logo face uses Alfa Slab One, a decorative choice. The source draws its stamps as images, so they are not a typography role.
- App-store line uses generic text, not store trademarks.

## Fonts

Measured with Playwright from the live source at 1440px and 390px. Web-font status checked with `document.fonts`: only Inter loads. F37Analog and MetaAccanthis_regular are declared but never load in this render, so visitors see the fallback sans or serif.

| Role | Source family (computed) | 1440px: size / weight / line-height / transform | 390px: size / weight / line-height / transform | Clone stack | Clone loads |
|---|---|---|---|---|---|
| Announcement marquee | F37Analog (fallback) / MetaAccanthis at 390 | 14.2544px / 500 / 19.9561px / none | same | F37Analog, Arimo | Arimo |
| Nav links, cart | Inter | 16px / 500 / 22.4px / uppercase | MetaAccanthis, 16px / 500 / 22.4px / uppercase | Inter (desktop), MetaAccanthis_regular then Arimo (mobile) | Inter 500 |
| Headings h2 (section) | system_ui stack (desktop) / MetaAccanthis (mobile) | 42.7149px / 400 / 38.4434px | 32px / 400 / 28.8px | system_ui stack (desktop) / MetaAccanthis_regular, Arimo (mobile) | none (platform sans) / Arimo |
| Display h2 (product) | system_ui stack / MetaAccanthis | 79.9458px / 400 / 71.9512px | 47.9458px / 400 / 43.1512px | same as headings | none / Arimo |
| Pairing h1 | system_ui stack / MetaAccanthis | 57.0175px / 400 / 51.3158px | 42.7149px / 400 / 38.4434px | same as headings | none / Arimo |
| App heading (bold) | system_ui stack / MetaAccanthis | 42.7149px / 700 / 38.4434px | 32px / 700 / 28.8px | same as headings | none / Arimo |
| Card and footer h3 | system_ui stack / MetaAccanthis | 23.9729px / 400 / 21.5756px | same | same as headings | none / Arimo |
| Body text | F37Analog (fallback) / MetaAccanthis | 16px / 500 / 22.4px, bold 700 | same | F37Analog, Arimo, Arial (desktop) / MetaAccanthis_regular, Arimo (mobile) | Arimo |
| Buttons | system_ui stack / MetaAccanthis | 16px / 400 / 22.4px / uppercase | same | same as headings | none / Arimo |
| Footer links (main) | Inter | 16px / 500 / 22.4px / uppercase | MetaAccanthis, 16px / 500 / 22.4px / none | Inter (desktop) / MetaAccanthis_regular, Arimo (mobile) | Inter 500 |
| Footer links (secondary) | F37Analog (fallback) | 16px / 500 / 22.4px (visibly uppercase) | MetaAccanthis, 16px / 500 / 22.4px | F37Analog, Arimo (desktop, uppercase) / mobile as above | Arimo |
| Copyright | F37Analog (fallback) | 14.2544px / 500 / 19.9561px | MetaAccanthis, same size | as body | Arimo |
| Store line | F37Analog, serif (fallback) | 28px / 500 / 36.4px | 20px / 500 / 26px | F37Analog, Tinos, Times New Roman, serif (desktop) / sans at mobile | Tinos |
| Review quote | F37Analog (fallback) | 32px / 500 / 28.8px | 16px / 500 / 22.4px | as body | Arimo |
| Letter-spacing (all roles) | normal | normal | normal | normal | n/a |
| Font style (all roles) | normal | normal | normal | normal | n/a |

Licence status:
- F37Analog: commercial, F37 Foundry. Not downloaded or hot-linked. The clone names it first in the stack, so it renders on machines where it is installed or licensed. Licence: https://www.f37foundry.com/
- MetaAccanthis_regular: commercial, served to the source site by a third-party font-licensing app from the store's Shopify CDN. Not downloaded or hot-linked. The clone names it first in the mobile stack. Licence must be bought from its licensor or from the app's vendor.
- Inter: SIL Open Font License, loaded from Google Fonts.
- Arimo: SIL Open Font License, loaded from Google Fonts. Metric- and outline-compatible with Arial and Liberation Sans, so it matches the source's rendered fallback here.
- Tinos: SIL Open Font License, loaded from Google Fonts. Metric-compatible with Times New Roman; used as the serif fallback.
- Alfa Slab One: SIL Open Font License, loaded from Google Fonts. Decorative only (stamps and logo).
- system_ui stack: platform fonts, nothing loaded. Identical to the source's heading stack.

Known differences:
- Desktop footer secondary links: the source's computed transform is none, but the text is visibly uppercase. The clone uppercases them in CSS at desktop and sets none at mobile, to match the visible result at each width.
- Mobile body: the source fallback at 390px is Arial/Liberation, not MetaAccanthis, because MetaAccanthis never loads here. The clone's Arimo fallback renders the same glyphs.
