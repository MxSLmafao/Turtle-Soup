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

## Fonts

Source families (computed on the source homepage, 1440px and 390px):
- **Bricolage Grotesque** (headings, marquees, footer headings, product names) and **Montserrat** (body, buttons, nav, captions). Both loaded by the source as Google Fonts-equivalent files from the Shopify CDN.
- Only Bricolage 700 and Montserrat 400/500 are used in the rendered homepage. The source's theme CSS also declares Noka, DM Sans and Times, but none of them render on the homepage.

Licence: both families are free and open-licence (SIL Open Font License 1.1). The clone loads them from Google Fonts, the official free host. No source font file was downloaded, copied, base64-encoded or hot-linked. No commercial licence is needed.

Clone loads: `Bricolage+Grotesque:wght@700` and `Montserrat:wght@400;500;700` (exactly the weights in use).

| Role | Source family | 1440px (size / weight / line-height / ls / case) | 390px (size / weight / line-height / ls / case) | Clone | Match |
|---|---|---|---|---|---|
| Body / paragraph | Montserrat | 15.936px / 400 / 27.0912px / normal / none | 14.94px / 400 / 25.398px / normal / none | body, `.section-lead`, `.gins__tag` | identical |
| Hero h1, slide 1 (h0) | Bricolage Grotesque | 47.808px / 700 / 62.1504px / normal / none | 35.856px / 700 / 46.6128px / normal / none | `.hero__title` | identical |
| Hero h1, slide 2 (h1) | Bricolage Grotesque | 39.84px / 700 / 51.792px / normal / none | 31.872px / 700 / 41.4336px / normal / none | `.hero__title--alt` | identical |
| Hero text, slide 1 (small) | Montserrat | 13.944px / 400 / 23.7048px / normal / none | 12.948px / 400 / 22.0116px / normal / none | `.hero__text--sm` | identical |
| Hero text, slide 2 (medium) | Montserrat | 15.936px / 400 / 27.0912px / normal / none | 14.94px / 400 / 25.398px / normal / none | `.hero__text--md` | identical |
| Product name (h3) | Bricolage Grotesque | 27.888px / 700 / 36.2544px / normal / none | 21.912px / 700 / 28.4856px / normal / none | `.gins__name` | identical |
| Section h2 (about and experiences) | Bricolage Grotesque | 31.872px / 700 / 41.4336px / normal / none | 27.888px / 700 / 36.2544px / normal / none | `.about__title`, `.section-title` | identical |
| Eyebrow ("WHO WE ARE") | Montserrat | 11.952px / 500 / 20.3184px / 2px / uppercase | same | `.eyebrow` | identical |
| Marquee | Bricolage Grotesque | 15.936px / 700 / 23.1072px / normal / none | 14.94px / 700 / 21.663px / normal / none | `.marquee` | identical |
| Button | Montserrat | 15.6173px / 500 / 23.5853px / normal / none | same | `.btn` | identical |
| Nav / drawer top-level | Montserrat | 23.904px / 500 / 31.0752px / normal / none | 22.41px / 500 / 29.133px / normal / none | `.drawer a` | identical (top-level size; source sub-links are 19.12px / 17.93px) |
| Footer heading | Bricolage Grotesque | 15.936px / 700 / 23.1072px / normal / none | 14.94px / 700 / 21.663px / normal / none | `.footer__head` | identical |
| Footer link | Montserrat | 15.936px / 400 / 27.0912px / normal / none | 14.94px / 400 / 25.398px / normal / none | `.footer__col ul a` | identical |
| Footer legal | Montserrat | 12.7488px / 400 / 21.673px / normal / none | 11.952px / 400 / 20.3184px / normal / none | `.footer__legal` | identical |
| Copyright | Montserrat | 13.944px / 400 / 23.7048px / normal / none | 12.948px / 400 / 22.0116px / normal / none | `.footer__bottom` | identical |
| Newsletter heading | Bricolage Grotesque | 21.912px / 700 / 28.4856px / normal / none | 17.928px / 700 / 23.3064px / normal / none | `.news__title` | identical (checked in CSS; popup hidden in the computed-style run) |
| Age gate heading | Bricolage Grotesque | 31.872px / 700 / 41.4336px / normal / none | 27.888px / 700 / 36.2544px / normal / none | `.gate__title` | identical (checked in CSS; gate hidden in the run) |
| Social handle | Bricolage Grotesque | 27.888px / 700 / 36.2544px / normal / none | 21.912px / 700 / 28.4856px / normal / none | `.social__handle` | identical |
| Announcement text | Montserrat | 15.936px / 400 / 27.0912px / normal / none | 14.94px / 400 / 25.398px / normal / none | `.announce` | identical; bar now wraps on mobile and the header offset follows it |
| Stamp label (card title) | Bricolage Grotesque | not measured (text not captured by the probe); size inferred from the screenshot as the h3 scale: 27.888px / 700 / 36.2544px | 21.912px / 700 / 28.4856px | `.stamp__label` | inferred, not computed |
| Slide counter ("1 / 2") | Montserrat | not measured; set to the small-text scale 13.944px / 400 | 12.948px / 400 | `.slide-nav__count` | inferred |

Not a text role: the source logo is an image, so the clone's wordmark is a placeholder. It uses the loaded weights only (Bricolage 700 for the name, Montserrat 500 for the sub-line). It does not reproduce the source logo.

Name-first font stacks: not needed. Both families are free, so each stack is the exact family name followed by `sans-serif`.
