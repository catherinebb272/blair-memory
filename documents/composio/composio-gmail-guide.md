# How to Use Gmail with Composio — For Anyone

> A simple guide to connecting your Gmail account to Composio so an AI assistant can help you with email.

---

## What Even Is This?

Composio is like a bridge. It lets an AI assistant (like Heyron) connect to your Gmail account and do stuff for you — like read emails, send new ones, or organize your inbox.

**Here's the key thing:** The AI doesn't just "know" your email. It has to ask permission first, the same way you have to log in when you check Gmail on a new phone.

---

## Step 1: Connect Your Gmail (The One-Time Setup)

When someone first asks Heyron to check their email, here's what happens:

1. **Heyron asks Composio to connect to Gmail**
2. **A popup appears** — this is Google's official login screen
3. **You sign in** and click "Allow" to give permission
4. **Done!** That connection stays active until you revoke it

Think of it like giving a trusted friend a key to your house. They can come and go, but you can take the key back anytime.

---

## Step 2: What Can the AI Do With Gmail?

Once connected, the AI can:

| What you want | What the AI does |
|---------------|------------------|
| "Read my last 5 emails" | Opens Gmail and shows you the newest messages |
| "Send an email to Mom" | Writes and sends the email for you |
| "Mark this email as read" | Changes the label from UNREAD to read |
| "Archive all emails from that newsletter" | Moves them out of your inbox in bulk |
| "Find emails about the meeting" | Searches and shows you the results |
| "Create a draft for later" | Saves a half-written email you can finish |

There are **62 different Gmail tools**, but the AI only uses the ones it needs for whatever you ask.

---

## Step 3: How It Works Under the Hood

You don't need to know this, but it's here if you're curious:

1. **You ask for something** → "Can you find emails from my boss?"
2. **The AI searches** → Composio looks through your Gmail
3. **Results come back** → You see the emails
4. **Done** → Simple as that

The AI can't see your whole inbox at once — it only sees what it needs to answer your question.

---

## Common Problems (And What They Mean)

| Problem | What's Going On |
|---------|-----------------|
| "App is blocked" | Google is being extra careful. It happens when an app asks for too many permissions. |
| "Gmail API has not been used" | The admin needs to turn on the Gmail API in Google Cloud (this is a backend setup thing). |
| "Token expired" | The permission expired. Just log in again — easy fix. |
| "Too many requests" | You've hit Google's speed limit. Wait a minute and try again. |

---

## Can I Take Away Access?

**Yes, anytime.** Just go to your Google Account → Security → Third-party app access, and you can see and remove apps that have access to your Gmail.

---

## Quick Summary

- Composio connects Heyron to your Gmail
- You give permission once (like logging into a new app)
- Then Heyron can read, send, search, and organize emails for you
- You can revoke access anytime through your Google account
- It uses Google's official API — it's safe and secure

---

**Docs where this came from:** https://docs.composio.dev/toolkits/gmail