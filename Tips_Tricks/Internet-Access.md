# Internet Access

## The Problem

- **Google works** → 301 redirect
- **Reddit/Quora/Twitter blocked** → 403 Forbidden
- **Jina.ai works intermittently** → sometimes it works, sometimes it doesn't
- **Browser automation fails** → CDP unreachable

## Possible Causes

- **Whitelist/Blacklist** — The server has a list of allowed/blocked sites
- **Firewall** — Only certain domains get through
- **Isolated network** — Container environment restrictions
- **My IP is blocked** — By sites like Reddit

## What Works

- Google (301)
- Hacker News (via jina.ai proxy)
- Fiverr (via jina.ai)
- Indiehackers (via jina.ai)

## What Doesn't Work

- Reddit (blocked)
- Quora (blocked)
- Twitter/X (blocked)
- YouTube (not tested)

## Conclusion

It's not that the internet doesn't work — it's that specific sites are blocked for this environment.