# Butchers & delis design study - notes

Source studied: https://www.hubers.com.sg/ (homepage, rendered with Playwright at 1440px, full-page capture).
Render: yes (Playwright worked through the proxy). Source HTML and CSS downloaded to the scratchpad only.

## Section order (desktop, 1440px)
1. Cookie strip (dismissible), promo popup (not reproduced).
2. Utility bar, red, about 36px: external link button (left), social icons, search, login/register, cart count.
3. Header, centred logo, about 170px tall, then centred uppercase nav with pipe separators.
4. Hero slider, 3 slides, about 350px tall, 930px content width, slides overflow the container at the sides.
5. "Now trending" section, heading with red rule, 3 product cards (1:1 image, uppercase title, red NEW badge, price, two selects, outline "Add to cart").
6. "Store" section, grid of image tiles, about 1060px tall in the original.
7. "Videos" row, 4 thumbnails with captions.
8. Light grey footer, small uppercase links, copyright line, row of accreditation logos.

## Tokens (observed)
- Brand red: #ed1b24 (most used accent), darker red #ff000b used for hovers.
- Text: #000 on #fff; mist #f2f2f2 / #fafafa surfaces; borders #ccc / #e8e8e8.
- Footer background: #cecfd3, white text.
- Font: Montserrat (original loads it as local "montserratregular", "montserratsemi_bold", "montserratlight" faces). Clone uses Google Font Montserrat.
- Sizes: body 12px / 18px line-height; nav 14px semibold uppercase; section headings 22px bold uppercase with a red rule; product titles 12px bold uppercase; utility bar 10px uppercase; footer 10px light uppercase.
- Container: 930px centred (1440 viewport), 255px side margins.
- Breakpoints in CSS: 992, 768, 667, 480, 350px. The clone uses 992, 768 and 480px.

## Behaviour (observed)
- Hero: auto-advancing slider with arrows and dots; the animated slide art scales slowly.
- Sections fade in on scroll (wow.js / animate.css style fadeIn).
- Header becomes sticky on scroll (jquery.hc-sticky).
- Mobile: hamburger menu, social icons hidden, nav collapses.
- Add-to-cart updates the cart count.

## What the clone does
- Placeholder brand "Hollis & Crane Butchery", invented nav labels and copy.
- All imagery replaced with inline SVG drawings and CSS gradients at the same aspect ratios.
- Footer accreditation logos replaced with neutral "Badge A-E" tiles.
- No original images, logos, font files or copy used. Original brand not named in index.html, styles.css or script.js.

## Fonts

Source: one family, Montserrat, self-hosted by the source as custom faces (`montserratlight`, `montserratregular`, `montserratsemi_bold`, `montserratbold`). All four faces declare `font-weight: normal`, so the rendered weight comes from the face name.

Licence status: Montserrat is free and open (SIL Open Font License), available from Google Fonts. The clone loads the same family from Google Fonts (weights 300-800) and does not copy or reference any source font file. Commercial licence not needed.

| Role | Source family (face) | Clone loads | Licence |
|---|---|---|---|
| Nav (desktop) | Montserrat regular, synthetic bold | Montserrat 600 | OFL, free |
| Section headings | Montserrat semibold | Montserrat 600 | OFL, free |
| Product titles | Montserrat semibold | Montserrat 600 | OFL, free |
| Price | Montserrat regular | Montserrat 400 | OFL, free |
| Buttons | Montserrat semibold | Montserrat 600 | OFL, free |
| Utility bar | Montserrat regular (desktop) / semibold (mobile) | Montserrat 400 / 600 | OFL, free |
| Footer | Montserrat light | Montserrat 300 | OFL, free |
| Body | Montserrat regular, 12px / 18px | Montserrat 400 | OFL, free |
| Hero text | No source text (copy is baked into slide images) | Montserrat 600 / 400 (invented) | OFL, free |

Measured values (computed, desktop 1440 / mobile 390):
- Nav: 12px, lh 21.6px, tracking 1px, uppercase. Mobile nav is hidden behind the hamburger in the source, so it could not be measured and the clone keeps the desktop values.
- Section heading: 22px / 24.2px (16px / 17.6px at mobile), normal tracking, uppercase.
- Product title: 10.8px / 11.88px, normal tracking, uppercase.
- Price: 11px / 12.1px (9px / 9.9px at mobile), uppercase.
- Button: 10px / 14.29px, 1px tracking, uppercase.
- Utility: 10px / 15px desktop; 12px / 18px, 1px tracking at mobile.
- Footer: 8.67px / 13px desktop; 10.2px / 18px at mobile, uppercase.

Font-size, line-height, tracking and transform match the source at both widths. Weights match the face the source renders, with the nav using 600 to approximate its synthetic bold.

## Visual diff

Paired screenshots (source vs clone) are section by section at 1440px and 390px, plus full page. Two compare-and-fix rounds done.

Round 1 found and fixed:
- Hero: source is a full-bleed carousel with neighbouring slides peeking in on both sides, about 350px tall, copy overlaid on the photo. Clone was a single boxed slide. Now a track with a centred 750px slide and peeking neighbours (640px at 992px, 82vw at mobile), text overlaid on art.
- Product cards: source puts the red NEW tag under the title (not over the image), shows the price centred under it, and has labelled options ("Number of Units", "Approx. Unit Size") with bordered selects. Clone used an overlay badge and short labels. Fixed.
- Store: source is a 2:1 / 1:2 / 1:1 photo mosaic with white uppercase labels centred on the image and no label box. Clone had a different grid and white caption boxes. Now the same grid (6 tiles, last row two tiles) and centred labels.
- Videos: source is a carousel with red circular arrows at the edges and centred captions. Clone was a static 4-up row. Now a scrolling carousel with arrows and centred captions.
- Mobile trending: source keeps two product columns at 390px. Clone stacked one column. Now two columns.
- Mobile header: source uses a compact sticky bar (menu left, logo centre, search and cart icons right) with no utility strip. Clone showed the full utility bar plus the large logo. Now a compact bar on mobile; the utility strip and large logo are desktop only.
- Mobile store: source tiles are short (about 83px) with a 2-column pattern. Clone tiles were 140px. Now 96px rows with a 14px gap.

Round 2: header, store and hero at 390px now match the source's structure. Trending at 1440px matches on card layout, typography and spacing.

Left as-is or known differences:
- Source NEW tag is a red burst icon; clone uses a clip-path star (close, not identical).
- Source hero copy is baked into the photos; clone uses live text overlaid on the art.
- Source mobile store labels have short decorative dashes above and below; clone omits them.
- Source's stacked utility links and the source's exact mobile nav are not reproduced (mobile nav is the same collapsed list).
- Source's grey footer accreditation logos are replaced with neutral badge tiles (by design).
- Source reveal animations (wow.js fadeIn) are approximated with an IntersectionObserver fade-up.

## Gap fixes

Gaps are from the fnb-site-gaps checklist. Before/after is measured on the clone.

| # | Gap | Before | After | Placeholders used |
|---|---|---|---|---|
| 1 | Image alt text | No `<img>` elements. Drawn art was SVG or CSS. Logo and icon SVGs partly unmarked. | No `<img>` elements, so no alt needed yet. All decorative SVG and CSS art is `aria-hidden` or sits in labelled controls. Logo SVG marked decorative. Once 7b images are added, each needs specific alt text, width/height and `loading="lazy"` below the fold. | None |
| 2 | Local business structured data | None. | JSON-LD `@graph` with `WebSite` and `Store` (name, url, description, telephone, priceRange, servesCuisine, PostalAddress, GeoCoordinates, OpeningHoursSpecification, hasMenu, OrderAction potentialAction, sameAs). Parses cleanly. `image` set to `img/hero-smoked-brisket.jpg` on the placeholder domain. | `https://www.example.com/butcher/`; 1 Sample Street, Singapore 000000; +65 0000 0000; sample hours 10:00-21:00 daily; geo set to approximate Singapore centre (1.3521, 103.8198); social links on example.com |
| 3 | Heading structure | No `<h1>`. | One `<h1>`, visually hidden (the design has no visible headline): "Hollis & Crane Butchery: fresh cuts, charcuterie and deli in Singapore". Sections use `<h2>`, product titles `<h3>`. | Placeholder brand name |
| 4 | Title tag | "Hollis & Crane Butchery \| Sample Homepage" (brand plus generic "Sample"). | "Butcher and Deli in Singapore \| Hollis & Crane Butchery" (55 characters). | Placeholder brand |
| 5 | Meta description | "Sample butcher and deli homepage design study." (46 characters, no offer or CTA). | One sentence, 148 characters, with offer, location and CTA ("Order for pickup today."). Also used for og and twitter descriptions. | Placeholder brand, Singapore |
| 6 | Technical basics | `lang="en"`, viewport present. No canonical, OG, Twitter card, robots meta, robots.txt or sitemap. | `lang="en-SG"`. Canonical. `robots` meta (index, follow, max-image-preview:large). OG: type, site_name, title, description, url, locale en_SG. Twitter summary_large_image. `robots.txt` (points to sitemap) and `sitemap.xml` (one URL, lastmod 2026-11-10). `og:image` (and `og:image:alt`, width, height) and `twitter:image` point to `img/hero-smoked-brisket.jpg` on the placeholder domain. | example.com domain |
| 7 | Reviews | None. | "Kind words" section: three sample reviews with first name only, star rating, and an HTML comment marking them as sample content. | First names Ann, Marcus, Priya; invented wording |
| 8 | Newsletter sign-up | None. | "Weekly cut sheet" section: labelled email input (`sr-only` label), one Subscribe button, reason line. Submit is handled client-side and sends nothing (shows a sample toast). | None |
| 9 | Chat or WhatsApp button | None. | Floating red round button, bottom-right (18px inset; 12px inset and 46px on mobile), `aria-label`, link to a placeholder chat page. Styled with the clone's red and shadow tokens. | `https://www.example.com/butcher/chat/` |

Verification: exactly one `<h1>`; JSON-LD parses; every `<img>` has alt (none present); no horizontal overflow at 1440 or 390; no console errors. Screenshots show the reviews and newsletter sections matching the site's type and spacing.

Open: the remaining drawn slots listed under "## Photo slots" still need photos when the image quota allows.

## Photo slots

Images live in `img/` (relative paths only, no leading slash). Total about 260 KB, under the 4 MB budget. All photos are generated, not copied from the source.

Wired (real `<img>` with alt text):
- Hero slide 1: `img/hero-smoked-brisket.jpg` (1264x848, 149 KB). Alt: sliced smoked brisket on a round oak board with a carving knife. Shown with `object-fit: cover`, `object-position: 40% 50%`, high fetch priority, and copy on the dark right-hand side.
- Hero slide 2: `img/deli-cheese-board.jpg` (1264x848, 110 KB). Alt: aged cheese wedges, grapes, lemon and ginger on a dark slate board. Lazy-loaded.
- `og:image`, `twitter:image` and JSON-LD `image` point to the brisket photo on the placeholder domain.

Still drawn (SVG or CSS art, not photos):
- Hero slide 3: sparkling wine cellar (drawn barrels and bottles).
- Trending cards 1 to 3: gift tube, wine bottle, cured ham (drawn).
- Store tiles 1 to 6: fresh cuts, charcuterie, cheese, ready meals, bakery, sausages (CSS gradients).
- Video thumbnails 1 to 4 (CSS gradients).

Generation: two images generated in total. The image model returned quota errors (429) on the third attempt, so generation stopped there, per the brief. Remaining prompts are drafted in the 7b rules: similar subject, composition and crop, "no text, no logos, no brand names, no watermarks, no packaging labels".

Mobile: on photo slides the body paragraph is hidden below 768px so the headline and button fit over the photo.

## Known gaps
- Scroll-reveal timing and the exact slider easing are approximated.
- Original store section is taller and uses real product photography; the clone uses a 5-tile mosaic instead.
- No real cart, search, or navigation targets (all links are "#").
