# Design notes: artisan-producer (source: https://www.fossachocolate.com/)

Render: Playwright worked (chromium via proxy). Screenshots kept in scratchpad, not in repo.
Stack: Squarespace (fixed header, Typekit fonts). Custom CSS small; most tokens from site.css.

## Section order (1440px wide, page height ~2690px)
1. Announcement bar (tan, ~30px, centred one-liner + close X)
2. Header 0-93px: left text wordmark + nav links in tracked uppercase sans; right login + cart count
3. Hero 93-~670: full-bleed split photo (left/right halves), centred popup card (ignored in clone)
4. Divider rule + italic serif heading "Shop Our Top Categories"
5. Three equal square tiles (1:1), ~24px gutters, centred label + underline bar
6. Cream "As Featured On" band (~125px): italic heading, row of press logos (replaced by text placeholders)
7. Two full-bleed 50/50 panels (~535px tall) with italic serif headline + small uppercase CTA + underline
8. Footer on cream: two link columns, newsletter input + dark pill button, copyright, payment marks

## Type
- Display: italic high-contrast serif (clone: Cormorant Garamond italic), ~54px hero headline, ~42px panel headline
- Nav/body: wide-tracked geometric sans, uppercase nav ~13px letter-spacing ~0.12em (clone: Jost)
- Section label: italic serif ~20px

## Palette (sampled from render)
- Ink #1f1d1a, cream #f2efe9, announcement tan #a89a84, moss #2f4a1f, chocolate #5a2e1a, gold #b8893c

## Interaction
- Fixed header; tiles dim/zoom slightly on hover (CSS scale on image, underline grows)
- Fade-up reveal on sections (IntersectionObserver), disabled under prefers-reduced-motion

## Responsive (390px)
- Nav collapses to hamburger + centred wordmark; tiles stack to 1 column (each ~ 1:1 at full width)
- Featured band wraps into 3 logos per row; panels stack; footer columns stack

## Clone decisions
- No photos, logos or copy from source. Imagery replaced with inline SVG/CSS art of same aspect ratios.
- Brand placeholder: "Marrow & Cacao". Copy written originally.

## Fonts

Measured in the source render (Typekit kit, real fonts) at 1440 and 390. The clone matches these values exactly for every role.

| Role | Source family (computed) | Clone stack and load | Licence status |
|---|---|---|---|
| Nav, buttons, tile labels, footer headings, eyebrow | "Sackers Gothic Std" 850, uppercase, 0.02em (1440: 12.272px / 17.18px; 390: 17px nav, 12.92px buttons) | "Sackers Gothic Std" first, then "Sackers Fallback" (Funnel Sans 700 from Google Fonts CDN, size-adjust 139%) | Commercial (Typekit/foundry). Buy or license from the foundry or Adobe Fonts. Fallback is wider and taller than the original, so the caps look larger. |
| h1 (hero and split panels), footer links, press serif | "Garamond Premier Pro Display" 500 (1440: 57.2px / 0.9 / -0.01em; footer links 19.184px; 390: 41px / 17.24px) | "Garamond Premier Pro Display" first, then "Garamond Fallback" (Cormorant Garamond 500 normal and italic from Google Fonts CDN, size-adjust 86.8%) | Commercial (Adobe Fonts). Buy the family from Adobe Fonts or the foundry. |
| Body, lede, hero paragraphs | "Saans" 500 at 1440 (14px / 16.8px / normal); 300 at 390 (13px / 19.5px / 0.5px) | "Saans" first, then "Saans Fallback" (Funnel Sans 300 and 500 from Google Fonts CDN, size-adjust 99.5%) | Commercial (Klim Type Foundry). Buy at klim.co.nz. |
| Announcement bar, mobile menu label | "Funnel Sans" 300 (14px / 18.2px / -0.01em / capitalize; 390: 11px / 14.3px) | "Funnel Sans" loaded directly from Google Fonts CDN (300, 500, 700) | Free (OFL). Same family, no fallback needed. |
| Skip link | "Roboto" 400 (11.97px, 0.11em, uppercase) | "Roboto" loaded directly from Google Fonts CDN | Free (Apache 2.0). Same family. |
| Section heading "Shop Our Top Categories" | Not in source h2 list (source has none); source uses a serif display | Garamond stack, italic 22px | Same licence as the Garamond row above. Not a measured match. |

Notes:
- Font files are never copied from the source. Fallback faces use Google Fonts CDN URLs for free families only.
- size-adjust values come from the measured width of sample strings in the source render ("Malt Dinosaur", "Christmas 2026", "We ship internationally.") against the same strings in the fallback at the same size.
- Sackers Gothic requests weight 850. Funnel Sans tops out at 700, so the fallback uses 700.
