# Print Cost Calculator - Specification

## Overview
Data-driven calculator for home printing costs (greeting cards, stickers, stationery). Scalable via JSON configuration.

## Data Structure

### products.json
```json
{
  "products": {
    "greeting-card-5x7": {
      "name": "5x7 Greeting Card",
      "category": "card",
      "inputs": {
        "paperCostPerSheet": { "label": "Paper cost per sheet", "default": 0.20 },
        "sheetsPerUnit": { "label": "Sheets per card", "default": 1 },
        "coverage": { "label": "Ink coverage %", "default": 15 },
        "laborMinutes": { "label": "Labor minutes per unit", "default": 2 },
        "packagingCost": { "label": "Packaging cost (cello bag)", "default": 0.10 },
        "envelopeCost": { "label": "Envelope cost", "default": 0.08 }
      }
    },
    "greeting-card-4x6": {
      "name": "4x6 Greeting Card",
      "category": "card",
      "inputs": { ... }
    },
    "sticker-sheet-4x6": {
      "name": "4x6 Sticker Sheet",
      "category": "sticker",
      "inputs": {
        "paperCostPerSheet": { "label": "Sticker paper cost per sheet", "default": 0.25 },
        "stickersPerSheet": { "label": "Stickers per sheet", "default": 8 },
        "coverage": { "label": "Ink coverage %", "default": 100 },
        "laborMinutes": { "label": "Labor minutes per sheet", "default": 5 },
        "laminationCost": { "label": "Lamination cost per sheet", "default": 0.15 }
      }
    },
    "individual-sticker-2": {
      "name": "2\" Individual Sticker",
      "category": "sticker",
      "inputs": {
        "paperCostPerSheet": { "label": "Sticker paper cost per sheet", "default": 0.25 },
        "stickersPerSheet": { "label": "Stickers per sheet", "default": 4 },
        "coverage": { "label": "Ink coverage %", "default": 100 },
        "laborMinutes": { "label": "Labor minutes per sheet", "default": 3 },
        "laminationCost": { "label": "Lamination cost per sheet", "default": 0.15 }
      }
    }
  },
  "shared": {
    "inkCostPerPage": { "label": "Ink cost per full-coverage page", "default": 0.08 },
    "printerCost": { "label": "Printer cost", "default": 400 },
    "printerLifetimePages": { "label": "Printer lifetime (pages)", "default": 50000 },
    "hourlyLaborRate": { "label": "Hourly labor rate", "default": 15 }
  }
}
```

### Calculations
- **Ink per unit** = (coverage% ÷ 100) × inkCostPerPage
- **Printer depreciation per unit** = printerCost ÷ printerLifetimePages
- **Labor per unit** = (laborMinutes ÷ 60) × hourlyLaborRate
- **Total per unit** = paperCost + ink + printer depreciation + labor + packaging + lamination (if applicable)

### Storage
- **Defaults:** localStorage remembers last-used values per product type
- **Saved calculations:** localStorage saves calculations with series name (e.g., "soberflower", "tiny-victories")

## UI Layout
1. Header with app title
2. Product selector dropdown
3. Shared inputs section (ink, printer, labor rate)
4. Product-specific inputs section
5. Calculate button
6. Results display (per unit, per sheet, batch options)
7. Save functionality (series name input)
8. Saved calculations list

## Future Expansion
Add new products → add entry to products.json only, no code changes needed.