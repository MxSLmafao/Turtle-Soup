# Design elements and skills: what the 15 F&B sites have in common

Scope: the 15 Singapore F&B source sites and their clones in `clones/<category>/`, plus the skills
installed in `.claude/skills/`. Date of analysis: 2026-11-10.

Counts are across the 15 clones, which mirror the sources. They come from pattern-matching the clone
code, so treat them as approximate. Per-site measurements are in each `clones/<category>/NOTES.md`.

## The sites

| Category | Source site | Clone folder | Placeholder brand | Platform |
|---|---|---|---|---|
| Full-service restaurant | burntends.com.sg | `clones/restaurant` | Ember & Oak Bar & Grill | WordPress |
| Café | commonmancoffeeroasters.com | `clones/cafe` | Tidewater Coffee Roasters | Shopify |
| Bakery | tiongbahrubakery.com | `clones/bakery` | Lantern Row Bakehouse | Shopify |
| Caterer | grain.com.sg | `clones/caterer` | Hearthline Kitchen | Custom / unidentified |
| Street food | liaofanhawkerchan.com | `clones/street-food` | Lantern Lane Hawker Co. | Custom / unidentified |
| Brewery | brewerkz.com | `clones/brewery` | Driftwood Brewing Co. | WordPress |
| Bar | atlasbar.sg | `clones/bar` | Halden | Custom / unidentified |
| Juice bar | project-acai.com | `clones/juice-bar` | Bloom Berry Bar | Squarespace |
| Ice cream | birdsofparadise.sg | `clones/ice-cream` | Fernhollow Gelato Co. | Shopify |
| Meal-prep | amgdglobal.com/en-sg | `clones/meal-prep` | Quillmere Kitchen | Next.js |
| Artisan producer | fossachocolate.com | `clones/artisan-producer` | Marrow & Cacao | Squarespace |
| Home baker | whiskdom.com | `clones/home-baker` | Cocoa Lane | Shopify |
| Butcher | hubers.com.sg | `clones/butcher` | Hollis & Crane Butchery | Custom / unidentified |
| Distillery | brassliondistillery.com | `clones/distillery` | Copper Heron Distilling Co. | Shopify |
| Private chef | takeachef.com/en-sg | `clones/private-chef` | Hearthside Chefs | Custom / unidentified |

The sites were chosen as prominent Singapore brands with live sites. They are not a measured ranking
of top performers.

## Shared page skeleton

Almost every homepage follows the same order:

1. Announcement bar (optional)
2. Sticky header: logo, 5–7 links, one call-to-action button
3. Full-width photo hero: one headline, one button
4. Card grid: products, outlets or menus
5. Story or "about" split panel (image one side, text the other)
6. Proof: reviews, press, awards or a social feed
7. Newsletter sign-up (shops)
8. Multi-column footer

## Element frequency

| Element | Clones with it (of 15) | Notes |
|---|---|---|
| Sticky or fixed header, hamburger menu on mobile | 15 | Usually logo, 5–7 links and one call-to-action |
| Full-width photo hero as the first screen | 15 | Restaurant and bar are almost nothing else |
| Card grids (products, outlets, menus) | 14 | Three or four across; one or two on mobile |
| Scroll-in reveal animation | 13 | Subtle fade and rise |
| Uppercase, letter-spaced nav and buttons | 12 | The most consistent type habit |
| Pill-shaped buttons | 12 | |
| Announcement bar above the header | 10 | Delivery offers, launches, promos |
| Carousel or slider | 10 | Hero slides, bestsellers, testimonials |
| Locations or outlets section | 10 | Missing mainly on single-venue and delivery-only sites |
| Newsletter sign-up | 7 | Mostly the online shops |
| Product cards with prices | 7 | Bakery, ice cream, distillery, butcher and similar |
| Floating chat or WhatsApp button | 7 | |
| Testimonials or reviews | 5 | |
| Scrolling marquee text | 4 | |
| Popup (promo or age gate) | 4 | Distillery age gate, bar promo |

## Typography

Most sites use one or two font families. Nine use free Google fonts; six premium brands pay for
commercial faces.

| Clone | Source fonts | Licence |
|---|---|---|
| Street food | Lato | Free |
| Juice bar | Libre Baskerville, Open Sans, Lato, Almarai | Free |
| Butcher | Montserrat | Free |
| Ice cream | DM Sans | Free |
| Private chef | Alata, Nunito Sans | Free |
| Meal-prep | Inter, Bebas Neue | Free |
| Home baker | Poppins | Free |
| Distillery | Bricolage Grotesque, Montserrat | Free |
| Restaurant | Bebas Neue, Radley; DinNext in the footer | Free, except DinNext |
| Café | Founders Grotesk | Commercial |
| Brewery | Futura PT | Commercial |
| Bar | ITC Kabel | Commercial |
| Caterer | Kapra Neue, FunkisA, Windsor, EmberBody | Commercial |
| Artisan producer | Garamond Premier Pro, Saans, Sackers Gothic | Commercial |
| Bakery | F37 Analog, Meta Accanthis | Commercial |

Shared habits:

- Navigation and buttons are uppercase with wide letter-spacing.
- Headlines are either a condensed or geometric sans, or an italic serif on the premium brands.
- Body text is 16–18px with generous line-height.

## Colour

Nearly all sites use a neutral base (cream, white or near-black) with a single accent colour.

| Clone | Base | Accent |
|---|---|---|
| Juice bar | Cream `#FEF5EC` | Plum `#673D37`, olive `#7D7A45` |
| Bakery | Cream `#F4EEE0` | Brown `#521B04`, teal `#004251`, lilac `#E7D2E7` |
| Distillery | Cream `#F3EADC` | Amber `#DC9B27` |
| Brewery | Light grey `#f1f1f1` | Amber `#fabb3b`, navy `#101632` |
| Bar | Near-black `#242c35` | Copper-gold gradient `#93574d` to `#e5a082` |
| Caterer | Cream `#eae6e1` | Burgundy `#8b001e`, yellow `#fecc07` |
| Private chef | Light grey `#f0efef` | Yellow `#f4c858` |
| Butcher | White | Red `#ed1b24` |

## Two site types

- **Venue sites** (restaurant, bar, street food): short and photo-led, aimed at a booking or a visit.
- **Shop sites** (bakery, ice cream, distillery, home baker, butcher, artisan producer, café): long,
  with product grids, newsletter and social feed.

Caterer, meal-prep and private chef sit in between: they sell by enquiry or order form.

## What the clones leave out

- Source images, logos, brand names and copy. Each clone uses a placeholder brand and original text.
- Photography: four clones have generated photos (restaurant, café, juice bar, street food). The other
  eleven still use drawn SVG and gradient art.
- Logos, press marks, award badges and payment marks are neutral placeholders of the same size.
- Commercial fonts are named first in the font stack and fall back to a free look-alike.

## Skills installed in `.claude/skills/`

| Group | Skills |
|---|---|
| Finding customers | `first-customer-finder`, `lead-generation`, `lead-research-assistant`, `lead-qualification` |
| Researching a prospect | `prospect-research`, `account-research`, `contact-research`, `prospect` |
| Signal-based prospecting | `signal-prospect`, `signal-scout`, `lookalike-prospect` |
| Discovery and calls | `client-discovery`, `discovery-interview-prep`, `discovery-process`, `call-prep`, `weekly-prep-brief` |
| Outreach | `compose-outreach` |
| Market research | `analyst-research`, `topic-brief`, `verifying`, `local-vault` |
| Building | `clone-website` |

What they have in common:

- **One workflow.** Define the ideal customer, research public signals, score or rank the leads, then
  draft outreach.
- **Human approval.** None of them sends messages automatically; they stop at a draft.
- **Evidence first.** The research skills ask for cited sources rather than guesses.
- **Paid accounts.** The Lusha skills (`lookalike-prospect`, `signal-prospect`), the Common Room skills
  (`account-research`, `call-prep`, `compose-outreach`, `contact-research`, `prospect`,
  `weekly-prep-brief`) and `lead-generation` (superagnt) need their own accounts to return data.
