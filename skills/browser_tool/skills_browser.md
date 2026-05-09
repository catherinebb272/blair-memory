# Composio Browser Tool Skill

This skill wraps the **Composio Browser Tool** (`BROWSER_TOOL`) so you can drive a headless Chromium instance from OpenClaw.

## Usage
```json
{
  "skill": "Browser_Tool",
  "action": "open_page",
  "payload": {"url": "https://example.com"}
}
```
Supported actions are:
- `open_page`
- `click`
- `type`
- `screenshot`
- `extract`

The skill handles session creation with your existing `agent_key` stored in `~/.composio/anonymous_user_data.json`.

## Example Prompt
```
Run the Browser_Tool skill to open https://news.ycombinator.com, extract the titles of the top 5 articles, and return them as a list.
```
```
{
  "skill": "Browser_Tool",
  "action": "extract",
  "payload": {
    "selector": "a.titlelink",
    "limit": 5
  }
}
```

## Implementation Details
- The skill uses the Python SDK (`pip install composio`).
- It reads the `agent_key` from `~/.composio/anonymous_user_data.json`.
- Errors are reported back as a JSON object with `error` and `details` fields.
```