#!/bin/bash
# Nightly backup script for Blair workspace
# Backs up memory files, daily logs, and key business documents to GitHub

cd /root/.openclaw/workspace

# Export GitHub token from .env
source .env
export GITHUB_TOKEN

# Add all changed files (git automatically detects new/modified)
# Exclude heyron-tutorials - has separate sync process (GitHub → local via heartbeat)
git add -A -- ':!documents/heyron-tutorials' ':!heyron-tutorials'

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "$(date): No changes to backup"
    exit 0
fi

# Commit with timestamp
git commit -m "Nightly backup $(date '+%Y-%m-%d %H:%M UTC')"

# Push to GitHub
git push origin main

echo "$(date): Backup completed successfully"

# Update last backup timestamp
echo "$(date '+%Y-%m-%d %H:%M:%S')" > /root/.openclaw/workspace/.last-backup