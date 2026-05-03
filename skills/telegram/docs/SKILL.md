# Telegram Tool

## How to Access
- Tool: `message` tool with `channel="telegram"`
- Bot token stored in `.env` as `TELEGRAM_BOT_TOKEN`

## Capabilities
- Send DM messages to users
- Send messages to groups/channels
- React to messages (if supported)
- Pin/unpin messages

## Common Commands
- Send DM: `message action=send target=USER_ID message="..."`
- Send to group: `message action=send target=CHANNEL_ID message="..."`
- Pin: `message action=pin target=MESSAGE_ID`

## Troubleshooting
- "bot not authorized" → ensure bot is added to the chat
- "invalid token" → verify `TELEGRAM_BOT_TOKEN` in `.env`
- "permission denied" → give bot appropriate admin rights
