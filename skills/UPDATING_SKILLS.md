# UPDATING_SKILLS.md

## Purpose
Standard procedure for adding new tools and skills to the workspace.

## When to Use
- Adding a new API integration
- Creating a new skill folder
- Onboarding a new tool

## Steps

### 1. Add to .env
Store any API keys/tokens in `.env`:
```
SERVICE_NAME=your_api_key_here
```

### 2. Create Skill Folder
```
/skills/<service_name>/
```

### 3. Create SKILL.md
Inside the folder, create `SKILL.md` with:
- Purpose
- Environment variables required
- Usage examples

### 4. Update TOOLS.md
Add an entry in the Tools section linking to the skill.

### 5. Log to SummaryLog.md
Append action taken to `/Project_rehab/SummaryLog.md`.

## Rules
- NEVER hardcode secrets in .md files
- Always use .env for secrets
- Follow naming conventions (see tools_rebuild.md)
- Verify before adding duplicates