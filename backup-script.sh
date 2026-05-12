#!/bin/bash
# Nightly backup script for Blair workspace
# Backs up memory files, daily logs, key business documents, and cron jobs to GitHub

cd /home/openclaw/.openclaw/workspace

# Backup cron jobs to workspace (cron jobs.json is in /home/openclaw/.openclaw/cron/)
cp /home/openclaw/.openclaw/cron/jobs.json ./cron-jobs-backup.json 2>/dev/null || true

# Export GitHub token from .env
source .env
export GITHUB_TOKEN

# Ensure .gitignore is present and contains necessary exclusions
if [ ! -f ".gitignore" ]; then
    echo "Creating .gitignore file."
    echo -e ".env\nblair-memory/\ndocuments/heyron-tutorials/\nheyron-tutorials/" > .gitignore
else
    # Ensure .env and blair-memory are ignored if not already
    if ! grep -q "^\.env$" .gitignore; then
        echo ".env" >> .gitignore
    fi
    if ! grep -q "^blair-memory/$" .gitignore; then
        echo "blair-memory/" >> .gitignore
    fi
    if ! grep -q "^documents/heyron-tutorials/$" .gitignore; then
        echo "documents/heyron-tutorials/" >> .gitignore
    fi
    if ! grep -q "^heyron-tutorials/$" .gitignore; then
        echo "heyron-tutorials/" >> .gitignore
    fi
fi
git add .gitignore

# Add all tracked files, excluding .env, heyron-tutorials
# Use git add --update for modified/deleted, and git add --all for new
git add --update -- ':!documents/heyron-tutorials' ':!heyron-tutorials' ':!.env'
git add --all -- ':!documents/heyron-tutorials' ':!heyron-tutorials' ':!.env'

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