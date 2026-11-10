---
name: fnb-site-gaps
description: Audit and fix the gaps most often found on food-and-beverage business websites — missing image alt text, no LocalBusiness structured data, broken heading structure, brand-only titles, weak meta descriptions, missing technical SEO basics, and missing conversion elements (reviews, newsletter, chat). Use when building, cloning, reviewing or pitching an F&B website (restaurant, café, bakery, bar, caterer, brewery, food shop), or when asked to "check the SEO", "fix the gaps", or "make this site rank locally".
---

# F&B site gaps

Checklist of what F&B websites most often lack, with the fix for each. It comes from an audit of 15
prominent Singapore F&B homepages on 2026-11-10 (`docs/seo-audit.md`,
`docs/design-elements-and-skills.md`). The audit was homepage on-page only: no ranking, traffic or
page-speed data.

The pattern: these sites look polished but are weak on search basics, and the best-known brands are
the weakest because they rely on name recognition. None of the fixes needs a redesign.

## How to use

1. Audit the page against every gap below and record pass/fail.
2. Fix each failure. Keep the existing visual design: new elements must use the site's own fonts,
   colours, spacing and button styles.
3. Re-audit and report what changed and what is still open.

When the business details are unknown (address, phone, hours, domain), use obvious placeholders
(`https://www.example.com/`, "1 Sample Street, Singapore 000000", "+65 0000 0000") and list them so
the owner can replace them. Never invent real-looking reviews attributed to real people or
publications; mark sample reviews as sample content.

## Search gaps (ranked by how common they are)

### 1. Image alt text — missing on 14 of 15 sites
- Every content `<img>` gets a specific alt: what is shown, plus dish or place name where relevant
  ("Sliced smoked brisket on a wooden board"), under ~125 characters.
- Decorative images and inline decorative SVGs: `alt=""` or `aria-hidden="true"`.
- CSS background photos that carry meaning: add `role="img"` and `aria-label` on the element.
- Add `width`, `height`, and `loading="lazy"` below the first screen.

### 2. Local business structured data — missing on 12 of 15
Add one JSON-LD block in `<head>` using the most specific type: `Restaurant`, `CafeOrCoffeeShop`,
`Bakery`, `BarOrPub`, `Brewery`, `Distillery`, `IceCreamShop`, `FoodEstablishment`, or `Store` /
`LocalBusiness` for food shops. Include:
- `name`, `url`, `image`, `description`, `telephone`, `priceRange`, `servesCuisine` (where it applies)
- `address` (PostalAddress), `geo` (GeoCoordinates), `openingHoursSpecification`
- `menu` or `hasMenu`, `acceptsReservations` or an order link (`potentialAction`), `sameAs` social links
Multi-outlet brands: an `Organization` plus one entry per outlet. Add `WebSite` as well.

### 3. Heading structure — wrong on 8 of 15
- Exactly one `<h1>`: the hero headline, saying what the business is.
- Sections use `<h2>`, cards and sub-items `<h3>`; never skip levels for styling.
- If the design has no visible headline, add a visually hidden `<h1>`.

### 4. Title tag — weak on 5 of 15
- 50–60 characters: category keyword + city or area + brand.
  Example shape: "Wood-fired Grill Restaurant in Singapore | Brand".
- Not the brand name alone, not "Home".

### 5. Meta description — weak on 6 of 15
- 140–160 characters, one sentence on what is offered and where, one call to action.
- Not a slogan, not a keyword list, not empty.

### 6. Technical basics — missing on 3 of 15
- `<html lang>` set (for Singapore: `en-SG`), `<meta name="viewport">`.
- `<link rel="canonical">`.
- Open Graph: `og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`.
- `<meta name="twitter:card" content="summary_large_image">`.
- `<meta name="robots" content="index, follow, max-image-preview:large">`.
- `robots.txt` that references the sitemap, and a `sitemap.xml`.

## Conversion gaps

### 7. Reviews or testimonials — present on only 5 of 15
A short proof section: 3 quotes with first name and context, or an aggregate rating. Only real,
attributable reviews on a live site; sample content must be labelled as such.

### 8. Newsletter sign-up — present on 7 of 15
One email field and one button, with a one-line reason to join. Label the input; give the form an
accessible name.

### 9. Chat or WhatsApp button — present on 7 of 15
A floating contact button, bottom-right, that does not cover content or other controls on mobile.
Give it an `aria-label`.

## Report format
A table of the nine gaps with before/after status, the placeholders used, and anything left open.
