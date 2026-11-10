# Design study notes: distillery homepage (source: https://brassliondistillery.com/)

Platform: Shopify (theme CSS at /cdn/shop/t/33/assets/theme.css). Rendered with Playwright
(render OK via proxy). Full-page screenshots taken at 1440px and 390px; reveal animations were
triggered by scrolling before capture.

## Tokens (from inline :root in the homepage)
- Background cream: rgb(243 234 220) = #F3EADC
- Ink (heading/body/header/footer): rgb(69 70 75) = #45464B
- Accent amber: rgb(220 155 39) = #DC9B27
- Footer/header text: cream #F3EADC; footer link hover amber
- Radius: 6px for buttons and inputs; shadow 0 5px 30px ink @10%
- Body font: Montserrat 400 (15.9px at 1440, 27px line-height, 1.7)
- Heading font: Bricolage Grotesque 700 (uppercase on most headings)
- Type scale desktop: hxl 56px, h0 48, h1 40, h2 32, h3 28, h4 22, h5 17, body 16, small 14, tiny 12
- Mobile scale: hxl 40, h0 36, h1 32, h2 28, h3 22, h4 18, body 15
- Buttons: 8px 28px padding, Montserrat 500 15.6px

## Section order (desktop, y positions relative to page top)
1. Announcement bar, 37px, cream, centred text with trophy icon
2. Header, transparent over hero (cream text), 108px tall; hamburger left, logo centre, search/account/cart right; turns ink on hover/scroll
3. Hero slideshow, 863px tall, full bleed photo, right-aligned headline (h1 uppercase, 2 lines), paragraph, amber button; award badge on left edge; pagination "1 / 2" with round outline arrows bottom-right
4. Amber marquee strip, 47px, uppercase text scrolling
5. Product slider, 863px, dark ink gradient, 3 bottles visible, bottom product title + tagline + amber button; "2 / 7" counter with round arrows
6. Rich text "Who we are", 746px, cream, small uppercase label, two-paragraph uppercase statement (32px), amber button, decorative botanical sprigs and juniper berries
7. Amber marquee 2, 47px
8. Multicolumn "Step inside our world", 911px, centred h2 + text + outline button, three perforated stamp cards (image + uppercase label), two-segment progress bar
9. Full-bleed photo band, 650px, cocktails toasting over bokeh bar
10. Social gallery, amber, 494px: handle heading, outline button, row of 6 square photos (216px)
11. Footer, ink, 3 columns (newsletter / explore links / logo), divider, copyright, back-to-top button

## Interactions
- Age gate on first load: full-screen cream overlay with logo, "Old enough to enter?" and two buttons (No / Yes 18+). "No" shows a sorry message and a leave option.
- Newsletter popup after the gate: cream card with product photo, "Get 10% off..." heading, email field, dark subscribe button, close X.
- Hero and product slider autoplay/arrow navigation with counters; product slider shows 3 per view on desktop, 1 on mobile.
- Scroll reveals (fade/rise) on sections; sticky header on scroll; back-to-top button.
- Marquees are CSS-only infinite translate loops.

## Responsive
- Desktop 1440 with 1.5rem gutters; stacked layout below 749px; product slider single card; stamp cards horizontal snap.

## Imagery (not copied)
All photography is replaced with inline SVG illustrations (copper still, bottles, coupes, botanicals) and CSS gradients at the same aspect ratios.
