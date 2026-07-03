# Saltwash Prints — Beach Walk

> **Built with the v1 (pre-2026-07-03) workflow.** This print is live on Etsy and the files are fine — not rebuilding with the v2 pipeline. The README is kept as a record of how the v1 build worked (native 2:3 / 4:5 crops, PNG masters, upscale to 11×14 / 16×24 / 18×24, then batch JPG conversion). For the v2 workflow, see [`saltwash/README.md`](../README.md) and [`saltwash/listing-creation-process.md`](../listing-creation-process.md).

Source: Upscaled watercolor in 3:4 portrait mode (already correctly oriented).
Source dimensions: 3584 × 4800 (3:4 portrait, ratio 0.75).

## Build steps (v1 workflow, 2026-06-16)

1. Source was already portrait + upscaled on Catherine's end, no rotation needed.
2. Figure (two figures on the beach) sits at roughly 1/3 from the left and ~55% from the top (a little below center).
3. Crop to 2:3 (3200 × 4800): **cut 128 px from the LEFT and 256 px from the RIGHT** (1:2 ratio, opposite side from the dog image since this figure is on the left). Figure lands at exactly 1/3 of the crop width.
4. Crop to 4:5 (3584 × 4480): **centered vertical cut** (160 px top + 160 px bottom). Figure stays at 55% from the top.
5. Downscale 5×7 and 8×10 to print-size pixel dimensions.
6. Render 11×14, 16×24, 18×24 by cropping the native crops to the target ratio and upscaling with Lanczos (see `build-big-sizes.sh` in the parent `saltwash/` folder — **script deleted 2026-07-03 with the v2 workflow cleanup**).

## Files in this set (v1 workflow, kept as-is — not the v2 delivery format)

| File | Size | Notes |
|---|---|---|
| `beach-walk-source.png` | 3584 × 4800 | Untouched master, copied from upload. |
| `beach-walk-2x3.png` | 3200 × 4800 | Native 2:3 crop. Used as source for 5×7, 16×24. |
| `beach-walk-4x5.png` | 3584 × 4480 | Native 4:5 crop. Used as source for 8×10, 11×14, 18×24. |
| `beach-walk-5x7.png` / `.jpg` | 1500 × 2100 | 5×7 @ 300 DPI. PNG = master, JPG (Q95) = Etsy upload. |
| `beach-walk-8x10.png` / `.jpg` | 2400 × 3000 | 8×10 @ 300 DPI. PNG = master, JPG (Q95) = Etsy upload. |
| `beach-walk-11x14.png` / `.jpg` | 3300 × 4200 | 11×14 @ 300 DPI. PNG = master, JPG (Q95) = Etsy upload. |
| `beach-walk-16x24.png` / `.jpg` | 4800 × 7200 | 16×24 @ 300 DPI. PNG = master, JPG (Q95) = Etsy upload. |
| `beach-walk-18x24.png` / `.jpg` | 5400 × 7200 | 18×24 @ 300 DPI. PNG = master, JPG (Q95) = Etsy upload. |

> The v2 workflow's delivery format is 1 review master PNG (pre-Photoshop) + 5 JPGs (post-Photoshop 18×24 + 4 downsizes) in `print-sizes/`. This print predates that, so it has the older "PNG + JPG for every size" format with native crops on disk. No need to convert unless Catherine wants the v2 layout for consistency.

## Crop bias

The figure is at 1/3 from the left of the source, so the 2:3 crop cuts **1/3 from the left and 2/3 from the right** — the opposite side from the dog image, which had the figure on the right. This keeps the figure at exactly 1/3 of the crop width in the final 2:3 frame.

For the 4:5 crop, the vertical cut is centered so the figure's 55%-from-top position is preserved.

For the upscaled 11×14 (0.786 ratio from 4:5 source) and 18×24 (0.75 ratio from 4:5 source), the additional horizontal cropping is centered so the figure's position is preserved.

## Build / rebuild (v1, for reference — not the current workflow)

```bash
bash build.sh                  # full build (crops + 5x7 + 8x10 downscales)
bash ../../build-big-sizes.sh  # 11x14, 16x24, 18x24 finals (requires the 2x3 and 4x5 crops first) — SCRIPT DELETED 2026-07-03
python3 ../../build-jpg-delivery.py  # JPG delivery versions at Q95 (Etsy upload format) — SCRIPT DELETED 2026-07-03
```

**Both parent-level scripts have been deleted** as part of the v2 workflow cleanup. The replacements are `saltwash/build-print-sizes.py` (per-call, takes a 18×24 master JPG and produces 4 downscaled JPGs) and a manual upscale step for the 18×24 master itself. See `saltwash/README.md` for the v2 pipeline.

**Don't rebuild this print with the v2 pipeline** — the files are live on Etsy, the JPGs are Q95 and under 20 MB, and the per-print crop math is already documented above. Re-deriving would just churn git history for no Etsy-facing change.

## Upscale notes

The 11×14, 16×24, and 18×24 finals are produced via Lanczos resampling (ImageMagick) from the native 2:3 and 4:5 crops. Lanczos is a conservative interpolator — it smooths pixel transitions without hallucinating new detail, which matters for watercolor where the loose, hand-painted look depends on the original texture being preserved.

Upscale factors:
- 11×14 (from 4:5): ~0.94× — actually a slight downscale
- 16×24 (from 2:3): 1.5× — moderate
- 18×24 (from 4:5): ~1.6× — moderate

If any of the upscales look soft compared to the originals, re-render that single file from Firefly and overwrite. Source crops are untouched.