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
