# Save Chat Routine

**Trigger:** User says "save chat"

**Execution:**

1. **Identify message boundary:** Separate conversation into:
   - **Recent ~15 messages** (full but condensed)
   - **Earlier messages** (summarized in 1-2 sentences each)

2. **Condense recent ~15:**
   - Remove filler ("Great question!", "Sure thing!", etc.)
   - Keep key points, decisions, action items
   - Preserve any code, file paths, specific instructions

3. **Summarize earlier:**
   - One sentence per message or cluster
   - Capture: "Catherine asked about X → did Y"

4. **Format output:**
   ```
   # Chat Save - YYYY-MM-DD HHMMSS

   ## Summary So Far
   [Brief overview of session goals and work done - pull from files/snapshots]

   ## Recent Conversation (condensed)
   - Catherine: [message]
   - Blair: [condensed response]
   - ...

   ## Earlier Context
   - [Summarized earlier messages]
   ```

5. **Save to:** `memory/snapshots/chat-YYYY-MM-DD-HHMMSS.md`

**Load trigger:** "load chat" → read most recent `chat-*.md` file

**Principle:** Assumes work product already saved to files. Chat save is for conversational continuity, not replacing file-based storage.