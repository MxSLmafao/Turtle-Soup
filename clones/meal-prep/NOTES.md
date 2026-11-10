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
- Placeholder brand: "Quillmere Kitchen" (not the source brand). Monogram logo drawn in SVG.
- Imagery replaced with inline SVG meal-tray illustrations and CSS gradients at the same aspect ratios.
- All copy rewritten from scratch. Address, phone and reviews are invented placeholders.
- Certification and sustainability badges replaced by generic drawn shapes with neutral labels.

## Fonts

Source families (both measured at 1440 and 390 px): only two, Inter and Bebas Neue. The source's own
@font-face rules serve self-hosted copies of both, and both are free open-licence families.

| Role (source sample) | Source family | Source values 1440 / 390 | What the clone loads | Licence status |
|---|---|---|---|---|
| Nav links | Inter | 14px / 400 / 20px, no transform | Inter 400 (Google Fonts) | SIL OFL 1.1, free |
| Sign-in button | Inter | 12px / 600 / 16px, no transform | Inter 600 | SIL OFL 1.1, free |
| Hero eyebrow | Inter | 16px / 700 / 24px, +0.4px, uppercase / 12px / 700 / 19.5px, +0.3px | Inter 700 | SIL OFL 1.1, free |
| H1 hero | Inter | 60px / 800 / 60px, +1.5px / 40px / 800 / 50px, +1px | Inter 800 | SIL OFL 1.1, free |
| H2 section | Inter | 48px / 700 / 66px (why: 48px / 48px) / 30px / 700 / 41.25px (why: 36px) | Inter 700 | SIL OFL 1.1, free |
| Intro, sub-heads | Inter | 18px / 400 / 28px (both widths) | Inter 400 | SIL OFL 1.1, free |
| Card title | Inter | 22px / 600 / 33px | Inter 600 | SIL OFL 1.1, free |
| Card list, body | Inter | 16px / 400 / 24px | Inter 400 | SIL OFL 1.1, free |
| Buttons (CTA, chips) | Inter | 14px / 600 / 14px, no transform (hero CTA uppercase) | Inter 600 | SIL OFL 1.1, free |
| Badges | Inter | 16px / 600 / 24px, uppercase | Inter 600 | SIL OFL 1.1, free |
| Meal name / description | Inter | 20px / 700 / 28px and 12px / 400 / 16px | Inter 700, 400 | SIL OFL 1.1, free |
| Why heading / body | Inter | 18px / 700 / 28px and 14px / 400 / 20px | Inter 700, 400 | SIL OFL 1.1, free |
| Dine-in eyebrow, heading, body | Inter | 12px / 600 / 16px uppercase; 20px / 700 / 28px; 16px / 400 / 24px | Inter 600, 700, 400 | SIL OFL 1.1, free |
| Reviews heading | Inter | 24px / 700 / 32px / 36px / 700 / 40px | Inter 700 | SIL OFL 1.1, free |
| Review quote and name | Inter | 12px / 400 / 16px; 12px / 600 / 16px | Inter 400, 600 | SIL OFL 1.1, free |
| Enquiry heading, body | Inter | 20px / 700 / 28px; 14px / 400 / 20px | Inter 700, 400 | SIL OFL 1.1, free |
| Footer headings | Inter | 14px / 800 / 20px, uppercase | Inter 800 | SIL OFL 1.1, free |
| Footer links, copyright | Inter | 14px / 400 / 20px | Inter 400 | SIL OFL 1.1, free |
| Footer tagline, help line | Bebas Neue | 26px / 400 / 20px and 26px / 400 / 26px | Bebas Neue 400 | SIL OFL 1.1, free |

Loading: a single Google Fonts css2 request for Inter 400 to 800 and Bebas Neue 400 (see index.html).
Stacks are the exact family first, then a generic fallback. Neither family needs a name-first commercial
stack, because both are free. No font files were downloaded or copied from the source.

Roles without a source text equivalent: the announcement kicker and the calorie roundel label. These
use the clone's own design values and are not part of the source's type scale.

## Visual diff

Compared fresh full-page and per-section shots of the original (1440 and 390) with the clone. Round 1 and
round 2 fixes are applied. Items still open are listed last.

Fixed:
- Announcement strip: original is a tall app-launch banner (about 128px desktop, about 33px phone). The clone now matches heights with a display headline and store badges (desktop), and a thin strip on phone.
- Container: original content width is 1184px (128px side inset at 1440). Clone --max changed from 1280 to 1184. Hero text now sits at a 40px left inset, as in the original.
- Hero: H1 now two lines at 60px. Hero height 900px (matches original). Phone hero text is centred and CTAs are centred, auto-width, as in the original. Added a neutral circular badge at bottom-left, as in the original's certification badge slot. Added the original's five-label layout.
- Option cards: four equal columns with 16px gaps, 284px wide, as in the original. Header height 192px. Featured card lifted 50px with its "most popular" tag inside the top of the card. CTA radius reduced to 6px.
- Intro-to-options spacing reduced to match the original section (1102px combined in original, 1064px in clone).
- Popular: grid 1248px wide (4 columns of about 300px), 8px card radius, 4px chip radius. Calorie roundel changed to a double-ring stamp. Phone grid is two columns.
- Why: items no longer forced to 300px min-height. Description colour lightened to match the original's pale grey.
- Dine banner: card radius 6px and height closer to 270px (original section height).
- Reviews: 340px heading column plus three cards, 14px stars, 8px radius, as in the original.
- Enquiry band: padding 48px to match the original band height (160px).
- Footer: 120px side inset and 300px logo column, as in the original's column positions.
- Sign-in button radius 4px.

Still open (for the record):
- Photography: photo slots (hero bowls, four popular meal photos, dine-in background) still use drawn SVG and gradient stand-ins. Generation blocked by a model quota error (see report).
- Option card headers in the original are full-bleed cartoon illustrations; the clone keeps simple drawn trays. These are illustrations, not photos, so they are not in scope for 7b.
- Original hero collage fills the full right half edge to edge with food photos. The clone keeps an airier composition with drawn trays.
- Original footer bottom uses colour logo images; the clone uses neutral drawn badge shapes of the same size.
- Mobile: the original hero has a photo background behind the centred text; the clone uses a lilac gradient.
- Hover effects and scroll reveals are approximated, not copied from the original's exact transitions.

## Gap fixes

Checklist from the fnb-site-gaps skill, applied to this clone. Placeholder data only.

| # | Gap | Before | After | Placeholders used |
|---|---|---|---|---|
| 1 | Image alt text | No `<img>` elements. Meal tray illustrations were `role="img" aria-hidden="true"`, so they had no name. | Four meal illustrations are `role="img"` with `aria-label` (sample illustration). Decorative art stays `aria-hidden`. No `<img>` tags exist, so there is nothing else to alt. | None. |
| 2 | Local business structured data | None. | One JSON-LD `@graph` in `<head>`: Organization, WebSite and FoodEstablishment (priceRange, servesCuisine, address, geo, openingHours, hasMenu, acceptsReservations, OrderAction, sameAs). Parses as valid JSON. | Domain `www.example.com/meal-prep/`, "1 Sample Street, Singapore 000000", "+65 0000 0000", sample hours, example.com social URLs, Singapore centroid coordinates. `image` omitted (no file yet). |
| 3 | Heading structure | Footer used `h4` directly under `h2` (skipped a level). | Exactly one `h1` (hero, now "Healthy Meal Prep, Made Simple."). Sections `h2`, cards and footer groups `h3`. Footer headings changed to `h3` with the same styling. | None. |
| 4 | Title tag | "Home \| Quillmere Kitchen - Balanced meals delivered across the city" (brand led, starts with "Home"). | "Healthy Meal Prep in Singapore \| Quillmere Kitchen" (50 characters). | Brand name only. |
| 5 | Meta description | "Quillmere Kitchen: chef-designed, nutrition-led meals, meal plans, catering and dine-in. Placeholder design study." | 143 characters: category, Singapore, one call to action ("Order online or book a table at Quillmere Kitchen this week."). | None. |
| 6 | Technical basics | `lang="en"`; no canonical, robots, Open Graph or Twitter tags; no robots.txt or sitemap. | `lang="en-SG"`; viewport kept; canonical; `robots` meta; og:type, title, description, url, locale, site name; `twitter:card` summary_large_image; `robots.txt` with sitemap line; `sitemap.xml` with the one URL. `og:image` omitted because `img/` has no file (noted in head). | `https://www.example.com/meal-prep/`. |
| 7 | Reviews | Three testimonials present. Attributions were "HR Manager, sample company", "Sample Customer", "Sample Member". | Same three quotes with first names and context: "Priya, HR manager (sample)", "Sarah, weekly member (sample)", "Daniel, office lunch regular (sample)". HTML comment says they are sample content. | First names only, invented. |
| 8 | Newsletter sign-up | Absent. | New section before the enquiry band: heading, one-line reason, visible label "Email address" (associated with the input), email input and "Subscribe" button. Uses the clone's own input and `btn-plum` styling. Form posts to `#newsletter` and does not submit anywhere. | Placeholder email `you@example.com`. |
| 9 | Chat / WhatsApp button | Present: floating pill bottom-right with `aria-label`, reduced to a 44px circle on phones. | Unchanged. Checked: does not cover the footer copyright (bottom padding reserved) or other controls. | Placeholder link `#chat`. |

Checks: one `h1`; JSON-LD parses; no `<img>` tags; no horizontal overflow at 390 or 1440; no console errors.
