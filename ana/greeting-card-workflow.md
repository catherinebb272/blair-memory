# Greeting Card Workflow Guide

## Overview

This document tracks the process for creating ANA (Apart Not Alone) greeting card product mockups for Etsy listings.

---

## 1. Canva Bulk Merge Process

### What Worked ✅

- **Drag & Drop**: Dragging images directly into Canva worked when URL import failed
- **Canva AI with Original Image**: Using Canva's AI edit feature with the actual card image as a reference produces accurate mockups. Much better than Gemini because Canva has the actual image to work from.

### What Didn't Work ❌

- **URL Import via Composio**: Using `CANVA_POST_URL_IMPORTS` to import images by URL failed. The imported images didn't appear in the design.
- **Gemini Image Replication**: Gemini could not replicate the exact card design from text prompts. It consistently invented its own designs even with detailed descriptions.

### Bulk Merge Steps (Working)

1. Prepare all card images in a folder
2. Open Canva template (or create new)
3. **Drag and drop** each card image onto the canvas
4. Use Canva's AI edit feature (Magic Edit / Magic Expand) to place the card in mockup场景
5. Export each design individually

---

## 2. here.now Image Hosting

here.now is used to host images with permanent public URLs for use in Etsy and other external tools.

### API Workflow (Working)

```javascript
const SLUG = 'boreal-larch-wxxv';
const API_KEY = process.env.HERENOW_API_KEY;
```

### Step-by-Step Process

**Step 1: Get file metadata**
```javascript
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

function getFileMeta(filePath) {
  const buffer = fs.readFileSync(filePath);
  const hash = crypto.createHash('sha256').update(buffer).digest('hex');
  const stat = fs.statSync(filePath);
  return {
    path: path.basename(filePath),
    size: stat.size,
    contentType: 'image/jpeg', // adjust for png/gif
    sha256: hash
  };
}
```

**Step 2: Request upload slots (PUT, not POST)**
```javascript
const data = JSON.stringify({ files: [fileMeta] });

const req = https.request({
  hostname: 'here.now',
  path: '/api/v1/publish/' + SLUG,
  method: 'PUT',  // NOT POST
  headers: { 'Authorization': 'Bearer ' + API_KEY, 'Content-Type': 'application/json' }
}, res => {
  // Response includes:
  // - upload.versionId
  // - upload.uploads[].url (presigned URL for each file)
  // - upload.finalizeUrl
});
```

**Key Finding**: Files must be an array (`{files: [...]}`), not a single object.

**Step 3: Upload file to presigned URL**
```bash
curl -X PUT -H "Content-Type: image/jpeg" \
  --data-binary @/path/to/file.jpg \
  "https://...r2.cloudflarestorage.com/...?X-Amz-Signature=..." \
  -o /dev/null -w "%{http_code}\n"
```

**Step 4: Finalize**
```javascript
const data = JSON.stringify({ versionId: '01KS80...' });

const req = https.request({
  hostname: 'here.now',
  path: '/api/v1/publish/' + SLUG + '/finalize',
  method: 'POST',
  headers: { 'Authorization': 'Bearer ' + API_KEY, 'Content-Type': 'application/json' }
}, res => { ... });
```

### Permanent URL Format

```
https://boreal-larch-wxxv.here.now/{filename}
```

### API Key Location

Stored in `.env` as `HERENOW_API_KEY`.

---

## 3. Gemini Mockup Generation (Not Recommended)

We attempted to use Gemini via Composio CLI to generate mockup images, but it failed to replicate the card design accurately.

### What We Tried

- Detailed prompts describing every element (text, colors, flowers, layout)
- Multiple attempts with different phrasings
- Explicit instructions: "EXACT reproduction, do not add or change"

### Result

Gemini consistently invented its own designs rather than reproducing the provided card.

### Recommendation

Use Canva's AI instead (see Section 1).

---

## 4. Gemini Batch Image Capability

While Gemini failed at accurate mockup replication (see Section 3), it **can** generate multiple images in batch via the API. This is a separate capability from the mockup task and could be useful for:
- Generating multiple design variations simultaneously
- Creating concept art for new coins
- Batch-producing promotional graphics

To use batch image generation, use the Gemini API directly (not the mockup workflow).

---

## 5. Etsy Listing Contents

### Required Photos (Minimum 3)

Each greeting card listing needs at least these mockup images:

1. **Flat Lay** — Card laid flat on neutral background, shows full design
2. **Standing** — Card propped/displayed upright (using Canva AI)
3. **Back of Card** — If the back has special design/branding; otherwise optional

*Optional additions: Envelope shot, gift context, scale reference*

### Description Slides (4 Slides)

Create a 4-slide description for each listing:

**Slide 1: Product as Downloadable Printable**
- Describe the file format (PDF, ready to print)
- Mention it's a digital download — no physical product shipped
- List what's included (e.g., "5x7 card + envelope template")
- Note that colors may vary slightly based on printer

**Slide 2: How to Print / Supplies**
- Recommended paper type (cardstock, 80-110 lb)
- Printer settings ("best quality", "photo paper" if applicable)
- Cutting guide if multiple cards per sheet
- Alternative: Local print shop / online printing services

**Slide 3: About Apart Not Alone**
- Brief story: founded by someone in recovery, creating meaningful milestone coins
- Mention the mission: secular, judgment-free celebration of sobriety journeys
- Link to pinned Instagram post for full origin story

**Slide 4: Store Offering / What Else**
- Highlight other milestones available (Month 1 through 3 Year)
- Mention custom orders welcomed
- Note: All designs are original artwork by Barbara

### Suggested Checklist Per Listing

- [ ] 3+ product photos (flat, standing, back)
- [ ] Title (include key terms: downloadable printable, greeting card, milestone)
- [ ] Description (4 slides as above)
- [ ] Tags (downloadable, printable, card, sobriety, milestone, recovery, gift)
- [ ] Category: Paper & Party Supplies > Paper > Greeting Cards
- [ ] File upload (PDF)
- [ ] Production time: Instant download
- [ ] Price (based on design complexity)

---

## 6. Greeting Card Listing Templates (January - December)

Based on birth flower symbolism from the ANA Birth Flower Series. These cards celebrate a sobriety anniversary that falls in the given month — works for any year of sobriety.

### Etsy Best Practices Used
- **Title**: 140 chars max, keywords front-loaded
- **Tags**: 13 max, 20 chars each — mix of specific + broad terms
- **Description**: Follows 4-slide format from Section 5

| Month | Flower & Meaning | Title (Keywords) | Description Summary | Tags |
|-------|------------------|------------------|---------------------|------|
| January | Carnation — love, fascination, pure affection | "Sobriety Anniversary Card - January Carnation - Downloadable Printable Recovery Gift" | Celebrate any January sobriety anniversary with carnation, symbolizing fresh love for life and new beginnings. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, january, carnation |
| February | Violet — modesty, loyalty, spiritual wisdom | "Sobriety Anniversary Card - February Violet - Downloadable Printable Encouragement Card" | Honor a February sobriety milestone with violet, representing loyalty to your journey and inner wisdom. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, february, violet |
| March | Daffodil — new beginnings, rebirth, optimism | "Sobriety Anniversary Card - March Daffodil - Downloadable Printable Celebration Card" | Mark any March sobriety anniversary with daffodil, heralding new beginnings and bright optimism. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, march, daffodil |
| April | Daisy — innocence, purity, loyal love | "Sobriety Anniversary Card - April Daisy - Downloadable Printable Motivational Card" | Celebrate an April sobriety milestone with daisy, representing purity of purpose and self-love. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, april, daisy |
| May | Lily of the Valley — sweetness, happiness, return of happiness | "Sobriety Anniversary Card - May Lily - Downloadable Printable Inspirational Card" | Honor a May sobriety anniversary with lily of the valley, celebrating the happiness found in your journey. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, may, lily of the valley |
| June | Rose — love, passion, romance | "Sobriety Anniversary Card - June Rose - Downloadable Printable Anniversary Card" | Celebrate any June sobriety milestone with rose, symbolizing love for yourself and your new life. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, june, rose |
| July | Larkspur — positivity, lightness, open heart | "Sobriety Anniversary Card - July Larkspur - Downloadable Printable Gift Card" | Mark a July sobriety anniversary with larkspur, representing joy and an open heart. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, july, larkspur |
| August | Gladiolus — strength, integrity, moral character | "Sobriety Anniversary Card - August Gladiolus - Downloadable Printable Strength Card" | Honor an August sobriety milestone with gladiolus, standing tall in strength and integrity. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, august, gladiolus |
| September | Aster — patience, elegance, refined beauty | "Sobriety Anniversary Card - September Aster - Downloadable Printable Elegant Card" | Celebrate a September sobriety anniversary with aster, representing patience and refined beauty. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, september, aster |
| October | Marigold — creativity, passion, radiant energy | "Sobriety Anniversary Card - October Marigold - Downloadable Printable Creative Card" | Mark an October sobriety milestone with marigold, symbolizing creative spirit and warmth. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, october, marigold |
| November | Chrysanthemum — friendship, loyalty, honest joy | "Sobriety Anniversary Card - November Chrysanthemum - Downloadable Printable Card" | Honor a November sobriety anniversary with chrysanthemum, celebrating loyal friendships and joy. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, november, chrysanthemum |
| December | Narcissus — hope, rebirth, new beginnings | "Sobriety Anniversary Card - December Narcissus - Downloadable Printable Hope Card" | Celebrate any December sobriety milestone with paperwhite narcissus, bringing hope and renewal. | sobriety, soberversary, anniversary, recovery, downloadable, printable, greeting card, encouragement, gift, support, addiction recovery, december, narcissus |

### Notes
- All titles stay under 140 characters
- Tags mix: month, flower name, keyword (sobriety, recovery), format (downloadable, printable), use (gift, encouragement)
- These work for ANY year of sobriety — just match the anniversary month to the flower
- Descriptions should use the 4-slide format from Section 5
- Price suggestion: $3.50-$5.50 for digital downloads

---

## Files & Locations

| Item | Location |
|------|----------|
| Card images | `assets/coins/` |
| Mockup exports | `assets/` |
| here.now site | https://boreal-larch-wxxv.here.now/ |
| This document | `ana/greeting-card-workflow.md` |

---

*Last updated: 2026-05-22*