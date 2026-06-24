# Greeting Card Catalog

Master inventory of every ANA greeting card. Single source of truth for what exists, what's in progress, and what's TBD across all card lines.

**Schema:** `SKU | Front description | Front saying | Back detail | Image`

- **SKU** — internal ID (`CSF-##`, `CCF-##`, `CTV-##`, `CSB-##`)
- **Front description** — what the card front looks like (illustration + visual style)
- **Front saying** — the sentiment / quote / phrase printed on the front
- **Back detail** — the back-of-card copy / note (full text where finalized)
- **Image** — final asset (TBD until Barbara delivers)

**Last update:** 2026-06-23 (rebuilt after `greeting-card-catalog.md` lost in git reset; see Recovery Note below).

---

## CCF — Comfy Feelings (5 cards)

Tagline: "For the hard days." All 5×7 printable, $2.99, blank interior, back-of-card note. Tone: gentle self-care / mental health / chronic illness.

| SKU | Front description | Front saying | Back detail | Image |
|---|---|---|---|---|
| CCF-01 | Soft illustrated bear tucked into a blanket | Sometimes a Blanket Is the Answer | "If you're reading this, please actually go get the blanket. Not as a joke, not as a metaphor. Go get the blanket, take off your shoes, and put the phone down for ten minutes. The world will be there when you get back." | TBD |
| CCF-02 | Single illustrated strawberry with a permission-slip feel | Maybe You Just Need a Snack | "Eat the thing. Then decide how you feel. Some problems dissolve once your blood sugar comes back online. This is one of the cheap ones." | TBD |
| CCF-03 | Round, soft illustrated hamster | It's OK to Feel All the Feelings | "Let it out or let it sit. Scream or stare at the wall. Cry at a commercial or don't. There's no wrong way to have feelings today. The only wrong move is pretending you don't have them." | TBD |
| CCF-04 | Sleepy illustrated panda in the good chair | You Deserve the Comfy Chair | "Take the chair. Take ten minutes. Take the rest of the afternoon if you can. You've been giving things away all week — time, energy, patience. Keep this one for yourself." | TBD |
| CCF-05 | Soft illustrated zebra (EDS-aware) | Sometimes the Hoof Beats Really Are Zebras | "Doctors learn early: when you hear hoofbeats, think horses, not zebras. It was meant to keep them from chasing rare diagnoses. Somewhere along the way it got used to dismiss the people who actually are zebras. You are not a horse. You were never a horse. The hoof beats are real and so are you." | TBD |

**Source:** `documents/ana/catalog/comfy-feelings/listings.md` (full listings with title/desc/tags). Tags: 13 per card, 1 sober tag + mental health / self-care / encouragement focus; CCF-05 uses EDS-direct + chronic-illness tags (no sober tag).

---

## CSF — Sober Birthday Flowers (12 cards)

12 monthly sobriety anniversary cards. Each features the month's birth flower with meaning on the back. All 5×7 printable, $3–8, blank interior, back-of-card flower meaning. Tone: secular sobriety celebration.

| SKU | Front description | Front saying | Back detail | Image |
|---|---|---|---|---|
| CSF-01 | January carnation illustration | TBD (Catherine to confirm — likely "Happy Sober Birthday" or month-specific) | "The January birth flower is the carnation, symbolizing love, fascination, and pure affection. With its ruffled petals and sweet fragrance, the carnation has been a beloved flower for centuries, often worn to honor loved ones and mark special occasions." | TBD |
| CSF-02 | February violet illustration | TBD | "The February birth flower is the violet, representing modesty, loyalty, and spiritual wisdom. These delicate purple blooms bring comfort and hope in the depths of winter, reminding us that beauty persists even in the coldest seasons." | TBD |
| CSF-03 | March daffodil illustration | TBD | "The March birth flower is the daffodil, heralding new beginnings, rebirth, and undeniable optimism. As one of the first flowers to bloom in spring, the daffodil's cheerful yellow petals symbolize resilience and the promise of brighter days ahead." | TBD |
| CSF-04 | April daisy illustration | TBD | "The April birth flower is the daisy, embodying innocence, purity, and loyal love. With their simple, joyful faces, daisies remind us to find beauty in simplicity and to approach life with a pure and open heart." | TBD |
| CSF-05 | May lily of the valley illustration | TBD | "The May birth flower is the lily of the valley, symbolizing sweetness, happiness, and the return of happiness. These delicate, bell-shaped flowers fill the air with their enchanting fragrance each spring, marking the most joyous season of the year." | TBD |
| CSF-06 | June rose illustration | TBD | "The June birth flower is the rose, the timeless symbol of love, passion, and romance. With its velvety petals and intoxicating fragrance, the rose has captivated hearts for millennia, making it the ultimate expression of deep affection." | TBD |
| CSF-07 | July larkspur illustration | TBD | "The July birth flower is the larkspur, representing positivity, lightness, and an open heart. These tall, colorful spires bloom throughout summer, their delicate flowers speaking to joy, celebration, and the warmth of the season." | TBD |
| CSF-08 | August gladiolus illustration | TBD | "The August birth flower is the gladiolus, symbolizing strength, integrity, and moral character. Standing tall with sword-like leaves and dramatic flower spikes, the gladiolus represents resilience and the courage to stand firm in one's beliefs." | TBD |
| CSF-09 | September aster illustration | TBD | "The September birth flower is the aster, embodying patience, elegance, and refined beauty. These daisy-like blooms burst with color in late summer and fall, bringing warmth and charm to the changing seasons." | TBD |
| CSF-10 | October marigold illustration | TBD | "The October birth flower is the marigold, representing creativity, passion, and warm, radiant energy. With their bold orange and golden hues, marigolds light up autumn gardens, symbolizing the creative spark and adventurous spirit." | TBD |
| CSF-11 | November chrysanthemum illustration | TBD | "The November birth flower is the chrysanthemum, symbolizing friendship, loyalty, and honest joy. Often called 'mums,' these lush, colorful blooms are a favorite for fall gardens, celebrating the deep bonds of friendship and the warmth of true loyalty." | TBD |
| CSF-12 | December paperwhite narcissus illustration | TBD | "The December birth flower is the narcissus, particularly the paperwhite, representing hope, rebirth, and new beginnings. These fragrant, trumpet-shaped flowers bloom in the depths of winter, bringing the promise of light and renewal during the darkest days." | TBD |

**Source:** `documents/ana/sober-birthday-cards.csv` (12 rows, full Etsy listing data). Tags per `documents/ana/greeting-cards/sober-birthday-cards-tag-improvements.md` (13 tags each, 11 shared + month + flower).

**Open question for Catherine:** Front saying for all 12 CSF cards. The surviving CSV/listing files describe the back-of-card flower meaning but do not capture what the front saying is. Need Catherine's dictation to fill these in.

---

## CTV — Tiny Victories (14 cards)

Snarky / self-aware / millennial-voice line. Tone: dark humor, gift-friendly, women 25–45. Format: 5×7, character on most cards; some are text-only (slogan IS the design).

| SKU | Front description | Front saying | Back detail | Image |
|---|---|---|---|---|
| CTV-01 | TBD (character or text-only? — see open Q) | you deserve the best therapist | TBD | TBD |
| CTV-02 | Frog illustration | only positive vibes while facing oblivion | TBD | TBD |
| CTV-03 | Cat illustration (horror tone) | the horror persists, but so do you | TBD | TBD |
| CTV-04 | Meerkat illustration ⚠️ | and for the lady, perhaps a fucking break? | TBD | TBD |
| CTV-05 | Text-only (no character) | one day at a time | TBD | TBD |
| CTV-06 | Owl illustration | anxiety lives here | TBD | TBD |
| CTV-07 | Text-only (no character) | all this panic and still no disco | TBD | TBD |
| CTV-08 | Goose illustration | it's time to call in silly | TBD | TBD |
| CTV-09 | Dog illustration | I'm not qualified to diagnose people, but I have some theories | TBD | TBD |
| CTV-10 | Capybara illustration ⚠️ | your anxiety is a lying ass hoe don't trust that bitch | TBD | TBD |
| CTV-11 | Meerkat illustration (with paper airplanes pun → flying fox/fruit bat) | fold your worries into paper airplanes and turn them into flying fox | TBD | TBD |
| CTV-12 | Text-only (no character) | you are delightfully unhinged | TBD | TBD |
| CTV-13 | Text-only (no character) | you tried therapy. Time to go bat shit crazy | TBD | TBD |
| CTV-14 | Text-only (no character) (curly apostrophe in source: "don't") | I don't think I meet the height requirements to ride your emotional roller coaster | TBD | TBD |

⚠️ = Etsy Mature Content flag required at listing setup.

**Source:** Front sayings from `memory/2026-06-07.md` (Catherine's dictation, all 14 captured). Character assignments from `documents/ana/products/sku-table.md` (CTV section).

**Open questions (carryover from 2026-06-07):**
- **CTV-01 character:** Best Therapist — character (which animal?) or text-only?
- **CTV-09 series pattern:** Is CTV-01 + CTV-09 a "character-as-therapist" series, or one-offs?
- **Override check:** Any of CTV-05 / 07 / 12 / 13 / 14 that should have a character instead of text-only?
- **Front descriptions:** I have character names but no visual description dictation for each card. Need Catherine to fill in.
- **Back detail:** None captured yet for CTV. Need Catherine to dictate.

---

## CSB — Sober Birthday Themed (2 cards)

"Happy Soberversary" themed kickoff (cupcake motif). Status: concept.

| SKU | Front description | Front saying | Back detail | Image |
|---|---|---|---|---|
| CSB-01 | TBD (cupcake illustration, him variant) | TBD | TBD | TBD |
| CSB-02 | TBD (cupcake illustration, her variant) | TBD | TBD | TBD |

**Source:** `documents/ana/products/sku-table.md` (CSB section).

**Open:** All fields TBD. Need Catherine's dictation for front saying + back detail + front description.

---

## Inventory Summary

| Line | Cards | Status | Source of front sayings | Source of back detail |
|---|---|---|---|---|
| CCF | 5 | Drafted, awaiting Barbara art | comfy-feelings/listings.md ✓ | comfy-feelings/listings.md ✓ |
| CSF | 12 | Listed on Etsy; awaiting front saying dictation | TBD (need Catherine) | sober-birthday-cards.csv ✓ |
| CTV | 14 | Concept → prototype pick; awaiting back detail + front descriptions | memory/2026-06-07.md ✓ | TBD (need Catherine) |
| CSB | 2 | Concept; all fields TBD | TBD (need Catherine) | TBD (need Catherine) |
| **Total** | **33** | | | |

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
1. CSF front sayings (12 cards) — not in any surviving file
2. CTV front descriptions (14 cards) — character names survive, visual descriptions don't
3. CTV back detail (14 cards) — never captured
4. CSB all fields (2 cards) — concept only
5. All Image fields — pending Barbara art delivery