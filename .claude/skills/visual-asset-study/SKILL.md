---
name: visual-asset-study
description: Study the visual assets and layout of a live website (logos, photography, heritage images, decorative graphics, UI icons), document its palette, type scale, spacing and photo treatment, and rebuild a local, non-public static study page with the same image positions, ratios and overlays. Use when the user asks to reverse-engineer, document, or rebuild the imagery or visual system of a site for a design study. Study only: never publish, deploy, or wire forms or contact elements.
---

# Visual asset study

Goal: understand the design language of a site and rebuild its image layout as a local study page. This is not a scraped mirror.

## Hard rules

- Local study only. Never publish, deploy, or push study output to a public host.
- Do not commit downloaded third-party images or copied page copy to the repo. Keep study files in the scratchpad directory.
- Replace all form, contact, ordering, and map links with inert elements. Use placeholder copy, not the source wording.
- Mark the study page `noindex, nofollow`.

## Steps

1. **Fetch the source.** `curl -sSL -A "Mozilla/5.0 Chrome/124" <url> -o index.html` into a new scratch folder. Note relative asset paths such as `assets/...`. Fetch those assets with the same base URL.
2. **Read the structure.** List `<img>`, `<section>`, `<header>`, `<footer>`, `url(...)`, and `<link rel=stylesheet>`. Read the `:root` tokens and every rule that touches images: `filter`, `aspect-ratio`, `object-fit`, `::before`/`::after`, `position: sticky|fixed`, `@media`, `loading="lazy"`, and any reveal or animation keyframes.
3. **Measure the rendered page.** Run:
   ```bash
   NODE_PATH=$(npm root -g) node .claude/skills/visual-asset-study/scripts/measure.js <url> <outDir>
   ```
   This writes `measure.json` (box, natural size, ratio, filter, object-fit, radius, section) and `full.png`. Headful Chrome MCP does not start in this environment. Use this headless script instead.
4. **Inventory.** For each image, record: URL, format, natural size, displayed size, section, and role. Use these role groups: brand marks, editorial photography, heritage imagery, decorative graphics, UI icons. For each group, note the likely origin (original, stock, or re-used). Mark anything you cannot verify as "unverified". Explain what each group does for the page's feel.
5. **Describe composition.** Record aspect ratios, grid columns and breakpoints, overlaps, frame borders and outlines, shadows, overlays, parallax (check first, do not assume), lazy loading, and filter or greyscale transitions. Record the palette, the type scale, and the spacing as exact tokens.
6. **Rebuild.** Write one static `index.html` with inline CSS that uses the same tokens, sizes, and ratios. Use `aspect-ratio` from the source ratio. Use `object-fit: cover` where the source does. Use placeholder copy. Replace links with inert elements.
7. **Verify.** Run the measurement script on the study page (`file://` URL works). Compare each image's ratio with the source `measure.json`. Report any mismatch and its cause. Note every deliberate difference, such as an animation that is shown in its static reduced-motion form.
8. **Report.** Give the user the study folder path, the inventory table, the group notes, the composition notes, the verification result, and the limits. Limits include anything not read, such as full page scripts or pages hidden behind interaction.

## Reference

- Script: `scripts/measure.js`. It takes a URL (or `file://` URL) and an output folder.
- Output: `measure.json` and `full.png` in the output folder. Do not commit them.
