# Saltwash Prints — Beach Dog

Source: Gemini render delivered in a portrait frame with the subject rotated 90° sideways.
Source dimensions: 3584 × 4800 (3:4 portrait, sideways content).

## Build steps

1. Rotate 90° clockwise (sky was on the LEFT edge of the source, ground on the RIGHT).
2. After rotation: 4800 × 3584 landscape.
3. Figure (lady + dog) sits at roughly x=2800 (58% from left) in the rotated image, in the lower 12% of the height.
4. Crop to 2:3 and 4:5 ratios, biased ~2/3 from the left / ~1/3 from the right (figure is right of center → keep more of the right).
5. Downscale 5×7 and 8×10 to their print-size pixel dimensions.
6. Render 11×14, 16×24, 18×24 by cropping the native crops to the target ratio and upscaling with Lanczos (see `build-big-sizes.sh` in the parent `saltwash/` folder).

## Files in this set

| File | Size | Notes |
|---|---|---|
| `beach-dog-rotated-full.png` | 4800 × 3584 | Rotated, no crop. Use as a reference master. |
| `beach-dog-2x3.png` | 2389 × 3584 | Native 2:3 crop. Used as source for 5×7, 16×24. |
| `beach-dog-4x5.png` | 2867 × 3584 | Native 4:5 crop. Used as source for 8×10, 11×14, 18×24. |
| `beach-dog-5x7.png` | 1500 × 2100 | 5×7 @ 300 DPI, ready to ship. |
| `beach-dog-8x10.png` | 2400 × 3000 | 8×10 @ 300 DPI, ready to ship. |
| `beach-dog-11x14.png` | 3300 × 4200 | 11×14 @ 300 DPI, ready to ship. |
| `beach-dog-16x24.png` | 4800 × 7200 | 16×24 @ 300 DPI, ready to ship. |
| `beach-dog-18x24.png` | 5400 × 7200 | 18×24 @ 300 DPI, ready to ship. |

## Crop bias

The figure lands at ~58% from the left of the rotated image, so a centered crop would leave the figure off-center to the right. The crops here put **~2/3 of the horizontal cut on the LEFT and ~1/3 on the RIGHT** so the figure sits closer to the middle of the final frame.

For the upscaled 11×14 (0.786 ratio from 4:5 source) and 18×24 (0.75 ratio from 4:5 source), the additional horizontal cropping is centered so the figure's position is preserved.

## Build / rebuild

```bash
bash build.sh            # full build (rotation + crops + 5x7 + 8x10 downscales)
bash ../../build-big-sizes.sh   # 11x14, 16x24, 18x24 finals (requires the 2x3 and 4x5 crops first)
bash fix-5x7.sh          # only the 5x7 downscale, if you tweaked the 2:3 crop
```

## Upscale notes

The 11×14, 16×24, and 18×24 finals are produced via Lanczos resampling (ImageMagick) from the native 2:3 and 4:5 crops. Lanczos is a conservative interpolator — it smooths pixel transitions without hallucinating new detail, which matters for watercolor where the loose, hand-painted look depends on the original texture being preserved.

Upscale factors:
- 11×14 (from 4:5): ~1.17× — gentle, no quality concern
- 16×24 (from 2:3): 2.0× — significant; Lanczos handles this cleanly but Firefly may produce a sharper result if you'd prefer
- 18×24 (from 4:5): 2.0× — same note as 16×24

If any of the upscales look soft compared to the originals, re-render that single file from Firefly and overwrite. Source crops are untouched.