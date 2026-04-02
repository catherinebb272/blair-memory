# AgentMail Instructions

**Source:** https://docs.agentmail.to/messages

## Sending HTML Emails

When sending a message, you MUST provide both `text` and `html` as **top-level fields** in your JSON payload:

```json
{
  "to": "recipient@example.com",
  "subject": "Your Subject",
  "text": "Plain text version of your email",
  "html": "<p>This is the <strong>rich HTML</strong> version</p>"
}
```

**Key points:**
- Both `text` and `html` go at the **top level** of the JSON (not nested in `body`)
- Always provide both — `text` is fallback for clients that don't render HTML
- CSS should be embedded in a `<style>` tag in the `<head>`

## API Endpoint

```
POST https://api.agentmail.to/v0/inboxes/{inbox_id}/messages/send
Authorization: Bearer {API_KEY}
Content-Type: application/json
```

## Sending Attachments

Attachments must be Base64 encoded:

```json
{
  "to": "recipient@example.com",
  "subject": "With attachment",
  "text": "See attached file",
  "html": "<p>See attached file</p>",
  "attachments": [
    {
      "content": "BASE64_STRING_HERE",
      "filename": "report.pdf",
      "content_type": "application/pdf"
    }
  ]
}
```

## Reference
- Messages: https://docs.agentmail.to/messages
- Attachments: https://docs.agentmail.to/attachments  
- Sending & Receiving: https://docs.agentmail.to/sending-receiving-email