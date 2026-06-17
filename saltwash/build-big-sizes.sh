#!/usr/bin/env bash
# Render the missing 11x14, 16x24, 18x24 finals for beach-dog and beach-walk.
# Strategy: use the native 2:3 and 4:5 crops (already figure-biased), crop to
# the target ratio if needed, then upscale to 300 DPI with Lanczos.
#
# Native crops available:
#   beach-dog: 2x3 = 2389x3584, 4x5 = 2867x3584
#   beach-walk: 2x3 = 3200x4800, 4x5 = 3584x4480

set -euo pipefail

OUT_DOG="/home/openclaw/blair-documents/saltwash/beach-dog"
OUT_WALK="/home/openclaw/blair-documents/saltwash/beach-walk"

render() {
  local src="$1" out="$2" tw="$3" th="$4" crop_w="$5" crop_h="$6" offset_x="$7"
  # crop_w x crop_h = source crop to the target's aspect ratio (centered horizontally on the source's intended figure bias)
  # Note: the source 2:3 and 4:5 crops already preserve figure bias; we only crop horizontally to convert 4:5 -> 11:14 or 3:4.
  # For 4:5 source -> 11:14: very small crop (~25 px each side for beach-dog, ~32 px each side for beach-walk). To preserve
  # the same figure position, we crop equally from both sides (no bias change).
  convert "$src" \
    -crop "${crop_w}x${crop_h}+${offset_x}+0" +repage \
    -filter Lanczos -resize "${tw}x${th}!" \
    -strip -define png:compression-level=9 -define png:compression-strategy=1 \
    "$out"
  echo "  -> $(basename "$out")  (${tw}x${th})"
}

# === beach-dog ===

# 11x14 from 4:5 source (2867x3584 -> target ratio 0.786, need to crop to 2816 wide for that ratio at h=3584)
# 2867 wide at 4:5 = ratio 0.8. Target ratio 0.786. Width = 3584 * 0.786 = 2816. Crop (2867-2816)/2 = 25.5 from each side.
render \
  "$OUT_DOG/beach-dog-4x5.png" \
  "$OUT_DOG/beach-dog-11x14.png" \
  3300 4200 2816 3584 25

# 16x24 from 2:3 source (2389x3584 -> 2:3 exact match, no further crop)
render \
  "$OUT_DOG/beach-dog-2x3.png" \
  "$OUT_DOG/beach-dog-16x24.png" \
  4800 7200 2389 3584 0

# 18x24 from 4:5 source (2867x3584 -> target ratio 0.75 = 3:4, need width = 3584 * 0.75 = 2688)
# Crop (2867-2688)/2 = 89.5 from each side.
render \
  "$OUT_DOG/beach-dog-4x5.png" \
  "$OUT_DOG/beach-dog-18x24.png" \
  5400 7200 2688 3584 89

# === beach-walk ===

# 11x14 from 4:5 source (3584x4480 -> target ratio 0.786, need width = 4480 * 0.786 = 3521)
# Crop (3584-3521)/2 = 31.5 from each side.
render \
  "$OUT_WALK/beach-walk-4x5.png" \
  "$OUT_WALK/beach-walk-11x14.png" \
  3300 4200 3521 4480 31

# 16x24 from 2:3 source (3200x4800 -> 2:3 exact match, no further crop)
render \
  "$OUT_WALK/beach-walk-2x3.png" \
  "$OUT_WALK/beach-walk-16x24.png" \
  4800 7200 3200 4800 0

# 18x24 from 4:5 source (3584x4480 -> target ratio 0.75 = 3:4, need width = 4480 * 0.75 = 3360)
# Crop (3584-3360)/2 = 112 from each side.
render \
  "$OUT_WALK/beach-walk-4x5.png" \
  "$OUT_WALK/beach-walk-18x24.png" \
  5400 7200 3360 4480 112

echo ""
echo "=== Verification ==="
for f in \
  "$OUT_DOG/beach-dog-11x14.png" \
  "$OUT_DOG/beach-dog-16x24.png" \
  "$OUT_DOG/beach-dog-18x24.png" \
  "$OUT_WALK/beach-walk-11x14.png" \
  "$OUT_WALK/beach-walk-16x24.png" \
  "$OUT_WALK/beach-walk-18x24.png"; do
  identify -format "  %f  %wx%h  (%b)\n" "$f"
done