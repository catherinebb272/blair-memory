#!/usr/bin/env bash
# Re-do the dog 5x7 with correct 5:7 aspect ratio (1500x2100 @ 300dpi)
# The earlier version came out 1400x2100 because ImageMagick preserved the 2:3 aspect
# instead of fitting to 5:7.  Fix: downscale 2:3 to 1500x2250 first, then crop to 1500x2100.

set -euo pipefail

OUT="/home/openclaw/blair-documents/saltwash/beach-dog"

convert "$OUT/beach-dog-2x3.png" \
  -filter Lanczos -resize 1500x2250 \
  -crop 1500x2100+0+75 +repage \
  -strip -define png:compression-level=9 -define png:compression-strategy=1 \
  "$OUT/beach-dog-5x7.png"

echo "  -> beach-dog-5x7.png  (1500x2100, 5x7 @ 300dpi)"
ls -lh "$OUT/beach-dog-5x7.png"
