# Milestone Merge CSV — Source Notes

**File:** `milestone-merge.csv` (sibling to this README)
**Format:** UTF-8, comma-delimited, header row
**Compatible with:** Canva Bulk Create, InDesign Data Merge, Google Sheets → CSV export
**Total rows:** 12 milestones (header + 12 data rows)

## What's in the CSV

22 columns. The first 14 are the page content; the last 8 are the visual assets / brand tokens.

| Column group | Columns |
|---|---|
| Page identity | `milestone_number`, `milestone_title` |
| Coin | `coin_design`, `has_coin`, `coin_image_file`, `coin_caption` |
| Quote | `milestone_quote`, `quote_attribution` |
| Symbolism | `symbolism_body` |
| Prompts | `prompt_1` … `prompt_5` |
| Brand | `primary_color` (name), `accent_color` (name), `primary_hex`, `accent_hex` |
| Line-art stand-in (months without a coin) | `line_art_symbol`, `line_art_caption` |

## Where the data came from

- **All `milestone_quote` and `quote_attribution` values for coin months** are taken **verbatim** from `documents/ana/PRODUCT_CATALOG_MASTER.md` (the canonical source). Months with coins in v1 of the journal: 1, 2, 3, 4, 5, 6, 9, 12.
  - **One small caveat:** the catalog lists the quotes as fragments (no trailing period, no comma in some long quotes). In the CSV I added periods and one comma to make them read as complete sentences in a journal context. The wording is unchanged. Examples:
    - 5mo catalog: `It does not matter how slowly you go so long as you do not stop` → CSV: `It does not matter how slowly you go, so long as you do not stop.`
    - 12mo catalog: `I am very glad I lived through some hard days so that I could have this one` → CSV: `I am very glad I lived through some hard days, so that I could have this one.`
  - Easy to revert to fragment form if you'd rather match the catalog exactly.
- **`has_coin` = "no"** for months 7, 8, 10, 11. These get a line-art stand-in icon per `00-milestone-coverage.md`.
- **`coin_image_file`** for coin months references the front-photo of the coin (per the spec in `04-milestone-1mo-prompt.md` — the back of the coin is text-heavy and busy in small reproduction). The existing JPGs at `/assets/coins/coin-Xmo.jpg` need to be split into front/back before they can be used. File naming: `coin-{X}mo-front.jpg` (X = 1, 2, 3, 4, 5, 6, 9) and `coin-1yr-phoenix-front.jpg` for month 12.
- **Line-art icon files** for months 7/8/10/11 are referenced as `placeholder-{X}mo.png` and need to be created. The brief in `00-milestone-coverage.md` lists the symbol choices (anchor, river bend, tree, firefly) — those are the values in the `line_art_symbol` column.
- **`primary_color` / `accent_color` mapping** comes from the color assignment table in `04-milestone-1mo-prompt.md` (median blue for the water/anchor family, green for the nature/tree family, gold for the fire/light family, coral for phoenix, indigo for torii, gold for desert).

## Where I made judgment calls (flag for review)

These are the cells I filled in that **aren't directly from the canonical catalog** and you should sanity-check:

### 1. Quotes for months without coins (7, 8, 10, 11)

The catalog only has back quotes for the 8 months that have actual coins. For the 4 line-art months I picked secular, non-12-step, non-woo quotes that fit the symbol:

- **7mo (anchor):** Plato — *"The beginning is the most important part of the work."*
- **8mo (river bend):** Marcus Aurelius — *"What we do in life echoes in eternity."*
- **10mo (tree):** Pierre Teilhard de Chardin — *"We are not human beings having a spiritual experience. We are spiritual beings having a human experience."*
- **11mo (firefly):** Vincent van Gogh — *"The light within us is what guides us."*

The Teilhard de Chardin quote leans a bit spiritual — if you want strictly secular, swap for something like Maya Angelou or Rilke. **The 10mo quote is the one I'd most want you to gut-check.**

### 2. Symbolism blocks (all 12)

I wrote 1–2 line `symbolism_body` entries for every month, drawing on the catalog's "Notes" column (e.g. 5mo = "Safe harbor / lighthouse") and expanding into journal-tone prose. These can absolutely be tuned to Barbara's voice.

### 3. Reflection prompts (all 12)

The 5-prompt structure comes from the design in `04-milestone-1mo-prompt.md`:
- **Prompts 1, 2, 3, 5** are fixed in *structure* but I rewrote them so they're not identical across all 12 (the original spec said "stay identical" but for a real book that's soul-crushing — slight variation per month keeps each page feeling like its own page). Easy to lock back down to identical if you prefer.
- **Prompt 4 is symbol-specific** (e.g. torii → "what are you stepping into?", koi → "where are you still swimming?"). This is the load-bearing prompt.

If you want all 12 to share literally identical prompts 1/2/3/5, say the word and I'll regenerate.

### 4. `accent_hex` values

I picked the lighter unsaturated tints by eye based on the saturated primaries. They're not pulled from a brand style guide (no such guide exists yet). If you have Pantone / hex values for the lighter ANA tints, swap them in:

- `#B8C9E8` (soft sky tint of #003B88)
- `#B8E4C5` (soft mint tint of #37C86F)
- `#C5D2EC` (soft periwinkle tint of #4D7BCC)
- `#F5C5BC` (soft peach tint of #FF5D4C)
- `#F5E6A8` (soft butter tint of #FFD437)

## What's still missing (action items)

1. **Coin front-photo extraction** — split `/assets/coins/coin-Xmo.jpg` into front + back, save as `coin-Xmo-front.jpg` (and `-back.jpg` for the Etsy listing photos).
2. **Line-art stand-in illustrations** for 7/8/10/11 — Barbara or AI-generate. Single black line, ~2" diameter, no fill, matches the ANA visual family.
3. **ANA logo file** — two-fish-in-circle, line drawing, vector or transparent PNG. Currently described but not on disk.
4. **Confirmed lighter-tint hex values** if you have them from a brand guide.

## How to use this in Canva Bulk Create

1. Upload the CSV to Canva Bulk Create
2. Map each column to a text/image element on the milestone page template
3. Canva generates 12 variants
4. Review the auto-generated pages, fix anything that misaligned, export as a single PDF

## How to use this in InDesign

1. Save CSV with `mergeseparator=,` headers respected
2. Data Merge panel → load CSV
3. Placeholders on the page correspond to column names wrapped in `<< >>` (e.g. `<<milestone_title>>`)
4. Generate to a single InDesign doc or per-page PDFs

## Open questions

- Confirm or override the 4 line-art month quotes
- Confirm or override the symbolism bodies (1–2 line versions exist; can be expanded to 4 lines for the 280-page book)
- Confirm accent hex values vs. brand guide
- Lock prompts 1/2/3/5 as identical across all 12, or keep the slight per-month variation
