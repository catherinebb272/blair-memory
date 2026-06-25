# Greeting Card Catalog

Master inventory of every ANA greeting card. Single source of truth for what exists, what's in progress, and what's TBD across all card lines.

**Schema:** `SKU | Front description | Front saying | Back detail | Image | Status`

- **SKU** — internal ID (`CSF-##`, `CCF-##`, `CTV-##`, `CSB-##`)
- **Front description** — what the card front looks like (illustration + visual style)
- **Front saying** — the sentiment / quote / phrase printed on the front
- **Back detail** — the back-of-card copy / note (full text where finalized)
- **Image** — final asset status. CCF cards: TBD (pending Barbara art delivery). CTV / CSF / CSB cards: art lives in Canva; no export URL or .png file yet (Etsy doesn't allow AI-assisted uploads per their policy, so the placeholder holds for now; may export later for social media).
- **Status** — Etsy / production readiness:
  - `published` — live on Etsy
  - `draft` — created in Etsy but not yet published
  - `complete` — design finished (mockups + downloadables + copy), not yet entered into Etsy
  - `unfinished` — design exists but is not complete

**Last update:** 2026-06-25 (added Status column + per-SKU status). Catalog rebuilt 2026-06-23 after `greeting-card-catalog.md` lost in git reset; see Recovery Note below.

---

## CCF — Comfy Feelings (5 cards)

Tagline: "For the hard days." All 5×7 printable, $2.99, blank interior, back-of-card note. Tone: gentle self-care / mental health / chronic illness.

| SKU | Front description | Front saying | Back detail | Image | Status |
|---|---|---|---|---|---|
| CCF-01 | Soft illustrated bear tucked into a blanket | Sometimes a Blanket Is the Answer | "If you're reading this, please actually go get the blanket. Not as a joke, not as a metaphor. Go get the blanket, take off your shoes, and put the phone down for ten minutes. The world will be there when you get back." | TBD | draft |
| CCF-02 | Single illustrated strawberry with a permission-slip feel | Maybe You Just Need a Snack | "Eat the thing. Then decide how you feel. Some problems dissolve once your blood sugar comes back online. This is one of the cheap ones." | TBD | draft |
| CCF-03 | Round, soft illustrated hamster | It's OK to Feel All the Feelings | "Let it out or let it sit. Scream or stare at the wall. Cry at a commercial or don't. There's no wrong way to have feelings today. The only wrong move is pretending you don't have them." | TBD | published |
| CCF-04 | Sleepy illustrated panda in the good chair | You Deserve the Comfy Chair | "Take the chair. Take ten minutes. Take the rest of the afternoon if you can. You've been giving things away all week — time, energy, patience. Keep this one for yourself." | TBD | published |
| CCF-05 | Soft illustrated zebra (EDS-aware) | Sometimes the Hoof Beats Really Are Zebras | "Doctors learn early: when you hear hoofbeats, think horses, not zebras. It was meant to keep them from chasing rare diagnoses. Somewhere along the way it got used to dismiss the people who actually are zebras. You are not a horse. You were never a horse. The hoof beats are real and so are you." | TBD | draft |

**Source:** `documents/ana/catalog/comfy-feelings/listings.md` (full listings with title/desc/tags). Tags: 13 per card, 1 sober tag + mental health / self-care / encouragement focus; CCF-05 uses EDS-direct + chronic-illness tags (no sober tag).

---

## CSF — Sober Birthday Flowers (12 cards)

12 monthly sobriety anniversary cards. Each features the month's birth flower with meaning on the back. All 5×7 printable, $3–8, blank interior, back-of-card flower meaning. Tone: secular sobriety celebration.

| SKU | Front description | Front saying | Back detail | Image | Status |
|---|---|---|---|---|---|
| CSF-01 | January carnation illustration | Happy Sober Birthday | "The January birth flower is the carnation, symbolizing love, fascination, and pure affection. With its ruffled petals and sweet fragrance, the carnation has been a beloved flower for centuries, often worn to honor loved ones and mark special occasions." | TBD (art in Canva) | draft |
| CSF-02 | February violet illustration | Happy Sober Birthday | "The February birth flower is the violet, representing modesty, loyalty, and spiritual wisdom. These delicate purple blooms bring comfort and hope in the depths of winter, reminding us that beauty persists even in the coldest seasons." | TBD (art in Canva) | draft |
| CSF-03 | March daffodil illustration | Happy Sober Birthday | "The March birth flower is the daffodil, heralding new beginnings, rebirth, and undeniable optimism. As one of the first flowers to bloom in spring, the daffodil's cheerful yellow petals symbolize resilience and the promise of brighter days ahead." | TBD (art in Canva) | draft |
| CSF-04 | April daisy illustration | Happy Sober Birthday | "The April birth flower is the daisy, embodying innocence, purity, and loyal love. With their simple, joyful faces, daisies remind us to find beauty in simplicity and to approach life with a pure and open heart." | TBD (art in Canva) | draft |
| CSF-05 | May lily of the valley illustration | Happy Sober Birthday | "The May birth flower is the lily of the valley, symbolizing sweetness, happiness, and the return of happiness. These delicate, bell-shaped flowers fill the air with their enchanting fragrance each spring, marking the most joyous season of the year." | TBD (art in Canva) | draft |
| CSF-06 | June rose illustration | Happy Sober Birthday | "The June birth flower is the rose, the timeless symbol of love, passion, and romance. With its velvety petals and intoxicating fragrance, the rose has captivated hearts for millennia, making it the ultimate expression of deep affection." | TBD (art in Canva) | published |
| CSF-07 | July larkspur illustration | Happy Sober Birthday | "The July birth flower is the larkspur, representing positivity, lightness, and an open heart. These tall, colorful spires bloom throughout summer, their delicate flowers speaking to joy, celebration, and the warmth of the season." | TBD (art in Canva) | draft |
| CSF-08 | August gladiolus illustration | Happy Sober Birthday | "The August birth flower is the gladiolus, symbolizing strength, integrity, and moral character. Standing tall with sword-like leaves and dramatic flower spikes, the gladiolus represents resilience and the courage to stand firm in one's beliefs." | TBD (art in Canva) | draft |
| CSF-09 | September aster illustration | Happy Sober Birthday | "The September birth flower is the aster, embodying patience, elegance, and refined beauty. These daisy-like blooms burst with color in late summer and fall, bringing warmth and charm to the changing seasons." | TBD (art in Canva) | draft |
| CSF-10 | October marigold illustration | Happy Sober Birthday | "The October birth flower is the marigold, representing creativity, passion, and warm, radiant energy. With their bold orange and golden hues, marigolds light up autumn gardens, symbolizing the creative spark and adventurous spirit." | TBD (art in Canva) | draft |
| CSF-11 | November chrysanthemum illustration | Happy Sober Birthday | "The November birth flower is the chrysanthemum, symbolizing friendship, loyalty, and honest joy. Often called 'mums,' these lush, colorful blooms are a favorite for fall gardens, celebrating the deep bonds of friendship and the warmth of true loyalty." | TBD (art in Canva) | draft |
| CSF-12 | December paperwhite narcissus illustration | Happy Sober Birthday | "The December birth flower is the narcissus, particularly the paperwhite, representing hope, rebirth, and new beginnings. These fragrant, trumpet-shaped flowers bloom in the depths of winter, bringing the promise of light and renewal during the darkest days." | TBD (art in Canva) | draft |

**Source:** `documents/ana/sober-birthday-cards.csv` (12 rows, full Etsy listing data). Tags per `documents/ana/greeting-cards/sober-birthday-cards-tag-improvements.md` (13 tags each, 11 shared + month + flower).

**Front saying:** All 12 = "Happy Sober Birthday" (Catherine 2026-06-25).

---

## CTV — Tiny Victories (14 cards)

Snarky / self-aware / millennial-voice line. Tone: dark humor, gift-friendly, women 25–45. Format: 5×7, character on most cards; some are text-only (slogan IS the design).

| SKU | Front description | Front saying | Back detail | Image | Status |
|---|---|---|---|---|---|
| CTV-01 | Text graphic (no character) on watercolor blob background | You deserve the best (therapist) | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | draft |
| CTV-02 | Frog illustration | only positive vibes while facing oblivion | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | draft |
| CTV-03 | Cat illustration (horror tone) | the horror persists, but so do you | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | draft |
| CTV-04 | Meerkat illustration ⚠️ | and for the lady, perhaps a fucking break? | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | draft |
| CTV-05 | Text graphic (no character) | one day at a time | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | published |
| CTV-06 | Owl illustration | anxiety lives here | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | unfinished |
| CTV-07 | Text graphic (no character) | all this panic and still no disco | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | unfinished |
| CTV-08 | Goose illustration | it's time to call in silly | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | unfinished |
| CTV-09 | Dog illustration | I'm not qualified to diagnose people, but I have some theories | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | draft |
| CTV-10 | Capybara illustration ⚠️ | your anxiety is a lying ass hoe don't trust that bitch | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | unfinished |
| CTV-11 | Meerkat illustration (with paper airplanes pun → flying fox/fruit bat) | fold your worries into paper airplanes and turn them into flying fox | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | unfinished |
| CTV-12 | Text graphic (no character) on watercolor blob background | you are delightful(ly unhinged) | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | unfinished |
| CTV-13 | Text graphic (no character) | you tried therapy. Time to go bat shit crazy | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | unfinished |
| CTV-14 | Text graphic (no character) (curly apostrophe in source: "don't") | I don't think I meet the height requirements to ride your emotional roller coaster | Standard Tiny Victories back: frog icon + "Tiny Victories" title + brand name & logo + Etsy shop URL | TBD (art in Canva) | unfinished |

⚠️ = Etsy Mature Content flag required at listing setup.

**Source:** Front sayings from `memory/2026-06-07.md` (Catherine's dictation, all 14 captured). Character assignments from `documents/ana/products/sku-table.md` (CTV section).

**Open questions (carryover from 2026-06-07):** All resolved as of 2026-06-25.
- ~~CTV-01 character~~ → text graphic with watercolor blob background (Catherine 2026-06-25)
- ~~CTV-09 series pattern~~ → CTV-01 is text graphic, not a character series
- ~~Override check~~ → CTV-12 confirmed text graphic; CTV-05/07/13/14 stay text-only as designed
- ~~Front descriptions~~ → CTV-01 captured; rest already had character descriptions from sku-table.md
- ~~Back detail~~ → all 14 use standard Tiny Victories back (Catherine 2026-06-25)

---

## CSB — Sober Birthday Themed (2 cards)

"Happy Soberversary" themed kickoff (cupcake motif). Status: concept.

| SKU | Front description | Front saying | Back detail | Image | Status |
|---|---|---|---|---|---|
| CSB-01 | Blue cupcake illustration (him variant) | Happy Soberversary - you're crushing it! | Standard back: brand name + logo + Etsy shop URL | TBD (art in Canva) | draft |
| CSB-02 | Pink cupcake illustration (her variant) | Happy Soberversary - we're so proud of you! | Standard back: brand name + logo + Etsy shop URL | TBD (art in Canva) | draft |

**Source:** `documents/ana/products/sku-table.md` (CSB section).

**Open:** Image still TBD (art in Canva). All copy fields filled (Catherine 2026-06-25).

---

## Inventory Summary

| Line | Cards | Status (per-line) | Source of front sayings | Source of back detail |
|---|---|---|---|---|
| CCF | 5 | 3 draft, 2 published; no complete, no unfinished | comfy-feelings/listings.md ✓ | comfy-feelings/listings.md ✓ |
| CSF | 12 | 11 draft + 1 published (CSF-06); no complete, no unfinished | "Happy Sober Birthday" (Catherine 2026-06-25) ✓ | sober-birthday-cards.csv ✓ |
| CTV | 14 | 5 draft, 1 published, 8 unfinished; no complete | memory/2026-06-07.md ✓ | Standard Tiny Victories back (Catherine 2026-06-25) ✓ |
| CSB | 2 | 2 draft; no complete, no unfinished | Catherine 2026-06-25 ✓ | Standard back (Catherine 2026-06-25) ✓ |
| **Total** | **33** | 3 published · 21 draft · 0 complete · 9 unfinished | | |

**Status legend (Etsy / production readiness):**
- `published` — live on Etsy (CCF-03, CCF-04, CSF-06, CTV-05)
- `draft` — created in Etsy but not yet published (CCF-01, 02, 05; CSF-01–05, 07–12; CTV-01–04, 09; CSB-01, 02)
- `complete` — design finished (mockups + downloadables + copy), not yet entered into Etsy (currently 0 cards)
- `unfinished` — design exists but is not complete (CTV-06, 07, 08, 10, 11, 12, 13, 14)

---

## Recovery Note (2026-06-23)

Original `documents/ana/catalog/greeting-card-catalog.md` was created and edited on 2026-06-21 but **never committed to git** before the `git reset --hard origin/main` on 2026-06-23. This file is a rebuild from:

- `documents/ana/catalog/comfy-feelings/listings.md` (CCF, full)
- `documents/ana/sober-birthday-cards.csv` (CSF, back detail only)
- `documents/ana/greeting-cards/sober-birthday-cards-tag-improvements.md` (CSF tags)
- `documents/ana/products/sku-table.md` (CTV characters, CSB existence)
- `memory/2026-06-07.md` (CTV front sayings — all 14 captured via Catherine's dictation)
- Catherine's verbal confirmation of schema: SKU | Front description | Front saying | Back detail | Image (TBD)

**What's missing and needs Catherine's dictation to complete:**
1. ~~CTV front descriptions~~ ✓ Resolved 2026-06-25 — CTV-01 captured as text graphic on watercolor blob background; rest already had descriptions
2. ~~CSF front sayings~~ ✓ Resolved 2026-06-25 — all 12 = "Happy Sober Birthday"
3. ~~CTV back detail~~ ✓ Resolved 2026-06-25 — all 14 = standard Tiny Victories back (frog icon + title + brand + Etsy URL)
4. ~~CSB all fields~~ ✓ Resolved 2026-06-25 — CSB-01 blue cupcake / "you're crushing it!"; CSB-02 pink cupcake / "we're so proud of you!"; both with standard back
5. Image fields — art lives in Canva for all CTV/CSF/CSB cards; no export URL or .png yet (Etsy doesn't allow AI-assisted uploads per their policy, so the placeholder holds for now; may export later for social media). CCF cards still pending Barbara art delivery.