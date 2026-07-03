# Saltwash Prints — Beach Plover (in flight)

Source: watercolour of a plover in flight, delivered in a portrait frame.
Source dimensions: 3584 × 4800 (3:4 portrait, ratio 0.7467 — close to 3:4 but ~22 px too tall for an exact match).

## Print direction

The source is **flipped horizontally** (`-flop`) so the bird faces the other way. This is a print-direction choice for the Saltwash lineup, not a correction — the unflipped version remains in `beach-plover-source.png` as the reference.

## Build status

This print is **in review**. Only the 18×24 master has been built. The remaining sizes (5×7, 8×10, 11×14, 16×24) will be derived from the cleaned master once Catherine returns the Photoshop-edited 18×24 PNG.

Workflow:
1. **18×24 master** (this build) — Lanczos upscaled from source, flipped, cropped to exact 3:4, sent to Catherine for artifact review.
2. **Photoshop pass** — Catherine fixes any stray upscaling artifacts and returns the master.
3. **Downscaled sizes** — derive 16×24, 11×14, 8×10, 5×7, 2:3 and 4:5 crops from the cleaned master.

## Build steps for the 18×24

1. Flip horizontally (`-flop`).
2. Crop to exact 3:4 — source is 3584 × 4800, target ratio needs height = 3584 × 4/3 ≈ 4779. Cut 21 px from height, centered (10 top + 11 bottom). Result: 3584 × 4779.
3. Lanczos upscale 5400 × 7200 (18×24 @ 300 DPI). Scale factor: ~1.507× both dimensions.

## Files in this set

| File | Size | Notes |
|---|---|---|
| `beach-plover-source.png` | 3584 × 4800 | Untouched master, copied from upload (un-flipped). |
| `beach-plover-18x24.png` | 5400 × 7200 | 18×24 @ 300 DPI review master. Flipped + Lanczos upscaled. Awaiting Photoshop cleanup. |

## Why 18×24 first

This is the largest of the 5 print sizes, so it absorbs the most aggressive upscale (~1.507× from a near-native source). Once Catherine signs off on the 18×24 quality in Photoshop, the remaining sizes downscale from the same 5400 × 7200 master, which guarantees consistent colour and detail across the whole size range.

Lanczos is the established Saltwash upscaler — conservative resampling that smooths pixel transitions without hallucinating detail, which matters for watercolour where the loose, hand-painted look depends on preserving the original texture.

## Build / rebuild (current step)

```bash
# 18x24 review master only (Lanczos, flopped, cropped to 3:4)
convert beach-plover-source.png \
  -flop -crop 3584x4779+0+10 +repage \
  -filter Lanczos -resize 5400x7200! \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  beach-plover-18x24.png
```

## After Photoshop cleanup

Once Catherine returns the cleaned 18×24 master, the full size matrix gets derived from it. A `build.sh` (matching the beach-dog / beach-walk pattern) will be written then, plus entries for the 2:3 / 4:5 / 5×7 / 8×10 / 11×14 / 16×24 / 18×24 outputs in the file table above.
