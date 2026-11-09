// Usage: node measure.js <url-or-file-url> <outDir>
// Scrolls the page to trigger lazy images, then writes measure.json with the
// rendered box, natural size, ratio, filter, object-fit and radius of every img.
// Run with NODE_PATH pointing at the global npm root that has 'playwright'.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const [url, outDir] = process.argv.slice(2);
  if (!url || !outDir) { console.error('usage: measure.js <url> <outDir>'); process.exit(2); }
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 400) {
    await page.evaluate(v => window.scrollTo(0, v), y);
    await page.waitForTimeout(120);
  }
  await page.waitForTimeout(2500);
  const data = await page.evaluate(() => [...document.querySelectorAll('img')].map(img => {
    const r = img.getBoundingClientRect();
    const cs = getComputedStyle(img);
    const sec = img.closest('section,header,footer');
    return {
      src: img.getAttribute('src'),
      natural: [img.naturalWidth, img.naturalHeight],
      box: [Math.round(r.width), Math.round(r.height)],
      ratio: r.height ? +(r.width / r.height).toFixed(3) : null,
      pageY: Math.round(r.top + window.scrollY),
      filter: cs.filter, objectFit: cs.objectFit, radius: cs.borderRadius,
      loading: img.loading, section: sec ? (sec.className || sec.tagName) : 'none'
    };
  }));
  fs.writeFileSync(path.join(outDir, 'measure.json'), JSON.stringify({ url, scrollH: h, items: data }, null, 1));
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, 'full.png'), fullPage: true });
  await browser.close();
  console.log(`measured ${data.length} images -> ${outDir}`);
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
