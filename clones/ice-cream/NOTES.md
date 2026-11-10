# Design notes: ice-cream (source: https://birdsofparadise.sg/)

Source is a Shopify storefront (theme CSS + DM Sans from Shopify CDN). Extraction: HTML + theme.css
read directly, live render via Playwright (1440px full-page screenshot, measured with getComputedStyle).

## Tokens (from theme :root)
- Colours: bg #edebeb, text #334641, dark text #111c19, muted text #6b7874, primary/secondary #9a837b,
  primary hover #805748, announcement bg #f3b7ac, announcement text #fffcf9, accent bg #f5f5f5,
  footer bg #ece5e3, footer text #1d2523, sub-footer bg #000 / text #fcfaf7, link highlight #d2815f.
- Font: DM Sans (400 body, 500 bold). Nav/buttons/kickers: uppercase, letter-spacing 0.09em.
- Base sizes: nav 13.8px; hero subtitle ~21px; hero button 11.7px / 500 with 0.09em tracking.
- Grid gap 20px, page gutter 25px desktop (footer/hero edge-to-edge), section padding ~100px.

## Sections (top to bottom, y in px at 1440 wide)
1. Announcement bar, 34px, salmon bg, centred uppercase line.
2. Header, 74px, transparent over hero. Nav left (uppercase links), centred logo, icons right (account, search, bag).
3. Hero slideshow, 450px tall, full bleed photo with white centred H1, subtitle, ghost button; pill of slide dots bottom-right.
4. Best sellers: centred chip label (bg tint), prev/next arrows at row edges, 4 product cards 340px wide,
   portrait image panel (~340x470), white "BEST SELLER" tag top-left, name, one-line description, price.
5. Proudly awarded: small caps heading with short rule, row of three badges (~80-140px), centred.
6. Our approach: centred heading + rule, edge-bleeding row of four image cards (336x340), then four
   short text columns beneath.
7. Feature band (#f5f5f5, 184px): three centred icon + uppercase caption columns.
8. Our boutiques: heading + rule, six cards 226x283 (4:5) with uppercase labels beneath.
9. Press band: 70px, #9a837b, marquee of white serif/sans press wordmarks.
10. Social gallery: four 343x428 cards with overlaid handle text, pagination dots.
11. Footer: left panel #ece5e3 with four link columns and social icons; right panel newsletter
    (copy, underline email field, small button); sub-footer black bar with uppercase copyright.

## Interactions
- Header turns solid on scroll (nav text colour changes from white to dark).
- Hero auto-advances slides (~5s), dot pagination.
- Product, approach, boutique and social rows are horizontal scroll-snap carousels with arrows.
- Press band is an infinite CSS marquee (30s loop).
- Sections fade/slide up on scroll into view.
- WhatsApp floating button bottom-left (green circle).

## Responsive
- Mobile collapses nav into hamburger; product and boutique rows become swipeable carousels;
  feature band stacks; footer panels stack.

## Not reproduced / substitutions
- All photography replaced with CSS gradients and inline SVG art at the same aspect ratios.
- Logos (brand mark, award badges, press wordmarks) replaced with placeholder typography and drawn shapes.
- Brand name, copy, prices, addresses and handles are invented placeholders.
- Shopify app widgets (reviews, pickup, cart drawer) omitted.
