# Heyron Launchpad Changelog

## 2026-05-06 (Current Session)

### Change 5: Welcome Page Removal
- **File:** launchpad-originalwelcome.html
- **Fix:** Removed welcome screen - launchpad now starts at beginner-names
- **Changes:**
  - Line 1794: Initial state changed from 'welcome' to 'beginner-names'
  - Line 1798: Back function fallback changed from 'welcome' to 'beginner-names'
  - Line 1799: Reset function changed from 'welcome' to 'beginner-names'
  - Line 1806: Removed welcome screen rendering block (commented out)
- **Note:** LaunchpadWelcome function remains (line 371) but is not rendered
- **Previous file:** launchpad-originalhover.html

### Change 6: URL Path Parameter
- **File:** launchpad-originalpath.html
- **Fix:** Added URL param reading to support hello-screen passing path=expert|beginner
- **Changes:**
  - Line 1795: Initial state now reads `?path=` param from URL
  - If `path=expert` → starts at 'expert-names', else 'beginner-names'
- **Previous file:** launchpad-originalwelcome.html

### Change 4: Button Hover Fix
- **File:** launchpad-originalhover.html
- **Fix:** Button hover color changed from teal #4FD9C2 to lighter cyan #5EEADB
- **Location:** Line 46
- **Previous file:** launchpad-originalmascot.html

### Change 3: Mascot Image Replacement
- **File:** launchpad-originalmascot.html
- **Fix:** Replaced all SVG Mascot components with PNG image tags
- **Path format:** `assets/raccoonXX.png`
- **Preserved sizes:** Original sizes (80-100px) with proportional height
- **Special:** CommStyleScreen flipped with `scaleX(-1)`

| Screen | Image | Size |
|--------|-------|------|
| NamesScreen | raccoon2.png | 100x125 |
| UseCasesScreen | raccoon3.png | 80x100 |
| CommStyleScreen | raccoon5.png (flipped) | 80x100 |
| ModelScreen | raccoon4.png | 80x100 |
| IntegrationsPickScreen | raccoon6.png | 90x112.5 |
| IntegrationStep | raccoon7.png | 90x112.5 |
| MemoryScreen | raccoon8.png | 80x100 |
| HoursScreen | raccoon9.png | 80x100 |
| NotificationsScreen | raccoon10.png | 80x100 |
| PrivacyScreen | raccoon11.png | 80x100 |
| PreviewScreen | raccoon11.png | 100x125 |

- **Hello-screen entry (line 376):** Skipped — page will be deleted
- **Previous file:** launchpad-originaltools.html

### Change 2: Integration Tool Names Fix
- **File:** launchpad-originaltools.html
- **Fix:** Added `color: var(--text-primary)` to `.integration-name` CSS rule
- **Location:** Line 153
- **Result:** Tool names now render as light cream (#F5F0E8) instead of black (#000000)
- **Previous file:** launchpad-originalcyan.html

### Change 1: Accent Color (Cyan)
- **File:** launchpad-originalcyan.html
- **Fix:** Accent color changed from teal (#5EEAD4) to cyan (#22D3EE)
- **Also updated:** `--accent-soft` and `--accent-edge` variants for cyan
- **Previous file:** launchpad-source.html (original)

---

## Previous Sessions

### 2026-05-05
- Welcome page elimination (commented out)
- Mascot replacements (earlier version)
- Various bug fixes

---

*Each file tracks ONE incremental change for isolation testing.*