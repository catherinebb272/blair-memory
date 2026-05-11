#!/bin/bash
# Nightly backup script for Blair workspace
# Backs up memory files, daily logs, key business documents, and cron jobs to GitHub

cd /home/openclaw/.openclaw/workspace

# Backup cron jobs to workspace (cron jobs.json is in /home/openclaw/.openclaw/cron/)
cp /home/openclaw/.openclaw/cron/jobs.json ./cron-jobs-backup.json 2>/dev/null || true

# Export GitHub token from .env
source .env
export GITHUB_TOKEN

# Add all changed files (git automatically detects new/modified)
# Exclude heyron-tutorials - has separate sync process (GitHub → local via heartbeat)
git add -A -- ':!documents/heyron-tutorials' ':!heyron-tutorials' ':!cron-jobs-backup.json'

# Also add cron jobs backup
git add cron-jobs-backup.json 2>/dev/null || true

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "$(date): No changes to backup"
    exit 0
fi

# Commit with timestamp
git commit -m "Nightly backup $(date '+%Y-%m-%d %H:%M UTC')"

# Push to GitHub
git push blair-memory main

echo "$(date): Backup completed successfully"

# Update last backup timestamp
echo "$(date '+%Y-%m-%d %H:%M:%S')" > /home/openclaw/.openclaw/workspace/.last-backup