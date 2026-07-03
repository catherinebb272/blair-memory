# Saltwash Prints — Plover at Rest (working dir)

> **This folder is the working dir for the "Plover at Rest" print, kept for reference.** The actual Etsy-delivery files will live in [`saltwash/plover-resting/print-sizes/`](./print-sizes/) once Catherine returns the Photoshop-cleaned 18×24. The first print built with the v2 workflow was the in-flight plover (see [`saltwash/beach-plover/`](../beach-plover/README.md)); this is the second and the pair-SKU to it.

## Why this folder

- `saltwash/plover-resting/` (this one) = working dir. Contains the source + the pre-Photoshop 18×24 review master (Lanczos upscale, cropped to exact 3:4). The review master is what got pushed to GitHub so Catherine could fetch and Photoshop it.
- `saltwash/plover-resting/print-sizes/` (to be created) = delivery dir. Will contain the post-Photoshop master (JPG) + 4 Lanczos downsizes, ready for Catherine to upload to Etsy.

The v2 workflow keeps the pre-Photoshop review master as PNG (archival quality, the GitHub transfer artifact) and everything else as JPG (Etsy delivery format).

## Files in this set

| File | Size | Notes |
|---|---|---|
| `plover-resting-source.png` | 3584 × 4800 | Untouched master, copied from upload (un-flipped). |
| `plover-resting-18x24.png` | 5400 × 7200 | 18×24 @ 300 DPI **review master** (pre-Photoshop). Lanczos upscale, no flip. Pushed to GitHub so Catherine can Photoshop it. |

Once the Photoshop pass is done, the cleaned 18×24 master will live at `saltwash/plover-resting/print-sizes/plover-resting_18x24_300dpi.jpg` and the 4 downscaled JPGs alongside it.

## Print direction

The source is **not flipped** for this print. Catherine's instruction was "keep him facing the same way, no change in orientation" — meaning the new source's natural facing already matches the in-flight plover's final print direction, so no `-flop` is applied here. The unflipped version remains in `plover-resting-source.png` as the reference.

Contrast with the in-flight plover (see `../beach-plover/README.md`): that source was flipped horizontally so the bird faced the other way for the Saltwash lineup.

## Build steps for the 18×24 review master

1. (No flip — source orientation is final.)
2. Crop to exact 3:4 — source is 3584 × 4800, target ratio needs height = 3584 × 4/3 ≈ 4779. Cut 21 px from height, centered (10 top + 11 bottom). Result: 3584 × 4779.
3. Lanczos upscale to 5400 × 7200 (18×24 @ 300 DPI). Scale factor: ~1.507× both dimensions.
4. Save as `plover-resting-18x24.png` (this folder).
5. Push to `catherinebb272/blair-documents` on `main` (commit message: `Saltwash Prints: plover-resting 18x24 review master (Lanczos, no flip)`).

## Build command for the 18×24 review master

```bash
# 18x24 review master only (Lanczos, NO flop, cropped to 3:4)
convert plover-resting-source.png \
  -crop 3584x4779+0+10 +repage \
  -filter Lanczos -resize 5400x7200! \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  plover-resting-18x24.png
```

## After Photoshop cleanup → derive the 4 other sizes

Once Catherine returns the cleaned 18×24 master and saves it as `saltwash/plover-resting/print-sizes/plover-resting_18x24_300dpi.jpg`, run:

```bash
python3 ../build-print-sizes.py \
  print-sizes/plover-resting_18x24_300dpi.jpg \
  plover-resting
```

That script handles centered crop + Lanczos downscale for all 4 other sizes, saves as JPG Q95, and checks the 20 MB Etsy limit. For the plover, no per-size crop instructions were needed (the default centered crop worked for all 5 sizes).

## Naming convention (v2 working dirs)

- v1 used `beach-dog` / `beach-walk` / `beach-plover` — beach-prefixed one-offs.
- v2 keeps one working dir per print, but **no beach- prefix**. This print's dir is `plover-resting` to match the source filename (`Plover2_at_rest`) and the future Etsy listing name.
- The in-flight plover (`beach-plover`) is the lone exception — it was the first v2 print and the beach- prefix was kept for parity with the v1 lineage.

## Why 18×24 first (unchanged from v2 rationale)

The 18×24 is the largest of the 5 print sizes, so it absorbs the most aggressive resampling from the source (here, ~1.507× upscale from a near-native source). Catherine reviews the actual master that all other sizes will be derived from, so any artifact she fixes propagates to every print size automatically. That's the core v2 advantage over v1, where she reviewed native crops that then got re-upscaled.

Lanczos is the established Saltwash resampler — pure interpolation, no hallucinated detail, watercolor texture preserved cleanly. No Real-ESRGAN or other AI upscaler was needed at 1.5×.

## Git

The source + 18×24 review master are committed to the workspace git (`saltwash/plover-resting/`) and pushed to `catherinebb272/blair-documents` on `main` on 2026-07-03. The delivery files in `saltwash/plover-resting/print-sizes/` will be added in a follow-up commit once Catherine finishes the Photoshop pass.

## Photoshop cleanup + delivery batch (added 2026-07-03)

Catherine returned the cleaned 18×24 master on 2026-07-03 with edits to make the bird more clearly a plover. Crop rule from her: **"all crops come from the bottom or the left — the bird is already pretty close to the right edge."**

That means:
- 5×7, 16×24 (horizontal crops): cut comes from the **left** → right edge preserved.
- 8×10, 11×14 (vertical crops): cut comes from the **bottom** → top edge preserved.
- 18×24: no crop (same 3:4 aspect as the master).

### Crop math (per size, from the 5400×7200 master)

| Size  | Source crop                          | Output (px @ 300 DPI) | Cut direction                  |
|-------|--------------------------------------|------------------------|--------------------------------|
| 18×24 | none (master)                        | 5400 × 7200            | —                              |
| 5×7   | 5143 × 7200 from x=257 (cut 257 L)   | 1500 × 2100            | all from left                  |
| 8×10  | 5400 × 6750 from y=0 (cut 450 B)     | 2400 × 3000            | all from bottom                |
| 11×14 | 5400 × 6873 from y=0 (cut 327 B)     | 3300 × 4200            | all from bottom                |
| 16×24 | 4800 × 7200 from x=600 (cut 600 L)   | 4800 × 7200            | all from left                  |

Crop offsets passed to `build-print-sizes.py`:

```bash
CROP_OFFSETS='{"5x7":[0,-129,0,129],"8x10":[-225,0,0,0],"11x14":[-163,0,0,0],"16x24":[0,-300,0,300]}'
```

(top, right, bottom, left) — negative offsets shift the crop box away from that side so all the cut goes to the opposite side.

### Files in `print-sizes/`

| File                                  | Size      | Notes                        |
|---------------------------------------|-----------|------------------------------|
| `plover-resting_18x24_300dpi.jpg`     | 5400×7200 | Post-Photoshop master        |
| `plover-resting_16x24_300dpi.jpg`     | 4800×7200 | cut 600 from left            |
| `plover-resting_11x14_300dpi.jpg`     | 3300×4200 | cut 327 from bottom          |
| `plover-resting_8x10_300dpi.jpg`      | 2400×3000 | cut 450 from bottom          |
| `plover-resting_5x7_300dpi.jpg`       | 1500×2100 | cut 257 from left            |

All 5 files are under Etsy's 20 MB upload limit (largest is 9.8 MB).

## Build commands for the delivery batch

```bash
# 1. Save the post-Photoshop 18x24 master to print-sizes/
cp /path/from/catherine/plover-resting-18x24edited.jpg \
   saltwash/plover-resting/print-sizes/plover-resting_18x24_300dpi.jpg

# 2. Build the 4 derived sizes with the bottom-or-left crop rule
CROP_OFFSETS='{"5x7":[0,-129,0,129],"8x10":[-225,0,0,0],"11x14":[-163,0,0,0],"16x24":[0,-300,0,300]}' \
  python3 saltwash/build-print-sizes.py \
    saltwash/plover-resting/print-sizes/plover-resting_18x24_300dpi.jpg \
    plover-resting
```
