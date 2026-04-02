# Partial Inventory Count Procedure — Tank Top Section
## Plato's Closet Plano

---

## Purpose
Conduct a targeted physical inventory count of the tank top section to identify missing merchandise. This procedure compares a physical scan of items against the system's expected inventory (Cycle Count), then enriches the missing-item list with product descriptions for write-off processing.

---

## Data Sources Required

### 1. Cycle Count List (from DRS)
- **What it is:** A list of expected SKUs and quantities on hand for the tank top section
- **How to get it:** Run a Cycle Count report from the DRS point of sale system
- **Key fields:** SKU, Quantity On Hand (QOH)
- **When to get it:** Day of the count, before beginning the physical scan

### 2. Item Buy Detail (last 18 months)
- **What it is:** A transaction-level export of all items bought in the last 18 months
- **How to get it:** Export from DRS → Item Buy Detail report, date range = last 18 months
- **Key fields for this procedure:**
  - Column A: SKU (SKI)
  - Column B: Brand Description
  - Column D: Description
  - Column F: Buy Date
  - Column O: QOH
- **Purpose:** Reference what the item was before writing it off in the system. Provides context on item type, brand, and original buy details.

---

## Special Handling: WO Tags

Some tags in the system will have barcodes starting with **WO**.

- **What they are:** Returns from other Plato's Closet stores
- **Behavior in DRS:**
  - May NOT appear in Item Buy Detail (depending on date range and how returns are logged)
  - May show QOH > 1 because they are bulk SKUs (multiple returned items aggregated under one SKU)
- **Action:** Do NOT write these off without investigating. Check:
  1. Is the SKU in Item Buy Detail?
  2. Does QOH make sense given the return history?
  3. Verify the item actually exists physically before writing off

---

## Procedure

### Step 1: Prepare Data Files
1. **Export Cycle Count** from DRS for the tank top section
   - Save as CSV or Excel
   - Ensure columns: SKU, QOH

2. **Export Item Buy Detail** from DRS for the last 18 months
   - Save as CSV or Excel
   - Keep full column set for reference

### Step 2: Physical Count
1. Take a laptop to the tank top section
2. Scan every tag on every item in the section
3. Export/record the scanned list (should include SKU/UPC from each tag)

### Step 3: Comparison
1. Import both lists into Excel/Google Sheets
2. **Compare Cycle Count QOH vs. Scanned QOH**
   - For each SKU in Cycle Count:
     - If SKU appears in scanned list → item is present
     - If SKU does NOT appear in scanned list → **potential missing item**
3. Create a list of missing SKUs

### Step 4: Enrich with Descriptions
For each missing SKU:
1. Look up the SKU in the Item Buy Detail
2. Pull the **Description** (Column D) and **Brand Description** (Column B)
3. Add these to the missing items list

### Step 5: Handle WO Tags
For any missing SKU:
1. Check if the barcode starts with **WO**
2. If yes:
   - Look up in Item Buy Detail
   - If NOT found → investigate before writing off (may be a return not yet in the system)
   - If found with QOH > 1 → verify physical existence (returns bulk up under one SKU)
3. Document any WO tags with unusual behavior for review

### Step 6: Filter for Zero-Expected Items (Optional)
After generating the missing items list, you may want to flag items that have **no expected QOH in Item Buy Detail** — these are items that may have already been written off or never existed in the system. The filter logic:

1. **Missing in Scan** (not found physically) AND
2. **QOH = 0 in Item Buy Detail** (system shows none on hand)

These items are suspicious because:
- They're not on the floor (missing from scan)
- The system also shows zero on hand (already written off or never bought)
- Could indicate phantom inventory or previous write-offs that weren't properly processed

**Separate this list** for review — these may need extra verification before writing off again.

### Step 7: Add Rack Location from Scan Markers
The scan file will be in scan order with section markers. Parse these to assign rack locations:

1. **Scan for section markers:** Look for lines starting with "end of" (case-insensitive)
2. **Assign section names:** Everything BEFORE the first marker goes in the section named in that marker. Everything AFTER until the next marker goes in the next section, etc.
3. **Create Rack Location field:** Add a column showing which section each SKU was scanned in

**Example:**
```
SKU001
SKU002
end of tank wall left
SKU003
SKU004
end of tank wall right
```
- SKU001, SKU002 → Section: "tank wall left"
- SKU003, SKU004 → Section: "tank wall right"

**Note:** Some scans may not have markers — leave blank if no section marker found.

### Step 8: Quality Check — Duplicate Detection
After receiving the scan count, flag duplicates to identify scan errors:

#### Type A: Duplicate Scan (same SKU, rows apart)
- **Definition:** Same SKU appears multiple times in the scan list
- **Detection:** If SKU appears again within 2 rows of previous occurrence
- **Likely cause:** Scanner registered the same item twice (e.g., held button down, scanned too fast)
- **Flag as:** "DUPLICATE_SCAN"

#### Type B: Chunk Duplication (same rack scanned twice)
- **Definition:** A block/chunk of consecutive SKUs repeats later in the scan
- **Detection:** Find sequences of 5+ identical SKUs appearing in two separate locations in the scan file
- **Likely cause:** Someone scanned the same rack section twice (intentional or accidental)
- **Flag as:** "DUPLICATE_RACK"

**Implementation:** For each SKU in the scan:
1. Track row number and SKU
2. Check if SKU appeared within last 2 rows → flag as "DUPLICATE_SCAN"
3. Check for repeating sequences (5+ consecutive SKUs matching another sequence) → flag as "DUPLICATE_RACK"

**Output:** Add a "Duplicate Flag" column to the scan results indicating:
- `DUPLICATE_SCAN` — remove duplicates, keep one
- `DUPLICATE_RACK` — investigate rack, may need partial re-count
- (blank) — valid scan

### Step 9: Write-Off Preparation
Final list should include:
- SKU
- Rack Location (Section)
- Quantity On Hand (from Precount)
- Description (from Item Buy Detail)
- Brand Description
- Notes (e.g., "WO tag - verify before write-off", "QOH=0 - verify before write-off", "DUPLICATE_SCAN", "DUPLICATE_RACK")

This list is ready for the store owner to review and process write-offs in DRS.

---

## PHASE 2: Generate Printable Barcode Sheets

**Trigger:** Owner confirms ready to proceed with barcode generation.

### Step 10: Prepare SKU List for Barcode Generator
1. Create a text file with **one SKU per line** (no headers)
2. Email to owner at catherine1@bellbracken.com
3. Subject: "Barcode SKUs - Ready for Generator"

### Step 11: Owner Generates Barcodes
Owner instructions:
1. Go to https://www.free-barcode-generator.org/bulk-barcode-generator/
2. Select barcode type: **Code 128**
3. Enter dimensions: **100h × 300w** (height 100px, width 300px)
4. Paste the SKU list (one per line)
5. Generate and download as **JPG or PNG** (bulk download)
6. Upload the downloaded barcode images to Agent (via email or workspace)

### Step 12: Format Barcodes into Printable Sheets
**When owner uploads barcode images:**
1. Receive all JPG/PNG files
2. Arrange into **5 columns × 22 rows** per page (110 barcodes per page)
3. Create separate PDF files for each 110-item batch
4. Email each PDF to owner with subject: "Barcode Sheet - Page X of Y"

### Step 13: Print Instructions
Owner instructions for printing:
1. Open each PDF file
2. Print settings: **Shrink to Fit** (or "Scale to Fit Page")
3. Paper size: Letter (8.5" × 11") or whatever default
4. Print all pages

### Step 14: Scan at Store
Owner instructions at store:
1. Go to Inventory Adjustments in DRS
2. Select **Repeat Adjust Out to Zero** setting
3. Scan first barcode → select **C-CYCL** for Cycle Count
4. Scan remaining barcodes (system will write each off)
5. Complete the adjustment

---

*Last updated: 2026-04-01*

---

## Notes for the Owner

- **Cycle Count limitation:** Shows only SKU and QOH — no product details. This is why Item Buy Detail is needed for context.
- **WO tags are ambiguous:** They often represent returns from other stores and may not have buy records in the current store's system. Investigate before writing off.
- **Verification recommended:** Before processing write-offs, physically verify that missing items are truly absent from the floor/back room.

---

## Column Reference (Item Buy Detail)

| Col | Heading |
|-----|---------|
| A | SKU (SKI) |
| B | Brand Description |
| C | Model |
| D | Description |
| E | Long Description |
| F | Buy Date |
| G | Sale Date |
| K | Buy Trx ID |
| L | Buyer |
| O | QOH |
| P | DRS Cost |
| Q | DRS Retail |

---

*Last updated: 2026-04-01*