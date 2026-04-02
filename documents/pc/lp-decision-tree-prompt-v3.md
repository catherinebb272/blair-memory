# LP Decision Tree Flowchart Prompt (v3)

Create a decision tree flowchart for a Plato's Closet loss prevention investigation.

---

## START (Diamond)

"What problem are you seeing?" → 4 arrows to branches:
- **Inventory Missing** → Branch A
- **Margins Low** → Branch B
- **High Write-Offs** → Branch C
- **Everything Seems Off** → Branch D

---

## Branch A: Inventory Missing (Blue)

1. "Run Item Buy Detail" → Find zero-sales items with same buyer
2. **"Fake buys detected?"** (diamond)
   - **Yes** → "Identify WHO (buyer vs cashier)" → "Cross-reference with Buyer Evaluation Report" → "Check Period Close for return rate" → **END: Suspect** (rounded rectangle, red)
   - **No** → **END: Clear** (rounded rectangle, green)

---

## Branch B: Margins Low (Green)

1. "Run Period Close Report" → Get IMU% (~65-67%)
2. **"Low margins outside clearance period?"** (diamond)
   - **Yes** → "Run Buyer Evaluation Report" → Compare buyer's margin % to store avg
   - **No** → **END: Clear**
3. **"Buyer shows low margin + high writeoffs?"** (diamond)
   - **Yes** → "Run Inventory Adjustments" → Check writeoffs on buyer sessions → **END: Suspect**
   - **No** → **END: Clear**

---

## Branch C: High Write-Offs (Orange)

1. "Run Inventory Adjustments" → Check reason codes + clearance windows
2. **"Within clearance window?"** (diamond)
   - **Yes** → **END: Likely legitimate** (rounded rectangle, yellow)
   - **No** → **"Ask owner: cycle count or clearance?"** → Check WHO → **END: Suspect or Clear**

---

## Branch D: Everything Seems Off (Purple)

1. "Run all reports in parallel" → Period Close + Buyer Eval + Inventory Adjustments
2. Identify underlying pattern → **END: Pattern identified**

---

## Reports Legend (separate box in corner)

| Report | Purpose |
|--------|---------|
| Item Buy Detail | Find fake buys, cross-reference buyer → cashier |
| Inventory Adjustments | Write-off patterns + reason codes + clearance windows |
| Period Close Report | IMU%, return rate, net sales for gut-check |
| Buyer Evaluation | Match buyer to cashier, compare margin % |

---

## Style Requirements

- **Clean flowchart layout** — left-to-right flow
- **Color-coded by problem type:**
  - Branch A (Inventory Missing) = Blue
  - Branch B (Margins Low) = Green
  - Branch C (High Write-Offs) = Orange
  - Branch D (Everything Off) = Purple
- **Shapes:**
  - Rectangles for actions/steps
  - Diamonds for ALL decision points (yes/no questions)
  - Rounded rectangles for endpoints
- **Show yes/no outcomes on EVERY diamond** — must have arrows labeled "Yes" and "No" going to next steps
- **Loops shown with dashed arrows** returning to report names
- **START must be a decision diamond** — "What problem are you seeing?"

---

## Instructions for Modifying Existing Flowchart

If modifying an existing flowchart diagram:

1. **DO NOT recreate from scratch** — keep the existing layout
2. **Add yes/no branches to each decision diamond** by labeling the arrows
3. **Keep color coding** as specified above
4. **Add the reports legend** as a separate box in the corner
5. **Key phrase to use:** "Keep the existing flowchart layout but add yes/no branches to each decision diamond"

---

## Notes / Lessons Learned

- ChatGPT defaults to generic flowchart layouts — be explicit about shapes
- Hand-drawn sketches can yield better results than text prompts alone
- "Modify" works better than "create" when iterating on existing diagrams
- Always specify yes/no outcomes explicitly — model assumes branching without showing both paths
- Branch names and colors help the model maintain structure across iterations

---

## v3 Updates (Post-Iteration Refinements)

### Issues Identified in Chart Output
- **Missing No paths** — Some diamonds only show Yes path, need explicit No → "END: Clear" arrows
- **Branch labels** — Need letter labels (A, B, C, D) in headers to identify colors
- **Branch D compression** — Should show "Run all reports in parallel → identify pattern → END"
- **Consistency** — Every decision diamond must have both Yes AND No arrows labeled
- **Endpoint colors** — Visual distinction: Clear=green, Suspect=red, Likely legitimate=yellow

### Recommended Visual Layout
- Add letter prefixes to branch headers: "Branch A: Inventory Missing (Blue)"
- Ensure every diamond has TWO outgoing arrows (Yes/No labeled)
- Show endpoint colors: use fill colors in the shapes
- Keep legend box in corner for reference

---

## Template for Final Print Version

```
                    ┌─────────────────────┐
                    │  WHAT PROBLEM ARE   │
                    │   YOU SEEING?       │
                    └──────────┬──────────┘
                               │
         ┌──────────┬─────────┼─────────┬──────────┐
         │          │         │         │          │
    ┌────▼────┐ ┌───▼───┐ ┌───▼────┐ ┌──▼─────┐
    │Branch A │ │Branch B│ │Branch C│ │Branch D│
    │Inventory│ │Margins │ │High    │ │Everything│
    │Missing  │ │Low     │ │Writeoffs│ │Seems Off│
    │(Blue)   │ │(Green) │ │(Orange)│ │(Purple)│
    └─────────┘ └────────┘ └────────┘ └─────────┘
```

Each branch follows the yes/no diamond structure as detailed above.