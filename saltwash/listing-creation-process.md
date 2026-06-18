# Saltwash Prints — Listing Creation Process

**Status:** v1 (2026-06-17)
**Use:** Step-by-step for any new print, from image input to Etsy-ready listing.
**Locked decisions so far:** JPG Q95 delivery format · "Digital Prints" category · "Designed by seller" attribute · "This design was created with AI assistance under the creative direction of the seller." disclosure language.

---

## Inputs from Catherine (per listing)

- **Source image** — the watercolor render (PNG), ideally 3000×4000+ for clean print crops. Note orientation (portrait/landscape) and any Gemini-rotation quirks.
- **Print brief** — 1-3 sentences: time of day, place, mood, what's in the scene. This becomes the hero opening.
- **Print name** — short title-cased name (e.g., "Dog on the Beach", "Lonely Houses", "Lady Reading"). Used for file paths and folder names.

---

## What I do

### 1. Image processing (scripted)

- If source is sideways/rotated (Gemini quirk — landscape design in portrait frame), rotate to correct orientation and save the rotated master.
- Crop to **2:3** and **4:5** native ratios, biased to keep the figure near center.
- Render 5 print sizes at 300 DPI:
  - `5×7` (1500×2100) — downscale from 2:3 native
  - `8×10` (2400×3000) — downscale from 4:5 native
  - `11×14` (3300×4200) — small horizontal crop from 4:5, then 1.17× upscale
  - `16×24` (4800×7200) — 1.5–2× upscale from 2:3 native
  - `18×24` (5400×7200) — horizontal crop from 4:5, then ~2× upscale
- Generate JPG Q95 delivery versions of all 5 (PNG masters stay alongside).
- Push to `blair-documents` repo under `saltwash/[print-name]/`.
- File names: `[print-name]-[size].png` and `[print-name]-[size].jpg`.

### 2. Listing copy generation

- **Title** (140 char max): `[Mood] + [Subject] + [Medium] + [Place] + [Format]` formula, with 3 alternates.
- **Tags** (13 max): curated mix of primary, secondary, long-tail, medium-volume, and format tags.
- **Description** (template below).

### 3. Shop-level content (one-time, locked 2026-06-18)

The following is **universal across all Saltwash print listings** and was written once in the customer-comms folder. It is not a per-listing content decision.

- **Message to buyer** — `saltwash/customer-comms/message-to-buyer.md` (+ .pdf). 86-word text covering the 5 file sizes, paper advice, and "save this message" reminder. Set on listing #1, then copy from an existing Saltwash listing into each new listing's "Message to buyer" field. Lives in order confirmation email + buyer's Purchases page forever.
- **Printing tips reference** — `saltwash/customer-comms/printing-tips.md` (+ .pdf). ~310-word copy-paste reference for buyer questions. Not auto-delivered; use when responding to convos/emails.

**Per-listing implication:** When setting up a new listing, copy the message-to-buyer text from any existing Saltwash listing (or from the customer-comms file) into the new listing's message field. 30-second copy-paste. **Do not edit the text per listing** — universal consistency is the point. The text is plain-text safe; Etsy's message field doesn't render markdown.

### 4. Description template (sections, in order)

1. **Hero** — print-specific, 1-2 sentences from the brief. Time + place + mood in one breath.
2. **Top banner** (italicized, just below hero) — *"This is a digital download. No physical item will be shipped."* Multiple disclosure of digital nature because mockup buyers won't read carefully.
3. **What you'll receive** — 5 JPG files at 300 DPI Q95, sizes listed with ratio notes.
4. **How it's made** — place-anchored origin story + AI-assisted generation + tools used line (Gemini named).
5. **Please note** — Frame not included. Colors may vary slightly.
6. **Terms of use** — Personal use only, no resale/redistribution, print for home/gifts.
7. **AI disclosure** (italicized, just before signature) — *"This design was created with AI assistance under the creative direction of the seller."* This is the 2026 Etsy-required disclosure line.
8. **Shop signature** — `© Saltwash Prints — Outer Banks, NC`.

### 5. Output deliverable

- **Files**: 5 JPGs + 3–5 PNG masters in `saltwash/[print-name]/` on GitHub.
- **Listing draft**: `saltwash/listings/[print-name]-listing-draft.md` on GitHub, with title / alternates / 13 tags / description / checklist / per-print notes.

---

## What Catherine does on Etsy (per listing)

- [ ] Open new listing
- [ ] Set Type to **Digital**
- [ ] Set Category to **Digital Prints** (Art & Collectibles > Prints > Digital Prints)
- [ ] Set "Who designed it?" attribute to **Designed by seller**
- [ ] Check the **AI Generation** disclosure box
- [ ] Upload 5 JPG files (download from GitHub)
- [ ] Copy title from listing.md
- [ ] Copy description from listing.md
- [ ] Copy 13 tags from listing.md
- [ ] Set price ($9.99 single, per brand-kit Section 14)
- [ ] Set quantity (1, or unlimited for digital)
- [ ] Add 1–3 mockup photos (print in a frame or room scene)
- [ ] Copy message-to-buyer from any existing Saltwash listing (or from `saltwash/customer-comms/message-to-buyer.md`) into the new listing's message field. Do not edit.
- [ ] Publish

---

## Voice rules (carry-over from brand kit Section 2)

- **No triple repetition** ("X, Y, and Z") — one per piece max, vary the rhythm
- **No "no X, no Y, no Z" negation lists** — one or two is fine, three reads as AI
- **No "this not that" structural framing** — use sparingly, not as a section spine
- **Specific over general** (Outer Banks, not "coastal")
- **Em-dashes** (—), no exclamation points
- **Read-aloud test**: sounds like someone who's been to the OBX → ship it. Sounds like a copywriting template → revise.

---

## Required Etsy attributes (2026 policy for AI-assisted digital products)

- **"Designed by seller"** — required attribute in the listing's "Who designed it?" field. Accurate because Catherine's creative direction (subject, palette, place anchor, refinement) is the design input; AI is the tool.
- **AI Generation checkbox** — required disclosure toggle at the listing-creation step.
- **AI disclosure line in description** — required text, italicized near the end of the description (template section 7 above).

---

## Why these decisions

- **JPG Q95 over PNG**: PNG files exceeded Etsy's 20MB upload limit on 16×24 and 18×24. JPG at quality 95 is visually lossless for continuous-tone watercolor and brings the largest file to ~9MB. See `saltwash/build-jpg-delivery.py`.
- **Lanczos resampling over AI upscale**: pure interpolation, no hallucinated detail. Matters for watercolor where the loose texture must be preserved. If a print looks soft at the largest sizes, swap just those files for Firefly upscales; source crops stay untouched.
- **5 standard US frame sizes**: 5×7, 8×10, 11×14, 16×24, 18×24. These cover ~95% of US wall-art frame purchases. International (A-series) sizes deferred per launch lineup decision.
- **Single top banner for digital-download disclosure**: doubles up with the "Please note" section because mockup-first buyers won't read carefully. Better to over-disclose than field the same question in DMs.
- **AI disclosure at the end + Gemini named in process**: woven disclosure in "How it's made" makes the AI assistance part of the brand story, not a tacked-on legal line. The italicized line at the end satisfies Etsy's 2026 compliance requirement.