# TOOLS.md

Skills define how tools work. This file is for your specifics — the stuff that's unique to your setup.

## Cron Jobs / Scheduled Tasks

### Nightly Backup to GitHub
- **Schedule:** Daily at 2:00 AM UTC
- **Command:** `cd /home/openclaw/.openclaw/workspace && export GITHUB_TOKEN=<token> && ./backup-script.sh >> /var/log/blair-backup.log 2>&1`
- **Script:** `/home/openclaw/.openclaw/workspace/backup-script.sh`
- **What it backs up:** All memory files, daily logs, and business files to GitHub
- **Destination:** `catherinebb272/blair-documents/memory-backup/`
- **Log:** `/var/log/blair-backup.log`

### Discord DM Keepalive
- **Schedule:** Every 15 minutes
- **Command:** `openclaw message send --target @catherine1724 --content "keepalive" && openclaw message delete --last`
- **Description:** Sends a DM with the text 'keepalive' to the user and immediately deletes it to keep the DM channel active without spamming.

## External Integrations

### GitHub
- **Repo:** catherinebb272/blair-documents
- **Token:** Stored in `.env` file
- **Used for:** File backups, document storage

### AgentMail (Email)
- **Address:** blairana@agentmail.to
- **API Key:** Stored in `.env` file
- **Used for:** Automated ANA reports

### Discord
- **Server:** CB BlairAI
- **Bot:** BlairANA
- **Used for:** Primary communication channel

### here.now (Static Site Hosting)
- **API Key:** 6b1b31b22d1858757b6e8266ccf4de326e1c198f1f23567cc84ea695c1cb77ec
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
