# Saltwash Prints — Beach Plover (working dir for the `plover` print)

> **This folder is the working dir for the plover print, kept for reference.** The actual Etsy-delivery files live in [`saltwash/plover/print-sizes/`](../plover/print-sizes/). The plover was the first print built with the **v2 workflow** (JPG-only, master-first, Photoshop-in-the-loop) on 2026-07-03. The working-dir name uses the `beach-` prefix to match the v1 `beach-dog` / `beach-walk` pattern — don't repeat the pattern for future prints.

## Why two folders?

- `saltwash/beach-plover/` (this one) = working dir. Contains the source + the pre-Photoshop 18×24 review master (Lanczos upscale, flipped, cropped to exact 3:4). The review master is what got pushed to GitHub so Catherine could fetch and Photoshop it.
- `saltwash/plover/print-sizes/` = delivery dir. Contains the post-Photoshop master (now a JPG) + 4 Lanczos downsizes. This is what Catherine uploads to Etsy.

The v2 workflow keeps the pre-Photoshop review master as PNG (archival quality, the GitHub transfer artifact) and everything else as JPG (Etsy delivery format). No native 2:3 / 4:5 crops, no per-size PNG archival.

## Files in this set

| File | Size | Notes |
|---|---|---|
| `beach-plover-source.png` | 3584 × 4800 | Untouched master, copied from upload (un-flipped). |
| `beach-plover-18x24.png` | 5400 × 7200 | 18×24 @ 300 DPI **review master** (pre-Photoshop). Flipped + Lanczos upscaled. Pushed to GitHub so Catherine could Photoshop it. |

The post-Photoshop master and the 4 downscaled JPGs are in `../plover/print-sizes/`:

| File | Size | Notes |
|---|---|---|
| `saltwash-plover_18x24_300dpi.jpg` | 5400 × 7200 | Post-Photoshop master. Also the Etsy 18×24 file. |
| `saltwash-plover_16x24_300dpi.jpg` | 4800 × 7200 | Centered crop + Lanczos downscale. |
| `saltwash-plover_11x14_300dpi.jpg` | 3300 × 4200 | Centered crop + Lanczos downscale. |
| `saltwash-plover_8x10_300dpi.jpg` | 2400 × 3000 | Centered crop + Lanczos downscale. |
| `saltwash-plover_5x7_300dpi.jpg` | 1500 × 2100 | Centered crop + Lanczos downscale. |

All 5 JPGs are Q95 and well under Etsy's 20 MB upload limit (largest is 11.4 MB).

## Print direction

The source is **flipped horizontally** (`-flop`) so the bird faces the other way. This is a print-direction choice for the Saltwash lineup, not a correction — the unflipped version remains in `beach-plover-source.png` as the reference. The flip only appears in the print masters.

## Build steps for the 18×24 review master

1. Flip horizontally (`-flop`).
2. Crop to exact 3:4 — source is 3584 × 4800, target ratio needs height = 3584 × 4/3 ≈ 4779. Cut 21 px from height, centered (10 top + 11 bottom). Result: 3584 × 4779.
3. Lanczos upscale 5400 × 7200 (18×24 @ 300 DPI). Scale factor: ~1.507× both dimensions.
4. Save as `beach-plover-18x24.png` (this folder).
5. Push to `catherinebb272/blair-documents` on branch `beach-plover-print`. Commit message: `Saltwash Prints: beach-plover 18x24 review master (Lanczos, flopped)`.

## Build command for the 18×24 review master

```bash
# 18x24 review master only (Lanczos, flopped, cropped to 3:4)
convert beach-plover-source.png \
  -flop -crop 3584x4779+0+10 +repage \
  -filter Lanczos -resize 5400x7200! \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  beach-plover-18x24.png
```

## After Photoshop cleanup → derive the 4 other sizes

Once Catherine returns the cleaned 18×24 master and saves it as `saltwash/plover/print-sizes/saltwash-plover_18x24_300dpi.jpg`, run the parent script:

```bash
python3 ../build-print-sizes.py \
  ../plover/print-sizes/saltwash-plover_18x24_300dpi.jpg \
  saltwash-plover
```

That script handles centered crop + Lanczos downscale for all 4 other sizes, saves as JPG Q95, and checks the 20 MB Etsy limit. For the plover, no per-size crop instructions were needed (the default centered crop worked for all 5 sizes).

## Why 18×24 first (unchanged from v1 rationale)

The 18×24 is the largest of the 5 print sizes, so it absorbs the most aggressive resampling from the source (here, ~1.507× upscale from a near-native source). Catherine reviews the actual master that all other sizes will be derived from, so any artifact she fixes propagates to every print size automatically. That's the core v2 advantage over v1, where she reviewed native crops that then got re-upscaled.

Lanczos is the established Saltwash resampler — pure interpolation, no hallucinated detail, watercolor texture preserved cleanly. No Real-ESRGAN or other AI upscaler was needed at 1.5×.

## Git

The 18×24 review master was committed to the workspace git (`saltwash/beach-plover/`) and pushed to `catherinebb272/blair-documents` on branch `beach-plover-print` (commit `bd7007b`) on 2026-07-03. The delivery files in `saltwash/plover/print-sizes/` are in the workspace git only — they weren't pushed to blair-documents yet (Catherine retrieves from the workspace backup or asks for a push when ready to upload to Etsy).
