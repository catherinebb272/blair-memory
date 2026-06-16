# Saltwash Prints

Working folder for the Saltwash Prints Etsy shop. Coastal watercolor prints, built
from Outer Banks photography → Gemini renders → cropped print masters.

## Conventions

- **Source format:** PNG where possible, JPEG only when the source is JPEG.
- **Master naming:** `<subject>-<ratio-or-size>.png` (e.g. `beach-dog-2x3.png`).
- **Crop bias:** documented per-print in the print's own README. Default is "center the figure in the crop" using the source's reported subject position.
- **Print sizes** (per brand kit): 5×7, 8×10, 11×14, 16×24, 18×24.
  - 5×7 ships as a 1500 × 2100 PNG @ 300 DPI (5:7, slight crop from 2:3).
  - 8×10 ships as 2400 × 3000 PNG @ 300 DPI (4:5, native match).
  - 11×14 / 16×24 / 18×24 are **upscale tasks** — done in Firefly on Catherine's end, not here.
- **Native crops** (2:3, 4:5) are always saved at source resolution so Catherine can upscale from those, not from the downscaled print files.

## Current prints

- [beach-dog](./beach-dog/) — lady + dog on the beach, Gemini render rotated 90° CW before cropping.
- [beach-walk](./beach-walk/) — two figures on the beach, upscaled to 3:4 portrait before cropping.

## Adding a new print

1. Drop the source image in the OpenClaw inbound folder.
2. Create a new folder: `saltwash/<subject>/`.
3. Copy `beach-dog/build.sh` (or `beach-walk/build.sh`) and adapt: source path, crop math, figure position.
4. Build, verify dimensions, write a README.
5. Commit and push to this repo.
