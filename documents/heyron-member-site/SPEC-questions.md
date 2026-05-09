# Heyron Member Site — Dashboard & Support Widget Questions

## Authentication & Token Flow
- [x] Where is the existing onboarding page (with token) located?
  - Known: https://heyron.ai/onboarding (signup) → https://heyron.ai/auth/login → /auth/callback (Supabase)
- [x] What format is the token? (URL param, cookie, JWT?)
  - Known: Supabase Auth with PKCE magic link
  - Token: `pkce_*` in URL, 1-hour expiry on magic link
  - Callback: https://heyron.ai/auth/callback?token=pkce_...&type=magiclink&redirect_to=...
- [x] Session handling - discovered:
  - User ID in subdomain: user-0241.c1.heyron.ai (0241 = user ID, c1 = server)
  - Landing after auth: user-XXXX.c1.heyron.ai/sessions (OpenClaw control)
- [x] Token passing to member pages:
  - Found working pattern: support.html (GitHub) links to heyron.ai/chat
  - If logged in → shows agent, file cabinet, self-help tools
  - If not logged in → redirects to login first
  - Supabase session cookie handles auth across heyron.ai domain

### Simplified Auth Flow (for reference)
1. User on marketing page → clicks Sign Up
2. Goes to Stripe payment → pays
3. System sends magic link email (Supabase)
4. User clicks link → validates token → saves cookie
5. User logged in automatically → cookie persists across sessions
6. If cookie lost → "Forgot password" → get new magic link → new cookie

### For 10-year-olds
- Magic link = key that unlocks the door
- Cookie = the key stays in your pocket (browser) forever
- Every heyron.ai page sees the key and says "come on in"

## Deployment Location
- [ ] Where will hello-screen, site-dashboard, support.html be hosted?
  - Proposed: heyron.ai (to share auth automatically)
  - Need info: Are they currently hosted elsewhere? (GitHub Pages? here.now?)
  - If heyron.ai: auth should work automatically via Supabase cookies
  - If different host: would need to link to heyron.ai/chat for auth

## Notes
- Current working auth flow: any page on heyron.ai domain shares Supabase session
- User ID in subdomain: user-0241.c1.heyron.ai (for OpenClaw instance)

## Dashboard
- [ ] What real-time data can we show? (tasks, response time, etc.)
- [ ] Is there an API to fetch user metrics, or static for now?
- [ ] Container card — real data or placeholder?
- [ ] Recent activity — real logs or placeholder?
- [ ] Should dashboard be editable (reset demo) or read-only?

### Direct Dashboard Link (IMPLEMENTED)
- ✅ Added support for `?path=dashboard` URL parameter in launchpad-final
- When `?path=dashboard` is passed, jumps directly to Dashboard component
- site-dashboard.html card now links to: `launchpad-final.html?path=dashboard`
- **For deployment to heyron.ai:** Update link to full URL (e.g., `https://heyron.ai/launchpad?path=dashboard`)

### Changes Made (local workspace)
1. **site-dashboard.html** — Changed "About" card to "My Dashboard" with link to `launchpad-final.html?path=dashboard`
2. **launchpad-final.html** — Added `?path=dashboard` case in App() initial screen logic

### Reconfiguration Flow (Backend Work)
- [ ] Currently launchpad-final is a UI mockup only — no persistence
- [ ] Would need backend work to:
  1. Fetch user's current config from OpenClab container on load
  2. Map config → form fields (pre-populate)
  3. On "Launch": Parse form state → generate new SOUL.md / tool configs
  4. Write back to container via API
  5. Possibly restart agent to pick up changes
- [ ] This is a significant backend project, not UI work
- [ ] UI is ready; wiring to OpenClab is the missing piece

## Support Widget
- [ ] Extract from launchpad-final → embed in support.html?
- [ ] User data personalization — how much is needed?
- [ ] Should it work without login? (generic vs. container-aware)
- [ ] Ticket creation — what system handles tickets?
- [ ] FAQ content — where does it live? editable?

## General
- [ ] Shared CSS/design system across pages?
- [ ] Navigation/header consistency?
- [ ] Mobile responsiveness priorities?