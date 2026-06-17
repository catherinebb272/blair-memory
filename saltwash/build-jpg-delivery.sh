#!/usr/bin/env python3
"""
Render JPG delivery versions of all print-ready PNG files at quality 95.
Quality 95 = visually lossless for continuous-tone watercolor at 300 DPI.
PNG masters are kept as-is for archival.

PIL is more robust than ImageMagick for handling the partial/truncated PNGs
that can result from interrupted render jobs (one was caught during JPG
conversion — beach-walk-16x24.png from the earlier session).
"""

import os
import sys
from PIL import Image, ImageFile

# Tolerate truncated PNGs so a single bad source doesn't block the whole batch.
ImageFile.LOAD_TRUNCATED_IMAGES = True

BASE = "/home/openclaw/blair-documents/saltwash"
SETS = [
    ("beach-dog", "beach-dog"),
    ("beach-walk", "beach-walk"),
]
SIZES = ["5x7", "8x10", "11x14", "16x24", "18x24"]
ETSY_LIMIT_MB = 20

failed = []
for folder, prefix in SETS:
    for size in SIZES:
        src = f"{BASE}/{folder}/{prefix}-{size}.png"
        dst = f"{BASE}/{folder}/{prefix}-{size}.jpg"
        try:
            img = Image.open(src)
            if img.mode != "RGB":
                img = img.convert("RGB")
            img.save(dst, "JPEG", quality=95, optimize=True, subsampling=0)
            mb = os.path.getsize(dst) / 1024 / 1024
            warn = "  ⚠️  OVER LIMIT" if mb > ETSY_LIMIT_MB else ""
            print(f"  {prefix}-{size}.jpg  {img.size[0]}x{img.size[1]}  {mb:.1f} MB{warn}")
            if mb > ETSY_LIMIT_MB:
                failed.append((prefix, size, mb))
        except Exception as e:
            print(f"  FAILED {prefix}-{size}: {e}")
            failed.append((prefix, size, str(e)))

if failed:
    print(f"\n{len(failed)} file(s) over limit or failed:")
    for f in failed:
        print(f"  {f}")
    sys.exit(1)

print("\nAll JPGs under Etsy 20MB limit. ✓")