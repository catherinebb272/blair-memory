# plaid-fox-pinger

Discord DM reminder using GitHub Actions.

## What This Does

Sends you scheduled Discord DMs throughout the day using GitHub Actions as the scheduler. Instead of relying on a local cron job that can fail when your server restarts, this runs on GitHub's free infrastructure.

## Files

| File | Purpose |
|------|---------|
| `send.js` | Node.js script that opens a Discord DM channel and sends your message |
| `package.json` | Node dependencies (just node-fetch for API calls) |
| `.github/workflows/send.yml` | GitHub Actions workflow that runs the script on a schedule |

## What You Need to Do in GitHub

1. **Check your GitHub token** — If your agent is creating the repo and files, your token needs the "workflow" scope enabled (Settings → Tokens → enable "workflow"). Without this, your agent can't create workflow files automatically.

2. **Create a new private repository** — Name it something like "plaid-fox-pinger" or "project-pinger"

3. **Upload the 3 files** — Add send.js, package.json, and .github/workflows/send.yml to the repo

4. **Add Secrets** (Settings → Secrets and variables → Actions):
   - `DISCORD_TOKEN` — Your Discord bot token
   - `USER_ID` — Your Discord user ID

5. **Test It**:
   - Go to Actions → "Send Scheduled DM" → Run workflow
   - Check your Discord DMs — you should get a message within a minute

6. **Adjust Schedule** (optional):
   - Edit the cron expression in `send.yml` to change when fires
   - Currently set for 1pm, 3pm, 5pm, 7pm Central Time

## Schedule

Current cron: `0 18,20,22,12 * * *`

| UTC Hour | Central Time |
|----------|--------------|
| 18 | 1pm |
| 20 | 3pm |
| 22 | 5pm |
| 12 | 7pm |

Note: Cron is in UTC. Central Time is UTC-5 (DST).