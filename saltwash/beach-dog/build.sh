#!/usr/bin/env bash
# Build the Saltwash "Beach Dog" print image set
# Source: /home/openclaw/.openclaw/media/inbound/Beach_Dog---3b38053b-4080-4c25-aacf-d7a33a8a3a10.png
# Source size: 3584 x 4800 (portrait, but content is landscape with dog sideways)
# Brand kit: 2:3 primary ratio, 4:5 soft-crop for 8x10 and 11x14
#   Print sizes (300 DPI): 5x7, 8x10, 11x14, 16x24, 18x24
#
# Pipeline:
#   1. Rotate 90° CW (puts sky on top, figure on the sand below)
#   2. Crop to 2:3 and 4:5 ratios, biased ~2/3 cut from left / ~1/3 from right
#      (figure sits at ~x=2800 in the rotated 4800-wide image, slightly right of center)
#   3. Downscale 5x7 and 8x10 to their print-size pixel dimensions

set -euo pipefail

SRC="/home/openclaw/.openclaw/media/inbound/Beach_Dog---3b38053b-4080-4c25-aacf-d7a33a8a3a10.png"
OUT="/home/openclaw/blair-documents/saltwash/beach-dog"

# Step 1: Rotate 90 CW, save full landscape (no crop)
#   After rotation: 4800 x 3584 landscape
convert "$SRC" -rotate 90 \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  "$OUT/beach-dog-rotated-full.png"
echo "  -> beach-dog-rotated-full.png  (4800x3584)"

# Step 2: Crop to 2:3 ratio, biased 2/3-left, 1/3-right
#   Total cut = 4800 - 2389 = 2411 px
#   Cut from left  = round(2/3 * 2411) = 1607
#   Cut from right = round(1/3 * 2411) = 804
#   Crop window: 1607 + 0, 2389 x 3584
convert "$OUT/beach-dog-rotated-full.png" \
  -crop 2389x3584+1607+0 +repage \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  "$OUT/beach-dog-2x3.png"
echo "  -> beach-dog-2x3.png  (2389x3584, 2:3 native)"

# Step 3: Crop to 4:5 ratio, biased 2/3-left, 1/3-right
#   Total cut = 4800 - 2867 = 1933 px
#   Cut from left  = round(2/3 * 1933) = 1289
#   Cut from right = round(1/3 * 1933) = 644
#   Crop window: 1289 + 0, 2867 x 3584
convert "$OUT/beach-dog-rotated-full.png" \
  -crop 2867x3584+1289+0 +repage \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  "$OUT/beach-dog-4x5.png"
echo "  -> beach-dog-4x5.png  (2867x3584, 4:5 native)"

# Step 4: Downscale 2:3 crop to 5x7 at 300 DPI
#   5x7 @ 300dpi = 1500 x 2100
convert "$OUT/beach-dog-2x3.png" \
  -filter Lanczos -resize 1500x2100 \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  "$OUT/beach-dog-5x7.png"
echo "  -> beach-dog-5x7.png  (1500x2100, 5x7 @ 300dpi)"

# Step 5: Downscale 4:5 crop to 8x10 at 300 DPI
#   8x10 @ 300dpi = 2400 x 3000
convert "$OUT/beach-dog-4x5.png" \
  -filter Lanczos -resize 2400x3000 \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  "$OUT/beach-dog-8x10.png"
echo "  -> beach-dog-8x10.png  (2400x3000, 8x10 @ 300dpi)"

echo ""
echo "Done. Files in $OUT:"
ls -lh "$OUT"/*.png
