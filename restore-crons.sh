#!/bin/bash
# Restore cron jobs from GitHub backup
# Run this after container restart if cron jobs disappear

cd /home/openclaw/.openclaw/workspace

# Pull latest from GitHub
source .env
export GITHUB_TOKEN
git pull origin main

# Copy cron jobs backup to cron directory
cp cron-jobs-backup.json /home/openclaw/.openclaw/cron/jobs.json

echo "$(date): Cron jobs restored from GitHub"