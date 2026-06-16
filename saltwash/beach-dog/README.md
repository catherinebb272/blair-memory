# Saltwash Prints — Beach Dog

Source: Gemini render delivered in a portrait frame with the subject rotated 90° sideways.
Source dimensions: 3584 × 4800 (3:4 portrait, sideways content).

## Build steps

1. Rotate 90° clockwise (sky was on the LEFT edge of the source, ground on the RIGHT).
2. After rotation: 4800 × 3584 landscape.
3. Figure (lady + dog) sits at roughly x=2800 (58% from left) in the rotated image, in the lower 12% of the height.
4. Crop to 2:3 and 4:5 ratios, biased ~2/3 from the left / ~1/3 from the right (figure is right of center → keep more of the right).
5. Downscale 5×7 and 8×10 to their print-size pixel dimensions.

## Files in this set

| File | Size | Notes |
|---|---|---|
| `beach-dog-rotated-full.png` | 4800 × 3584 | Rotated, no crop. Use as a reference master. |
| `beach-dog-2x3.png` | 2389 × 3584 | Native 2:3 crop. Use for 5×7, 16×24, 18×24 (after upscale). |
| `beach-dog-4x5.png` | 2867 × 3584 | Native 4:5 crop. Use for 8×10, 11×14 (after slight upscale). |
| `beach-dog-5x7.png` | 1500 × 2100 | 5×7 @ 300 DPI, ready to ship. |
| `beach-dog-8x10.png` | 2400 × 3000 | 8×10 @ 300 DPI, ready to ship. |

For 11×14, 16×24, and 18×24, upscale from the native crops in Firefly (or your upscaler of choice).

## Crop bias

The figure lands at ~58% from the left of the rotated image, so a centered crop would leave the figure off-center to the right. The crops here put **~2/3 of the horizontal cut on the LEFT and ~1/3 on the RIGHT** so the figure sits closer to the middle of the final frame.

## Build / rebuild

```bash
bash build.sh       # full build (rotation + crops + downscales)
bash fix-5x7.sh     # only the 5x7 downscale, if you tweaked the 2:3 crop
```
