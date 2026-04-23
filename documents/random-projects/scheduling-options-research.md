# Scheduling Options Research

*Last updated: 2026-04-19*

## The Problem

Reliable scheduled Discord DMs have been difficult to achieve. Multiple approaches tested with mixed results.

---

## Options Tested

### 1. GitHub Actions (Current)

**Setup:** Two repos - `plaid-fox-pinger` (pool) and `walk-pinger` (walks)

**Schedule:**
- Pool: `0 18,20,22,12 * * *` → 1pm, 3pm, 5pm, 7pm CT
- Walk: `15,45 16,17,18,19,20,21,22 * * *` → every 30 min 11:15am-5:45pm CT

**Results:**
| Scheduled | Actual | Delay |
|-----------|--------|-------|
| 1pm | ~1:40pm | ~40 min |
| 2pm | 2:12pm | 12 min |
| 2:30pm | 2:58pm | 28 min |
| 3pm | ~3:29pm | 29 min |

**Pros:**
- Free
- No server maintenance
- Off-peak scheduling (:15/:45) reduces but doesn't eliminate delays

**Cons:**
- Free tier is unreliable (10-40 min delays)
- Not suitable for time-sensitive reminders
- Works for "morning/noon/night" or "roughly every 2 hours" use cases

---

### 2. Container Cron (OpenClaw)

**Setup:** OpenClaw cron jobs with `systemEvent` payload sending Discord DM

**Problems Found:**
1. **Launch delays:** Same restart timing issues as GitHub Actions when container restarts
2. **Heartbeat-dependent:** Doesn't run during an active session - fires when session wakes, not at exact scheduled times
3. **Discord issues:** Required convoluted "wake up" process to send DMs reliably
4. **Status reporting bugs:** Cron status shows "error" even when task completed successfully (false positives)

**Conclusion:** Not reliable for scheduled reminders.

---

### 3. Make.com (Investigated)

**Pricing:**
- Free tier: 1,000 credits/month
- Core: $9/month
- Core: $29/month

**Pros:**
- Scheduled triggers "guaranteed" (per marketing)
- Visual workflow builder
- Discord integration built-in

**Cons:**
- Wait timers max at **5 minutes** - can't do long delays in single scenario
- Credit system gets expensive quickly
- Mixed reliability reviews from community
- Learning curve for interface

**Verdict:** Would need to pay for reliability, and still uncertain.

---

### 4. Dedicated Discord Bots (Not Tested)

**Options:**
- Message Planner Bot (discordmessageplannerbot.com)
- Message Scheduler bot (discord.bots.gg)
- Carl-bot (has auto-feed feature)

**Pros:**
- Free or cheap
- Runs on bot infrastructure
- Simple setup - invite to server, schedule via commands/dashboard

**Cons:**
- Sends to channels/DMs within Discord
- Less control over message content from external scripts
- Limited to what's built into the bot

---

## Summary Table

| Option | Cost | Reliability | Best For |
|--------|------|-------------|----------|
| GitHub Actions | Free | ⚠️ 10-40 min delays | Non-critical "morning/noon/night" reminders |
| Container Cron | Free | ❌ Unreliable | Not recommended |
| Make.com | $9+/mo | Unknown | Complex workflows (overkill for simple DMs) |
| Discord Bot | Free | ✅ Likely reliable | Simple scheduled messages |
| Manual/Host Cron | Free | ✅ When host is up | When server stays running |

---

## Current Recommendation

For simple scheduled Discord DMs:
1. **Best:** Dedicated Discord bot (Message Planner or similar) - runs on their infrastructure
2. **Acceptable:** GitHub Actions for non-critical reminders where 20-30 min delay is fine
3. **Backup use case:** Could repurpose one workflow as "end of day" summary rather than time-sensitive reminders

---

## Notes

- GitHub Actions scheduling is NOT precise on free tier - known limitation
- Even with "off-peak" scheduling (:15/:45 instead of :00), delays persist
- The more value you place on exact timing, the more you need to pay