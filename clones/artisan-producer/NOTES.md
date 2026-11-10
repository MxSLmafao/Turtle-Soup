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
