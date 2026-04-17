# TechTalk with Robby - April 15, 2026

## Notes (Part 1)

### 1. Personality
- Continuing conversation about how an agent builds personality and importance of human-style conversation
- Robby referenced the persona library at thedenheyron.com

### 2. Main Files
- **Soul.md** - where personality gets stored
- **Tools.md** - connection info (email, GitHub, etc.)
- Discussion about rewriting key files like Soul.md
- Robby and Cassie agreed: best approach is to put file on screen and talk agent through changes vs. nuclear option of wiping and starting over

### 3. Memory
- Ongoing discussion about memory problems and importance of new sessions
- Robby likes to stop regularly and have his agent save what they've been discussing
- "New sessions aren't bad - they make your agent better"

### 4. Reading Recommendations
- Last week: "The Pragmatic Programmer"
- This week: 
  - **BMad Method** (Breakthrough Method for Agile AI-Driven Development) - https://github.com/bmad-code-org/BMAD-METHOD
  - Clean Code
  - Code Complete
  - The Philosophy of Software Design

### 5. Robby's Announcements
- Switching backend support to **Kubernetes** (corrected from "Kubernedies") - should be much more stable
- In discussions with **Composio** to provide a large suite of tools for users (will take negotiations)
- Talking with **Agentmail** founder - agreed to do co-promotions

---

### 6. Cron and Heartbeat
- Heartbeat fires every 30 minutes inside OpenClaw UNLESS in active session
- Cron is technically supported in Heyron but people report problems, sometimes caused by overlapping cron jobs
- Robby agreed to do a live class on Cron, maybe in place of one of the Wednesday TechTalks soon

### 7. OpenRouter Key
- Can really extend agent capabilities by giving more model choices
- https://openrouter.ai
- For a small $10 payment, you get a ton of usage

### 8. Search and Browser
- BraveAPI is included in the Heyron subscription, individual keys not required
- But it breaks sometimes
- DuckDuckGo can provide better more stable browser access but still isn't able to do automation which needs more robust programs like Puppeteer
- Browser coming after the new web UI (not with it)

### 9. Common Support Ticket Issue
- People get disconnected from agent during Telegram config and then can't access self-help tools due to errors about login
- Only solution is a support ticket right now
- Robby will look at fixing the likely problem to prevent this

### 10. Other Events
- Still planning Wednesday night TechTalks and maybe weekend hangouts
- Cassie trying to organize a more social gathering place