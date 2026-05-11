# Composio Troubleshooting Guide

## General Setup Issues

### API Key Errors
- **"Invalid API key"** — Make sure you're using the right key. There are multiple:
  - `ak_***` — Agent API key (for `backend.composio.dev`)
  - `uak_***` — User API key
  - `ck_***` — Legacy key from .env (limited access)
- **Wrong hostname** — Use:
  - `agents.composio.dev` — For agent identity
  - `backend.composio.dev` — For API calls
  - `connect.composio.dev` — For OAuth links

### CLI Issues
- **`xdg-open` not found** — Use `--no-wait` flag: `composio link canva --no-wait`
- **Command not found** — Composio CLI is at `~/.composio/composio`

### Connection Not Found
- **"0 connected accounts"** — The connection was made to a different account. Re-link or use the correct API key.

## Tool-Specific Guides

For detailed help on specific tools, see:

| Tool | Guide |
|------|-------|
| Canva | [composio-canva-guide.md](./composio-canva-guide.md) |
| Gmail | [composio-gmail-guide.md](./composio-gmail-guide.md) |

## Common Patterns

### List connected accounts
```bash
composio link <toolkit> --list
```

### Execute a tool
```bash
composio execute <TOOL_SLUG> -d '{}'
```

### Get tool schema
```bash
composio execute <TOOL_SLUG> --get-schema
```

## Alternative PDF Tools (Paid/Free Tiers)

If Composio's TEXT_TO_PDF is down, alternatives:

| Service | Free Tier | Paid | Notes |
|---------|-----------|------|-------|
| [API2PDF](https://api2pdf.com) | 50 PDFs/mo | ~$1.28/mo | Usage-based after free |
| [PDF.co](https://pdf.co) | - | $8.99/mo | Full control |
| [CraftMyPDF](https://craftmypdf.com) | 50 PDFs/mo, 3 templates | $? | Templates |
| [PDFLess](https://pdfless.com) | 50 PDFs/mo | $? | - |
| [PDFMonkey](https://pdfmonkey.io) | - | $5/mo starter | - |

> Note: TEXT_TO_PDF shows as active in Composio dashboard — might be intermittent.

## Known Issues

### TEXT_TO_PDF tool fails
- **Error:** "Missing presigned URL in upload response"
- **Status:** Tool is available (`is_no_auth: true`) but returns this error — service-side issue
- **Verified working:** `WEATHERMAP_WEATHER` works fine — test with a known-good tool to isolate issues
- **Workaround:** Use Canva export instead (create design → export to PDF)

## Quick Debug Commands

```bash
# Check who you are
curl -H "Authorization: Bearer <agent_key>" "https://agents.composio.dev/api/whoami"

# List toolkits
~/.composio/composio dev toolkits list

# Search tools
~/.composio/composio search <query>
```

## Related Docs

- [composio-tools.md](./composio-tools.md) — General tool research and Top 10
- [agents-composio-dev-official.md](./agents-composio-dev-official.md) — Agent account setup