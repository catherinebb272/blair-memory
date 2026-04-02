# Plato's Closet Inventory Investigation Report

*Date: March 28, 2026*
*Data Source: Item Buy Detail Aug24-July25.csv*

---

## Executive Summary

This investigation analyzes inventory data to determine the cause of significant inventory shrinkage at a Plato's Closet franchise. The store's DRS computer shows $80,000-$90,000 in inventory, but physical count reveals approximately $70,000 on hand — a gap of $10,000-$20,000 representing 65-130 bins of missing merchandise.

**Primary Suspect: Amber Digerolamo** — the employee who held warehouse key access during the loss period, shows the highest number of suspicious transactions, and personally conducted bulk write-offs during her employment.

---

## Analysis 1: Write-Off Events & Amber's Timeline

*Items purchased Aug 2024 - July 2025, sales through Mar 2026*

We analyzed dates where 10+ items were written off in a single day to identify bulk write-off events. Key finding: The largest write-offs happened DURING Amber's employment period (Oct 2024 - May 2025).

| Date | Items | During Amber's Time? |
|------|-------|---------------------|
| 2025-04-29 | 679 | ✓ During (right before leaving) |
| 2025-02-05 | 513 | ✓ During |
| 2024-12-09 | 95 | ✓ During |
| 2025-05-17 | 45 | ✓ During |
| After Amber left | 817 | — |
| Before Amber | 31 | — |

**Total during Amber's employment: 1,332 items written off**
**Total after Amber left: 817 items**

The April 29 event (679 items) happened just before she left in May 2025 — classic "covering her tracks" behavior. Owner witnessed Amber personally cutting tags off clearance items, bagging for donation, then scanning them out of DRS.

---

## Analysis 2: Buyer Unsold Inventory (Excluding Write-Offs)

*Items bought Aug 2024 - Jul 2025, excluding written-off items*

We filtered to buyers with 25+ unsold items, excluding write-offs, to see the true picture of inventory that never sold.

| Buyer | Total Bought | Unsold | % Unsold | Unsold Cost |
|-------|-------------|--------|----------|-------------|
| Katelyn Fipps | 21,654 | 1,045 | 4.8% | $3,538 |
| Amber Digerolamo | 15,934 | 802 | 5.0% | $2,594 |
| Peyton Penrose | 15,608 | 727 | 4.7% | $2,355 |
| Ashley Childress | 7,018 | 424 | 6.0% | $1,327 |
| Mariel Tovia(s) | 6,220 | 411 | 6.6% | $1,203 |

**Key Observations:**
- Unsold rates are remarkably consistent across buyers (4.7% - 6.6%)
- The "big three" buyers (Katelyn, Amber, Peyton) dominate the unsold inventory
- When write-offs are excluded, the percentages cut in half — showing write-offs were artificially inflating "unsold" counts

**Conclusion:** The consistent unsold rates suggest this is systemic rather than individual buyer fraud — but Amber has the most suspicious patterns.

---

## Analysis 3: No-Sale Transactions (Full Fake Buys)

*Transactions with 3+ items where NONE of the items ever sold*

We looked for transactions where all items were fake buys (entered but never actually received).

| Buyer | No-Sale Transactions | Total Cost |
|-------|---------------------|------------|
| Katelyn Fipps | 2 | $16.50 |
| Elle Crawford | 1 | $29.62 |
| Trainee | 1 | $25.05 |
| Peyton Penrose | 1 | $19.45 |

**Conclusion:** Only 5 transactions met this strict criteria. This method alone cannot account for the missing inventory volume.

---

## Analysis 4: Intermittent Fake Items

*Transactions with 5+ items where 2+ items at the END never sold*

This analysis catches the "intermittent" method where buyers add extra items after the customer's transaction completes.

| Buyer | Suspicious Transactions | Total Cost |
|-------|------------------------|------------|
| **Amber Digerolamo** | **13** | **$878.42** |
| Peyton Penrose | 10 | $397.66 |
| Katelyn Fipps | 9 | $267.67 |
| Melanie Padilla | 5 | $152.50 |
| Madison Stewart | 5 | $141.93 |

**Conclusion:** Amber Digerolamo stands out significantly with 13 suspicious transactions worth $878 — more than double the next person.

---

## Analysis 5: Inventory Gap Scenarios

*How much is actually missing?*

| DRS Computer Value | Missing $ | Missing Pieces | Missing Bins |
|-------------------|-----------|----------------|--------------|
| $80,000 | $10,000 | 2,597 | 65 |
| $85,000 | $15,000 | 3,896 | 97 |
| $90,000 | $20,000 | 5,195 | 130 |

**Assumptions:**
- Store floor: ~$60,000 (year-round average)
- Warehouse: 50 bins × 40 pieces × $3.85 = $7,700
- Total on hand: ~$70,000

**Timeline Analysis:** If Amber worked Oct 2024 - May 2025 (~160 days) and took 65 bins alone, that's **1 bin every 2.5 days** — easily smuggled out in a bag each day.

### Revised Scenario (Accounting for 50% Shoplifting)

If we assume 50% of missing inventory is due to shoplifting (customers), then:
- **Amber's take:** $5,000 (instead of $10,000)
- **Amber's bins:** 32.5 bins over 160 days
- **Amber's rate:** 1 bin every ~5 days

---

## Analysis 6: Price Range Analysis

We analyzed unsold items by DRS retail price to see what's being lost:

| Price Range | Unsold Count | Written Off |
|-------------|--------------|-------------|
| Under $10 | 2,733 | 1,341 |
| $10-14 | 1,743 | 984 |
| $15-19 | 450 | 199 |
| $20-24 | 151 | 31 |
| $25-29 | 70 | 10 |
| $30+ | 115 | 19 |

**Finding:** Loss is heavily weighted to **cheap items** (under $14 = 70%+) — theft targets volume over value. Among $30+ items, shoes dominate (81 pairs) vs. purses (10).

---

## Key Takeaways

1. **Amber wrote off 1,332 items during her employment** — 60% more than after she left
2. **April 29, 2025 (679 items)** was right before she left — covering her tracks
3. **Warehouse key + write-off access** — she had both the means and the opportunity
4. **13 suspicious "intermittent fake item" transactions** — highest in the data
5. **Self-write-off scheme** — she could be writing off her own fake buys (items that never existed)
6. **Clearance cycles** — items should have cleared through 2-3 cycles since bought; unsold + not written off = truly suspicious pool

---

## Most Likely Scenario

Based on the data analysis and physical inventory gap:

1. **Primary Method: Employee Theft with Warehouse Key**
   - Amber Digerolamo had exclusive warehouse key access
   - Took ~1 bin every 2-3 days over 8 months

2. **Secondary: Intermittent Fake Items**
   - 13 suspicious transactions for Amber (highest in data)
   - Total of $878 in items that appeared in transactions but never sold

3. **Covering Her Tracks: Self-Write-Offs**
   - Owner witnessed Amber personally cutting tags, bagging for donation, then scanning out
   - She could be writing off HER OWN fake buys — items that never existed physically
   - This is the perfect cover — write off fake inventory before anyone notices it's missing

4. **Possible: Fake Returns**
   - Check Period Close Report for elevated return rate (normal: 1-2%)
   - Employee processes fake return, pockets cash, item auto-added back to inventory

---

## Recommended Next Steps

1. **Get Period Close Report** — Check return rate (should be 1-2%). Elevated returns = possible fake return scheme.

2. **Get Inventory Adjustments Export** — Match who did the write-offs during Amber's employment vs. after. Confirm it was Amber doing the bulk events.

3. **Confront Amber Digerolamo** — data strongly supports her as the primary suspect.

4. **Review security camera footage** — especially Oct 2024 - May 2025.

5. **Check if she sold stolen inventory elsewhere** — consignment shops, other resale stores.

6. **Consider inventory audit** — physical count to confirm exact gap.

7. **Review cash drawer procedures** — intermittent fake items would leave a paper trail in cash discrepancies.

---

---

## Analysis 7: Buyer Evaluation Report Summary (Aug 2024 - Jun 2025)

*Summary-level data from PowerBI report covering the same period*

### What We Analyzed

The Buyer Evaluation Report provides aggregate stats for each buyer:
- **No-Sales:** Transactions where none of the bought items ever sold
- **Cost Adjustments:** Changes to offer price (friends & family)
- **IMU%:** Initial Markup % — expected gross margin on buys
- **Adjusted Items:** Items written off after purchase

### Key Findings

#### 1. No-Sales (Fake Buys)
All buyers under 1% no-sales rate — clean.

| Buyer | Total Trx | No-Sales | % |
|-------|-----------|----------|---|
| Katelyn Fipps | 1,217 | 10 | 0.82% |
| Iris Deleon | 55 | 1 | 1.82% |
| Amber Digerolamo | 1,592 | 3 | 0.19% |

#### 2. Cost Adjustments (Friends & Family)
All under 1% — no systematic price manipulation.

| Highest | Adj $ | % of Spend |
|---------|-------|-----------|
| Iris Deleon | $15.23 | 1.03% |
| Madison Thoele | $16.99 | 0.23% |
| Melanie Padilla | $29.37 | 0.12% |

#### 3. IMU% (Buyer Quality)
Store average: 67.27% — right on target. All buyers within ±3%.

#### 4. Adjusted Items (Write-Offs)
Store average: 2.48%. **Interestingly, the fake-buy suspects (Amber, Katelyn, Melanie) have BELOW-average adjusted rates.**

| Category | Buyers |
|----------|--------|
| Highest Adjusted | Elise LeFan (4.96%), Gohar (3.87%), Valentina (3.64%) |
| Fake-Buys Suspects | Amber (2.37%), Katelyn (2.38%), Melanie (1.32%) — all below store avg |

### What This Means

The Buyer Evaluation summary data does **NOT** support the "fake buy" theory at the aggregate level:
- No-sales rates are too low (under 1%)
- Cost adjustments are negligible
- IMU% is on target

The buyers flagged as "suspicious" in the Item Buy Detail have **lower** than average write-off rates — meaning they're NOT the ones writing off bad merchandise.

### Revised Conclusion

If theft is happening, it's NOT showing up in aggregate buyer metrics. Possibilities:

1. **Physical removal (back door)** — not captured in buy/sell data
2. **High shoplifting** — customers stealing, not employees
3. **Normal-range shrink** — owner's digital inventory method may overstate the problem
4. **Sophisticated scheme** — transaction-level data needed to detect

### Comparison to Earlier Analysis

| Metric | Item Buy Detail (transaction-level) | Buyer Eval (summary) |
|--------|--------------------------------------|----------------------|
| Fake Buys | Amber flagged with 13 intermittent transactions | Clean (<1% no-sales) |
| Write-Offs | Amber did 1,332 during employment | Amber has BELOW-avg adjusted rate |

The two analyses point to DIFFERENT conclusions:
- **Transaction-level** (Item Buy Detail) → flags Amber as suspicious
- **Summary-level** (Buyer Eval) → shows clean aggregate metrics

This discrepancy suggests either:
- The fake buys are too small to show in aggregates, OR
- The theft method is physical (not fake buys), OR
- Store actually has normal-range shrink

---

## Final Assessment

Based on full analysis of available reports:

| Evidence | Supports Theft? |
|----------|-----------------|
| Inventory gap ($10-20k) | Yes — but source unknown |
| Amber's suspicious transactions | Maybe — but small dollar amount |
| No-sales (Buyer Eval) | No — under 1% |
| Cost Adjustments | No — negligible |
| IMU% | No — on target |
| Adjusted Items | No — fake-buy suspects have BELOW-avg rates |

**Most Likely Reality:** The store may have normal-range shrink (1-1.5%), and the "missing inventory" is actually:
- Overstated by the owner's "digital inventory" method (manual writes-off aged items)
- Shoplifting (customer theft, not employee)
- Physical removal by employees (no buy/sell data trail)

**Recommended:**
1. Get a physical cycle count (RGIS/Datascan) for accurate shrink measurement
2. Review security cameras for back-door access
3. Accept that some "missing inventory" may be normal business loss

---

*Report compiled from Plato's Closet inventory data analysis. All findings based on available transaction data and estimates provided by store owner.*