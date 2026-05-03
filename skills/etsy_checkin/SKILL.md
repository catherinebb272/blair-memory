# Etsy Check-in Skill

**Purpose:** Mon/Wed/Fri check-in workflow for Apart Not Alone Etsy store.

**Trigger:** Cron (M/W/F 1pm Chicago) or manual request

**Workflow:**
1. Collect screenshots from Catherine (orders, messages, reviews)
2. Parse order details (milestone, personalization, due date, customer)
3. Suggest handwritten note from `templates/handwritten_notes.md`
4. Draft review responses using `templates/review_responses.md`
5. Update `templates/review_tracking.md`
6. Post formatted alert to Discord #general channel tagging @kaliodyme

**Files:**
- `workflow.md` - Full procedure
- `templates/review_responses.md` - Review response templates
- `templates/handwritten_notes.md` - Note variations by milestone
- `templates/review_tracking.md` - Review log
- `scripts/reminder.sh` - Placeholder script

**Discord Channels:**
- Alert channel: 1481691069878894702
- Drew user ID: 163139270515752960

**Usage:**
Run workflow manually or via cron. Collect screenshots from Catherine, process, post to Discord.

**Related Skills:**
- discord - For posting alerts
- agentmail - For email triggers (optional)