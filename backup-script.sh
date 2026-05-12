#!/bin/bash
# Nightly backup script for Blair workspace
# Backs up memory files, daily logs, key business documents, and cron jobs to GitHub

cd /home/openclaw/.openclaw/workspace

# Backup cron jobs to workspace (cron jobs.json is in /home/openclaw/.openclaw/cron/)
cp /home/openclaw/.openclaw/cron/jobs.json ./cron-jobs-backup.json 2>/dev/null || true

# Export GitHub token from .env
source .env
export GITHUB_TOKEN

# Ensure .env is not staged or its changes are not tracked
# Attempt to remove .env from the index if it's staged
git reset HEAD .env 2>/dev/null || true
# Also ensure it's untracked if it was added as new
git rm --cached .env 2>/dev/null || true

# Add all tracked files, excluding .env, heyron-tutorials
git add --update -- ':!documents/heyron-tutorials' ':!heyron-tutorials' ':!.env'

# Add new files, excluding .env, heyron-tutorials, and blair-memory (which is the destination)
git add --all -- ':!documents/heyron-tutorials' ':!heyron-tutorials' ':!.env' ':!blair-memory'

# Ensure blair-memory directory is added
if [ -d "blair-memory" ]; then
  git add blair-memory
fi

# Add cron jobs backup explicitly
git add cron-jobs-backup.json 2>/dev/null || true

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "$(date): No changes to backup"
    exit 0
fi

# Commit with timestamp
git commit -m "Nightly backup $(date '+%Y-%m-%d %H:%M UTC')"

# Push to the designated remote 'blair-memory'
git push blair-memory main

echo "$(date): Backup completed successfully"

# Update last backup timestamp
echo "$(date '+%Y-%m-%d %H:%M:%S')" > /home/openclaw/.openclaw/workspace/.last-backup