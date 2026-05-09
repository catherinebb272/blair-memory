# Heyron Launchpad - Page List

## Entry Point
- **welcome** - Initial choice between Beginner/Expert paths

---

## Beginner Flow (6 screens)

1. **beginner-names** - NamesScreen
   - Input: your name, agent name
   
2. **beginner-usecases** - UseCasesScreen
   - Select focus areas (email, calendar, research, writing, code, support, sales, data, pm, personal)
   
3. **beginner-integrations** - IntegrationsListScreen
   - Toggle connect/disconnect for 8 integrations (GitHub, Telegram, Apify, ElevenLabs, Obsidian, Discord, Cron, Web Browser)
   
4. **beginner-personality** - PersonalityScreen
   - Pick persona: Steady, Curious, Sharp, Warm, Playful, Formal
   
5. **beginner-comm** - CommStyleScreen
   - Choose verbosity: Concise, Balanced, Detailed
   
6. **beginner-preview** - PreviewScreen
   - Summary of all choices
   - "Open dashboard" button → transitions to **dashboard**

---

## Expert Flow (19 screens)

1. **expert-names** - NamesScreen (same as beginner)
2. **expert-usecases** - UseCasesScreen (same as beginner)
3. **expert-model** - ModelScreen
   - Choose model: Heyron Standard, Heyron Deep, Heyron Fast
4. **expert-pick-tools** - IntegrationsPickScreen
   - Select which tools to walk through setup
5. **expert-github** - GitHubSetup
   - OAuth or PAT, account/org, repos, permissions, test connection
6. **expert-telegram** - TelegramSetup
   - Open bot, send /start, paste code, select chat, set alerts
7. **expert-apify** - ApifySetup
   - Token, test, select actors, daily cap
8. **expert-elevenlabs** - ElevenLabsSetup
   - API key, verify, pick voice, voice settings, when to speak
9. **expert-obsidian** - ObsidianSetup
   - Install plugin, pairing code, vault path, sync direction, frequency, exclusions, conflict resolution
10. **expert-discord** - DiscordSetup
    - Open invite, sign in, accept, link username, notification prefs
11. **expert-cron** - CronSetup
    - Task name, frequency, time/day, action, output destination, failure behavior
12. **expert-browser** - BrowserSetup
    - Permission tier, domain access, allowlist/blocklist, session limits, cookies
13. **expert-memory** - MemoryScreen
    - Memory level: Short, Standard, Deep + editable memory toggle
14. **expert-personality** - PersonalityScreen (same as beginner)
15. **expert-comm** - CommStyleScreen (same as beginner)
16. **expert-hours** - HoursScreen
    - Timezone, work start/end, work days
17. **expert-notifications** - NotificationsScreen
    - Email/push toggles, frequency: Always/Important only/Daily digest
18. **expert-privacy** - PrivacyScreen
    - Learn from me, share anonymous usage, auto-delete chat history
19. **expert-preview** - PreviewScreen
    - Full summary of expert choices → "Open dashboard" → **dashboard**

---

## Dashboard

- **dashboard** - Dashboard
  - Greets user by name
  - Shows metrics (tasks today, avg response, connected tools)
  - Container card with health info
  - Recent activity feed
  - Contains **SupportWidget** (floating chat)

---

## Help System

- **help** - HelpIndex
  - Grid of help categories and pages

- **help-{slug}** - HelpPage (dynamic)
  - Individual help pages for:
    - Integrations: github, telegram, apify, elevenlabs, obsidian, discord, cron, browser
    - Account: cancel, refund
    - Your agent: soul-memory, container-access
    - Troubleshooting: troubleshooting

---

## Support Widget

- **SupportWidget** - Floating chat component
  - Present on dashboard and all help pages
  - "Hey Ron" - container-aware support bot
  - Quick actions: What's installed?, Got an error, Cancel, Refund, Open ticket
  - Escalation to human ticket

- **TicketModal** - Ticket submission modal
  - Triggered from SupportWidget

---

## Component Summary

| Page Key | Component | Description |
|----------|-----------|-------------|
| welcome | LaunchpadWelcome | Entry - choose Beginner or Expert |
| beginner-names | NamesScreen | Your name + agent name |
| beginner-usecases | UseCasesScreen | Focus area selection |
| beginner-integrations | IntegrationsListScreen | Integration toggle list |
| beginner-personality | PersonalityScreen | Persona selection |
| beginner-comm | CommStyleScreen | Verbosity level |
| beginner-preview | PreviewScreen | Beginner summary |
| expert-names | NamesScreen | (same) |
| expert-usecases | UseCasesScreen | (same) |
| expert-model | ModelScreen | AI model selection |
| expert-pick-tools | IntegrationsPickScreen | Select tools to set up |
| expert-github | GitHubSetup | GitHub integration |
| expert-telegram | TelegramSetup | Telegram integration |
| expert-apify | ApifySetup | Apify integration |
| expert-elevenlabs | ElevenLabsSetup | ElevenLabs integration |
| expert-obsidian | ObsidianSetup | Obsidian integration |
| expert-discord | DiscordSetup | Discord integration |
| expert-cron | CronSetup | Cron integration |
| expert-browser | BrowserSetup | Web Browser integration |
| expert-memory | MemoryScreen | Memory level |
| expert-personality | PersonalityScreen | (same) |
| expert-comm | CommStyleScreen | (same) |
| expert-hours | HoursScreen | Working hours |
| expert-notifications | NotificationsScreen | Alert preferences |
| expert-privacy | PrivacyScreen | Privacy settings |
| expert-preview | PreviewScreen | Expert summary |
| dashboard | Dashboard | Main app dashboard |
| help | HelpIndex | Help home |
| help-* | HelpPage | Dynamic help pages |

---

## Navigation Flow

```
welcome
    ├──→ beginner-names → usecases → integrations → personality → comm → preview → dashboard
    │
    └──→ expert-names → usecases → model → pick-tools
                    ├──→ [each selected tool] (github/telegram/apify/etc)
                    ├──→ memory → personality → comm → hours → notifications → privacy → preview → dashboard

dashboard ← help ← help-{slug}
```

---

## Key Variables

- `screen` - Current screen key
- `data` - User configuration object containing:
  - email, yourName, agentName
  - useCases[], personality, commStyle, model
  - tools[], toSetup[]
  - memory, editableMemory
  - timezone, workStart, workEnd, workDays[]
  - notifyEmail, notifyPush, notifyFreq
  - learnFromMe, shareUsage, autoDelete
