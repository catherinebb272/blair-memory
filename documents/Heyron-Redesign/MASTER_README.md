# Heyron — Launchpad onboarding + Hey Ron support

Three additive things to drop onto the existing product without replacing current auth or dashboard: **Launchpad onboarding**, **Help center**, **Hey Ron support widget**. Existing login stays. Existing dashboard stays.

## Files in this folder

| File | Purpose |
|---|---|
| `heyron-app.html` | Runnable demo of the entire onboarding + dashboard + Ron experience. Open in any browser. |
| `ron-clippy-app.html` | Standalone Ron widget demo with a mode toggle (authenticated vs public). |
| `HeyRonWidget.jsx` | Production React component for Hey Ron. Dual-mode, drop-in. |
| `MASTER_README.md` | This file. |

## Brand

- **Background** `#0A0A0A` — true near-black
- **Brand primary** `#273957` — deep navy
- **Brand secondary / accent** `#546E8F` — for buttons, links, highlights
- **Border** `#2D333B`
- **Text primary** `#F5F5F5` — cool white
- **Text secondary** `#8B9CB5`
- **Fonts**: DM Sans (with Commissioner as fallback) for body, JetBrains Mono for code/IDs/timestamps

## Routing

### Post-login gate

```ts
async function routeAfterLogin() {
 const res = await fetch('/api/me', { credentials: 'include' });
 const user = await res.json();
 if (!user) { window.location.href = '/login'; return; }
 if (user.onboardingCompleted) { window.location.href = '/dashboard'; return; }
 window.location.href = '/launchpad/welcome';
}
```

### Completion redirect

```ts
async function finishOnboarding(userId, payload) {
 const res = await fetch('/api/onboarding/complete', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 credentials: 'include',
 body: JSON.stringify({ userId, onboardingCompleted: true, onboardingData: payload })
 });
 const data = await res.json();
 window.location.href = data.redirectTo || '/dashboard';
}
```

## Onboarding data model — layered payload

| Layer | Fields | Settings path |
|---|---|---|
| `identity` | `yourName`, `agentName` | Settings → Identity |
| `soul` | `useCases`, `personality`, `communicationStyle` | Settings → Soul |
| `brain` | `model`, `memory`, `editableMemory` | Settings → Brain |
| `connections` | `tools[]`, per-tool config | Settings → Connections |
| `schedule` | `timezone`, `workStart`, `workEnd`, `workDays` | Settings → Schedule |
| `alerts` | `notifyEmail`, `notifyPush`, `notifyFrequency` | Settings → Notifications |
| `privacy` | `learnFromMe`, `shareUsage`, `autoDelete` | Settings → Privacy |

### Canonical payload

```json
{
 "onboardingCompleted": true,
 "identity": { "yourName": "Cassie", "agentName": "Spencer" },
 "soul": { "useCases": ["email", "calendar", "research"], "personality": "warm", "communicationStyle": "balanced" },
 "brain": { "model": "standard", "memory": "standard", "editableMemory": true },
 "connections": {
 "tools": ["github", "telegram", "apify"],
 "github": { "enabled": true, "authMethod": "oauth", "account": "cassielee", "repos": ["heyron-app", "heyron-api"], "permissions": { "readCode": true, "readPRs": true, "writeCommits": false, "mergePRs": false } },
 "telegram": { "enabled": true, "botName": "SpencerHelperBot", "chatMode": "dm" },
 "apify": { "enabled": true, "actors": ["apify/web-scraper"], "dailyCap": 50 },
 "elevenlabs": { "enabled": false, "voice": null, "useFor": "on-request" },
 "obsidian": { "enabled": false, "vaultPath": "", "syncDirection": "bidirectional", "syncFrequency": "realtime" },
 "cron": { "enabled": false, "taskName": "", "schedule": "", "action": "" },
 "browser": { "enabled": false, "tier": "interactive", "allowlistMode": "any", "allowlist": [], "blocklist": [] }
 },
 "schedule": { "timezone": "Pacific (PT)", "workStart": "09:00", "workEnd": "18:00", "workDays": ["Mon", "Tue", "Wed", "Thu", "Fri"] },
 "alerts": { "notifyEmail": true, "notifyPush": false, "notifyFrequency": "important" },
 "privacy": { "learnFromMe": true, "shareUsage": true, "autoDelete": "Never" }
}
```

## Onboarding flows

### Beginner

1. names
2. use cases
3. integrations picker
4. setup screens for whichever tools were picked
5. personality
6. communication style
7. preview
8. dashboard

### Expert

1. names
2. use cases
3. model
4. pick tools to set up
5. only show setup screens for chosen tools
6. memory
7. personality
8. communication style
9. working hours
10. notifications
11. privacy
12. preview
13. dashboard

### Tool setup screens (both flows)

GitHub, Telegram, Apify, ElevenLabs, Obsidian, Cron, Web Browser.

**Discord is not in onboarding.** It lives on the dashboard end state only as a "Join the Heyron Discord" card.

## Telegram requirements

Telegram setup must include all six steps:

1. Open `@BotFather` in Telegram
2. Explain `/newbot`
3. Ask for bot name
4. Ask for bot token (with safety warnings):
 - if you share this token, someone else can control the bot
 - they may access private info routed through it
 - never paste it in chat logs or screenshots
 - rotate it immediately if leaked (`/revoke` in BotFather)
5. Test the token
6. Choose where messages go (DM, group, both)

## Mount Ron on dashboard

```html
<div id="hey-ron"></div>
<script>
window.HEY_RON_CONFIG = {
 mode: 'authenticated',
 userEmail: window.__HEYRON_USER__?.email,
 userContext: {
 yourName: window.__HEYRON_USER__?.identity?.yourName,
 agentName: window.__HEYRON_USER__?.identity?.agentName,
 tools: window.__HEYRON_USER__?.connections?.tools || [],
 useCases: window.__HEYRON_USER__?.soul?.useCases || [],
 model: window.__HEYRON_USER__?.brain?.model || 'standard',
 memory: window.__HEYRON_USER__?.brain?.memory || 'standard',
 workStart: window.__HEYRON_USER__?.schedule?.workStart || '09:00',
 workEnd: window.__HEYRON_USER__?.schedule?.workEnd || '18:00',
 timezone: window.__HEYRON_USER__?.schedule?.timezone || 'Pacific (PT)',
 workDays: window.__HEYRON_USER__?.schedule?.workDays || ['Mon','Tue','Wed','Thu','Fri'],
 autoDelete: window.__HEYRON_USER__?.privacy?.autoDelete || 'Never',
 notifyEmail: window.__HEYRON_USER__?.alerts?.notifyEmail ?? true,
 notifyPush: window.__HEYRON_USER__?.alerts?.notifyPush ?? false
 },
 ticketEndpoint: '/api/tickets',
 ticketStatusEndpoint: '/api/tickets/status-lookup',
 cancelUrl: 'https://heyron.ai/help/cancel',
 refundUrl: 'https://heyron.ai/help/refund',
 helpBaseUrl: 'https://heyron.ai/help',
 position: 'bottom-right'
};
</script>
<script src="/embed/hey-ron-embed.js"></script>
```

### Or as a React import

```jsx
import HeyRonWidget from './HeyRonWidget';

<HeyRonWidget
 mode="authenticated"
 userEmail={user.email}
 userContext={containerState}
 ticketEndpoint="/api/tickets"
 ticketStatusEndpoint="/api/tickets/status-lookup"
 cancelUrl="https://heyron.ai/help/cancel"
 refundUrl="https://heyron.ai/help/refund"
 helpBaseUrl="https://heyron.ai/help"
 onNavigateHelp={(slug) => navigate(`/help/${slug}`)}
/>
```

## Mount Ron on public support / login pages

```html
<div id="hey-ron"></div>
<script>
window.HEY_RON_CONFIG = {
 mode: 'public',
 userEmail: '',
 userContext: {},
 ticketEndpoint: '/api/tickets',
 ticketStatusEndpoint: '/api/tickets/status-lookup',
 cancelUrl: 'https://heyron.ai/help/cancel',
 refundUrl: 'https://heyron.ai/help/refund',
 helpBaseUrl: 'https://heyron.ai/help',
 position: 'bottom-right'
};
</script>
<script src="/embed/hey-ron-embed.js"></script>
```

Public Ron must not reveal container details.

## Ron behavior by mode

### Dashboard Ron (`mode="authenticated"`) can
- Read container context, integration health, recent logs, settings
- Create tickets with container snapshot
- Check ticket status
- Restart agent (if Robby allows it)
- Greet by name and reference the agent by name

### Public Ron (`mode="public"`) can
- Answer docs/help questions
- Open a ticket (with email-based identity)
- Check ticket status by ticket ID + email
- Route to cancellation/refund/troubleshooting docs
- Help with login recovery

### Public Ron cannot
- Expose private container details, logs, tokens, or memory contents
- Restart anything
- Answer account-specific questions without verification

### First greeting

**Dashboard:** *"Hey Cassie! I'm Ron, the support raccoon. I've got your container open — including Spencer's logs and integrations. What's up?"*

**Public:** *"Hey! I'm Ron. I can help with docs, account stuff, and tickets. For container-specific help you'll need to sign in."*

## Quick actions

- **Dashboard**: What's installed? · Got an error · Check my tickets · Cancel my account · Request a refund · Open a ticket
- **Public**: I can't log in · Set up Telegram · Cancel my account · Request a refund · Check ticket status · Open a ticket

## Escalation triggers

Ron stops trying and surfaces a ticket button when any of:

- Keyword match on `production down`, `data loss`, `security`, `breach`, `urgent`, `emergency`, `outage`, `human`, `support team`, `real person`, `locked out`, `can't access`, `billing`, `refund`, `cancel`
- 6+ user turns without resolution
- Public mode + account-specific question

## Help center

Routes: `/help` and `/help/:slug`.

Slugs: `github`, `telegram`, `apify`, `elevenlabs`, `obsidian`, `discord`, `cron`, `browser`, `cancel`, `refund`, `soul-memory`, `container-access`, `troubleshooting`.

## Backend endpoints

### `GET /api/me`

Before onboarding:
```json
{ "id": "usr_123", "email": "cassie@example.com", "onboardingCompleted": false,
 "identity": { "yourName": null, "agentName": null }, "soul": null, "brain": null,
 "connections": { "tools": [] }, "schedule": null, "alerts": null, "privacy": null }
```

After onboarding: same shape with all layers populated (see canonical payload above).

### `POST /api/onboarding/complete`

```json
// request
{ "userId": "usr_123", "onboardingCompleted": true, "onboardingData": { /* layered payload */ } }
// response
{ "ok": true, "redirectTo": "/dashboard" }
```

### `POST /api/tickets`

```json
// request
{
 "subject": "Telegram bot stopped responding",
 "description": "Conversation context: ...",
 "category": "Integration",
 "priority": "normal",
 "email": "cassie@example.com",
 "source": "in_app_widget",
 "containerSnapshot": true
}
// response
{ "id": "4821" }
```

### `POST /api/tickets/status-lookup`

```json
// request
{ "ticketId": "4821", "email": "cassie@example.com" }
// response
{ "ticketId": "4821", "status": "in_progress", "lastUpdated": "2026-04-24T22:00:00Z", "summary": "Investigating Telegram bot token issue" }
```

### `GET /api/container/context`

```json
{
 "containerId": "heyron-prod-cassie",
 "region": "us-east-1",
 "status": "healthy",
 "memoryUsedGb": 2.1,
 "memoryLimitGb": 4.0,
 "uptimeHuman": "14d 3h",
 "integrations": ["github", "telegram", "apify"],
 "lastDeployHuman": "2 hours ago"
}
```

### `POST /api/container/action`

```json
// request
{ "action": "restart_agent", "userId": "usr_123", "containerId": "heyron-prod-cassie" }
// response
{ "ok": true, "message": "Agent restarted" }
```

Allowed actions: `restart_agent`, `refresh_integrations`, `recheck_logs`.

## Rules that must stay true

- Existing login unchanged
- Existing dashboard unchanged
- Launchpad is additive
- Ron is additive
- Help center is additive
- Onboarding writes into the layered model
- Discord is dashboard-only
- Selected tools must branch into real setup pages
- Public Ron and dashboard Ron are the same product with different permissions

## Open questions before shipping

1. **Where tickets land** — Linear / Zendesk / custom DB
2. **Real container API endpoints** — what shape does the existing API return
3. **Whether Ron can restart / fix for real** — or inspect-and-ticket only
4. **Public ticket verification mechanism** — email + ticket ID, magic link, or signed-in only
5. **Official Heyron logo SVG asset path** — to drop into the brand row
6. **Confirm `@HeyronBot` is registered** on Telegram
7. **Confirm `discord.gg/heyron` invite link** is live

## Note for Eloise (or whoever implements)

Implement a post-login onboarding gate using `onboardingCompleted`. Route incomplete users to `/launchpad/welcome`. Persist onboarding in the layered payload above. On completion, set `onboardingCompleted = true` and redirect to the existing `/dashboard`. Mount the Hey Ron widget on both the existing dashboard and public support/login surfaces. Public Ron is docs/ticket/status only; authenticated Ron is container-aware.
