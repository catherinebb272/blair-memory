# Etsy Listing Draft — Dog on the Beach

**Status:** Draft v2 — template applied (top digital banner, end AI disclosure, 2026 Etsy requirements baked in)
**Date:** 2026-06-16 (updated 2026-06-17)
**AI source:** Gemini 3.1 + Nano-Banana
**Orientation:** Portrait (orientation decision locked)
**Template:** See `saltwash/listing-creation-process.md` for the reusable recipe this listing follows.

---

## Title (95 chars)

`Twilight Beach Watercolor Print, Dog on Shore with Distant Figure, Outer Banks, Digital Download`

**Title formula used:** `[Mood] + [Subject] + [Medium] + [Place] + [Format]`

Alternates if title needs to test different SEO:
- `Outer Banks Watercolor Print, Dog on Shore at Twilight, Moody Coastal Wall Art, Digital Download` (95 chars)
- `Dog on the Beach Watercolor Print, Twilight Coastal Wall Art, Outer Banks, Digital Download` (87 chars)
- `Moody Beach Watercolor Print, Distant Figure with Dog, Outer Banks, Digital Download` (86 chars)

---

## Tags (13 of 13)

1. coastal wall art
2. beach watercolor
3. twilight art
4. outer banks art
5. dog beach print
6. moody beach art
7. minimalist coastal
8. watercolor landscape
9. windswept art
10. blue grey decor
11. digital download
12. shore art print
13. obx art

**Tag mix:** 1 primary (coastal wall art), 3 secondary (beach watercolor, moody beach art, blue grey decor), 4 long-tail (outer banks art, dog beach print, shore art print, obx art), 3 medium-volume (twilight art, minimalist coastal, watercolor landscape), 2 format tags (digital download, windswept art).

---

## Description

Twilight on the Outer Banks. A woman in a red dress stands in the shallow water with her black dog, the beach and waves washed in grey, white, and greige, the sky layered in soft blue and grey overhead. The light is fading. The scene is quiet.

*This is a digital download. No physical item will be shipped.*

**What you'll receive:**
Five high-resolution JPG files (300 DPI, quality 95), one for each standard frame size — 5×7, 8×10, 11×14, 16×24, and 18×24. JPG is the right format for watercolor at this resolution: visually lossless and small enough to stay under Etsy's 20MB upload limit. The 5×7 and 16×24 use the image's native 2:3 ratio (clean fit, no cropping). The 8×10, 11×14, and 18×24 use a soft 4:5 ratio with a small horizontal crop on the 11×14 and 18×24 to match standard frame dimensions. Print at home or at your local frame store — same files work for either.

**How it's made:**
Each Saltwash print begins as a photograph from the North Carolina coast, then is reimagined in watercolor using AI-assisted image generation. The tools are configured to keep the loose, place-specific feel of the original scene — the parts most people walk past. No crowds, no parking lots — just shoreline, weather, and the kind of stillness you can't stage.

Tools used: Gemini 3.1 for the watercolor render, finished at high resolution for print.

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
- ✅ Honest about what it isn't (no crowds, no parking lots)
- ✅ Em-dashes used (—), no exclamation points
- ✅ Sentence fragments where they do work ("The light is fading. The scene is quiet.")

## Notes for Catherine

- **Title is 95 characters** — under the 140-char Etsy limit, with room to add a 5th element (e.g., "for Living Room" or "Neutral Decor") if SEO testing suggests it.
- **"Distant Figure" in the title** emphasizes the indistinct quality (a feature, not a bug) and is a literary signal that distinguishes this from commodity Etsy watercolor.
- **No "dolphin," "starfish," or "sunset" in the copy** — these are the saturated search terms but they pull the brand toward tropical kitsch. Letting go of those keywords is a moat-building choice.
- **Description opening** is the most important sentence. It places the image in time (twilight), place (Outer Banks), and tone (quiet) in one line. Etsy search snippets often pull the first 160 characters — this opening is designed to land hard in that window.
- **All 5 sizes rendered (Lanczos upscale) and pushed to GitHub** at `saltwash/beach-dog/` (PNG masters + JPG delivery versions). JPG is the upload-to-Etsy format at quality 95 — visually lossless for watercolor, every file well under Etsy's 20MB limit (biggest is ~9MB). PNGs stay as masters for archival.
- **One PNG was found truncated** during the JPG conversion (beach-walk-16x24.png from the earlier session — original upscale got killed mid-write). Re-rendered from the 2:3 native crop; the JPG conversion then succeeded cleanly. Worth knowing in case any other render silently produced a partial file.
- **If you go landscape (Path B) later:** the size list flips to 7×5, 10×8, 14×11, 16×12, 24×16, 20×15, 24×18, and you'd crop from `beach-dog-rotated-full.png` (4800×3584) using the same figure-bias math in reverse. Not done yet — portrait set is the active listing.
