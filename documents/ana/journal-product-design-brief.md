# ANA Journal — Design Brief v2

**Date:** 2026-06-03 (rewritten from v1 milestone-anchor brief)
**Status:** v2 concept brief, page count + asset inventory + rotation locked 2026-06-03
**Predecessor:** `journal-product-design-brief.v1-milestone-anchor.md` (saved for reference — superseded)

---

## Positioning

**One-line statement:**
> A journal for people on a journey of emotional and mental health, or recovery from addiction.

**Audience priority:**
1. **Primary** — emotional and mental health, anxiety, emotional sobriety. (Larger market, growing search-trend category.)
2. **Secondary** — recovery from addiction. (Already served by ANA's existing brand; this journal is *adjacent* to that world, not a centerpiece of it.)

**Why this positioning works:**
- Specific enough to not be a generic "wellness journal"
- Broad enough to own both markets under one product
- Honors ANA's existing brand without making sobriety the only reason to buy
- Reflects Catherine's own 10-year journaling practice: dates on the page, no calendar, no schedule

**Why v1 (milestone-anchored) is out:**
- Most people don't hit sobriety milestones "on time." A 6-month page in a book they reach at month 3 shames the user.
- The structure assumed a journey on rails. Reality is messier.
- Self-paced meets the user where they are.

---

## Page Architecture (self-paced, dated, prompted)

**The user writes the date on every page. There is no calendar, no day counter, no week number.** This is the central design rule. Every page should work whether the user opens the journal daily, weekly, monthly, or three times a year.

**Total: 124 pages (locked 2026-06-03).** Even page count required for Lulu coil binding. Within Lulu's 24-page minimum and well under coil max. 6×9 coil-bound spec, 60lb uncoated interior, matte cover.

| Section | Pages | Purpose |
|---|---|---|
| Front matter (intro) | 2 | Logo + wordmark on page 1; welcome/"why this journal exists" on page 2 |
| Daily-style prompted pages | 84 | 7 per cycle × 12 cycles. All 84 are standard prompt pages. Built from a merge file (see "Daily Page Template" section) with 2 layout variants (A and B) |
| "Looking back" recap spreads | 24 | 12 two-page spreads, one per cycle. Full-page line-art image (left) + 3 short prompts (right) |
| "Looking forward" goal/filler pages | 10 | 1/3-page image (top) + 2/3 prompt (bottom). Cycles 2-11 only. No filler after cycle 1 (no goals yet) or after cycle 12 (book ends on recap) |
| Resources / "when you need more" | 1 | Crisis lines, professional help, ANA links. Sober + mental health framing |
| Letter to future self (envelope page) | 1 | Instructions for the user to write a letter, seal it, tape the envelope to this page. Tactile artifact, optional but encouraged |
| Coin marketing end cap | 1 | Full-color 11-coin grid, framing copy, apartnotalone.com URL. One application of the journal, not the only one |
| **Total** | **124** | |

**Cycle math (locked 2026-06-03):**
- **Cycle 1:** 7 dailies + 2 recap = 9 pages (no filler — no goals yet)
- **Cycles 2-11:** 7 dailies + 2 recap + 1 filler = 10 pages each (10 cycles × 10 = 100 pages)
- **Cycle 12:** 7 dailies + 2 recap = 9 pages (no filler — book ends on recap)

**Why 7 dailies per cycle (not 6):** The recap is a separate cognitive mode (reflection vs. capture). Conflating them — having the recap "be" the 7th daily — breaks the design. 7 dailies + recap is the standard pattern in self-paced journals with periodic reflection beats.

**84 dailies = honest "year-ish" math.** 84 entries over a year (or longer if sporadic) matches Catherine's own 10-year journaling practice: not daily, but consistent. Marketing language: "12 reflection cycles" or "84 entries, paced by you" — not "90 days" (which would be false advertising for a self-paced book).

**Filler page purpose (locked):** The filler/goal page serves two functions:
1. **Layout function:** Pushed the next cycle's first daily back to a right-hand (recto) page, preserving the visual rhythm of "open to a fresh daily on the right."
2. **Reflective function:** "Looking forward" prompts — what's one thing to carry into the next stretch, what's one thing to leave behind, what's a small intention for the next 7 entries. Different cognitive mode from the recap's "looking back."

**This matches Catherine's own use pattern (10 years, sometimes a few times a year, sometimes more).**

---

## Daily Page Template

**One page per visit.** Date is filled in by user. Page works as a complete experience — open, read prompt, write, close. All 84 daily pages share this template — the variation between pages is driven by a CSV merge file, not by separate page designs.

**Page layout (6×9 vertical, coil-bound):**

| Zone | % of page | Content |
|---|---|---|
| Top block | 10% max | "Thoughts for the day" header (small, soft type, Leaf Green or Medium Blue, not bold) + Date line ("Date: ____________") + cycle icon top-right (ornament-grade, ~3% of page) |
| Cycle label | (within top block) | "Cycle N · M of 7" — small, low contrast, top-left or under header |
| Guided prompts | 25–30% | 2 prompts, short lined space below each, thin rules (not heavy) |
| Free write | 30–40% | Dot grid (bullet-journal style, light dots). Cue line at top: "Free write — use for written thoughts, or other creative expression." |
| Footer | (bottom margin) | Very small two-fish ornament, low contrast |

**Two layout variants** (selected by the merge file per page):

- **Variant A** — 2 short lined prompts above the free write dot grid. Used for check-in, gratitude, alive-in-me, happened, working-on, and remember prompts.
- **Variant B** — 1 short lined prompt + 1 longer-lined prompt above the free write dot grid. Used for letter-to-self prompts (which need more writing room under the prompt itself).

**Why two variants instead of one master layout:** Letters to self are the high-effort entries and need more prompt-scaffolded space. The variant split keeps the standard days feeling light while giving letters room to breathe. Alternating A and B per the prompt rotation also creates visual rhythm through the book.

**Why dot grid, not blank, not full lines:**
- Bullet-journal convention (Ryder Carroll, ~2013) — recognized by journaling users as "structured but not a notebook"
- Gives a writing anchor for users who freeze on a blank page
- Still permits sketching, arrows, bullets, sticker placement
- Light enough that it disappears when you stop looking for it

**Why thin rules, not heavy lines:** Heavy rules feel like a worksheet. Thin rules suggest "this is a guide, not a cage." Sobriety/anxiety journaling shouldn't feel like homework.

**Prompt voice:** warm, secular, direct. No "you got this." No "stronger than your excuses." No Higher Power. No 12-step. No gendered language. Speaks to someone rebuilding, not someone "on a journey."

**Sample Variant A page (final copy in cycle-by-cycle prompt tables):**
> *Cycle 1 · 1 of 7*  ✦
>
> *Thoughts for the day*
> *Date: ____________*
>
> *How would you rate today? Take a moment to think about your mood, energy, sleep, or any urges that came up. 1–5, then say what made it that.*
>
> *___________________________*
>
> *What's one thing you did or noticed today that you want to remember?*
>
> *___________________________*
>
> *Free write — use for written thoughts, or other creative expression.*
>
> *[dot grid below]*

**Sample Variant B (letter-to-self):**
> *Cycle 1 · 6 of 7*  ✦
>
> *Thoughts for the day*
> *Date: ____________*
>
> *Write a short note to yourself. Tell your future self what's hard right now, what's working, and one thing you want them to remember you said.*
>
> *[longer-lined space below]*
>
> *One thing you don't want to forget:*
>
> *___________________________*
>
> *Free write — use for written thoughts, or other creative expression.*
>
> *[dot grid below]*

**Daily Page CSV Schema (merge file driving 84 pages):**

The 84 daily pages are generated from a single master template + a 84-row CSV. Each row produces one page. Same template, different data per page. This is what makes "highly customized and more premium" possible at scale.

| Column | Type | Notes |
|---|---|---|
| `page_num` | int 1–84 | Master page sequence in book |
| `cycle` | int 1–12 |  |
| `cycle_page` | int 1–7 | Position within cycle |
| `variant` | A or B | A = 2 short lined prompts; B = 1 short + 1 longer-lined (letters) |
| `icon` | string | Cycle icon, top-right of page. Reuses recap motif (smaller scale) |
| `prompt_1` | text | Always short, lined space below |
| `prompt_2` | text | Short if A, longer if B |
| `cycle_label` | string | e.g., "Cycle 2 · 1 of 7" |

**Cycle icons (locked, reused from recap rotation):**

| Cycle | Icon | Source |
|---|---|---|
| 1 | Torii | 1 month coin |
| 2 | Waterfall & lily | 18 month coin |
| 3 | Two-fish | ANA logo |
| 4 | Stag | 4 month coin |
| 5 | Kraken lighthouse | 5 month coin |
| 6 | Fox in snow | 9 month coin |
| 7 | Rowing POV | 2 year coin |
| 8 | Resting horse | 3 year coin |
| 9 | Desert landscape | 2 month coin |
| 10 | Frog | 3 month coin |
| 11 | Koi (late re-use) | 6 month coin |
| 12 | Phoenix | 1 year coin |

Each cycle's 7 daily pages get the *same* top icon. When the user reaches the recap spread at the end of the cycle, the full-page recap image is the *same* icon, larger, full-bleed. Continuity the user feels without being told.

**Sample "Looking back" recap spread (2-page, every 7 entries):**

*Left page:*
> *[Full-page line-art illustration, e.g., phoenix]*
>
> *What rises after?* (small caption at bottom)
>
> *[Empty space around the image for stickers, notes, ticket stubs — user-added, not pre-printed]*

*Right page:*
> *Date: ____________*
>
> *Looking back at the last 7 entries:*
> - *What kept coming up?*
> - *What shifted?*
> - *One thing you want to remember:*
>
> *[Free-write space]*

**The image rotates through the iconography** — phoenix, waterfall, koi, stag, lighthouse, fish, etc. — so the 12 recap spreads cover the full vocabulary over the course of the book.

---

## Iconography — The Coin Language, Used Subtly

The coin icons are the **visual grammar** of the journal. They appear throughout, but never branded, never labeled, never explicitly tied to a milestone. The user feels the continuity with ANA's existing brand without being sold a "sobriety" product.

**Icon vocabulary (locked, from the existing ANA coin designs):**

| Icon | Meaning | Where it appears |
|---|---|---|
| Torii gate | New journeys, new beginnings | Front matter opener, endpiece |
| Fish (two together) | Mutual support, "apart not alone" | Recurring — small ornaments, dividers |
| Phoenix | Rising again, renewal | Recap spreads (cycle 12 close) |
| Waterfall | Serenity, ongoing flow | Recap spreads (cycle 2) |
| Kraken / lighthouse | Lurking perils, vigilance | Recap spreads (cycle 5) |
| Koi | Persistence, swimming upstream | Recap spreads (cycle 11, deliberate late re-use) |
| Stag / deer | Strength, quiet power | Recap spreads (cycle 4) |

**Top-block icon pattern on daily pages:** Each cycle's 7 daily pages use the same top-right icon — the same coin-icon motif that appears full-page on that cycle's recap spread, 7 entries later. Icon is small, ornament-grade, single color (Ocean Indigo or Leaf Green). User feels continuity with the recap image without being told. 12 cycle icons, one per cycle, drawn from the recap rotation table. Coin icons (full coins) are not depicted on daily pages — only the iconographic vocabulary.

**Note on the prior "6 image-led dailies" plan:** Removed 2026-06-03. The 10 "Looking forward" goal/filler pages serve the visual-rhythm role that image-led dailies were intended to serve. All 84 daily pages are now standard prompted pages driven by the merge file.

---

## Style Tokens (NEW PALETTE)

Brand voice: **optimistic recovery, not somber plodding through recovery.** The old charcoal/forest/cream read as too heavy. New palette is brighter, more artistic, more gift-able.

**Full saturation:**

| Token | Hex | Use |
|---|---|---|
| Ocean Indigo | `#003b88` | Type accents, section headings, "deep" moments |
| Medium Blue | `#4d7bcc` | Secondary type, smaller accents |
| Sunrise Coral | `#ff5d4c` | Pull-quote accents, callouts, single highlight color |
| Golden Sunrise | `#ffd437` | Joyful accents, recap spread borders, top-block icon backgrounds |
| Leaf Green | `#37c86f` | "Growth" / "new" accents, dividers, top-block cycle icons, "Thoughts for the day" header |
| Soft Linen | `#f5efe8` | Paper / background |

**Unsaturated (tonal light versions):**

| Token | Hex | Use |
|---|---|---|
| Light Blue | `#4fb6ff` | Larger fills, dividers, soft headers |
| Spring Green | `#83e2a4` | Soft fills, gentle backgrounds |
| Pastel Sunrise | `#ffeb8e` | Soft callouts, gentle highlights |
| Pastel Coral | `#ff9b8f` | Warm-felt accents (not loud) |
| Misty White | `#f4f8f8` | Lighter paper option, card-stock feel |

**Print adaptation note:** Hexes are reference. Lulu print may shift saturation slightly. Approve color on a proof copy before bulk.

**Composition rules:**
- 60–70% of every page is Soft Linen (paper)
- One unsaturated color dominant per page (not all six at once)
- Full-saturation colors used sparingly, as accents (a coral pull-quote, an indigo header underline)
- Recap spreads and top-block icons use single-color line art (Ocean Indigo or Leaf Green)
- No page uses more than 2 full-saturation colors

---

## Cover Direction (artistic + cheerful, title = `Still Here.`)

**Title (locked 2026-06-03):** `Still Here.`

**Concept:** A single full-bleed illustration in line art + one accent color. Title is small, lowercase, restrained, bottom of cover. The cover should feel gift-able — like something you'd buy for a friend going through a hard time, not a personal accountability tool.

**Working concepts (Catherine to choose):**
1. **Torii gate centered, large, in Ocean Indigo line art** — single accent of Golden Sunrise behind it (sunrise through the gate). Title in small lowercase below: `still here.`
2. **Two fish curving around each other** (the "apart not alone" symbol) in Leaf Green, forming a circular embrace. Title below: `still here.` (Risky — explicit brand call-out. Probably not v1.)
3. **Single oversized botanical / line-art element** (waterfall or koi or stag) in one full-saturation color, lots of white space. Title minimal: `still here.`

**Cover specs:**
- Matte soft-touch finish (Lulu premium tier)
- Title typography: lowercase serif or modern sans, small, not centered/bannered
- **No "Sobriety Journal"** as title text
- **No "Recovery"** as title text
- Optional: small debossed icon (adds tactile feel, costs more)

---

## Print + Distribution (UPDATED 2026-06-03)

**POD vendor: Lulu**
- 6×9 coil-bound, **124 pages** (updated from 116; still fits Lulu spec, just over the original 100-120 target)
- 60lb uncoated interior, matte cover
- Print cost reference: ~$11.66 (re-quote for 124 pages)
- Coil > perfect bound (lays flat)
- Matte cover (no fingerprint issue, reads as book)
- 60lb uncoated > 80lb coated (accepts pen ink)
- Shipping built in; Lulu is in NC (same state as Catherine)
- **Lulu page count requirements (confirmed 2026-06-03 from Lulu help docs):**
  - Minimum 24 pages for any bound book
  - Page count **must be even** for binding (this is why the journal lands at 124, not 123)
  - Coil binding can handle 300+ pages
  - Interior margin: 0.5" minimum on the spine edge (coil bites 0.375")
  - Bleed: 0.125" if any art runs to the page edge
- Order **one proof copy** before listing

**Three-SKU strategy:**

| SKU | Format | Price | Who buys it |
|---|---|---|---|
| Lulu Print | 6×9 coil, matte, **124 pages** | $19.99 | Wants a physical book, gift or self |
| Digital Fillable PDF | $7.99 | iPad/GoodNotes user, hyperlinked TOC, form fields |
| Print-Ready Letter PDF | $9.99 | $9.99 / 8.5×11 / no fillables / home printer |

**Two-PDF rationale unchanged:** iPad users want fillable fields; print users want clean printable. They fight in one file.

**PDF design rule (unchanged):** PDFs should look distinct from Lulu version, not "degraded book." PDF is its own product, "the digital companion."

**Etsy-Lulu fulfillment:** manual forwarding at low volume. Drew owns at <30/month. Reconsider Shopify middleman at scale.

---

## Recap Pages — "Looking back" (every 7 entries, 2-page spread)

**Decision (2026-06-03):** Recap pages appear every 7 daily entries. **Not** called "weekly" — the journal has no weeks. Called **"Looking back."** 12 spreads total in the book (one per 7-entry cycle).

**Layout: 2-page spread** (locked 2026-06-03).

**Image rotation (locked 2026-06-03):** 12 distinct full-page line-art images, all coin-derived (except the "two fish" symbol on cycle 3, which is the ANA logo treated as an image). Narrative arc: gentle start → growing strength → action/endurance → re-emergence.

| Cycle | Recap image | Source | Why here |
|---|---|---|---|
| 1 | **Torii gate** | 1 month coin (locked) | New journey, threshold, the start |
| 2 | Waterfall & lily | 18 month coin | Serenity, ongoing flow after the start |
| 3 | Two fish (curved embrace) | ANA logo treated as image | "Apart not alone" — mutual support, mid-early |
| 4 | Stag | 4 month coin | Quiet strength, grounding, mid-journey |
| 5 | Kraken lighthouse | 5 month coin | Lurking perils + vigilance, mid-journey |
| 6 | Fox in snow | 9 month coin | Solitude, wisdom, the long middle |
| 7 | Rowing POV | 2 year coin | Agency, momentum, you're moving |
| 8 | Resting horse | 3 year coin | Rest is part of the work, deep middle |
| 9 | Desert landscape | 2 month coin | Endurance, vastness, the long haul |
| 10 | Frog | 3 month coin | Leap, transformation, late-middle |
| 11 | **Koi** (deliberate late re-use) | 6 month coin | Popular motif, persistence — late return |
| 12 | **Phoenix** | 1 year coin (locked) | Rising again, renewal, the close |
- **Left page:** Full-page line-art illustration (single coin-icon motif), small motif-tied caption at bottom, empty space around the image for stickers, tape, ticket stubs, notes (user-added).
- **Right page:** "Looking back at the last 7 entries" header + 3 short prompts + free-write space.
- Image and prompts sit on the same spread — user turns one page and lands on the image, then writes in response. Splitting them across separate visits breaks the rhythm.

Why 2-page spread, not ½-page image + ½-page prompts:
- The image needs to breathe. ½ page forces the eye to read and look at the same time. A full image page lets the user pause on the imagery first, then turn the page and engage with the prompts.
- "Room to jot" space is exactly the kind of overflow that makes a journal feel lived-in. ½ page isn't enough. A full page is.
- The recap prompts deserve real estate. "What kept coming up? What's shifted? What do you want to remember?" + free write is more than ½ page can hold comfortably.

Why every 7, not every 10 or every 15:
- 84 daily pages / 7 = 12 perfect recaps. Clean math (no leftover entries).
- Plays into Catherine's marketing insight: nothing is "wasted" by the passing of time. If the user writes 3 entries one week, nothing for 2 months, then 4 in a weekend, a "looking back" page still fits.
- The word "weekly" would be dishonest in a self-paced journal. "Every 7 entries" is honest and matches the math.

**Image rotation:** see the table above (locked 2026-06-03). All 11 coin motifs used, with the koi (6 month / top seller) deliberately returning in cycle 11, and the phoenix anchoring cycle 12. The two-fish logo appears as a recap image in cycle 3 — the only non-coin-derived recap image in the book, and a quiet brand moment.

## Letter to Future Self — Envelope Page (locked 2026-06-03)

**Page 124 (last page of the book).** One page. Different from a standard "letter writing" prompt.

**The concept:** A short instruction page that asks the user to write themselves a letter on a separate piece of paper, seal it in an envelope, and tape the envelope to this page. The back of the journal becomes a physical artifact, not just a closing spread.

**Why this works:**
- Tactile. Adds a 3D object to a 2D book. The user *did something* to close the book.
- Optional but encouraged. Doesn't break the book if the user skips it — the page is still a complete thought on its own.
- Future-self moment. The envelope sits in the book until the user opens it, which they may do in 6 months, a year, or never. That's fine. The gesture is the point.
- Distinct from "letter to yourself" daily prompts. This is a closing ritual, not a writing exercise.

**Working text draft (final copy to be written):**

> *Before you close this book for good:*
>
> *Write yourself a letter. Not a gratitude list, not a recap. A letter. Tell your future self whatever you want them to hear from this moment.*
>
> *Seal it in an envelope. Tape the envelope to this page.*
>
> *Open it when you need to.*

**Layout:** Centered text block, no image, lots of white space. Possibly a small "two-fish" mark at the bottom as a quiet signature. The page is meant to feel calm and final — not visually busy.

**Companion consideration:** Consider including a small "this page is intentionally left for your envelope" note in the Lulu print template, so the printer doesn't trim something off. The page is full-size, no special bleed needed.

## Resources / "When You Need More" Page (locked 2026-06-03)

**Page 123.** One page. The book's ethical safety net.

**Working text draft (final copy to be written, Barbara/Catherine to vet):**

> *If you're in crisis, or if this journal isn't enough, that's not a failure. That's information.*
>
> *988 Suicide & Crisis Lifeline: call or text 988 (US)*
> *Crisis Text Line: text HELLO to 741741 (US/UK/Canada/Ireland)*
> *SAMHSA National Helpline: 1-800-662-4357 (US, free, 24/7, confidential)*
> *International Association for Suicide Prevention: https://www.iasp.info/resources/Crisis_Centres/*
>
> *For ongoing support, a therapist, counselor, sponsor, or trusted person is usually a better next step than another journal. This book is a companion, not a treatment.*
>
> *For more from Apart Not Alone, visit apartnotalone.com.*

**Layout:** Soft, lots of white space, no graphic heavy. The page should feel like a hand on a shoulder, not a warning label. Crisis numbers in a clear, scannable list.

**Why this page exists:** Sober and mental-health journals have an ethical duty to point to professional help. It also signals that the journal is a real product, not "wellness vibes." Single page is enough — don't make it a directory.

## Coin End Cap (single page, locked 2026-06-03)

**Page 122.** One full-color page. The "marketing endpiece" — frames ANA coins as one application of the journal, not the only one.

**Working text draft (carried over from earlier 2026-06-03 session):**

> *If you're on a recovery journey, you may recognize these tokens. The 11 ANA coins mark sobriety milestones — 2 months, 3 months, 4 months, and so on. This journal doesn't track your timeline. It just gives you space to write, on the days you choose to. Learn more at apartnotalone.com.*

(Final copy to be written, but framing is: optional/adjacent, not "this is a sobriety journal.")

**Layout:** Full-color coin grid (11 images), light/airy white space, small ANA logo (two fish), one paragraph of text, URL. Single page, not a spread — easier print, cleaner design, fits the 124-page count.

## ANA Logo (Two-Fish Symbol)


**Confirmed (2026-06-03):** The ANA logo is two stylized fish, koi-like in form. Can be used for subtle branding throughout — small ornaments at section dividers, back cover mark, watermark elements, the back-matter coin page. Not large or central. The journal is gift-able and brand-adjacent, not brand-front.

---

## What This Needs From Barbara / Drew

1. **Sign-off on the palette and tone** — confirm the brighter + more artistic direction
2. **Pick the cover concept** (1, 2, or 3 above, or sketch a fourth)
3. **Iconography library** — confirm the icon list above maps to the actual coin designs Barbara has. Add any coins I missed.
4. **Line-art rendering** — who draws the icons? Barbara redraws in line-art, or we commission, or AI-generate (and if AI, with what style reference)?
5. **Back-matter coin page layout** — provide 11 coin JPGs at print resolution, and sign off on the working text draft
6. **Final copy approval** — sample prompts will go through ChatGPT for layout mockups, but Catherine approves the copy voice and content

---

## Asset Inventory (locked 2026-06-03)

**Total unique new art pieces needed: ~25 line-art + 1 cover + 1 logo (have) + 11 coin photos (have).**

| Asset | Count | Type | Source / Owner | Status |
|---|---|---|---|---|
| Cover illustration | 1 | Line art, full-bleed, 1 accent color | TBD (Barbara or AI-gen) | Not started |
| ANA two-fish logo | 1 | Existing line drawing | ANA / Barbara | HAVE |
| Recap images (full-page) | 12 | Line art, single color | Coin-derived, see rotation table | TBD — 12 needed, 11 coin motifs + 1 logo-as-image |
| Top-block cycle icons (daily pages) | 12 | Small line art, ornament-grade | Same motifs as recap images, rendered smaller | Reuse recap art — no new pieces |
| Filler / goal page images (small, ⅓-page) | 10 | Line art, simple | Coin variants or new | TBD — most can be reused/derived |
| Coin photos (end cap) | 11 | Existing photos | Barbara / ANA | HAVE |

**Realistic unique line-art count after reuse: ~20-25 new pieces** (12 recap + ~3 filler unique + 4-5 misc + cover). Top-block daily icons reuse recap art at smaller scale — no new daily icons needed.

**Layout templates needed (1 master each, used many times):**
- 1 intro page template (logo + wordmark, page 1)
- 1 welcome page template (page 2)
- 1 daily page template (used 84 times, driven by merge file; 2 layout variants A and B)
- 1 recap spread template (used 12 times)
- 1 goal/filler page template (used 10 times)
- 1 resources page template (page 123)
- 1 letter-to-future-self page template (page 124)
- 1 coin end cap template (page 122)
- 1 cover design

**Total: 9 layout templates + ~25 unique art pieces = the full design scope.**

---

## Recap Image Rotation (locked 2026-06-03)

11 coin motifs + ANA two-fish logo (treated as image) = 12 distinct recap spreads. Order below is final.

| Cycle | Recap image | Source | Narrative beat |
|---|---|---|---|
| 1 | **Torii gate** | 1 month coin | New journey, threshold, the start |
| 2 | Waterfall & lily | 18 month coin | Serenity, ongoing flow after the start |
| 3 | Two fish (curved embrace) | ANA logo treated as image | "Apart not alone" — mutual support, mid-early |
| 4 | Stag | 4 month coin | Quiet strength, grounding, mid-journey |
| 5 | Kraken lighthouse | 5 month coin | Lurking perils + vigilance, mid-journey |
| 6 | Fox in snow | 9 month coin | Solitude, wisdom, the long middle |
| 7 | Rowing POV | 2 year coin | Agency, momentum, you're moving |
| 8 | Resting horse | 3 year coin | Rest is part of the work, deep middle |
| 9 | Desert landscape | 2 month coin | Endurance, vastness, the long haul |
| 10 | Frog | 3 month coin | Leap, transformation, late-middle |
| 11 | **Koi** (deliberate late re-use) | 6 month coin (top seller) | Persistence, popular motif returns late |
| 12 | **Phoenix** | 1 year coin | Rising again, renewal, the close |

All 11 ANA coin motifs used. Koi (the top seller) gets a deliberate late return. Phoenix closes the book. The narrative arc: gentle start (water, fish) → growing strength (stag, lighthouse, fox) → action and endurance (rowing, horse, desert, frog) → re-emergence (koi, phoenix). Mirrors a year of recovery/mental-health work without naming it.

---

## Open Questions for Catherine

1. **Cover concept with `Still Here.` title** — re-render the three cover concepts from the Cover Direction section against this title, then pick. (Will update with new mocks once you confirm direction.)
2. **Sub-branding placement (logo "how small, where")** — locked 2026-06-03: back cover (small two-fish + wordmark), intro page 1 (logo + wordmark), daily pages (very small two-fish only, ornament-grade, no wordmark). Nothing on front cover.
3. **Recap rotation order** — locked 2026-06-03, see table above. (Originally a question, now resolved.)
4. **Letter-to-future-self envelope concept** — locked 2026-06-03. Page 124, single page, instructions to seal and tape the envelope to the page. Tactile closing ritual, optional but encouraged.
5. **Resources page** — locked 2026-06-03. Page 123. Final copy needs Barbara/Catherine vetting (crisis line numbers, regional appropriateness).

---

*Drafted 2026-06-03. Page count, asset inventory, and recap rotation locked 2026-06-03. Supersedes v1 (milestone-anchor).*
