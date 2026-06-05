# ANA Journal v3 — CSV Schema

**Date:** 2026-06-05
**Status:** Proposed — awaiting Catherine review
**For:** v3 journal production (126 pages total)
**Companion brief:** [`journal-product-design-brief.v3.md`](./journal-product-design-brief.v3.md)

---

## 1. Overview

The CSV drives production. **One row = one journal page** (126 rows total). The renderer consumes the CSV and produces:

- A 126-page Lulu print PDF
- A print-ready letter PDF (8.5×11 home-printer SKU)
- A digital fillable PDF (iPad/GoodNotes SKU)
- HTML preview pages for review

Schema design goals:

- **Human-editable in a spreadsheet** (Google Sheets / Excel / Numbers)
- **Self-describing** (each row carries its own page type and section)
- **Production-ready** (a renderer can produce a final PDF without further translation)
- **Mirrors v2's simplicity** — short column names, no JSON escaping needed

---

## 2. Columns (19 total)

| # | Column | Type | Required? | Description |
|---|---|---|---|---|
| 1 | `page_num` | int 1–126 | required | Master sequence in the book (1 = first page after front cover) |
| 2 | `cycle_num` | int 1–12 | empty if not in cycle | Which cycle (1–12) |
| 3 | `page_in_cycle` | int 1–10 | empty if not in cycle | Position within the cycle (1–10) |
| 4 | `page_type` | enum | required | See §3 |
| 5 | `section` | enum | required | `front` / `cycle` / `end` |
| 6 | `line_art_id` | string | required for reflection / goal / recap | The 0.8" line art motif ID — see §4a |
| 7 | `art_id` | string | required for `recap_left` | Full-bleed watercolor art ID — see §4b |
| 8 | `tint_id` | string | required for cycle pages | Which of the 5 cycle tints — see §4c |
| 9 | `heading` | text | optional | Page-level heading |
| 10 | `subheading` | text | optional | Sub-heading |
| 11 | `body` | text | optional | Long-form body copy (intro p2, letter instructions, resources, coin-cap framing) |
| 12 | `affirmation` | text | required for reflection | One of 84 unique daily affirmations |
| 13 | `prompt_1` | text | optional | First prompt (reflection / goal / recap) |
| 14 | `prompt_2` | text | optional | Second prompt |
| 15 | `prompt_3` | text | optional | Third prompt (recap_right only) |
| 16 | `cue` | text | optional | User-facing cue line (e.g., the free-space instruction) |
| 17 | `page_label` | string | optional | Footer text (e.g., `Cycle 1-4`); empty for unnumbered pages |
| 18 | `status` | enum | required | `draft` / `reviewed` / `final` — production tracking |
| 19 | `notes` | text | optional | Author notes / open questions; stripped from production |

---

## 3. Page Types (Enum)

The 9 page types in v3, totaling 126 pages:

| `page_type` | `section` | Count | Description |
|---|---|---|---|
| `intro` | `front` | 2 | Welcome pages — `page_num=1` is logo + wordmark; `page_num=2` is "why this journal exists" body copy |
| `reflection` | `cycle` | 84 | Daily reflection page (7 per cycle × 12 cycles) |
| `goal` | `cycle` | 12 | Forward-looking "set an intention" page (1 per cycle) |
| `recap_left` | `cycle` | 12 | Full-bleed art page of the recap spread |
| `recap_right` | `cycle` | 12 | Prompts page of the recap spread |
| `coin_cap` | `end` | 1 | Full-color 11-coin grid end cap |
| `letter` | `end` | 1 | Letter-to-future-self envelope page |
| `resources` | `end` | 1 | Crisis lines, professional help, ANA links |
| `blank` | `end` | 1 | Structural blank page (purpose TBD) |
| | | **126** | ✓ Total |

**Cycle internal structure (uniform for all 12 cycles):** pages 1–7 = `reflection`, page 8 = `goal`, page 9 = `recap_left`, page 10 = `recap_right`.

---

## 4. Visual Anchor IDs

### 4a. `line_art_id` — 12 motifs (locked, see v3 brief §6a)

```
torii, waterfall_lily, two_fish, stag, kraken_lighthouse,
fox_snow, rowing_pov, resting_horse, desert_landscape,
frog, koi, phoenix
```

Same `line_art_id` is reused across the 7 daily pages, the goal page, and both recap pages within a cycle.

### 4b. `art_id` — recap watercolor (placeholder, TBD)

Naming follows cycle order:

```
recap_01_torii, recap_02_waterfall, recap_03_two_fish, recap_04_stag,
recap_05_kraken, recap_06_fox, recap_07_rowing, recap_08_horse,
recap_09_desert, recap_10_frog, recap_11_koi, recap_12_phoenix
```

Populate once artist / AI / commission source is locked.

### 4c. `tint_id` — 5 cycle tints (locked, see v3 brief §3b)

```
soft_sky, soft_mint, soft_periwinkle, soft_peach, soft_butter
```

Exact hex values TBD with Barbara. Tint rotation sequence across 12 cycles TBD — populate per-cycle in the CSV once locked.

---

## 5. Page-Type Slot Map

What the renderer expects per `page_type` (constants = renderer defaults, not stored in the CSV):

| `page_type` | Required slots | Optional slots | Constants (renderer defaults) |
|---|---|---|---|
| `intro` (p1) | — | `notes` | Logo + wordmark placement |
| `intro` (p2) | `body` | `heading` | "Why this journal exists" framing |
| `reflection` | `affirmation`, `prompt_1`, `prompt_2`, `line_art_id`, `tint_id`, `page_label` | `cue` | "Today's Thoughts" heading, "Reflections" sub-heading, "Current streak" box label, date line, free-space cue |
| `goal` | `prompt_1`, `prompt_2`, `line_art_id`, `tint_id` | `heading`, `body` | "Setting an Intention" heading (or per-cycle themed) |
| `recap_left` | `art_id`, `line_art_id`, `tint_id` | `heading` (caption) | Full-bleed treatment |
| `recap_right` | `prompt_1`, `prompt_2`, `prompt_3`, `tint_id` | `subheading`, `body` | "Looking Back at the Last 7 Entries" sub-heading |
| `coin_cap` | `body` | `heading` | 11-coin grid (hard-coded image set), apartnotalone.com URL |
| `letter` | `body` (instructions) | `heading`, `prompt_1` (envelope size spec) | Envelope placement diagram |
| `resources` | `body` | `heading` | "Resources" heading |
| `blank` | — | `notes` | Empty page |

---

## 6. CSV Formatting Rules

- **Encoding:** UTF-8
- **Line endings:** LF (Unix) preferred
- **Quoting:** RFC 4180 — fields containing commas, quotes, or newlines are double-quoted; embedded quotes escaped as `""`
- **Empty cells:** blank (not `null` / `N/A` / `-`)
- **Multi-line text:** newlines allowed inside quoted cells (Google Sheets and Excel handle this)
- **Cycle pages follow a strict 1–10 order** within each cycle — `page_in_cycle` is the order in the book, not the conceptual order

---

## 7. Sample Rows (illustrative)

```csv
page_num,cycle_num,page_in_cycle,page_type,section,line_art_id,art_id,tint_id,heading,subheading,body,affirmation,prompt_1,prompt_2,prompt_3,cue,page_label,status,notes
1,,,intro,front,,,,,Welcome,,"This is a journal for any kind of recovery journey...",,,,,,draft,p1 = logo + wordmark only
2,,,intro,front,,,,,Why this journal exists,,"Long-form body copy TBD...",,,,,,draft,p2 welcome copy TBD
3,1,1,reflection,cycle,torii,,soft_sky,,,,,"Affirmation 1","Prompt 1","Prompt 2",,,"Cycle 1-1",draft,
4,1,2,reflection,cycle,torii,,soft_sky,,,,,"Affirmation 2","Prompt 1","Prompt 2",,,"Cycle 1-2",draft,
5,1,3,reflection,cycle,torii,,soft_sky,,,,,"Affirmation 3","Prompt 1","Prompt 2",,,"Cycle 1-3",draft,
...
9,1,7,reflection,cycle,torii,,soft_sky,,,,,"Affirmation 7","Prompt 1","Prompt 2",,,"Cycle 1-7",draft,
10,1,8,goal,cycle,torii,,soft_sky,Setting an Intention,,,,"Goal prompt 1","Goal prompt 2",,,draft,goal copy TBD
11,1,9,recap_left,cycle,torii,recap_01_torii,soft_sky,What rises after,,,,,,,,,draft,full-bleed watercolor
12,1,10,recap_right,cycle,,,soft_sky,,Looking Back at the Last 7 Entries,,,"Recap prompt 1","Recap prompt 2","Recap prompt 3",,,draft,
...
123,,,coin_cap,end,,,,,Coins,,"Framing copy TBD. apartnotalone.com",,,,,,,draft,11-coin grid hard-coded
124,,,letter,end,,,,,Letter to your future self,,"Long-form instructions TBD...",,,,,,draft,envelope size spec TBD
125,,,resources,end,,,,,Resources,,"Crisis lines + ANA links TBD...",,,,,,draft,
126,,,blank,end,,,,,,,,,,,,,,draft,purpose TBD
```

(Full 126-row CSV will be populated once the brief's open items are resolved.)

---

## 8. Renderer Notes

- The CSV is the single source of truth for **content** (what text goes on which page).
- The v3 brief is the single source of truth for **layout** (font, margin, color, art spec).
- A renderer (e.g., InDesign data merge, HTML + Pandoc, or Python + WeasyPrint) reads the CSV + the brief's layout rules and produces a 126-page PDF.
- The `status` column lets the build pipeline filter to `final` rows only for production, or include `draft` rows for review.
- The `notes` column is author scratch space — stripped from production builds.
- Renderer should treat blank cells as "use default" (per §5 constants), not as errors.

---

## 9. Differences from v2 Schema

- **Wider scope:** v2 schema was 84 rows (daily pages only). v3 schema is 126 rows (all page types).
- **Dropped `variant` column:** v2 had A/B layout split. v3 retired that — all daily pages use the same layout.
- **Added `page_type` and `section`:** distinguishes reflection vs. goal vs. recap vs. end pages.
- **Kept `line_art_id` (was v2's `icon`):** same concept, renamed for clarity.
- **Added `tint_id`:** tracks the per-cycle tint rotation (v3 palette spec).
- **Added `art_id`:** tracks recap watercolor art separately from line art.
- **Added `status` and `notes`:** production tracking + author scratch space.
- **Renamed `cycle_label` → `page_label`:** v3's footer format is `Cycle x-y` (e.g., `Cycle 1-4`), not v2's `Cycle 2 · 1 of 7`.

---

## 10. Open Items Blocked on This Schema

Before populating rows, the brief's open items below need to resolve:

- 84 daily affirmations (content)
- 84 daily prompts × 2 per page (content)
- Tint rotation sequence across 12 cycles (palette)
- Recap watercolor art (mood board / artist / AI vs. commission)
- Letter page instructions copy
- Resources page content
- Welcome page copy (intro p2)
- ANA/coins pitch copy (verso of letter page)

Once these are landed, the 126 rows can be populated mechanically from this schema.
