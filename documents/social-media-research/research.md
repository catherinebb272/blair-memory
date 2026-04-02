# Social Media Research

## Project Overview
Research AI agent solutions for managing multiple social media accounts across three businesses.

## Business Accounts
- **Plaid Fox Resale**: Facebook, Instagram, TikTok (eBay resale, post brick & mortar closure)
- **Apart Not Alone**: Instagram, Pinterest (sobriety milestone coins)
- **Plato's Closet Lawrence**: Facebook, Instagram (franchise resale)

## Goals
- Speed/ease content creation
- Ease posting workflow
- Authentic content per brand
- Distinct brand style/tone per account

---

## Market Context
- AI social media market: **$2.69B (2025)** → **$11.37B projected** (growing rapidly)
- AI agents differ from basic automation: they plan, execute, and learn autonomously — like hiring a social media manager, not a freelancer

---

## Tools & Platforms

### All-in-One Platforms
| Tool | Key Features | Multi-Account Support | Best For |
|------|--------------|----------------------|----------|
| **Ocoya** | Scheduling, AI content creation, smart replies, DMs, analytics | Yes | Full-stack scheduling + creation |
| **Soshie** (Sintra.ai) | Autonomous posting, campaign planning, content generation | Yes | Hands-off management |
| **Lately** | Learns brand voice, generates dozens of platform-specific posts from long-form content | Yes | Brand voice training |
| **Beam AI** | Content recycling, scales across channels, maintains brand vision | Yes | Repurposing existing content |

### Agent Frameworks
| Tool | Notes |
|------|-------|
| **Lyzr Skott** | Fully autonomous agent, multi-brand setups, regional accounts, CRM/analytics integration |
| **n8n templates** | Multi-platform automation (7+ platforms), self-hosted, highly customizable |
| **Postiz** | Scheduling + posting across platforms, API-connected |

### Postiz Deep Dive

**Fee Structure**
| Plan | Price | Channels | Posts/mo | AI Images | AI Videos |
|------|-------|----------|----------|-----------|-----------|
| Standard | $29 | 5 | 400 | — | 3 |
| Team | $39 | 10 | Unlimited | 100 | 10 |
| Pro | $49 | 30 | Unlimited | 300 | 30 |
| Ultimate | $99 | 100 | Unlimited | 500 | 60 |

*All plans include: AI copilot, API, webhooks, Smart Agent, cross-posting, analytics, calendar view, RSS auto-post*

**Strengths**
- User-friendly: Intuitive interface, minimal onboarding
- Fast setup with guided onboarding
- AI writing helper gives good drafts (not starting from scratch)
- Smart Agent handles planning and execution
- All-in-one: scheduling, posting, analytics, team management

**Weaknesses**
- Limited customization for very specific needs (per some reviews)
- Post limits on lower tiers (400/mo on $29 plan)
- Self-hosting option available but can get pricey

**Tech-heavy?** No. Designed for content creators, not developers. Reviews consistently call it accessible with a guided setup.

**Verdict for your use case:** $29 Standard plan covers your 3 accounts (5 channels) with room to grow. Could upgrade to Team ($39) if you need unlimited posts.

---

### Outstand — Agent-Native API

**What it is:** Unified social media API built *specifically* for developers and AI agents. Not a dashboard tool — it's an API you call.

**Agent Integration:**
- MCP (Model Context Protocol) connector → direct connection to Claude, Cursor, Windsurf
- 25 tools for AI agents: post, schedule, reply, upload media, check analytics — all from conversation
- REST API for programmatic posting

**Platforms:** X, LinkedIn, Instagram, Facebook, TikTok, Threads, Bluesky, YouTube, Pinterest, Google Business (10 total)

**What You Supply vs. What They Supply**

*You supply:*
- API key
- Your content (text, images, video) in one format
- Which platforms/accounts
- Optional: bring your own OAuth credentials

*They supply:*
- OAuth handling (no developer apps needed)
- Rate limit management + automatic retries
- Media processing (format for each platform)
- Webhook events (post published, failed, comment)
- Analytics normalization (likes, shares, reach in one response)
- Timezone-aware scheduling

**Pricing**
- Base: **$5/month**
- Includes: 1,000 posts/month + unlimited accounts
- Overage: $0.01/post beyond 1,000
- No tiers, no seat licenses

*Your estimate: ~150-200 posts/mo across 3 accounts → $5-7/month*

**Pros**
- Single integration, one codebase
- Days/weeks to multi-platform vs. months
- Normalized data format across all platforms
- Built-in rate limits + retry logic
- MCP connector for AI agents — *exactly what you're looking for*
- <200ms avg latency, 99.9% SLA

**Cons**
- Vendor lock-in (they claim easy data export)
- Additional cost layer on top of platform API fees (but X/Reddit fees included in their price)
- Some platform features may lag (but they claim full feature support, not lowest common denominator)

**Tech-heavy?** Yes — this is an API, not a dashboard. But that's the point: it's built for me to call directly.

**Verdict for your use case:** This is the closest match to what you asked for — an API designed for AI agent integration. You'd connect your accounts, I'd generate content and call the API to post. Very low cost ($5-7/mo), scales with usage.

---

### Low-Code / Automation
- **Zapier + AI**: Connect social listening → content ideas → scheduling (Buffer, etc.)
- **StoryChief**: Brand voice setup, multi-platform posting, AI-generated suggestions

---

## Key Capabilities for This Use Case

### Must-Have
- Multi-account management (different logins/brands)
- Platform-specific content adaptation (TikTok ≠ Pinterest copy)
- Brand voice consistency (train on existing content)
- Scheduling with optimal timing

### Nice-to-Have
- Engagement/reply automation
- Performance analytics
- Content recycling from long-form source
- Cross-posting with platform tweaks

---

## Authenticity Considerations
- AI can maintain brand voice if trained on brand materials
- Key: Feed agent existing posts, brand guidelines, tone examples
- Human review layer still needed for authenticity
- Each account needs distinct prompt/persona configuration

---

## Relevant Reddit/Community Finds
- **OpenClaw + Postiz**: One user automating across 4 platforms using OpenClaw (agent memory for brand voice) → Postiz (scheduling/posting). Takes ~5 min/day vs 45+ min manual.
- Relevant because we're already in OpenClaw — could potentially integrate

---

## Next Steps
1. Determine budget (free tier vs paid)
2. Decide: all-in-one platform vs custom agent + posting tool
3. Test 1-2 tools with lowest friction (Postiz has free tier, Ocoya has trial)
4. Build brand voice profiles for each business
5. Set up posting workflow with human review gate

---

*Research date: 2026-03-31*