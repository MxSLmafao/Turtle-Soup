# Design notes: street-food clone (source: https://www.liaofanhawkerchan.com/ , homepage)

Extraction: render works (Playwright, chromium). Computed styles probed at 1440px. Theme CSS fetched
(style.css, main.css, responsive.css) but the clone is built from measured values, not copied code.

## Layout (1440px desktop, page height ~2792px)
1. Fixed header 116px: navy toolbar 32px (social icons right), then white nav 84px with shadow
   (0 0 32px). Logo left, links right (nav link ~16px, 30px vertical padding), CTA pill (lang switch).
2. Hero slideshow, full width, 665px tall, starts under header (margin-top 116px). Full-bleed photo.
   Small mouse-scroll indicator centred at bottom.
3. Intro split row 635px: left 2/3 full-bleed food photo; right 1/3 panel, 3em padding, centred:
   award emblem, bold navy headline (red sub line), address lines, H2 "WELCOME" (32px, 500, +2px tracking),
   16px body 1.5em line height, red "> Read more" link.
4. Recommendations: H2 32px centred with red "> See menu" link right; row of 4 cards
   (294x207, 7px white border, grey shadow 0 0 16px, hover zoom on image).
5. Link grid: 2x2, each tile 618x412 image, caption H4 24px centred below, 2px tracking.
6. Footer: red (#ff0000) bar 52px, white 16px text, padding 10px 72px, copyright left, links right.

## Type
- Lato (Regular 400, Medium 500 for headings). Base 16px / 32px line-height, letter-spacing 1px.
- H2 32px/38.4px, weight 500, letter-spacing 2px. H4 24px/28.8px.

## Palette (measured)
- Text #212529, white #fff, toolbar navy #150958, accent red #ff0000, card shadow #aaa.

## Interactions
- Header becomes fixed; hero offset equals header height on desktop.
- Image zoom on hover (zoom-animation), scroll-in fade for `.animation-element`.
- Mobile (<990px): nav collapses to a MENU bar with slide-down overlay.

## Gaps
- Real photography and logo are not reproduced; replaced with CSS/SVG art at same sizes.
- Hero slider is a simple auto-advancing single slide with placeholder art.

## Fonts
Source loads self-hosted Lato files via @font-face (LatoRegular, LatoMedium, LatoLight; main.css).
Clone loads the same family, free and open licence (SIL OFL), from Google Fonts (Lato 400 and 500).
No source font files were downloaded or copied.

| Role (source measured)          | 1440px source                 | 390px source                    | Clone |
|---------------------------------|-------------------------------|---------------------------------|-------|
| Nav links                       | LatoMedium 16px/normal ls1px  | not shown (menu collapses)      | Lato 500, 16px/normal, ls1px |
| H2 (WELCOME, RECOMMENDATIONS)   | LatoMedium 32px/38.4px ls2px  | LatoMedium 20.8px/24.96px ls2px | Lato 500, same values |
| H4 (tile captions)              | LatoMedium 24px/28.8px ls2px  | LatoMedium 17.6px/21.12px ls2px | Lato 500, same values |
| Body / lede                     | LatoRegular 16px/24px ls1px   | LatoRegular 12.8px/19.2px ls1px | Lato 400, same values |
| Links ("> See Our Menu")        | LatoRegular 16px/32px ls1px   | LatoRegular 12.8px/25.6px       | Lato 400, same values |
| Footer                          | LatoRegular 16px/32px ls1px   | LatoRegular 12.8px/25.6px       | Lato 400, same values |
| Buttons / menu toggle           | LatoRegular 16px              | LatoRegular 16px/48px           | Lato 400/500, 16px |

Licence: Lato is OFL-licensed, free to use. No commercial licence needed.
Unmatched: the source's other families (Century Gothic, Avenir Next, Geralia, Messenger Pigeons
Personal Use) are declared in style.css but not used on the homepage, so they are not reproduced.

## Visual diff
Compared against fresh original screenshots (1440px and 390px, full page plus viewport slices).

Round 1 discrepancies found and fixed:
- Header: logo too small (now 52px mark, 36px wordmark); nav padding right edge; toolbar icon spacing;
  active nav item showed an underline the original does not have (removed).
- Hero: original is one full-bleed photo with no slider dots; clone had two slides and dots (removed).
  Scroll cue kept.
- Intro: original photo is full-bleed behind a white fade on the right; clone used a 2/3 + 1/3 grid
  (now a full-bleed image with a right copy panel). Link text wrapped badly (copy shortened).
- Recommendations: original cards are 294px with 30px gaps in a 1266px container; clone used 1296px.
  Original has no captions under the cards (removed). "See Our Menu" moved to 16px inset.
- Link tiles: original 618px columns with 30px gap (clone had 48px gap and a wider container).
- Delivery badge: original has a fixed green round badge bottom-right; replaced with a neutral navy
  "Order Online" circle at the same size and position (no partner logo imitated).
- Intro award emblem: original uses a red flower-like star-rating mark; replaced with a neutral
  red ring and star placeholder of the same size.
- Mobile header: original is a white logo row (84px) above a full-width navy MENU bar (50px), total
  134px. Clone had a single 58px bar (now matched).
- Mobile hero: original is 180px tall; clone was 52vh (now 180px).
- Mobile intro: original has the photo full-bleed behind the copy, 492px tall; clone stacked them
  (now overlaid).
- Mobile recommendations: original stacks 4 cards in one column, 321px wide; clone used 2 columns
  (now one column).

Round 2 re-check after the fixes: header, hero, intro panel, card row, tiles and mobile header/hero/
intro now line up with the original at both widths. No horizontal overflow, no page errors, no broken
image paths.

Remaining differences (by design, see 7b):
- Recommendation cards 2 to 4 and all four link tiles are still drawn art (generation quota exhausted).
- Hero and intro photos are generated and are a different chef and dishes from the original.
- Footer, dropdown and menu behaviour are approximations.
