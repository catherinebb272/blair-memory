# ANA Journal v3 — Renderer Scaffold

**Status:** Scaffold. Reads the v3 CSV schema, emits a single HTML book for review.
PDF generation (for Lulu upload) is a follow-up step using Playwright / Puppeteer / WeasyPrint.

## Quick start

```bash
cd journal-renderer-scaffold
node render.js examples/sample-journal.csv --out out/sample-book.html
open out/sample-book.html
```

The sample CSV hits all 9 page types in compact form (one full cycle + end pages).
The full 126-row CSV will be populated once the v3 brief open items are resolved
(see `../journal-product-design-brief.v3.md`).

## What it does

- Reads RFC 4180 CSV (UTF-8, LF, standard quoting) with zero dependencies
- Validates: page_num sequence, page_type enum, tint_id, status
- Renders each of the 9 page types with layout constants from the v3 brief
  (6x9 page, 0.5 / 0.75 / 0.75 / 0.5 margins, Architects Daughter + Avenir fonts,
  Ocean Indigo accent, cycle tints, etc.)
- Stitches all pages into one HTML file with print CSS so the same file can be
  piped to a headless browser for PDF later

## CLI

```bash
node render.js [path/to/journal.csv] [--out path/to/out.html]
```

Defaults: `./journal.csv` -> `./out/book.html`. Exits non-zero on validation errors.

## Architecture

```
render.js                 # CLI entry point
lib/csv.js                # RFC 4180 parser, zero deps
lib/layout.js             # Single source of truth for layout constants
lib/render.js             # One render function per page_type
examples/                 # Sample CSV (all 9 page types, ~16 rows)
out/                      # Generated HTML goes here
```

### Adding a page type

1. Add the new `page_type` to the schema in `../journal-csv-schema-v3.md`
2. Add an entry to the `RENDERERS` map in `lib/render.js`
3. Add a `rendererConstants` block in `lib/layout.js` if it has baked-in text
4. Update the page-type slot map in the schema doc

### Wiring real assets

The scaffold uses dashed boxes and text placeholders for:

- **Logo / wordmark** — `data-asset="logo"`. Replace with `<img src="assets/logo.svg">` once available.
- **Line art (12 motifs)** — `data-line-art-id` div in `lib/render.js`. Replace with `<img src="assets/line-art/{id}.svg">` once Canva designer delivers.
- **Recap watercolor (12 art IDs)** — `data-art-id` div. Replace with `<img src="assets/recap-art/{id}.jpg">` once art source is locked.
- **11-coin grid** — `data-asset="coin-grid-11"` div on the coin_cap page. Render as a grid of `<img>` from `assets/coins/`.

Recommended layout: place assets in `assets/` (sibling to `lib/`) and update the `lineArt()` / `recapArt()` helpers in `lib/render.js` to return real `<img>` tags.

## From HTML to Lulu PDF

The HTML output is print-styled (`page-break-after: always`, no shadows, 6x9 page size).
Three good paths to a 126-page PDF for Lulu:

1. **Playwright (headless Chromium)** — best fidelity to fonts and CSS.
   ```js
   const browser = await chromium.launch();
   const page = await browser.newPage();
   await page.goto('file://' + outPath);
   await page.pdf({ path: 'out/book.pdf', width: '6in', height: '9in', preferCSSPageSize: true });
   ```
2. **Puppeteer** — same as Playwright, slightly different API.
3. **WeasyPrint** — pure-Python, no browser. Great for print CSS but font fallback differs.

For Lulu, the output PDF needs to be 6x9 inches, 300 DPI for cover art, 150 DPI for interior is fine, sRGB color. Coil binding = Lulu's coil product line; check the current Lulu spec at upload time.

## Source of truth

- **Content (what goes on each page)** -> `../journal-csv-schema-v3.md` + the actual 126-row CSV once populated
- **Layout (how it looks)** -> `../journal-product-design-brief.v3.md` + `lib/layout.js`

If the brief changes, update `lib/layout.js` and the schema doc. Do not hardcode fonts / colors / margins in `lib/render.js`.

## Open items (carry over from v3 brief)

These need to land before the full 126-row CSV can be generated:

- 84 daily affirmations (content)
- 84 daily prompts x 2 per page (content)
- Tint rotation sequence across 12 cycles (palette)
- Recap watercolor art (mood board / artist / AI vs. commission)
- Letter page instructions copy
- Resources page content
- Welcome page copy (intro p2)
- ANA/coins pitch copy (verso of letter page)
- Font licensing confirmation (Architects Daughter, Avenir)
- Lulu margin compliance review (sister)

When those resolve, the script above produces a print-ready book in one command.
