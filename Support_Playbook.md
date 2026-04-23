# Support Playbook

*Catherine's moderator quick reference — as of 2026-04-20*

**Source of Truth:** Supabase  
**Intake:** heyron.ai/support

---

## Available Playbooks
- `stale-tab-token` — Stale tab / stale token (ui)
- `502-container-down` — 502 on container URL (infra)
- `403-tool-call` — 403 on tool call (provider key) (provider)
- `pairing-required-loop` — Pairing required loop (pairing)
- `discord-bot-silent` — Discord bot is silent in user's server (channels)
- `401-unauthorized-connect-page` — 401 / unauthorized in connect page (auth)
- `blank-agent-replies` — Agent gives blank or empty replies (agent_runtime)
- `telegram-channel-broken` — Telegram channel broken / chat not found (channels)
- `whatsapp-logged-out` — WhatsApp logged out (channels)
- `browser-tools-missing` — Browser / Python / GitHub tools missing after update (tools_regression)

## Look Up a Ticket
- `#1657` or `ticket 1657` — masked mod view (status, priority, agent, container, masked email)
- `#1657 full` — unmasked (email + diagnosis + timestamps). Use only when needed
- Works in any Mod Lounge channel (mod-chat, navi, work-nook, server-status) or Ron Labs

## Escalate to PD (Fleet Support)
- `!escalate #1657 short reason` — sets priority=high, tags mod_escalated, posts card in #fleet-support queue
- PD auto-pickup re-reads every 5 min

## When PD Needs Customer Answer
- PD writes to Bunny Burrow bus → post in channel with question ID
- Any mod: `!answer <question_id> <customer's reply>` — relay back to PD
- First mod wins; if one walks away, another can pick up

## DM Customer Without Using Personal Discord
- `@The Whambulance !ask <discord_user_id> <what to ask>` in Mod Lounge or Ron Labs
- Whambulance DMs them, posts their reply back pinging you
- Max 5 outbound DMs per mod per hour

---

## Playbooks (Known Fixes)
- `!playbook list` — browse all known patterns
- `!playbook search browser missing` — find a match
- `!playbook show 401-unauthorized-connect-page` — open fix steps + ready-to-send user reply
- Navi auto-surfaces playbook when question clearly matches

## Ticket Counts
- `@Navi how many active tickets` — live snapshot from Supabase
- `@Navi how many mod-escalated tickets` — focused

## Cassie's 30-Min Update
- Every 30 min posts ticket update in #portal-coder-updates: active buckets, touched tickets, mod-escalated queue, new Den forum threads, red flags

## Privacy
- Emails masked by default (`nic***@gmail`). Add `full` when needed
- Detailed ticket info only in mod-safe channels. Public Den gets support-form deflect

## Oversight
- :00 — Ron sweeps bus and flags red flags to #shared
- :45 — Portal Coder sweeps 30 min out of phase, auto-restarts Navi if down

## If Navi Misses Context
- Paste error text (image OCR not live yet)
- Tag Navi AND include ticket number: `@Navi #1665 user says agent isn't responding`

## The Loop
1. Mod escalates → Navi tags + PD picks up
2. PD works it → PD asks via bus if needed
3. Navi posts question in channel → mod relays user's answer with `!answer`
4. PD closes → Navi updates Cassie every 30 min