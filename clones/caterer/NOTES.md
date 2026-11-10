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
