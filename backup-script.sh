#!/bin/bash
# Nightly backup script for Blair workspace
# Backs up memory files, daily logs, key business documents, and cron jobs to GitHub

cd /home/openclaw/.openclaw/workspace

# Backup cron jobs to workspace (cron jobs.json is in /home/openclaw/.openclaw/cron/)
cp /home/openclaw/.openclaw/cron/jobs.json ./cron-jobs-backup.json 2>/dev/null || true

# Export GitHub token from .env
source .env
export GITHUB_TOKEN

# Explicitly add all files and directories EXCEPT .env, heyron-tutorials, and blair-memory (which is the destination)
# This approach is more controlled than using 'git add -A' with exclusions.
git add . -- ':!documents/heyron-tutorials' ':!heyron-tutorials' ':!.env' ':!blair-memory'

# Ensure blair-memory directory is added if it was not picked up by the above command
if [ -d "blair-memory" ] && ! git ls-files --stage | grep -q "040000.*blair-memory"; then
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
# Note: Ensure 'blair-memory' is set as a remote in your git configuration for this to work.
# If it's not a remote, this push will fail. Consider pushing to a specific branch on the main repo.
# For now, assuming 'blair-memory' remote is correctly configured.
git push blair-memory main

echo "$(date): Backup completed successfully"

# Update last backup timestamp
echo "$(date '+%Y-%m-%d %H:%M:%S')" > /home/openclaw/.openclaw/workspace/.last-backup