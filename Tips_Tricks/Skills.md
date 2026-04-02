# Skills

## What are Skills?

The Whambulance here!

Quick clarification on skills: Heyron skills are AI instruction sets, not software packages. They're not tied to macOS or Homebrew at all — your agent runs in a managed Linux container, and skills just give it specialized knowledge/behaviors (like "how to help with GitHub" or "how to check the weather").

Whatever your agent told you about macOS-only compatibility sounds like it got confused about its own environment. That's not how Heyron skills work.

To browse and install skills: Tell your agent "install a skill" or head to https://clawhub.com/ to see what's available.

---

## AgentMail Troubleshooting

**Problem:** Emails sending but arriving blank at recipient.

**Cause:** Using wrong body format — `{"body": {"text": "..."}}` instead of top-level `text`.

**Solution:** Use this format:

```json
{
  "to": "recipient@email.com",
  "subject": "Subject line",
  "text": "Plain text body",
  "html": "<p>HTML with <a href='https://link.com'>clickable link</a></p>",
  "attachments": [
    {
      "filename": "file.md",
      "content_type": "text/markdown",
      "content_disposition": "attachment",
      "content": "BASE64_ENCODED_CONTENT"
    }
  ]
}
```

**Key points:**
- Use `text` at top level — NOT nested in `body` object
- Use `html` for formatted content/links
- Use `attachments[]` with base64-encoded content for files
- Endpoint: `POST https://api.agentmail.to/v0/inboxes/{inbox_id}/messages/send`

**Common mistake:** `{"body": {"text": "..."}}` — This sends successfully but delivers blank emails.