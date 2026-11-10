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
