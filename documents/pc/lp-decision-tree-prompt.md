# LP Decision Tree Flowchart Prompt

Create a decision tree flowchart for a Plato's Closet loss prevention investigation.

START: "What problem are you investigating?"

---

## Branch A: Inventory Missing

1. "Run Item Buy Detail" → Find fake buys (zero sales, same buyer)
2. Fake buys detected?
   - **Yes** → "Identify WHO (buyer vs cashier)" → "Cross-reference with Buyer Evaluation Report" → "Check Period Close for return rate" → **END: Suspect**
   - **No** → Loop to Problem C path or **END: Clear**

---

## Branch B: Margins Low

1. "Run Period Close Report" → Get IMU% (~65-67%)
2. Low margins outside clearance period?
   - **Yes** → "Run Buyer Evaluation Report" → Compare buyer's margin % to store avg
   - **No** → **END: Clear**
3. Buyer shows low margin + high writeoffs?
   - **Yes** → "Run Inventory Adjustments" → Check writeoffs on buyer sessions → **END: Suspect**
   - **No** → **END: Clear**

---

## Branch C: High Write-Offs

1. "Run Inventory Adjustments" → Check reason codes + clearance windows
2. Within clearance window?
   - **Yes** → **END: Likely legitimate**
   - **No** → "Ask owner: cycle count or clearance?" → Check WHO → **END: Suspect or Clear**

---

## Branch D: Everything Seems Off

1. "Run all reports in parallel" → Cross-check patterns
2. Identify underlying pattern → **END: Pattern identified**

---

## Loops (Reports Used in Multiple Paths)

- **Period Close Report** → Used in A, B, C, D
- **Buyer Evaluation Report** → Used in A, B
- **Inventory Adjustments** → Used in B, C

Show loops with dashed arrows returning to the report name, then continuing to the next step.

---

## Reports Legend

| Report | Purpose |
|--------|---------|
| Item Buy Detail | Find fake buys, cross-reference buyer → cashier |
| Inventory Adjustments | Write-off patterns + reason codes + clearance windows |
| Period Close Report | IMU%, return rate, net sales for gut-check |
| Buyer Evaluation | Match buyer to cashier, compare margin % |
| No-Sale Transactions | Find suspicious no-sale events |

---

## Style Requirements

- Clean flowchart layout
- Professional business look
- Color-coded by problem type:
  - Branch A (Inventory Missing) = Blue
  - Branch B (Margins Low) = Green
  - Branch C (High Write-Offs) = Orange
  - Branch D (Everything Off) = Purple
- Legend in corner listing all reports
- Use rectangles for actions
- Use diamonds for decision points
- Use rounded rectangles for endpoints
- Show loops with dashed arrows