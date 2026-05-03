# GitHub Skill

## Purpose
Interact with GitHub API for repository operations.

## Environment Variables
- `GITHUB_TOKEN` - Personal access token
- `GITHUB_REPO` - Repository (format: owner/repo)
- `GITHUB_BRANCH` - Default branch name

## Usage
```bash
# Clone/pull/push using standard git commands
git clone https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git
```

## Related Skills
- GitHub token stored in `.env`