# Barcode PDF Formatting Guide

## Overview
Process barcode images from barcodegenerator.tech into a printable PDF for cycle counts.

## Process

### 1. Get Barcodes
- Generate barcodes at barcodegenerator.tech using Code 128 format
- Download as ZIP file (~91 images typical for one product category)
- Upload ZIP to GitHub: `documents/pc/mini-cycle-count-app/`

### 2. Download & Extract
```bash
# Download from GitHub
curl -L "https://raw.githubusercontent.com/catherinebb272/blair-documents/main/documents/pc/mini-cycle-count-app/barcodes(barcodegenerator).zip" -o barcodes.zip

# Extract (requires adm-zip node module)
node -e "const AdmZip = require('adm-zip'); new AdmZip('./barcodes.zip').extractAllTo('./barcodes_extracted', true);"
```

### 3. Create PDF
Create HTML with inline images, then convert to PDF:

```javascript
const fs = require('fs');

const images = [];
for (let i = 1; i <= 91; i++) {
  const imgData = fs.readFileSync(`barcodes_extracted/barcode-Code128_${i}.png`);
  images.push(imgData.toString('base64'));
}

// Current working template (needs refinement)
let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Barcodes</title>
  <style>
    @page { size: letter; margin: 0.25in; }
    body { margin: 0; padding: 0; width: 8in; }
    .row { display: flex; width: 100%; margin-bottom: 2px; }
    .cell { width: 1.5in; height: 0.4in; text-align: center; overflow: hidden; margin: 0 10px; }
    .cell img { max-width: 100%; max-height: 100%; width: auto; height: auto; }
  </style>
</head>
<body>
`;

for (let row = 0; row < 22; row++) {
  html += '<div class="row">';
  for (let col = 0; col < 5; col++) {
    const idx = row * 5 + col;
    if (idx < images.length) {
      html += `<div class="cell"><img src="data:image/png;base64,${images[idx]}"></div>`;
    } else {
      html += '<div class="cell"></div>';
    }
  }
  html += '</div>';
}

html += '</body></html>';

fs.writeFileSync('barcodes.html', html);
```

### 4. Convert to PDF
Use browser PDF endpoint:
```bash
curl -s -X POST "http://154.12.227.255:3100/pdf?token=heyron-browser-2026" \
  -H "Content-Type: application/json" \
  -d @pdf-request.json \
  -o barcodes.pdf
```

Where `pdf-request.json` contains: `{"html": "<!DOCTYPE html>..."}`

### 5. Email PDF
Base64 encode and send via AgentMail API.

---

## Issues to Fix

1. **Reference PDF from April 1** used 6×8 grid with larger barcodes
2. Current version has barcodes too small
3. Need to match the original layout better
4. AgentMail cannot download received attachments - only send (API gap)

## File Locations
- Barcode ZIP source: `documents/pc/mini-cycle-count-app/`
- Extracted images: `barcodes_extracted/`
- Output PDF: `barcodes.pdf`