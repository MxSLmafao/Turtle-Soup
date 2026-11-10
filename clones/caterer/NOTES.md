# Design notes: caterer homepage study

Source: https://grain.com.sg/ (Vue SPA; homepage rendered with Playwright at 1440 and 390 wide).
Placeholder brand used in the clone: "Hearthline Kitchen".

## Section order (desktop, 1440px)
1. Announcement bar, dark red (#8b001e), 40px tall, centred 14px text, close X at right.
2. Header: transparent over hero. Wordmark left (x=156), 4 nav links 16px bold white, one text CTA at right. Container about 1128px centred. Sticky-ish on scroll.
3. Hero, y=49 to 849 (800px). Full-bleed photo of a table set for a feast, centred white 2-line headline (condensed heavy uppercase, about 48px), 26px subline, yellow CTA 168x42 (#fecc07, dark text). Photo is replaced by an inline SVG table scene over sage-to-red gradient.
4. Product cards, 3 columns, 459px wide each, 16px gutters, 480px tall, starts at y=865 (margin 16px). Each card: full-bleed photo with bottom-up black gradient overlay (80% height), centred uppercase heavy title (40px / 54px line), 18px bold byline (max 320px), 124px yellow button. Hover: background scales 110% over 0.2s.
5. Testimonials, bg #eae6e1, 318px tall, padding 48px. Heading 40px regular weight, quote 18px light (300), author uppercase 14px heavy, carousel dots (#999, active #000).
6. Secondary banner, 400px tall, full bleed split photo. Centred display title (Windsor-like, 54px, colour #eae6e1), white underlined text link.
7. Footer, black, 4 columns (logo, Company, Products, Help) plus accreditation badges. Divider #4d4d4d, legal row (Terms, Privacy, social icons) 13px.
8. Floating WhatsApp button, bottom right, 56px circle, green.

## Type scale
- Body: Avenir-like geometric sans (Typekit "FunkisA"), 16px, weight 400, line-height about 1.5. Nav 16px/700.
- Display headings: "Kapra Neue Black" (heavy, condensed-ish), uppercase. Card title 40px/54px (desktop), 28px/36px (mobile).
- Banner display: "Windsor" (heavy slab-ish), 54px/60px.
- Testimonial quote 18px/28px weight 300; author 14px/20px uppercase.
- Google Font substitutes: Barlow Condensed 800 for display headings, Ultra for the banner title, Figtree for body.

## Palette (sampled and read from CSS)
- Announcement bar #8b001e; hero sage #c1c89d; hero cloth red #7b0007
- Primary CTA yellow #fecc07; cream testimonial bg #eae6e1; banner text #eae6e1
- Footer black #000; footer divider #4d4d4d; WhatsApp green #25d366
- Text black #000; white #fff

## Nav and behaviour
- Desktop nav links inline. Mobile (<= 640px): hamburger replaces links, panel slides down.
- Header keeps its position at top. Announcement bar scrolls away.
- Testimonial carousel auto-advances about every 6s; dots and swipe work.
- Scroll reveal: sections fade up 16px on entering the viewport.
- Hover states: buttons darken, cards zoom background 110%, links underline.

## Responsive
- 1440: three cards side by side; hero 800px.
- 390: stacked cards, each about 506px tall; hero about 400px with 28px title; 16px side gutter; no horizontal scroll.

## Known source details not reproduced
- Photography (hero, cards, banner) is replaced with CSS gradients and inline SVG.
- Third-party analytics, chat widget and Typekit kits are not included.
- Logos, accreditation badges and real copy are replaced with placeholders.

## Fonts

All families on the source homepage are commercial (served through an Adobe Fonts / Typekit kit or self-hosted). None is free, so none was downloaded, copied or hot-linked. Each role keeps the exact original family name first in the stack, followed by a free fallback. Declared sizes, weights, line-heights, letter-spacing and transforms match the source at both widths.

| Role | Source family (name) | Source size / weight / line-height (1440 / 390) | Clone stack | Clone loads | Licence status |
|---|---|---|---|---|---|
| Announcement bar | EmberBody | 14px / 400 / 14px (both) | "EmberBody", Figtree | Figtree 400 | Commercial/licensed, self-hosted. Check the foundry for a licence. |
| Header nav links | FunkisA | 14px / 700 / 60px (desktop) | "FunkisA", Figtree | Figtree 700 | Commercial (Typekit). Buy via Adobe Fonts or the foundry. |
| Mobile menu links | Kapra-Neue-Black | 28px / 700 / 36px uppercase (390) | "Kapra-Neue-Black", Barlow Condensed | Barlow Condensed 700 | Commercial. Buy from the foundry or Adobe Fonts. |
| Hero h1 | Kapra-Neue-Black | 40px / 700 / 54px uppercase (1440); 28px / 36px (390) | "Kapra-Neue-Black", Barlow Condensed | Barlow Condensed 700 | Commercial. |
| Hero sub | FunkisA | 24px / 700 / 28px (1440); 16px / 24px (390) | "FunkisA", Figtree | Figtree 700 | Commercial. |
| Hero / card buttons | FunkisA | 16px / 700 / 24px (1440); 14px / 20px on cards (390) | "FunkisA", Figtree | Figtree 700 | Commercial. |
| Product card title | Kapra-Neue-Black | 40px / 700 / 54px uppercase (1440); 28px / 36px (390) | "Kapra-Neue-Black", Barlow Condensed | Barlow Condensed 700 | Commercial. |
| Product card byline | FunkisA | 18px / 700 / 24px (1440); 16px / 24px (390) | "FunkisA", Figtree | Figtree 700 | Commercial. |
| Testimonial heading | FunkisA | 40px / 700 / 54px (1440); 18px / 28px (390) | "FunkisA", Figtree | Figtree 700 | Commercial. |
| Testimonial quote | FunkisA | 18px / 300 / 28px (1440); 16px / 24px (390) | "FunkisA", Figtree | Figtree 300 | Commercial. |
| Testimonial author | Kapra-Neue-Black | 14px / 400 / 20px uppercase (both) | "Kapra-Neue-Black", Barlow Condensed | Barlow Condensed 400 | Commercial. |
| Banner title | Windsor | 54px / 700 / 60px uppercase (1440); 28px / 36px (390) | "Windsor", Ultra | Ultra 400 | Commercial. |
| Banner link | FunkisA | 18px / 700 / 28px (1440); 14px / 20px (390) | "FunkisA", Figtree | Figtree 700 | Commercial. |
| Footer headings | FunkisA | 16px / 700 / 28px uppercase (1440); 14px / 28px (390) | "FunkisA", Figtree | Figtree 700 | Commercial. |
| Footer links | FunkisA | 14px / 400 / 20px (both), colour #eae6e1 | "FunkisA", Figtree | Figtree 400 | Commercial. |
| Legal row | FunkisA | 12px / 400 / 16px (both) | "FunkisA", Figtree | Figtree 400 | Commercial. |

Notes:
- Montserrat and Open Sans are registered on the source page, but no homepage text role uses them.
- Google Fonts loaded by the clone: Barlow Condensed (400, 700, 800), Figtree (300, 400, 500, 700) and Ultra. These are fallbacks only and are not the source families.
- Known gap: Kapra-Neue-Black is a single black face, so the source's declared weight of 400 on the testimonial author still renders heavy. The Barlow Condensed fallback at 400 looks lighter. The declared value matches; the visual weight does not.
- Where a licence can be bought: Adobe Fonts (for families in the Typekit kit) or the original foundry. Licence terms were not verified in this pass.

## Visual diff

Two compare-fix rounds, screenshots from `<scratchpad>/vd-caterer/` (original and clone at 1440 and 390, paired crops per section).

Fixed:
- Section positions at 1440 now align within 6px of the original (products 865, testimonials 1361, banner 1679, footer 2079). Testimonial block set to 318px tall and six slides (six dots), as in the source.
- Hero headline is one line at 1440 (source is one line). Hero copy moved to the source's vertical position. A soft dark radial scrim sits behind the hero copy so the subline reads over the artwork.
- Mobile: announcement bar 78px, hero 400px, products start at y=494 and testimonials at y=2060, matching the source.
- Banner stays split at 390 (was hidden). Mobile banner 240px. Banner title shortened to "Let's plan it" so it fits on one line at mobile size.
- Footer desktop: brand column 188px so columns start at x=344, as in the source. The legal divider is full-bleed, with Terms and Privacy and social icons left-aligned inline.
- Footer mobile: single centred column (logo, three link groups, badges, legal row, social), as in the source. Logo overlap bug fixed.

Left (not matched):
- Hero, cards, banner photos: drawn SVG/gradient art. The image generator returned a quota error on every attempt (quota reset in roughly 2h40m), so no photos were generated.
- Hero copy and CTA wording differ, as intended (placeholder copy).
- Hover zoom on cards is implemented; the source's card photos are not.
- Mobile footer about 80px shorter than the source (993px vs 1071px).
- Testimonial author label renders lighter than the source, because the Barlow Condensed fallback is not the heavy Kapra face (see Fonts).
- Footer logo is a neutral drawn mark; source uses a different logo shape (intentional placeholder).
- Source's Christmas hero photo, the accreditation badges and the source's real copy are replaced with placeholders.

## Gap fixes

Placeholder data used (no real business): domain `https://www.example.com/caterer/`, address "1 Sample Street, Singapore 000000", phone "+65 0000 0000", hours Mon to Sat 09:00 to 18:00, geo set to the Singapore city-centre coordinate (1.3521, 103.8198), menu and order URLs and social links on example.com, newsletter placeholder (no email is sent), sample reviews with first names and roles only.

| # | Gap | Before | After |
|---|---|---|---|
| 1 | Image alt text | No `<img>` elements. Art is inline SVG and CSS, marked `aria-hidden` (decorative). | Unchanged; verified 0 `<img>` without alt. Hero, card and banner art stays decorative. |
| 2 | Local business structured data | None. | One JSON-LD block: `FoodEstablishment` (name, url, description, telephone, priceRange, servesCuisine, PostalAddress, GeoCoordinates, OpeningHoursSpecification, hasMenu, OrderAction, sameAs) plus `WebSite`. `image` omitted (no img/ folder). Parses as valid JSON. |
| 3 | Heading structure | One `h1` (hero), `h2` per section, `h3` in footer. | Unchanged; verified exactly one `h1`. New newsletter heading is an `h2`. |
| 4 | Title tag | "Hearthline Kitchen \| Catering and daily boxes" (45 chars, brand plus generic words). | "Caterer in Singapore for Events \| Hearthline Kitchen" (52 chars: category, city, brand). |
| 5 | Meta description | "Sample catering homepage: daily boxes, celebrations and catering for every size of gathering." (93 chars, reads as a sample label). | One sentence on the offer and area with a call to action, 145 chars. |
| 6 | Technical basics | `lang="en"`, viewport present. No canonical, Open Graph, Twitter card, robots meta, robots.txt or sitemap. | `lang="en-SG"`, robots meta, canonical, og:type/site_name/title/description/url/locale, twitter:card summary_large_image and title/description. `robots.txt` and `sitemap.xml` added. `og:image` omitted (no img/ folder). |
| 7 | Reviews or testimonials | Six quotes with first names and roles, present but not labelled. | Unchanged content; HTML comment marks them as sample content, not real customers. |
| 8 | Newsletter sign-up | Missing. | Added after the banner: heading, one-line reason, labelled email input (visually hidden label), yellow Subscribe button, live status line. Demo handler prevents submission and shows a note. |
| 9 | Chat or WhatsApp button | Present: floating button bottom-right with `aria-label`. | Unchanged. Footer social links now point to placeholder example.com URLs. |

Verification: exactly one `h1`; 0 `<img>` elements; JSON-LD parses; title 52 chars, description 145 chars; no overflow at 1440 or 390; no console errors or warnings.

## Photos

Photo slots and status:

| Slot | Source (original) | Clone | Status |
|---|---|---|---|
| Hero (full-bleed, 800px desktop, 400px mobile) | Festive table photo, centred headline | `img/hero-festive-spread.jpg` (1264x848, JPEG q80, 221 KB), `object-fit: cover`, centre 50% 45%, plus a 18-34% dark overlay and a central radial scrim behind the copy | Generated photo, wired in |
| Product card: Daily Boxes | Takeaway boxes on a table | Drawn SVG/gradient art | Still drawn (quota) |
| Product card: Celebrations | Wedding banquet | Drawn SVG/gradient art | Still drawn (quota) |
| Product card: Catering | Buffet line | Drawn SVG/gradient art | Still drawn (quota) |
| Banner, left half | Astronaut on a lunar surface | Drawn gradient | Still drawn (quota) |
| Banner, right half | Hand salting roast carrots | Drawn gradient | Still drawn (quota) |

Generation attempts: 1 photo generated (hero). Further generation stopped at the first quota error (429, reset in about 4h48m). Prompts for the remaining five slots are written in section 7b of the brief.

Image metadata: hero `alt` describes the table; `og:image`, `og:image:width/height/alt`, `twitter:image` and JSON-LD `image` point to `https://www.example.com/caterer/img/hero-festive-spread.jpg`. Total img/ size: about 221 KB.

Note: the hero source is 1264px wide, under the 1440px desktop slot. It is shown with `object-fit: cover`, so it is slightly soft on large screens.

## Polish pass

Replica (structure level, 1440x900 and 390x844), measured against the source with the added newsletter and chat button hidden on a scratch copy.

| Run | Layout | Style | Pixels | Notes |
|---|---|---|---|---|
| Baseline (as delivered, newsletter included) | 38.5 | 88.7 | 0.0 | 310px extra height from the newsletter section |
| Round 1 (newsletter excluded, banner merged) | 45.9 | 88.6 | 0.0 | Page heights match within 6px at 1440 |
| Round 3 (final) | 61.6 | 89.8 | 0.0 | Card copy position, card text box, phone footer rhythm |

Changes:
- Banner: the two drawn halves are now background layers of one full-width `.banner` element (the source is one element). Same colours and split.
- Product cards: bottom padding 138px on desktop (the source's card padding), 48px on phones. Title and byline boxes span the card text column, so the copy sits where the source's copy sits.
- Phone product bylines: 320px max width, as in the source.
- Phone footer: spacing between link groups (48px), logo gap and legal padding, bringing its height closer to the source (about 1000px vs 1071px).
- Style: social icons use the cream footer colour and a 26px target; the announcement link uses weight 400 as in the source.
- Interaction states (already present, verified): button hover darkens and lifts 1px; cards zoom the background to 110% on hover over 0.2s (source timing); nav and header links underline on hover; keyboard focus shows a 3px yellow outline; header turns solid after scrolling past the hero; testimonial carousel pauses on hover; reduced-motion disables transitions and the carousel timer.

Final checks (1440, 768, 390): no horizontal overflow, no console errors or warnings, one h1, JSON-LD parses, every img has alt, no source-brand names in code.

Still off, and why:
- Layout gate (90) not reached. Most remaining "missing" items are copy and brand differences by design: nav and card titles, the banner headline, testimonial quotes, and the hidden source slides. The 'Grain' wordmark is an image in the source and a text wordmark here, which is 182px wide versus 81px.
- Pixels score 0: brand, copy and photos differ on purpose; the hero is the only generated photo, and the three cards and both banner halves are still drawn.
- Phone card bylines are two lines here and three in the source, because the copy is different.
- Footer logo is a drawn placeholder mark.
