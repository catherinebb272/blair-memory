# Here.now Site Update Procedure

## Getting an API Key (One-Time Setup)

1. Go to https://here.now and create an account
2. Get your API key from your account dashboard
3. Save it:

```bash
mkdir -p ~/.herenow
echo "YOUR_API_KEY" > ~/.herenow/credentials
chmod 600 ~/.herenow/credentials
```

Or store it in your workspace `.env` file (if you prefer):

```bash
echo 'HERENOW_API_KEY=your_key_here' >> ~/.openclaw/workspace/.env
```

---

## Updating the Site

**Command:**
```bash
cd ~/.agents/skills/here-now && ./scripts/publish.sh nc/neighborhoods/ --slug boreal-larch-wxxv
```

**What happens:**
- If API key is saved: site updates permanently (authenticated)
- If no API key: site updates but shows "anonymous" in output (still works, but site is tied to claim)

**With client tracking (recommended):**
```bash
cd ~/.agents/skills/here-now && ./scripts/publish.sh nc/neighborhoods/ --slug boreal-larch-wxxv --client "BlairANA"
```

---

## Quick Reference

| Item | Value |
|------|-------|
| Site folder | `nc/neighborhoods/` |
| Live URL | https://boreal-larch-wxxv.here.now/ |
| Slug | `boreal-larch-wxxv` |
| Last published | 2026-03-31 |

---

## Troubleshooting

- **"expires in 24h"** → No API key saved. Run the auth setup above.
- **"absolute paths not allowed"** → Use relative path from workspace, not absolute.
- **"path does not exist"** → Make sure you're in `/root/.openclaw/workspace` when running the command.