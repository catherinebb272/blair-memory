# Composio Canva Guide

## Connection

```bash
~/.composio/composio link canva --no-wait
```
Open the returned `redirect_url`, authorize, then verify:
```bash
~/.composio/composio link canva --list
```

## Key Tools

| Tool | What it does |
|------|--------------|
| `CANVA_LIST_USER_DESIGNS` | List all your designs |
| `CANVA_POST_DESIGNS` | Create a new design |
| `CANVA_FETCH_DESIGN_METADATA_AND_ACCESS_INFORMATION` | Get share links |
| `CANVA_POST_EXPORTS` | Export to PDF/PNG/JPG |
| `CANVA_MOVE_ITEM_TO_SPECIFIED_FOLDER` | Organize into folders |

## Example: List Designs

```bash
~/.composio/composio execute CANVA_LIST_USER_DESIGNS -d '{}'
```

Output file path shown in response.

## Gotchas

- Export URLs are temporary — download right away
- Some endpoints paginate — handle `continuation` token
- Designs can be across multiple teams — check `owner.team_id`