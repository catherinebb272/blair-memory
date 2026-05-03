# AgentMail Configuration

**Purpose:** Send automated emails via AgentMail API.

**API Key:** Stored in `.env` as `AGENTMAIL_API_KEY`

**Inbox:** blairana@agentmail.to

**Base URL:** https://api.agentmail.to/v0

**Usage:**
```bash
# Send email
curl -X POST "https://api.agentmail.to/v0/inboxes/blairana@agentmail.to/messages/send" \
  -H "Authorization: Bearer ${AGENTMAIL_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{"to": "recipient@example.com", "subject": "Subject", "body": {"text": "Message"}}'
```

**Related Skills:**
- etsy_checkin - For M/W/F check-in workflow