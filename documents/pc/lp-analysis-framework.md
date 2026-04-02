# LP Analysis Framework

*A Loss Prevention analysis tool for Plato's Closet franchise owners*

---

## Overview

This framework guides franchise owners through systematic loss prevention investigation using DRS reports and data analysis. Use it to identify theft, fraud, or operational shrinkage in your store.

**Time Required:** 2-4 hours  
**Data Needed:** DRS exports (see Phase 2)  
**Best For:** Suspected internal theft, elevated shrinkage, unusual transaction patterns

---

### How to Use This Document

This file serves two purposes:

1. **Conceptual understanding** — Stage 1-4 explain WHY each problem matters, the analysis methods, and the theft vectors
2. **Actionable decision flow** — The "Decision Tree Paths" section (Stage 3+) gives step-by-step guidance for each problem type

**Recommended path:**
- First-time user → Read Stage 1-4 sequentially for context
- Active investigation → Jump to Decision Tree Paths for the problem type you're working on

**Related files:**
- `inventory-loss-facts.md` — Fact sheet with key metrics and patterns (do not delete)
- `lp-decision-tree-prompt.md` — ChatGPT prompt for generating visual flowchart
- `lp-workflow.md` — ⚠️ Legacy (superseded, kept for reference only)

---

## Investigation Stages

### Stage 1: Problem Identification

Before diving into data, establish the baseline. **Ask one question at a time** — get the answer, note it, then ask the next.

**Step 1a: What's your primary concern?**
> "Do you notice: (a) inventory missing from warehouse/store, (b) margins are low (outside of clearance periods), (c) you're constantly having to make inventory adjustments in accounting (high write-offs), or (d) everything seems off — sales are down, buys are down, poor selection?"

This maps to the problem types:
- **(a) Inventory missing** → Problem A: fake buys, fake returns, theft
- **(b) Margins low** → Problem B: bad buyers, donation diversion, register discounts
- **(c) High write-offs** → Problem C: self-write-offs, fake damaged, clearance overflow, skipped cycle counts
- **(d) Everything seems off** → Problem D: donation diversion, multiple small theft methods

**On "everything seems off" (Problem D):**
Even without visible theft, bad results can stem from intentional poor buying:

| Symptom | Root Cause | Connection to Theft |
|---------|------------|---------------------|
| Poor selection on rack | Bad training → bad buys | Employee buys wrong things (mature fashion instead of teen) or bad condition (needs glasses) |
| Low sales | Poor selection → customers don't buy | Same as above |
| Heavy markdowns (4x/year) | Bad inventory sits unsold | Same as above |
| Low buys | Employee stealing donation items, buying junk in fake names | **Doesn't show as inventory loss** — shows as bad buys/poor selection |

**The theft connection:** When employees steal from donation bags and run fake buys on that junk:
- Inventory count looks fine (items "bought" at low cost)
- But the store has bad selection (junk on racks)
- Margins stay low, write-offs stay high
- Sales stay down — customers see poor selection
- **The employee got the cash, charity lost the clothes, AND the shopper has a bad experience**

**Another angle — The Skim:**
- Employee goes through customer's totes, buys in 4 pieces, but slips 2 desirable pieces onto customer's "keep" pile or encourages donation
- Customer gets paid for only 4 pieces (average is 8) → disappointed
- Employee takes those 2 pieces home or sells them to store later
- Result: Buy volume drops, customer posts negative review, word of mouth worsens, store reputation suffers

This is why theft analysis helps even when nothing seems "missing" — it can explain the quality problems, not just the quantity problems.

**Step 1b: How long have you noticed this?**

**Step 1c: Who has warehouse/key access?**
- Is the key kept in a safe, or on a keyring?
- If safe — who else can access it?
- If keyring — how secure is purse storage?
- Is there another employee the key-holder trusted with keys?

**Step 1d: Any recent employee departures?** (Names and dates)

**Step 1e: Physical inventory done recently?** (When?)

**Step 1f: Check social media reviews** (Manual step — owner can do faster)
- Pull Google reviews for the store
- Count 1-star vs 5-star reviews over time periods
- Look for patterns: did reviews flip when a manager left?

| Problem Type | Review Check? |
|--------------|---------------|
| A, B, C (specific concerns) | Optional — long shot |
| D (everything seems off) | **Do this one** — no flag needed |

*Why it works:* Bad behavior, theft, or poor judgment usually leads to bad social presence. A manager flip that caused 16→1 star reversal → sales improved is a powerful indicator.

*(Note: This is a manual step — I can help search but filtering by date/stars is faster done by owner directly on Google.)*

**Trust the owner's gut.** An owner's instinct about "something feels off" is often the best compass — even before data confirms it. Let them point you in the right direction.

**Collect store details:**
- Owner name
- Store number/location (e.g., Plano 80026)
- Create a project folder: `/documents/pc/pc-8xxxx/` to store analysis work product

**Clearance schedule:** Ask:
> "Did your store follow the brand-recommended clearance schedule (roughly Sept, Jan, Apr, Jun)?"

If they followed it, we can align dates. If not, ask for their specific dates.

**Be ready to supply reports in digital form.** Start with:
- **Item Buy Detail** — The core export we need to begin

Once received, we can surface suspects and ask targeted follow-up questions rather than requesting a full org chart up front.

**Does the behavior go back further?** Ask the owner:
> "Do you believe this behavior started more than 9 months ago?"

If yes, push the lookback period further back (e.g., 15-18 months) to capture older patterns. Once imported, we'll be able to confirm the actual date range from the data itself.

---

### Stage 2: Data Collection

Request these four reports from DRS for a 12-month period ending 3 months ago:

| If Today Is | Request Report Range |
|-------------|---------------------|
| May 1, 2026 | Aug 1, 2024 – Jan 31, 2026 |
| Aug 1, 2026 | Nov 1, 2024 – Apr 30, 2026 |

**Why end 3 months ago?** Items bought last week that haven't sold yet create massive noise — that's normal, not suspicious. By ending the report 3 months back, we filter for items that have had time to go through clearance cycles. If it hasn't sold and wasn't written off after several months, that's the real red flag.

Once imported, we'll be able to confirm the actual date range from the data itself.

Export as CSV or Excel with these dates.

**Reports to request:**
1. **Item Buy Detail** — Core transaction data
2. **Inventory Adjustments** — Write-off tracking (identifies WHO)
3. **Buyer Evaluation** — Buy session records (catches fake buys)
4. **Period Close** — Sales/returns/shrinkage by period

---

### Stage 3: Analysis Framework

First, identify which problem you're solving:

#### Problem A: Inventory Appears to Be Missing
*Theft methods affecting physical inventory: fake buys, partial fake buys, fake returns, shoplifting, employee theft*

**Shoplifting check:**
- Normal shrink: **1-1.5%** of sales (mostly shoplifting + stray damages)
- **2%+** indicates theft
- Use Period Close report to get annual sales
- Add up all inventory adjustments for same period → that's basically shrink
- Formula: **Shrink % = (Total Inventory Adjustments) ÷ (Annual Sales)**

*Example: $12,000 adjustments ÷ $1,000,000 sales = 1.2% shrink*

**But watch for conflicting data:**
- Owner says: "Computer shows 1,400 tank tops but room for only 400 on floor + none in storage"
- Yet shrink calculation shows normal (e.g., 1.19%)

**This can happen due to:**
- **Timing differences:** Large write-off happened just before/after reporting period — 12 months should cover it, but may not
- **Missing digital count:** Should have been done but hasn't yet
- **Wrong adjustment codes:** SHr might include digital count write-offs, inflating "shrink"

**When data conflicts with physical reality:**
- Run data for a **longer period** (18-24 months)
- Verify **adjustment codes** are correct (DMG, T-Out, CYC, SHr)
- Suggest owner do a **physical cycle count** to get true baseline
- Ask: "When was your last digital inventory count? Should another be done?"

*The numbers can lie if the timing or codes are off. Trust the owner's physical observations too.*

---

### When in Doubt: Scan Everything

If the data is incomplete, conflicting, or doesn't make sense — the best method is a **physical cycle count** (RGIS or Datascan). This is exactly why the franchise emphasizes doing them.

**Why owners skip it:** Often those with a downward sales trajectory try to cheap out — the count is difficult and can be expensive. But that's when they need it *most*.

**Best timing:** During a low inventory period (after clearance, before buy season ramps up) — fewer items = faster and cheaper scan.

*The only way to truly know what's missing is to count it.*

**Guided dialog:**
> "Do you find a lot of sensors hidden around the store?"
> "Does the sensor gate go off a lot?"
> "Do you have anyone stationed near the fitting rooms keeping an eye on what goes in and out?"

**If no physical cycle count available:**
- Total predicted inventory OH - estimated inventory OH + writeoffs = total shrink
- Owner decides whether to ignore writeoffs during clearance cycles
- Scanned cycle count (RGIS/Datascan) captures only theft — rest is accounted for in write-offs
- Digital count method mixes reasons and complicates things

#### Problem D: Everything Seems Off (Poor Selection/Low Sales)
*Theft methods NOT affecting inventory count: donation diversion — items stolen from donation bags don't show as missing, but cause poor selection, low margins, and high write-offs*

| Donation Type | Inventory Affected? | What You See |
|---------------|---------------------|--------------|
| Type 1: Store writes off → donation bag | **Yes** (shows as write-off loss) | Write-off spike |
| Type 2: Customer "passes" (store passes on buying items) → goes to donation bag | **No** (never entered system) | Low buy volume, bad reviews, poor selection |

*When employees steal from donation bags or buy junk in fake names: inventory count looks fine, but store has bad selection → customers don't buy → sales drop*

#### Problem B: Margins Are Low (below ~59%)
*Item Buy Detail only shows items BOUGHT in the date range — it omits items bought BEFORE the range but sold during it. To assess overall store margins, use the Period Close report (by month).*

*Low margins may reflect:*
- Poor inventory quality (bad buyers)
- Buyers dipping into donated/personal goods under fake names (keeping amounts below check limits if applicable)

**Clearance month exception:** Margins in the 50s during a clearance period (Sept, Jan, Apr, Jun) is normal — deep discounts drive lower margins. If the same low margins occur outside clearance months, that's cause for concern.

#### Problem C: Inventory in DRS Is Lower Than Expected
*Inventory adjustments don't report everywhere. The accounting equation:*

```
OH = Buys - Sales + Beginning OH - Writeoffs
```

*Solve for writeoffs if you know the other numbers — owner will see a pattern of constantly having to adjust inventory manually because writeoffs are large.*

*Causes:*
- Employees writing off items they steal
- Large clearance caused by bad buys (some intentional, not just poor judgment)

*The Item Buy Detail picks up some of this. The Inventory Adjustments report with reason codes will tease out:*
- Cycle counts (physical inventory by RGIS/Datascan)
- Damaged goods
- Owner's "digital inventory" manual adjustments

---

#### Check 1: Write-Off Patterns
- Identify top write-off dates
- Cross-reference with employment records
- Pinpoint WHO is processing fake write-offs

#### Check 2: Suspicious Transactions
- **Full Fake Buys:** 3+ item transactions with ZERO sales
- **Intermittent Fake Items:** 5+ item transactions where 2+ items never sold
- Rank by buyer to find suspects

#### Check 3: Inventory Gap
- Formula: DRS Computer Value - Physical Count
- Calculate missing: bins / pieces / dollars

#### Check 4: Price Distribution
- Group unsold items by price tier
- Determine if theft targets cheap items vs. high-value pieces

#### Check 5: Return Rate
- Formula: Returns / Sales
- Normal: 1-2%
- Elevated: Possible fake returns

---

### Stage 3.5: Clarification

Before rendering opinions to the owner, gather context on suspicious patterns:

**Check write-off dates against clearance periods FIRST:**
- Clearances happen ~End of Sept, Jan, Apr, Jun
- **Clearance grace period:** Write-offs within the clearance month AND up to 5 days into the next month are likely legitimate. Clearance cycles often run through weekends and spill into the following week, so this sliding window is normal.
- If a large write-off falls within the clearance grace period → likely legitimate clearance, not suspicious
- If outside this window → requires explanation (ask the owner)

**Clearance Write-Off Windows:**

| Clearance Month | Expected Write-Off Window |
|-----------------|---------------------------|
| January | ~1/28 – 2/5 |
| April | ~4/27 – 5/5 |
| June | ~6/28 – 7/5 |
| September | ~9/28 – 10/5 |

*Note: Clearance events span the entire month. Write-offs within the month + 5 days into the next month are considered normal. Dates outside these windows require owner explanation.*

**Example recalculations:**
- April 29 writeoff → within April clearance window (4/27-5/5) ✅
- July 1-2 writeoff → within June clearance window (6/28-7/5) ✅
- October 9 writeoff → outside Sept clearance window (9/28-10/5) ❓ Ask owner

**Then ask:**
- "I see large write-offs on these dates — were these clearance adjustments or a cycle count (physical inventory scan)?"
- "Did you do a digital inventory count to write off aging inventory?"
- "Do these dates align with any physical inventory service?"

**Reason codes in Inventory Adjustments:**

| Code | Meaning | LP Relevance |
|------|---------|--------------|
| **SYS-xxx** | System adjustment (from Item Maintenance edits, price/desc changes) | Low — usually small, automated |
| **C-Cycl** | Cycle count (physical scan by RGIS/Datascan or manual finger-count) | **High** — legitimate inventory reconciliation |
| **S-Loss** | Shrink (hand-counted bulk items OR individual items like tags in pockets) | **High** — legitimate shrinkage |
| **D-Disc** | Damaged/Discarded | Medium — check for plausible damaged goods |
| **T-Sell** | Take out, didn't sell (went through full clearance cycle, still unsold) | Medium — usually legitimate, but could be used to hide theft (hard to prove) |
| **E-xxx** | User error (buy/sell/receive entry mistakes) | Low — usually small quantities |
| **S-Misc** | Miscellaneous shrink (catchall for aged inventory write-offs) | Medium — check notes, but could be used to hide theft (hard to prove) |

*Note: Codes vary by store. Check with owner for any store-specific codes not listed here.*

**Save all charts to the store folder.** Any time you generate a chart or visualization, save it to `/documents/pc/pc-8xxxx/` for the store's project folder.

---

### Stage 4: Interpretation

Match findings to common theft vectors:

| Vector | Signature Pattern |
|--------|-------------------|
| Classic Fake Buy | Items entered never existed, zero sales |
| Intermittent Fake | Occasional fake items added after close |
| Self-Write-Off | Employee writes off their own fake transactions |
| Fake Return | Return recorded, cash pocketed |
| Physical Theft | Key holder walks with inventory |

---

## Decision Tree Paths

### Problem A: Inventory Missing

**Reports Used:**
1. **Item Buy Detail** → Find fake buys (zero sales, same buyer)
2. **Period Close Report** → Check return rate for fake returns
3. **Buyer Evaluation Report** → Cross-reference buyer → cashier

**Gut-Check:**
- Run Inventory Adjustments (all codes) → total write-off $ at cost
- Run Period Close Report → Net Sales (after returns) at retail
- Calculate: Write-offs at cost ÷ Net Sales at retail = %
  - Expected: 1-3%
  - Outside range → flag for investigation
- Separate C-Cycl + S-Loss → should be ~1-1.5%
  - Much lower → skipped cycle counts (no physical/digital count process)

---

### Problem B: Margins Low

**Root Causes:**
1. **Bad buyers** — buying junk that only sells at discount
2. **Donation diversion** — employee steals donated items, runs fake buys on garbage, causes poor selection + low margins
3. **Register discounts** — excessive markdown/discounts at register

**Reports Used:**
1. **Period Close Report** → Get IMU% (Initial Markup %), should be ~65-67%
2. **Buyer Evaluation Report** → Compare buyer's avg margin % vs. store avg
3. **Inventory Adjustments** → Check write-offs on that buyer's sessions (junk goes to write-off instead of selling)

**Key Checks:**
- Margins in 50s during clearance (Sept/Jan/Apr/Jun) → normal
- Same low margins OUTSIDE clearance → investigate
- Buyer with consistently lower margin % + high write-offs → red flag

---

### Problem C: High Write-Offs

**Root Causes:**
1. Self-write-off scheme (employee writes off their own fake transactions)
2. Fake damaged goods written off but item actually kept/sold
3. Legitimate clearance overflow
4. Skipped cycle counts

**Reports Used:**
1. **Inventory Adjustments** → check reason codes + clearance windows + WHO
2. **Period Close Report** → get net sales for gut-check calculation

**Gut-Check:**
- Write-offs at cost ÷ Net Sales at retail = 1-3%
- Outside range → flag for investigation
- C-Cycl + S-Loss alone should be ~1-1.5%
- Much lower → skipped cycle counts (no physical/digital count process)

**Key Checks:**
- Check dates against clearance windows (Apr ~4/27-5/5, Jun ~6/28-7/5, Sep ~9/28-10/5)
- Look for same person doing buy + write-off
- T-Sell and S-Misc need notes — hard to prove abuse

---

### Problem D: Everything Seems Off

**Root Causes:**
1. Donation diversion — employee steals donated items, causes poor selection
2. Skipped physical cycle counts — inventory drift not captured
3. Multiple small theft methods adding up

**Reports Used:**
1. **Run all reports** — cross-check for patterns
2. **Item Buy Detail** → buyer patterns
3. **Inventory Adjustments** → write-off analysis
4. **Period Close Report** → margin trends
5. **No-Sale Transactions** → suspicious no-sale events

---

### Stage 5: Action & Follow-Up

Based on findings:

- [ ] Confront suspect with evidence package
- [ ] Review security footage (specific dates)
- [ ] Conduct physical inventory audit
- [ ] Monitor cash drawer variances
- [ ] File police report if warranted
- [ ] Implement preventive controls

---

## Quick Reference Card

| Metric | Normal | Red Flag |
|--------|--------|----------|
| Return Rate | 1-2% | >3% |
| Write-Off Rate | <5% of buys | >10% |
| Unsold Ratio | Varies by season | Sudden spike |
| Buyer Session Size | 10-30 items | 100+ items |

---

## Common Theft Scenarios

### Scenario A: The Classic Fake Buy
Buyer enters items under fake customer name. Items never existed. Later written off as "damaged" or "unsold."

**Red Flags:**
- High item count per transaction
- No corresponding sales
- Same buyer repeatedly

### Scenario B: The Goodwill Grab
Employee brings their own items to sell through the system as part of a "donation" or goodwill buy.

**Red Flags:**
- Known cheap items appearing in buys
- Employee present at time of buy
- Odd price points

### Scenario C: The Self-Write-Off
After creating fake buys, employee processes write-offs to remove evidence and cover tracks.

**Red Flags:**
- Write-offs spike after certain buys
- Same person doing both buy and write-off
- Dates align with employment

### Scenario D: The Phantom Return
Employee processes a fake return, pockets cash, no items returned.

**Red Flags:**
- Return rate elevated
- No corresponding inventory increase
- Returns at end of day/night

---

## Reports Reference

### 1. Item Buy Detail Report
- **What it shows:** All buy transactions within date range — buy dates, sale dates, costs, adjustments
- **Why it matters:** Main data source for finding fake buys, cross-referencing buyer to cashier
- **Key fields:** Transaction ID, Buyer Name, Buy Date, SKU, Category, Sale Date, Cost, Sale Price

### 2. Inventory Adjustments Report
- **What it shows:** Every SKU adjusted — WHO made the adjustment, WHEN, and WHY (reason code)
- **Why it matters:** Identifies who is processing write-offs; shows patterns by date
- **Key fields:** Date, Employee, Reason Code, Items Affected
- **Critical:** Can pinpoint WHO is doing suspicious write-offs

### 3. Buyer Evaluation Report
- **What it shows:** Every buy transaction — who opened it, who closed it, price changes during/after buy, whether item "taken out" (WHO, WHEN), whether item sold (cashier), final selling price
- **Why it matters:** Catches fake buys and price manipulation schemes
- **Key fields:** Open time, Open by, Close time, Close by, Price changes, Taken out by, Sold by

### 4. Period Close Report
- **What it shows:** Sales, returns, shrinkage by period — return rate as % of sales
- **Why it matters:** Detects fake returns (elevated return rate); provides net sales for gut-check calculation
- **Key metrics:**
  - Normal return rate: ~1-2%
  - Flag: >3% return rate
  - IMU% (Initial Markup): Expected ~65-67%

---

## Next Steps After Analysis

1. **Document findings** — Create summary for your records
2. **Gather evidence** — Print relevant transaction details
3. **Consult attorney** — If considering termination or police report
4. **Implement controls** — Segregation of duties, dual approval for write-offs
5. **Schedule follow-up** — Re-run analysis in 90 days to measure improvement

---

*This framework is designed for Plato's Closet franchise owners. Adapt date ranges and checks based on your store's specific situation. For best results, run analysis quarterly as part of routine shrink prevention.*