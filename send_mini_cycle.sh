#!/usr/bin/env bash
source /home/openclaw/.openclaw/workspace/config/agentmail.env
python3 /home/openclaw/.openclaw/workspace/skills/agentmail/scripts/send_email.py \
  --inbox "$AGENTMAIL_INBOX_ID" \
  --to "catherine1@bellbracken.com" \
  --subject "Mini Cycle‑Count App HTML" \
  --text "Please find attached the self‑contained HTML app you requested." \
  --attach "/home/openclaw/.openclaw/workspace/mini-cycle-count-app.html"
