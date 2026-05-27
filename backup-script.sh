#!/usr/bin/env bash
# backup-script.sh – push a full workspace backup to the blair-memory repo

set -euo pipefail

# Load environment variables (including GITHUB_TOKEN)
source "$(dirname "$0")/.env"

# Repository to push to (override any GITHUB_REPO value)
REPO="catherinebb272/blair-memory"
BRANCH="main"

# Change to the workspace root
cd "$(dirname "$0")"

# Ensure the remote points to the backup repo (using HTTPS token authentication)
# This overwrites the existing 'origin' remote for this push only.
git remote set-url origin "https://${GITHUB_TOKEN}@github.com/${REPO}.git"

# Stage all changes (git respects .gitignore, so .env stays out)
# Exclude blair-memory submodule - it has its own repo
git add -A -- ':!blair-memory'

# Commit if there are changes
if ! git diff-index --quiet HEAD; then
    git commit -m "Workspace backup $(date -u +'%Y-%m-%d %H:%M:%S UTC')"
else
    echo "No changes to commit."
fi

# Push to the backup repository
git push --force origin "${BRANCH}"
