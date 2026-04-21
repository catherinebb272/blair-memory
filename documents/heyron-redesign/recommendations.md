# Heyron Redesign Recommendations

## Priority List

### #1: TheDen — Convert JS Tabs to Real Pages
**Problem:** TheDen (thedenheyron.com) uses JavaScript tabs with no actual URLs. This means:
- Can't share direct links to specific sections
- No SEO value for individual pages
- Poor user experience (must click through to find content)

**Recommendation:** Convert tabbed interface to real HTML pages with proper URLs:
- `/welcome` or `/index`
- `/getting-started`
- `/guides`
- `/training`
- `/prompts`
- `/terms`
- `/about`
- etc.

**Benefits:**
- Shareable links
- SEO optimization
- Better accessibility

---

### #2: Link Fix — Catherine's Tutorial Goes to Module 8 Instead of Start
**Problem:** When clicking "Catherine's Tutorial" from TheDen Training tab, it redirects to Module 8 instead of the starting module.

**Recommendation:** Fix the link to point to the tutorial index/start page.

---

### #3: Tutorial Descriptions — Catherine's vs Reb-Elle's
**Problem:** Users can't differentiate between the tutorial options shown in TheDen Training tab.

**CRITICAL ISSUE - Hardcoded vs Live-Linked Tutorials:**
- "Catherine's Tutorial" is a live link to her GitHub — updates automatically when she pushes changes
- "Reb-Elle's Tutorial" and "Heyron Tutorial" are hardcoded/statically written in TheDen
- Hardcoded tutorials are not current, rewritten versions that are less thorough than Catherine's
- Users have reported preferring Catherine's tutorial when they compare
- Some users struggle with the hardcoded versions and don't say anything

**Recommendation - Proposed Solution:**
- Link each tutorial item in Training & Setup Guides to a dedicated GitHub Pages URL
- Style the GitHub Pages to match TheDen aesthetic (CSS theming)
- Use `target="_blank"` on links so users don't lose TheDen
- This gives you live updates while maintaining visual consistency
- **Blair will handle the redesign/CSS work** to make GitHub Pages blend seamlessly

**Fallback options:**
- If aesthetic matching is too complex, clearly label which tutorials are current/live vs static
- Or remove hardcoded ones entirely and link only to Catherine's tutorial with a note

**Recommendation:** Add brief descriptions:

| Tutorial | Focus | Best For |
|----------|-------|----------|
| **Catherine's Tutorial** | Quickstart guide — get up and running fast. Practical, step-by-step setup from zero to working agent. | New users who want fast results |
| **Reb-Elle's Tutorial** | Philosophical approach with wider view of working with an Agent. Deeper concepts and broader perspective on agentic AI. | Users who want to understand the "why" behind the setup |

---

### #4: Agent Library Index
**Problem:** Agent Library (heyron-ai.github.io/agent-library) has 123 tutorials, 52 personas, 15+ skills — but no index. Search-only navigation makes it impossible to browse what's available.

**Recommendation:** Create an index/landing page that shows:
- Category list (Getting Started, Connect, Memory, Troubleshooting, etc.)
- Featured/popular tutorials
- Link to personas section
- Link to skills section

---

### #5: Streamline "How to Get Started"
**Problem:** "How to Get Started" section on TheDen contains 8 steps that overlap with tutorials. When content exists in multiple places, it gets out of sync.

**Recommendation:** 
- Tighten to minimal: Sign up → Connect → Join Discord
- Link to full tutorials for detailed setup
- Single source of truth principle

---

### #6: Delete Guides Tab — Merge into Prompts
**Problem:** Unclear distinction between "How-To Guides" (tab on TheDen) and "Tutorials" (linked from Training tab).

**Additional Issue:** "Prompts That Work" tab appears to duplicate content from "How-to-Guides" tab. Both seem to serve similar purpose (prompt templates, reference content).

**Recommendation:**
- Delete How-To Guides tab entirely
- Merge useful content into Prompts tab
- Keep Tutorials as separate step-by-step modules (Catherine's, Reb-Elle's)

---

### #14: How-To Guides — Add Prerequisites to Examples (or delete if merging to Prompts)
**Problem:** How-To Guides include prompts for tasks that assume significant prior setup (calendar integration, video generators, etc.). Users following these guides may hit dead ends or get frustrated when the agent can't perform the task because integrations aren't connected.

**Recommendation:**
- Review each guide and add prerequisites (what needs to be set up first)
- OR create beginner-focused guides that assume no integrations yet
- OR add a "Prerequisites" section/accordion to each guide
- Better: separate beginner guides from advanced guides

---

### #7: Personas Location
**Problem:** 52 personas exist but are only findable via search in Agent Library.

**Recommendation:** Create a dedicated personas section with:
- Browsable index (not just search)
- Categories/filters (by use case, tone, specialty)
- Links from main onboarding flow

---

### #8: Content Weighting — What's Primary vs Secondary
**Problem:** Everything shows equally on the main nav — starter content buried among reference content.

**AI Terms & Tools** page (screenshot 07) should be nested below main topics as secondary content, not a primary tab. It's reference/glossary material, not core onboarding.

**Meet Robby** page (screenshot 08):
- Inconsistent styling compared to other pages (looks different, though colors match)
- Since Robby is the founder, should live in main group of tabs, not secondary
- Recommend unifying styling to match the rest of TheDen

**Recommendation:**
- **Primary (visible first):** Getting Started, Connect, Join Community
- **Secondary (under "More" or "Resources"):** Prompt templates, AI terms, guides
- New users shouldn't see "Make a Google Sheet" prompts before they've set up their agent

---

### #9: Unified Navigation
**Problem:** Multiple entry points (TheDen, Agent Library, tiiny.site, GitHub Pages) with inconsistent navigation.

**Recommendation:** Single navigation menu across all properties:
- Quick Start → Links to Catherine's tutorial
- Tutorials → Index of all tutorial options
- Reference → Terms, guides, dashboard docs
- Troubleshooting → Link to Agent Library troubleshooting section

---

### #10: FAQ Restructuring — Grouping + Troubleshooting Separation
**Problem:** FAQ page has two issues:
1. **No grouping** — 9 questions in a flat list. Users must scan all to find relevant one. Standard UX expectation is categories (Billing, Getting Started, Troubleshooting).
2. **Mix of FAQ and troubleshooting** — "My agent sounds generic. How do I fix it?" is a troubleshooting question, not a typical FAQ. Edit risk: if process changes, editing needed in multiple places.

**Recommendation:**
1. **Group FAQ into categories:**
   - Getting Started
   - Billing & Account
   - Privacy & Security
   - Troubleshooting
2. **Move troubleshooting-specific questions to dedicated Support page:**
   - "My agent sounds generic" → link to robust Support/Troubleshooting page
   - "What if something breaks?" → link to Support page
   - This follows single source of truth — one place to update if process changes
3. **Support tab (proposed):** Expandable sections by category, each linking to deeper docs/Agent Library as needed

---

### #11: Duplicate FAQ Content
**Problem:** Security FAQs (4 questions) exist on the Security & Privacy page, but similar security questions also appear on the main FAQ page ("Is my data private?", "Can I export my data?"). This creates duplicate content to maintain.

**Recommendation:**
- Keep detailed security explanations on Security & Privacy page (core content: isolated containers, encrypted connections, file ownership, AI model privacy)
- Link Security page from main FAQ rather than duplicating Q&A
- Or consolidate all security-related FAQs to one location and link from the other
- Single source of truth principle

---

### #12: Resources Page — Remove Redundant Internal Links
**Problem:** Resources page includes "heyron links" section with Join The Den, Connect Agent, heyron.ai — all of which are already in primary navigation. Redundant.

**Recommendation:**
- Keep only "Free AI Courses" section (external learning resources)
- Remove internal heyron links from this page
- Page becomes true external resources, not internal navigation

---

### #18: All Content Is Hardcoded — No CMS
**Problem:** TheDen is a static HTML page with all content hardcoded inline. Tab switching is done with JavaScript show/hide. No database, no CMS, no separate content files. This means:
- Content updates require code changes (not ideal for non-developers)
- Can't share direct links to specific pages
- Limited SEO value
- No easy way to A/B test or manage content at scale

**Recommendation:**
- Consider a lightweight CMS or markdown-based system for content management
- This would allow non-developers to update content without touching code
- Alternative: Keep static but use include files / markdown that can be edited more easily

---

### #17: Onboarding Steps Must Match Reality
**Problem:** "How to Get Started" page has 8 steps that may not match the actual onboarding flow. Some steps could be outdated or inaccurate.

**Recommendation:**
- Audit each step against the actual onboarding experience
- Verify each step still works in current flow
- Update or remove outdated steps
- Simplify to match actual user journey

---

### #16: New Tab Structure — 2-Tier Navigation
**Proposed Site Structure:**

**Tier 1 (Primary Tabs):**
| # | Tab | Notes |
|---|-----|-------|
| 1 | What Is Heyron | Renamed from Welcome |
| 2 | How to Get Started | Simplified: Sign Up → Connect → Join Community → link to tutorials |
| 3 | Training | Tutorial options with thumbnails |
| 4 | Prompts | Consolidated from Prompts That Work |
| 5 | The Den | Discord community |
| 6 | FAQ | Grouped by category |
| 7 | Support | New dedicated tab (from The Den page) |

**Tier 2 (Secondary / "More" dropdown or footer):**
| # | Tab | Notes |
|---|-----|-------|
| 8 | AI Terms & Tools | Glossary — reference content |
| 9 | Meet Robby | Founder story + photo |
| 10 | Security & Privacy | Security policy |
| 11 | Business Inquiries | Tier 2, link from FAQ |
| 12 | Resources | External learning only |
| 13 | Love | Testimonials |

**Recommendation:**
- Implement 2-tier nav: primary visible tabs + secondary in "More" dropdown or footer
- Move reference/content pages (Terms, Business, Resources, Love) to tier 2
- Support gets its own primary tab instead of being buried in The Den
- This follows user journey: discover → get started → learn → get help

---

### #15: Pages Are Too Text-Heavy — Add Visual Elements
**Problem:** TheDen pages are almost 100% emojis and text, minimal images. Doesn't match modern web design expectations.

**Recommendations:**
- **Ron the Raccoon:** Add to "Meet Robby" (founder page — natural spot). Could also appear in nav logo or Welcome header.
- **Welcome / What Is Heyron:** Hero image/illustration showing the agent concept
- **How to Get Started:** Replace text steps with horizontal progress chart (6 steps showing: Sign Up → Connect → Join Community → First Tutorial → etc.)
- **The Den:** Add Discord mockup or community preview screenshot
- **Training:** Add thumbnail cards with short descriptions for each tutorial option (Catherine's, Agent Library, Reb-Elle's) — visual differentiation
- **Meet Robby:** Include photo of Robby (he's all over social media, not shy). Currently flagged for styling inconsistency — fix styling AND add photo.
- **Security & Privacy:** Upgrade icons to illustrations or diagrams (isolated containers, encryption visualization)

---

### #13: Rename "Welcome" Tab to "What Is Heyron"
**Problem:** Current "Welcome" tab is actually an explainer page about agentic AI conceptually ("What Is Heyron", "Who Is This For"). This confuses the purpose — a "Welcome" page should feel like a warm handoff to signed-up users, not an explainer for prospects.

**Recommendation:**
- Rename "Welcome" → "What Is Heyron"
- Use the freed-up "Welcome" name/space for actual onboarding content: getting started, community intro, next steps
- This follows user expectation: new users expect to learn about the product elsewhere, then get welcomed and guided once signed up

---

### #11: New Top-Level Tab — Support
**Proposed addition based on "The Den" page redesign:**
- Replace buried "How to Get Support" section with dedicated top-level tab
- Clean, organized support landing page
- Categories: Self-Service Docs → Community → Ticket → Direct Contact
- Link to rather than duplicate troubleshooting content

---

### #19: Where to Put "How I Built It" Examples?
**Problem:** Catherine has created detailed project tutorials ("How I Built It") showing how to use Heyron for specific projects (e.g., animated avatar, family memoir audio). These are valuable examples that prospective and current users would benefit from, but there's no clear place to host or link them.

**Current state:** Tutorials live in Catherine's GitHub repo but aren't prominently linked from TheDen.

**Recommendation:**
- Option A: Add "How I Built It" as a sub-section under Training tab
- Option B: Create new "Projects" or "Examples" tab showing completed projects with brief descriptions
- Option C: Include in Agent Library as a special category
- Best fit: Training tab makes most sense — these are advanced tutorials showcasing what's possible

---

### #20: Agent Library Aesthetic Mismatch
**Problem:** Agent Library (heyron-ai.github.io/agent-library) has a different visual design than TheDen. The color scheme, typography, and layout feel disconnected from the main Heyron property, creating a fragmented brand experience.

**Recommendation:**
- Apply TheDen's visual theme/CSS to Agent Library
- Match colors, fonts, button styles, spacing
- Consider Agent Library as a subdomain that should inherit main brand identity
- This is a CSS/htheming task Blair can handle

---

## Notes
- This is a recommendations list for the Heyron team (Robby, Cassie, Carolyn)
- Catherine cannot make changes directly — only recommendations
- Prioritization can be adjusted as needed