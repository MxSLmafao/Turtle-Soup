# SEO audit: 15 Singapore F&B homepages and their clones

Date of audit: 2026-11-10.

Scope and limits:

- Homepage on-page SEO only, read from the static HTML each site returned.
- No ranking, traffic, backlink or page-speed data.
- Analytics detection is from static HTML, so tags loaded later by script may be missed.

## Source sites

| Site | Title tag | Meta description | H1 count | Structured data | Images with alt text |
|---|---|---|---|---|---|
| Common Man (café) | "Best Coffee Shop & Cafe in Singapore \| Common Man Coffee Roasters" | Good, 162 chars | 0 | LocalBusiness, address, hours, geo, Organization | 42 of 90 |
| Birds of Paradise (ice cream) | "Michelin Guide Best Gelato in Singapore \| Birds of Paradise" | Good, 168 | 8 | Organization, WebSite | 13 of 67 |
| Brass Lion (distillery) | "Brass Lion Distillery – Singapore's First Craft Gin Distillery" | Good, 138 | 1 | Organization, address, WebSite | 6 of 40 |
| Brewerkz (brewery) | "Brewerkz Singapore - Twice Champion Mid-Size Brewery of Asia" | Good, 140 | 1 | Organization, WebSite | 20 of 76 |
| Burnt Ends (restaurant) | "#89 of The World's 50 Best Restaurants 2026 \| Burnt Ends" | Good, 151 | 0 | Article, WebPage, WebSite | 0 of 2 |
| Take a Chef (private chef) | "Private chefs to cook in homes across the Singapore - Take a Chef" | Good, 122 | 1 | Organization | 32 of 73 |
| Whiskdom (home baker) | "Whiskdom\| Cookies and Brownies\| Bakery Singapore\| Islandwide Delivery" | Too long, 253 | 1 | Organization, WebSite | 7 of 19 |
| Fossa (artisan producer) | "Fossa Chocolate - Artisan food gifts delivered to your door" | Too long, 305 | 3 | LocalBusiness, Organization | 4 of 23 |
| AMGD (meal-prep) | "Home \| AMGD Singapore - Delicious, healthy meals delivered islandwide" | Weak: three keywords, 36 chars | 1 | None | 22 of 22 |
| Grain (caterer) | "Grain \| Online restaurant in Singapore" | Slightly long, 182 | 1 | WebSite only | 5 of 10 |
| Project Açaí (juice bar) | "Project Acai: Superfood Bowls" | Good, 105 | 4 | LocalBusiness, Organization | 5 of 13 |
| Tiong Bahru Bakery | "Tiong Bahru Bakery" | Missing | 1 | Organization, WebSite | 3 of 20 |
| Atlas (bar) | "Home \| ATLAS" | Missing | 3 | WebSite only | 2 of 32 |
| Huber's (butcher) | "Huber's Butchery" | Brand name only | 23 | None | 6 of 61 |
| Hawker Chan (street food) | "Liao Fan Hawker Chan" | One slogan line, 64 | 0 | None | 0 of 24 |

### Technical signals

| Site | Canonical | Social-share tags | Twitter card | Language tag | robots.txt | Sitemap | Analytics | Facebook pixel |
|---|---|---|---|---|---|---|---|---|
| Common Man | Yes | Yes (no image) | Yes | en | Yes | Yes | Yes | Yes |
| Birds of Paradise | Yes | Yes | Yes | en | Yes | Yes | Yes | No |
| Brass Lion | Yes | Yes | Yes | en | Yes | Yes | Not detected | No |
| Brewerkz | Yes | Yes | Yes | en-GB | Yes | Yes | Yes | Yes |
| Burnt Ends | Yes | Yes | Yes | en-US | Yes | Yes | Yes | No |
| Take a Chef | Yes | Yes | Yes | en | Yes | Yes | Yes | No |
| Whiskdom | Yes | Yes | Yes | en | Yes | Yes | Not detected | No |
| Fossa | Yes | Yes | Yes | en-US | Yes | Yes | Yes | No |
| AMGD | Yes | Yes | Yes | en-sg | Yes | Yes | Yes | No |
| Grain | No | Yes | No | en | Yes | Yes | Yes | Yes |
| Project Açaí | Yes | Yes | Yes | en-GB | Yes | Yes | Yes | No |
| Tiong Bahru Bakery | Yes | Yes (no image) | Yes | en | Yes | Yes | Not detected | No |
| Atlas | No | No | No | Missing | No | Yes | Yes | No |
| Huber's | No | No | No | Missing | No | Yes | Yes | Yes |
| Hawker Chan | Yes | Yes | No | Missing | No | No | Yes | No |

Take a Chef is the only site with language alternates (96 `hreflang` links). AMGD has one.

### Findings

**Strongest: Common Man, Birds of Paradise, Brass Lion, Brewerkz.**
They put "what we are + Singapore" in the title, write a proper description, and have a canonical
link, social-share tags and structured data.

**Weakest: Atlas, Huber's, Hawker Chan.**
No canonical link (Atlas, Huber's), no social-share tags (Atlas, Huber's), no robots.txt, and no
language tag. Hawker Chan also has no sitemap. These are well-known brands relying on name recognition.

**Gaps shared by most sites:**

- Alt text is missing on most images everywhere except AMGD.
- Only three sites declare LocalBusiness data (Common Man, Fossa, Project Açaí). That is what feeds map
  and "near me" results.
- Heading structure is loose: three sites have no H1, six have more than one, and Huber's has 23.
- Two sites have no meta description; two more have one too long to display in full.
- Only Burnt Ends and Brewerkz set image and snippet preview directives.

### Title patterns that work

| Pattern | Example |
|---|---|
| Category keyword + city + brand | "Best Coffee Shop & Cafe in Singapore \| Common Man Coffee Roasters" |
| Award claim + brand | "Michelin Guide Best Gelato in Singapore \| Birds of Paradise" |
| Brand + "first / only" claim | "Brass Lion Distillery – Singapore's First Craft Gin Distillery" |

Brand-name-only titles (Tiong Bahru Bakery, Huber's, Hawker Chan) give search engines nothing beyond
the name.

## Clones

| Clone | Title length | Description length | H1 count | Canonical | Social-share tags | Structured data |
|---|---|---|---|---|---|---|
| artisan-producer | 44 | 50 | 1 | No | No | No |
| bakery | 47 | 107 | 0 | No | No | No |
| bar | 13 | 82 | 1 | No | No | No |
| brewery | 43 | 45 | 0 | No | No | No |
| butcher | 45 | 46 | 0 | No | No | No |
| cafe | 64 | 90 | 1 | No | No | No |
| caterer | 45 | 93 | 1 | No | No | No |
| distillery | 45 | 123 | 2 | No | No | No |
| home-baker | 39 | 36 | 1 | No | No | No |
| ice-cream | 53 | 89 | 3 | No | No | No |
| juice-bar | 32 | 97 | 1 | No | No | No |
| meal-prep | 67 | 114 | 1 | No | No | No |
| private-chef | 46 | 77 | 1 | No | No | No |
| restaurant | 33 | 58 | 0 | No | No | No |
| street-food | 53 | 50 | 0 | No | No | No |

Every clone has a title, a short description and `lang="en"`, and nothing else. None has a canonical
link, social-share tags, structured data, a sitemap or robots.txt. Five have no H1 and two have more
than one. SEO was outside the cloning brief, which covered design only.

## Recommended SEO block for each clone

Not yet applied.

1. Title of 50–60 characters: category keyword + "Singapore" + brand.
2. Meta description of 140–160 characters with one call to action.
3. Exactly one H1, matching the hero headline.
4. Canonical link.
5. Social-share tags: title, description, image, plus a Twitter card.
6. LocalBusiness structured data (Restaurant, Bakery, CafeOrCoffeeShop, BarOrPub, Brewery or
   FoodEstablishment as fits), with address, opening hours, phone, geo and menu or ordering link.
7. Alt text on every image; lazy-loading below the first screen.
8. `robots.txt` and `sitemap.xml`.
9. `lang="en-SG"`.

With these in place a clone would be ahead of at least six of the originals on on-page SEO.
