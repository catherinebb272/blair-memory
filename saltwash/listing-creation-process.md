# Saltwash Prints — Listing Creation Process

**Status:** v2 (2026-07-03)
**Use:** Step-by-step for any new print, from image input to Etsy-ready listing.
**Locked decisions so far:** JPG Q95 delivery format · 5 standard print sizes (5×7, 8×10, 11×14, 16×24, 18×24) · 18×24 is the master (built first, downscaled to the other 4) · Lanczos-only resampling · "Digital Prints" category · "Designed by seller" attribute · "This design was created with AI assistance under the creative direction of the seller." disclosure language.

> **Workflow change 2026-07-03:** v1 of this doc described a PNG-first pipeline (native 2:3/4:5 crops → upscale big sizes → batch convert to JPG). The v2 pipeline is JPG-only, master-first, Photoshop-in-the-loop. Plover was the first print built this way. The old pipeline's two parent-level scripts (`build-big-sizes.sh`, `build-jpg-delivery.sh`) have been deleted; `build-print-sizes.py` is the new tool.

---

## Inputs from Catherine (per listing)

- **Source image** — the watercolor render (JPG or PNG), ideally 3000×4000+ for clean print crops. Note orientation (portrait/landscape) and any Firefly-rotation quirks. Sources come as JPG because Firefly exports JPG by default.
- **Print brief** — 1-3 sentences: time of day, place, mood, what's in the scene. This becomes the hero opening in the listing.
- **Print name** — short kebab-case name (e.g., `beach-dog`, `plover`, `lonely-houses`). Used for file paths, folder names, and the `print_name_<size>_300dpi.jpg` filename pattern.

---

## What I do

### 1. Build the 18×24 review master

- Take the source. If it's sideways/rotated, rotate to correct orientation.
- Apply any print-direction corrections (e.g., horizontal flip if a figure should face the other way in the final print).
- Crop to the target aspect ratio if needed (18×24 is 3:4, ratio 0.75).
- **Lanczos upscale to 5400 × 7200** (18×24 @ 300 DPI).
- Save as `<print-name>-18x24-review.png` in `saltwash/<print-name>/`. PNG chosen here (not JPG) for archival quality on the pre-cleanup master.
- **Push to `catherinebb272/blair-documents` on a new branch** (e.g., `beach-plover-print`) because the file is 40-50 MB and too big to send through Discord. Commit message: `Saltwash Prints: <print-name> 18x24 review master (Lanczos)`.

### 2. Wait for Catherine's Photoshop pass

- Catherine retrieves the 18×24 review master from GitHub.
- Opens in Photoshop, fixes any AI artifacts, stray upscaling glitches, or compositional issues.
- Returns the cleaned master to me as a JPG (usually 10-15 MB — fits through chat).
- Also saves the cleaned master locally as `saltwash/<print-name>/print-sizes/<print-name>_18x24_300dpi.jpg`. This single file is BOTH the Etsy 18×24 upload AND the source for the 4 downscaled sizes.

### 3. Derive the 4 other print sizes

- Run `saltwash/build-print-sizes.py` with the cleaned 18×24 master:
  ```bash
  python3 saltwash/build-print-sizes.py \
      saltwash/<print-name>/print-sizes/<print-name>_18x24_300dpi.jpg \
      <print-name>
  ```
- The script:
  - Crops the master to each target's aspect ratio (centered by default).
  - Resizes to target pixel dimensions with Lanczos.
  - Saves as JPG Q95 (visually lossless for continuous-tone watercolor).
  - Checks each file under Etsy's 20MB upload limit; flags any over.
- If Catherine has per-size crop instructions (split top/bottom, all from top, recenter the figure, etc.), ask her for them first. Default is centered; non-default crops either go through the optional `CROP_OFFSETS` env var or as a one-off `convert` step before running the script.

### 4. Write the per-print README

- Document: source dimensions, build steps (especially any flips/rotations/corrections), file table, crop math if non-centered, why-18×24-first rationale (unchanged from before: it absorbs the most aggressive resampling, so Catherine reviews the actual master that all other sizes derive from).
- Reference `build-print-sizes.py` instead of any per-print build script. The new workflow has no per-print build script — the parent script is generic.

### 5. Listing copy generation

- **Title** (140 char max): `[Mood] + [Subject] + [Medium] + [Place] + [Format]` formula, with 3 alternates.
- **Tags** (13 max): curated mix of primary, secondary, long-tail, medium-volume, and format tags.
- **Description** (template below).

### 6. Shop-level content (one-time, locked 2026-06-18)

The following is **universal across all Saltwash print listings** and was written once in the customer-comms folder. It is not a per-listing content decision.

- **Message to buyer** — `saltwash/customer-comms/message-to-buyer.md` (+ .pdf). 86-word text covering the 5 file sizes, paper advice, and "save this message" reminder. Set on listing #1, then copy from an existing Saltwash listing into each new listing's "Message to buyer" field. Lives in order confirmation email + buyer's Purchases page forever.
- **Printing tips reference** — `saltwash/customer-comms/printing-tips.md` (+ .pdf). ~310-word copy-paste reference for buyer questions. Not auto-delivered; use when responding to convos/emails.

**Per-listing implication:** When setting up a new listing, copy the message-to-buyer text from any existing Saltwash listing (or from the customer-comms file) into the new listing's message field. 30-second copy-paste. **Do not edit the text per listing** — universal consistency is the point. The text is plain-text safe; Etsy's message field doesn't render markdown.

### 7. Description template (sections, in order)

1. **Hero** — print-specific, 1-2 sentences from the brief. Time + place + mood in one breath.
2. **Top banner** (italicized, just below hero) — *"This is a digital download. No physical item will be shipped."* Multiple disclosure of digital nature because mockup buyers won't read carefully.
3. **What you'll receive** — 5 JPG files at 300 DPI Q95, sizes listed with ratio notes.
4. **How it's made** — place-anchored origin story + AI-assisted generation + tools used line (Gemini or Firefly, whichever applies).
5. **Please note** — Frame not included. Colors may vary slightly.
6. **Terms of use** — Personal use only, no resale/redistribution, print for home/gifts.
7. **AI disclosure** (italicized, just before signature) — *"This design was created with AI assistance under the creative direction of the seller."* This is the 2026 Etsy-required disclosure line.
8. **Shop signature** — `© Saltwash Prints — Outer Banks, NC`.

### 8. Output deliverable

- **Files**: 5 JPGs in `saltwash/<print-name>/print-sizes/` on GitHub. The 18×24 JPG is the master (post-Photoshop); the other 4 are Lanczos downsizes.
- **Working files**: source + pre-Photoshop 18×24 review master in `saltwash/<print-name>/` (kept for reference; the review master was the GitHub transfer artifact).
- **Listing draft**: `saltwash/listings/<print-name>-listing-draft.md` on GitHub, with title / alternates / 13 tags / description / checklist / per-print notes.

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

- **JPG Q95 over PNG**: PNG files exceeded Etsy's 20MB upload limit on 16×24 and 18×24. JPG at quality 95 is visually lossless for continuous-tone watercolor and brings the largest file to ~12MB. The new v2 pipeline dropped PNG archival entirely — the source is already JPG, the deliverable is JPG, no PNG stage needed.
- **Lanczos resampling over AI upscale**: pure interpolation, no hallucinated detail. Matters for watercolor where the loose texture must be preserved. If a print looks soft at the largest sizes, swap just those files for Firefly upscales; the rest of the size matrix stays untouched.
- **5 standard US frame sizes**: 5×7, 8×10, 11×14, 16×24, 18×24. These cover ~95% of US wall-art frame purchases. International (A-series) sizes deferred per launch lineup decision.
- **18×24 is the master** (v2 change): the largest size absorbs the most aggressive resampling from the source. Building it first means Catherine reviews the actual master that all other sizes derive from. Any artifact she fixes in Photoshop propagates to every print size automatically. v1 (beach-dog, beach-walk) had her reviewing 2:3 / 4:5 native crops instead, which then got re-upscaled — fixing an artifact required touching multiple files.
- **GitHub as the transfer mechanism** for the 18×24 review master: the file is 40-50 MB, too big to attach in Discord or send through chat. Standard pattern: push to a new branch in `catherinebb272/blair-documents`, Catherine merges or retrieves when ready.
- **Single top banner for digital-download disclosure**: doubles up with the "Please note" section because mockup-first buyers won't read carefully. Better to over-disclose than field the same question in DMs.
- **AI disclosure at the end + tool named in process**: woven disclosure in "How it's made" makes the AI assistance part of the brand story, not a tacked-on legal line. The italicized line at the end satisfies Etsy's 2026 compliance requirement.

---

## v1 → v2 changelog

- **Pipeline:** PNG-first (native 2:3/4:5 crops, then upscales) → JPG-only, master-first, Photoshop-in-the-loop.
- **Master identification:** was 2:3 / 4:5 native crops (then upscaled for big sizes) → now 18×24 (built first, downscaled for the other 4).
- **Transfer mechanism for the 18×24 review master:** ad-hoc (no standard pattern) → push to a new branch in `catherinebb272/blair-documents`.
- **Scripts:** `build-big-sizes.sh` + `build-jpg-delivery.sh` (referenced deleted PNG paths) → `build-print-sizes.py` (single tool, per-call, JPG Q95 output).
- **Per-print build.sh:** was required (rotation, native crops, downscales) → no longer needed (the 18×24 build is one-off per print, the downscale is a single script call).
- **Print masters on disk:** 5 PNGs + 5 JPGs + 2 native crops per print → 1 pre-Photoshop review PNG + 5 delivery JPGs per print (no native crops, no PNG archival in the delivery batch).
- **First print built with v2:** plover (2026-07-03). Worked cleanly, no quality issues, no Etsy limit hits.
