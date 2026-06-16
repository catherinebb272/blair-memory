# Saltwash Prints — Beach Walk

Source: Upscaled watercolor in 3:4 portrait mode (already correctly oriented).
Source dimensions: 3584 × 4800 (3:4 portrait, ratio 0.75).

## Build steps

1. Source was already portrait + upscaled on Catherine's end, no rotation needed.
2. Figure (two figures on the beach) sits at roughly 1/3 from the left and ~55% from the top (a little below center).
3. Crop to 2:3 (3200 × 4800): **cut 128 px from the LEFT and 256 px from the RIGHT** (1:2 ratio, opposite side from the dog image since this figure is on the left). Figure lands at exactly 1/3 of the crop width.
4. Crop to 4:5 (3584 × 4480): **centered vertical cut** (160 px top + 160 px bottom). Figure stays at 55% from the top.
5. Downscale 5×7 and 8×10 to print-size pixel dimensions.

## Files in this set

| File | Size | Notes |
|---|---|---|
| `beach-walk-source.png` | 3584 × 4800 | Untouched master, copied from upload. |
| `beach-walk-2x3.png` | 3200 × 4800 | Native 2:3 crop. Use for 5×7, 16×24, 18×24 (after upscale). |
| `beach-walk-4x5.png` | 3584 × 4480 | Native 4:5 crop. Use for 8×10, 11×14 (after slight upscale). |
| `beach-walk-5x7.png` | 1500 × 2100 | 5×7 @ 300 DPI, ready to ship. |
| `beach-walk-8x10.png` | 2400 × 3000 | 8×10 @ 300 DPI, ready to ship. |

For 11×14, 16×24, and 18×24, upscale from the native crops in Firefly (or your upscaler of choice).

## Crop bias

The figure is at 1/3 from the left of the source, so the 2:3 crop cuts **1/3 from the left and 2/3 from the right** — the opposite side from the dog image, which had the figure on the right. This keeps the figure at exactly 1/3 of the crop width in the final 2:3 frame.

For the 4:5 crop, the vertical cut is centered so the figure's 55%-from-top position is preserved.

## Build / rebuild

```bash
bash build.sh
```
