# Heyron Launchpad Changelog

## 2026-05-06 (Current Session)

### Bug Fixes

- **Integration tool names (black on dark):** Added `color: var(--text-primary)` to `.integration-name` CSS rule
  - Location: Line 153 in launchpad-originaltools.html
  - Fix: Tool names now render as light cream (#F5F0E8) instead of black (#000000)

---

## 2026-05-05

### Design System Updates

- **Accent color changed:** Replaced teal (#5EEAD4) with cyan (#22D3EE)
  - Old: `--accent: #5EEAD4`
  - New: `--accent: #22D3EE`
  - Also updated `--accent-soft` and `--accent-edge` variants for cyan

### Welcome Page Elimination

- **LaunchpadWelcome screen removed** from rendering (commented out)
  - Location: Line ~1810 in launchpad-original.html
  - Comment markers added: `/* =====DELETE THE WELCOME SCREEN AND USE HELLO-SCREEN...*/`
- Flow arrays already start at `beginner-names` / `expert-names` — no changes needed there

### Mascot Images Replaced

- **All `<Mascot />` SVG calls replaced with `<img />` tags** pointing to raccoon images
- Images located at `/images/` (e.g., `/images/raccoon2.png`)
- Image sizes preserved from original (80-100px range)

| Screen | Image | Size |
|--------|-------|------|
| NamesScreen | raccoon2.png | 100px |
| UseCasesScreen | raccoon3.png | 80px |
| CommStyleScreen | raccoon5.png | 80px (flipped with `scaleX(-1)`) |
| ModelScreen | raccoon4.png | 80px |
| IntegrationsPickScreen | raccoon6.png | 90px |
| IntegrationStep (which tools) | raccoon6.png | 90px |
| IntegrationStep (individual tool) | raccoon7.png | 90px |
| MemoryScreen | raccoon8.png | 80px |
| HoursScreen | raccoon9.png | 80px |
| NotificationsScreen | raccoon10.png | 80px |
| PrivacyScreen | raccoon11.png | 80px |
| PreviewScreen | raccoon11.png | 100px |

### Bug Fixes

- **Welcome screen comment:** Fixed JSX comment syntax from `/* ... */` to `{/* ... */}` — was showing comment text on every page
- **Button hover color:** Changed from teal #4FD9C2 to cyan #5EEADB to match new accent color
- **Integration tool names:** Added explicit `color: var(--text-primary)` to prevent black-on-dark-grey issue

### File Status

- **Canon file:** `documents/Heyron-Redesign/launchpad-original.html`
- **Obsolete file:** `launchpad-source.html` (do not use)
- Image matchup stored in: `documents/heyron-redesign/image-matchup-revised.md`

---

*Previous changelog moved/discarded - this tracks current session changes only.*