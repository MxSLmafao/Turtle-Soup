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
