# Sample Page 4 — 1-Month Milestone Spread

**Use case:** Sample of the milestone spread that repeats (with variation) for all 12 months. **The 1-month milestone is the "anchor" sample** — once approved, the same layout is reused for months 2–12 with the coin photo, title, quote, and symbolism swapped.

**Spread structure:** Two-page spread (left page = the visual + quote, right page = the reflection prompts).

**Render strategy:** This is a *merge template* — every milestone-specific element is a `{{PLACEHOLDER}}` so a single Canva/InDesign file can produce 12 variants from a CSV/spreadsheet.

**ChatGPT prompt — copy everything below this line into ChatGPT:**

---

[PASTE STYLE TOKENS BLOCK FROM `README.md` HERE FIRST — using the ANA palette below, NOT the old forest-green/ochre palette]

Design a 2-page book spread (12 inches wide × 9 inches tall total, opens like a real book), showing a sobriety journal milestone entry. The spread has two pages, side by side. This is a *template* — every milestone-specific element is shown as a `{{PLACEHOLDER}}` token so the same layout can produce 12 variants. The mockup should render the placeholders with realistic-looking substitute copy (e.g. for `{{MILESTONE_TITLE}}` write `ONE MONTH`, for `{{COIN_CAPTION}}` write `1-month coin · torii gate`) so the layout reads as a real finished page, but make it visually obvious in fine print under each block that the text is a placeholder (small italic note: `placeholder for {{PLACEHOLDER_NAME}}`).

**LEFT PAGE (6"x9") — The visual / quote page:**

- Top 1.5 inches: small caps in {{PRIMARY_COLOR}}, centered: `MILESTONE`
- 0.25 inch below, centered, 28pt serif in {{PRIMARY_COLOR}} with wide letter-spacing: `{{MILESTONE_TITLE}}`
  - e.g. `ONE MONTH`, `TWO MONTHS`, `SIX MONTHS`, `ONE YEAR`
- 0.5 inch below the title, a thin {{RULE_COLOR}} horizontal rule, taking 60% of the page width, centered
- Center of the page (vertically): the coin image. For 1-month, this is the **Torii Gate** coin (Catherine provides high-res photo of front + back). In the mockup, use a placeholder coin image: a small dark-on-light rendering of a Japanese torii gate silhouette inside a circular coin shape, single weight line drawing, 2 inches diameter, centered.
  - Frame the coin with a soft {{ACCENT_TINT}} circular wash behind it (subtle, ~10% opacity, slightly larger than the coin) so the page has a single moment of color
  - Below the coin image, 0.3 inch of breathing space, then 8pt italic in {{ACCENT_COLOR}} centered: `{{COIN_CAPTION}}`
    - e.g. `1-month coin · torii gate`
  - Fine-print placeholder note (7pt italic, pencil-gray): `placeholder for {{COIN_IMAGE}}`
- Below the coin block, the quote, centered, 14pt serif italic in {{INK_COLOR}}, generous line-height, taking up 60% of the page width: `{{MILESTONE_QUOTE}}`
  - e.g. `Write your story as it needs to be written.`
  - Fine-print placeholder note (7pt italic, pencil-gray): `placeholder for {{MILESTONE_QUOTE}}`
- 0.4 inch below the quote, centered, 10pt small caps in {{PRIMARY_COLOR}}: `— {{QUOTE_ATTRIBUTION}}`
  - e.g. `— NEIL GAIMAN`
- 0.75 inch below the attribution, a symbolism block, centered, 9pt serif in {{INK_COLOR}}, max 4 lines: `{{SYMBOLISM_BODY}}`
  - e.g. `The torii marks a threshold. A beginning. A path that has opened. Crossing it is the act of stepping into the next version of your life.`
  - Fine-print placeholder note (7pt italic, pencil-gray): `placeholder for {{SYMBOLISM_BODY}}`
- Bottom 1 inch of the page: small ANA logo (two fish in a circle, line drawing), centered, 0.5 inch, ink color {{PRIMARY_COLOR}}
- The whole left page has a quiet, ceremonial feel. The coin is the focal point. The quote is the heart. The symbolism is the explainer.

**RIGHT PAGE (6"x9") — The reflection prompts page:**

- Top-left, small caps in {{PRIMARY_COLOR}}, 9pt: `REFLECT`
- Thin {{RULE_COLOR}} horizontal rule across full page width
- 0.4 inch below the rule, five reflection prompts. Each prompt label is small caps in {{PRIMARY_COLOR}}, 9pt, followed by 3–4 faint {{RULE_COLOR}} writing rules.

  1. `{{PROMPT_1}}` — e.g. `HOW HAS THE FIRST MONTH FELT DIFFERENT FROM WHAT YOU EXPECTED?`
  2. `{{PROMPT_2}}` — e.g. `WHAT IS ONE THING YOU'RE PROUD OF THIS MONTH?`
  3. `{{PROMPT_3}}` — e.g. `WHAT WAS HARD, AND HOW DID YOU GET THROUGH IT?`
  4. `{{PROMPT_4}}` — *symbol-specific, e.g. `THE TORII IS A THRESHOLD. WHAT ARE YOU STEPPING INTO?`*
  5. `{{PROMPT_5}}` — e.g. `FREE WRITE — ANYTHING THAT NEEDS TO COME OUT.`

  Each prompt section is about 1.1 inches tall, with 0.2 inches of breathing space between sections.

  - Fine-print placeholder note in {{RULE_COLOR}} at the top of the prompts column (7pt italic): `placeholders for {{PROMPT_1}} … {{PROMPT_5}}`

- Bottom-right corner: small ANA logo, 0.4 inch, ink color {{PRIMARY_COLOR}}
- Bottom-left, in {{ACCENT_COLOR}} italic, 8pt: `{{FOOTER_NOTE}}` — e.g. `this page is for you. no one else reads it.`

**SPREAD DETAILS:**

- The two pages are visually balanced but not mirrored. The left page is a quiet visual moment; the right page is a working reflection page.
- Cream paper extends across both pages. There is no visible gutter in the mockup (the gutter only appears when the book is bound).
- The only place a saturated ink color appears is the title text, the prompt labels, the ANA logo, the attribution, and the soft wash behind the coin. Everything else is cream, charcoal, or pencil-gray. The page is overwhelmingly calm, with one or two moments of color.
- Even cream tone across the spread, no shadow at the spine.
- Style: calm, grounded, modern. Like a museum catalog page. Not a greeting card. Not a workbook. Not "woo woo" recovery.

Render as a top-down flat-lay photograph of the open spread. Photographic, even daylight, no hands, no props. The book lies open on a slightly darker cream surface. The two pages are perfectly flat (no center curl).

---

## Placeholder Reference (for the merge file)

| Token | Source | Example (1-Month) |
|---|---|---|
| `{{MILESTONE_TITLE}}` | Catalog (chronological) | `ONE MONTH` |
| `{{COIN_IMAGE}}` | `/assets/coins/fronts/coin-1mo-front.jpg` (need to extract) or line-art stand-in for 7/8/10/11 | torii gate photo |
| `{{COIN_CAPTION}}` | Catalog | `1-month coin · torii gate` |
| `{{MILESTONE_QUOTE}}` | Catalog (per milestone) | `Write your story as it needs to be written.` |
| `{{QUOTE_ATTRIBUTION}}` | Catalog | `NEIL GAIMAN` |
| `{{SYMBOLISM_BODY}}` | Catalog (4-line max) | `The torii marks a threshold. A beginning…` |
| `{{PROMPT_1}}` … `{{PROMPT_5}}` | Prompt bank | prompts 1, 2, 3, 5 are fixed; prompt 4 is symbol-specific |
| `{{FOOTER_NOTE}}` | Fixed | `this page is for you. no one else reads it.` |
| `{{PRIMARY_COLOR}}` | Brand token — chosen per milestone from the ANA palette | e.g. `#003B88` ocean indigo for water/ocean months, `#37C86F` leaf green for nature months, `#FF5D4C` sunrise coral for fire/phoenix months, `#4D7BCC` medium blue as the calm default |
| `{{ACCENT_COLOR}}` | Lighter unsaturated version of `{{PRIMARY_COLOR}}` | e.g. for ocean indigo, a soft sky tint |
| `{{ACCENT_TINT}}` | Even lighter wash — ~10% opacity, used for the circle behind the coin | matches `{{ACCENT_COLOR}}` |
| `{{INK_COLOR}}` | Fixed | `#2A2826` warm charcoal |
| `{{RULE_COLOR}}` | Fixed | `#D8D2C5` pencil-gray |
| `{{PAPER_COLOR}}` | Fixed | `#F4EFE6` warm cream |

## Color Assignment (Suggested Mapping)

Each milestone picks **one** primary color from the ANA palette. The accent and tint are the lighter, unsaturated version of the same color. Use this as the default; Catherine/Barbara can override per coin.

| Month | Design | Primary (suggested) | Accent / Tint |
|---|---|---|---|
| 1 | Torii Gate | `#003B88` ocean indigo | lighter unsaturated indigo |
| 2 | Desert Landscape | `#FFD437` golden sunrise | lighter unsaturated gold |
| 3 | Frog | `#37C86F` leaf green | lighter unsaturated green |
| 4 | Stag | `#37C86F` leaf green | lighter unsaturated green |
| 5 | Kraken Lighthouse | `#4D7BCC` medium blue | lighter unsaturated blue |
| 6 | Koi | `#4D7BCC` medium blue | lighter unsaturated blue |
| 7 | anchor (line art) | `#4D7BCC` medium blue | lighter unsaturated blue |
| 8 | river bend (line art) | `#4D7BCC` medium blue | lighter unsaturated blue |
| 9 | Fox in Snow | `#4D7BCC` medium blue | lighter unsaturated blue |
| 10 | tree (line art) | `#37C86F` leaf green | lighter unsaturated green |
| 11 | firefly (line art) | `#FFD437` golden sunrise | lighter unsaturated gold |
| 12 | Phoenix Rising | `#FF5D4C` sunrise coral | lighter unsaturated coral |

**Neutrals (fixed, never change across milestones):**
- Paper: `#F5EFE8` soft linen (warm cream, slightly cooler than the original)
- Ink: `#2A2826` warm charcoal
- Rule: `#D8D2C5` pencil-gray
- White / negative space: pure paper

## Notes for Catherine when she renders in Canva

**The left page is reusable as a template** for all 12 milestones. After approving the 1-month version:

1. **Swap the coin photo** — drop in the actual front-photo of the relevant month's coin (2mo = desert landscape, 3mo = frog, etc.)
2. **Swap the title** — `ONE MONTH` becomes `TWO MONTHS`, `THREE MONTHS`, etc.
3. **Swap the back quote** — from the catalog
4. **Swap the symbolism block** — 4 lines describing the symbol (the 6mo koi symbolism from the catalog: "The koi swims upstream. Persistence. Effort repeated daily.")
5. **Swap the 4th reflection prompt** — make it symbol-specific (for koi: "The koi swims upstream. Where in your life are you still swimming?"). The other 4 prompts stay identical across all milestones.
6. **Update the primary color** per the color assignment table above (or override with Barbara's pick)

**For months without a coin (7mo, 8mo, 10mo, 11mo):**
- Skip the coin photo block
- Use a line-art stand-in icon (anchor / river bend / tree / firefly) where the coin would go
- Add small italic footnote under the icon: `Coin design coming soon`
- Keep the same 5-prompt structure on the right page (5th prompt becomes generic — "FREE WRITE")

**Coin photo specs:**
- Use only the front-photo of the coin (the design side). The back of the coin is text-heavy and busy in a small reproduction.
- Photo on cream paper, no shadow, slightly larger than life-size (so the detail reads at 6"x9" trim)
- Save as `coin-1mo-front.jpg`, `coin-2mo-front.jpg`, etc. in `/assets/coins/fronts/` (need to extract from existing JPGs)

**Merge file columns (CSV / Google Sheets → Canva Bulk Create or InDesign Data Merge):**
```
milestone_number, milestone_title, coin_image_file, coin_caption,
milestone_quote, quote_attribution, symbolism_body,
prompt_1, prompt_2, prompt_3, prompt_4, prompt_5,
primary_color, accent_color
```

## Why this is the moat

The 5-prompt structure stays the same across all 12 milestones — that gives the journal a rhythm that becomes a ritual. **The 4th prompt is always symbol-specific** — that's the part that makes each milestone feel like a milestone, not just a date. A reader can re-read the book years later and each page still feels intentional.

## Approve this 1-month spread → render the other 11 → assemble the book.
