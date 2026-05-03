#!/bin/bash
# Etsy M-W-F Check-In Reminder
# Runs Mon, Wed, Fri at 8 AM Chicago (1 PM UTC)
# Logs to /home/openclaw/.openclaw/workspace/memory/etsy-checkin.log

LOGFILE="/home/openclaw/.openclaw/workspace/memory/etsy-checkin.log"
TRACKING_FILE="/home/openclaw/.openclaw/workspace/documents/ana/etsy-review-tracking.md"

echo "---" >> "$LOGFILE"
echo "$(date -u '+%Y-%m-%d %H:%M:%S UTC') - Etsy check-in reminder triggered" >> "$LOGFILE"

# Note: Discord messaging is handled by the agent directly via the message tool
# This script is a placeholder for future automation

echo "Check-in triggered. Agent will send Discord DM to Catherine." >> "$LOGFILE"

# Step workflow (handled by agent):
# 1. Ask Catherine for orders screenshot
# 2. Ask Catherine for messages screenshot
# 3. Ask Catherine for reviews screenshot
# 4. If anything else? (orders, messages, reviews)
# 5. Update Etsy Review Tracking Log (documents/ana/etsy-review-tracking.md)
#    - Add new entry with check date, what was found, status
# 6. Post to #general if needed (channel ID from Drew Protocol: 1481691069878894702)

echo "Workflow: Discord DM → Collect screenshots → Update tracking file → Post to #general if needed" >> "$LOGFILE"