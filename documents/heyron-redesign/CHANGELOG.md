# Heyron Launchpad Changelog

## 2026-05-06 Session Complete

### Final Versions (GitHub Main)

| File | Changes |
|------|---------|
| launchpad-originaltools.html | Cyan accent + tool name fix |
| launchpad-originalmascot.html | + SVG mascots → PNG images |
| launchpad-originalpath.html | + URL param reading (?path=expert/beginner) |
| launchpad-originalimage.html | + Square images + 20% larger + raccoon14.png |

### Hello-Screen Fix
- File: hello-screen.html
- Fix: Button text underline removed (text-decoration: none added to .btn)

---

## Change Log Details

### Change 7: Image Sizing (launchpad-originalimage.html)
- Made mascot images square and scaled up 20%
- Fixed PreviewScreen to use raccoon14.png
- Lines: 407, 434, 492, 521, 579, 612, 1083, 1110, 1129, 1150, 1175

### Change 6: URL Path Parameter (launchpad-originalpath.html)
- Added URL param reading to support hello-screen passing path=expert|beginner
- Line 1795: Reads `?path=` param from URL
- If `path=expert` → starts at 'expert-names', else 'beginner-names'

### Change 5: Welcome Page Removal (launchpad-originalpath.html)
- Removed welcome screen - launchpad now starts based on URL param
- Removed all 'welcome' screen references in state management

### Change 4: Button Hover Fix (launchpad-originalhover.html - deleted)
- Changed button hover color from teal #4FD9C2 to lighter cyan #5EEADB

### Change 3: Mascot Image Replacement (launchpad-originalmascot.html)
- Replaced all SVG Mascot components with PNG image tags
- Path format: `assets/raccoonXX.png`

### Change 2: Integration Tool Names Fix (launchpad-originaltools.html)
- Added `color: var(--text-primary)` to `.integration-name` CSS rule
- Line 153: Tool names now render as cream instead of black

### Change 1: Accent Color (launchpad-originalcyan.html - deleted)
- Accent color changed from teal (#5EEAD4) to cyan (#22D3EE)

---

## Files Deleted (No Longer Needed)
- launchpad-originalcyan.html (absorbed into tools version)
- launchpad-originalhover.html (absorbed into path version)

## Obsolete Files (Do Not Use)
- launchpad-source.html
- launchpad-original.html
- launchpad-originalwelcome.html

---

*Full change history tracked in this file.*