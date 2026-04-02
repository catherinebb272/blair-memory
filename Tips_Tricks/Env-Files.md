# .env Files — Why They're the Standard

## What is a .env file?

A simple text file that stores API keys, tokens, and other secrets as `KEY=value` pairs.

## Why .env and not .md or .json?

- **Universal** — Every language/framework reads .env natively
- **Environment variables** — Tools expect to read `$TOKEN`, not parse JSON/YAML
- **Gitignore convention** — Standard practice is excluding .env from git, keeping secrets out of version control
- **Security** — Unlike markdown files that get backed up to GitHub, .env stays local on the container

## Simple format

```
GITHUB_TOKEN=ghp_xxxxxxxxxxxx
DISCORD_BOT_TOKEN=xxxxx
API_KEY=xxxxx
```

## Usage

```bash
# Load into shell
source .env

# Use variable
curl -H "Authorization: Bearer $GITHUB_TOKEN" ...
```

## Key rule

Never commit .env to git. Add to `.gitignore`:

```
.env
```

---

**TL;DR:** .env is the "language everyone agreed on" for secrets. Markdown is fine for instructions, but tokens go in .env.