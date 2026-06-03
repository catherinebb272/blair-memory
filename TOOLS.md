# TOOLS.md

## API Keys
All API keys and tokens are stored in `.env` — never hardcode values in this file.

### AgentMail Email Attachments
To send emails with attachments via AgentMail, use the `attachments` array in the JSON body:

```bash
curl -X POST "https://api.agentmail.to/v0/inboxes/blairana@agentmail.to/messages/send" \
  -H "Authorization: Bearer $AGENTMAIL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "recipient@email.com",
    "subject": "Subject line",
    "body": {"text": "Email body text"},
    "attachments": [{"filename": "image.png", "content": "BASE64_STRING", "contentType": "image/png"}]
  }'
```

- `filename`: The name the file should have when attached
- `content`: Base64-encoded file content  
- `contentType`: MIME type (e.g., `image/png`, `application/pdf`, `text/plain`)

**Primary email:** apartxalone@gmail.com (AI/agent communications)
**Secondary email:** catherine1@bellbracken.com (personal, occasionally bounces)


Skills define how tools work. This file is for your specifics — the stuff that's unique to your setup.
- **Browser_Tool** – wraps the Composio Browser Tool (`BROWSER_TOOL`). See `skills/browser_tool/skills_browser.md` for usage.
- **Composio CLI** – See `~/.agents/skills/composio-cli/SKILL.md` for tool usage. Canva, Gmail, and other integrations are documented in the references folder.

## Cron Jobs / Scheduled Tasks

> **Note:** Some of these may be broken (container restarts disable cron). Verify before relying on them.

### Cron → Email (Working Pattern)
Use when you want a scheduled email trigger.

**Step 1: Add API key to .env**
```bash
# Add to ~/.openclaw/workspace/.env:
AGENTMAIL_API_KEY=your_api_key_here
```

**Step 2: Create the cron**
```bash
openclaw cron add \
  --name "[name]" \
  --every [duration] \
  --session isolated \
  --message "Send an email to [recipient] with subject '[subject]' and body: '[message]'"
```

**Key insight:** Use `--message` (not `--system-event`) and `--session isolated` so the cron can take action without waking the main session. The isolated session reads .env for the API key.

**Examples:**
```bash
# Hourly test cron (disabled):
openclaw cron add --name "etsy-checkin-test-v2" --every 1h --session isolated --message "Send a test email to apartxalone@gmail.com with subject 'TEST: Etsy Check-In (V2)' and body: 'This is V2 hourly test.'"

# M-W-F at 1pm Chicago:
openclaw cron add --name "etsy-checkin" --cron "0 13 * * 1,3,5" --tz America/Chicago --session isolated --message "Send an email to apartxalone@gmail.com with subject 'Etsy Check-In Reminder' and body: 'Time for your Mon/Wed/Fri check-in. Reply with your Etsy data when ready.'"
```

**Current crons:**
- `etsy-checkin` (Mon/Wed/Fri 1pm Chicago) — disabled, needs update
- `etsy-checkin-test-v2` — disabled after successful testing

### Discord DM Keepalive (may be broken)
- **Schedule:** Every 15 minutes
- **Command:** `openclaw message send --target @catherine1724 --content "keepalive" && openclaw message delete --last`
- **Description:** Sends a DM with the text 'keepalive' to the user and immediately deletes it to keep the DM channel active without spamming.

### Nightly Backup to GitHub
- **Schedule:** Daily at 2:00 AM UTC
- **Command:** `cd /home/openclaw/.openclaw/workspace && export GITHUB_TOKEN=<token> && ./backup-script.sh >> /var/log/blair-backup.log 2>&1`
- **Script:** `/home/openclaw/.openclaw/workspace/backup-script.sh`
- **Destination:** `catherinebb272/blair-memory` (recovery-only, see GitHub Repo Map below)
- **Loop guard:** `git add -A -- ':!blair-memory'` excludes the local `blair-memory/` checkout from the push
- **Log:** `/var/log/blair-backup.log`
- **Last verified:** 2026-06-03 (commit 79784c6, 15 files synced)

## GitHub Repo Map (canonical)

Three repos, three purposes — never mix them.

| Repo | Purpose | Push? | Pull? | Notes |
|---|---|---|---|---|
| `catherinebb272/blair-memory` | **Workspace backup (recovery)** | ✅ nightly cron only | rarely | Fresh repo, clean history. The only destination for backups. Loop-excluded. |
| `catherinebb272/blair-documents` | **Active iterative work** | ✅ as part of project work | ✅ | Used when a project needs back-and-forth with Catherine through GitHub. Commit frequently as we iterate. **Not a backup target.** |
| `catherinebb272/heyron-tutorial` | **Public GitHub Pages** | ⛔ only on explicit ask | ✅ daily | Mature. Catherine edits live on GitHub to speed deployment. Local mirror in `documents/heyron-tutorials/`. |
| `catherinebb272/MockHeyron` | **Public GitHub Pages (the "Heyron redesign")** | ⛔ only on explicit ask | ✅ only on need | Mature, edited live by Catherine. **No local mirror** — the public repo is the source of truth, and workproduct is owned by the Heyron team. Pull into a scratch dir only if we need to look something up. |

**Hard rules:**
- The backup script (`backup-script.sh`) pushes **only** to `blair-memory`. Never to `blair-documents` or the public pages repos.
- `blair-documents` pushes are project work, not backups. They happen when we're actively iterating a project with Catherine.
- The two GitHub Pages repos (heyron-tutorial, MockHeyron) are edited live by their respective owners. We pull `heyron-tutorial` daily into a local mirror; we don't keep a mirror of `MockHeyron` (workproduct belongs to the Heyron team). For either, we never push unless Catherine specifically asks.

## External Integrations

### GitHub — Backup (recovery)
- **Repo:** `catherinebb272/blair-memory`
- **Token:** Stored in `.env` file as `GITHUB_TOKEN`
- **Used for:** Emergency recovery only. Nightly cron runs the backup script.

### GitHub — Active project work
- **Repo:** `catherinebb272/blair-documents`
- **Used for:** Live project files Catherine and Blair iterate on through GitHub
- **Backup rule:** Do NOT push to this repo from the backup script. Pushes here are project commits, not backups.

### AgentMail (Email)
- **Address:** blairana@agentmail.to
- **API Key:** Stored in `.env` file
- **Used for:** Automated ANA reports

### Discord
- **Server:** CB BlairAI
- **Bot:** BlairANA
- **Used for:** Primary communication channel

### here.now (Static Site Hosting)
- **API Key:** Stored in `.env` as `HERENOW_API_KEY`
- **Live Site:** https://boreal-larch-wxxv.here.now/
- **Source:** `nc/neighborhoods/` folder in workspace
- **Slug:** boreal-larch-wxxv
- **How to Update:**
  1. Get file metadata (path, size, contentType, SHA-256 hash)
  2. PUT to `https://here.now/api/v1/publish/{slug}` with auth header
  3. Upload each file to the presigned URLs returned
  4. POST to finalizeUrl with versionId
- **Script:** `/tmp/update-here.js` (generates file metadata)
- **Stored in:** `.env` as `HERENOW_API_KEY` (recommended)

## Sample Prompts

### Etsy Check‑in Skill
- **Skill name:** `etsy_checkin`
- **Purpose:** Runs the full Mon/Wed/Fri Etsy check‑in workflow (order parsing, handwritten‑note suggestions, review drafts, Discord alert).
- **Usage example:** `openclaw skill run etsy_checkin` – the skill will guide you through screenshot uploads and then post the compiled report.
- **Location:** `/home/openclaw/.openclaw/skills/etsy_checkin/`

## Sample Prompts

### LipSync AI Setup
> "We need to set up LipSync AI to create a sample animation. Talk me through creating a free 5 second animation of our [otter] avatar using the image and voice script we already created."

### ElevenLabs TTS Notes

- **Free tier limitation:** Rapid API calls trigger "unusual activity" detection and disable free tier. Space out requests or upgrade to paid.
- **API key storage:** Stored in `.env` file as `ELEVENLABS_API_KEY`
- **Voice IDs:** Can be retrieved via `GET /v1/voices` API call

## Important File Locations
- **Workspace:** `/home/openclaw/.openclaw/workspace/`
- **Memory files:** `/home/openclaw/.openclaw/workspace/memory/`
- **Daily logs:** `/home/openclaw/.openclaw/workspace/memory/YYYY-MM-DD.md`
- **Environment vars:** `/home/openclaw/.openclaw/workspace/.env`

---

## Tool Handling

All tools must:
- store documentation in /skills
- store secrets in .env
- follow /skills/UPDATING_SKILLS.md

## From updating_tools module of Project Rehab
All new tools must follow /skills/UPDATING_SKILLS.md

Tools index lives here.

---

## Discord IDs (Non-Secret)

These are not secrets — stored in `config/discord.env` for reference:

| ID | Value | Description |
|---|---|---|
| `DISCORD_DM_CHANNEL_CATHERINE` | 1481714637321015306 | Catherine's DM channel |
| `DISCORD_USER_ID_CATHERINE` | 881612027863375872 | Catherine's user ID |
| `DISCORD_CHANNEL_ID_DREW_ALERTS` | 1481691069878894702 | #general for Drew alerts |
| `DISCORD_USER_ID_DREW` | 163139270515752960 | Drew's user ID (@kaliodyme) |
