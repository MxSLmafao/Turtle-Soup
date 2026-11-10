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
