# Design notes: bakery homepage study

Source studied: https://tiongbahrubakery.com/ (Shopify storefront, Singapore bakery). Rendered with Playwright at 1440px (page height ~6222px). Raw HTML and screenshots live in the scratchpad, not in the repo.

## Section order (desktop, 1440px)
1. Announcement marquee, 36px tall, cream bg, brown text, scrolling left.
2. Header, 100px tall (y 36-136). Left: 4 uppercase text links in teal. Centre: stacked logo. Right: "Cart (0)" plus a teal pill button. Sits under the marquee.
3. Hero, 810px tall, full-bleed lilac (#E7D2E7 family). Left: a rough-edged stamp panel with a bold condensed headline and subline. Centre-right: large croissant photo, a magnifier with metal arms, and a honeycomb inset callout.
4. Product feature, 64px top padding. Left: 660x660 framed image (black-to-cream studio shot), right column at x=740: 72px title over 2 lines, body, bold dip list, note, price, "ORDER NOW" pill.
5. Process section, centred 48px heading and 16px subline (max ~460px). Horizontal rail of 4 image cards: side cards 354x435, centre card 544x543, vertically centred. Caption under centre card. Lilac 36px arrow buttons bottom-right.
6. Pairing section, 3 columns: pastry cutout (~380px) | 64px two-line heading + body | coffee cutout. Each cutout sits on a lighter cream polygon. Small line-art illustration centred above.
7. App/loyalty section: 48px bold heading centred. Phone mockup (~425x590) between two columns of 3 lilac feature boxes (310px wide, 6px radius). Doodle top-right. Store-badge line below in serif.
8. Gallery rail: heading, 4 tall cards 325x577, rail bleeds off the left edge. Teal arrow buttons below right.
9. Reviews: heading, full-width lilac card (1360px, ~200px tall) with star row, 32px quote, attribution, teal arrows.
10. Footer: dark brown (#521B0A), 4 columns: two link lists, socials, newsletter with pill input and cream "SUBSCRIBE" pill. Copyright row at bottom-left.

## Tokens (from the page's inline theme variables)
- Cream background: #F4EEE0 (244 238 224)
- Brown text: #521B04 (82 27 4)
- Deep teal (primary button, nav): #004251 (0 66 81)
- Green accent: #009949 (0 153 73)
- Lilac card / hero: #E7D2E7 (231 210 231)
- Mustard accent: #DAA71D (218 167 29)
- Footer brown: #521B0A (82 27 10)
- Body and headings: Inter. Main font weight 500. Heading weight 400, line-height 0.9 for display sizes, letter-spacing 0.
- Type scale: base 16px, ratio 1.335 steps (lg 21.4, xl 24, 2xl 26.9, 3xl 32), with display headings at 48px and 72px.
- Buttons: fully round pills (9999px), uppercase, 48px tall, 0 border.
- Cards and media: 6px radius (0.375rem).
- Spacing: section vertical 4rem, section horizontal 2.5rem on desktop, 1.25rem on mobile, grid gap 2.5rem (40px).
- Max content width: 1360px (40px gutters at 1440).
- Transitions: 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) on buttons. Respects prefers-reduced-motion.
- Breakpoints observed: 390 (mobile), 640, 768, 990, 1400.

## Behaviour
- Header is sticky. Nav collapses on small screens.
- Marquee scrolls continuously. Carousels are horizontal scroll-snap rails with arrow buttons.
- Sections fade up on scroll (reveal).

## Clone choices
- Brand: placeholder "Lantern Row Bakehouse". Copy written from scratch at the same length and role.
- All imagery replaced with inline SVG or CSS gradients drawn for this clone. No photos, logos, fonts or other files copied.
- Fonts: see the Fonts section below. The stamp and logo face uses Alfa Slab One, a decorative choice. The source draws its stamps as images, so they are not a typography role.
- App-store line uses generic text, not store trademarks.

## Fonts

Measured with Playwright from the live source at 1440px and 390px. Web-font status checked with `document.fonts`: only Inter loads. F37Analog and MetaAccanthis_regular are declared but never load in this render, so visitors see the fallback sans or serif.

| Role | Source family (computed) | 1440px: size / weight / line-height / transform | 390px: size / weight / line-height / transform | Clone stack | Clone loads |
|---|---|---|---|---|---|
| Announcement marquee | F37Analog (fallback) / MetaAccanthis at 390 | 14.2544px / 500 / 19.9561px / none | same | F37Analog, Arimo | Arimo |
| Nav links, cart | Inter | 16px / 500 / 22.4px / uppercase | MetaAccanthis, 16px / 500 / 22.4px / uppercase | Inter (desktop), MetaAccanthis_regular then Arimo (mobile) | Inter 500 |
| Headings h2 (section) | system_ui stack (desktop) / MetaAccanthis (mobile) | 42.7149px / 400 / 38.4434px | 32px / 400 / 28.8px | system_ui stack (desktop) / MetaAccanthis_regular, Arimo (mobile) | none (platform sans) / Arimo |
| Display h2 (product) | system_ui stack / MetaAccanthis | 79.9458px / 400 / 71.9512px | 47.9458px / 400 / 43.1512px | same as headings | none / Arimo |
| Pairing h1 | system_ui stack / MetaAccanthis | 57.0175px / 400 / 51.3158px | 42.7149px / 400 / 38.4434px | same as headings | none / Arimo |
| App heading (bold) | system_ui stack / MetaAccanthis | 42.7149px / 700 / 38.4434px | 32px / 700 / 28.8px | same as headings | none / Arimo |
| Card and footer h3 | system_ui stack / MetaAccanthis | 23.9729px / 400 / 21.5756px | same | same as headings | none / Arimo |
| Body text | F37Analog (fallback) / MetaAccanthis | 16px / 500 / 22.4px, bold 700 | same | F37Analog, Arimo, Arial (desktop) / MetaAccanthis_regular, Arimo (mobile) | Arimo |
| Buttons | system_ui stack / MetaAccanthis | 16px / 400 / 22.4px / uppercase | same | same as headings | none / Arimo |
| Footer links (main) | Inter | 16px / 500 / 22.4px / uppercase | MetaAccanthis, 16px / 500 / 22.4px / none | Inter (desktop) / MetaAccanthis_regular, Arimo (mobile) | Inter 500 |
| Footer links (secondary) | F37Analog (fallback) | 16px / 500 / 22.4px (visibly uppercase) | MetaAccanthis, 16px / 500 / 22.4px | F37Analog, Arimo (desktop, uppercase) / mobile as above | Arimo |
| Copyright | F37Analog (fallback) | 14.2544px / 500 / 19.9561px | MetaAccanthis, same size | as body | Arimo |
| Store line | F37Analog, serif (fallback) | 28px / 500 / 36.4px | 20px / 500 / 26px | F37Analog, Tinos, Times New Roman, serif (desktop) / sans at mobile | Tinos |
| Review quote | F37Analog (fallback) | 32px / 500 / 28.8px | 16px / 500 / 22.4px | as body | Arimo |
| Letter-spacing (all roles) | normal | normal | normal | normal | n/a |
| Font style (all roles) | normal | normal | normal | normal | n/a |

Licence status:
- F37Analog: commercial, F37 Foundry. Not downloaded or hot-linked. The clone names it first in the stack, so it renders on machines where it is installed or licensed. Licence: https://www.f37foundry.com/
- MetaAccanthis_regular: commercial, served to the source site by a third-party font-licensing app from the store's Shopify CDN. Not downloaded or hot-linked. The clone names it first in the mobile stack. Licence must be bought from its licensor or from the app's vendor.
- Inter: SIL Open Font License, loaded from Google Fonts.
- Arimo: SIL Open Font License, loaded from Google Fonts. Metric- and outline-compatible with Arial and Liberation Sans, so it matches the source's rendered fallback here.
- Tinos: SIL Open Font License, loaded from Google Fonts. Metric-compatible with Times New Roman; used as the serif fallback.
- Alfa Slab One: SIL Open Font License, loaded from Google Fonts. Decorative only (stamps and logo).
- system_ui stack: platform fonts, nothing loaded. Identical to the source's heading stack.

Known differences:
- Desktop footer secondary links: the source's computed transform is none, but the text is visibly uppercase. The clone uppercases them in CSS at desktop and sets none at mobile, to match the visible result at each width.
- Mobile footer links are uppercase on mobile as well (visual diff round 0), overriding the measured text-transform none.
- Mobile body: the source fallback at 390px is Arial/Liberation, not MetaAccanthis, because MetaAccanthis never loads here. The clone's Arimo fallback renders the same glyphs.

## Visual diff

Round 0 compared the original and clone at 1440px and 390px, section by section (captured 2026-11-10 with Playwright; cookie banners: none).

Discrepancies found at 1440px:
1. Hero: stamp headline wraps to four lines (source: two-line headline block). Hero photo is a large croissant (about 380x600) on the right; clone uses a small drawn croissant. Source hero uses a full photo, not a drawn illustration.
2. Product: title wraps to three lines (source: two). Image is a studio photo (drawn stand-in in clone). Copy wording differs (allowed).
3. Making: source rail has side cards bleeding off both edges with 94px gaps (354 | 94 | 544 | 94 | 354). Clone used 40px gaps and inset edges. Source has a small pastry swirl decoration top-left. Centre card and side cards are photos in source (drawn in clone).
4. Pairing: source cutouts are photos, about 380px wide, with a dog line drawing above the heading. Clone cutouts were 320px. The dog line drawing is not reproduced; a neutral squiggle stands in.
5. App: layout and perk box positions match. Phone screen is an illustration in source (kept as drawn art).
6. Gallery: source has a 224px block above the heading with two store badges and the line "Available on Google Play and App Store". Clone had that line in the app section and no badges. Badges are third-party trademark logos, so they are replaced with neutral black pills. Source cards are 325px wide with 40px gaps, matching the clone. Source photos are not reproduced yet.
7. Reviews: matches in size and placement. Source review copy is shorter and set in a lilac card, as in the clone.
8. Footer: source column 2 starts at x=274 and column 1 is narrower than the clone's. Copyright is two lines in source. Clone copyright is now two lines. Socials and newsletter position match.

Discrepancies found at 390px:
1. Hero: source hero is a full-bleed photo (390x585) with the stamp overlaid at the top. Clone stacks the stamp above a small art block. Needs a full-bleed hero image (addressed with the photo work).
2. Product: title and copy wrap similarly. Source has a small decorative croissant doodle overlapping the copy (not reproduced).
3. Making: source centre card is about 210x210 with side cards about 180x170. Clone cards were 78vw wide, too large. Source rail bleeds on both sides.
4. App: source feature perks are one horizontal scrolling rail (arrows below), placed under the phone. Clone stacked all six boxes vertically.
5. Gallery: source cards are large (about 300+ wide and 580+ tall), and the store badge line sits above the heading. Clone matches the card size better now.
6. Footer: source footer links are uppercase on mobile too; column 2 starts at x=215. Clone now uppercases links and uses a 30px gap.

Round 1 fixes applied: process rail gaps and bleed; footer column widths; copyright lines; product title and copy; store line and neutral badges moved to the gallery head; hero stamp to two lines; pairing cutouts to 380px; mobile making card sizes; mobile app perks rail; mobile footer uppercase and column gap; mobile gallery card width.

Round 2 comparison (after round 1 fixes) and fixes:
- 1440 making: source rail bleeds to both viewport edges (354 | 94 | 544 | 94 | 354 fills 1440). Clone rail was inset by the section padding. Fixed by removing the section side padding at desktop. Remaining gap: source photos are not yet in the clone.
- 1440 gallery: card size, gap and arrow position match. Store badges are neutral pills, which is a deliberate change (third-party logos are not reproduced).
- 390 making: side-card stamp labels wrapped awkwardly. Fixed with smaller label type on mobile.
- 390 app: source phone is about 230px wide; clone phone was 360px. Fixed to 280px wide. Source perks form a single horizontal rail below the phone; clone now matches.
- 1440 footer and 390 hero: checked; positions match except for the hero photo (see Round 0).
Still open after round 2: photos in every photo slot (addressed in the generated-photography step), the source's dog line drawing above the pairing heading, and the source's small croissant doodle on mobile.

## Generated photography (7b)
- Status: not done. The image tool (mcp__Geminimage__generate_image) returned HTTP 502 with a 429 quota error on two attempts ("quota will reset after 2h43m"). No images were generated, no img/ folder was created, and every photo slot still uses drawn SVG or CSS art.
- Slots still drawn: hero croissant and mobile hero; product studio image; making centre card and both side cards; pairing cutouts (pastry and coffee); gallery cards (4); phone screen illustration (kept as drawn art in both versions).
- Prompts planned, to run once quota returns: hero (upright golden croissant on lavender backdrop); product (two croissants with espresso cup on dark-to-cream studio gradient); making (laminated dough close-up, hands holding a cut croissant on white, golden butter close-up); pairing (pain au chocolat and latte on cream); gallery (iced drink in tall glass, café interior, picnic lawn, strawberry pastries). Each prompt ends with "no text, no logos, no brand names, no watermarks, no packaging labels".

## Gap fixes

Applied the nine fnb-site-gaps fixes to the clone (`.claude/skills/fnb-site-gaps/SKILL.md`). Placeholder business data only. No source-brand text.

| # | Gap | Before | After | Placeholders used |
|---|---|---|---|---|
| 1 | Image alt text | No `<img>` on the page. Meaningful SVG art was `aria-hidden`, so nothing was announced. | Every meaningful SVG has `role="img"` and a specific `aria-label` (hero, product, process cards, pairing cutouts, four gallery cards). Decorative SVGs stay `aria-hidden`. Verified: 0 `<img>` without alt, 0 labelled-role SVGs missing a label. | none |
| 2 | Local business structured data | None. | JSON-LD `@graph` in `<head>`: WebSite, Organization, Bakery (address, geo, opening hours, priceRange, servesCuisine, hasMenu, OrderAction potentialAction, sameAs). Parses as valid JSON. | `https://www.example.com/bakery/`, "1 Sample Street, Singapore 000000", "+65 0000 0000", sample hours (Mon-Fri 08:00-19:00, Sat-Sun 09:00-20:00), geo at the Singapore centre (1.3521, 103.8198), sameAs on example.com |
| 3 | Heading structure | Hero headline was a `<p>`, so the page had no h1. | Exactly one `<h1>` (the hero headline, plus visually hidden text naming the business and the category). Sections use h2, cards use h3. Visible headline unchanged. Verified: 1 h1. | hidden text "Lantern Row Bakehouse: slow-fermented croissants in Singapore" |
| 4 | Title tag | "Lantern Row Bakehouse \| Slow-Fermented Pastries" (brand plus generic words, no place). | "Croissant Bakery in Singapore \| Lantern Row Bakehouse" (53 characters). | placeholder brand |
| 5 | Meta description | Slogan-like "...Sample design study." (no place, no call to action). | 141 characters: what is offered, where, and a call to action ("Order ahead for pickup today."). Also used for og and twitter descriptions. | placeholder brand |
| 6 | Technical basics | `lang="en"`, no canonical, no OG or Twitter tags, no robots meta, no robots.txt or sitemap. Viewport meta already present. | `lang="en-SG"`; canonical `https://www.example.com/bakery/`; `robots` meta with `max-image-preview:large`; og:type, og:site_name, og:title, og:description, og:url, og:locale (en_SG); twitter:card summary_large_image; `robots.txt` pointing to the sitemap; `sitemap.xml` with the homepage. | `https://www.example.com/bakery/` for all URLs. **og:image omitted**: the clone has no files in img/ yet (no generated photos, see 7b). Add a 1200x630 image and its og:image tag when one exists. |
| 7 | Reviews | One review attributed to "Sample Reviewer". | Three sample quotes with first names and context, shown one at a time with the existing arrow buttons (same card, same styling). HTML comment above the block says the reviews are placeholders. | first names only: Mei, Daniel, Aisha |
| 8 | Newsletter | Form present, input labelled. Form had no accessible name and no reason to join. | Form is named by its heading (`aria-labelledby`), and a one-line reason is linked by `aria-describedby`: "Get new bake days and member offers, once a week." Styled with existing tokens. | none |
| 9 | Chat or WhatsApp button | None. | Floating teal pill "Chat with us" bottom-right (uses the site's `.btn--teal`). On mobile it shrinks to a 52px round icon button, so it covers little content. Has `aria-label` and opens in a new tab. | `https://wa.me/6500000000` (placeholder number) |

Verification at 1440 and 390: one h1; JSON-LD parses; no console errors or failed requests; no horizontal overflow (scrollWidth equals viewport); fixed chat button at 1237,836 (desktop) and 322,832 (mobile), inside the viewport.

Open after the gap-fix pass:
- og:image (see gap 6).
- The JSON-LD `image` property is omitted for the same reason.
- Geo coordinates are the Singapore centre, not a real address. Replace with the real address when known.

## Photo slots (section 9)

Status after the hero wiring pass (2026-11-10). Only one generated photo exists.

| Slot | Original | Clone now | File |
|---|---|---|---|
| Hero (desktop: right-hand panel, feathered mask; mobile: full-width photo under the stamp) | Full-bleed photo of an upright croissant on lilac, with a magnifier and honeycomb callout over it | Generated photo `img/hero-croissant-lilac.jpg` (1264x848, 65 KB, alt text set). Magnifier, arms and honeycomb callout are still drawn over it. On mobile the drawn magnifier and arms are hidden. | photo |
| Product studio image (660x660) | Studio photo: two croissants and espresso cup on dark-to-cream backdrop | Drawn SVG | still drawn |
| Process centre card (544x543) | Close-up of hands holding a croissant broken open | Drawn SVG swirl | still drawn |
| Process side cards (354x435) | Dough layers close-up; butter close-up | CSS textures with stamp labels | still drawn |
| Pairing cutouts (about 380px) | Pain au chocolat; latte cup on cutout blob | Drawn SVG | still drawn |
| Gallery cards (4 x 325x577) | Iced drink; café interior; picnic on lawn; strawberry pastries | Drawn SVG | still drawn |
| Phone screen | UI illustration | Drawn | kept as drawn (it is UI, not a photo) |

Generation attempts: in this pass the only generation call (the product image) returned a 429 quota error ("reset after 4h48m"), so generation stopped as the brief requires and the other four slots were not attempted. Those four slots are the next priority once quota returns.

Scratch and verification: `<scratchpad>/img-bakery/`. Checked at 1440 and 390: hero text readable over the photo, no overflow, no console errors, no broken image paths, one h1, JSON-LD parses, `og:image`, `twitter:image` and JSON-LD `image` all point to `https://www.example.com/bakery/img/hero-croissant-lilac.jpg`.

Note: the "Generated photography (7b)" section above is superseded for the hero slot.

## Polish pass

Method: replica (measured blueprint, scored compare at `structure` level), screenshot-to-html (rendered side-by-side per section at 1440 and 390, fix what the eye catches), design-clone (multi-viewport capture, token and responsive checks, hover and focus review). Scratch and reports: `<scratchpad>/polish-bakery/` (`ref/` blueprint, `cmp1` to `cmp6` compare rounds).

Scores (replica, `structure` level, source = reference; the gap-fix additions and the placeholder brand and photos are excluded from comparison by `--hide`):

| | baseline (cmp1) | final (cmp6) |
|---|---|---|
| layout | 9.99 (gate ≥ 90) | 31.46 |
| style | 81.41 | 82.64 |
| pixels | 0.00 (34.9% differ) | 0.00 (see note) |
| page height 1440 | 6143 vs 6269 (-126) | 6274 vs 6269 (+5) |
| page height 390 | 5940 vs 5555 (+385) | 5558 vs 5555 (+3) |

Result: NOT YET. The layout gate (≥ 90) is not met. The remaining layout gap is structural and deliberate: the source's photos and their markup (`img` elements), the source's copy wording, our hero and phone frame, the store badges (replaced with neutral pills), and our extra gap-fix sections. Pixels are not expected to match, since the brand, copy and photos are different on purpose.

Changes applied in this pass:
- Desktop vertical rhythm measured from the reference outline: process section 912px (arrows moved out of flow beside the caption); pairing 776px with a 648px grid; app 876px with a 669px stage and 41px title gap; gallery head 128px gap and 20px arrow offset; reviews card 202px.
- Mobile rhythm: 32px section padding (product, process, pairing, app, gallery, reviews); header 102px and marquee 28px (reference 390 header 28 + 102 = 130 before the hero).
- Pairing: 2-column grid with the heading spanning both columns and one overlapping row of cutouts (reference 2286-2807); cutout blobs are pseudo-elements, not extra nodes; copy sits above the blobs.
- App (mobile): phone block 250 x 366 (reference app image 350 x 366), 20px title gap.
- Product (mobile): copy spacing tightened to the reference product block (850px).
- Gallery: first card starts partly off-screen as in the source carousel; mobile cards 330 x 620.
- Announcement: shorter copy (the source's line is about 386px wide) and a section element, not a div. Copy is ours.
- Store line is an `h3` (as in the source).
- Reviews card padding 28px 40px (desktop).
- Pairing and app: hidden overflow on mobile; grid columns clamped to `minmax(0, 1fr)` so the cutouts do not widen the page.

Interaction polish (already present, checked this pass): nav underline on hover and focus; button press scale 0.98 and hover tints (0.1s ease-out-cubic transitions, as measured in the source); arrow buttons hover and press; rail arrows disable at the ends; review arrows cycle the three quotes; header gains a shadow on scroll; visible `:focus-visible` outline on links, buttons, inputs; `prefers-reduced-motion` turns off marquee, reveal and smooth scrolling. Hover and focus were not separately measured against the source (no source transitions were measurable in the blueprint beyond button transitions).

Final checks (1440, 768, 390): no horizontal overflow; no console errors or warnings; no failed or broken requests; one `h1`; JSON-LD parses; every `img` has alt; no source-brand strings in `index.html`, `styles.css` or `script.js`.

Still off after the polish pass:
- Source photos are not in the clone yet (image quota). The pairing cutouts, process cards and gallery cards still use drawn art, so their layout boxes differ in element type from the source's `img` nodes.
- Source's app-store badges are third-party trademarks and are replaced by neutral pills. The source's mobile app perks are one rail of six cards; the clone shows two rails (left and right groups), which adds height on mobile.
- Hero: the source hero is a single photo with text overlay; the clone's hero has extra drawn overlays (magnifier, arms, honeycomb callout).
- Source copy and our copy differ on purpose; the compare reports missing paragraphs for this reason.
