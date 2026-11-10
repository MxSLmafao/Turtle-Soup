# Design notes: Bars & pubs, homepage study

Source: https://atlasbar.sg/ (category: Bars & pubs). Scratch copies live in
`/tmp/claude-0/-home-user-Turtle-Soup/77ba2195-520c-50df-bce6-6145a2cbd739/scratchpad/src-bar/`
(index.html, combine.css, extras.css, combine.js). Renders: `.../scratchpad/shots/`.

## How it was extracted
- Rendered with Playwright (Chromium) at 1440x900 and 390x844. Render works through the proxy.
- Read the HTML and the combined theme CSS (`combine.css`, the custom theme block near line 36 onward).
- Only the HERO, the POPUP and the FOOTER render. Every other homepage section (intro, drinks,
  food, "celebrate", happenings/blog) is inside HTML comments in the source and is NOT shown.
  The clone reproduces only what renders.

## Section order (as rendered)
1. Fixed-on-load promo popup (centred, gold gradient border, dismissible with "close").
2. Header bar over the hero: logo left, horizontal uppercase nav (12 items, wraps to a 2nd line at 1440),
   mobile hamburger under 768px that toggles a stacked menu.
3. Hero (100vh, min 700px): full-bleed dark lobby photo, `background-position: center bottom`,
   central title panel (rgba black 0.7, padding 5vh), logo mark, gold gradient H1 and H2 sub-lines.
4. Gold hairline divider with a centre diamond (`key-line-full`).
5. Footer (bg #1f2730): four info columns (address, hours, contact + Reserve button, social),
   right column with two group links, bottom copyright row with privacy and terms.

## Tokens (from CSS)
- Colours: body/popup bg `#242c35`; header/hero overlay `rgba(0,0,0,.7)`; mobile menu/fixed bg `#12181f`;
  footer bg `#1f2730`; footer copyright border `#353f49`; muted text `#717982`; nav rule `#6e6e6f`.
- Gold gradient (text and borders): `#93574d 0%, #e69d80 49%, #daa089 65%, #d88e6c 86%, #e59d7f 100%`
  (left to right). Accent `#e5a082`. Popup border gradient `#a36457 > #e5a082 52% > #da9474`.
- Fonts: `itckabelstd-book` (body, 16px) and `itckabelstd-medium` (headings, buttons). Commercial
  font, so the clone uses Jost (Google Fonts), a close geometric match.
- Type: H1 hero 1.5625em, H2 sub 1.375em (line-height 1.6em), nav uppercase letter-spacing .2em,
  section sub-titles uppercase letter-spacing .4em, button text letter-spacing .2em,
  footer text 11px letter-spacing .15em, popup title 30px letter-spacing .15em.
- Buttons: 250x42, gold outline image with a gold-text label; hover fills with the gold gradient
  and turns the label dark (`#242c35`).
- Dividers: 220px wide gradient hairline (`hr.key-line`); full-width hairline at section edges.
- Popup: 620px wide, 5px gradient border, max-height 80vh, 40px side padding, mobile: 15px margin, inset top/bottom 90px.
- Breakpoints: 767/768px (mobile menu and column stacking), 991/992px, 1199/1200px (container 750/970/1170).
- Hover: links turn `#e5a082`; footer social icons get a drop-shadow; "close" text keeps gradient.

## Behaviour
- Popup shows on load, closes on click of "close" or the dim backdrop. Mobile hamburger toggles the nav
  panel (jQuery in source, re-written in vanilla JS in the clone).
- No scroll-driven header change or scroll-reveal was observed on the homepage render.

## Replaced content (placeholder brand, no source assets)
- Brand name, logo, copy, addresses, phone, emails and group names are invented ("Halden").
- All photos and icons are replaced by inline SVG and CSS gradients drawn for this clone.
- Commented-out source sections are not reproduced, because they never render.

## Fonts

Source families (both self-hosted OTF files on the source site, not copied here):
`itckabelstd-book` (regular) and `itckabelstd-medium`. Both are ITC Kabel Std, a commercial face.
The clone never downloads or embeds the source files. Each stack puts the exact source name first,
then a free fallback.

| Role (1440 / 390) | Source family | Size | Weight | Line-height | Letter-spacing | Transform | Clone stack and status |
|---|---|---|---|---|---|---|---|
| Body | itckabelstd-book | 16px | 400 | 22.857px | normal | none | `--font-book` (name first, then Jost). Name-first with fallback |
| Nav links | itckabelstd-book | 12px | 400 | 17.143px | 3.2px | uppercase | `--font-book`. Name-first with fallback |
| H1 hero | itckabelstd-medium | 25px | 500 | 27.5px | 6.4px | uppercase | `--font-medium` (name first, then Jost 500). Name-first with fallback |
| H2 hero | itckabelstd-book | 22px / 19.2px at 390 | 500 (computed) | 35.2px / 30.72px (1.6em) | 6.4px | uppercase | `--font-book`, computed weight kept at 500 so the Jost fallback matches. Name-first with fallback |
| Popup body | itckabelstd-book | 14px | 400 | 25.2px | 1.4px | none | `--font-book`. Name-first with fallback |
| Popup close | itckabelstd-book | 14px | 400 | 20px | 1.4px | none | `--font-book`, gradient text. Name-first with fallback |
| Popup title | itckabelstd-book | 30px | 400 | 42.857px | 4.5px | uppercase | `--font-book`. Name-first with fallback |
| Footer text | itckabelstd-book | 11px | 400 | 19.8px | 1.65px | none | `--font-book`. Name-first with fallback |
| Footer group links | itckabelstd-book | 14px | 400 | 20px | 2.1px | uppercase | `--font-book`. Name-first with fallback |
| Copyright / privacy | itckabelstd-book | 9.6px | 400 | 17.28px / 23.04px | 1.44px / 1.92px | none | `--font-book`. Name-first with fallback |
| Reserve button | itckabelstd-book | 12px | 700 (synthetic bold) | 20px | normal | none | `--font-book`. Name-first with fallback |
| Button label (default) | itckabelstd-medium | 16px (inherited) | 500 | 22.857px | 3.2px | uppercase | `--font-medium`. Name-first with fallback |

Licence status: ITC Kabel is commercial. To use it legitimately, buy a web or desktop licence from its
foundry (Monotype owns ITC) or license it through a font service. Without a licence the fallback renders,
which is Jost from Google Fonts, loaded in `index.html` under the SIL Open Font License.

Limits: Jost is not metric-identical to Kabel. No `size-adjust` tuning was applied because the Kabel
metrics could not be measured here. All sizes, line-heights and tracking are set to the source's
computed values, so only glyph widths differ on machines without Kabel installed.

## Visual diff

Captures: `scratchpad/vd-bar/` (orig and clone at 1440 and 390: popup, hero, footer viewport, full page).
Only the hero, popup and footer render on the source, so these are the only sections compared.

Round 1 (fixed):
- Hero logo was 40x60; source logo block is 100x132 and pushes the H1 to y 493. Now 100x132 monogram plus wordmark.
- Header mark was 26x40 at y 40; now 25x52 at y 30 (accounting for the 10px top border).
- H2 used `<br>` breaks; source uses three `<p>` lines at 19.25px / 0.1em tracking / 34.65px line-height with 10px margins (16.8px on mobile).
- Nav padding centred the menu at 720; source centres the item run at about 740 (padding-left 40px). Item padding 13px.
- Mobile hero box had a 14vh top margin; source starts it directly under the header with 5vh padding.
- Mobile hamburger was an outline; source is a filled dark tile.
- Footer columns were fractional; source uses 157 / 233 / 235 / 78 / 235px with a 940px container.
- Copyright container was 1170px; source is 940px.
- Footer group links had 14px top padding; source starts at the footer padding edge.
- Footer link underline removed (source has none).
- Scroll-reveal on footer blocks removed (source has none).
- Popup logo was a cocktail glass that resembled the source mark; replaced with the deco-frame glyph.
- Popup caption was a gradient 30px heading; source caption is 16px white text.
- Popup image-to-caption gap 50px and caption-to-paragraph gap were too large; now 20px and 10px.
- Popup paragraph wrapped to three lines; shortened copy to two lines like the source.
- Mobile footer blocks were tight and social icons sat in a row; now 56px gaps, 40px icon spacing and stacked social icons.

Round 2 (checked, within a few px): hero H1 y, header mark, nav line positions, footer column centres, reserve button position, copyright baseline.

Discrepancies left:
- Hero, popup and footer images are drawn SVG and gradient art, not photographs (see 7b status).
- Hero subtitle copy wraps differently (new placeholder copy).
- Kabel glyph widths differ from Jost (see Fonts).
- Hero overlay opacity and vignette are approximations.

## Gap fixes

Checked against `.claude/skills/fnb-site-gaps/SKILL.md`. Placeholder business data only.

| # | Gap | Before | After | Placeholders used |
|---|---|---|---|---|
| 1 | Image alt text | No raster images. Decorative SVG hidden with aria-hidden, one unlabelled SVG inside an aria-hidden wrapper | Same, plus aria-hidden on that SVG. Illustration SVGs keep role="img" and aria-label. 0 images, 0 missing alt | none |
| 2 | Local business structured data | None | JSON-LD `@graph`: BarOrPub + LocalBusiness, WebSite, WebPage. Parses. No `image` (no img/ folder) | 1 Sample Street, Singapore 000000; +65 0000 0000; coords 1.2834, 103.8607; sample hours; example.com menu, reservation and social URLs |
| 3 | Heading structure | One h1. Popup titles were h3 directly under h1/h2 (skipped a level) | One h1. Popup titles are h2. New sections use h2 | none |
| 4 | Title tag | "Home \| Halden" | "Art Deco Lobby Bar and Cocktail Lounge in Singapore \| Halden" (60 chars) | brand is placeholder "Halden" |
| 5 | Meta description | Placeholder design-study text | 149 chars, offer plus location plus CTA with phone | +65 0000 0000 |
| 6 | Technical basics | lang="en", no canonical, no OG, no robots meta, no sitemap | lang="en-SG"; canonical; og:type, og:site_name, og:title, og:description, og:url, og:locale; twitter:card summary_large_image; robots "index, follow, max-image-preview:large"; robots.txt; sitemap.xml. No og:image, because there is no img/ folder | https://www.example.com/bar/ |
| 7 | Reviews | None | "Guest notes": 3 sample quotes with first names and context. HTML comment marks them as sample content | first names only, no real guests |
| 8 | Newsletter | None | Labelled email field, Subscribe button, one-line reason. Sample handler shows a message and sends nothing | none |
| 9 | Chat button | None | Fixed bottom-right "Chat" button with aria-label. Shrinks to an icon under 768px so it does not cover content | placeholder link https://www.example.com/bar/contact/ |

Footer social links now point to example.com placeholders and open in a new tab.

Open items: og:image is omitted (no img/ folder, since photo generation is blocked by quota). Coordinates are placeholders and should be replaced with the real location. Reviews are sample content and must be replaced with real, attributable reviews before launch.
