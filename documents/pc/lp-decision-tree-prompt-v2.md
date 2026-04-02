# LP Decision Tree Flowchart Prompt (v2)

Create a decision tree flowchart for a Plato's Closet loss prevention investigation.

---

## START (Diamond)

"What problem are you seeing?"

→ If customer reports **inventory missing** → Go to **Branch A**

→ If owner reports **margins low** → Go to **Branch B**

→ If owner reports **high write-offs** → Go to **Branch C**

→ If owner says **"everything seems off"** → Go to **Branch D**

---

## Branch A: Inventory Missing (Blue)

1. "Run Item Buy Detail" → Find zero-sales items with same buyer
2. Fake buys detected? (diamond)
   - **Yes** → "Identify WHO (buyer vs cashier)" → "Cross-reference with Buyer Evaluation Report" → "Check Period Close for return rate" → **END: Suspect** (rounded rectangle, red)
   - **No** → **END: Clear** (rounded rectangle, green)

---

## Branch B: Margins Low (Green)

1. "Run Period Close Report" → Get IMU% (~65-67%)
2. Low margins outside clearance period? (diamond)
   - **Yes** → "Run Buyer Evaluation Report" → Compare buyer's margin % to store avg
   - **No** → **END: Clear**
3. Buyer shows low margin + high writeoffs? (diamond)
   - **Yes** → "Run Inventory Adjustments" → Check writeoffs on buyer sessions → **END: Suspect**
   - **No** → **END: Clear**

---

## Branch C: High Write-Offs (Orange)

1. "Run Inventory Adjustments" → Check reason codes + clearance windows
2. Within clearance window? (diamond)
   - **Yes** → **END: Likely legitimate** (rounded rectangle, yellow)
   - **No** → "Ask owner: cycle count or clearance?" → Check WHO → **END: Suspect or Clear**

---

## Branch D: Everything Seems Off (Purple)

1. "Run all reports in parallel" → Period Close + Buyer Eval + Inventory Adjustments
2. Identify underlying pattern → **END: Pattern identified**

---

## Loops / Reports (dashed arrows)

- **Period Close Report** → Used in A, B, C, D
- **Buyer Evaluation Report** → Used in A, B
- **Inventory Adjustments** → Used in B, C

Show loops with dashed arrows returning to the report name, then continuing to the next step.

---

## Reports Legend (box in corner)

| Report | Purpose |
|--------|---------|
| Item Buy Detail | Find fake buys, cross-reference buyer → cashier |
| Inventory Adjustments | Write-off patterns + reason codes + clearance windows |
| Period Close Report | IMU%, return rate, net sales for gut-check |
| Buyer Evaluation | Match buyer to cashier, compare margin % |
| No-Sale Transactions | Find suspicious no-sale events |

---

## Style Requirements

- **Clean flowchart layout** — left-to-right flow
- **Professional business look**
- **Color-coded by problem type:**
  - Branch A (Inventory Missing) = Blue
  - Branch B (Margins Low) = Green
  - Branch C (High Write-Offs) = Orange
  - Branch D (Everything Off) = Purple
- **Legend in corner** listing all reports
- **Shapes:**
  - Rectangles for actions/steps
  - Diamonds for decision points (Yes/No questions)
  - Rounded rectangles for endpoints
- **Loops shown with dashed arrows** returning to report names
- **START must be a decision diamond** — "What problem are you seeing?" not "Analyze no-sales"