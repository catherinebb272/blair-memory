# Mini Inventory Cycle Count Web App — Framework

*A streamlined tool for Plato's Closet franchise owners to conduct targeted cycle counts*

---

## Overview

**Purpose:** Enable LP investigators to run mini cycle counts — focused scans of specific item categories or date ranges — without needing full RGIS/Datascan deployments.

**Workflow:**
1. Upload DRS Item Buy Detail (full inventory)
2. (Optional) Upload Precount file (category gospel) to filter inventory
3. Upload Scan Data CSV (Column A=SKU, Column B=Zone) OR scan live with zone tracking
4. Review "missing" items (in Precinct but not in scans)
5. Accept/reject each item for write-off
6. Export DRS-ready adjustment file + zone report

---

## Tech Stack Recommendation

| Layer | Recommendation | Rationale |
|-------|---------------|-----------|
| **Frontend** | React + Tailwind CSS | Clean, professional UI; component-based for complex lists |
| **Backend** | Node.js/Express or Python/FastAPI | Lightweight; easy CSV processing |
| **Database** | SQLite (local) or PostgreSQL | Not needed for heavy DB — flat file processing |
| **File Handling** | SheetJS (xlsx) for Excel, PapaParse for CSV | DRS exports are Excel/CSV |
| **Barcode Generation** | JsBarcode (frontend) or Python barcode lib | Print-ready output |
| **Email** | SendGrid API or Nodemailer (SMTP) | Deliverables to user |
| **Hosting** | Static frontend + serverless functions (Vercel/Netlify) | Low cost, easy deployment |

**Alternative (No-Code):** If speed-to-launch matters more than customization, consider **Airtable + Zapier** or **Glide Apps** — but for the barcode+email workflow, custom code is cleaner.

---

## UI/UX Design Principles

### Visual Style
- **Clean, professional** — Think enterprise SaaS, not consumer app
- **High contrast** — Store lighting varies; dark text on light background
- **Large touch targets** — Users may be on tablets in warehouses
- **Progressive disclosure** — Show only current step's controls

### Color Palette
| Purpose | Color | Hex |
|---------|-------|-----|
| Primary Action | Deep Blue | #1E40AF |
| Success/Accept | Green | #059669 |
| Reject/Danger | Red | #DC2626 |
| Background | Off-white | #F8FAFC |
| Text | Dark Gray | #1F2937 |
| Muted | Gray | #6B7280 |

### Typography
- **Headers:** Inter or Roboto (sans-serif, clean)
- **Data:** Monospace for SKUs/item IDs (JetBrains Mono or Fira Code)
- **Size:** Base 16px, headers 24px+, data 14px

---

## App Flow & Screens

### Step 1: Project Setup

**Screen: "New Cycle Count"**

Fields:
- Store name / store number
- Date of count
- Count type dropdown:
  - Full inventory
  - Category scan (jeans, tops, shoes, etc.)
  - Date range (items bought between X and Y)
  - High-value items (retail > $X)
- Optional: Target bin range (if tracking warehouse zones)

Actions:
- [Start New Count] → proceeds to Step 2
- [View Past Counts] → opens history list

---

### Step 2: Data File Upload

**Screen: "Upload Files"**

Three optional uploads:

**1. Item Buy Detail (Required)**
- Full inventory export from DRS
- `.csv` or `.xlsx`
- Columns: SKI (SKU), DRS Cost, DRS Retail, Description, Brand, etc.
- Auto-detects column names

**2. Precount File (Optional - for category filtering)**
- "Precount [category]" export from DRS
- Used to filter Item Buy Detail to specific subcategory
- Logic: Only keep items that exist in BOTH files
- Discards dead SKUs that exist in Precount but not in Item Buy

**3. Scan Data (Optional - OR use live scanning)**
- CSV with Column A = SKU, Column B = Zone
- Can also scan live on Step 3

Actions:
- Upload each file → validates and shows row count
- Continue to scanning when Item Buy Detail is loaded

**Column Detection:**
Supports: SKI, SKU, DRS Cost, Cost, DRS Retail, Current Retail, Brand Description, etc.

---

### Step 3: Scan Input

**Screen: "Scan Items"**

Zone-based scanning for store organization.

**Mode A: Live Scanning with Zones**
- Set current zone (e.g., "WALL-RACK-1")
- All scanned items automatically assigned to that zone
- "End Zone" button to finish current zone
- Zone summary shows count per zone

**Mode B: Scan Data File Upload**
- CSV with Column A = SKU, Column B = Zone
- Header row auto-detected and skipped
- Zone counts calculated from file

**Scan Input:**
- Large input field for barcode scanner
- Enter key submits each scan
- Running count displayed

**Actions:**
- [Set Zone] - assign current zone name
- [End Current Zone] - finish zone, start new one
- [Clear All] - reset scan data
- [Continue] - proceed to review

---

### Step 4: Review & Decide

**Screen: "Review Items"**

This is the core interaction screen. Shows items that are IN the Precinct but NOT in the scan data (missing items).

**Stats Display:**
- In File: total items in filtered inventory
- Scanned: items uploaded in scan data
- Missing: items to review (in Precinct but not scanned)
- To Review: current queue position

**Item Card:**
```
┌─────────────────────────────────────────────────────────────┐
│  Brand Name                              SKU: SK892034     │
│  Description: Nike Dunk High                             │
│  Cost: $4.00        Retail: $14.00                        │
│  [MISSING - In file but not scanned]                     │
│                                                             │
│  [✓ Accept Write-Off]  [✗ Skip]                           │
│                                                             │
│  [← Previous]    1 of 200    [Next →]                     │
└─────────────────────────────────────────────────────────────┘
```

**Status Indicators:**
- Green card + "ACCEPTED" = already accepted
- Gray card + "SKIPPED" = already skipped  
- Red card + "MISSING" = pending decision

**Navigation:**
- Previous / Next buttons
- Keyboard: ← Accept, → Skip, ↑ Previous, ↓ Next
- Counter shows "X of Y"

**Batch Actions:**
- [Accept All Remaining]
- [Skip All Remaining]

---

### Step 5: Submit & Export

**Screen: "Finalize Count"**

Summary dashboard:
- Total scanned
- Accepted for write-off (count + $ value)
- Rejected
- Missing items (in file but not scanned)

Actions:
- [Generate Adjustment File] → DRS-ready CSV
- [Generate Barcode File] → CSV with SKU, Description, Barcode for printing
- [Email to Me] → triggers email with both attachments
- [Download Both] → local download option

**Adjustment File Format (DRS-Ready):**
```
SKU,Description,Buy Date,Cost,Retail,Adjustment Type,Reason Code,Notes
SK892034,Nike Dunk High,2025-02-15,4.00,14.00,REMOVE,C-Cycl,Physical count 04/2026
```

**Barcode File Format:**
```
SKU,Description,Barcode,Cost,Retail
SK892034,Nike Dunk High,200892034,4.00,14.00
```

---

### Step 6: Email Delivery

**Screen: "Send Results"**

Email composition:
- **To:** User-specified email address(es)
- **Subject:** `Cycle Count - [Store Name] - [Date]`
- **Body:** Summary stats + attachment links
- **Attachments:**
  1. `adjustments_[store]_[date].csv` — for DRS import
  2. `barcodes_[store]_[date].csv` — for label printing

Configuration:
- Save email template for reuse
- Allow CC/BCC addition

---

## Data Model

### Count Session
```json
{
  "id": "uuid",
  "storeName": "Plano 80026",
  "date": "2026-04-02",
  "countType": "category",
  "category": "jeans",
  "createdAt": "2026-04-02T10:30:00Z",
  "status": "completed"
}
```

### Scanned Item
```json
{
  "sku": "SK892034",
  "description": "Nike Dunk High",
  "brand": "Nike",
  "buyDate": "2025-02-15",
  "cost": 4.00,
  "retail": 14.00,
  "zone": "WALL-RACK-1",
  "scannedAt": "2026-04-02T10:35:00Z",
  "status": "accepted | rejected | notInFile | missing"
}
```

### Adjustment Record
```json
{
  "sku": "SK892034",
  "adjustmentType": "REMOVE",
  "reasonCode": "C-Cycl",
  "notes": "Physical count 04/2026",
  "decidedAt": "2026-04-02T10:40:00Z",
  "decidedBy": "user"
}
```

---

## Security & Deployment Notes

### Security
- **Local processing only** — No inventory data sent to third-party servers (unless email is configured)
- **Session storage** — Use browser localStorage or IndexedDB; auto-clear on session end
- **HTTPS required** — If hosting anywhere, TLS is mandatory

### Deployment Options
1. **Local-first (no server):** React SPA + File API = runs entirely in browser
2. **Simple server:** Node.js backend for email + file processing
3. **Fully hosted:** Vercel (frontend) + serverless functions

### Browser Support
- Chrome/Edge (primary)
- Safari (secondary)
- No IE11

---

## Future Enhancements (Post-MVP)

| Feature | Description |
|---------|-------------|
| Multi-file merge | Combine multiple scan sessions into one adjustment file |
| Photo capture | Attach photos of damaged items for write-off documentation |
| Voice input | "Next", "Accept", "Reject" voice commands for hands-free operation |
| DRS API integration | Direct import/export with DRS (if API available) |
| Historical comparison | Show previous count vs. current to highlight drift |
| Offline mode | PWA with sync when back online |

---

## File Storage

Save to: `/documents/pc/mini-cycle-count-app/`

```
mini-cycle-count-app/
├── SPEC.md                    # This file
├── frontend/                  # React app
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   └── utils/
│   └── package.json
├── backend/                   # Express server
│   ├── index.js
│   └── routes/
└── docs/
    └── user-guide.md
```

---

*Framework prepared for Plato's Closet mini cycle count workflow. Adapt count types and reason codes based on store-specific DRS requirements.*