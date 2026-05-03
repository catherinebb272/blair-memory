# Heyron Launchpad Redesign - Change Log

## Design Direction

Hybrid approach: Keep Cassie's full workflow/functionality + apply Heyron aesthetic + swap mascot for per-stage raccoon images.

---

## Change Categories

### 1. VISUAL THEMING (Style.md → Launchpad)
- [ ] Replace CSS variables (brand-secondary, robin, etc.) with Heyron colors
- [ ] Background: #07090C (deep void)
- [ ] Accent: #22D3EE (cyan) + #A78BFA (violet) for special states
- [ ] Cards/Panels: glass effect with luminous borders (#1C222B borders, #0F141C fill)
- [ ] Typography: Inter (UI) + JetBrains Mono (data/telemetry)
- [ ] Remove light-panel override — keep dark theme throughout

### 2. RACCOON IMAGES (Per-Stage Mascot)
- [ ] Generate ~12 raccoon poses in Canva (transparent PNG)
- [ ] Map each Launchpad stage to a specific raccoon pose
- [ ] Replace Cassie's SVG Mascot component with image tags
- [ ] Add floating animation (from testpage1.html @keyframes)

### 3. BACKGROUND ELEMENTS
- [ ] Add bg-space (Earthrise) as subtle background layer
- [ ] Add ship as accent element (optional, per-stage)
- [ ] VIGNETTE effect on edges
- [ ] Subtle grid/texture overlay

### 4. LAYOUT ADAPTATIONS
- [ ] Header: Heyron branding + nav (copy from testpage1.html)
- [ ] Progress bar: Keep Cassie's step indicators but style with cyan glow
- [ ] Responsive handling: small raccoon avatar when compressed, full scene when expanded
- [ ] Panel transitions: smooth expand/collapse

### 5. COMPONENT STYLING (per Style.md)
- [ ] Buttons: dark surface + cyan glow on hover
- [ ] Cards: dark glass, rounded corners (12px), luminous edge
- [ ] Inputs: dark fill, cyan focus ring
- [ ] Toggle switches: cyan when active
- [ ] Status colors: cyan (active), mint (success), amber (warning), crimson (error)

### 6. TEXT/ copy REFINEMENTS
- [ ] Update branding: "Heyron" not "Heyron" (check spelling)
- [ ] "Mission Control" feel for headers
- [ ] Keep Cassie's helpful copy — just theme it

---

## Inspiration Image Analysis

### What to KEEP from inspiration:
- **Thematic cohesion**: space theme, mission control vibe
- **Clear hierarchy**: left panel (steps), center (hero), right (preview)
- **Progress tracking**: visual progress bars + "launch readiness"
- **Central raccoon**: astronaut pose as hero image
- **Neon accents**: cyan/magenta glow effects
- **Quick actions panel**: shortcut buttons

### What to DROP/AVOID:
- **Information overload**: too many panels for onboarding flow
- **Overly complex header**: Star Date, excessive status indicators
- **Cluttered bottom bar**: Mission Log too detailed for onboarding
- **"HOLD TO LAUNCH"**: awkward interaction pattern
- **Too many buttons**: simplify to primary actions only
- **Dense systems overview**: not relevant to first-time user

### Cassie's Workflow (KEEP - proven):
1. Hello screen
2. Welcome (Beginner/Expert/Remix)
3. Names
4. Use Cases
5. Personality
6. Communication Style
7. Model (Expert only)
8. Memory (Expert only)
9. Tools/Integrations
10. Working Hours (Expert only)
11. Notifications (Expert only)
12. Privacy
13. About You
14. Disclaimer
15. Finish/Dashboard

---

## Technical Notes

- Cassie's code is React/Babel — runs client-side
- Replace Mascot SVG with `<img>` tags pointing to generated raccoon PNGs
- CSS animations from testpage1.html for floating effect
- Keep all state management — only visual/style changes
- Assets needed:
  - `assets/raccoon-[stage].png` (12 poses)
  - `assets/bg-space.png` (from attached)
  - `assets/ship.png` (from attached)
  - `assets/logo.png`

---

## Current Priority: HELLO SCREEN (Front Page)

### Scope
- Apply Heyron aesthetic to Hello screen only
- Use inspiration image as reference for layout
- Big floating Ron with ship (from attached assets)
- Smaller cards, stack on mobile
- Keep floating Ron + background at top
- Placeholder for per-stage raccoons (add later)

### Implementation Steps
1. [ ] Extract Hello screen from launchpad-source.html
2. [ ] Apply Heyron CSS theme (Style.md colors)
3. [ ] Add floating Ron animation (from testpage1.html)
4. [ ] Add ship + bg-space as background elements
5. [ ] Shrink card sizes per inspiration
6. [ ] Test mobile responsiveness (cards stack)

### Hello Screen Target Layout
```
┌─────────────────────────────────────┐
│  HEADER: Heyron logo + nav links    │
├─────────────────────────────────────┤
│                                     │
│     [Floating Ron + Ship +         │
│      bg-space scene]               │
│                                     │
├─────────────────────────────────────┤
│  HELLO / Welcome text               │
│  Tagline                            │
│                                     │
│  [Beginner]  [Expert]  [Remix]     │  ← smaller cards
│  (stack on mobile)                 │
│                                     │
└─────────────────────────────────────┘
```

---

## Status

### Completed
- [x] Assets collected (raccoon astronaut, Earthrise, ship)
- [x] Cassie's full code saved
- [x] Style.md saved
- [x] testpage1.html (animation reference) saved
- [x] Change log created
- [x] Hello screen scope defined

### In Progress
- [x] Hello screen theming - created hello-screen.html (hybrid of Cassie's flow + Heyron style)
- [x] Launchpad CSS theming - updated :root vars + 33 robin→accent overrides, cyan theme applied

### Pending
- [ ] Per-stage raccoon images (placeholder only)
- [ ] Remaining Launchpad screens (after Hello is working)

---

## NEXT STEPS (Saved for later)

### Option A: Hybrid
- Use hello-screen.html as landing page
- Link to Cassie's React Launchpad for actual flow
- Apply Heyron CSS to React code

### Option B: Convert to React
- Integrate Hello screen into launchpad-source.html
- Full Launchpad stays in one codebase

### Option C: Rebuild in HTML
- Convert entire React flow to HTML
- Everything in one place, easier styling

---

*Last updated: 2026-05-02*
