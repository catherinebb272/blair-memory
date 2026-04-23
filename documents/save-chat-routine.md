# Save Chat Routine — Implementation Guide

## What It Does

Captures a compressed snapshot of the current session that balances context preservation with reload efficiency. Uses tiered compression: recent messages kept verbatim, earlier ones summarized.

## Trigger Line

In any memory file, add:

```
save chat
```

Blair checks for this in the daily memory context loaded at session start.

---

## The Logic

1. **Recent ~15 messages** — kept condensed but readable (who said what, not full transcripts)
2. **Earlier messages** — summarized into bullet points
3. **File changes** — captured as a list (created/edited files)
4. **Action items** — pulled from ACTION_ITEMS.md if present
5. **2-day auto-delete** — snapshots prune themselves after 48 hours

**Why tiered?** Full history bloats context windows on reload. Summaries lose nuance. This middle ground keeps recent conversational context while compressing older material.

---

## Exact Script

```bash
#!/bin/bash
# save-chat.sh — run at end of session or when triggered

SESSION_NAME="chat-$(date -u +%Y-%m-%d-%H%M%S)"
SNAPSHOT_DIR="/home/openclaw/.openclaw/workspace/memory/snapshots"
mkdir -p "$SNAPSHOT_DIR"

# Build the snapshot
cat > "$SNAPSHOT_DIR/$SESSION_NAME.md" << 'EOF'
# Chat Save - {{TIMESTAMP}}

## Summary So Far
{{ONE_LINE_SUMMARY}}

## Recent Conversation (condensed)
{{RECENT_MESSAGES}}

## Earlier Context
{{EARLIER_SUMMARIZED}}

## Action Items
- [ ] {{OPEN_ITEMS}}

**Next:** {{WHAT_STAYS_UNFINISHED}}
EOF

echo "Snapshot saved: $SESSION_NAME.md"

# Auto-delete anything older than 2 days
find "$SNAPSHOT_DIR" -name "*.md" -mtime +2 -delete
echo "Cleaned up snapshots older than 2 days"
```

---

## How to Integrate

1. **Add to cron** — trigger `save-chat.sh` on session end, or
2. **Manual trigger** — user types "save chat" in conversation

The trigger relies on Blair reading daily memory at session start. When she sees "save chat", she runs the script and confirms.

---

## Variables to Fill

| Variable | Source |
|----------|--------|
| `{{TIMESTAMP}}` | `date -u +%Y-%m-%d-%H:%M UTC` |
| `{{ONE_LINE_SUMMARY}}` | What was the session about? |
| `{{RECENT_MESSAGES}}` | Last ~15 messages, condensed |
| `{{EARLIER_SUMMARIZED}}` | Everything before that, as bullets |
| `{{OPEN_ITEMS}}` | From ACTION_ITEMS.md |
| `{{WHAT_STAYS_UNFINISHED}}` | What carries over |

---

## Both Triggers Use the Same Folder

The original "snapshot" trigger and the new "save chat" trigger both write to `memory/snapshots/`. The cleanup logic runs on every save, so both get the 2-day auto-delete.

---

## Reload Behavior

When user says "load chat", Blair reads the most recent file from `memory/snapshots/`, presents the summary, and asks what to pick up.