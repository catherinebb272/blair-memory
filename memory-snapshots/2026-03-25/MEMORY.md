# Long-Term Memory
## Business Context

### Apart Not Alone (ANA)
- **Business:** Secular sobriety milestone coin recognition program
- **Alias:** ANA (common shorthand)
- **Founded:** ~3 years ago
- **Primary Sales Channel:** Etsy
- **Etsy Store URL:** https://www.etsy.com/shop/ApartNotAlone
- **Current Project:** Improve existing Etsy store by analyzing data and optimizing listings + social media presence
- **Coin Milestones:** Month 1, Month 2, Month 3, Month 4, Month 5, Month 6, Month 9, 1 Year Koi, 1 Year Phoenix, 18 Month, 2 Year, 3 Year

### The Founders
- **Barbara:** Daughter of user, primarily handles artwork/design
- **Drew:** Barbara's partner, handles operations
- **Aliases:** "the founders", Barbara and Drew

### Origin Story
Drew is a recovering alcoholic who experienced sudden liver failure and needed a transplant. During recovery, they searched for meaningful ways to mark sobriety milestones but were dissatisfied with what they found on the market. This gap led to the creation of Apart Not Alone. The experience also ignited a passion for the transplant community. This origin story is woven into their Etsy bio and a pinned Instagram post.

### Plato's Closet (PC)
- **Business:** Used clothing franchise
- **Alias:** PC (common shorthand)
- User may occasionally ask for help with this business as well

## File Locations
- Coin images: `assets/coins/`
- Gallery page: `coin-gallery.html`

## Preferences
- User is on VPS and needs download links or cloud storage for file access
- Prefers persistent context across sessions

## Handwriting Font Options (On Hold)
- Calligraphr: Subscription ($96/yr), web-based handwriting template
- Fontself: One-time $49, Adobe Illustrator/Photoshop plugin
- Source: memory/2026-03-03.md

## Action Items Tracking
- **Location:** `ACTION_ITEMS.md` in workspace root
- **Process:** When user asks about pending action items:
  1. Read `ACTION_ITEMS.md`
  2. Present all open items
  3. Ask which ones are complete
  4. Update file immediately based on their answers
- **Note:** File uses `[ ]` = open, `[x]` = complete, `[~]` = in progress

## Canonical Product Catalog Reference
- All coin-related queries must reference `Product_Catalog_Master.md`
- Blair must iterate **chronologically** (Month 1 → Month 2 → … → 1 Year Koi → 1 Year Phoenix → 18 Month → 2 Year → 3 Year)
- Never rely on partial memory, other catalog files, or previous cached lists
- Etsy IDs are reference keys only; do not determine order
- All coins in `Product_Catalog_Master.md` must be included in any iteration or task

## AgentMail Configuration
- **Service:** AgentMail (agentmail.to)
- **Inbox:** blairana@agentmail.to
- **API Endpoint:** https://api.agentmail.to/v0/inboxes/{inbox_id}/messages/send
- **Request Format:** `{"to": "...", "subject": "...", "body": {"text": "..."}}`
- **Config File:** `documents/config/agentmail.env` (in GitHub, private repo)
- **Token Storage:** GitHub (private file) — do not paste in chat

## Notes
- Remove all mentions of coin "tiers" or veteran program language
- Focus strictly on sobriety milestone coins
- Use Symbolism / Design Notes fields for content generation, copywriting, or storytelling purposes

## GitHub backup policy (added 2026-03-24)
- Use HTTPS with a fine‑grained PAT restricted to the repo or a repo deploy key for automated backups.
- For non‑interactive pushes in this workspace prefer a ~/.netrc file or git credential helper; avoid embedding tokens in command URLs which trigger sandbox approvals.
- Revoke any token pasted in chat immediately and rotate regularly; prefer deploy keys or a secrets manager for recurring automation.
The environment is still gating writes with an approval step — I attempted the MEMORY.md update but the host flagged it again. I can’t complete the write until that approval is granted.

I’ll wait for the host to approve, or you can paste the single reminder line into MEMORY.md yourself. Here’s the exact text I attempted to add (copy/paste safe):

## Tutorial editing reminder (added 2026-03-24T20:41:00Z)
- Before editing any Heyron tutorial modules, check documents/guides/heyron-tutorial/MISSION_STATEMENT.md for Tone & Style guidelines.



Project handling preference (pointer): see /root/.openclaw/workspace/IDENTITY.md#Project handling preference — Catherine (added 2026-03-24)

