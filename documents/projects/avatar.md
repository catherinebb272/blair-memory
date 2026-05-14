# Avatar Character Sheet App Project

## Origin
Catherine observed excitement in the Heyron community around:
1. Users asking agents to create their own identity → prompts for image generators
   - Animals (foxes, owls), robots, energy fields, fantasy figures (liminal fox, peacock)
   - Range: cutesy to vaguely sinister
2. A "character sheet" concept: avatar in different settings, specs, props, detailed
3. A prompt was built to generate that character sheet, and users started running it on themselves

## Opportunity Assessment

### Why It Works
- **Shareability:** Character sheets are inherently social—people want to show off "data cards"
- **Repeatability:** Invites iteration (different settings, props, variations)
- **Scarcity:** Most avatar tools give one image; this gives a *world*

### Challenges
- **Character consistency:** Most generators don't maintain consistency across generations
- **Prompt moat is fragile:** Easy to copy once shared

### Possible Solutions

| Approach | Effort | Cost Structure |
|----------|--------|----------------|
| Prompt builder web tool | Low | User pays own API (you take a fee) |
| Wholesale API + your prompt | Medium | Bundle API calls, markup + subscription |
| Full app with user accounts | High | Subscription + maintained character library |

**Recommended:** Middle option (wholesale) — users don't need API keys, you handle generation, markup on cost. Freemium (3 free sheets, then subscription).

## Open Questions
- [ ] Target market: Heyron community specifically, or broader AI enthusiasts?
- [ ] Image generation API access/rates?
- [ ] Character sheet prompt reliability—does it need more iteration?

## Date Started
2026-05-14