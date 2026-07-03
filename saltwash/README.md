# Saltwash Prints

Working folder for the Saltwash Prints Etsy shop. Coastal watercolor prints, built
from Outer Banks photography → Firefly / Gemini renders → 18×24 review master → Photoshop cleanup → 5 Etsy-ready JPGs.

## Conventions (v2 workflow, locked 2026-07-03)

- **Source format:** JPG (Firefly exports JPG by default; Gemini is also usually JPG). PNG sources accepted but rare.
- **18×24 is the master.** Built first via Lanczos upscale from the source, sent to Catherine for Photoshop review, returned as the cleaned master JPG. All other print sizes are Lanczos downsizes from this master.
- **Master naming:** `<print-name>-18x24-review.png` (pre-Photoshop) and `<print-name>_18x24_300dpi.jpg` (post-Photoshop = Etsy 18×24 file). Both live in the print folder; the JPG is in `print-sizes/`.
- **Print sizes** (per brand kit): 5×7, 8×10, 11×14, 16×24, 18×24.
  - 5×7 ships as a 1500 × 2100 JPG @ 300 DPI (5:7, centered crop from 3:4 master).
  - 8×10 ships as 2400 × 3000 JPG @ 300 DPI (4:5, centered crop from 3:4 master).
  - 11×14 ships as 3300 × 4200 JPG @ 300 DPI (11:14, centered crop from 3:4 master).
  - 16×24 ships as 4800 × 7200 JPG @ 300 DPI (2:3, centered crop from 3:4 master).
  - 18×24 ships as 5400 × 7200 JPG @ 300 DPI (3:4, the master — no downscale).
- **JPG Q95** for all delivery files (visually lossless for continuous-tone watercolor at 300 DPI, brings the largest file to ~12 MB, well under Etsy's 20 MB limit).
- **Lanczos-only resampling** — pure interpolation, no hallucinated detail. Matters for watercolor.
- **No PNG archival** in the delivery batch. The pre-Photoshop 18×24 review master stays as PNG (archival quality, ~45 MB); the post-Photoshop master and 4 downsizes are JPG only.

## Per-print layout

```
saltwash/<print-name>/
├── source.<ext>                       # (optional) original source, kept for reference
├── <print-name>-18x24-review.png      # pre-Photoshop review master (Lanczos, sent to GH)
├── print-sizes/                       # delivery batch — everything Etsy uploads
│   ├── <print-name>_18x24_300dpi.jpg  # post-Photoshop master = Etsy 18×24
│   ├── <print-name>_16x24_300dpi.jpg
│   ├── <print-name>_11x14_300dpi.jpg
│   ├── <print-name>_8x10_300dpi.jpg
│   └── <print-name>_5x7_300dpi.jpg
└── README.md
```

## Current prints

- [beach-dog](./beach-dog/) — lady + dog on the beach. **Built with the v1 workflow (2026-06-16).** PNG masters + native 2:3/4:5 crops. Live on Etsy, not rebuilding.
- [beach-walk](./beach-walk/) — two figures on the beach. **Built with the v1 workflow (2026-06-16).** Same note as beach-dog.
- [plover](./plover/) — plover in flight. **Built with the v2 workflow (2026-07-03).** First v2 print. The pre-Photoshop working files are in [beach-plover](./beach-plover/) (named that way to match the v1 `beach-` prefix — don't repeat the pattern for future prints).
- [beach-plover](./beach-plover/) — working dir for the plover: source + pre-Photoshop 18×24 review master. Kept for reference; the post-Photoshop master and delivery JPGs are in [plover/print-sizes/](./plover/print-sizes/).

## Adding a new print (v2 workflow)

1. Drop the source image in the OpenClaw inbound folder (or receive it as an attachment).
2. Create a new folder: `saltwash/<print-name>/` (with a `print-sizes/` subdir for the delivery batch).
3. Build the 18×24 review master: Lanczos upscale to 5400×7200, save as `<print-name>-18x24-review.png` in the print folder. Apply rotations/flips here.
4. Push the review master to `catherinebb272/blair-documents` on a new branch (e.g., `<print-name>-print`). Commit message: `Saltwash Prints: <print-name> 18x24 review master (Lanczos)`.
5. Wait for Catherine's Photoshop pass. She returns the cleaned master as a JPG and saves it as `saltwash/<print-name>/print-sizes/<print-name>_18x24_300dpi.jpg`.
6. Run `build-print-sizes.py` to derive the 4 other sizes:
   ```bash
   python3 build-print-sizes.py \
       saltwash/<print-name>/print-sizes/<print-name>_18x24_300dpi.jpg \
       <print-name>
   ```
7. Verify all 5 JPGs are under 20 MB (the script flags any over).
8. Write a per-print README documenting source, build steps, file table, and crop math.
9. Commit the print folder to the workspace git. Push to blair-documents so Catherine can retrieve from GitHub.
10. (Optional) Draft the listing copy in `saltwash/listings/<print-name>-listing-draft.md`.

## Per-size crop instructions (v2)

By default, `build-print-sizes.py` crops the master to each target's aspect ratio centered, then resizes. If Catherine wants non-centered crops for a particular size (e.g., "all from top" for a 5×7, "recenter the figure" for an 11×14), the options are:

- **Quick path:** ask Blair in conversation; apply the crop as a one-off `convert` step before or after running the script.
- **Scripted path:** set the `CROP_OFFSETS` env var with per-size (top, right, bottom, left) pixel offsets from the centered default. Example: `CROP_OFFSETS='{"5x7": [50, 0, 0, 0], "11x14": [0, 0, 0, 0]}'` cuts 50 extra pixels from the top of the 5×7.
- **Most prints don't need non-centered crops** — the plover is an example where the default centered crop was fine for all 5 sizes.

## Why we switched from v1 to v2

The v1 workflow (used for beach-dog and beach-walk, 2026-06-16) built 2:3 and 4:5 native crops from the source, then upscaled those to 11×14 / 16×24 / 18×24, and kept both PNG masters and JPG deliveries on disk. Two issues with that:

1. **Catherine reviewed native crops in Photoshop, not the final print masters.** If she found an artifact, she'd have to fix it across multiple upscaled files. The v2 workflow has her review the actual 18×24 master, so any fix propagates to all 4 derived sizes automatically.
2. **PNG archival was overkill.** The source is already JPG, the Etsy delivery is JPG, and keeping PNGs alongside doubled the file count without a real archival benefit. The v2 workflow keeps one PNG (the pre-Photoshop review master, the GitHub transfer artifact) and 5 JPGs (the delivery batch). That's the print.

The two old parent-level scripts (`build-big-sizes.sh`, `build-jpg-delivery.sh`) have been deleted; `build-print-sizes.py` is the new tool. The beach-dog and beach-walk READMEs are annotated to note they were built with the v1 workflow and are not being rebuilt.
