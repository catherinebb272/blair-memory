# HEARTBEAT.md

# Periodic Tasks

## Daily Heyron Tutorials Sync
- **Task:** Pull latest heyron-tutorial files from GitHub
- **Command:** `cd /tmp && git clone (or pull) https://github.com/catherinebb272/heyron-tutorial.git && cp -r /tmp/heyron-tutorial/* ~/.openclaw/workspace/documents/heyron-tutorials/`
- **Why:** Source of truth is GitHub Pages — user edits live there
- **Note:** Do NOT push local changes back to this repo

## Daily Workspace Backup (rough daily check)
- **Task:** Check if backup needed, run if >24h since last backup
- **Command:** `/root/.openclaw/workspace/backup-script.sh`
- **Tracker:** `/root/.openclaw/workspace/.last-backup`
- **Why:** Ensures daily work is saved to GitHub, protects against container resets
- **Note:** Skips heyron-tutorials folder (has separate sync process)