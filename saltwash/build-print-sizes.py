#!/usr/bin/env python3
"""
Build Saltwash print sizes from the cleaned 18x24 master JPG.

Given the post-Photoshop 18x24 master, downscale to the other 4 standard
print sizes (5x7, 8x10, 11x14, 16x24) at 300 DPI as JPG Q95 delivery files.
Outputs go alongside the master in print-sizes/, ready for Catherine to
retrieve and upload to Etsy.

Default crop is CENTERED: the master is cropped to the target's aspect
ratio (centered), then resized to the target pixel dimensions. For
per-size crop instructions (split top/bottom, all-from-top, recenter
the figure, etc.), ask Blair in conversation first; she'll either apply
the crop as a one-off convert step before/after this script, or pass
the offsets in via the optional CROP_OFFSETS env var.

Etsy 20MB upload limit is checked; files over the limit are flagged so
we can drop to Q90 or Q85 before Catherine uploads.

Usage:
    python3 build-print-sizes.py <master.jpg> <print-name>

Example:
    python3 build-print-sizes.py \\
        saltwash/plover/print-sizes/saltwash-plover_18x24_300dpi.jpg \\
        saltwash-plover

Optional env var (advanced):
    CROP_OFFSETS='{"5x7": [0, 0, 0, 0], "8x10": [0, 0, 0, 0]}'
        Per-size (top, right, bottom, left) pixel offset from the centered
        default. Positive = cut that much more, negative = add space (rare).
        Sizes not listed default to centered.
"""

import json
import os
import sys
from PIL import Image, ImageFile

# Tolerate truncated JPGs so a single bad source doesn't block the whole batch.
ImageFile.LOAD_TRUNCATED_IMAGES = True

ETSY_LIMIT_MB = 20

# Target sizes at 300 DPI: (label, width, height). 18x24 is the master;
# these are the 4 derived sizes. Aspect-matched where possible.
SIZES = [
    ("5x7",   1500, 2100),   # 0.714
    ("8x10",  2400, 3000),   # 0.800
    ("11x14", 3300, 4200),   # 0.786
    ("16x24", 4800, 7200),   # 0.667
]


def centered_crop(img, target_w, target_h, offset=(0, 0, 0, 0)):
    """
    Crop img to the target's aspect ratio, centered, with optional
    per-side offset (top, right, bottom, left) in pixels.
    Positive offset = cut that much more from that side.
    """
    sw, sh = img.size
    target_ratio = target_w / target_h
    source_ratio = sw / sh
    top, right, bottom, left = offset

    if source_ratio > target_ratio:
        # Source is wider than target — crop horizontally.
        new_sw = round(sh * target_ratio)
        total_cut = sw - new_sw
        # Default: half from each side. Apply left/right offsets (positive = more cut on that side).
        cut_left = (total_cut // 2) + left
        cut_right = (total_cut - cut_left) + right
        # Clamp to non-negative.
        cut_left = max(0, cut_left)
        cut_right = max(0, cut_right)
        offset_x = cut_left
        return img.crop((offset_x, 0, sw - cut_right, sh))
    elif source_ratio < target_ratio:
        # Source is taller than target — crop vertically.
        new_sh = round(sw / target_ratio)
        total_cut = sh - new_sh
        # Default: half from each side. Apply top/bottom offsets.
        cut_top = (total_cut // 2) + top
        cut_bottom = (total_cut - cut_top) + bottom
        cut_top = max(0, cut_top)
        cut_bottom = max(0, cut_bottom)
        offset_y = cut_top
        return img.crop((0, offset_y, sw, sh - cut_bottom))
    else:
        # Same aspect — no crop needed, but apply top/right/bottom/left as edge trim if requested.
        if any(offset):
            t, r, b, l = offset
            return img.crop((l, t, sw - r, sh - b))
        return img


def main():
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)

    master_path = sys.argv[1]
    print_name = sys.argv[2]

    if not os.path.exists(master_path):
        print(f"Master not found: {master_path}")
        sys.exit(1)

    out_dir = os.path.dirname(master_path)

    # Parse optional per-size crop offsets from env.
    crop_offsets = {}
    raw = os.environ.get("CROP_OFFSETS", "").strip()
    if raw:
        try:
            parsed = json.loads(raw)
            for k, v in parsed.items():
                if len(v) == 4:
                    crop_offsets[k] = tuple(v)
                else:
                    print(f"WARNING: ignoring {k} (need 4 offsets)")
        except json.JSONDecodeError as e:
            print(f"WARNING: CROP_OFFSETS not valid JSON, ignoring ({e})")

    print(f"Building 4 print sizes from {master_path}")
    print(f"Print name: {print_name}")
    print(f"Output dir: {out_dir}")
    if crop_offsets:
        print(f"Per-size crop offsets: {crop_offsets}")
    print()

    try:
        master = Image.open(master_path)
    except Exception as e:
        print(f"Failed to open master: {e}")
        sys.exit(1)

    if master.mode != "RGB":
        master = master.convert("RGB")

    mw, mh = master.size
    print(f"Master: {mw} x {mh}  ({mw / mh:.4f} aspect)")
    print()

    failed = []
    for label, tw, th in SIZES:
        offset = crop_offsets.get(label, (0, 0, 0, 0))
        try:
            cropped = centered_crop(master, tw, th, offset)
            resized = cropped.resize((tw, th), Image.LANCZOS)
            out_path = os.path.join(out_dir, f"{print_name}_{label}_300dpi.jpg")
            resized.save(out_path, "JPEG", quality=95, optimize=True, subsampling=0, dpi=(300, 300))
            mb = os.path.getsize(out_path) / 1024 / 1024
            warn = "  WARNING: OVER ETSY 20MB LIMIT" if mb > ETSY_LIMIT_MB else ""
            print(f"  {print_name}_{label}_300dpi.jpg  {tw}x{th}  {mb:.1f} MB{warn}")
            if mb > ETSY_LIMIT_MB:
                failed.append((label, mb))
        except Exception as e:
            print(f"  FAILED {label}: {e}")
            failed.append((label, str(e)))

    print()
    if failed:
        print(f"{len(failed)} file(s) over limit or failed:")
        for f in failed:
            print(f"  {f}")
        sys.exit(1)

    print("All 4 print sizes under Etsy 20MB limit.")


if __name__ == "__main__":
    main()
