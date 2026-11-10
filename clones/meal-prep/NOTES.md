# Design study notes: meal-prep / ghost kitchen homepage

Source: https://www.amgdglobal.com/en-sg (Next.js app, rendered with Playwright at 1440px and 390px).
Source CSS is a Tailwind + daisyUI build (chunks f1b99cac548cc3d5.css, 2633aee057b58de1.css, 5bb47335cb18dfe0.css).
Downloaded HTML/CSS/screenshots live in the scratchpad, not in the repo.

## Extraction method
- Render: yes, full Playwright render at 1440 and 390 px (fullPage screenshots, computed styles, section geometry).
- CSS: read the three stylesheets for tokens (daisyUI oklch variables, font-faces, breakpoints).
- Not copied: photography, logos, icons, cartoon mascots, fonts files (Google Fonts used instead), copy text.

## Tokens (observed)
- Primary plum: oklch(0.466 0.168 353) (approx #9b1f63). Primary content: oklch(0.893 0.034 353).
- Accent orange: oklch(0.743 0.172 61.5). Text: oklch(0.2 0 0). Muted body text: rgb(75 85 99).
- Card palette: orange, plum, green, red (four ordering options).
- Fonts: Inter (body, 400/600/700/800), Bebas Neue (eyebrows and footer headings).
- Scale: H1 60px/800 (desktop), 40px mobile. H2 48px/700 desktop, ~30px mobile. Body 16px/24px. Small 14px.
- Breakpoints (Tailwind): 640, 768, 1024, 1280, 1536. Container padding 32px (px-8) mobile, 128px (lg:px-32) desktop.
- Buttons: solid plum, uppercase 14px/600, about 175x48, radius about 8px. Outline/white variants.

## Section order (desktop 1440px, y positions from source)
1. Announcement strip (0-129): full-bleed plum band with app-store badges, 137px tall including the nav.
2. Sticky nav (129-209): plum bar, 80px tall. Logo left, uppercase links centre-right, cart icon, white "Sign in" pill. Mobile: hamburger + logo + cart + sign-in.
3. Hero (209-1109, 900px): lilac photo background, eyebrow in orange Bebas-style caps, large plum H1, three paragraphs, three buttons stacked two-up. Right side: product photography collage with coloured labels.
4. Intro (1109-2211): centred H1-style headline, centred paragraph (max width about 900px).
5. Service options (2211-2917): centred H2, subhead, four cards (380px wide each, 1280 total). Each card has a coloured header with eyebrow, title, illustration; bullet list; coloured pill CTA. The second card is "Most popular": raised, plum border, badge above.
6. Popular meals (2349-2861): plum-like H2, row of pill filters (first active in orange), four meal cards with calorie roundel, optional diet ribbon, macro legend, title, description.
7. Why choose (2917-3369): H2 plus four columns separated by vertical hairlines, line icons in brand colours.
8. Dine-in banner (3370-3640): full-bleed photo with white translucent card, feature row with dividers, two CTAs.
9. Testimonials (3641-3947): left heading, three white cards with 5-star row, quote, attribution.
10. Enquiry CTA band (3947-4107): plum gradient, heading and sub, WhatsApp-green button and outline button.
11. Footer (4107-4766): 4 columns (logo block, Company, Products, Services with NEW pills), then a white strip with social icons, tagline, certification and sustainability badges, app badges, copyright.
12. Floating green chat pill, fixed bottom-right (about 191x40).

## Interactions
- Sticky header (sticks at top after the banner scrolls away).
- Hover: buttons darken slightly; cards lift with shadow; carousel-like filter chips.
- Scroll reveals on sections (fade and rise).
- Mobile: hamburger drawer; cards stack single column; filter chips scroll horizontally.

## Responsive
- 390px: single column, H1 40px, nav collapses, hero text centred, buttons stacked.
- Four cards to two columns at 768px, to four columns at 1024px.

## Clone decisions
- Placeholder brand: "Fernhollow Kitchen" (not the source brand). Monogram logo drawn in SVG.
- Imagery replaced with inline SVG meal-tray illustrations and CSS gradients at the same aspect ratios.
- All copy rewritten from scratch. Address, phone and reviews are invented placeholders.
- Certification and sustainability badges replaced by generic drawn shapes with neutral labels.
