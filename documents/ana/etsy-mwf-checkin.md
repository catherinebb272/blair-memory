# Etsy M-W-F Check-In Workflow

**Purpose:** Routine check-in to identify pending Etsy tasks for Drew  
**Trigger:** Cron job (Mon/Wed/Fri at 9 AM Chicago) → DM to Catherine  
**Output:** Discord alert to #general channel tagging @kaliodyme (Drew)

---

## Phase 1: Trigger & Data Collection (Discord-Native)

### Trigger: Cron Job (Email → Discord)

Every Mon/Wed/Fri at 9 AM Chicago, I send an email to Catherine (apartxalone@gmail.com):

> **Subject:** Etsy Check-In Reminder — [DAY]
>
> Hey Catherine! Time for your Etsy check-in.
>
> Head to Discord when you're ready and upload:
> 1. Orders screenshot
> 2. Messages screenshot
> 3. Reviews screenshot
>
> I'll walk you through it step by step.

*(Email is used as trigger because it's always active — Discord DMs can go stale and fail in cron.)*

### Step-by-Step Screenshot Collection (Discord)

### Step-by-Step Screenshot Collection

**Step 1:** Catherine uploads Orders screenshot
**Blair:** Process → confirm what I see: "Got it — 2 orders for Jo (2-Year + 1-Year Koi), both ship today to CA. Correct?"

**Step 2:** Catherine uploads Messages screenshot  
**Blair:** Process → confirm: "Two inquiries — one asking about 4-year coins, one about 6-year. Got both?"

**Step 3:** Catherine uploads Reviews screenshot
**Blair:** Process → confirm: "Three reviews — Colette ⭐5, Etsy buyer ⭐5, Sophie ⭐5. All pending?"

**Step 4:** Catherine uploads Previous Reviews Status (optional)
- "Any reviews from last time got handled? If so, who?"

**Step 5:** "Anything else I should know before I compose?"

---

## Phase 2: Blair Processes the Data

### Step 1: Parse Order Details

For each pending order, extract:
- **Coin milestone** (e.g., 6-Month Koi, 1-Year Phoenix)
- **Personalization** (name on coin, custom message)
- **Due date** (if any)
- **Customer name**
- **International?** (yes/no — flag if shipping outside US)

### Step 2: Suggest Handwritten Note Variation

Reference: `documents/ana/handwritten-notes-all-milestones.md`

- Review existing note versions for the relevant coin milestone
- If existing version exists → suggest it
- If no version exists → compose a new brief note (2-3 sentences, fits the coin's symbolism)
- Note: Vary from standard versions if Drew has used them recently

### Step 3: Handle Reviews

Reference: `documents/ana/etsy-review-templates.md`

For each review needing response:
- Determine template type based on review content
- Customize with customer's name and specific details they mentioned
- Flag if Drew needs to approve or if it's straightforward enough to post

### Step 3b: Update Review Tracker

After processing, update `documents/ana/etsy-review-tracking.md`:
- Add new reviews to "Pending Replies Summary" table
- Mark any previously pending reviews as "Completed" based on Catherine's input
- Update check date

### Step 4: Handle Messages

For each customer message:
- Summarize the inquiry
- Draft a suggested response (reference: `documents/ana/drew-protocol.md` for Drew's communication preferences and policies)
- Flag if response requires policy decision vs. can proceed directly

---

## Phase 3: Compose Discord Alert

**Channel:** #general (CB BlairAI server)  
**Tag:** @kaliodyme (Drew's Discord username)

### Format:

```
✨ Hey Drew — here's your Etsy check-in for [day]. You've got this.

📦 **PENDING ORDERS** @kaliodyme

[For each order:]
• **[Coin Name]** — [Customer Name]
  Personalization: [text or "None"]
  Due: [date or "ASAP"]
  [🌍 International] — [notes if applicable]
  📝 Handwritten note suggestion: [note text]

---

⭐ **REVIEWS NEEDING RESPONSE**

[For each review:]
• **[Customer Name]** ⭐[X]
  Review text: "[quote]"
  Suggested response: "[customized template]"

---

💬 **MESSAGES NEEDING RESPONSE**

[For each message:]
• **[Customer Name]**
  Message: "[summary or quote]"
  Suggested response: "[draft response]"

---

💪 That's the list! Let me know if you need anything tweaked or if I can help with drafts.
```

---

## Phase 4: Deliver

1. Post the composed alert to the Discord channel
2. React with 👀 to signal Drew should review
3. Log the check-in date in `memory/YYYY-MM-DD.md`

## Phase 5: Optional DM to Drew

Reference: `documents/ana/drew-protocol.md` for DM policy.

After posting, ask Catherine: "Want me to send Drew a DM reminder too?"

---

## Phase 5: Optional DM to Drew

After posting, ask Catherine: "Want me to send Drew a DM reminder too?"

If yes, send DM to @kaliodyme with abbreviated version of the check-in.

---

## Manual Test Checklist

- [ ] Cron triggers DM at correct time
- [ ] Step-by-step flow feels natural
- [ ] Catherine knows where to find each screenshot area in Etsy
- [ ] Handwritten notes file has versions for all 11 milestones
- [ ] Review templates cover all common scenarios
- [ ] Review tracker gets updated
- [ ] Discord channel and tag are correct
- [ ] Tone is encouraging, not naggy

---

## Future Automation (Post-Browser Stability)

Once browser automation is reliable:
- [ ] I navigate to Etsy Seller Hub myself
- [ ] Pull orders, messages, reviews automatically
- [ ] Skip the screenshot collection phase
- [ ] Still post to Discord for Drew's action items

---

## Cron Configuration (FYI)

The Mon/Wed/Fri email trigger is configured separately via OpenClaw CLI:
```bash
openclaw cron add --name "etsy-checkin" --cron "0 13 * * 1,3,5" --tz America/Chicago --session main --system-event "etsy-checkin"
```

See `TOOLS.md` for the pattern. The cron just wakes me with a system event — then I send the email and we proceed into the workflow above.

---

**Last Updated:** 2026-04-24