# HEARTBEAT.md

# Periodic Tasks

## Daily heyron-tutorial Pull
Mature public GitHub Pages. Catherine edits live. Pull, don't push.

- **Repo:** `https://github.com/catherinebb272/heyron-tutorial.git`
- **Mirror:** `~/.openclaw/workspace/documents/heyron-tutorials/`

Pattern:
```
cd /tmp && git clone (or pull) https://github.com/catherinebb272/heyron-tutorial.git && cp -r /tmp/heyron-tutorial/* ~/.openclaw/workspace/documents/heyron-tutorials/
```

**MockHeyron (the "Heyron redesign"):** No daily pull. No local mirror (deleted 2026-06-03; workproduct belongs to the Heyron team). If we need to look something up, clone to `/tmp`, don't keep a persistent copy.

**Push rule (both repos):** Only on explicit request. Never push as a backup.

## Daily Workspace Backup (rough daily check)
- **Task:** Check if backup needed, run if >24h since last backup
- **Script:** `/home/openclaw/.openclaw/workspace/backup-script.sh` (note: NOT `/root/...`)
- **Tracker:** `/home/openclaw/.openclaw/workspace/.last-backup`
- **Destination:** `catherinebb272/blair-memory` (recovery-only)
- **Why:** Ensures daily work is saved to GitHub, protects against container resets
- **Excludes:** `blair-memory/` local checkout (loop guard). The `documents/heyron-tutorials/` mirror rides along — fine, no harm.

## Memory Recap
- **Task:** Write a brief recap of today’s activities to `memory/$(date +%Y-%m-%d).md`.
- **Details:** Include any key tasks completed, files created/updated, and any open items.
- **Format:** Simple bullet list under a heading `## Today’s Recap`.
