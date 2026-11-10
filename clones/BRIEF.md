# Clone brief (shared by all builder agents)

Goal: reverse-engineer the DESIGN of one live Singapore F&B website and rebuild its homepage as a
high-fidelity static clone in `clones/<slug>/` (index.html, styles.css, script.js). Design quality is
the priority: do not ship a generic template.

## 1. Reverse-engineer (do this properly before writing code)
- Fetch the page: `curl -sSL -A "Mozilla/5.0" <url>` works in this container. Also fetch its main CSS
  files and read them for real tokens: colours, font families/sizes/weights, spacing, radii, shadows,
  breakpoints, transitions, hover states.
- Try a real render for screenshots: Playwright is preinstalled (`require('playwright')`,
  `chromium.launch()`); the network goes through a proxy — if navigation fails read /root/.ccr/README.md
  (never disable TLS verification). The `mcp__Claude_Scraper__scrape` tool (load via ToolSearch) is another
  way to read the page. If no render works, rely on HTML + CSS analysis.
- Save notes to `clones/<slug>/NOTES.md`: section-by-section layout (order, grid, heights), type scale,
  palette (hex), nav behaviour, animations/interactions, responsive behaviour.
- Keep all downloaded source files in the scratchpad dir given in your prompt, NOT in the repo.

## 2. Build
- Plain HTML/CSS/JS, no build step, no frameworks. Mobile-responsive. Reproduce the layout, spacing,
  typography scale, colour palette, section order, nav/header behaviour, hover states, scroll reveals,
  carousels/marquees/accordions etc. as closely as you can.
- Fonts: use the same family if it is a free Google Font; otherwise the closest Google Font.

## 3. Leave out copyrighted/trademarked assets (hard rules)
- NO images, videos, logos, icons files or font files copied or hot-linked from the original site.
- NO brand name, logo, slogans, or verbatim copy text from the original. Invent a placeholder brand
  name and write original copy of the same length/role. No real addresses, phone numbers, people, reviews.
- Replace imagery with self-made art: CSS gradients, inline SVG illustrations/patterns you draw
  yourself, at the same sizes/aspect ratios so the layout still looks rich and finished (not grey boxes).
- Add an HTML comment at the top of index.html: placeholder brand, sample content, design study of <category>.
- Do not mention the original brand anywhere in index.html/styles.css/script.js (NOTES.md may name the source URL).

## 4. Verify
- Screenshot your clone with Playwright (`file://` path) at 1440px and 390px wide, look at the
  screenshots (Read tool), and fix layout bugs, overflow, unreadable contrast. Iterate at least once.
- Only touch files inside `clones/<slug>/`. Do NOT run git commands. Do not spawn subagents.

## 5. Report (final message, short)
What you could/could not extract (render vs CSS-only), main design features reproduced, known gaps.

## 6. Typography pass (follow-up)
Goal: the clone must use the SAME typography as the source site.
1. From your source render/CSS, list every font family the source uses and for each text role (nav,
   h1, h2, h3, body, buttons, captions, footer) its computed font-family, size, weight, line-height,
   letter-spacing, text-transform and font-style, at 1440px and 390px. Re-render the source if needed.
2. Font families:
   - If the source family is free (Google Fonts, Fontshare, or another open-licence font), load that exact
     family from its official free host and use it.
   - If it is a commercial/licensed family (Adobe Fonts/Typekit, foundry-hosted, self-hosted paid font):
     do NOT download, copy, base64 or hot-link the source's font files or its Typekit kit. Put the exact
     original family name FIRST in the font-family stack (so it renders wherever that font is installed
     or licensed), followed by the closest free fallback, and tune the fallback (size-adjust /
     letter-spacing) so metrics match as closely as possible.
3. Make every text role in the clone match the source values from step 1 exactly (size, weight,
   line-height, letter-spacing, transform, style) at both widths. Fix any mismatch.
4. Add a "## Fonts" section to NOTES.md: table of role -> source family -> what the clone loads ->
   licence status and where a licence can be bought if commercial.
5. Re-screenshot at 1440 and 390, check nothing overflows or wraps badly, fix, then report briefly:
   which families are now identical, which are name-first with fallback, and any role you could not match.
Same rules as before: only touch your own clones/<slug>/ folder, no git, no subagents.

## 7. Visual-diff pass + generated photography (follow-up)
Use a PRIVATE scratch folder `<scratchpad>/vd-<slug>/` for every script and screenshot (other agents
share the scratchpad; never write to its top level).

### 7a. Screenshot the original and compare
1. With Playwright, take fresh screenshots of the ORIGINAL site at 1440px and 390px: full page, plus one
   viewport-sized shot per section (scroll through; dismiss cookie banners/popups/age gates first).
2. Take the same set from your clone (`file://`).
3. Read the paired screenshots side by side, section by section, and write a discrepancy list in
   NOTES.md under "## Visual diff": layout/grid, section heights, spacing, alignment, colours, borders,
   radii, shadows, image crops/aspect ratios, overlays, text sizes/wrapping, header/footer, missing
   sections or components (sliders, popups, badges), hover/scroll behaviour.
4. Fix every discrepancy you can, re-screenshot, and repeat until the pairs look the same apart from
   brand name, copy wording and the specific photos. At least two compare-fix rounds.

### 7b. Replace drawn placeholder art with generated photography
The illustrated SVG/gradient stand-ins make the clone look flatter than the original. Replace them.
1. For every image slot that is a photo in the original (hero, tiles, cards, galleries, backgrounds),
   look at the original screenshot and write a prompt describing a SIMILAR-LOOKING but new photo: same
   kind of subject, composition, camera angle, lighting, colour mood, background and crop, so it fills
   the slot the same way. Always add: "no text, no logos, no brand names, no watermarks, no packaging
   labels". Never ask for a real brand, real person, or a copy of a specific image.
2. Generate with the `mcp__Geminimage__generate_image` tool (load it with ToolSearch
   "select:mcp__Geminimage__generate_image"). Use output_format "jpeg" and a size near the slot's aspect
   ratio. The result shows a line like `[Image: source: /root/.claude/projects/.../tool-results/mcp-Geminimage-blob-....jpg]`
   — that is the saved file. Copy it into `clones/<slug>/img/` with a descriptive name.
3. Optimise each file with Python PIL (`python3 -I`): resize to at most 2x the slot's displayed size
   (max 2000px wide for heroes, ~900px for cards), save JPEG quality ~80. Keep each file under ~300 KB
   and the whole img/ folder under ~4 MB.
4. Use them in the clone with <img> (width/height, alt text, loading="lazy" below the fold) or CSS
   background-image, with the same object-fit/crop, overlays and gradients as the original. Look at each
   generated image (Read tool) before using it; regenerate if it contains text/logos, looks wrong, or
   does not match the slot. Aim for every photo slot filled; if the tool fails repeatedly, keep the
   drawn art for remaining slots and say so.
5. Things that are logos/trademarks in the original (brand logo, press logos, award badges, payment
   marks, certification marks) must NOT be generated or imitated. Design a neutral placeholder of the
   same size, weight and visual presence (a well-drawn monogram/wordmark for the placeholder brand,
   generic badge shapes) so the layout keeps the same richness.
6. Final check: screenshots at 1440 and 390, no overflow, no console errors, no broken image paths
   (relative paths only), no source-brand names in code.

### Report
Discrepancies found and fixed, discrepancies left, number of images generated and total img/ size,
any slots still using drawn art. Same rules: only your clones/<slug>/ folder, no git, no subagents.

## 8. Gap-fix pass (follow-up)
Read `/home/user/Turtle-Soup/.claude/skills/fnb-site-gaps/SKILL.md` and apply all nine gaps to your
clone. Rules specific to the clones:
- Placeholder business data only: domain `https://www.example.com/<slug>/`, address
  "1 Sample Street, Singapore 000000", phone "+65 0000 0000", sample opening hours, placeholder social
  URLs on example.com. Use your clone's placeholder brand name. Never the source brand.
- Title and description must be about the placeholder brand and its category in Singapore.
- Create `robots.txt` and `sitemap.xml` inside your clone folder.
- `og:image`: use an existing file in your `img/` folder if you have one; otherwise omit `og:image`
  and note it.
- Conversion elements (reviews, newsletter, floating contact button): add only the ones your clone
  does not already have, styled with your clone's existing fonts, colours, spacing and buttons so they
  look native. Reviews are sample content with first names only; add an HTML comment saying so.
- Do not change the existing layout otherwise. Use a private scratch folder `<scratchpad>/gap-<slug>/`.
- Verify: exactly one h1; valid JSON-LD (parse it); every img has alt; screenshots at 1440 and 390
  show no overflow and the new sections look right; no console errors.
- Add a "## Gap fixes" table to NOTES.md (nine gaps, before/after, placeholders used).
Report briefly. Same rules: only your clones/<slug>/ folder, no git, no subagents, no image generation.
