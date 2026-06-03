# ANA First-Year Journal — Design Brief

**Date:** 2026-06-02 (updated 2026-06-02, 3rd pass)
**Scope:** Two SKUs (unisex + alt-female) for the first year of sobriety, with PDF digital companions
**Status:** Concept brief, awaiting Catherine/Barbara/Drew direction
**Constraint check:** No pouches/keepsake pockets (POD = multi-item shipping pain)
**Scope expansion (2026-06-02):** Broadening from sobriety-only to include mental health / anxiety / emotional sobriety. Google search trends show this is a growing greeting-card search category. Page style will be retooled to work in both spaces. Park for v2 design pass.

---

## Strategic Context

- ANA brand skews female in part because AA/recovery market skews masculine (cards, workbooks, gift sets all "for him" or leather-bound masculine aesthetics)
- **Two SKU strategy:**
  - **Unisex / Milestone-coin-centered** — visual language is the coin designs (Torii, Koi, Phoenix, etc.); appeals broadly; primary product
  - **Alt-female / Birth-flower-centered** — visual language is the 12 birth flowers (already established in the Sober Birthday Card line); pulls from the same aesthetic source as SBC-01 through SBC-12; secondary product
- Year-one only, by Catherine's call. (Year 2+ angle parked for later.)

---

## Year-One Coverage (LOCKED 2026-06-02)

See `documents/ana/journal/00-milestone-coverage.md` for full detail. Decisions:

- **Year one only — no 18mo/2yr/3yr in v1**
- **1-month page uses the actual Torii coin photo** (Catherine provides front image)
- **1-year page uses the PHOENIX design** (koi is the alternate 1-year design; koi already appears at 6-month, so phoenix gives the 1-year a distinct visual in the book)
- **Missing coin months (7mo, 8mo, 10mo, 11mo) get line-art stand-in icons** (anchor / river bend / tree / firefly — TBD with Barbara) + a small italic footnote: "Coin design coming soon"
- **Page count recalc:** 12 milestone spreads = 24 pages, not 14 as originally estimated. Total book stays at ~280 pages.

## Production Approach (LOCKED)

- Catherine generates layout mockups in ChatGPT (image output model) using prompts in `documents/ana/journal/sample-pages/`
- Renders/edits in Canva
- Drops in actual coin photos from `/assets/coins/`
- One sample of each page type (daily, weekly, milestone, front-matter) approved before bulk production

## Print/Distribution Strategy (LOCKED 2026-06-02)

**Print partner: Lulu** (Morrisville, NC — same state, 3–5 day US shipping, no customs)
- Format: 6×9 coil-bound, 120 pages, **60lb uncoated interior**, **matte cover**
- Print cost reference: ~$11.66 (Lulu's quote for the spec above)
- Coil binding chosen over perfect bound: lays flat, survives repeated opens, signals "meant to be written in"
- Matte cover over glossy: no fingerprints, reads as book not promo, matches sober/refined brand
- **60lb uncoated is correct for journaling** — uncoated accepts pen ink; 80lb coated is for art books, smears gel/fountain pen ink
- Retail target: **under $20** on Lulu (Lulu-direct sale), Etsy listing at higher price point
- Shipping: built into Lulu's price (free US shipping, "printed and shipped from North Carolina" is a listing copy feature)
- No native Etsy-Lulu integration — manual order forwarding or Shopify middleman (see Strategy Decision below)
- Order **one proof copy** before listing (Barbara QA: color, alignment, page order, coil alignment)

**Strategy Decision: Hybrid digital + printed (Option C — locked 2026-06-02)**

Three SKUs per print product (digital + printed + iPad-specific):

1. **Digital Fillable PDF — $7.99**
   - Hyperlinked TOC
   - Fillable form fields for every prompt + reflection space
   - Optimized for GoodNotes / Notability / Adobe Reader
   - Margin/line-height/font sized for screens
   - **Differentiator:** most Etsy sobriety journals don't bother with iPad fillable. Few competitors have done the work.

2. **Print-Ready Letter PDF — $9.99**
   - 8.5×11, no fillable fields
   - Bleed-safe for home printers
   - Even margins so 3-hole punch doesn't eat prompts
   - Last page instruction: "Print double-sided, 3-hole punch, drop in a 1-inch binder. Done."
   - **One-line Lulu pointer** on last page, not promoted: "Want this spiral-bound? Available at lulu.com (search 'Apart Not Alone')"
   - **8.5×11 chosen over 6×9** for the printable — zero cost on home printer, no print shop trip
   - **Don't mention FedEx/Staples or cutting down to smaller sizes** — that friction is the Lulu buyer's path, not the PDF buyer's

3. **Lulu Print — $19.99 retail (Lulu-direct) / $24.99 Etsy if listed**
   - 6×9 coil-bound, 60lb uncoated, matte cover
   - Manual Etsy fulfillment: customer orders on Etsy → forward to Lulu for printing
   - Time cost: ~2 min/order (Drew handles at low volume)
   - Below 30 orders/month, manual forwarding is fine. Above that, reconsider Shopify middleman.

**Two-PDF split rationale:**
- iPad users want fillable form fields; print users want clean printable layout. They fight each other in one file.
- Separating lets A/B test description copy, see which actually sells.
- "Buy both" customer now spends $17.98 (perceived as two distinct products, not one at a higher tier).
- Pricing tiered: $7.99 fillable is the low-friction entry point; $9.99 print-ready is the small step up.

**PDF design rule:** Don't make the PDFs *look like* the Lulu version. Different fonts, slightly different layouts. PDF buyer and Lulu buyer should feel they made a choice, not that they got a degraded version. The PDF is its own product with its own identity ("the digital companion").

**Etsy-Lulu fulfillment reality:**
- Lulu Direct exists for Shopify/Wix/WooCommerce (small per-order fee)
- No native Etsy connector — manual order forwarding is the standard approach
- Per-order time: ~2 minutes
- Drew owns this at low volume; revisit at 30+/month

## Style Tokens (LOCKED)

Master style tokens for all 12 milestone pages + 90 daily + 40 weekly + front matter — kept in `sample-pages/README.md` for consistency across ChatGPT generations.

---

# SKU 1 — Unisex / Milestone-Coin-Centered

## Visual Direction

**Aesthetic:** Modern, calm, grounded. Think *Patagonia catalog* meets *field journal*. Not bullet journal busy, not "woo woo" recovery. Nature-dominant because the coins are nature-dominant.

**Cover:**
- Matte soft-touch or cloth-linen-feel wrap (for POD premium feel)
- **Title:** small, lowercase, restrained typography. e.g. `first year.`
- **No clipart. No giant "Sobriety Journal" banner.**
- Single small mark: the ANA logo (existing) at bottom, or one small icon (the torii gate from 1-month coin, in line-art only)
- **No "for men" / "for women" framing on cover or interior** — this is the point of differentiation
- Color palette: deep forest green, charcoal, warm cream interior paper
- Optional: debossed (not printed) icon for tactile feel

**Interior palette:**
- Cream paper (slightly warm, not bright white — easier on eyes, signals "intentional")
- Ink: deep forest green + warm black + one accent (muted ochre or terracotta) used sparingly
- **Lots of white space** — biggest complaint on competitor journals is cramped writing space
- Use rule lines very lightly (pencil-gray) so they help but don't dominate

**Typography:**
- One serif for body/quotes (e.g., Lora, EB Garamond, or Spectral)
- One clean sans for headers/structure (e.g., Inter, Söhne, or the existing ANA brand sans)
- **No script fonts, no cursive, no "recovery" hand-lettered look**

**Imagery rules:**
- Use the existing coin designs as **small black-line art illustrations** (redrawn from the coin art, not embedded photos — Barbara can repurpose, or we can commission line-art versions)
- One small illustration per milestone section opener
- Otherwise: minimal — no decorative borders, no motivational poster imagery

**Avoid at all costs:**
- Mountain sunrise clichés
- "One day at a time" stamped on the cover
- Higher Power / God / surrender language
- The 12-step language
- Yellow ribbons, red ribbons
- "Recovering" in the title
- "Stronger than my excuses" as cover pull-quote

---

## Contents — Unisex SKU

**Format:** ~6" x 9" (POD-friendly, easy to mail, fits in a bag, doesn't scream "I'M A JOURNAL")
**Length:** 365 daily pages would be brutal; better: ~250–280 pages of structured + daily + milestone

### Section 1: Front Matter (~12 pages)
- Inside cover — "This journal belongs to _____" (name, start date, end date fills)
- Why I started (1 page, free write) — origin story prompt
- Who I'm doing this for (1 page) — accountability/sponsor/loved ones
- My "why" right now (1 page) — single most important reason, in their own words
- My sober start date (1 page, big) + day counter box
- My first goal (1 page)
- Letter to myself on day 365 (write now, seal, open at 1-year mark)
- **Full-page opening quote** — Neil Gaiman: *"Write your story as it needs to be written."* (the 1-month coin's back quote — gives 1-month a presence even without the coin image)
- "How to use this journal" page (1 page, brief — 5–10 min/day)
- Index of milestones with blank date-fill boxes (1 page)

### Section 2: Daily Pages (most of the book — ~180 pages = 6 months, then again)
- **Daily page layout** (5–7 minutes to complete):
  - Date ____ Day # ____
  - One word for today (mood check-in, single word)
  - Three things I'm grateful for (3 lines)
  - Today's intention (1 line)
  - One thing I did for my recovery today (1 line)
  - Free write (½ page, lined, generous)
  - Tonight — one thing I did well, one thing I'd do differently
- **One page per day = 365 pages just for daily.** That's too much paper. **Better:** Daily for the first 90 days (intensive period), then weekly check-in for months 4–12.
  - Days 1–90: daily page (90 pages)
  - Weeks 13–52: weekly review page (40 pages)

### Section 3: Weekly Reviews (40 pages, months 4–12)
- Week of ____
- Sober day count: ____
- This week's biggest win: ____
- This week's hardest moment: ____
- A trigger I navigated: ____
- Someone I leaned on: ____
- One thing I want next week: ____
- Free write (½ page)

### Section 4: Milestone Pages (one per existing coin, ~14 pages)
This is the **moat** — nobody else does this.

For each milestone that has a coin (2mo, 3mo, 4mo, 5mo, 6mo, 9mo, 1yr-koi, 1yr-phoenix):
- **Left page:** Full-bleed coin illustration (small, centered, with cream border), the milestone title (e.g. "THREE MONTHS"), the back quote typeset large, the coin's symbolism (3–4 lines, drawn from the catalog)
- **Right page:** Reflection prompts for that milestone
  - How has the way you think about [your recovery / yourself / your people] changed since the last milestone?
  - What is one thing you're proud of in this stretch?
  - What's something hard you got through?
  - What does this milestone's symbol mean to you? (Torii = new path, Stag = strength, Koi = persistence...)
  - Free write space

For milestones without a coin (1mo, 7mo, 8mo):
- **Left page:** Just the milestone name in clean type + the back quote OR a curated quote for that moment in recovery
  - 1 Month: Gaiman quote (already on opening page — could re-use, or pick fresh: "The beginning is the most important part of the work." — Plato)
  - 7 Months: "I am not what happened to me. I am what I choose to become." — Carl Jung
  - 8 Months: "What we do in life echoes in eternity." — Marcus Aurelius
- **Right page:** Same reflection prompt structure as the coin milestones (so the rhythm is consistent)

### Section 5: Tools & Reference (back matter, ~12 pages)
- My support network (names, numbers, meeting info)
- My coping toolkit — what works when a craving hits (list format, fill-in)
- My triggers & my plan (left column = trigger, right column = my move)
- Meeting log (date, location, what I took away)
- Wins log (running list — "I did ___ and I didn't drink")
- Resources & reading list
- "Things I want to remember when I think about drinking" (a page they fill in over time)
- Blank pages for overflow / overflow journal (10–15 lined pages)
- Last page: "One year from now, read this back" — single open prompt

**Total pages: ~260–280.** POD-friendly. Saddle-stitch or perfect bound.

---

# SKU 2 — Alt-Female / Birth-Flower-Centered

## Visual Direction

**Aesthetic:** Softer, more botanical-illustrated, but **not saccharine, not pink, not "Dear Alcohol"-coded.** Think *botanical print shop*, *Bloomsbury*, *a gift shop in a museum*. Adult. Not girly.

**Cover:**
- Soft-touch, slightly warmer palette than unisex
- **Title:** `first year.` (same — same brand, different interior voice)
- Single botanical illustration (a birth flower sprig — not all 12, just one strong hero — maybe peony for June or narcissus for December, picked for visual impact, not birth-month generic)
- Color palette: dusty rose + sage + warm cream + muted gold accent
- Optional: gold foil or copper foil on the floral mark (POD supports foil-lamination)
- Interior: cream paper (warmer than unisex), ink in sage and warm charcoal

**Imagery rules:**
- Botanical line drawings (one per month opener, smaller throughout)
- Pulls from the SBC (sober birthday card) visual language
- **No glitter, no "live laugh love," no "treat yourself," no "you got this girl"**
- Avoid the gendered clichés that "Dear Alcohol" leans on (no "girl" in copy, no "xo" sign-offs, no pink-saturated palette)

**Copy tone:**
- Slightly warmer / more personal than unisex
- Still secular
- Still adult — speaks to someone rebuilding, not someone "on a journey"
- "This month you" rather than "this month we"

---

## Contents — Alt-Female SKU

**Same structure as unisex (260–280 pages, 6"x9" or 5.5"x8.5"), but with these swaps:**

### Section 1: Front Matter
- Same as unisex, except:
  - Opening quote could be a flower-themed or year-of-growth quote. e.g. Mary Oliver: *"Tell me, what is it you plan to do with your one wild and precious life?"*
  - **Month-of-year check-in page:** "If your sober date is in [month], your birth flower is [X]. [X] symbolizes ___. Open this journal the month of [X] and notice what blooms." (Makes the SBC connection explicit.)
  - This section is where the cross-sell to SBC-## cards lives.

### Section 2: Daily + Weekly
- Same daily page layout as unisex
- **One small extra prompt** in the daily section (not in unisex): "A small thing that made today beautiful" (3 lines) — the birth-flower lens adds "tend to beauty" as a thread

### Section 3: Milestone Pages
- Same milestone structure as unisex
- **Left page illustration swap:** botanical illustration of the month's birth flower (re-uses the SBC art, in line-art form) instead of the coin illustration
- Right page reflection prompts: **add a "what's blooming in me right now" prompt** that the unisex version doesn't have

### Section 4: Tools & Reference
- Same as unisex, except add:
  - **"A letter to the woman I'm becoming"** page — single open prompt near the back
  - **"My garden of small joys"** — a different wins-log framing: instead of a list, it's "Things I'm growing on purpose" (intentional framing toward the botanical visual language)

---

# Cross-Sell & Mechanics

## Pairing with Coins
- Both journals include a "place your coin here" prompt near each milestone page (text + small line-art image of the coin). User tapes/glues the actual coin in, or just writes "received [date]" and stores coin in a separate box.
- **Upsell logic:** Buy a 1-year coin → receive a journal that was designed to hold it.
- Etsy listing copy can pair the journal SKU with the most-coin buyers (2mo, 6mo, 9mo, 1yr) as related items.

## Pairing with Sober Birthday Cards
- Alt-female SKU explicitly invites the SBC-## cross-sell: "If your soberversary falls in [month], pair this journal with the [flower] sober birthday card."
- Doesn't work for unisex SKU as cleanly — unisex doesn't lean on flowers.

## Pricing
- **Unisex POD journal:** $24.95–$29.95 (clever fox / BookFactory tier)
- **Alt-female POD journal:** $24.95–$29.95, or premium at $29.95–$34.95 if foiled cover
- **Digital companion (both SKUs):** $7.95–$9.95 PDF for users who want fillable

## POD Notes
- Single-item POD product = single shipping, no multi-item problem
- **Interior paper: 60lb uncoated cream** — only option at Lulu (between 60 uncoated and 80 coated). 60 uncoated is the correct choice for journaling; 80 coated smears pen ink.
- Cover finishes: matte (chosen, no fingerprint issue, reads as book). Glossy rejected.
- **No pouch.** Per Catherine's call — keep single-item.
- **PDFs are parallel SKUs, not afterthoughts.** Treat them as products in their own right, with their own listings and copy.
- **Scope expansion note:** When mental health / anxiety / emotional sobriety is added, the daily/weekly prompts need a second-voice pass — some should be substance-recovery-specific, others anxiety/mental-health-specific. The milestone pages can stay sobriety-anchored (they're the moat) but the front matter and tools section can be retuned for both audiences. Park for v2 design pass — do not block v1 launch on this.

---

# What This Needs From Barbara / Drew

1. **Sign-off on the secular copy tone** — no religious language, no "girl"/"xo" gendered language in alt-female
2. **Pick the cover typography style** for both — could be 2–3 cover mockups
3. **Coin illustration approach for the milestone pages** — full-color photo of the coin? Line-art redraw? Black silhouette? Each has cost + visual weight tradeoffs
4. **Confirm POD vendor** — Lulu, Blurb, BookBaby, or Amazon KDP (each has different trim, paper, and finish options)
5. **Pick the alt-female cover flower** — peony vs. narcissus vs. wild rose vs. chamomile (each says something different)

---

## Open Questions for Catherine

1. **One SKU or two at launch?** Two doubles the work but owns both audiences. One (start with unisex) de-risks and tests the concept.
2. **If one — which?** I'd say **unisex first**, because the coin-tied milestone pages are the unique moat, and the alt-female can launch as a v2 once unisex sells.
3. **Digital companion at launch or later?** ~~I'd say later.~~ **REVISED 2026-06-02:** Two-PDF companion launches alongside printed product (fillable $7.99 + print-ready $9.99). They're not afterthoughts; they're the entry point and the test of demand.
4. **Test order size?** POD has no minimums, so the move is: design → 1 proof copy from POD vendor → photo → Etsy listing → sell on demand.
5. **Scope expansion to mental health / anxiety / emotional sobriety** — park for v2 design pass. v1 launches sober-focused. The new audience is on the radar, not in the v1 product.

---

*Drafted 2026-06-02. Awaiting Catherine review.*
