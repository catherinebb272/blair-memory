# Heyron Launchpad — Code Sections

*Documenting the structure of `launchpad-original.html`*

---

## Section 1: Head & CSS Variables (Lines 1–23)

These lines set up the page metadata and define the design system.

### What's happening:

| Line(s) | Purpose |
|---------|---------|
| `<title>` | Sets browser tab text |
| `<link rel=\"preconnect\">` | Speeds up loading of external font (rsms.me) |
| `<link rel=\"stylesheet\">` | Loads Inter font from rsms.me |
| `:root { ... }` | Defines **CSS custom properties** (variables) for the entire design system |

### The design system (`:root`):

- **Colors:** Dark background (`#0C0F14`), panel backgrounds, teal accent (`#5EEAD4`), text colors
- **Border radius:** Small (8px) to XL (20px) — controls how rounded corners are
- **Base reset:** `* { box-sizing: border-box; margin: 0; padding: 0; }` — removes default browser spacing
- **Typography:** Inter font, system fallbacks, JetBrains Mono for code
- **Rendering:** Antialiased text for smoother appearance

---

## Section 2: Core Layout & Components (Lines 24–114)

This chunk defines **all the UI building blocks** — containers, buttons, cards, form inputs, etc. These are CSS class selectors (the `.name` ones) that style specific element types.

### Layout & Containers

| Class | What it does |
|-------|-------------|
| `.app` | Main wrapper — max-width 720px, centered, padding bottom for scroll room, min-height fills screen |
| `.panel` | Card-like container with subtle border, rounded corners, internal padding (32px top, 24px bottom) |
| `.placeholder-note` | Teal-tinted alert box with dashed border — used for temporary/inline notes |
| `.foot` | Footer text — small, muted, centered |

### Brand & Typography

| Class | What it does |
|-------|-------------|
| `.brand` | Flex container for logo area — aligns items side-by-side with small gap |
| `.brand-name` | Logo text — 15px, medium weight |
| `.brand-dot` | Little teal dot next to logo (the "Heyron" indicator) |
| `h1.headline` | Main heading — 26px, medium weight, tight line-height |
| `p.sub` | Subtitle/description — 15px, secondary (muted) text color |

### Hero Section

| Class | What it does |
|-------|-------------|
| `.hero` | Flex row — image left, text right, centered vertically, gap 24px |
| `.hero-text` | Takes remaining space (`flex: 1`) so image stays fixed width |

### Cards & Grids

| Class | What it does |
|-------|-------------|
| `.card-grid` | 2-column CSS grid (1fr 1fr), 14px gap — for pairing options side-by-side |
| `.card` | Individual card — panel background, border, padding 20px, flex column layout |
| `.card.recommended` | Adds accent border to highlight a "recommended" option |
| `.card-title` | Card heading — 17px, medium weight |
| `.card-desc` | Card body — 14px, muted, line-height 1.55, pushes button to bottom via `flex: 1` |

### Buttons

| Class | What it does |
|-------|-------------|
| `.btn` | Base button — flex centered, gap for icon spacing, rounded, 120ms transitions |
| `.btn-primary` | Main CTA — teal background, dark text, darker on hover |
| `.btn-ghost` | Secondary — transparent bg, border, subtle hover fill |
| `.btn-link` | Inline link style — small, teal, bordered pill shape |
| `.btn-text` | Text-only — no border, teal, subtle underline on hover |
| `.btn-sm` | Small button — tighter padding, 12px font, doesn't stretch (`flex-shrink: 0`) |
| `.btn:disabled` | Faded out (40% opacity) with not-allowed cursor |

### Tags & Badges

| Class | What it does |
|-------|-------------|
| `.pill` | Inline tag — teal bg tint, rounded 20px, small text, used for labels like "Recommended" |
| `.pill-spacer` | Invisible spacer that matches pill height for alignment |

### Form Fields

| Class | What it does |
|-------|-------------|
| `.field` | Wrapper for label + input — adds 16px bottom margin |
| `.field label` | Field label — 13px, muted text, 6px below it |
| `.field-hint` | Helper text below input — 12px, very muted |
| `.input` | Text input styling — full width, dark bg, subtle border, teal glow on focus |
| `textarea.input` | Textarea variant — vertical resize, min-height 80px |
| `select.input` | Dropdown — custom arrow via CSS gradient (removes default browser arrow) |

### Progress Stepper

| Class | What it does |
|-------|-------------|
| `.steps` | Horizontal row of step indicators |
| `.step` | Individual step — flex-growing line, 3px tall, muted by default |
| `.step.active` | Filled teal — current step |
| `.step.done` | Filled teal but dimmed (40% opacity) — completed steps |

### Selectable Options (Grid)

| Class | What it does |
|-------|-------------|
| `.options` | 3-column grid for selectable items |
| `.options-rich` | 2-column grid with tighter gap — for richer content |
| `.option` | Clickable option card — hover brightens border, selected gets teal border |
| `.option-title` | Option heading with optional icon gap |
| `.option-desc` | Option description — 12px, muted |
| `.option-tag` | Small tag inside option — "NEW" or similar, teal bg |

### Selectable Options (List)

| Class | What it does |
|-------|-------------|
| `.options-list` | Vertical stack of options instead of grid |
| `.options-list .option` | Flex row — checkbox left, content right |
| `.option-mark` | Custom radio/checkbox circle — border, no fill initially |
| `.options-list .option.selected .option-mark::after` | Fills with teal when selected (pseudo-element) |

### Persona Card

| Class | What it does |
|-------|-------------|
| `.persona-card` | Card showing persona preview — 18px padding |
| `.persona-name` | Persona name — 15px, medium |
| `.persona-tag` | Persona tagline — 12px, muted |
| `.persona-sample` | Sample quote — italic, teal left border accent, muted bg |
| `.persona-best` | "Best for..." text — 11px, very muted |

### Use Case Selector

| Class | What it does |
|-------|-------------|
| `.usecase-grid` | 2-column grid for use case chips |
| `.usecase` | Clickable row — flex with checkbox + label, cursor pointer |
| `.usecase-check` | Custom checkbox — 16px square, rounded, teal fill + checkmark when `.selected` |
| `.usecase-label` | Label text — takes remaining space |

### Special Elements

| Class | What it does |
|-------|-------------|
| `.soul-note` | Teal-tinted note box — for tips or callouts, 12px text |
| `.actions` | Button row at bottom — flex, gap 12px, margin-top 28px |
| `.actions .btn-back` / `.btn-skip` | Back/Skip buttons — `flex: 0 0 auto` so they don't stretch like primary buttons |

### Chips/Tags (Single-Select Buttons)

| Class | What it does |
|-------|-------------|
| `.chip-row` | Flex container for chip buttons, 8px gap |
| `.chip` | Individual chip button — flex:1 (equal width), 8px padding, dark bg, border, cursor pointer |
| `.chip:hover` | Border brightens to border-strong on hover |
| `.chip.selected` | Selected state — teal border, teal text |

---

## Section 3: Setup Forms (Lines 115–130)

These define the "setup step" UI — the vertical list showing progress through a multi-step configuration (like setting up working hours or integrations).

### `.setup` — Container
- **Background:** `var(--bg-panel)` — dark panel color
- **Border:** 0.5px solid `var(--border-muted)` — subtle gray border
- **Border radius:** `var(--r-lg)` — 14px rounded corners
- **Padding:** 18px all around

### `.setup-step` — Individual Step Row
- **Display:** `flex` — row layout (number on left, content on right)
- **Gap:** 12px between number and content
- **Padding:** 14px top/bottom
- **Border bottom:** 0.5px solid `var(--border-muted)` — separates steps
- **`:last-child`:** Removes bottom border and padding — last step has no divider
- **`:first-child`:** Removes top padding — first step sits flush at top

### `.setup-num` — Step Number Circle
- **Size:** 22px × 22px
- **Shape:** 50% border-radius = perfect circle
- **Background:** `var(--bg-panel-2)` — slightly darker than panel (dimmed state)
- **Text color:** `var(--text-secondary)` — muted
- **Font:** 11px, medium weight
- **Layout:** `flex` centered — centers number in circle
- **Margin:** `margin-top: 2px` — nudges down to align with first line of text
- **`.done` state:** Background becomes `var(--accent)` (teal), text becomes `var(--text-on-accent)` (dark) — completed step indicator

### `.setup-step-body` — Content Area
- **Flex:** `1` — takes all remaining space
- **Min-width:** `0` — allows text truncation if needed

### `.setup-step-title` — Step Title
- **Font size:** 13px
- **Weight:** 500 (medium)
- **Margin bottom:** 4px

### `.setup-step-desc` — Step Description
- **Font size:** 12px
- **Color:** `var(--text-secondary)` — muted
- **Line height:** 1.55 — comfortable reading

### `.setup-step-action` — Button Area
- **Margin top:** 10px — spacing above action button

### `.setup-cta` — Call-to-Action Button
- **Display:** `inline-flex` — button that shrinks to fit content
- **Align/justify:** centered — centers text + icon
- **Gap:** 8px between text and icon
- **Padding:** 12px vertical, 18px horizontal
- **Font:** 14px, medium weight
- **Border radius:** `var(--r-md)` — 10px
- **Width:** 100% — fills container
- **Background:** `var(--bg-panel-2)` — dark
- **Text:** `var(--text-primary)`
- **Border:** 0.5px solid `var(--border-strong)` — visible outline
- **Cursor:** pointer
- **Transition:** 120ms for all properties — smooth hover
- **Hover state:** Border brightens to `var(--accent-edge)` (teal glow), background lightens to `var(--bg-panel)`
- **Disabled state:** 50% opacity, not-allowed cursor

### `.setup-status` — Status Message Box
- **Display:** flex row
- **Gap:** 8px between icon and text
- **Padding:** 12px vertical, 14px horizontal
- **Background:** `var(--accent-soft)` — teal tint (rgba(94,234,212,0.08))
- **Border:** 0.5px solid `var(--accent-edge)` — teal border
- **Border radius:** `var(--r-md)` — 10px
- **Font size:** 13px
- **Color:** `var(--accent)` — teal text

---

## Section 4: Voice Pick, Permissions, Integrations (Lines 132–154)

### `.voice-pick` — Voice Selection Grid
- **Layout:** 2-column grid (`1fr 1fr`)
- **Gap:** 8px between cells

### `.voice` — Individual Voice Option
- **Padding:** 12px all around
- **Background:** `var(--bg-page)` — dark page bg (slightly different from panel)
- **Border:** 0.5px solid `var(--border-muted)` — subtle
- **Radius:** `var(--r-md)` — 10px
- **Cursor:** pointer
- **Text align:** left
- **Transition:** border-color 120ms
- **Position:** relative — for positioning child elements
- **Hover:** border brightens to `var(--border-strong)`
- **Selected:** border becomes `var(--accent)` (teal)

### `.voice-name` — Voice Name
- **Font:** 13px, medium weight
- **Margin bottom:** 2px
- **Layout:** flex space-between — pushes checkmark/indicator to right
- **Align:** center vertically

### `.voice-desc` — Voice Description
- **Font:** 11px
- **Color:** `var(--text-tertiary)` — very muted

### `.voice-play` — Play Sample Button
- **Size:** 10px text
- **Color:** `var(--accent)` — teal
- **Cursor:** pointer
- **Padding:** 2px 6px — tight
- **Border:** 0.5px solid `var(--accent-edge)` — teal outline
- **Radius:** 4px
- **Background:** transparent

### `.permissions` — Permissions List Container
- **Display:** flex column
- **Gap:** 0 — no gap between items (they're separated by borders)

### `.permissions .toggle-row` — Permission Row
- **Padding:** 12px top/bottom
- **:first-child:** top padding reduced to 4px
- **:last-child:** bottom padding reduced to 4px

### `.skip-hint` — Skip Hint Text
- **Font size:** 12px
- **Color:** `var(--text-tertiary)` — very muted
- **Align:** center
- **Margin top:** 14px

### `.integrations` — Integration List
- **Display:** flex column
- **Gap:** 8px between items

### `.integration` — Individual Integration Item
- **Layout:** flex row — icon left, content right
- **Gap:** 12px between icon and text
- **Background:** `var(--bg-panel)`
- **Border:** 0.5px solid `var(--border-muted)`
- **Radius:** `var(--r-md)` — 10px
- **Padding:** 14px
- **Transition:** border-color 120ms
- **`.connected` state:** border becomes `var(--accent)` — teal for connected integrations

### `.integration-icon` — Integration Icon Box
- **Size:** 36px × 36px
- **Radius:** `var(--r-sm)` — 8px
- **Background:** `var(--bg-panel-2)` — slightly darker
- **Display:** flex centered
- **Font:** 12px, medium weight, accent color
- **Flex shrink:** 0 — doesn't compress
- **Letter spacing:** 0.04em — slight spacing for acronyms

### `.integration-body` — Integration Content
- **Flex:** 1 — takes remaining space
- **Min-width:** 0 — allows truncation

### `.integration-name` — Integration Name
- **Font:** 14px, medium weight
- **Margin bottom:** 2px

### `.integration-desc` — Integration Description
- **Font:** 12px
- **Color:** `var(--text-secondary)` — muted
- **Line height:** 1.45

---

## Section 5: Checkbox & Toggle Switch (Lines 155–169)

### `.checkbox` — Custom Checkbox Label
- **Layout:** flex row — checkbox box left, label text right
- **Gap:** 10px between box and text
- **Cursor:** pointer
- **Margin top:** 14px — spacing above
- **Font size:** 13px
- **Color:** `var(--text-secondary)` — muted
- **Background:** none
- **Border:** none
- **Padding:** 0
- **Text align:** left
- **Width:** 100%

### `.checkbox-mark` — Checkbox Visual Box
- **Size:** 16px × 16px
- **Shape:** 4px border-radius (rounded square)
- **Border:** 1px solid `var(--border-strong)` — visible gray outline
- **Position:** relative — for positioning checkmark
- **Flex shrink:** 0 — won't compress
- **Transition:** all 120ms — smooth state changes

### `.checkbox.checked .checkbox-mark` — Checked State
- **Background:** `var(--accent)` — teal fill
- **Border color:** `var(--accent)` — teal border

### `.checkbox.checked .checkbox-mark::after` — Checkmark Icon
- **Content:** empty (css-generated)
- **Position:** absolute
- **Left:** 4px, **Top:** 1px
- **Width:** 4px, **Height:** 8px
- **Border:** 2px solid (creates the check shape)
- **Colors:** `var(--text-on-accent)` — dark (for contrast on teal)
- **Border top/left:** 0 — removes top and left edges
- **Transform:** rotate(45deg) — angles it to look like a checkmark

---

### `.toggle-row` — Toggle Switch Row
- **Layout:** flex row — label left, toggle right
- **Align:** flex-start (top-aligned)
- **Justify:** space-between — pushes toggle to far right
- **Gap:** 16px between label and toggle
- **Padding:** 14px top/bottom
- **Border bottom:** 0.5px solid `var(--border-muted)`
- **:last-child:** removes bottom border

### `.toggle-info` — Toggle Label Container
- **Flex:** 1 — takes remaining space

### `.toggle-title` — Toggle Title
- **Font:** 14px, medium weight
- **Margin bottom:** 4px

### `.toggle-desc` — Toggle Description
- **Font:** 12px
- **Color:** `var(--text-secondary)` — muted
- **Line height:** 1.5

### `.toggle` — Toggle Switch Track
- **Size:** 36px × 20px
- **Shape:** 10px border-radius (pill shape)
- **Background:** `var(--border-muted)` — gray when off
- **Position:** relative — for positioning knob
- **Cursor:** pointer
- **Flex shrink:** 0 — won't compress
- **Transition:** background 160ms
- **Border:** none
- **Padding:** 0
- **Margin top:** 2px — slight offset

### `.toggle.on` — Toggle On State
- **Background:** `var(--accent)` — teal when on

### `.toggle::after` — Toggle Knob (Off)
- **Content:** empty
- **Position:** absolute
- **Left:** 2px, **Top:** 2px
- **Size:** 16px × 16px
- **Shape:** 50% border-radius = circle
- **Background:** `var(--text-primary)` — white/dark knob
- **Transition:** transform 160ms

### `.toggle.on::after` — Toggle Knob (On)
- **Background:** `var(--text-on-accent)` — dark knob (for contrast on teal)
- **Transform:** translateX(16px) — slides right to "on" position

---

## Section 6: Two-Column Grid & Day Selector (Lines 171–182)

### `.two-col` — Two-Column Grid Layout
- **Display:** grid
- **Columns:** `1fr 1fr` — equal width columns
- **Gap:** 12px between columns

### `.day-row` — Day Selector Row
- **Display:** flex row
- **Gap:** 6px between days
- **Margin top:** 8px — spacing above

### `.day` — Individual Day Button
- **Flex:** 1 — each day takes equal space
- **Padding:** 10px vertical, 4px horizontal
- **Font size:** 12px
- **Background:** `var(--bg-panel)`
- **Border:** 0.5px solid `var(--border-muted)`
- **Radius:** `var(--r-sm)` — 8px
- **Cursor:** pointer
- **Text align:** center
- **Color:** `var(--text-secondary)` — muted
- **Transition:** all 120ms
- **Hover:** border brightens to `var(--border-strong)`
- **`.selected` state:**
  - Border: `var(--accent)` — teal
  - Color: `var(--accent)` — teal text
  - Background: `var(--accent-soft)` — teal tint

---

### `.summary` — Summary/Review Card
- **Display:** flex column
- **Gap:** 0 — rows separated by borders
- **Background:** `var(--bg-panel)`
- **Border:** 0.5px solid `var(--border-muted)`
- **Radius:** `var(--r-lg)` — 14px

### `.summary-row` — Summary Row
- **Layout:** flex row, space-between
- **Align:** flex-start — top-aligned
- **Padding:** 12px vertical, 16px horizontal
- **Border bottom:** 0.5px solid `var(--border-muted)`
- **Font size:** 13px
- **Gap:** 12px
- **:last-child:** removes bottom border

### `.summary-section-title` — Section Header Within Summary
- **Font size:** 11px
- **Color:** `var(--accent)` — teal
- **Padding:** 10px 16px 6px — tight vertical
- **Letter spacing:** 0.04em
- **Text transform:** uppercase
- **Font weight:** 500

### `.summary-label` — Summary Label (Left)
- **Color:** `var(--text-secondary)` — muted
- **Flex shrink:** 0 — don't compress

### `.summary-value` — Summary Value (Right)
- **Color:** `var(--text-primary)` — bright
- **Font weight:** 500 — medium
- **Text align:** right

---

*Note: Lines 182-238 are Dashboard/Help page formatting — skipping per Catherine's request.*

*Note: Lines 239-312 are Support Widget — skipping per Catherine's request.*

---

## Section 7: Mascot SVG Components (Lines 313–368)

**⚠️ This is JavaScript/React, not CSS!** These are actual functions that render the raccoon mascot images.

### What's happening here:

This chunk defines **React components** that draw the raccoon mascot using SVG (Scalable Vector Graphics). Instead of loading image files, the raccoon is drawn programmatically with code — shapes, paths, circles.

### Component: `Eye({ cx, cy, pupilCx, pupilCy })`
Draws a single eye with:
- **White sclera:** `circle` with `fill="#F5F0E8"` (cream color)
- **Pupil:** darker circle `fill="#18181B"` (black)
- **Eye highlight:** tiny white dot for shine

### Component: `Mascot({ pose = 'greeting', size = 120 })`
The main full-body raccoon. Key parts:

| Element | What it is |
|---------|------------|
| `path` elements | Body, ears, tail — drawn as shapes |
| `rect` elements | Legs/feet |
| `ellipse` elements | Feet/paws |
| `circle` | Head |
| Colors used | `#D4D4D8` (gray), `#1E293B` (dark blue-gray), `#5EEAD4` (teal accent) |

**Parameters:**
- `pose` — Currently unused default (could switch between different poses)
- `size` — Width in pixels (default 120), height auto-calculated

### Component: `HeadMascot({ size = 32 })`
Smaller head-only version for favicons or inline use.

### Component: `Brand()`
Simple logo component that renders the Heyron brand (name + teal dot).

### Component: `Steps({ current, total })`
Progress stepper that generates `total` number of dots, marking:
- `i < current` → `.done` class (completed, teal)
- `i === current` → `.active` class (current step, bright teal)
- Others → default muted

### Component: `StatusOK({ children })`
Green checkmark status indicator — renders a teal circle with a white checkmark, plus any children text.

### Component: `SetupRow({ num, title, desc, children, done })`
Reusable setup step row that shows:
- **Number circle:** Shows `num` OR '✓' if `done`
- **Title + description:** The step info
- **Children:** Any action buttons/inputs

---

## Section 8: Welcome Page Component (Lines 370–418)

**⚠️ JavaScript/React** — This is a page/component definition, not CSS.

### Component: `LaunchpadWelcome({ data, onChoose })`
This renders the **first screen** users see — the welcome/path selection page.

### Parameters:
- `data` — User data object (checks for `data.email` to personalize greeting)
- `onChoose` — Callback function when user selects a path

### What it renders:

| Element | Purpose |
|---------|----------|
| `<Brand />` | Logo component (Heyron + dot) |
| `<Mascot pose="greeting" size={118} />` | Raccoon at 118px, "greeting" pose |
| `<h1 className="headline">` | Personalized headline: "Hey [name], let's get set up." |
| `<p className="sub">` | Subtitle: "Pick a path..." |
| `.card-grid` | Two-column grid with Beginner/Expert cards |
| `.card.recommended` | Beginner card marked as recommended |
| `.pill` | "Recommended" badge |
| `.pill-spacer` | Invisible spacer to align non-recommended card |
| `btn-primary` | Main CTA button (Start as Beginner) |
| `btn-ghost` | Secondary button (Configure manually) |
| `.foot` | Footer text: "You can switch modes from settings anytime." |

### How it works:
1. Shows personalized greeting if email exists (extracts name before @)
2. Displays two path options: **Beginner** (recommended) vs **Expert**
3. Calls `onChoose('beginner')` or `onChoose('expert')` on button click
4. User data flows in via `data` prop, navigation flows out via `onChoose` callback

---

## Section 9: NamesScreen Component (Lines ~419–470)

**⚠️ JavaScript/React** — This is the **first interactive screen** with actual form handling.

### Component: `NamesScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`
This is the **Names page** — first place with real user input and validation.

### Parameters:
- `data` — Object with `{ yourName, agentName }`
- `onUpdate` — Callback to update data: `onUpdate({ yourName: "..." })`
- `onNext` — Callback when user clicks Continue
- `onBack` — Callback when user clicks Back
- `step` — Current step number (for progress bar)
- `totalSteps` — Total steps (for progress bar)

### Validation:
```javascript
const valid = data.yourName.trim() && data.agentName.trim();
```
- Both fields must have content (whitespace-only fails)
- Continue button disabled (`disabled={!valid}`) until valid

### What it renders:

| Element | Purpose |
|--------|----------|
| `<Brand />` | Logo |
| `<Steps current={step} total={totalSteps} />` | Progress bar |
| `<Mascot pose="greeting" size={100} />` | Smaller mascot (100px) |
| `<h1 className="headline">` | "Some quick names." |
| `<p className="sub">` | Helper text |
| `.field` (×2) | Two input fields: Your name, Agent's name |
| `placeholder` | "Cassie" for your name, example names for agent |
| `.field-hint` | Tip: "Pick something you'll enjoy seeing..." |
| `.actions` | Back + Continue buttons |
| `btn-ghost btn-back` | Back button |
| `btn-primary` | Continue button |

### How it works:
1. User types in either field
2. `onChange` fires → calls `onUpdate({ yourName: e.target.value })`
3. `valid` re-calculates on every keystroke
4. Continue button enables only when both fields have text
5. Continue calls `onNext()`, Back calls `onBack()`

### Key pattern:
This is the **controlled component** pattern — React owns the state, the input just displays it. Every keystroke triggers a re-render.

---

## Section 10: UseCasesScreen Component (Lines ~420–445)

**⚠️ JavaScript/React** — Multi-select use case picker.

### Component: `UseCasesScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`
This screen lets users select multiple use cases for their agent.

### Parameters:
- `data` — Object with `{ agentName, useCases }`
- `onUpdate` — Callback to update useCases array
- `onNext`, `onBack`, `step`, `totalSteps` — Navigation/progress

### Multi-select logic:
```javascript
const toggle = (id) => {
  const next = new Set(data.useCases);
  next.has(id) ? next.delete(id) : next.add(id);
  onUpdate({ useCases: Array.from(next) });
};
```
- Uses a `Set` for efficient add/remove
- If clicked and already selected → remove it
- If clicked and not selected → add it
- Converts back to Array for React state

### What it renders:

| Element | Purpose |
|--------|----------|
| `<Brand />` | Logo |
| `<Steps />` | Progress bar |
| `<Mascot pose="greeting" size={80} />` | Even smaller mascot (80px) |
| `<h1 className="headline">` | "What should [agentName] focus on?" |
| `<p className="sub">` | "Pick everything that applies..." |
| `.usecase-grid` | 2-column CSS grid for use case chips |
| `.usecase` + `.usecase-check` | Clickable rows with custom checkbox |

### How it works:
1. Maps through `USE_CASES` array (defined elsewhere in file)
2. For each use case: checks if `data.useCases.includes(u.id)`
3. If yes → adds `.selected` class (teal border + filled checkbox)
4. Click → calls `toggle(u.id)` → adds/removes from selection

### Key CSS classes used:
- `.usecase-grid` — 2-column grid (from Section 4)
- `.usecase` — clickable row with hover/selected states
- `.usecase-check` — custom checkbox visual (filled when selected)

---

## Section 10b: UseCasesScreen Footer & PERSONAS Array (Lines 446–462)

### Continuation of UseCasesScreen:

#### `.soul-note` — Info Box
- Teal-tinted note explaining where the use cases go
- Dynamic text: "these get written into [agentName]'s **soul**"
- Links to Settings → Soul for editing

#### Actions
- Back button (`btn-ghost btn-back`)
- Continue button (`btn-primary`)
- **Validation:** `disabled={data.useCases.length === 0}` — must pick at least one

---

### `PERSONAS` Array — Predefined Personality Options

| ID | Name | Tag | Sample Quote | Best For |
|----|------|-----|--------------|----------|
| `steady` | Steady | Calm, clear, no-frills. | "Sent. Three more in the queue." | Focused work with tight deadlines. |
| `curious` | Curious | Asks before acting. | "Quick check — should I include the design team on this?" | Ambiguous projects with many stakeholders. |
| `sharp` | Sharp | Terse and high-signal. | "Done. Doc here. Anything else?" | Power users who hate small talk. |
| `warm` | Warm | Friendly, encouraging, on your team. | "Got this one covered. You take care of the harder thing." | High-stress weeks and heavy workloads. |
| `playful` | Playful | Witty and light. | "Five down, two to go. Worth a snack break?" | Casual teams that like a little personality. |
| `formal` | Formal | Polished and careful. | "I have completed the draft and saved it for your review." | Client-facing or regulated environments. |

**Purpose:** This array defines the personality options for the next screen. Each has:
- `id` — machine-readable identifier
- `name` — display name
- `tag` — short description
- `sample` — example quote the persona would generate
- `best` — recommendation for when to use this persona

---

## Section 11: PersonalityScreen Component (Lines 463–481)

**⚠️ JavaScript/React** — Single-select persona picker.

### Component: `PersonalityScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`
This screen lets users pick a single personality type for their agent.

### Parameters:
- `data` — Object with `{ agentName, personality }`
- `onUpdate` — Callback: `onUpdate({ personality: p.id })`
- `onNext`, `onBack`, `step`, `totalSteps` — Navigation/progress

### What it renders:

| Element | Purpose |
|--------|----------|
| `<Brand />` | Logo |
| `<Steps />` | Progress bar |
| `<h1 className="headline">` | "Pick a starter personality." |
| `<p className="sub">` | Dynamic subtitle: "This shapes how [agentName] talks..." |
| `.options.options-rich` | 2-column grid (tighter gap than regular options) |
| `.option.persona-card` | Each personality as a clickable card |
| `.persona-name` | Name (Steady, Curious, etc.) |
| `.persona-tag` | Tagline |
| `.persona-sample` | Example quote |
| `.persona-best` | "Best for: [use case]" |
| `.actions` | Back + Continue buttons |

### How it works:
1. Maps through `PERSONAS` array (from Section 10b)
2. Checks if `data.personality === p.id` to add `.selected` class
3. Click → calls `onUpdate({ personality: p.id })`
4. Continue disabled until `data.personality` is set (truthy check)

### CSS classes used:
- `.options-rich` — 2-column grid (from Section 2)
- `.option` — clickable card with hover/selected states
- `.persona-card` — padding 18px
- `.persona-name`, `.persona-tag`, `.persona-sample`, `.persona-best` — text styling

### Key difference from UseCasesScreen:
- **UseCasesScreen:** multi-select (Array)
- **PersonalityScreen:** single-select (string ID)

---

## Section 12: CommStyleScreen & COMM_STYLES Array (Lines 482–509+)

### `COMM_STYLES` Array — Communication Verbosity Options

| ID | Name | Description | Sample |
|----|------|-------------|--------|
| `concise` | Concise | Just the answer. No fluff. | "Done — saved to Drive." |
| `balanced` | Balanced | Answer plus useful context. | "Done — saved to Drive under /work/april. Want a recap?" |
| `detailed` | Detailed | Full reasoning and next steps. | "Done. Saved to Drive at /work/april/notes.md. I added the two columns you mentioned and reformatted the date parsing. Anything else to adjust?" |

**Purpose:** Defines how verbose the agent's responses should be. This is layered *on top of* personality — same voice, different verbosity.

---

### Component: `CommStyleScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`

### What it renders:

| Element | Purpose |
|--------|----------|
| `<Brand />` | Logo |
| `<Steps />` | Progress bar |
| `<Mascot pose="greeting" size={80} />` | 80px mascot |
| `<h1 className="headline">` | "How chatty should it be?" |
| `<p className="sub">` | "This is on top of personality..." |
| `.options-list` | Vertical list (not grid!) |
| `.option` with custom inline styles | Radio button + text + sample |
| `.option-mark` | Custom radio circle (fills when selected) |
| `.option-title`, `.option-desc` | Name + description |
| `.comm-sample` | Example output in quote style |

### How it works:
1. Maps through `COMM_STYLES` array
2. Uses `.options-list` (vertical stack) instead of grid
3. Custom inline `style={{ flexDirection: 'column', alignItems: 'stretch', gap: 0 }}` makes each option a vertical column
4. Inner flex row: radio mark + text on top, sample quote below
5. Single-select: `onUpdate({ commStyle: c.id })`

### Key difference from PersonalityScreen:
- **PersonalityScreen:** `.options.options-rich` (2-column grid)
- **CommStyleScreen:** `.options-list` (vertical list with radio buttons)
- Shows sample output for each to help users decide

---

## Section 13: ModelScreen Component (Lines 516–538)

**⚠️ JavaScript/React** — Single-select model picker.

### Component: `ModelScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`

### What it renders:

| Element | Purpose |
|--------|----------|
| `<Brand />` | Logo |
| `<Steps />` | Progress bar |
| `<Mascot pose="thinking" size={80} />` | **New pose!** "thinking" instead of "greeting" |
| `<h1 className="headline">` | "Choose a model." |
| `<p className="sub">` | "Powers reasoning and replies..." |
| `.options-list` | Vertical list (same as CommStyleScreen) |
| `.option` with radio | Each model as selectable row |
| `.option-mark` | Radio circle (fills when selected) |
| `.option-title` + `.option-tag` | Name + "Recommended" badge if `m.recommended` |
| `.option-desc` | Description |

### How it works:
1. Maps through `MODELS` array (defined elsewhere in file)
2. Same `.options-list` layout as CommStyleScreen
3. Radio button selection: `onUpdate({ model: m.id })`
4. Renders a "Recommended" pill tag for models with `m.recommended = true`
5. Mascot uses a **different pose**: `"thinking"` — shows the raccoon actually thinking!

### Key note:
- Uses `pose="thinking"` instead of `pose="greeting"` — the Mascot component must support different poses
- This is where the Mascot's `pose` parameter actually gets used!

---

## ⚡ REPLACING THE MASCOT WITH CUSTOM IMAGES

If you want to replace the coded SVG raccoon with different image files for each screen:

### Option 1: Replace the Mascot component (all screens at once)
- **Where:** `function Mascot({ pose, size })` (around lines 313-368)
- **What to delete:** The entire SVG path definitions
- **Replace with:** A simple image tag:
```javascript
function Mascot({ pose = 'greeting', size = 120 }) {
  return (
    <img 
      src={`/images/mascot-${pose}.png`} 
      width={size} 
      height={size * 200 / 160}
      alt="Heyron mascot"
    />
  );
}
```
- **Note:** This approach uses one image per pose (greeting, thinking, etc.) — all screens share the same set.

### Option 2: Replace per-screen (different image per screen)
- **What to do:** Replace each `<Mascot />` call in each screen with your own `<img>` tag
- **Example for NamesScreen (line ~419):**
```javascript
// DELETE:
<Mascot pose="greeting" size={100} />

// REPLACE WITH:
<img src="/images/raccoon-names.png" style={{ width: 100, height: 'auto' }} alt="Heyron" />
```
- **Example for UseCasesScreen:**
```javascript
// DELETE:
<Mascot pose="greeting" size={80} />

// REPLACE WITH:
<img src="/images/raccoon-usecases.png" style={{ width: 80, height: 'auto' }} alt="Heyron" />
```

### CSS class to add (anywhere in CSS section):
```css
.mascot-img { object-fit: contain; width: 80px; height: auto; }
```

### Screens that use Mascot:
- LaunchpadWelcome (size 118, greeting)
- NamesScreen (size 100, greeting)
- UseCasesScreen (size 80, greeting)
- CommStyleScreen (size 80, greeting)
- ModelScreen (size 80, **thinking**)
- IntegrationsPickScreen (size 90, greeting)
- IntegrationStep (size 90, greeting) — *reused per tool in Expert path*
- MemoryScreen (size 80, **thinking**)
- HoursScreen (size 80, greeting)
- NotificationsScreen (size 80, greeting)
- PrivacyScreen (size 80, greeting)
- PreviewScreen (size 100, greeting)
- **Total: ~12 full-body Mascot calls + 1 HeadMascot** (Dashboard header)

### Image Matchup (250px originals, all .png)
Based on Canva visual descriptions:
| Screen | Image File | Notes |
|--------|-----------|-------|
| hello-screen.html (entry) | raccoonspace | Astronaut raccoon floating in zero-g |
| LaunchpadWelcome | raccoon11 | Ron holding helmet ready to go |
| NamesScreen | raccoon2 | Ron at retro control console, typing |
| UseCasesScreen | raccoon3 | Closeup Ron holding clipboard with checkmarks |
| CommStyleScreen | raccoon5 | Ron turning big dial (chatty) - FLIP LEFT |
| ModelScreen | (思考 pose) | Thinking - could use any thinking raccoon |
| IntegrationsPickScreen | raccoon6 | Ron at wall panel with knobs |
| IntegrationStep (per tool) | raccoon10 | Console with multiple integrations (GitHub, Telegram, Discord) |
| MemoryScreen | raccoon8 | Ron reaching for memory cubes |
| HoursScreen | raccoon9 | Hourglass - retro style |
| NotificationsScreen | (no match) | Could use comm-style or integrations image |
| PrivacyScreen | raccoon4 | Nebula design (no raccoon) - or raccoon7 |
| PreviewScreen | raccoon12 | Ron in suit looking at bubbles - LEFT SIDE |
| Dashboard header | raccoon (space Ron) | For index/dashboard |

**Unused:** raccoon7 (Ron reaching for cables) - could use for Privacy or Notifications

### Important notes:
- Each screen calls `<Mascot />` independently — no central rendering
- You can change `size` parameter to match your image dimensions
- Consider adding a `.mascot` CSS class for consistent styling across all screens

---

## ⚡ CHANGING THE ACCENT COLOR

If you want to change from the current teal (`#5EEAD4`) to the Hello-screen blue (`#22D3EE`):

### Current colors in launchpad-original.html (lines ~10-15):
```css
:root {
  --accent: #5EEAD4;                                     /* Teal → CHANGE TO #22D3EE */
  --accent-soft: rgba(94, 234, 212, 0.08);               /* Teal 8% → CHANGE TO rgba(34, 211, 238, 0.08) */
  --accent-edge: rgba(94, 234, 212, 0.40);               /* Teal 40% → CHANGE TO rgba(34, 211, 238, 0.40) */
}
```

### Hello-screen.html accent for reference:
- `--accent: #22D3EE` (cyan-blue)

### What this changes everywhere:
One change in `:root` updates ALL of these automatically:
- `.btn-primary` — button background
- `.pill` — badge background
- `.step.active` / `.step.done` — progress bar
- `.card.recommended` — recommended card border
- `.option.selected` — selected option border
- `.usecase.selected` — selected use case border
- `.toggle.on` — toggle on state
- `.checkbox.checked .checkbox-mark` — checked checkbox
- And many more...

### Note on rgba() variants:
The `accent-soft` and `accent-edge` are transparent versions of the accent color. When you change `--accent`, you'll need to recalculate these manually or just pick colors that look good.

---

## Section 14: IntegrationsListScreen & INTEGRATIONS_LIST (Lines 540–553+)

### `INTEGRATIONS_LIST` Array — Available Integrations

| ID | Name | Icon | Description | CTA |
|----|------|------|-------------|-----|
| `github` | GitHub | GH | Push commits, review PRs, ship code from chat. | Connect |
| `telegram` | Telegram | TG | Talk to your agent from your phone. | Connect |
| `apify` | Apify | AP | Scrape sites and pull web data. | Connect |
| `elevenlabs` | ElevenLabs | EL | Voice replies and audio generation. | Connect |
| `obsidian` | Obsidian | OB | Sync notes and let your agent read your vault. | Connect |
| `discord` | Discord | DC | Join the Heyron community. | Join server |
| `cron` | Cron | CR | Schedule recurring tasks. | Set up |
| `browser` | Web Browser | WB | Let your agent navigate the web. | Connect |

**Purpose:** Defines available integrations for the Beginner path. Each has:
- `id` — machine identifier
- `name` — display name
- `icon` — 2-letter abbreviation (rendered in `.integration-icon`)
- `desc` — description
- `cta` — call-to-action text

---

### Component: `IntegrationsListScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`

### How it works:
```javascript
const toggle = (id) => {
  const next = new Set(data.tools);
  next.has(id) ? next.delete(id) : next.add(id);
  onUpdate({ tools: Array.from(next) });
};
```
- Same multi-select pattern as UseCasesScreen
- Uses `data.tools` instead of `data.useCases`
- Stores selected integration IDs

### What it renders:
- Uses `.integrations` / `.integration` CSS classes (from Section 4)
- Each shows: icon box (`.integration-icon`), name, description
- Probably renders `.connected` state if already connected
- Likely shows CTA buttons per integration

### What it renders (continued):

| Element | Purpose |
|--------|----------|
| `<h1 className="headline">` | "Connect your tools." |
| `<p className="sub">` | "Tap to connect. Skip anything you don't need..." |
| `.integrations` | Vertical list container |
| `.integration` per item | Row: icon + name/desc + button |
| `.integration-icon` | 2-letter icon (GH, TG, etc.) |
| `.integration-body` | Name + description |
| Button | Changes based on `connected` state: `btn-primary` (Connect) → `btn-ghost` (Connected) |
| `.skip-hint` | "Skipping is fine..." |
| `.actions` | Back + Continue |

### Button state logic:
```javascript
<button 
  className={`btn ${connected ? 'btn-ghost' : 'btn-primary'} btn-sm`}
  onClick={() => toggle(i.id)}
>
  {connected ? 'Connected' : i.cta}
</button>
```
- **Not connected:** Primary teal button, shows CTA text ("Connect", "Set up")
- **Connected:** Ghost button (outlined), shows "Connected"
- Clicking toggles the integration on/off

### Skip option:
- Continue button is **always enabled** — no validation required
- You can skip any integrations you don't want
- This is the Beginner path — minimal friction

---

## Section 15: IntegrationsPickScreen — Expert Path (Lines 570–595+)

**⚠️ This is the EXPERT path version** of integrations — different UX from Beginner.

### Component: `IntegrationsPickScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`

### Key differences from IntegrationsListScreen (Beginner):

| Aspect | Beginner (IntegrationsListScreen) | Expert (IntegrationsPickScreen) |
|--------|-----------------------------------|--------------------------------|
| **Purpose** | Quick toggle on/off | Select which to walk through |
| **Data field** | `data.tools` | `data.toSetup` |
| **Button** | Connect/Connected toggle | Checkbox selection |
| **CTA** | "Skip is fine" | Shows count: "Walk through X tools" |

### How it works:
```javascript
const toSetup = data.toSetup || [];
const toggle = (id) => {
  const next = new Set(toSetup);
  next.has(id) ? next.delete(id) : next.add(id);
  onUpdate({ toSetup: Array.from(next) });
};
const cta = toSetup.length === 0 
  ? 'Skip integrations' 
  : `Walk through ${toSetup.length} tool${toSetup.length === 1 ? '' : 's'}`;
```
- Uses `data.toSetup` (not `data.tools`)
- CTA dynamically shows count: "Walk through 3 tools"
- If none selected: "Skip integrations"

### What it renders:

| Element | Purpose |
|--------|----------|
| `<Mascot pose="greeting" size={90} />` | Has mascot (Beginner didn't) |
| `.integrations` | Same vertical list |
| `.integration` | Same row layout |
| `.usecase-check` | Uses checkbox visual instead of button |

### Visual difference:
- Uses `.usecase-check` (checkbox) instead of toggle button
- More deliberate "pick which to set up" feel
- Shows "Walk through X tools" instead of just "Continue"

### Continuation: Skip hint shows path
```javascript
<p className="skip-hint">
  {toSetup.length === 0 
    ? 'You can add tools any time from Settings → Connections.' 
    : `Next: ${toSetup.map(t => (INTEGRATIONS_LIST.find(i => i.id === t) || {}).name).join(' → ')}`}
</p>
```
- If none selected: "You can add tools any time from Settings..."
- If some selected: Shows order like "GitHub → Telegram → ElevenLabs"

---

## Section 16: IntegrationStep — Reusable Expert Setup Template (Lines 596–623)

**⚠️ IMPORTANT: This is a REUSABLE component** — one component, many screens.

### Component: `IntegrationStep({ name, desc, step, totalSteps, onSkip, onConnect, onBack, connected, canConnect, children })`

This is the **template for each Expert tool setup screen** — called repeatedly as user walks through each selected integration.

### Parameters:
- `name` — Tool name (e.g., "GitHub")
- `desc` — Tool description
- `step`, `totalSteps` — Progress
- `onSkip` — Skip this tool
- `onConnect` — Connect this tool
- `onBack` — Go back
- `connected` — Boolean: already connected?
- `canConnect` — Boolean: can they connect? (validation)
- `children` — Any extra content (form fields, etc.)


### What it renders:

| Element | Purpose |
|--------|----------|
| `<Brand />` | Logo |
| `<Steps />` | Progress bar |
| `<Mascot pose="greeting" size={90} />` | **SAME IMAGE every screen** |
| `<h1 className="headline">` | "Would you like to add [name]?" |
| `<p className="sub">` | Tool description |
| `{children}` | Dynamic content (passed in) |
| `.actions` | Back + Skip + Continue buttons |

### ⚠️ IMAGE NOTE:
Currently uses **same mascot image** (greeting, 90px) on **every** tool screen. If you want different images per tool, you'd need to:
1. Pass an `icon` or `mascotImage` prop to IntegrationStep
2. Modify this component to accept/use it
3. Each tool in the flow gets its own image

### Button logic:
- **Skip:** Always available (`btn-ghost btn-skip`)
- **Connect/Continue:** Changes based on `connected` state
- Disabled if `!canConnect && !connected` (can't connect yet)

### This is the pattern:
The orchestrator calls `<IntegrationStep />` repeatedly — once per tool in `toSetup` array. Each time passing different `name`, `desc`, `children`.

---

## Section 17: GitHubSetup — Full Expert GitHub Configuration (Lines 625–641+)

**⚠️ Sample/Placeholder Data Alert**

### Sample data in this component:
```javascript
const REPOS = ['heyron-app', 'heyron-api', 'heyron-docs', 'heyron-mobile', 'heyron-marketing'];
const ACCOUNTS = ['cassielee (personal)', 'heyron-team (org)'];
```

**These are TEST/placeholder values** — would be replaced with:
- Real repos from the user's GitHub account
- Real account names after OAuth/PAT auth

### This component handles:
- **Auth method selection:** OAuth vs PAT (Personal Access Token)
- **Connection state:** `authed` boolean
- **PAT input:** Token field
- **Account selection:** Which GitHub account/org
- **Repo selection:** Which repos to grant access
- **Permissions:** readCode, readPRs, writeCommits, mergePRs
- **Test connection:** Button that simulates testing

### State variables:
- `authMethod` — 'oauth' or 'pat'
- `authed` — boolean
- `pat` — personal access token string
- `account` — selected account
- `repos` — selected repos array
- `perms` — permissions object
- `tested` — has the connection been tested?
- `testing` — is test in progress?

### Validation:
```javascript
const authComplete = (authMethod === 'oauth' && authed) || (authMethod === 'pat' && pat.length >= 10);
const valid = authComplete && repos.length > 0 && tested;
```
- Must complete auth (OAuth + connected OR PAT with 10+ chars)
- Must select at least one repo
- Must have tested the connection

### ⚠️ NOTE:
When implementing, replace hardcoded `REPOS` and `ACCOUNTS` with dynamic data from GitHub API after authentication.

---

## Section 18: GitHubSetup Form UI (Lines 642–689)

**Note:** This section contains all the form inputs/UI for the GitHub setup:
- Auth method selector (OAuth vs PAT)
- PAT input field
- Account dropdown
- Repo checkboxes
- Permission toggles
- Test/Connect buttons

This is standard form UI — uses the `.field`, `.input`, `.toggle-row`, `.options-list` CSS classes documented earlier.

---

## Section 19: Additional Expert Setup Screens (Lines 693–950)

The following sections follow the same pattern as GitHubSetup — detailed per-integration setup forms:

| Lines | Component | Purpose |
|-------|-----------|---------|
| 693–742 | TelegramSetup | Data collection for Telegram bot connection |
| 743–783 | ApifySetup | Apify API key and scraper configuration |
| 784–853 | ElevenLabsSetup | ElevenLabs API key and voice selection |
| 854–916 | ObsidianSetup | Obsidian vault path and sync settings |
| 917–950 | DiscordSetup | Discord bot invitation and channel permissions |

**Earlier Expert sections (not detailed):**
| Lines | Component | Purpose |
|-------|-----------|---------|
| 951–1014 | CronSetup | Cron scheduling configuration |
| 1015 | WebBrowserSetup | Browser automation settings |

**Pattern:** Each follows `IntegrationStep` template with tool-specific form fields.


---

## Section 20: MemoryScreen (Lines 1072–1101)

### `MEMORY_OPTIONS` Array

| ID | Name | Description | Recommended |
|----|------|-------------|-------------|
| `short` | Short | Forgets after each session. Most private. | — |
| `standard` | Standard | Remembers across sessions, scoped to projects. | ✓ |
| `deep` | Deep | Full long-term memory across everything. | — |

### Component: `MemoryScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`


| Element | Purpose |
|--------|----------|
| `<Mascot pose="thinking" size={80} />` | Uses "thinking" pose |
| `<h1 className="headline">` | "How much should it remember?" |
| `<p className="sub">` | Explains memory vs. soul |
| `.options-list` | Single-select radio list |
| `.checkbox` | "Let me view and edit memory at any time" |

### Data stored:
- `data.memory` — 'short', 'standard', or 'deep'
- `data.editableMemory` — boolean

---

## Section 21: HoursScreen (Lines 1103–1122)

### `DAYS` Array
```javascript
const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
```

### Component: `HoursScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`

### What it renders:

| Element | Purpose |
|--------|----------|
| `<Mascot pose="greeting" size={80} />` | Uses "greeting" pose |
| `<h1 className="headline">` | "When are you working?" |
| `<p className="sub">` | Agent batches updates outside hours |
| `.field` + `select.input` | Timezone dropdown (PT/MT/CT/ET/GMT/CET/Other) |
| `.two-col` | Two columns: Start time + End time |
| `input type="time"` | Time pickers for start/end |
| `.day-row` + `.day` | Day selector (Mon-Sun buttons) |

### Key features:
- **Timezone:** Dropdown with major US timezones + UK + Europe
- **Hours:** Two time inputs (start/end)
- **Days:** Multi-select day buttons (same `.day` CSS from Section 6)
- **No validation:** Continue always enabled

### Data stored:
- `data.timezone` — selected timezone string
- `data.workStart` — "HH:MM" format
- `data.workEnd` — "HH:MM" format
- `data.workDays` — array of selected day strings

### CSS classes used:
- `.two-col` — 2-column grid (from Section 6)
- `.day-row` / `.day` — day selector buttons (from Section 6)
- `.field` / `.input` — form fields (from Section 2)

### ⚠️ UX ISSUE TO FIX:
**Problem:** Selected vs unselected days may not be intuitive at a glance.
- Selected: teal text + teal border + teal background tint
- Unselected: gray text + gray border
- Hard for colorblind users to distinguish
- No helper text explaining what to do

**Suggested fixes:**
1. Add helper text: "Click days you work (selected = teal)"
2. Add checkmarks in selected days (like `.usecase-check`)
3. Make unselected state more obvious (dashed border?)
4. Add "Select all / Clear all" buttons

---

## Section 22: NotificationsScreen (Lines 1124–1143)

### Component: `NotificationsScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`

| Element | Purpose |
|--------|----------|
| `<Mascot pose="greeting" size={80} />` | Uses "greeting" pose |
| `<h1 className="headline">` | "How should we reach you?" |
| `<p className="sub">` | "You'll get the daily briefing either way." |
| `.toggle-row` (×2) | Email toggle + Push toggle |
| `.toggle` | Custom toggle switch (from Section 5) |
| `.field` + `.chip-row` | "How often" frequency picker |
| `.chip` | Toggle-style buttons (Always/Important only/Daily digest) |

### Data stored:
- `data.notifyEmail` — boolean
- `data.notifyPush` — boolean
- `data.notifyFreq` — 'always', 'important', or 'daily'

---

## Section 23: PrivacyScreen (Lines 1145–1164)

### Component: `PrivacyScreen({ data, onUpdate, onNext, onBack, step, totalSteps })`

### What it renders:

| Element | Purpose |
|--------|----------|
| `<Mascot pose="greeting" size={80} />` | Uses "greeting" pose |
| `<h1 className="headline">` | "A few privacy choices." |
| `<p className="sub">` | "You're in control. Change these anytime." |
| `.toggle-row` (×2) | Learning toggle + Usage sharing toggle |
| `.toggle` | Custom toggle switches |
| `.field` + `select.input` | Auto-delete dropdown |

### Data stored:
- `data.learnFromMe` — boolean (let agent learn from interactions)
- `data.shareUsage` — boolean (share anonymous usage data)
- `data.autoDelete` — 'Never', 'After 30 days', 'After 90 days', 'After 1 year'

---

## Section 24: PreviewScreen — Summary/Review (Lines 1173–1184+)

### Component: `PreviewScreen({ data, onLaunch, onBack, step, totalSteps, expert })`

This is the **final review screen** — shows user a summary of all their choices before launching.

### Data lookups:
```javascript
const persona = PERSONAS.find((p) => p.id === data.personality);
const comm = COMM_STYLES.find((c) => c.id === data.commStyle);
const model = MODELS.find((m) => m.id === data.model);
const memory = MEMORY_OPTIONS.find((m) => m.id === data.memory);
const useCaseLabels = data.useCases.map(id => (USE_CASES.find(u => u.id === id) || {}).label).filter(Boolean);
```
- Looks up display names from the constant arrays
- Converts IDs to human-readable labels

### What it renders:

| Element | Purpose |
|--------|----------|
| `<Mascot pose="greeting" size={100} />` | 100px mascot |
| `<h1 className="headline">` | "Here's your setup." |
| `<p className="sub">` | "Look it over..." |
| `.summary` | Summary card (from Section 6) |
| `.summary-section-title` | Section headers: Identity, Soul, etc. |
| `.summary-row` | Label + value pairs |

### Sections displayed:
- **Identity:** Your name, Agent name
- **Soul:** Focus areas, Personality, Verbosity
- (Would continue with Model, Memory, Hours, etc.)

### Continuation (Expert path sections):

```javascript
{expert && (model || memory) && (<>
  <div className="summary-section-title">Brain</div>
  {expert && model && <div className="summary-row"><span className="summary-label">Model</span><span className="summary-value">{model.name}</span></div>}
  {expert && memory && <div className="summary-row"><span className="summary-label">Memory</span><span className="summary-value">{memory.name}</span></div>}
</>)}

<div className="summary-section-title">Connections</div>
<div className="summary-row"><span className="summary-label">Tools connected</span><span className="summary-value">{data.tools.length === 0 ? 'None yet' : data.tools.join(', ')}</span></div>

{expert && (<>
  <div className="summary-section-title">Schedule & alerts</div>
  <div className="summary-row"><span className="summary-label">Working hours</span><span className="summary-value">{data.workStart}–{data.workEnd}, {data.workDays.length} days</span></div>
  <div className="summary-row"><span className="summary-label">Notifications</span><span className="summary-value">{[data.notifyEmail && 'Email', data.notifyPush && 'Push'].filter(Boolean).join(' + ') || 'Off'}</span></div>
</>)}
```

### Expert-only sections (conditional on `expert` prop):
- **Brain:** Model + Memory (only shown if Expert path)
- **Connections:** Tools list
- **Schedule & alerts:** Working hours + notification preferences

### Final button:
- `onClick={onLaunch}` — "Open dashboard"
- User sees all settings, clicks to launch their configured agent

---

## Noted Sections (Not Detailed, Out of Scope)

| Lines | Description | Status |
|-------|-------------|--------|
| ~1202 | Help pages / Help widget | Skipped — not relevant to launchpad redesign |
| ~1505+ | Troubleshooting section | Skipped — not relevant |

---

## Section 25: Dashboard (Lines 1594–1609+)

### Component: `Dashboard({ data, onReset, onHelp, onNavigateHelp })`

This is the **post-launch dashboard** — appears after user completes setup.

### Placeholder note:
```javascript
<div className="placeholder-note">
  Stand-in for your existing dashboard. The container card, the help link, 
  and the support widget below are the new pieces — drop them onto your real dashboard.
</div>
```
This is a placeholder — the actual dashboard would be user's existing one, with new elements dropped in.

### What it renders:

| Element | Purpose |
|--------|----------|
| `.dash-header` | Header row with greeting + buttons + HeadMascot |
| `.dash-greeting` | "Hey, [name]. [Agent] is online and ready." |
| `HeadMascot size={36}` | Small mascot in header |
| `.dash-grid` | 3-column grid of metrics |
| `.metric` | Individual metric card (label, value, trend) |

### Metrics shown:
1. **Tasks today** — "14" with "+3 vs yesterday"
2. **Avg response** — "1.2s" with "stable"
3. **Connected tools** — count with "add some" or "all healthy"


### Buttons:
- "Help" → `onHelp`
- "Restart demo" → `onReset`

### Note:
This shows where the new launchpad pieces (container card, help link, support widget) fit into the existing dashboard.

---

## Noted Sections (Not Detailed, Out of Scope)

| Lines | Description | Status |
|-------|-------------|--------|
| ~1202 | Help pages / Help widget | Skipped — not relevant to launchpad redesign |
| ~1505+ | Troubleshooting section | Skipped — not relevant |
| 1611–1759 | Containerized support widget | Skipped — not Catherine's part |

---

## Section 26: App — Orchestrator & Flow Definitions (Lines 1761–1774)

### This is the **main orchestrator** — defines screen sequences and initial state.

### Flow Arrays:

```javascript
const BEGINNER_FLOW = [
  'beginner-names', 'beginner-usecases', 'beginner-integrations', 
  'beginner-personality', 'beginner-comm', 'beginner-preview'
];

const EXPERT_FLOW = [
  'expert-names', 'expert-usecases', 'expert-model', 'expert-pick-tools',
  'expert-github', 'expert-telegram', 'expert-apify', 'expert-elevenlabs', 
  'expert-obsidian', 'expert-discord', 'expert-cron', 'expert-browser',
  'expert-memory', 'expert-personality', 'expert-comm', 
  'expert-hours', 'expert-notifications', 'expert-preview'
];
```

- **Beginner:** 6 screens (quick path)
- **Expert:** 18 screens (full detailed path)
- Each string maps to a screen component

### Integration mapping:
```javascript
const INTEGRATION_TOOL_SLUGS = ['github','telegram','apify','elevenlabs','obsidian','discord','cron','browser'];
const integrationFromScreen = (s) => INTEGRATION_TOOL_SLUGS.find(t => s === `expert-${t}`);
```
- Converts screen name → tool ID (e.g., 'expert-github' → 'github')

### Initial Data State:
```javascript
const INITIAL_DATA = {
  email: 'you@heyron.app', yourName: '', agentName: '',
  useCases: [], personality: null, commStyle: null,
  model: null, tools: [], toSetup: [], memory: null, editableMemory: true,
  timezone: 'Pacific (PT)', workStart: '09:00', workEnd: '18:00', workDays: ['Mon','Tue','Wed','Thu','Fri'],
  notifyEmail: true, notifyPush: false, notifyFreq: 'important',
  learnFromMe: true, shareUsage: true, autoDelete: 'Never',
};
```
- Default values for all user preferences
- This is what gets passed to screens via `data` prop

### Key insight:
This is where the app decides which path to show — likely based on the choice in WelcomeScreen (Beginner vs Expert).

---

## ⚠️ OUT OF SCOPE: Backend Execution

The launchpad HTML file **only collects** user preferences. The actual execution happens elsewhere in OpenClaw:

- Cron jobs: Set up based on `workDays`, `workStart`, `workEnd`
- Integrations: OAuth/PAT connections via GitHub, Telegram, ElevenLabs, etc.
- Memory: Configured based on `memory` + `editableMemory`
- Notifications: Enabled based on `notifyEmail`, `notifyPush`, `notifyFreq`
- Privacy: Applied based on `learnFromMe`, `shareUsage`, `autoDelete`

**This is Catherine's boundary:** The launchpad UI is her scope. The backend implementation (how cron jobs get scheduled, how integrations authenticate, etc.) is handled by OpenClaw's system — not in this HTML file.


---

## Section 27: App — Main State Machine (Final Chunk)

### Component: `App()` — The core React component

This is the **main orchestrator** — handles all navigation and state.

### State:
```javascript
const [screen, setScreen] = useState('welcome');   // Current screen
const [data, setData] = useState(INITIAL_DATA);   // User preferences
```

### Helper functions:
- `update(patch)` — Merges changes into data state
- `expertFlow` — Filters Expert flow based on `data.toSetup` (only includes tools user selected)
- `back(current)` — Goes to previous screen in current flow
- `reset()` — Clears data, returns to welcome
- `advance(current)` — Goes to next screen, or 'dashboard' if done

### Navigation logic:
- Expert flow is **dynamic** — only includes screens for tools user chose
- If user didn't pick GitHub, skip 'expert-github' screen

### How it works:
1. Starts at 'welcome' screen
2. User picks Beginner or Expert
3. `advance()` walks through the flow array
4. `back()` walks backward
5. Last screen → 'dashboard'

### Wraps up:
- **This is the entry point** — renders the whole app
- All the screen components feed into this

### This is the **rendering logic** — shows the right screen based on state.

```javascript
return (
  <div className="app">
    {screen === 'welcome' && (<LaunchpadWelcome ... />)}
    {screen === 'beginner-names' && <NamesScreen ... />}
    {screen === 'beginner-usecases' && <UseCasesScreen ... />}
    {screen === 'beginner-integrations' && <IntegrationsListScreen ... />}
    {screen === 'beginner-personality' && <PersonalityScreen ... />}
    {screen === 'beginner-comm' && <CommStyleScreen ... />}
    ...
  </div>
);
```

This is where everything connects — the conditional rendering based on `screen` state. Each component gets passed:
- `data` — all user preferences
- `onUpdate` — function to update data
- `onBack` / `onNext` — navigation handlers
- `step` / `totalSteps` — progress indicator

**This is the entry point** — all screens feed through this App component's render logic.

---

*End of documented sections.*