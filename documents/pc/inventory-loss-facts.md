# Inventory Loss Facts — Plato's Closet

*Comprehensive analysis framework for franchise owners*

---

## Overview: Variables & Key Questions

This investigation framework applies to any Plato's Closet franchise owner dealing with inventory shrinkage. The analysis requires:

### 1. Data Reports Needed
- **Item Buy Detail** (inventory export with buy dates, sale dates, costs)
- **Inventory Adjustments** (who wrote off what, when, reason codes)
- **Buyer Evaluation** (who opened/closed buys, price changes, sales)

### 2. Store-Specific Variables
- Store floor inventory value (~$60k average)
- Warehouse bin count & capacity
- Average cost per item (~$3.85)
- Employment dates of suspects
- Key access (who has warehouse key)

### 3. Timeline Questions
- When did suspect work?
- When were manual write-offs done?
- When were clearance events?

### 4. Theft Methods to Test
- Classic fake buys (full transaction, never existed)
- Intermittent fake items (adding 1-3 items immediately before cashing out the customer — swaps paperwork, customer interaction covers it)
- Personal/Goodwill donations (bringing own junk to "sell")
- Physical theft (back door or with key)
- Fake returns (process fake return, pocket cash, item auto-added back to inventory)
- Fake damaged/write-offs (write off inventory as damaged, or buy garbage from donations in someone else's name and toss into damaged bin to write off — pieces were physically present but bought under false pretenses from non-sellable merchandise)
- Donation diversion (stealing from store's donation bags before they go to Goodwill — doesn't affect inventory but loses saleable product; OR taking items from donation bags and starting a fake buy, pocketing the cash)

---

## Column Headings Reference

| Col | Heading | Description |
|-----|---------|-------------|
| A | SKI | Stock keeping identifier |
| B | Brand Description | Brand of item |
| C | Model | Model |
| D | Description | Item description |
| E | Long Description | Extended description |
| F | Buy Date | Date item was bought |
| G | Sale Date | Date item was sold |
| H | Prod Adj Date | Product adjustment date (price changes) |
| I | Adj Qty Date | Quantity adjustment date |
| J | Adjust Qty | Adjustment quantity (-1 = written off, 1 = added back) |
| K | Buy Trx ID | Transaction ID for the buy |
| L | Buyer | Who bought the item |
| M | Customer Code | Customer code |
| N | Unit Count | Number of units |
| O | QOH | Quantity on hand |
| P | DRS Cost | DRS cost |
| Q | DRS Retail | DRS retail price |
| R | Cost | Cost value |
| S | Current Retail | Current retail price |
| T | Current MU % | Current margin % |
| U | Final Retail | Final retail price |
| V | GM % | Gross margin % |

---

## The Problem

- **DRS (computer) shows large inventory on hand** — but the warehouse is nearly empty
- Store owner has been doing "digital inventory counts" — scanning for SKUs that haven't sold in over a year and writing them off
- Two main causes for missing inventory:
  1. **Theft** — items stolen (from warehouse or in transit)
  2. **Fake buys** — items never actually received, entered into system falsely

---

## Suspected Perpetrators

- **Three heavy buyers** are suspects: Katelyn Fipps, Amber Digerolamo, and Peyton Penrose
- **Amber had the key** to the warehouse

---

## The Fake Buy Scheme

How it works:
1. Buyer stands at the counter, invents a previous customer's name
2. Signs into the buying log computer (unconnected to main system) under that fake name
3. Pretends to buy clothes, enters 3-4 items into the computer
4. Total typically lands in the **$25-50 range** — not suspicious
5. **Over $70 triggers a store check** — which cannot be written in a fake name, so thieves keep totals under $70

---

## How to Detect Fake Buys

- Look for **transactions where no item has ever sold**
- Typically examine **more than 3 months back**
- This report contains **older buying transactions but current sales** — if an item hasn't sold, it's either stolen or was never there

---

## Data Context

- Report: "Item Buy Detail Aug24-July25.csv"
- Items bought: **August 2024 – July 2025**
- Sales tracked through: **March 2026**
- If an item has no sale date AND was not written off → likely stolen or fake buy

---

## Method 2: Intermittent Fake Items

How it works:
1. Start with an **actual customer** — process their items legitimately
2. Print a quote for ~$25 on the receipt printer
3. When the customer approaches, **immediately before cashing out**, quickly add 1-3 more items to the transaction
4. The employee handles the customer interaction, swaps out the paperwork
5. New total is now ~$30 — **skip printing the new quote**
6. Hand the customer the **old quote** ("we're buying 6 items for $25")
7. Have them sign the old quote
8. Hand them the items that WEREN'T bought and say goodbye
9. Later (usually during a lull), jot down the difference ($5) and pop the cash drawer to collect it

**The math:** If they do 20 buys/day and 5 have these 1-3 extra pieces at $5 each → **$45 pocketed per day**, plus **15 pieces of inventory lost per day** per buyer doing this.

**How to detect:**
- Look for transactions with **5+ items** where the **last 2+ items haven't sold**
- Pattern typically shows 1 expensive item (shoes) or 2 items (jeans + tee) that never move
- The "intermittent" items are the ones added at the end to inflate the total

---

## Suspicious Pattern Found (Intermittent Fake Items)

Analysis parameters:
- Transactions with **5+ items**
- **2+ unsold items** at the end of the transaction (never sold)

### Results by Buyer

| Buyer | Suspicious Transactions | Total Cost |
|-------|------------------------|------------|
| Amber Digerolamo | 13 | $878.42 |
| Peyton Penrose | 10 | $397.66 |
| Katelyn Fipps | 9 | $267.67 |
| Melanie Padilla | 5 | $152.50 |
| Madison Stewart | 5 | $141.93 |
| Ashley Childress | 5 | $98.61 |
| Gregory Lebras | 2 | $92.58 |
| Valentina Ruiz | 4 | $84.54 |
| Gohar Kirakosyan | 3 | $82.99 |
| Jocelyn Parker | 3 | $77.09 |
| Trainee | 2 | $72.66 |
| Gio Rivas | 1 | $64.46 |

**Key observation:** Amber Digerolamo shows **significantly higher** suspicious transactions (13) and dollar value ($878) compared to others — far more than even the second-highest (Peyton at 10 / $398). Combined with the fact that **Amber had the key** to the warehouse, this is a notable pattern.

---

## Bin / Storage Reference

| Item Type | Approx Qty per Box/Bin |
|-----------|----------------------|
| Jeans/Pants | 20 (bins ~40) |
| Tanks | 70 |
| Tees | ~60 |
| Shorts | ~60 |
| Skirts | ~60 |
| Long Sleeves | ~50 |
| Dresses | ~25 |
| Coats | ~7 |
| Sweatshirts | ~15 |
| Sweaters | ~15 |

*Note: Actual counts vary based on container size and current style bulk*

---

## Inventory Counting Methods

### Method 1: Recommended (Physical Scan)
- Actually go into the warehouse/store
- Scan every tag
- Reconcile against DRS inventory list
- Gives accurate picture of what's actually there

### Method 2: Owner's "Digital Inventory Count" (What He Does)
- About once a year
- Looks in DRS for items aged over 1 year with no sale
- Manually adjusts those items out of the computer
- Assumption: if it hasn't sold in a year, it's either stolen OR so junky it'll never sell
- Will find it in real life and throw it out eventually
- **Effect:** Artificially lowers the "unsold" count — items that look like theft are actually being written off by the owner

---

## Impact on Analysis

The owner manually writing off old items means:
1. **Largest write-off date** = likely the owner's annual digital count (not theft)
2. **Unsold + Not Written Off** = the TRUE suspicious pool — these are items that should have been cleared through 2-3 clearance cycles but somehow didn't
3. **Written off items** = normal business loss, not theft indicator

---

## Clearance Cycles

The store runs **4 clearance events per year**, typically 1 month each:
- **September**
- **January** (usually late December to late January)
- **April**
- **June**

### Typical Clearance Discount Schedule

| Timing | Discount |
|--------|----------|
| Late in month before (e.g., late May/Dec) | 50% off |
| Mid-month (e.g., mid-June/Jan) | 70% off |
| Last weekend of clearance month | 90% off |

### What This Means for Discount Analysis

When reviewing Day Close reports:
- **50-70% discounts in clearance month** → NORMAL (expected clearance pricing)
- **Random 10-30% discounts outside clearance** → SUSPICIOUS (potential bad buys/defective merchandise)
- **High concentration of discounts** outside clearance → investigate buyer quality

Items that don't sell through 2-3 clearance cycles get written off. Since this data covers items bought 9-18 months ago, anything still unsold AND not written off is suspicious — it should have cleared through at least 2-3 cycles by now.

---

## Method 3: Fake Buys of Personal/Goodwill Donations

How it works:
- Employee buys their own clothes OR donates Goodwill items under fake customer names
- The items are essentially junk (either their own worn clothes or cheap Goodwill donations)
- These pass through 2-3 clearance cycles within a year
- Either sells at deep discount or gets thrown out and written off

### Expected Markers in Data
- **Low margins** — Because the items are junk that only sells at discount
- **High write-offs** — Items don't sell, get written off after 365 days
- **Appears in buy history** — Under fake customer names, but actually employee's own items

### Conclusions We Can Draw
- If a buyer has consistently **low gross margins** and **high write-off rates** — that's a red flag
- Compare buyer's average margin % vs. overall store average
- Look for buyers whose written-off items have **below-average resale value**
- This scheme explains how someone could walk out with 800+ tank tops — they're "buying" their own cheap inventory through the system

---

## Donation Clarification: Two Types, Different Inventory Impact

Donations happen in two ways, and it's important to understand how each affects (or doesn't affect) inventory:

### Type 1: Store Write-Off → Donation Bag
- Store writes off inventory as damaged/unsold
- Items tossed in bag for Goodwill or pickup service
- **Inventory impact:** Items REMOVED from DRS (write-off) — but already counted as loss
- **Theft risk:** Employees can steal from donation bags before they leave store

### Type 2: Customer Donation (Customer Says "Please Donate")
- Customer brings 2 totes, store buys 8 pieces
- Customer doesn't want to lug remaining items home, asks store to donate
- Store bags it up same as write-off donations
- **Inventory impact:** Items NEVER ENTERED system — no impact on inventory at all
- **Theft risk:** Employees steal from these bags (stealing from charity, not store), OR take items and start a fake buy → pocket cash

### Why This Matters for Analysis

| Donation Type | Inventory Affected? | Margin/Writeoff Impact? |
|---------------|---------------------|-------------------------|
| Type 1 (write-off) | Yes — written off | Yes — shows as bad buy |
| Type 2 (customer) | No — never in system | No — but loss of potential sales |

**Revised chart for my notes:**

| Employee Action | Inventory Impact | What You Actually See |
|-----------------|------------------|----------------------|
| Skims 2 items from pass pile (Type 2 donation) | **None** (not entered in system) | Low buy traffic, bad reviews |
| Steals from store write-off donation bag (Type 1) | **Yes** (written off) | Write-off spike |
| Runs fake buy on donated junk, writes off | Looks clean | Write-off spike, low margins |
| "Pass" on 2 good pieces → keeps them | None | Customer disappointed (paid for 4 not 8), bad review |

**Key distinction:**
- **"Pass pile" theft** (Type 2): Customer didn't sell us the items → they never entered DRS → inventory looks fine but buy volume drops
- **Write-off theft** (Type 1): Items were in system → employee writes them off → inventory count looks clean but accounting shows adjustments

---

### Quick Reference: How Each Theft Method Shows Up

| Theft Method | Inventory Count Shows? | What Shows in Reports |
|--------------|------------------------|-----------------------|
| Skims from pass pile | **No** (never entered) | Low buy traffic, bad reviews |
| Steals from write-off bag | **Yes** (written off) | Write-off spike |
| Fake buy → writes off | Looks clean | Write-off spike, low margins |
| Pass on 2 good pieces, keeps them | **No** | Customer paid for 4 not 8 → bad review |

---

## Shoplifting & Shrink Rate

### What Is Normal?
- **Normal shrink: 1-1.5%** of sales (mostly shoplifting + stray damages like broken items, missing tags)
- **2%+ indicates theft**

### How to Calculate Shrink Rate

**Method 1: Using Period Close Report**
1. Get annual sales from Period Close report
2. Add up ALL inventory adjustments for the same period
3. Divide: **Shrink % = (Total Adjustments) ÷ (Annual Sales)**

*Example: $12,000 adjustments ÷ $1,000,000 sales = 1.2% shrink*

**Method 2: If No Physical Cycle Count**
```
Total predicted inventory OH - Estimated inventory OH + Writeoffs = Total shrink
```
- Owner decides whether to ignore writeoffs during clearance cycles

### Cycle Count vs. Digital Count

| Method | What It Captures |
|--------|-----------------|
| **Scanned cycle count** (RGIS/Datascan) | Only theft — rest is accounted for in write-offs |
| **Digital count** (owner's manual write-offs) | Mixes theft + aged inventory + clearance — complicates things |

### Guided Questions for Shoplifting

> "Is staff finding a lot of sensors hidden around the store?"
> "Does the sensor gate go off a lot?"
> "Do you have anyone stationed near the fitting rooms keeping an eye on what goes in and out?"

If answers suggest high shoplifting activity → adds to overall shrink calculation
- **Type 1: Store write-off → donation bag** → Inventory IS affected (written off as loss)
- **Type 2: Customer "pass" (passed on buying) → donation bag** → Inventory NOT affected (items never entered system)

---

## Scenario: The Skim (Employee Steals Before Customer Gets Paid)

How it works:
1. Customer brings 2 totes of clothes
2. Employee goes through totes, buys in 4 pieces
3. **Employee slips 2 desirable pieces** onto the customer's "keep" pile (or encourages customer to "just donate" them)
4. Customer gets paid for only 4 pieces (average is 8 — they're disappointed)
5. Employee takes those 2 desirable pieces home OR sells them to the store later (same or different store)
6. Repeat daily → buy volume drops

**The Cascade Effect:**

| Step | What Happens | Result |
|------|--------------|--------|
| Employee skim | 2 good pieces siphoned off | Buy volume drops |
| Customer disappointment | Only 4 pieces bought instead of 8 | Bad experience |
| Social media | Customer posts negative review | Reputation damage |
| Word of mouth | "They only bought 4 items, totally rip you off" | Fewer new customers |
| Store reputation | "Meh selection" / bad reviews | Sales decline |

**Why it's hard to detect in data:**
- Inventory count looks normal (items weren't "stolen" from store — they were taken from customers)
- Buy volume looks low → but appears to be a "customer problem" not theft
- Social media reviews mention poor buys → but management thinks it's just a disgruntled customer
- **Root cause:** Employee stealing desirable items before customer gets paid

---

## Key Takeaways

Given the scale of loss (800+ tank tops alone, plus skirts, etc.), no single fake buy method accounts for this volume. The data patterns suggest:
- **Amber Digerolamo** is the strongest suspect based on suspicious transaction patterns + warehouse key access
- The **personal/Goodwill donation scheme** (Method 3) would explain bulk inventory loss with consistently low margins and high write-offs
- Multiple schemes may be in use simultaneously

---

## Inventory Gap Analysis

### Given Facts
- **Average cost per item:** $3.85
- **Store floor inventory:** ~$60,000 (year-round average)
- **Warehouse:** 50 bins × 40 pieces/bin × $3.85 = **$7,700**
- **Total on hand (est.):** ~$70,000
- **Computer shows:** $80,000 (estimated based on conversation)

### Calculations

| Metric | Value |
|--------|-------|
| Computer thinks | $80,000 |
| Actually on hand | $70,000 |
| **Missing dollars** | **$10,000** |
| Missing pieces | 2,597 |
| Missing bins (visual) | ~65 bins |

### What This Means
- About **65 bins** worth of inventory is missing
- This is a serious loss but far more contained than earlier math suggested
- Could still be employees stealing out back or fake buys

---

## Inventory Gap Scenarios

*Assumptions: $60k store + $7.7k warehouse = ~$70k on hand, $3.85/piece, 40 pieces/bin*

| DRS Computer Value | Missing $ | Missing Pieces | Missing Bins |
|-------------------|-----------|----------------|--------------|
| $80,000           | $10,000   | 2,597          | 65           |
| $85,000           | $15,000   | 3,896          | 97           |
| $90,000           | $20,000   | 5,195          | 130          |

*Note: If Amber worked Oct 2024 - May 2025 (~160 days) and took 65 bins alone, that's 1 bin every 2.5 days — easily hidden in a bag each day.*

---

## DRS Reports Available

### 1. Item Buy Detail Report (Date Range)
- The main export we used for this analysis
- Buy dates, sale dates, costs, adjustments
- Source of column headings A-V

### 2. Inventory Adjustments Report
- Date range selection
- Lists EVERY SKU adjusted
- Shows WHO did it and the REASON CODE
- Subtotals by date
- **Critical** — shows WHO is doing the write-offs

### 3. Buyer Evaluation Report (can be exported)
- Every buy transaction
- Who opened it, who closed it
- Price changes during/after buy (red flag!)
- Whether item "taken out of inventory" — WHO, WHEN
- Whether item sold — who was cashier
- Final selling price
- **Critical** — can catch fake buys and price manipulation

### 4. Period Close Report (Date Range)
- Shows return rate as % of sales
- Normal return rate: **Up to ~2%** is acceptable
- **Returns over 2%** → flag as suspicious
- **Useful for detecting fake returns**

---

## Returns as a Theft Indicator

### What's Normal?
- **Acceptable return rate:** Up to ~2% of net sales
- **Flag returns over 2%** as suspicious — investigate further

### Why High Returns Shouldn't Be Ignored

High return rates can indicate different problems:

| Return Pattern | What It Looks Like | What It Actually Means |
|----------------|-------------------|----------------------|
| Low returns (~1%) | Healthy | Normal business |
| High returns (>2%) | "Customers are picky" | Could be sloppy buying OR hidden theft |

### The Hidden Connection: Donation Diversion

When return rates are high AND you notice buy quality issues, consider this scheme:

1. **Employee pulls items from donations** — These are items customers passed on because of defects (missing buttons, stains, etc.) that weren't accepted into the buy
2. **Creates fake buy** — Enters them into the system under a fake name
3. **Pockets the cash** — Gets paid for merchandise that was never sellable
4. **Item gets written off** — Eventually cleared through clearance cycles as "damaged"

**Why it hides:**
- On the surface, the employee doesn't look like a thief — they appear to be a "bad buyer"
- They say: *"I didn't do fake buys, the merchandise was there — I just didn't notice the defect"*
- The returns are real (customers genuinely returning defective items)
- But the "buys" are fraud (selling the store junk they pulled from donations)

### How to Spot This Pattern

| Indicator | What to Look For |
|-----------|-----------------|
| Return rate | >2% triggers investigation |
| Buyer margin | Consistently lower than store average |
| Write-off rate | Higher than normal for that buyer's items |
| Buy source | Items bought but rejected at buy time (found in donation pile) |

**Key insight:** High returns aren't always "fake" — sometimes the fraud is in the buy side, not the return side. Question why a buyer with high returns also has suspiciously low-quality buys.

---

## Another Margin Eater: Register Discounts

Bad buying doesn't always show up in write-offs. It can also manifest as **register-level discounts**:

### How It Works
1. Employee buys shoddy merchandise (defects, stained items, missing buttons)
2. Item makes it onto the sales floor
3. Customer finds defect at register or in fitting room
4. Customer asks for a discount — cashier offers 10%, manager authorizes more
5. **Margin gets hammered** — but through discounts, not clearance write-offs

### Where to Find It
- **Best:** Buyer Evaluation Report — shows discount per transaction
- **Alternative:** Parse every Day Close report for discount lines
- Look for high discount rates correlating with specific buyers

### Red Flag Pattern
| Indicator | What It Means |
|-----------|---------------|
| Buyer has high "discounts given" | Customers frequently finding defects |
| Low GM% on sold items | Items pricing below expected margin |
| Discounts not matching clearance cycles | Not a clearance issue — quality problem |

**Key insight:** If a buyer's items need constant discounts to sell, question the quality of what they're buying. It could be donation diversion (pulling defects that were rejected) or personal goods resold through the system.

---

## Branching Analysis: Discount Patterns

When to use this branch:
- Owner reports margins are low
- Other investigations (fake buys, returns, write-offs) haven't found the root cause
- Need to check if bad buying is hiding in plain sight

### How to Analyze Discounts

1. **Get 30 days of Day Close reports** — single-day discounts are mostly noise
2. **Group discounts by type:**
   | Discount Type | What It Looks Like | Assessment |
   |---------------|-------------------|------------|
   | Flat $ off (e.g., $5 off) | Spreads across multiple items | Normal promotional |
   | 10-30% off | Random, non-clearance | Flag as suspicious |
   | 50-70% off | In clearance month | Normal |
   | 50-70% off | Outside clearance month | Flag as suspicious |

3. **Calculate discount rate:** (Total Discounts ÷ Net Sales) × 100
   - If >~2% outside clearance → investigate buyer quality

### Red Flag Pattern
- High volume of random 10-30% discounts
- Flat-dollar discounts appearing often (could be employees gifting friends)
- Discounts clustered outside clearance months

**Note:** One day of discounts is noise. Thirty days reveals the pattern.

---

## Cost Adjustments (Friends & Family)

If margins are low and you've already checked:
- Fake buys (Item Buy Detail → no-sales)
- Returns (Period Close → >2%)
- Write-offs (Inventory Adjustments)
- Discounts (Day Close batch)

…then check **Cost Adjustments** in the Buyer Evaluation Report.

### What It Shows
- Column F: Cost Adjustment — any item where the offer price was changed after initial entry
- Usually goes UP (giving customer more money) for friends/family
- Small dollar amounts may still add up if done frequently

### Red Flags
- High $ adjustment relative to total spend
- Pattern of adjustments not matching clearance events
- Remember: in a high-volume store, one thief's scheme might not move margins much — but it still exists

### What to Look For
| Metric | Flag If |
|--------|---------|
| Cost Adj % of Total Spend | >0.5% (suggests frequent tweaking) |
| Single large adjustment | Any >$50 (unusual) |
| Adjustments clustering | Multiple small adjustments to same buyer |

**Key insight:** This is worth looking at IF you have the report AND margins are a concern — but don't expect it to show up in overall store margins if the store is busy.

---

## IMU% Analysis (Buyer Evaluation Report)

**What it shows:** Initial Markup % — the expected gross margin on items bought. For used items, typical is ~65-67%.

**How to read:** Values stored as decimal (0.67 = 67%). Compare each buyer's IMU% to the store average (typically 65-67%).

### Red Flags
| Pattern | What It Means |
|---------|---------------|
| IMU% consistently >3% below average | Buyer accepting worse merchandise, or price manipulation |
| IMU% consistently >3% above average | Normal (good buys) |
| Wide variance within one buyer's history | Potential inconsistency or fraud |

### What to Look For
- Calculate store average IMU% (should be ~65-67%)
- Flag buyers consistently below 64% (more than 3% below expected)
- Compare to Cost Adjustments — low IMU% + high adjustments = potential friends & family scheme

---

## Adjusted Items Analysis (Buyer Evaluation Report)

**What it shows:** Items that were adjusted (written off, removed from inventory) after the buy.

**How to read:** Column O = Units Adjusted, Column Q = % of that buyer's purchases that were adjusted.

### Red Flags
| Pattern | What It Means |
|---------|---------------|
| Buyer adjusted % >2x store average | Likely a "bad buyer" — accepting low-quality merchandise |
| Buyer has high fake-buy flag AND high adjusted | Unlikely — fake buys usually don't get written off (they sell through) |
| Buyer high in adjusted items but low in fake buys | Not theft — just poor buying quality |

### Key Insight: Two Different Metrics, Two Different Behaviors

- **Intermittent Fake Items** (Item Buy Detail) → flags buyers adding fake items to real transactions
- **Adjusted Items** (Buyer Eval) → flags buyers who buy low-quality merch that gets written off

These often identify *different people*. The "fake buy" suspects may have low adjusted rates (they're stealing via fake items, not bad buys). The "high adjusted" suspects may just be terrible buyers, not thieves.

### What to Look For
1. Calculate store average adjusted % (typically 2-3%)
2. Flag buyers consistently above 4%
3. Cross-reference with fake-buy analysis — if someone flags both, that's a *serious* problem (multiple theft methods)

---

## Important: Always Consider Scale

When analyzing any report with buyer-level data:

| Mistake | Why It Matters |
|---------|----------------|
| Looking at absolute numbers without proportions | A buyer with 1,500 transactions will naturally have more "suspicious" items than one with 50 |
| Flagging raw counts without context | A buyer with 10 no-sales out of 1,200 trx = 0.82% — but the same 10 no-sales out of 55 trx = 18.2% |
| Comparing high-volume buyers to low-volume equally | Always calculate percentages relative to their total activity |

**Rule:** Always convert to percentages/proportions before pointing fingers. A 1% no-sales rate on 1,500 transactions is far less suspicious than 1% on 55 transactions.

---

## Write-Off Dates vs. Amber's Employment

| Date | Items | During Amber's Time? |
|------|-------|---------------------|
| 2025-04-29 | 679 | ✓ During (right before leaving) |
| 2025-02-05 | 513 | ✓ During |
| 2024-12-09 | 95 | ✓ During |
| 2025-05-17 | 45 | ✓ During |
| After Amber left | 817 | — |
| Before Amber | 31 | — |

**Key finding:** Amber wrote off **1,332 items** during her ~8-month employment vs. 817 after she left. The April 29 event (679 items) happened just before she left in May — classic "covering her tracks."

---

## Known Observations (From Memory)

- Owner does manual "digital inventory count" ~annually
- **Amber Digerolamo** did write-offs while working — owner witnessed her:
  - Cutting tags off clearance items
  - Bagging up for donation
  - Scanning items out of DRS
- This means Amber had direct access to both the physical items AND the write-off mechanism
- **KEY INSIGHT:** Amber could be writing off HER OWN fake buys — fake items never existed physically, she writes them off as "donation/clearance" and the system looks clean

---

## What Other Data Would Help

1. **Inventory Adjustments Export** —WHO is doing the write-offs (Amber vs. owner vs. others)
2. **Buyer Evaluation Export** — cross-reference buyer who opened vs. cashier who sold
3. **Cash drawer transaction data** — see if intermittent fake items leave cash discrepancies
4. **Security camera footage** — Oct 2024 - May 2025 (Amber's period with key)
5. **Amber's exact employment dates** — match against suspicious transaction patterns

---

## Questions This Analysis Can Answer

For other owners considering this framework, here are the key questions we worked through:

### Core Math
- What's the gap between DRS computer inventory and actual on-hand inventory?
- What's the value in bins/pieces/dollars?
- What's a realistic theft rate per day/week/month?

### Data Analysis
- Which buyers have highest unsold inventory (excluding write-offs)?
- Which buyers have suspicious "intermittent fake item" transactions?
- Are unsold items concentrated in certain price ranges?
- Are expensive items ($30+) being stolen, or cheap junk?

### Operational Checks
- When were manual write-offs done? (Check Inventory Adjustments report)
- Who did the write-offs? (Could be covering their own tracks)
- Did write-off person also have key access?
- Did clearance cycles pass without items being cleared?

### Fraud Detection Red Flags
- 3+ item transactions with ZERO sales ever
- 5+ item transactions where last 2+ items never sold
- Buyer also acting as cashier for their own items
- Price changes after initial buy transaction
- Write-offs happening immediately after buy dates

---

*This framework was developed for a specific store but the methodology and questions apply broadly to any Plato's Closet franchise with inventory shrinkage concerns.*
2. **Employees stealing out the back door** (physical removal)
3. **Fake buys** (items were never in the system to begin with)
4. **Fake returns** (employee processes fake return, pockets cash, item automatically added back to inventory even though not physically present)

The math confirms a massive loss — whatever the method, someone is physically removing ~340 bins worth of inventory.