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

## Visual diff

Compared fresh captures of the original and clone at 1440px and 390px (full page and per section).

Round 1 discrepancies:
- Hero: source uses photography of bottles on a bar; clone uses drawn bottles and a drawn still. Text block and pagination positions match. (Photo slot, see below.)
- Hero badge: source badge is a photo-free award roundel at the left edge; clone has a neutral gold roundel of the same size and position. Kept as a placeholder badge, not a copy of the award mark.
- About: source headline wraps to three lines at desktop width; clone wrapped to two because the copy is shorter. Heading max-width raised to 750px to match the source column.
- Experiences: source section lead sits on one line at desktop; clone wrapped to two. Lead max-width raised to 780px.
- Stamp cards: source image is 268px wide with about 31px side padding and a 282px tall image; clone had 14px padding and a 262px image. Fixed to 31px padding and 282px image.
- Stamp labels: source labels sit tight under the image; clone had extra space. Fixed.
- Footer: source has an amber rule above the footer and an amber divider line above the copyright; clone's divider was cream at 20% opacity. Divider now amber.
- Footer logo: source is an emblem image, clone is a placeholder monogram. Kept as placeholder (logo, not a photo).
- Band (cocktail photo): source is a photograph; clone is drawn glasses. Photo slot, see below.
- Social tiles: source are six photographs; clone are drawn tiles at the same size and gap. Photo slots, see below.
- Gins slider, marquees, about sprigs, announcement bar, header: matched in size, position and colour.

Round 2: rebuilt the pairs after the fixes above. Heading wraps, stamp card geometry and footer rules now match. Remaining differences are the photo slots and the logo placeholder listed above.

Photography: not generated in this pass. The image generator returned a quota error (quota resets after about 2h44m), so every photo slot keeps its drawn art.

## Gap fixes

Skill: fnb-site-gaps (nine gaps). Placeholder business data only: domain https://www.example.com/distillery/, "1 Sample Street, Singapore 000000", "+65 0000 0000", sample hours (Tue to Sat 15:00 to 22:00, Sun 12:00 to 18:00), social URLs on example.com. Geo coordinates are an approximate Singapore centre point, placeholder only.

| # | Gap | Before | After | Placeholders / notes |
|---|---|---|---|---|
| 1 | Image alt text | No `<img>` tags. Meaningful drawn art was aria-hidden. Decorative SVGs had no explicit attribute. | Meaningful art has `role="img"` and an `aria-label`: both hero slides, the cocktail band, and the six social tiles. Every decorative SVG has `aria-hidden="true"`. Stamp cards keep their visible labels. | No `<img>` exists yet (no photos generated), so width, height and lazy loading do not apply. |
| 2 | Local business structured data | None | JSON-LD `@graph` with WebSite and Distillery (name, url, description, telephone, priceRange, PostalAddress, GeoCoordinates, openingHoursSpecification, hasMenu, ReserveAction, sameAs). Parses with JSON.parse. | `image` omitted because there are no image files. |
| 3 | Heading structure | Two `<h1>` (both hero slides) | One `<h1>` (slide 1 headline). Slide 2 headline is now `<h2>` with the same class, so styling is unchanged. | Gate and popup titles are `<h2>` and sit before the h1 in the DOM. Left as they are. |
| 4 | Title tag | "Copper Heron Distilling Co. \| Small-Batch Gin" (brand plus generic category) | "Gin Distillery in Singapore \| Copper Heron Distilling Co." (57 characters) | Placeholder brand. |
| 5 | Meta description | "Small-batch gins distilled with Southeast Asian botanicals. Tours, gin schools and tastings at the Copper Heron distillery." (about 120 characters) | One sentence with a call to action, 141 characters: "Small-batch gins distilled in Singapore with Southeast Asian botanicals. Book a distillery tour, gin school or tasting at Copper Heron today." | Placeholder brand. |
| 6 | Technical basics | `lang="en"`, viewport present; no canonical, OG, Twitter or robots tags; no robots.txt or sitemap | `lang="en-SG"`; canonical; og:type, og:site_name, og:title, og:description, og:url, og:locale (en_SG); twitter:card summary_large_image; robots index, follow, max-image-preview:large; robots.txt and sitemap.xml added | `og:image` omitted: no files in img/ (photo generation was blocked by quota, see Visual diff). Add it once an image exists. |
| 7 | Reviews | None | New "Guest notes" section after the cocktail band: three quotes with first names and visit types, in the clone's card, eyebrow and section-title styles. An HTML comment marks them as sample content. | Invented first names only: Mei, Daniel, Priya. Not real reviews. |
| 8 | Newsletter sign-up | Present (footer form and popup), but the forms had no accessible name | Both forms have an aria-label. Visible labels are unchanged. | None. |
| 9 | Chat or WhatsApp button | None | Floating amber circular button, bottom-right, with `aria-label`. Appears after 700px of scroll and hides near the footer. Generic speech-bubble icon, not a trademark logo. | Links to `#contact` (no real chat provider). |

Verification: exactly one h1; JSON-LD parses; no `<img>` tags; every SVG has an aria attribute; no overflow at 1440 or 390; no console errors or failed requests.

## Photo slots

Status after the hero-photo follow-up (image generation quota: 429 on the first request after the hero image, so generation stopped and nothing else was generated).

| Slot | Original | Clone now | Notes |
|---|---|---|---|
| Hero slide 1 | Photo of gin bottles on a dark bar | Photo: `img/hero-gin-botanicals.jpg` (object-fit cover, dark overlay on the right for text contrast) | Generated image is a warmer, lighter still life. Overlay keeps headline contrast; checked at 1440 and 390. |
| Hero slide 2 | Photo of a copper still and bottles | Drawn art | Still open. |
| Product carousel (7 bottles) | Product photos | Drawn bottles (SVG) | Still open. |
| Stamp cards (3) | Photos: still, tasting board, glasses | Drawn art | Still open. |
| Cocktail band | Photo of three toasting cocktails | Drawn glasses | Still open (generation blocked). |
| Social tiles (6) | Photos | Drawn tiles | Still open. |
| Newsletter popup art | Photo of bottles | Drawn bottles | Still open. |
| Logos, award badge, footer emblem | Logos and badges | Neutral placeholders | Deliberately not imitated. |

Image metadata: `og:image` and `og:image:alt` and the JSON-LD `image` point to `https://www.example.com/distillery/img/hero-gin-botanicals.jpg`. The img/ folder holds one file, 120 KB, under the 4 MB limit.

## Polish pass

Tools: replica skill (capture at structure level, 1440x900 and 390x844; compare on a scratch copy with the added review section removed, so the scores measure the source sections only). Motion was not captured (no --motion), so motion is not scored. Pixels stay near 0 by design: photos, brand and copy differ on purpose.

Scores (structure level):

| Run | Layout | Style | Pixels | Notes |
|---|---|---|---|---|
| Baseline as shipped (added review section hidden with visibility, which keeps its height) | 17.6 | 82.2 | 0.0 | Score inflated by the 519px (1440) and 918px (390) review block that the compare keeps in layout. |
| Baseline, added section excluded | 31.7 | 83.4 | 0.0 | Scratch copy without the review section. |
| Final | 33.5 | 86.9 | 0.0 | Same excluded copy. |

The layout axis is gated at 90 at this level, so NOT YET. The remaining layout items are not fixable without changing the design or copy: the source's hero is a looping video (no asset), the source's marquee and product copy differ on purpose, and the source's footer and gallery photos are different. Stopped there rather than chase the score.

Changes made in this pass:
- Layout: the six social tiles are links, as in the source (anchor elements, placeholder example.com target), with square corners at both widths.
- Layout: the hero slides are wrapped in a whole-slide link beneath the copy, badge and controls, so the buttons stay clickable. Slide 1 link goes to the gins; slide 2 goes to experiences.
- Layout: mobile stamp cards use 16px padding and a 262px image, closer to the source card proportions; mobile cocktail band is 500px tall, as in the source.
- Style: amber buttons and the footer top rule use the 1px amber border from the source; the round slider arrows use a 2px border; the slide counter uses the source's 4px letter-spacing.
- Checks: 1440, 768 and 390 with no overflow, no console errors or failed requests, one h1, JSON-LD parses, all images load and have alt text, no source-brand names in code.

Still off, by reason:
- Hero video (source) vs photo (clone): no video asset.
- Copy-driven text in the marquees and the announcement bar: intentional, placeholder copy.
- Gallery and stamp photos: drawn art, see "Photo slots".
- Footer emblem: placeholder, see "Visual diff".
