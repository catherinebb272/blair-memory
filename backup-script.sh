#!/bin/bash
# Nightly backup script for Blair workspace
# Backs up memory files, daily logs, key business documents, and cron jobs to GitHub

cd /home/openclaw/.openclaw/workspace

# Backup cron jobs to workspace (cron jobs.json is in /home/openclaw/.openclaw/cron/)
cp /home/openclaw/.openclaw/cron/jobs.json ./cron-jobs-backup.json 2>/dev/null || true

# Export GitHub token from .env
source .env
export GITHUB_TOKEN

# Add all changed files, excluding .env and heyron-tutorials
# Use git add -A to stage all changes (new, modified, deleted)
git add -A -- ':!documents/heyron-tutorials' ':!heyron-tutorials' ':!.env'

# Add the blair-memory directory. 
# We assume blair-memory is a directory to be backed up, not a submodule or git repo itself.
# If it was previously initialized as a submodule or git repo, we need to ensure it's treated as a directory.
if git ls-files --stage | grep -q "160000.*blair-memory"; then
  echo "Removing blair-memory as submodule and adding as directory..."
  git submodule deinit -f blair-memory || true
  git rm --cached blair-memory || true
  git add blair-memory
elif [ -d "blair-memory" ] && ! git ls-files --stage | grep -q "040000.*blair-memory"; then
  git add blair-memory
fi

# Add cron jobs backup
git add cron-jobs-backup.json 2>/dev/null || true

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "$(date): No changes to backup"
    exit 0
fi

# Commit with timestamp
git commit -m "Nightly backup $(date '+%Y-%m-%d %H:%M UTC')"

# Push to the designated remote 'blair-memory' is likely the remote name
# Ensure 'blair-memory' is configured as a git remote pointing to the correct GitHub URL
# If 'blair-memory' is not a remote, this push will fail. 
# Assuming 'blair-memory' is configured as a remote.
git push blair-memory main

echo "$(date): Backup completed successfully"

# Update last backup timestamp
echo "$(date '+%Y-%m-%d %H:%M:%S')" > /home/openclaw/.openclaw/workspace/.last-backup