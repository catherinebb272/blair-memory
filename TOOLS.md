# TOOLS.md

Skills define how tools work. This file is for your specifics — the stuff that's unique to your setup.

## Cron Jobs / Scheduled Tasks

### Nightly Backup to GitHub
- **Schedule:** Daily at 2:00 AM UTC
- **Command:** `cd /root/.openclaw/workspace && export GITHUB_TOKEN=<token> && ./backup-script.sh >> /var/log/blair-backup.log 2>&1`
- **Script:** `/root/.openclaw/workspace/backup-script.sh`
- **What it backs up:** All memory files, daily logs, and business files to GitHub
- **Destination:** `catherinebb272/blair-documents/memory-backup/`
- **Log:** `/var/log/blair-backup.log`

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

## Sample Prompts

### LipSync AI Setup
> "We need to set up LipSync AI to create a sample animation. Talk me through creating a free 5 second animation of our [otter] avatar using the image and voice script we already created."

### ElevenLabs TTS Notes

- **Free tier limitation:** Rapid API calls trigger "unusual activity" detection and disable free tier. Space out requests or upgrade to paid.
- **API key storage:** Stored in `.env` file as `ELEVENLABS_API_KEY`
- **Voice IDs:** Can be retrieved via `GET /v1/voices` API call

## Important File Locations
- **Workspace:** `/root/.openclaw/workspace/`
- **Memory files:** `/root/.openclaw/workspace/memory/`
- **Daily logs:** `/root/.openclaw/workspace/memory/YYYY-MM-DD.md`
- **Environment vars:** `/root/.openclaw/workspace/.env`
