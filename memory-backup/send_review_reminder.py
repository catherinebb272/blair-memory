#!/usr/bin/env python3
"""
Send Discord reminder to check Etsy reviews
Runs Mon/Wed/Fri at 9 AM UTC
"""

import os
import sys

# Add workspace to path
sys.path.insert(0, '/root/.openclaw/workspace')

# Discord webhook or bot message would go here
# For now, this is a placeholder until Discord integration is fully configured

message = """🪙 **Etsy Review Check Reminder**

It's time to check the ApartNotAlone Etsy shop for new reviews!

**What to do:**
1. Go to: https://www.etsy.com/shop/ApartNotAlone#reviews
2. Sort by "Most Recent"
3. Look for any reviews from the past few days that need replies
4. Copy/paste any new reviews to me and I'll draft responses for Drew

**Review Tracking:** I'll log today's check and any pending replies.

— Blair"""

print(f"[{os.popen('date').read().strip()}] Review reminder triggered")
print(message)

# TODO: Once Discord DM is configured, send this to Catherine
# For now, this logs the reminder that would be sent
