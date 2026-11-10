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

## Fonts

Source family: DM Sans (open licence, SIL OFL). The source serves it from the Shopify CDN as a static
woff2; the clone loads the same family from Google Fonts (weights 400 and 500). Name-first stack is
"DM Sans", sans-serif. No licence purchase is needed.

Source values are fluid (vw-based). The clone interpolates each role linearly between its 390px and
1440px values with clamp(), so intermediate widths track the source.

| Role | 1440px (size / weight / lh / tracking / case) | 390px | Clone |
|---|---|---|---|
| Announcement bar | 11.7 / 400 / 1.5 / .09em / upper | 10.8 | matched |
| Nav links | 10.35 / 400 / 1.5 / .09em / upper | 10.35 | matched (desktop) |
| Hero H1 | 33.6 / 400 / 1.25 / normal | 29.4 | matched |
| Hero subtitle | 20.9 / 400 / 1.375 | 16.15 | matched |
| Hero button | 11.7 / 500 / 1 / .09em / upper | 10.8 | matched |
| Section kicker | 13.05 / 500 / 1.25 / .09em / upper | 11.7 | matched |
| Chip (Best sellers) | 10.35 / 400 / 1.5 / .09em / upper | 10.8 / 500 | matched |
| Product badge | 10.35 / 500 / 1.625 / .09em / upper | 10 | matched |
| Product title | 13.775 / 500 / 1.5 | 12.35 | matched |
| Product description | 12 / 400 / 1.5 / .08px | 10.5 | matched |
| Price | 12.35 / 400 / 1.5 | 11.4 | matched |
| Body (approach text) | 13.775 / 400 / 1.5 | 12.35 | matched (role measured from a source body paragraph) |
| Rewards copy | 16.625 / 400 / 1.375 | 14 | matched |
| Feature caption | 13.05 / 500 / 1.5 / .09em / upper | 11.7 | matched |
| Boutique label | 13.05 / 500 / 1.5 / .09em / upper | 11.7 | matched |
| Footer heading | 11.7 / 500 / 1.5 / .09em / upper | 14 | matched |
| Footer link | 13.775 / 400 / 1.5 | 12.35 (estimate) | 390 value estimated; source footer links are collapsed accordions at 390 |
| Copyright / sub-footer | 11.7 / 400 / 1.5 / .09em / upper | 10.8 | matched |
| Join button | 11.7 / 500 / 1 / .09em / upper | 10.8 | matched |

Logo wordmark (Fernhollow) is a placeholder logo, not a source role, and is not matched.
Clone sets `font-optical-sizing: none` so the variable DM Sans renders at its default optical size, the
same glyph cut as the source's static file.

Licence status: DM Sans is free under the SIL Open Font License; no purchase needed.

## Visual diff

Two compare-fix rounds at 1440px and 390px (original vs clone, section by section, screenshots in
the private vd-ice-cream scratch folder).

Fixed in the rounds:
- Hero: headline/CTA moved down to the source's vertical position (~y 200-320 at 1440); scrim moved under the text.
- Approach: four-up row now bleeds to the page edges (cards 336px wide, 30px gap) with captions aligned to the card edge.
- Boutiques: row bleeds to the source's 16px inset so labels align at x=34.
- Awards: added the press quote block that the source has under the badges.
- Community: added "Our community" heading and the Instagram sub-line above the gallery.
- Products: uniform neutral #e8e8e8 product backdrop (source studio shots); mobile add-to-cart buttons and a progress bar under the row.
- Newsletter panel colour #8a8989 and join button #9a837b, as sampled from the source.
- Press band height 82px.
- Mobile header: menu on the left, no search icon, logo centred, bag at right.
- Mobile approach: 2x2 grid with captions under each card; boutiques show two per row.
- Mobile footer: newsletter panel first, then accordion groups (ABOUT US, NEED HELP?, CATERING, CAREERS).

Discrepancies left:
- Photography: every photo slot still uses drawn art (hero, product, approach, boutique and gallery images). Generation via the image tool was blocked (quota exhausted, reset in about 2h40m), so these are open.
- Hero slides: source shows a photographic hero; the clone shows a gradient with a drawn tub.
- Press band: source shows press logos; clone uses typeset names (placeholder by design).
- Awards: source shows logos (not reproduced); clone shows neutral placeholder badges.
- Desktop nav logo is a smaller placeholder wordmark (source uses a larger arc mark).
- Footer link size at 390 is still an estimate (see Fonts).

## Gap fixes

Placeholders used: domain https://www.example.com/ice-cream/ (canonical, sitemap, JSON-LD);
address "1 Sample Street, Singapore 000000"; phone "+65 0000 0000"; chat link https://wa.me/6500000000;
geo 1.3521, 103.8198 (central Singapore, placeholder); hours 11:00-22:00 daily; sample social URLs on
example.com; sample reviews with first names only (HTML comment marks them as sample content).

| # | Gap | Before | After |
|---|-----|--------|-------|
| 1 | Image alt text | 3 hero h1s and SVG art without labels | Decorative SVG and icons aria-hidden; drawn product, approach and gallery art has role="img" and aria-label; no <img> elements present |
| 2 | Local business structured data | none | JSON-LD (@graph): IceCreamShop with address, geo, opening hours, menu, order action, sameAs; Organization; WebSite. Parses as valid JSON |
| 3 | Heading structure | three h1 (one per slide) | exactly one visually hidden h1; hero slide titles are h2; footer headings are h3 |
| 4 | Title tag | "Fernhollow Gelato Co. | Botanical gelato, small batch" (brand-led) | "Botanical Gelato in Singapore | Fernhollow Gelato Co." (53 chars) |
| 5 | Meta description | 98-char tagline | 145-char sentence on offer and place, with a call to action |
| 6 | Technical basics | lang="en", no canonical/OG/Twitter/robots | lang="en-SG"; canonical; robots meta; og:type/site_name/title/description/url/locale; twitter:card summary_large_image; robots.txt and sitemap.xml added. og:image omitted (no img/ folder; no generated images) |
| 7 | Reviews | none | "What guests say" section: three sample quotes (first name plus context), styled with the page's palette and type |
| 8 | Newsletter | present, unnamed form | form has aria-label "Newsletter sign-up"; input already labelled; reason line present |
| 9 | Chat button | bottom-left, href="#chat" | bottom-right (16px inset), links to https://wa.me/6500000000 in a new tab, aria-label "Chat with us on WhatsApp" |

Verification: one h1; JSON-LD parses (IceCreamShop, Organization, WebSite); zero images without alt;
no horizontal overflow at 1440 or 390; no console errors or failed requests.

## Photo slots

Generated photos are in img/ (one file so far). Image generation returned a quota error (429, reset in about 4h48m) after the hero photo, so no further images were generated and the rest of the photo slots keep their drawn art.

| Slot | Status | Asset / drawn art |
|---|---|---|
| Hero slide 1 | Photo | img/hero-gelato-botanicals.jpg (cover-fit, under the scrim); alt text set; og:image and JSON-LD image point at it on the placeholder domain |
| Hero slides 2 and 3 | Drawn | CSS gradients with SVG tub and scoop |
| Best-seller cards (4) | Drawn | SVG scoop on tinted backdrop (labelled role="img") |
| Approach cards (4) | Drawn | SVG and petal stand-ins (labelled role="img") |
| Scoop-bar tiles (6) | Drawn | CSS shopfront motifs |
| Community gallery (4) | Drawn | SVG scoop, tub and sprig (labelled role="img") |
| Awards, press band | Placeholder by design | Neutral badges and typeset press names (no logos) |

Next step once the quota resets: generate the four product photos and the six scoop-bar interiors using the section 7b prompts, optimise to JPEG under 300 KB each, and swap them into the matching slots.

## Polish pass

Method: replica capture of the source at 1440x900 and 390x844 (level structure, cookie and chat widgets hidden), then replica compare of the clone with the added sections (reviews, floating chat) hidden. Pixel scores are not a goal: photos and brand differ on purpose.

| Axis | Baseline | Final | Gate (structure) |
|---|---|---|---|
| Layout | 6.5 | 13.4 | >= 90 (not met) |
| Style | 74.8 | 78.4 | info |
| Pixels | 0.0 | 0.0 (34 placeholders excluded) | info |
| Motion | not measured | not measured | info |

Layout is held back mainly by the source's photographic media (product photos, boutique and gallery images, icons) which the clone draws as placeholders, plus the source's wrapper structure. These placeholders are marked data-replica="placeholder" so their boxes are checked but their pixels are not scored.

Changes:
- Hero: photo on slide 1, stronger scrim with a centre pool behind the copy so the headline and CTA read clearly at 1440 and 390; text shadow strengthened.
- Mobile rhythm: hero 442px, section top padding 40px, carousel arrows hidden on mobile, tighter award, quote, features and boutique spacing (matches the source's mobile order).
- Desktop rhythm: approach, boutiques and community top padding 40px; features band 48px padding; press band 80px top margin; awards 40px top padding. Brings the 1440 page height from 5077 to 4775 (source 4303).
- Style: mobile add-to-cart matches the source (weight 500, #000 on #e5e5e5); mobile footer accordion borders match; community heading 16.5px at 1440.
- Interaction: focus-visible outlines on links, buttons, cards and footer headings; product and boutique titles change colour on hover; press feedback on arrows and buttons; Escape closes the mobile menu; accordion aria-expanded; reduced-motion keeps hover transforms off.
- Replica placeholder markup: drawn product, approach, boutique and gallery art, the hero photo and feature icons are marked data-replica="placeholder".

Left open: layout score well below the 90 gate; source photo tiles and icons are not matched; hero overlay is deliberately stronger than the source (black at 0.15) for legibility over the photo; motion not captured (no scroll or hover timing measured).
