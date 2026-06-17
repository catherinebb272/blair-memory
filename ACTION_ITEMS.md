# Action Items

> Updated: 2026-06-17
> Format: [ ] = open, [x] = complete, [~] = in progress

---

## 🪙 Coin Production (Priority: CRITICAL)

**Deadline: Mid-Late March 2026**  
*Target: Discussion with Barbara & Drew*

**Goal:** Secure commitment for new coin production to close the month gaps.

### Items to Discuss:
- [ ] **Month 7 coin** — pitch design concept, negotiate MOQ
- [ ] **Month 8 coin** — pitch design concept, negotiate MOQ  
- [ ] **Month 10 coin** — pitch design concept, negotiate MOQ
- [ ] **Month 11 coin** — pitch design concept, negotiate MOQ
- [ ] **MOQ flexibility** — can they do 25 units at higher price point vs. 50 at $5?

### Design Concepts to Prep:
- Month 7: Bridge? Connection? ("Crossing over")
- Month 8: What comes after infinity? "Endless"? "Flow"?
- Month 10: Double digits milestone — "Momentum"? "Strength"?
- Month 11: Almost there — "Almost Home"? "The Final Stretch"?

---

## 📊 Etsy Performance Check

**Deadline: April 2026**  
*Target: 4-6 weeks after last batch of changes*

**Goal:** Evaluate if current title/image changes are working, then finish tags.

### Items to Review:
- [ ] **Check Etsy Stats** — impressions, click rate, favorites (3-4 weeks post-change)
- [ ] **Analyze image performance** — is the crowded legend hurting CTR?
- [ ] **Batch update remaining tags** — 6mo and 12mo are done, finish the rest
- [ ] **Fix legend positioning** — ONLY if data shows it's hurting performance

---

## 📈 Weekly Sales Data Collection

**Recurring: Every week until further notice**

- [ ] **Pull weekly snapshot** of Etsy sales data for Blair review
  - Sales revenue (weekly view)
  - Impressions / CTR (weekly view)
  - Conversion rate (30-day rolling)
  - Favorites

*Note: This stays on the list until user activates cron reminders. User will prompt when ready to review the list.*

---

## 🔄 Weekly Reminders (Cron)

*Status: Not active yet — user will activate when ready*

When activated: Post every Monday with open items from this list.  
Items stay active until user marks them complete.  
*When user prompts for list review → ask if any items are complete.*

---

## 🐛 Technical Issues

### AgentMail Email Delivery Problem
**Status:** [ ] Open — emails arriving blank  
**Priority:** HIGH — blocks document delivery  
**Notes:** 
- Worked before reset (March 13)
- Messages send successfully (get message IDs)
- Recipient receives blank emails with no body or attachment
- Tested: 2026-03-21 multiple attempts, all failed
- Workaround: Use GitHub links + Discord for now
**Next Steps:** 
- [ ] Investigate AgentMail API format (check if `body.text` vs `body` structure changed)
- [ ] Test with minimal/simple text (no formatting)
- [ ] Check if API key expired or needs refresh
- [ ] Verify recipient address is correct
- [ ] Try alternative: attach file as base64 vs inline text

---

## 🔌 Connection Guides to Write

### Discord Connection Guide
**Status:** [ ] Not started  
**Instructions:** Use https://connect.c1.heyron.ai/ to set up  
**Audience:** Non-technical users  
**Include:**
- What Discord is (simple explanation)
- How to sign up
- How to use the Heyron connection link
- Where to find channel IDs
- How to test the connection

### Telegram Connection Guide
**Status:** [ ] Not started  
**Instructions:** Use https://connect.c1.heyron.ai/ to set up  
**Audience:** Non-technical users  
**Include:**
- What Telegram is
- How to sign up
- How to use the Heyron connection link
- How to test the connection

---

## 🌊 Saltwash Prints (Coastal Shop — Priority: ACTIVE, awaiting Catherine)

**Target:** Launch Etsy shop with 3 prints (Dog on the Beach, Lonely Houses, Lady Reading)
**Brand kit:** `documents/catherine-coastal/brand-kit-v1.md` (locked 2026-06-16)
**Print masters folder:** `blair-documents/saltwash/`

### Print masters (in `blair-documents/saltwash/`)
- [ ] **Catherine review of 2 print masters** — beach-dog and beach-walk 5×7 + 8×10 PNGs in `/home/openclaw/blair-documents/saltwash/{beach-dog,beach-walk}/`
- [ ] **Upscale launch 3 prints** to 11×14 / 16×24 / 18×24 — Catherine's task in Firefly, sources are the 2:3 + 4:5 native crops (NOT the 5×7 / 8×10 downscales)
- [ ] **Lonely Houses print master** — not yet built; needs source upload
- [ ] **Lady Reading print master** — not yet built; square 2048×2048 source, decide ratio (4:5 or 2:3) before crop
- [ ] **Re-decide Walk on the Beach** — reframe copy (emphasize shoreline over people) or park for v2
- [ ] **Lifeguard Station** — park for v2 unless contrast is fixed

### Listing copy
- [ ] **Catherine review Dog on the Beach listing v1** — `documents/catherine-coastal/listings/dog-on-the-beach-listing-draft.md`. Note: assumes portrait, but beach-dog was rotated to landscape. Either re-render portrait or update listing to "horizontal".
- [ ] **Lonely Houses listing draft** — once master is built, follow Dog template (95-char title formula, 13 tags, 1-sentence opening)
- [ ] **Lady Reading listing draft** — same template, after ratio is decided

### Brand assets
- [ ] **Wordmark in Canva** — recipe in brand kit Section 17 (2000×600, Sand bg, Playfair Regular, sentence case, Storm Navy)
- [ ] **Shop banner** — spec in brand kit Section 7 (not yet built)
- [ ] **About / Bio section** — copy drafted in brand kit Section 8 (not yet posted)

### Shop infrastructure (Catherine, structural — not Blair's task)
- [ ] **Shop name on Etsy: Saltwash Prints** — handle check, account creation
- [ ] **2FA on Catherine's phone + authenticator app** (NOT SMS)
- [ ] **Business email Catherine controls**
- [ ] **PayPal / bank in Catherine's own name** (step zero)

### Phase 2 (parked — not day 1)
- [ ] **Greeting cards** — 5×7 folded, mixed blank/curated, Printful POD or local NC printer. Trigger: 3-6mo post-launch OR 5+ prints with reviews. Sample sentiments ready.

---

## 📓 ANA Journal Product Line (Priority: HIGH — Active)

**Target:** Launch digital + print journal SKUs (sobriety, year one)
**Reference:** `documents/ana/journal-product-design-brief.md`

### Print (Lulu)
- [ ] **Order 1 Lulu proof copy** — 6×9 coil, 120pp, 60lb uncoated, matte cover ($11.66)
- [ ] **Barbara QA the proof** — color, alignment, page order, coil alignment
- [ ] **Decide 6×9 vs 7×10** after seeing proof in hand (mockup both)
- [ ] **Set up Lulu Bookstore / Lulu Direct** for print SKU
- [ ] **Etsy listing for print SKU** — $24.99 retail, manual order forwarding to Lulu
- [ ] **Confirm full spec** with Barbara: text paper stock separately from cover stock in Lulu's quote line-by-line

### Digital PDFs (two SKUs)
- [ ] **Build Digital Fillable PDF** ($7.99) — iPad/GoodNotes/Notability, hyperlinked TOC, form fields per prompt
- [ ] **Build Print-Ready Letter PDF** ($9.99) — 8.5×11, no fillables, bleed-safe, 3-hole-punch-safe margins
- [ ] **Last page of print PDF** — single-line Lulu pointer, nothing more
- [ ] **PDFs must look distinct from Lulu print version** — different fonts/layouts, not "degraded book"
- [ ] **Etsy listings for both PDFs**

### Design
- [ ] Catherine approves the 4 ChatGPT prompts (daily, weekly, front matter, 1mo milestone)
- [ ] Catherine provides: 1-month coin photo, ANA logo (two-fish-in-circle line drawing)
- [ ] Barbara picks the 4 stand-in icons for 7/8/10/11 (suggested: anchor, river bend, tree, firefly)
- [ ] Order 1 proof copy from Lulu before any listing goes live

### Parked for v2 (do not block v1)
- [~] **Scope expansion: mental health / anxiety / emotional sobriety** — page style retool for both spaces. Daily/weekly prompts need a second-voice pass. Milestone pages stay sobriety-anchored (moat). Front matter + tools section retunable for both audiences. Trending in Google search.

---

## Archive (Completed Items)

| Date | Item | Result |
|------|------|--------|
| 2026-06-16 | Saltwash Prints brand kit v1 | Locked: name, fonts, palette, taglines, wordmark, print lineup, image prep workflow. 18 sections. |
| 2026-06-16 | Saltwash beach-dog + beach-walk print masters | Built 4 sizes each (2:3 + 4:5 native + 5×7 + 8×10 ship-ready). Pushed to blair-documents commit 381629c. |
| 2026-06-16 | Saltwash Dog on the Beach listing draft v1 | Title (95ch), 13/13 tags, description with voice checklist. Awaiting Catherine review. |
| 2026-03-02 | Retitle all Etsy listings | Done — simplified format, no pipes |
| 2026-03-02 | Replace all listing images | Done — clean coin on solid background with legend |
