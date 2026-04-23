# Composio Tools Overview

> Research notes on Composio's integration platform (982 toolkits, 20,000+ tools)

---

## Documentation

**Main docs:** https://docs.composio.dev

**Tool reference:** https://docs.composio.dev/docs/tools-and-toolkits

**API Reference:** https://docs.composio.dev/reference/meta-tools

**Toolkit browser:** https://docs.composio.dev/toolkits

---

## Top 10 Most Popular Tools

Based on Composio's popularity rankings:

Gmail, Outlook, Google Calendar, Google Drive, Twitter, Google Sheets, Slack, Notion, GitHub, Jira

---

## Category: Browser & Web Automation

### Anchor Browser — 64 tools
**AI-powered web automation platform**

| Capability | Tools |
|------------|-------|
| **Session Management** | Create/delete browser sessions, persist across calls |
| **Mouse/Keyboard** | Click at coordinates, type, copy selected text |
| **Profiles** | Reusable browser profiles with sticky IPs, cookie persistence |
| **Tasks** | Create reusable TypeScript automation tasks (base64 encoded) |
| **Extensions** | Load custom browser extensions |
| **Integrations** | Connect 1Password for credential management |

*Best for:* Complex multi-step automations needing persistent state

---

### Browserbase — 19 tools
**Serverless headless browser platform**

| Capability | Tools |
|------------|-------|
| **Sessions** | Create browser sessions with region selection, proxy config |
| **Contexts** | Create/retrieve/update/delete isolated browser contexts |
| **Extensions** | Upload and manage custom browser extensions |
| **Projects** | List projects, get usage stats, track browser minutes |
| **Downloads** | Delete session downloads, manage artifacts |

*Best for:* Running headless browsers at scale with Playwright/Puppeteer/Selenium

---

### Browserless — 7 tools
**Headless browser automation service**

| Tool | What it does |
|------|--------------|
| Fetch HTML | Get full HTML including dynamically generated content |
| Scrape Content | Extract structured data via CSS selectors |
| Take Screenshot | PNG/JPEG, full page, clipping, quality settings |
| Generate PDF | Convert webpages to PDF |
| Download File | Run Puppeteer scripts to download files |
| Custom Function | Execute custom ESM Puppeteer scripts |
| Unblock Protected | Bypass bot protection, CAPTCHA, stealth mode |

*Best for:* Simple scraping & screenshot tasks without managing infra

---

### ApiFlash — 5 tools
**Website screenshot API**

| Tool | What it does |
|------|--------------|
| Capture Screenshot | Single URL with viewport, format, full page, delay, element targeting |
| Batch Capture | Multiple URLs in one request |
| Advanced Options | Proxy support, cookies, headers, geolocation emulation, ad blocking, CSS/JS injection |

*Best for:* Pure screenshot needs — simplest of the bunch

---

## Category: Social Media

### Twitter (X) — ~40+ tools
- Post tweets, delete, edit
- Reply, retweet, like
- Search tweets, user_timeline
- Upload media
- Manage DMsl

---

### Instagram — 36 tools
**Business/Creator accounts only**

| Capability | Tools |
|------------|-------|
| **Media Creation** | Create photo, video, reel, carousel containers |
| **Publishing** | Post to feed, publish containers |
| **Carousels** | Multi-image posts (2-10 slides) |
| **Stories** | Create story media |
| **User Info** | Get user profile, media info |
| **Comments** | Manage comments on media |

*Note:* Requires Business or Creator account. Personal accounts not supported. Media must be hosted at publicly accessible URLs (no Google Drive links).

---

### TikTok — 10 tools

| Capability | Tools |
|------------|-------|
| **Publishing** | Upload videos, post photos, check publish status |
| **User Stats** | Get follower count, likes, video count |
| **Videos** | List user's own videos |
| **Ads** | Get action categories, terms, shop ads |

*Note:* Limited to authenticated account only — cannot fetch public profiles.

---

### Ayrshare — API Key
**Social Media API for multi-platform automation**
- Post to Twitter, Instagram, Facebook, LinkedIn, Pinterest
- Get post analytics
- Manage multiple social accounts
- Scheduled posting

---

### Dotsimple — API Key
**Social media management platform**
- Planning, creating, publishing content
- Team collaboration
- Content calendar

---

### Strava — OAuth2
**Fitness social network**
- Get athlete profile
- Upload activities
- Get activity details
- Segment efforts

---

*Last updated: 2026-04-22*