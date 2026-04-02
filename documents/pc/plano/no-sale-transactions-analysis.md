# No-Sale Transaction Analysis

*Searching for potential "fake buy" transactions — items bought but never sold*

---

## Parameters & Filters Applied

- **Data source:** "Item Buy Detail Aug24-July25.csv"
- **Item buy date range:** August 2024 – July 2025
- **Sales tracked through:** March 2026
- **Transaction criteria:**
  - 3+ items per transaction (to filter out small/legitimate personal buys)
  - None of the items in the transaction have ever sold
- **Exclusions:** Write-offs (Adjust Qty = -1) excluded from analysis

---

## What We Were Looking For

Per the fake buy scheme description:
- Buyer stands at counter, invents a previous customer's name
- Signs into buying log under fake name
- Enters 3-4 items, totals typically $25-$50 (stays under $70 to avoid store check)
- No item ever sells because it was never actually received

This analysis looks for transactions meeting those criteria.

---

## Results

| Buyer | No-Sale Transactions | Total Cost |
|-------|---------------------|------------|
| Katelyn Fipps | 2 | $16.50 |
| Elle Crawford | 1 | $29.62 |
| Trainee | 1 | $25.05 |
| Peyton Penrose | 1 | $19.45 |

---

## Notes

- The results are surprisingly small — only **5 transactions** across the entire dataset met the criteria
- This may indicate the fake buy scheme is not detectable through this method alone, OR
- The transactions may have been deleted/altered, OR
- The fake buys happen more frequently but are being disguised differently
- Our three primary suspects (Katelyn, Amber, Peyton) show very minimal no-sale activity in this filtered view
- This analysis only catches transactions where **none** of the items sold — partial sales were excluded

---

*File created: March 27, 2026*