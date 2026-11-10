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

## Known gaps
- Scroll-reveal timing and the exact slider easing are approximated.
- Original store section is taller and uses real product photography; the clone uses a 5-tile mosaic instead.
- No real cart, search, or navigation targets (all links are "#").
