# OCR Skill (Local — tesseract.js)

**Purpose:** Extract text from screenshots / images when vision models aren't available. Used by the Etsy check-in workflow for orders, messages, and reviews screenshots.

**Location:** `/home/openclaw/.openclaw/workspace/ocr-tools/`

**Why local:** The configured OpenRouter models (`minimax-m3`, `minimax-m2.5`, `gpt-oss-120b`) are all text-only — no image input. `openclaw infer image describe` fails with "Model does not support images." tesseract.js is the reliable fallback.

**Stack:**
- `tesseract.js` (pure JS, no system tesseract binary needed)
- `sharp` (image preprocessing)
- Trained data: `eng.traineddata` (English) in the folder

**Setup (already done 2026-09-18):**
```bash
cd /home/openclaw/.openclaw/workspace/ocr-tools
npm install tesseract.js sharp
```

**Usage:**
```bash
cd /home/openclaw/.openclaw/workspace/ocr-tools
node ocr.js /path/to/image.png
```

Returns:
- `=== TEXT ===` — raw OCR output
- `=== CONF ===` — confidence (0–100). Typical Etsy screenshots: 75–85%

**Tips for higher confidence:**
- Crop the screenshot to just the relevant area before OCR (Etsy UI chrome lowers accuracy).
- For very small fonts (gift message text, prices), upscale 2x via sharp before OCR.

**Known limitations:**
- Etsy gift message text in small fonts often scores below the rest of the row — re-send cropped if needed.
- Handwriting is not supported (we only use this for screen text).

**Linked skills:** `etsy_checkin` (uses OCR for screenshot parsing)
