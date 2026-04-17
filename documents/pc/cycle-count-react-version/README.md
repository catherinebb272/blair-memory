# 🚫 REACT VERSION - Cycle Count App (DEPRECATED)

**This is NOT the current version. See below.**

---

## Where the Current Version Lives

The active, deployed version is in the **standalone HTML file**:

**Location:** `../pc/mini-cycle-count-app/index.html`

That file is deployed to GitHub Pages and is what users should access.

---

## About This React Version

This folder contains a React/Tailwind implementation of the cycle count app. It was an earlier exploration that was set aside in favor of the standalone HTML approach.

### What's Here
- `/Cycle Count/frontend/` — React app source code
- `/Cycle Count/mini-cycle-count-app-framework.md` — Technical framework docs
- `/Cycle Count/storyboard.md` — UI mockups

### Features Implemented (React Version)
- Splash page with Plato's Closet branding
- 3-tier duplicate detection (exact, nearby, repeated chunk)
- Duplicate scan log export
- 2 OH write-up candidates section

### Why It Was Set Aside
The standalone HTML version was preferred because:
- No build step required
- Single file, easy to host anywhere
- Easier to edit and deploy
- Works without Node.js dependencies

---

## If You Want to Build the React Version Later

```bash
cd Cycle\ Count/frontend
npm install
npm run dev
```

---

*Last updated: 2026-04-14*