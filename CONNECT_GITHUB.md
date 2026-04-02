# Connecting GitHub - Step by Step

**Purpose:** Give your agent a permanent home for files, backups, and work products.

**Time needed:** 10-15 minutes  
**Skill level:** Beginner (if you can sign up for email, you can do this)

---

## What Is GitHub? (Simple Version)

GitHub is like **Google Drive for files + a time machine for changes**.

- **Storage:** Your agent can save files there, and you can access them from any device
- **Backup:** If something breaks, your files are safe on GitHub
- **Sharing:** You can share file links with others
- **History:** GitHub remembers every change, so you can go back to earlier versions

**Think of it as:** A filing cabinet in the cloud that keeps copies of everything.

---

## What You Need to Do vs. What Your Agent Does

### 👤 YOU Do This (One-time setup):
1. Create a GitHub account
2. Create a "repository" (fancy word for folder)
3. Give your agent a "token" (like a password)
4. Test that it works

### 🤖 YOUR AGENT Does This (Ongoing):
1. Save files to GitHub automatically
2. Organize files into folders
3. Retrieve files when needed
4. Create backups on schedule

---

## Step 1: Create Your GitHub Account

1. Go to **github.com**
2. Click **"Sign up"** (big green button)
3. Enter your email address
4. Create a password (use a password manager if you have one)
5. Choose a username (this becomes part of your web address, like `github.com/yourname`)
6. Click through the setup questions (you can skip most)
7. **Verify your email** - check your inbox for a confirmation email from GitHub

**Trouble?** Ask your agent: "Help me create a GitHub account"

---

## Step 2: Create Your First Repository

A "repository" (or "repo") is just a folder that GitHub tracks.

1. While logged into GitHub, click the **"+"** button (top right)
2. Click **"New repository"**
3. **Repository name:** Type something like `my-agent-files` or `blair-documents`
4. **Description:** (Optional) "Files and backups for my AI assistant"
5. **Public or Private?**
   - **Private** = Only you and your agent can see it ✓ (Recommended)
   - **Public** = Anyone on the internet can see it
6. **Check the box:** "Add a README file"
7. Click **"Create repository"**

**What just happened?** You created a private folder on GitHub. Right now it only has a README file.

---

## Step 3: Get a Personal Access Token

Your agent needs a "key" to unlock your GitHub folder. This is called a "Personal Access Token."

1. Click your **profile picture** (top right of GitHub)
2. Click **"Settings"**
3. Scroll down the left sidebar and click **"Developer settings"**
4. Click **"Personal access tokens"** → **"Tokens (classic)"**
5. Click **"Generate new token"** → **"Generate new token (classic)"**
6. **Note:** Type "Agent Access" or "For my AI assistant"
7. **Expiration:** Select "No expiration" (or 90 days if you prefer)
8. **Scopes (permissions):**
   - ✅ Check the box for **"repo"** (this lets your agent read/write files)
9. Scroll down and click **"Generate token"**
10. **IMPORTANT:** Copy the token immediately! It looks like `ghp_abc123xyz...`
    - This is the ONLY time you'll see it
    - Paste it somewhere safe (password manager, notes app)
    - If you lose it, you'll need to make a new one

**Trouble?** Ask your agent: "I need help creating a GitHub token"

---

## Step 4: Give Your Agent the Token

Now tell your agent about your GitHub:

**Say something like:**
> "Connect to GitHub. My repository is at `github.com/yourusername/your-repo-name`. My token is: `ghp_abc123xyz...`"

**Your agent will:**
1. Test the connection
2. Create a basic folder structure
3. Save the token securely
4. Confirm everything works

---

## Step 5: Suggested Folder Structure

Ask your agent to create these folders in your GitHub:

```
your-repo/
├── backups/           ← Automatic memory backups
├── uploads/           ← Files you want the agent to analyze
├── downloads/         ← Agent work products for you to download
├── documents/         ← Organized storage for projects
│   ├── project-name/
│   └── another-project/
└── guides/            ← Instructions and documentation
```

**Why this structure?**
- **backups/**: If your agent resets, we can restore from here
- **uploads/**: You put files here for the agent to read
- **downloads/**: The agent puts finished work here for you to grab
- **documents/**: Organized by project, easy to find later

**Ask your agent:** "Create the folder structure on GitHub"

---

## Step 6: Test Upload (Your First File)

Let's make sure everything works.

### Test 1: Agent Saves to GitHub

**Ask your agent:**
> "Create a test file on GitHub with today's date and save it to the downloads folder"

**What should happen:**
- Agent confirms file created
- You can see it on github.com in your `downloads/` folder

### Test 2: You Upload a File

1. Go to your repository on **github.com**
2. Click into the **uploads/** folder
3. Click **"Add file"** → **"Upload files"**
4. Drag a file from your computer (any file - a photo, PDF, text file)
5. Click **"Commit changes"**
6. Tell your agent: "Check the uploads folder and tell me what file is there"

**What should happen:**
- Agent sees the file
- Agent can read/analyze it if it's a readable format

### Test 3: You Download Agent Work

1. Ask your agent to create something (a document, analysis, spreadsheet)
2. Tell the agent: "Save that to GitHub in the downloads folder"
3. Go to **github.com** → your repository → **downloads/** folder
4. Click the file name
5. Click **"Download"** button (or the three dots menu → Download)
6. File saves to your computer

**Trouble with any test?** Tell your agent exactly what happened.

---

## Common Problems & Solutions

### "Token not working" or "Authentication failed"
**Fix:** You may have copied the token wrong. Go back to GitHub settings → Developer settings → Personal access tokens, delete the old one, create a new one, and copy it more carefully.

### "Repository not found"
**Fix:** Check the spelling. Your repo URL should be exactly: `github.com/username/repo-name`. Common mistake: forgetting the username or misspelling the repo name.

### "I don't see the folders"
**Fix:** GitHub might show "This repository is empty" at first. Refresh the page. Or ask your agent to check - sometimes folders only appear after files are added to them.

### "I uploaded a file but agent can't read it"
**Fix:** Make sure you clicked "Commit changes" after uploading. If you only dragged the file but didn't commit, it's not saved yet.

---

## Security Tips

1. **Never share your token in public** (Discord servers, public chats, etc.)
2. **If you accidentally expose your token:** Delete it immediately on GitHub and create a new one
3. **Don't give your agent more permissions than needed** (the "repo" scope is enough)
4. **Your private repository is private** - but still don't store passwords, SSNs, or banking info in plain text files

---

## What You Can Do Now

With GitHub connected, you can:

- ✅ Ask your agent to save important files
- ✅ Upload documents for the agent to analyze
- ✅ Download agent-created reports, spreadsheets, code
- ✅ Access your files from any device
- ✅ Recover if your agent session resets

---

## Next Step

Once GitHub is working, connect **Discord** so you can chat with your agent on your phone.

**Ask your agent:** "Help me connect Discord"

---

## Quick Reference

| What You Want | What to Say to Your Agent |
|---------------|---------------------------|
| Save a file | "Save [filename] to GitHub" |
| Upload for analysis | "Upload this to GitHub uploads folder" |
| Get my file | "Put [file] in the downloads folder so I can grab it" |
| Check what's there | "List all files on GitHub" |
| Make a new folder | "Create a folder on GitHub called [name]" |
| Restore after reset | "Restore my memory from GitHub backup" |

---

**Last updated:** March 21, 2026  
**Questions?** Ask your agent: "I need help with GitHub"
