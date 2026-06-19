# Etsy Listing Draft — Beach Walk

**Status:** Draft v1 — first pass, awaiting Catherine's image review (she may revise the brief after seeing the final renders, since the sunset was less saturated in the portrait crop than the original landscape generation)
**Date:** 2026-06-18
**AI source:** [TO CONFIRM — same as dog-on-the-beach (Gemini 3.1 + Nano-Banana) or different?]
**Orientation:** Portrait (3:4 source, rendered to 2:3 and 4:5 crops)
**Working name note:** Folder is `beach-walk`. Brand kit previously called this "Walk on the Beach (couple)." Use **Beach Walk** as the listing title. The two read as the same product; folder convention is the source of truth.
**Template:** See `saltwash/listing-creation-process.md` for the reusable recipe this listing follows.

---

## Title (100 chars)

`Sunset Beach Walk Watercolor Print, Couple on Outer Banks Shore, Coastal Wall Art, Digital Download`

**Title formula used:** `[Mood] + [Subject] + [Medium] + [Place] + [Format]`

Alternates if title needs to test different SEO:
- `Twilight Beach Walk Watercolor Print, Outer Banks Couple Wall Art, Coastal Decor, Digital Download` (99 chars)
- `Quiet Beach Walk Watercolor Print, Two Figures on Outer Banks Shore, Coastal Wall Art, Digital Download` (105 chars)

---

## Tags (13 of 13)

1. coastal wall art
2. beach watercolor
3. sunset art
4. blue grey decor
5. outer banks art
6. beach walk art
7. obx sunset
8. coastal couple
9. minimalist coastal
10. watercolor landscape
11. couple art
12. digital download
13. beach house print

**Tag mix:** 1 primary (coastal wall art), 3 secondary (beach watercolor, sunset art, blue grey decor), 4 long-tail (outer banks art, beach walk art, obx sunset, coastal couple), 3 medium-volume (minimalist coastal, watercolor landscape, couple art), 2 format tags (digital download, beach house print).

**Tag consistency with Dog on the Beach:** 8 of 13 tags are shared (`coastal wall art`, `beach watercolor`, `outer banks art`, `watercolor landscape`, `blue grey decor`, `digital download`, `minimalist coastal`, `beach house print`). The 5 walk-specific tags pull in the sunset + couple + walk theme without diluting the consistent brand presence across both listings.

---

## Description

End of day on the Outer Banks. Two figures walk the shoreline as the sun drops toward the dunes — soft gold on one side of the sky, blue and grey everywhere else. The light is fading. The walk is quiet.

*This is a digital download. No physical item will be shipped.*

**What you'll receive:**
Five high-resolution JPG files (300 DPI, quality 95), one for each standard frame size — 5×7, 8×10, 11×14, 16×24, and 18×24. JPG is the right format for watercolor at this resolution: visually lossless and small enough to stay under Etsy's 20MB upload limit. The 5×7 and 16×24 use the image's native 2:3 ratio (clean fit, no cropping). The 8×10, 11×14, and 18×24 use a soft 4:5 ratio with a small horizontal crop to match standard frame dimensions. Print at home or at your local frame store — same files work for either.

**How it's made:**
Each Saltwash print begins as a photograph from the North Carolina coast, then is reimagined in watercolor using AI-assisted image generation. The tools are configured to keep the loose, place-specific feel of the original scene — the parts most people walk past. No crowds, no boardwalks — just shoreline, weather, and the kind of stillness you can't stage.

Tools used: [TO CONFIRM].

**Please note:**
Frame not included. Colors may vary slightly between your screen and the final print.

**Terms of use:**
For personal use only. Please don't resell or redistribute the digital file. Print it for your home or as a gift — print as many copies as you'd like.

*This design was created with AI assistance under the creative direction of the seller.*

© Saltwash Prints — Outer Banks, NC

---

## Voice checklist

- ✅ Slightly literary, never precious
- ✅ Specific over general (Outer Banks, not "coastal")
- ✅ Honest about what it isn't (no crowds, no boardwalks)
- ✅ Em-dashes used (—), no exclamation points
- ✅ Sentence fragments where they do work ("The light is fading. The walk is quiet.")
- ✅ Mirrors dog-on-the-beach description structure for cross-listing brand consistency

## Notes for Catherine

- **Title is 100 characters** — under the 140-char Etsy limit. Sun theme is more direct than "twilight" because the file actually has soft warm wash on the right (not the bluish grey of the dog listing). Honest description beats aspirational description.
- **"Couple" in the title** is the deliberate literal call. Brand kit calls this "Walk on the Beach (couple)" — the figures are clearly two people, and the "couple" word is what buyers searching for pair art will type.
- **"No crowds, no boardwalks"** mirrors the dog listing's "No crowds, no parking lots" — same two-negation pattern, different negations to fit the scene. Boardwalk is the OBX-specific thing that's notably absent in the image.
- **No "yellow," "orange," or "sunset" saturating the description** — the file is muted, not saturated, and the brand voice rule is to be honest about what's actually in the frame. The "soft gold on one side, blue and grey everywhere else" line conveys the warm-without-being-loud reality of the file.
- **All 5 sizes rendered (Lanczos upscale) and pushed to GitHub** at `saltwash/beach-walk/` (PNG masters + JPG delivery versions). Same pipeline as dog-on-the-beach; biggest JPG is 9.25MB (18×24), well under Etsy's 20MB limit.
- **Source is portrait 3:4 (3584×4800)** — original generation was landscape, got rotated/cropped to portrait per the brand's portrait-first decision. The sunset lost saturation in the rotation, per Catherine's note 2026-06-18: "When converted to portrait, we lost most of [the sunset]. That's probably ok." Keeping the original landscape renders in the library for later landscape products.
- **"Tools used" line is a placeholder** — needs the actual AI tool name. If same as dog-on-the-beach, write "Gemini 3.1 for the watercolor render, finished at high resolution for print." If different, fill in.
- **Image review pending** — Catherine said she'll double-check how the renders came out before finalizing the brief. Hero sentence describes a quiet two-figure walk with a soft warm bias on the right; if the file actually reads differently when she opens it, the hero + "no crowds" line may want adjusting.

## Process note (locked decision, 2026-06-18)

- **Landscape originals are kept** in the library even when we use portrait crops. Decision applies forward: when starting a new product, generate in landscape first if the source is landscape (so we keep a usable landscape master), then crop to portrait. Don't throw away the landscape version. Catalog: `saltwash/[print-name]/` should retain `[print-name]-source-landscape.png` (if any) alongside the portrait source.
- This keeps the option open for landscape SKUs (P-OBX-N-L) and greeting cards (wider formats) without rerunning the AI generation.
