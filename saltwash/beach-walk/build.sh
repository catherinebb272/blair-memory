#!/usr/bin/env bash
# Build the Saltwash "Beach Walk" print image set
# Source: /home/openclaw/.openclaw/media/inbound/Beach_Walk_Upscale---6139f20c-5112-4b2a-846b-1c5fae010c83.jpg
# Source size: 3584 x 4800 (3:4 portrait, already correctly oriented, already upscaled)
# Brand kit: 2:3 primary, 4:5 soft-crop for 8x10/11x14
# Composition: figures at 1/3 from left, ~55% from top (a little below center)
#
# Pipeline:
#   1. Source already portrait+upscale, no rotation needed
#   2. Crop to 2:3 (cut mostly from the RIGHT, since figure is on the left)
#   3. Crop to 4:5 (centered vertical cut; figure stays at 55% from top)
#   4. Downscale 5x7 to 1500x2100 (5:7) by downscaling 2:3 first, then cropping top/bottom
#   5. Downscale 4:5 to 8x10 = 2400x3000 (4:5 matches exactly)

set -euo pipefail

SRC="/home/openclaw/.openclaw/media/inbound/Beach_Walk_Upscale---6139f20c-5112-4b2a-846b-1c5fae010c83.jpg"
OUT="/home/openclaw/blair-documents/saltwash/beach-walk"
mkdir -p "$OUT"

# Save the source untouched as a "master" reference
cp "$SRC" "$OUT/beach-walk-source.png" 2>/dev/null || cp "$SRC" "$OUT/beach-walk-source.jpg"
echo "  -> beach-walk-source.png  (3584x4800, untouched master)"

# Step 1: Crop to 2:3 ratio (3200 x 4800), biased to keep figure at 1/3 in the crop
#   Total cut from width = 3584 - 3200 = 384 px
#   Figure is at x = 1/3 * 3584 ≈ 1195 in the source
#   For the figure to land at 1/3 of the 2:3 crop too: crop x = 1195 - 1/3 * 3200 = 128
#   That gives: 128 from left, 256 from right  →  1:2 ratio (right cut is 2x the left cut)
#   This mirrors the dog image's "2/3 from one side, 1/3 from the other" rule, on the opposite side.
convert "$SRC" \
  -crop 3200x4800+128+0 +repage \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  "$OUT/beach-walk-2x3.png"
echo "  -> beach-walk-2x3.png  (3200x4800, 2:3 native)"

# Step 2: Crop to 4:5 ratio (3584 x 4480), centered vertical cut
#   Total cut from height = 4800 - 4480 = 320 px
#   Centered: 160 from top, 160 from bottom  →  figure stays at 55% from top
convert "$SRC" \
  -crop 3584x4480+0+160 +repage \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  "$OUT/beach-walk-4x5.png"
echo "  -> beach-walk-4x5.png  (3584x4480, 4:5 native)"

# Step 3: 5x7 @ 300 DPI = 1500 x 2100 (5:7 aspect = 0.714)
#   Our 2:3 source is 0.667, so 2:3 is slightly TALLER than 5:7.
#   Downscale 2:3 to 1500 wide → 1500 x 2250.  Then crop 75 px off top + 75 off bottom (centered).
#   Figure at 55% from top is preserved (55% of 2100 = 1155, matches the 75-px crop math).
convert "$OUT/beach-walk-2x3.png" \
  -filter Lanczos -resize 1500x2250 \
  -crop 1500x2100+0+75 +repage \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  "$OUT/beach-walk-5x7.png"
echo "  -> beach-walk-5x7.png  (1500x2100, 5x7 @ 300dpi)"

# Step 4: 8x10 @ 300 DPI = 2400 x 3000 (4:5 aspect = 0.8)
#   Our 4:5 source is 0.8, exact match.  Direct downscale.
convert "$OUT/beach-walk-4x5.png" \
  -filter Lanczos -resize 2400x3000 \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  "$OUT/beach-walk-8x10.png"
echo "  -> beach-walk-8x10.png  (2400x3000, 8x10 @ 300dpi)"

echo ""
echo "Done. Files in $OUT:"
ls -lh "$OUT"/*.png "$OUT"/*.jpg 2>/dev/null
