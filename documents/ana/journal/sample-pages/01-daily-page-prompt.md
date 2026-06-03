# Sample Page 1 — Standard Daily Page

**Use case:** 90 of these in the book (days 1–90 of sobriety). One per day. Same layout every page.

**Render strategy:** This page is *mostly* identical across all 90 days — only the `DATE` and `DAY #` fields change. The mockup should render the page with realistic copy in the fillable fields (e.g. `DAY # 1`, `WEDNESDAY · JANUARY 14 · 2026`) so the layout reads as a real finished page. A small fine-print note in pencil-gray under the date band should read: `placeholder for {{DATE}}` and `placeholder for {{DAY_NUMBER}}` — that's the only swappable content on this page.

**ChatGPT prompt — copy everything below this line into ChatGPT:**

---

[PASTE STYLE TOKENS BLOCK FROM `README.md` HERE FIRST — using the ANA palette, NOT the old forest-green/ochre palette]

Now design a single 6"x9" interior book page with this exact layout, top to bottom.

**Header band (top 0.9 inch of page):**
- Top-left, small caps in {{PRIMARY_COLOR}}, 9pt: `DATE` followed by a thin {{RULE_COLOR}} underline rule ~2 inches wide
  - In the mockup, fill the date line with realistic copy: `WEDNESDAY · JANUARY 14 · 2026`
  - Fine-print placeholder note (7pt italic, pencil-gray) below the date line, left-aligned: `placeholder for {{DATE}}`
- Top-right, small caps in {{PRIMARY_COLOR}}, 9pt: `DAY #` followed by a thin {{RULE_COLOR}} underline rule ~0.6 inch wide
  - In the mockup, fill with: `1`
  - Fine-print placeholder note (7pt italic, pencil-gray) below the day-number line, right-aligned: `placeholder for {{DAY_NUMBER}}`
- A thin {{RULE_COLOR}} horizontal rule across the full page width, 0.25 inch below the header band

**Section A — Mood check-in (1.4 inches tall, full width):**
- Section label, small caps in {{PRIMARY_COLOR}}, 9pt: `ONE WORD FOR TODAY`
- Single horizontal {{RULE_COLOR}} line for writing, taking up the full width of the page
- 0.2 inch below the line, small (8pt) italic hint in {{ACCENT_COLOR}}: `(a feeling, a sensation, a color — your call)`
- The line sits about 0.8 inch below the section label, leaving clean breathing room

**Section B — Gratitude (1.8 inches tall, full width):**
- Section label, small caps in {{PRIMARY_COLOR}}, 9pt: `THREE THINGS I'M GRATEFUL FOR`
- Three numbered lines below the label, each on its own thin {{RULE_COLOR}} rule, evenly spaced (0.45 inch between rules)
- The numbers (1, 2, 3) sit to the left of each line, in {{PRIMARY_COLOR}}, small serif, 10pt
- 0.25 inch below the third line, a small (8pt) italic hint in {{ACCENT_COLOR}}, right-aligned: `(small things count)`

**Section C — Intention + recovery action (1.6 inches tall, full width, two sub-sections side by side):**
- Section label, small caps in {{PRIMARY_COLOR}}, 9pt, full width: `TODAY`
- Below the section label, two sub-blocks side by side, each ~3 inches wide, separated by a thin vertical {{RULE_COLOR}} rule down the center
  - **Left sub-block:**
    - Sub-label, small caps in {{PRIMARY_COLOR}}, 8pt: `INTENTION`
    - Single {{RULE_COLOR}} rule below
    - 0.15 inch below the line, 7pt italic hint in {{ACCENT_COLOR}}: `(one sentence)`
  - **Right sub-block:**
    - Sub-label, small caps in {{PRIMARY_COLOR}}, 8pt: `ONE THING I DID FOR MY RECOVERY`
    - Single {{RULE_COLOR}} rule below
    - 0.15 inch below the line, 7pt italic hint in {{ACCENT_COLOR}}: `(meeting, call, walk — anything)`

**Section D — Body check-in (0.9 inch tall, full width — NEW, addresses common gap in recovery journals):**
- Section label, small caps in {{PRIMARY_COLOR}}, 9pt: `BODY`
- Three small labeled micro-fields on a single row, evenly spaced across the page width, each consisting of a tiny label in small caps ({{PRIMARY_COLOR}}, 7pt) above a short {{RULE_COLOR}} underline:
  - `SLEEP` (left)
  - `H2O` (center) — 6–8 glasses
  - `MOOD 1–10` (right)
- 0.15 inch below each line, 7pt italic hint in {{ACCENT_COLOR}}, left-aligned: `(hours)`, `(glasses)`, `(1 = low, 10 = steady)`
- This section is intentionally tiny — a glance, not a log. The point is to spot patterns across days, not to track perfectly.

**Section E — Free write (largest section, takes up bottom 2.8 inches of the page):**
- Section label, small caps in {{PRIMARY_COLOR}}, 9pt: `FREE WRITE`
- Lined area below, with light {{RULE_COLOR}} rules spaced about 0.3 inch apart, taking the full width
- About 7 lines of writing room
- 0.15 inch below the last line, 7pt italic hint in {{ACCENT_COLOR}}, centered: `(whatever wants to come out — no one reads this but you)`

**Footer band (bottom 0.6 inch of page):**
- Bottom-left, small caps in {{PRIMARY_COLOR}}, 8pt, two stacked lines:
  - Line 1: `TONIGHT — ONE THING I DID WELL` followed by a {{RULE_COLOR}} underline ~1.8 inches wide
  - Line 2: `ONE THING I'D DO DIFFERENTLY` followed by a {{RULE_COLOR}} underline ~1.8 inches wide
- Bottom-right: the ANA logo mark (two fish in a circle, line drawing), small, 0.4 inch diameter, inked in {{PRIMARY_COLOR}}

**Whitespace + aesthetic rules (the page should feel like a letter, not a form):**
- Generous breathing room between every section. At least 0.25 inch of cream space between the bottom of one section's content and the next section's label.
- Never crowd the page edge. Margins are 0.75 inch on all sides.
- The whole page should feel calm, like a letter to yourself. Not a form. Not a worksheet. Not a medical chart.
- The only color on the page appears on: section labels, the ANA logo, the small italic hints, and the date/day-number labels. Everything else is cream, charcoal (for any writing samples), or pencil-gray rule lines.
- The page should feel overwhelmingly calm — one moment of color per section at most.
- A single soft {{ACCENT_TINT}} wash (~10% opacity) is allowed as a thin horizontal band, 0.1 inch tall, immediately under the page's top rule — a quiet "color stripe" that signals "this is a daily page" without dominating.

**Render instructions:**
- Render this as a top-down flat-lay mockup on a slightly darker cream background
- Photographic, even daylight, no hands, no props, no shadows
- The page sits alone in the frame
- The mockup is a single page (not a spread) — the daily page is always a recto or verso, never paired

---

## Placeholder Reference (for any future merge work)

| Token | Source | Example |
|---|---|---|
| `{{DATE}}` | Day-of-year for that specific page | `WEDNESDAY · JANUARY 14 · 2026` |
| `{{DAY_NUMBER}}` | Sobriety day count | `1`, `2`, `3`, … `90` |
| `{{PRIMARY_COLOR}}` | Brand token — one ANA color per page (rotate per 30-day block in production) | `#4D7BCC` medium blue (calm default) |
| `{{ACCENT_COLOR}}` | Lighter unsaturated version of `{{PRIMARY_COLOR}}` | lighter unsaturated blue |
| `{{ACCENT_TINT}}` | ~10% opacity wash — matches `{{ACCENT_COLOR}}` | same as accent |
| `{{INK_COLOR}}` | Fixed | `#2A2826` warm charcoal |
| `{{RULE_COLOR}}` | Fixed | `#D8D2C5` pencil-gray |
| `{{PAPER_COLOR}}` | Fixed | `#F5EFE8` soft linen |

**Suggested primary rotation for the 90 daily pages** (3 months × 30 days each):
- Days 1–30 (Month 1): `#003B88` ocean indigo — the threshold, the new path
- Days 31–60 (Month 2): `#FFD437` golden sunrise — finding the rhythm
- Days 61–90 (Month 3): `#37C86F` leaf green — steadiness taking root

This rotation gives the book a visual sense of time passing through the color. The 4th-month transition to weekly pages then shifts to medium blue as the "settled" baseline.

## Notes for Catherine when she renders in Canva

- Section labels: Inter, small caps, 9pt, in the page's `{{PRIMARY_COLOR}}`
- Body text and any writing samples: EB Garamond, 11pt, warm charcoal
- The writing lines are visual placeholders only — in production, these become faint rule lines on cream paper
- Italic hints (under each section): 7–8pt, in `{{ACCENT_COLOR}}`
- Page number is NOT on the page (page numbers go on the bottom outer edge in the printed book, but in this single-page mockup, omit it)
- The ANA logo goes in the bottom-right of every interior page in the final book
- For the 90-day production run: rotate the primary color per the 30-day block above. Within a 30-day block, all pages are identical except DATE and DAY #.

## What changes per day

Only `{{DATE}}` and `{{DAY_NUMBER}}` swap. Everything else is identical across all 90 daily pages. (And every 30 days, the primary color rotates.)

## What this addresses that other recovery journals typically miss

1. **Body check-in (Section D)** — sleep, water, mood 1-10. Three quick fields, no logbook. Most recovery journals track feelings and miss the body's contribution to mood swings. A glance over a week of these fields surfaces patterns ("I sleep 5 hours, I rate a 4 — every time").
2. **Combined intention + recovery action (Section C)** — putting these side by side on one row keeps the page flowing. Separate sections create the impression of homework; a side-by-side keeps it conversational.
3. **Color rotation across the 90 days** — gives the book a built-in sense of time. A reader flipping back can see "this was my first month" by color alone.
4. **Footer evening check-in** — the book is for the morning OR the evening, not just one. The footer line is small enough to skip, present enough to ground the close of the day.
5. **No "gratitude" coercion** — the italic hint says "small things count" because gratitude prompts can shame people on hard days. Same content, softer framing.
6. **Single-word mood** — chosen instead of an emoji grid or 1-10 scale because the book is paper, not an app. A word is faster to write, slower to dismiss.

## Approve this daily page → render the other 89 → assemble the book.
