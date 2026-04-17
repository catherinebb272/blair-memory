# Cron Job Setup Guide

*How to ask your agent to create cron jobs that actually deliver to Discord/Telegram*

---

## The Core Problem

When setting up cron jobs that send you Discord DMs (or Telegram messages), there's a gotcha: the **Main session + system-event** combination doesn't push to Discord. It just wakes the main session quietly. To get a DM, you need **isolated session + announce**.

---

## Settings Explained

### 1. Cron Expression
The schedule in 5-field format: `minute hour * * *`

| Example | Meaning |
|---------|---------|
| `0 9 * * *` | 9am daily |
| `0 13-20/2 * * *` | 1pm, 3pm, 5pm, 7pm (every 2 hours between 1pm-8pm) |
| `0 9 * * 1-5` | 9am weekdays |
| `0 9,12,18 * * *` | 9am, noon, 6pm daily |

### 2. Timezone
**Always specify** — defaults to UTC, which probably isn't what you want. Use IANA format:
- `America/Chicago` (Central)
- `America/New_York` (Eastern)
- `Europe/London` (UK)

### 3. Session Target
- **`main`** — Wakes your main conversation. Requires `--system-event`. Good for background tasks that shouldn't interrupt you, but **does not deliver to Discord**.
- **`isolated`** — Runs in a separate session. Required if you want `--announce` delivery to Discord/Telegram.

### 4. Wake Mode
- **`now`** — Runs immediately when the cron triggers (bypasses heartbeat).
- **`next-heartbeat`** — Waits for the next heartbeat poll (~30 min) to fire. Slight delay but more efficient.

### 5. Payload
- **`--system-event`** — For main session. Just a text payload that triggers a system event.
- **`--message`** — For isolated session with agent task. The message becomes the agent's input.

### 6. Delivery (The Important Part)

To get a Discord DM, you **must** use:
```
--session isolated --announce --to "channel:YOUR_DISCORD_ID"
```

The `--to` format:
- Discord: `channel:881612027863375872` (your user ID)
- Telegram: `channel:123456789`
- Signal: `channel:+1234567890`

### 7. Result Delivery
- **`--no-deliver`** — Skip delivery entirely (just runs silently)
- **`--announce`** — Delivers the result to the specified channel (required for Discord/Telegram DMs)

---

## Prompt Templates

### For a Discord DM (what you usually want):
> "Create a cron job that runs [schedule]. Use Chicago timezone. Send me a Discord DM with message '[your message]'. Use Cron mode, run in the Main session (or isolated?), use Next Heartbeat, run an Assistant Task, and set Result Delivery to None."

**Actually use this instead (fixed for delivery):**
> "Create a cron job that runs [schedule]. Use timezone America/Chicago. Use isolated session with --announce to deliver to Discord channel [your Discord ID]. Use --message '[your message]'. Use next-heartbeat wake mode."

### For a silent background task (main session, no delivery):
> "Create a cron job that runs [schedule]. Use Chicago timezone. Run in the main session with a system event. Use next-heartbeat. No delivery needed."

---

## Examples

### Daily vitamins reminder at 9am Chicago, Discord DM:
```bash
openclaw cron add --name "daily-vitamins" \
  --cron "0 9 * * *" \
  --tz "America/Chicago" \
  --session isolated \
  --wake next-heartbeat \
  --announce \
  --to "channel:881612027863375872" \
  --message "Take your vitamins 💊"
```

### Pool skimmer check every 2 hours (1pm, 3pm, 5pm, 7pm), Discord DM:
```bash
openclaw cron add --name "pool-skimmer-reminder" \
  --cron "0 13-20/2 * * *" \
  --tz "America/Chicago" \
  --session isolated \
  --wake next-heartbeat \
  --announce \
  --to "channel:881612027863375872" \
  --message "Hey! Go check the pool skimmers. Don't make me come up there 👀"
```

---

## Key Takeaways

1. **Want a Discord DM?** → Use `--session isolated --announce --to "channel:YOUR_ID"`
2. **Want silent background task?** → Use `--session main --system-event`
3. **Always specify timezone** → Otherwise it's UTC
4. **Main + system-event = no DM delivery** → This is the most common mistake