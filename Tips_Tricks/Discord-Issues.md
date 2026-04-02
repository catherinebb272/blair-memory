# Discord Issues

## General Troubleshooting

A few clarifying questions so I can get you sorted:

- **Where are you in the process?** Are you in the HeyRon dashboard trying to connect, or are you in the Discord Developer Portal setting up the bot itself?

- **The URL at the bottom** — Are you looking for the "Redirect URI" in the Discord Developer Portal under OAuth2? Or are you looking for something in the HeyRon setup?

- **The left panel** — In the Discord Developer Portal, do you see the menu on the left with options like "General Information," "Bot," "OAuth2," etc.?

- **If you can tell which step you're on**, your agent can walk you through it step-by-step

---

## Can't DM / Agent Doesn't Respond in Channels

**Most frequent issue:** Agent can respond to DMs but not to regular messages in channels.

### Fix Option 1 (Quick)

Tell your agent: "set Discord groupPolicy to open"

### Fix Option 2 (Whambulance / Long Process)

1. Go to https://discord.com/developers/applications
2. Select your bot
3. Click **Bot** in the left sidebar
4. Scroll to **Privileged Gateway Intents**
5. Enable all three:
   - **Presence Intent**
   - **Server Members Intent**
   - **Message Content Intent**
6. Click **Save Changes** (important — must save!)

**Why it works:** Without Message Content Intent, Discord only lets your bot read messages that @mention it — it can't see regular messages in channels. Once you enable and save, your agent should start responding normally.