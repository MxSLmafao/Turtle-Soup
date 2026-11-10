# Reverse-engineering notes: burntends.com.sg (homepage)

Source: https://burntends.com.sg/ (WordPress + Elementor, Elementor Pro header/footer). Rendered with Playwright
at 1440x900 and 390x844. Raw HTML and screenshots live in the scratchpad (src-restaurant/, shots/), not in the repo.

## Render vs CSS-only
- Full render worked (Playwright via proxy). Computed styles were read from the live DOM, and the
  litespeed critical CSS and page-level CSS (elementor-2196 rules) were read from the HTML.
- Hero and logo are raster images (JPG/PNG/SVG-as-base64 placeholder). They are NOT copied. Replaced by
  self-drawn SVG art and a CSS/Bebas text wordmark.

## Section order (homepage is one hero + footer; header overlays hero)
1. Header (absolute, opaque black, sticky shadow `0 3px 5px rgba(0,0,0,.5)`)
   - Desktop: height 116px, padding 5px 72px, logo 120x106 at x=72, nav right-aligned ending at x=1368.
   - Mobile: height 92px, logo left, hamburger right.
2. Hero: `min-height: 100vh`, background-size cover, position top centre, no text.
   - Desktop image: landscape roast on coals. Mobile swaps to a portrait crop (short rib on plate).
3. Footer: black, 70px tall desktop. Copyright (DIN Next 14px, #ebebeb) at x=150 (1140px container),
   two 50x50 social icon boxes right-aligned to x=1290, 5px gap, 25px glyphs.
   - Mobile: stacked, copyright wraps to 2 lines, icons below, ~139px tall.

## Type
- Nav: Bebas Neue 18px, line-height 20px, letter-spacing 1px, uppercase, white. Each item padding 13px 17px.
- Body / sub-menu: Radley (serif, Google Font).
- Footer: DIN Next 14px -> nearest free Google Font: Barlow (DIN-derived).
- Logo: stacked outlined wordmark (image in original). Clone uses Bebas Neue text, not the original art.

## Palette
- Header/footer: #000000. Text: #ffffff. Footer copy: #ebebeb.
- Hero is photographic: warm amber/ember tones, charcoal #1a1410 to #0b0806, smoke grey-blue.

## Nav behaviour
- Items: About (dropdown, 4 items), Gallery, Reservations, Book (product), Brands & Venues (dropdown, 3 items), Contact.
- Desktop: dropdowns on hover/focus. Mobile: hamburger toggles a full-width stacked panel.
- Header becomes shadowed after scroll.

## Motion / interactions
- Nav link underline hover (`e--pointer-underline`), fade animation `e--animation-fade`, 0.4s transitions.
- Social icon opacity 0.3s transition.
- Hero is static (no parallax/motion effects on the background). Clone adds a slow smoke drift and ember flicker,
  disabled under prefers-reduced-motion.

## Responsive
- Breakpoint 767px (Elementor mobile). Hero background swaps image at max-width 767px.
- Nav collapses to hamburger at mobile width.

## Fonts

Measured from the live source at 1440px and 390px (computed styles; hidden dropdowns forced visible).
Source families: Bebas Neue, Radley, DinNext (self-hosted commercial file; `@font-face` points at the source's own
`/fonts/DINNextW01-*` files, which are not used here).

| Role | Source family | Source values (1440 / 390) | Clone loads | Licence status |
|---|---|---|---|---|
| Nav links | Bebas Neue | 18px / lh 20px / ls 1px / 400 / uppercase | Bebas Neue (Google Fonts) | Free (OFL). Identical family. |
| Dropdown items | Bebas Neue | 16px / lh 20px / ls 1px / 400 | Bebas Neue (Google Fonts) | Free (OFL). Identical family. |
| Body and page copy | Radley | 16px / lh 24px / ls normal / 400 | Radley (Google Fonts) | Free (OFL). Identical family. |
| Footer copyright | DinNext | 14px / lh 24px / ls normal / 400 / normal | `"DinNext"` name first, then `"Barlow Fallback"` (Barlow 400, Google Fonts host, `size-adjust: 101.8%`) | DinNext is commercial (Linotype / Monotype family). Buy a licence from the foundry or a Linotype/Monotype reseller. Barlow is free (OFL). |
| Mobile nav links | Bebas Neue (presumed) | not measured, popup did not expose its text | Bebas Neue 26px / lh 30px / ls 1px | Unmatched. See gaps. |
| Headings h1 to h3, buttons, captions | none on this page | none in the homepage DOM | n/a | n/a |

Fallback tuning: width of a 100px sample string was 4986.9px in DinNext (source) and 4897.8px in Barlow.
`size-adjust: 101.8%` brings it to 4985.8px (within 0.02%). Line-height and letter-spacing match the source values.

Gaps: the source mobile menu is an Elementor popup that did not expose its text to the render, so its nav typography
was not measured. The clone keeps 26px / 30px in the mobile drawer. The source logo is an image and the clone wordmark
is typeset; neither is a text role.

## Visual diff

Round 1 comparison, original vs clone (1440 and 390, full page and hero, footer cropped separately).

Discrepancies found:
- Hero photo (1440 and 390): original is a bright, warm photo with sharp detail. Clone is a dark drawn stand-in, which
  reads flatter. Expected; addressed in 7b with generated photos.
- Hero shade (1440): clone's top and bottom gradient dims the whole hero. Original has no overlay. Fix: remove the shade.
- Nav (1440): clone shows dropdown carets after "About" and "Our Brands & Venues". The source render shows none on
  desktop, which pushes the clone nav about 20px wider. Fix: hide carets at 768px and up.
- Mobile hamburger (390): original is a heavier three-bar glyph. Clone bars are thinner. Fix: 22px wide, 3px bars.
- Mobile footer (390): clone footer is 152px tall against 138px in the source, and its copy starts 9px lower.
  Fix: reduce top padding, gap and bottom padding.
- Logo (both): original is an outlined stacked wordmark. Clone is a filled Bebas wordmark. Intended placeholder; kept.
- Footer copy and social icons (both): size and position match within a few pixels. Copy wording differs (intended).
- Header height, nav baseline, footer height at 1440 (70px): match.

Round 2 comparison (after the round 1 fixes and the generated photos in 7b):
- Hero photo, 1440: subject differs (whole roast bird on coals, source shows a duck piece on coals, left of centre).
  Intended, same slot, same crop logic. Generated photo is 1024 px square and is cover-cropped to 16:10, so it is
  slightly soft at 1440 wide.
- Hero photo, 390: now the same kind of subject (short rib on a plate, oven glow above). The source plate sits
  lower-left and fills the width. Clone plate is slightly smaller and centred. Acceptable.
- Nav (1440): carets are gone at desktop width. Nav spans now match the source within about 8 px.
- Hamburger (390): heavier three-bar glyph now matches the source's visual weight.
- Mobile footer (390): height now 982 px, same as the source. Icons and copy sit within 2 px.
- Remaining intentional differences: placeholder brand (logo, copy, names), and social icons drawn in SVG.
- Full-page captures of the hero look dimmed at 1440. Viewport captures are correct. This is a capture artifact.

## Gap fixes

Source checklist: `.claude/skills/fnb-site-gaps/SKILL.md` (nine gaps). Placeholders only: domain
`https://www.example.com/restaurant/`, address "1 Sample Street, Singapore 000000", phone "+65 0000 0000",
sample hours (Mon to Thu and Sun 12:00 to 22:00, Fri and Sat 12:00 to 23:30), social links on example.com.

| # | Gap | Before | After | Placeholders / notes |
|---|---|---|---|---|
| 1 | Image alt text | Hero images had alt. Inline social SVGs had no `aria-hidden`. | Both hero images have specific alt text. Decorative SVG icons are `aria-hidden`. No images below the fold. | Alt text describes the generated photos. |
| 2 | Local business structured data | None. | One JSON-LD `@graph`: WebSite plus Restaurant/BarOrPub with address, geo, opening hours, hasMenu, reservation action and sameAs. Parses as valid JSON. | Phone "+65 0000 0000", 1 Sample Street, coordinates for central Singapore (placeholder), example.com sameAs and menu/reservation URLs. |
| 3 | Heading structure | No h1 on the page. | Exactly one visually hidden h1. Sections use h2 (reviews, newsletter). | h1 reads "Ember & Oak: wood-fired bar and grill in Singapore". |
| 4 | Title tag | "Ember & Oak | Bar & Grill" (brand only). | "Wood-Fired Bar and Grill in Singapore | Ember & Oak" (51 characters). | Placeholder brand. |
| 5 | Meta description | Placeholder design-study note. | 141-character sentence with what, where and a call to action. | "Reserve your table online today." |
| 6 | Technical basics | `lang="en"`, no canonical, no OG, no robots, no sitemap. | `lang="en-SG"`, canonical, robots meta, OG (type, site_name, title, description, url, locale, image, image:alt), Twitter summary_large_image, robots.txt and sitemap.xml. | og:image uses the existing `img/hero-roast-on-coals-desktop.jpg` on the placeholder domain. |
| 7 | Reviews | None. | Three sample quotes (first names only), with an HTML comment marking them as sample content. | Names Priya, Daniel, Mei. Replace with real reviews before launch. |
| 8 | Newsletter | None. | Labelled email field and Subscribe button, with a one-line reason to join. | Form action `https://www.example.com/restaurant/subscribe/`. |
| 9 | Chat / WhatsApp button | None. | Floating ember circle, bottom right (32px desktop, 16px mobile), `aria-label`. Clear of footer content at 390px. | Link `https://www.example.com/restaurant/contact/`. |

Styling: the new sections reuse the page's own tokens. Bebas Neue for headings and buttons, Radley for quotes and body,
the ember accent, hairline dividers and the white-button hover from the nav. The existing layout is unchanged above the fold.
