# Greeting Card Mockup Best Practices

**Applies to:** All ANA greeting card lines — Sober Birthday Flowers (CSF-01–12), Sober Birthday Themed (CSB-01+), Tiny Victories (CTV-01–14), and any future 5×7 folded card SKU.

**Format state (2026-06-20):** Currently digital-only downloads. If/when physical versions launch (planned for sober cards as coin-order add-ons), the doc will gain a "physical SKU addendum" with envelope + packaging shots.

**Last updated:** 2026-06-20

---

## The Mission (one sentence)

> The buyer should be able to read the design, read the words, and trust the paper — in 1 second of thumb scroll.

That's it. Every other choice flows from that.

---

## TL;DR Rules

1. **Consistency wins.** Same hero setup across every card in a line. Buyers browse by thumbnail first; consistency is what makes a line LOOK like a line.
2. **Four poses are enough.** Repeat the same 4 for every card. Design changes; photography stays uniform.
3. **The interior IS the product.** Greeting cards live or die on the message. Show the inside.
4. **Skip the back unless it does work.** Blank back or tiny logo = wasted slot.
5. **Canva mockup templates are broken.** Wrong scale, wrong proportions, lighting never matches the print finish. Skip them.
6. **AI mockups are the move** — IF you lock a master prompt and only swap the art description per card.

---

## The 4 Poses (repeat for every card)

| # | Pose | Purpose |
|---|------|---------|
| 1 | **Hero — upright at 15° angle** | Thumbnail clarity, design forward |
| 2 | **Flat lay — dead-on, no angle** | Pure design read, no perspective distortion |
| 3 | **Open, interior visible** | The message is the product — make it legible |
| 4 | **In hand at bottom edge** | Scale + humanizes the card |

That's the whole toolkit. Don't invent new poses for variety's sake — variety kills the line aesthetic.

---

## Etsy's 10 Image Slots — Allocation

| Slot | Use |
|------|-----|
| 1 | **Hero** — front, 15° angle, fills 75% of frame |
| 2 | **Flat front** — dead-on, for clarity at thumbnail size |
| 3 | **Open / interior reveal** — the money shot |
| 4 | **Text close-up** — pinhole zoom on the inside copy, legible at thumb size |
| 5 | **In hand** — shows scale, humanizes |
| 6 | *Physical SKUs only:* **with envelope** — confirms the package deal. Skip for digital downloads. |
| 7 | **Detail shot** — paper texture, matte finish, fold quality |
| 8 | **Group / line shot** — 2–3 other cards from the same line fanned or stacked. Builds "I'm a real line." |
| 9 | **Occasion cue** — single contextual prop that fits the line's tone (coffee mug, stem, notebook, etc.) |
| 10 | **Trust / process** — brand mark, packaging, or "ships in a rigid mailer" reassurance |

**Back of card:** only use a slot for the back if there's real content (full-bleed print, poem, brand statement). Plain back or just a logo = skip it, give the slot to packaging or a line group shot.

---

## Master AI Prompt Template

Lock this. Only swap the bracketed parts per card.

```
Product photograph of a 5x7 folded greeting card [front art: brief description 
of the design — specific about colors, mood, illustration style], standing 
propped at a 15° angle on [linen fabric / weathered wood / soft marble], 
matte paper finish visible, soft natural window light from the left, neutral 
background blurred, shallow depth of field, sharp focus on the card, 
professional product photography for Etsy listing
```

**Key constraints to keep identical across the line:**
- Surface material (pick ONE per line)
- Lighting direction (always from the same side)
- Camera angle (always 15°, never 30° or 45°)
- Focal length / depth of field (same lens feel)
- Background tone (matching neutral across the set)

The cards will then read as a coherent set even though every front is different.

---

## Per-Line Variations

- **Tiny Victories (CTV, snarky/edgy):** occasion cue prop should match the snark — e.g., a half-finished drink, a crumpled wrapper, a plant that's seen things. Don't soften it.
- **Sober Birthday Flowers (CSF, warmer/celebratory):** softer props — a single stem, tea light, ribbon. The flowers already carry the warmth.
- **Spoons / Softer Side (TBD):** when defined, match the prop energy to the emotional register. Don't borrow from other lines.

---

## Video (optional for v1)

Etsy supports listing video. If you want one:
- **Don't sweat it for launch.** A static 10-image listing beats a sloppy video.
- **If you do one:** 5-second loop, "card tilts from closed to slightly opened, interior partially revealed." Generate as still first, then ask Canva / Sora / Kling to animate from the still.
- **Skip hand-model video.** Too many variables. Product-only loops are fine.

---

## Why Canva Templates Fail (your instinct is right)

- Aspect ratio is generic placeholder, not 5×7 folded
- Lighting direction shifts randomly between renders
- Card "material" looks like plastic, not matte paper stock
- You can't control prop, surface, or background — the template decides for you
- Scale is impossible to verify — the card "looks" the right size but isn't

AI generation with a locked prompt beats every Canva template for cards specifically.

---

## Open Items

- [ ] Decide line-by-line surface material (linen? wood? marble? mix?)
- [ ] Decide line-by-line prop for the occasion-cue slot
- [ ] Test the master prompt across 3 cards to confirm the studio "reads" as consistent before committing to all 14
- [ ] Decide if video is in scope for v1 launch or post-launch iteration

---

## Nano Banana (Gemini 2.5 Flash Image) — Known Quirks & Fixes

Confirmed as the card-mockup tool of choice over GPT (better output quality, higher credit cost acceptable). Documented issues from working through the CTV line:

### Issue: AI enlarges artwork relative to card front

**Symptom:** Artwork figures feel small in the white space. AI is re-deciding the framing during render — preserving artwork content but enlarging it relative to the card.

**Why edit mode fails:** Nano banana is decent at fixing drift and elements, weak at re-scaling framing in-place. It prefers to re-render from scratch with new framing instructions.

**Fixes (try in order):**

1. **Drop-in scale-preservation block** — place right after the artwork reference:
   ```
   The artwork from reference image 2 must remain at its exact original 
   scale and framing within the card front. Do not crop, zoom, enlarge, 
   or reframe the artwork. Preserve all original whitespace, margins, 
   and negative space around the artwork exactly as shown in reference 
   image 2. The artwork must not fill or extend to the edges of the card.
   ```

2. **Explicit margin call:** "Maintain a minimum 10% margin on all four sides between the artwork and the card edges."

3. **Numerical anchor:** "The artwork occupies approximately [X%] of the card front surface, matching the framing in reference image 2." — estimate from source file, lock it.

4. **Third reference trick (strongest fix):** Add a flat, dead-on photo of just the card front on a neutral background as reference image 3. "Reference image 3 shows the exact framing and whitespace of the card front. Replicate that framing precisely within the card shown in the final image." A flat front gives nano banana a cleaner framing target than an angled hero shot.

**Root cause if all fail:** Nano banana tends to treat white space as "missing content" and crop inward. Ensure reference image 2 is the high-res print file (1500×2100+ at 300dpi), not a smaller export. More source pixels = less improvisation.

### Issue: Table distressing drifts between renders

**Symptom:** Wood grain or surface texture changes shape, direction, or pattern between cards in the same line.

**Fix:** Add explicit stability instruction: "Keep the wood grain pattern in the table identical to reference image 1. Do not change the wood's knots, color variation, or grain direction." Re-roll if drift persists — sometimes the seed wins.

### Issue: Card interior looks mottled when card is "barely open"

**Symptom:** Card interior surface shows texture/pattern that shouldn't be there — the AI invents a paper texture.

**Fix:** Add: "The card interior must appear smooth and uniformly off-white, matching the matte paper finish. Do not add texture, pattern, or variation to the interior surface."

---

## Prompt Iteration Discipline (lesson from CTV work)

- Lock the studio first (surface, lighting direction, angle, focal length, background). Spend credits here.
- Lock framing preservation before doing the full set. 3 test cards across the line — if the art occupies consistent % of card front across all 3, the lock holds.
- Drift fixes (table grain, mottled interior) need explicit per-element instructions. Vague "match reference" isn't enough.
- Background consistency on nano banana takes prompt refinement — get it stable, then don't touch it.
