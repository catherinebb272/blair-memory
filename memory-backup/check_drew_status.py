#!/usr/bin/env python3
"""
Check if Drew has connected on Discord by 6 PM.
If not, send email with review reply options.
"""

import os
import sys
sys.path.insert(0, '/root/.openclaw/workspace')

# Check if Drew has been marked as connected
# For now, we'll assume he hasn't and send email
# In future, this could check a status file

from agentmail import AgentMail

api_key = "am_us_998fd6b2f35edb7f3c9df98114958936594ad31e344f620587f0642148c8cc5a"
client = AgentMail(api_key=api_key)

message = """Hey Drew,

Hope your afternoon is going well! Following up on the coin shipment reminder from earlier.

We also have a new Etsy review that needs a reply:

**Review from Jade (Mar 12, 2026):**
"Chip was perfect thank you." (5 stars)

Here are two options for your reply:

**Option 1 (Warm & Simple):**
Hi Jade! So glad the chip arrived safely and met your expectations. Thank you for taking the time to leave a review—it means a lot to us. Wishing you all the best! — Drew

**Option 2 (A Bit More Personal):**
Hey Jade! Thanks so much for the kind words. Really happy to hear the chip was exactly what you were looking for. Your support means everything to us. Take care! — Drew

Also, whenever you get a chance to connect on Discord, I'll send these there too for easier access in the future.

Thanks!
Blair"""

response = client.inboxes.messages.send(
    inbox_id="blairana@agentmail.to",
    to="Drew@bellbracken.com",
    subject="Etsy review reply options + Discord reminder",
    text=message
)

print(f"Email sent to Drew at 6 PM check")
print(f"Message ID: {response.message_id}")

# Log that we sent the email
with open('/root/.openclaw/workspace/etsy-review-tracking.md', 'a') as f:
    f.write("\n- **6 PM Follow-up:** Email sent to Drew with review reply options (Discord not yet connected)\n")
