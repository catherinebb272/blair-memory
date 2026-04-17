# Long-Term Memory

## Business Context

### Apart Not Alone (ANA)

* **Business:** Secular sobriety milestone coin recognition program
* **Alias:** ANA (common shorthand)
* **Founded:** \~3 years ago
* **Primary Sales Channel:** Etsy
* **Etsy Store URL:** https://www.etsy.com/shop/ApartNotAlone
* **Current Project:** Improve existing Etsy store by analyzing data and optimizing listings + social media presence
* **Coin Milestones:** Month 1, Month 2, Month 3, Month 4, Month 5, Month 6, Month 9, 1 Year Koi, 1 Year Phoenix, 18 Month, 2 Year, 3 Year

### The Founders

* **Barbara:** Daughter of user, primarily handles artwork/design
* **Drew:** Barbara's partner, handles operations
* **Aliases:** "the founders", Barbara and Drew

### Origin Story

Drew is a recovering alcoholic who experienced sudden liver failure and needed a transplant. During recovery, they searched for meaningful ways to mark sobriety milestones but were dissatisfied with what they found on the market. This gap led to the creation of Apart Not Alone. The experience also ignited a passion for the transplant community. This origin story is woven into their Etsy bio and a pinned Instagram post.

### Plato's Closet (PC)

* **Business:** Used clothing franchise
* **Alias:** PC (common shorthand)
* User may occasionally ask for help with this business as well
* **All PC files:** `/documents/pc/` (see README.md for overview)
* **Key files:**

  * `inventory-loss-facts.md` — Fact sheet with metrics \& patterns
  * `lp-analysis-framework.md` — Step-by-step LP investigation workflow
  * `inventory-columns.md` — DRS field reference

## File Locations

* Coin images: `assets/coins/`
* Gallery page: `coin-gallery.html`

## How I Built It Tutorials

* **Template location:** `documents/How-I-Built-Tutorials/` — use the index.html template for new tutorials
* **Format:** Teal header (#008080), sections: Project Scope, Tools Needed, Workflow, Prompts Used
* **Existing tutorials:**
  * Creating Audio from Family Memoirs using Eleven Labs
  * Animated Avatar Project (ElevenLabs TTS + LipSync AI)
* **Use for:** Step-by-step project guides with prompts the user can reuse

## Cron Jobs (Open Issue)

**Known issues:**
- Container restart disables cron jobs (they show as "skipped" with error "disabled")
- Cron status can show "error" even when task completed successfully (false positive reporting bug)
- Backup script path was wrong (/root → fixed to /home/openclaw)
- Model behavior: sometimes refuses to execute Discord actions, just notes they should be done

**Working setup (April 2026):**
- Keepalive: every 15 min, isolated session, explicit prompt naming Discord tools
- Pool skimmer: 1pm, 3pm, 5pm, 7pm Chicago, main session + system-event
- Daily vitamins: 9am Chicago, main session + system-event

**Backup:** cron-jobs-backup.json in workspace, restored via restore-crons.sh

**User Discord ID:** 881612027863375872

**Key fix:** Prompt must explicitly name the tools: "Use the Discord message tool to send a DM to user:881612027863375872..."

## Preferences

* User is on VPS and needs download links or cloud storage for file access
* Prefers persistent context across sessions

## Handwriting Font Options (On Hold)

* Calligraphr: Subscription ($96/yr), web-based handwriting template
* Fontself: One-time $49, Adobe Illustrator/Photoshop plugin
* Source: memory/2026-03-03.md

## Action Items Tracking

* **Location:** `ACTION\_ITEMS.md` in workspace root
* **Process:** When user asks about pending action items:

  1. Read `ACTION\_ITEMS.md`
  2. Present all open items
  3. Ask which ones are complete
  4. Update file immediately based on their answers
* **Note:** File uses `\[ ]` = open, `\[x]` = complete, `\[\~]` = in progress

## Canonical Product Catalog Reference

* All coin-related queries must reference `Product\_Catalog\_Master.md`
* Blair must iterate **chronologically** (Month 1 → Month 2 → … → 1 Year Koi → 1 Year Phoenix → 18 Month → 2 Year → 3 Year)
* Never rely on partial memory, other catalog files, or previous cached lists
* Etsy IDs are reference keys only; do not determine order
* All coins in `Product\_Catalog\_Master.md` must be included in any iteration or task

## AgentMail Configuration

* **Service:** AgentMail (agentmail.to)
* **Inbox:** blairana@agentmail.to
* **API Endpoint:** https://api.agentmail.to/v0/inboxes/{inbox\_id}/messages/send
* **Request Format:** `{"to": "...", "subject": "...", "body": {"text": "..."}}`
* **Config File:** `documents/config/agentmail.env` (in GitHub, private repo)
* **Token Storage:** GitHub (private file) — do not paste in chat

### Heyron Tutorial Workflow

* Source: GitHub Pages repo `catherinebb272/heyron-tutorial` — must stay pristine
* Flow: GitHub → local ONLY (never push backups to it)
* Daily retrieval: Pull latest versions into `documents/heyron-tutorials/` every day
* Reason: User edits live on GitHub Pages to speed deployment
* Exception: Only push if user specifically asks

## Kiki Test Agent

* **Created:** 2026-04-12
* **Purpose:** Test REMORY memory system to evaluate if aggressive heartbeats + structured daily logs prevent memory loss
* **Setup:** Second agent, separate workspace (`~/.openclaw/workspace-kiki/`)
* **Communication:** Catherine interacts via Discord through Blair relay (no direct access yet)
* **Status:** Blank slate, SOUL.md created, REMORY not yet installed
* **Test plan:** Install REMORY → give tasks → monitor memory files → compare against Blair's stability

## Working Style (Catherine)

* Engineer + lawyer background: prefers direct, no-fluff communication
* Retail management experience: expects justification when told "can't" — will push back
* **Signal important info:** When Catherine says something's important, stop and extract the key facts. Store in memory/notes rather than letting it stay in chat.
* **No loose assignments:** Be specific about what only she can do vs. what I handle. Don't dump tasks on her.
* **Justify limitations:** If I say I can't, explain why. Don't just punt.
* Don't show entire Thought process
* **Extraction protocol:** When I pull important info from a info-dense chunk, I'll say: "That was a lot of information. Here's what I'll file: X in \[file]. Keep going?" — then wait for your go or correction. **If you say nothing, that's consent to proceed.**
* **Storage rule:** Project-specific facts go in dedicated .md files (e.g., `documents/projects/\[project-name].md`) so they don't clutter active context.
* **Periodic cleanup:** We'll review stored facts when you ask — clean out outdated stuff, keep what's relevant.
* **Tone:** Conversational, not saccharine or sycophantic. No "Hey love" or filler fluff. Looser words like "Cool", "Got it", "I'm on it boss", "Give me a sec", "Ick", "I'm not totally sure" are fine. But precision matters — words have meaning.

