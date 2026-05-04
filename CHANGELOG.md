# Heyron Launchpad Changelog

## 2026-05-04

- **Image path fixes:** Changed all raccoon images from `raccoonX.png` to `assets/raccoonX.png` (no leading slash)
- **How chatty page:** Added cyan left border to sample boxes (matching tool choice page style)
- **Working hours page:** Selected days now have darker background + cyan outline + white text (matching communication style)
- **Communication channels page:** Chip/button selected state now has darker background + cyan outline + white text (matching working hours days)
- **Restored working version:** Reverted to 5:15 PM backup after CSS override issues caused black screen
- **Ron companion redesign:** Floating cyan text with subtle glow, no box (matches #22D3EE accent color)
- **Soul-note boxes:** Changed from green tint to dark panel background (matching input fields)
- **Persona page:** Unified text sizes (12px), "First, meet the family" in cyan, removed duplicate text
- **Setup page (IntegrationStep):** Changed to hero-with-mascot layout with numbered raccoon images
- **AboutYou page:** Headline → "Describe Yourself" at 24px, shortened subtext
- **Disclaimer page:** Changed headline to "A serious talk..." with raccoon11.png image
- **Finish page:** Fixed to use raccoon12.png image beside headline; link now goes to first launchpad page (Names)

## 2026-05-03

- **Project started:** Heyron.ai Launchpad module redesign
- **Completed:** Introductory Hello page with animation (extracted to hello-screen.html)
- **Design guidelines:** Stored in heyronstyle.md
- **Current color scheme:** Represented in Hello page animation
- **Changelog created:** Tracking design changes
- **violet progress bar:** Approved - looks good
- **Removed hello/welcome pages:** launchpad-source.html now starts directly on Names page
- **Added larger mascot images:** Each page now has 180x180px image spot with raccoon2.png through raccoon12.png
- **Wired hello to launchpad:** hello-screen.html buttons now link to launchpad-source.html?path=beginner|expert|remix
- **Names page text edits:** Headline → "Introduce Yourselves", text size down one level (24px/14px)
- **Names page callout:** Text white, bold/highlight to cyan
- **Logo replacement:** HeadMascot replaced with assets/logo.png in Brand and Ron intro box
- **UseCases page edits:** Headline → "How will [agent] help you?" at 24px
- **IntegrationsPick page edits:** Headline → "What functions should agent handle?" at 24px
- **Cron page headline:** Changed to "Create a repeating cron task?" at 24px
- **Cron page buttons:** Back/Skip now have cyan borders to match Connect button
- **Names page edits:** Subtitle → "Set your name and your agent's name", inputs side-by-side, maxLength=15
- **Button focus:** Thinner outline (1px)
- **Callout box:** Darker border (border-strong instead of cyan)
- **IntegrationsPick page:** Added "You can" before "skip anything now..."
- **Personality page (voice):** Headline → "Pick [agent]'s Communication Style", new subtext, paragraph break before "First meet the family", changed "Now pick a voice..." text
- **Logo:** Already fixed in Brand component (uses assets/logo.png)
- **IntegrationStep page:** Changed hero to image beside headline, added raccoon7.png placeholder
- **AboutYou page:** Headline → "Describe Yourself" at 24px, shortened subtext

## To Do

- Test different visual variations for Launchpad pages
- Add raccoon image files to project