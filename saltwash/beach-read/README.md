# Beach Read — Saltwash Print

**Print name:** `saltwash-beach-read`
**Print size (master):** 18×24 (5400×7200 @ 300 DPI)
**Build date:** 2026-07-06
**Pipeline:** v2 (master-first, JPG-only, Photoshop-in-the-loop)

## Source

- `beach-read-18x24-source.jpg` (5400×7232) — Catherine's post-Photoshop master, uploaded as `Beach-Read-18x24.jpg`
- 32 px taller than the 18×24 target; cropped to clean 5400×7200 before the downscale pass

## Crop decisions

Catherine flagged a composition bias: **crop from the right and from the bottom only**. Implemented as the opposite of the default centered crop — for each derived size, all of the aspect-ratio trim is taken from the right edge (when the source is wider than the target) or the bottom edge (when the source is taller than the target).

| Size  | Target aspect | Source vs target | Cut axis | Total cut | Cropped from |
|-------|---------------|------------------|----------|-----------|--------------|
| 5×7   | 0.714         | source wider     | horiz.   | 257 px    | all from right |
| 8×10  | 0.800         | source narrower  | vert.    | 450 px    | all from bottom |
| 11×14 | 0.786         | source narrower  | vert.    | 327 px    | all from bottom |
| 16×24 | 0.667         | source wider     | horiz.   | 600 px    | all from right |
| 18×24 | 0.750         | exact match      | n/a      | 0         | n/a (master) |

For the 18×24 master reduction from 7232 → 7200 px tall, the 32 px trim was taken from the bottom (to match the bias and keep the original top intact).

## Build

```bash
# Reduce the source's extra 32 px from the bottom to land at clean 5400×7200 (18×24)
convert saltwash/beach-read/beach-read-18x24-source.jpg \
  -crop 5400x7200+0+0 +repage \
  -quality 95 \
  saltwash/beach-read/print-sizes/saltwash-beach-read_18x24_300dpi.jpg

# Derive 4 sizes with right-and-bottom-only crop bias
CROP_OFFSETS='{"5x7": [0, 0, 0, -128], "8x10": [-225, 0, 0, 0], "11x14": [-163, 0, 0, 0], "16x24": [0, 0, 0, -300]}' \
  python3 saltwash/build-print-sizes.py \
    saltwash/beach-read/print-sizes/saltwash-beach-read_18x24_300dpi.jpg \
    saltwash-beach-read
```

The `CROP_OFFSETS` shifts each derived size's trim entirely onto the right (for horizontal cuts) or the bottom (for vertical cuts), so the subject composition is preserved against the left/top edge of every frame.

## Files

- `saltwash/beach-read/beach-read-18x24-source.jpg` — original Photoshop master (kept for reference)
- `saltwash/beach-read/print-sizes/saltwash-beach-read_18x24_300dpi.jpg` — Etsy 18×24
- `saltwash/beach-read/print-sizes/saltwash-beach-read_16x24_300dpi.jpg` — Etsy 16×24
- `saltwash/beach-read/print-sizes/saltwash-beach-read_11x14_300dpi.jpg` — Etsy 11×14
- `saltwash/beach-read/print-sizes/saltwash-beach-read_8x10_300dpi.jpg` — Etsy 8×10
- `saltwash/beach-read/print-sizes/saltwash-beach-read_5x7_300dpi.jpg` — Etsy 5×7

All five are JPG Q95, 300 DPI, and under Etsy's 20MB upload limit.

## Next steps

- [ ] Catherine retrieves print-sizes/ from `catherinebb272/blair-documents` (branch `beach-read-print`)
- [ ] Mockup photos: 1–3 framed/room-scene shots
- [ ] Listing draft at `saltwash/listings/saltwash-beach-read-listing-draft.md`
- [ ] Upload to Etsy per the standard checklist in `listing-creation-process.md`
