# Heyron Redesign — Design Parameters

Documenting design decisions and parameters for the redesign.

---

## Navigation Structure

### Proposed 2-Tier Navigation

**Tier 1 (Primary Tabs):**

| # | Tab | Purpose |
|---|-----|---------|
| 1 | What Is Heyron | Product explainer (renamed from Welcome) |
| 2 | How to Get Started | Simplified onboarding: Sign Up → Connect → Community → tutorials |
| 3 | Training | Tutorial options with thumbnails |
| 4 | Prompts | Consolidated prompt templates |
| 5 | The Den | Discord community |
| 6 | FAQ | Grouped by category |
| 7 | Support | New dedicated tab |

**Tier 2 (Nested under parent pages):**

| Parent | Nested Pages |
|--------|--------------|
| What Is Heyron | Security & Privacy, Meet Robby |
| Training | AI Terms & Tools, Resources |
| The Den | Love (Testimonials) |
| FAQ | Business Inquiries |

### Implementation Notes

- Nest where logical relationship exists
- Some pages can live at both levels (linked from parent, also accessible via footer or "More")
- User journey: discover → get started → learn → get help

---

## Visual Guidelines

### Images (from #15)

- Ron the raccoon on Meet Robby + nav logo
- Hero image on Welcome/What Is Heyron
- Horizontal progress chart on How to Get Started
- Discord mockup on The Den
- Tutorial thumbnails on Training
- Photo of Robby on Meet Robby page
- Diagrams on Security & Privacy

---

## Content Guidelines

### Single Source of Truth

- FAQ: one location, grouped by category
- Troubleshooting: link to Support page, don't duplicate
- Tutorials: link to live GitHub Pages, not hardcoded

### Onboarding Audit (from #17)

- Verify "How to Get Started" steps match actual flow
- Remove outdated steps
- Keep minimal: sign up → connect → join community → link to tutorials

---

## Technical Implementation

### Current Setup (TheDen)
- **Platform:** Static HTML single-page application (SPA)
- **Tab System:** JavaScript-based tab switching (show/hide sections)
- **Content Storage:** All content hardcoded inline in HTML — not pulled from database or CMS
- **URL Structure:** No real URLs for individual sections — all one page with JS tabs
- **Implications:** Can't share direct links to specific pages; SEO limited; content updates require code changes

### Recommended Upgrade
- Convert to real pages with proper URLs (e.g., `/welcome`, `/getting-started`, `/training`)
- Consider CMS or markdown-based system for easier content updates
- This allows non-developers to update content without touching code

---

## Issues Summary

| # | Issue | Priority |
|---|-------|----------|
| 1 | Convert JS tabs to real pages with URLs | High |
| 2 | Fix Catherine's tutorial link (goes to Module 8) | High |
| 3 | Update hardcoded tutorials vs live links | High |
| 4 | Agent Library needs index | Medium |
| 5 | Centralize How to Get Started | Medium |
| 6 | Clarify Guides vs Tutorials | Medium |
| 7 | Create personas browsable index | Low |
| 8 | Content weighting (primary vs secondary) | Medium |
| 9 | Unified navigation across properties | Medium |
| 10 | FAQ grouping + troubleshooting separation | Medium |
| 11 | New Support tab | Medium |
| 12 | Resources - remove redundant links | Low |
| 13 | Rename Welcome to What Is Heyron | Low |
| 14 | How-To Guides - check prerequisites | Medium |
| 15 | Add visual elements (images) | Medium |
| 16 | 2-tier navigation structure | High |
| 17 | Onboarding steps match reality | High |