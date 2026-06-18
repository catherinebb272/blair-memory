# Sober Birthday Card Tags — v2 Improvements

**Date:** 2026-06-18
**Scope:** All 12 cards (CSF-01 January Carnation → CSF-12 December Narcissus)
**Constraint:** Etsy allows 13 tags, max 20 characters each.

---

## TL;DR

The original tag list had 4 weak/generic tags (`anniversary`, `encouragement`, `gift`, `support`) and 5 obvious high-intent tags were missing entirely. Replaced those 4 + the weak `greeting card` slot with: `sober birthday`, `birthday card`, `sober birthday card`, `milestone`, `instant download`. Net result: same 13 tags, much higher purchase intent, much less generic-competition waste.

---

## What changed (per card)

| Old tag | New tag | Why |
|---|---|---|
| `anniversary` | *(dropped)* | Search term is dominated by wedding anniversary. Sobriety buyers don't search it. We already own `soberversary`, which is the recovery-specific term. |
| `encouragement` | *(dropped)* | Way too generic. Drowns in sympathy / get-well / cheer-up listings. |
| `gift` | *(dropped)* | "Gift" alone has millions of Etsy listings. We cannot rank for it as a small shop. |
| `support` | *(dropped)* | Same problem — generic with no purchase-intent signal. |
| `greeting card` | `sober birthday card` | "Greeting card" is dominated by weddings, sympathy, thank-you. A buyer searching "sober birthday card" is *exactly* our customer. |
| *(missing)* | `sober birthday` | This is the obvious high-intent buyer term. Top competitor (m&h invites) uses it in their listing title. We were missing it entirely. |
| *(missing)* | `birthday card` | The actual product type. Vastly more search volume than "greeting card" for our use case. |
| *(missing)* | `milestone` | ANA's own brand language — we sell *sober milestone* coins, the card line ties to that. Buyers searching "sober milestone" are our target. |
| *(missing)* | `instant download` | High-intent digital-buyer signal. Pairs with `downloadable` + `printable`. |

## The new 13-tag list (all 12 cards)

| # | Tag | Length | Role |
|---|---|---|---|
| 1 | `sobriety` | 8 | Head term |
| 2 | `soberversary` | 12 | Niche gold — recovery-specific anniversary |
| 3 | `sober birthday` | 14 | High-intent buyer phrase |
| 4 | `recovery` | 8 | Head term |
| 5 | `addiction recovery` | 18 | High-intent |
| 6 | `sober birthday card` | 19 | Niche + product type — the obvious phrase |
| 7 | `birthday card` | 13 | Product type |
| 8 | `milestone` | 9 | ANA brand language |
| 9 | `downloadable` | 12 | Format |
| 10 | `printable` | 9 | Format |
| 11 | `instant download` | 16 | High-intent digital |
| 12 | `{month}` | 3–9 | Per-card |
| 13 | `{flower}` | 4–19 | Per-card |

The two per-card tags (12 + 13) are the month name and the flower name, e.g. `january` + `carnation`, `february` + `violet`, etc. May's `lily of the valley` is 19 chars — under the 20-char limit.

---

## Why I didn't add these (tempting, but tradeoffs)

- **`5x7`** — buyers don't really search by size on Etsy. Skip.
- **`pdf`** — implied by `downloadable` + `printable` + `instant download`. Three format tags is plenty.
- **`card for her` / `card for him`** — narrows reach. These cards work for anyone. The line doesn't need gendered targeting.
- **`AA birthday` / `NA birthday`** — too program-specific; ANA is secular by brand design. Would muddy the positioning.
- **`sober curious`** — wrong audience. These cards celebrate people who *are* sober, not people considering it.
- **`floral birthday`** — nice phrase but lower volume than `birthday card`. Tradeoff: replaced by stronger terms.
- **`birth flower`** — same logic. `carnation`/`rose`/etc. cover this for search purposes.
- **`sober gift` / `recovery gift`** — good phrases, but we already have 11 strong shared tags. With only 2 slots per card left, month + flower are higher value.

## Alternative 13th tag worth considering later

If a card underperforms in Etsy Stats after a few weeks, swap `instant download` for `sober gift` (10 chars) on that one card and re-test. `sober gift` catches the audience who lands on a sober card while shopping for a sober person, not necessarily for a birthday. Worth A/B testing.

---

## Files

- **`sober-birthday-cards-title-desc-tags.csv`** — updated 3-column CSV (Title, Description, Tags). Same structure as before, just the Tags column improved. Ready to drop into your upload flow.
- **`sober-birthday-cards-tags-only.csv`** — new file. 12 rows × 13 tag columns for quick copy-paste into Etsy's tag field. SKUs preserved (CSF-01..12).
- **`sober-birthday-cards-tag-improvements.md`** — this file.

The original 12-column master at `documents/ana/sober-birthday-cards.csv` still has the malformed-row bug (closing quote missing on description, fields jam onto one line). It parses fine via the `read` tool but Python's csv module can't read it. Don't try to programmatically re-process that one — work from the 3-column file.
