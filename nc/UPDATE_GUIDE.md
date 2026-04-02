# 🏘️ How to Update the NC Neighborhoods App

**What this is:** Instructions for updating the neighborhood ranking app when you have new data (CSV file) or new pictures.

**When to use this:** When you want to add neighborhoods, change descriptions, update prices, or add new photos.

---

## 📋 THE BIG PICTURE (What Happens)

1. **You give me** new files (CSV and/or pictures)
2. **I update** the app code
3. **I make** a ZIP file with everything
4. **You download** the ZIP file
5. **You unzip** it (like opening a present)
6. **You drag** the folder to Netlify
7. **Done!** New app is live

---

## 🔴 IMPORTANT RULES (Don't Skip These!)

### ❌ WRONG: Drag from GitHub to Netlify
**Why it doesn't work:** GitHub shows pictures of files, not real files. It's like trying to drag a photo of a sandwich — you can't eat it!

### ✅ RIGHT: Download first, then drag
**Why it works:** When you download, you get REAL files on your computer. Then Netlify can use them.

---

## 📝 STEP-BY-STEP PROCESS

### STEP 1: Upload Your New Files to GitHub

1. Go to https://github.com/catherinebb272/blair-documents
2. Click on the `nc/research` folder (for pictures) or `nc/neighborhoods` folder (for CSV)
3. Click the **"Add file"** button (top right)
4. Click **"Upload files"**
5. Drag your new files OR click "choose your files"
6. Scroll down and click **"Commit changes"** (green button)
7. Wait for upload to finish

**What you uploaded:**
- New CSV file with neighborhood data
- New pictures (JPG or PNG files)

---

### STEP 2: Tell Me to Update the App

Send me a message like:
> "Update the NC neighborhoods app with the new CSV and pictures I just uploaded"

**What I'll do:**
- Read your new CSV file
- Check for new pictures
- Update the app code
- Test everything works
- Make a ZIP file
- Upload the ZIP to GitHub

---

### STEP 3: Download the ZIP File

**This is the part people mess up! Read carefully:**

1. Wait for me to say "✅ Done! ZIP file uploaded"
2. I'll give you a link like:  
   `https://github.com/catherinebb272/blair-documents/blob/main/nc-neighborhoods-deploy.tar.gz`
3. **CLICK** that link
4. You'll see a GitHub page with a gray box showing the file
5. Look for the **"Download"** button (or three dots menu → "Download")
6. **CLICK Download**
7. File saves to your computer (usually in "Downloads" folder)

**🔴 REMEMBER:** You CANNOT drag from this GitHub page. You MUST download first!

---

### STEP 4: Unzip the File

The file is a `.tar.gz` (like a fancy ZIP). Here's how to open it:

**On Mac:**
1. Open "Downloads" folder
2. Double-click the `nc/nc-neighborhoods-deploy.tar.gz` file
3. It makes a new folder called `nc-neighborhoods`

**On Windows:**
1. Right-click the file
2. Choose "Extract All" or "Extract Here"
3. It makes a new folder

**What you should see inside:**
- `index.html` (the app)
- `Neighborhoods.csv` (the data)
- Lots of `.jpg` and `.png` files (the pictures)

---

### STEP 5: Deploy to Netlify

1. Go to https://app.netlify.com
2. Log in (use GitHub to log in if you forgot password)
3. Click **"Sites"** (left side menu)
4. Click **"Add new site"** (big button)
5. Click **"Deploy manually"**
6. You'll see a box that says "Drag and drop your site folder here"
7. **OPEN** the folder from Step 4 (where you unzipped)
8. **OPEN** the `nc` folder
9. **SELECT** the `neighborhoods` folder
10. **DRAG** it to the Netlify box
11. **DROP** it
11. Wait for upload (you'll see a progress bar)

---

### STEP 6: Get Your New URL

After upload finishes:

1. Netlify shows you a random URL like:
   `https://abc123xyz.netlify.app`
2. **CLICK** the URL to test it
3. **Copy** the URL to save it

**Optional:** If you want a custom URL like `nc.plaidfoxresale.com`:
- Ask your husband for Ionos login
- Add a CNAME record
- But the random URL works fine too!

---

## 🧪 TESTING CHECKLIST

After deploying, check these things:

- [ ] Page loads (you see the blue header)
- [ ] Pictures show up (not broken image icons)
- [ ] You can search in the search box
- [ ] Sliders move and change the rankings
- [ ] You can click tags to filter
- [ ] Neighborhood cards expand when you click them
- [ ] Images open big when you click them

**If something is broken:**
Tell me exactly what doesn't work. Screenshot if you can!

---

## 📁 FILE NAME RULES

When you upload pictures, follow these rules or the app breaks:

1. **Picture name MUST match neighborhood name**
   - Neighborhood: "Piper Glen" → Picture: `Piper Glen.jpg`
   - Neighborhood: "MacGregor Downs" → Picture: `MacGregor Downs.png`

2. **Use the SAME name** from the CSV file
   - If CSV says "Duke Forest", picture must be `Duke Forest.png`
   - Not `dukeforest.jpg` or `DukeForest.jpg`

3. **File types allowed:** `.jpg` or `.png`

**If names don't match:** The picture won't show up. Tell me and I'll fix it.

---

## 🆘 TROUBLESHOOTING

### Problem: "I can't drag from GitHub"
**Solution:** You're not supposed to! Download first, then drag from your computer.

### Problem: "Pictures don't show up"
**Solution:** Check the picture names match the neighborhood names exactly.

### Problem: "Netlify says 'No index.html found'"
**Solution:** You dragged the wrong folder. Make sure you drag the `neighborhoods` folder (inside `nc`), not the `nc` folder itself.

### Problem: "The ZIP won't open"
**Solution:** On Windows, try right-click → "7-Zip" → "Extract Here". On Mac, double-click should work.

### Problem: "I forgot where the ZIP downloaded"
**Solution:** Check your Downloads folder, or search your computer for `nc-neighborhoods-deploy`

---

## 💾 WHERE FILES LIVE

**GitHub:** `https://github.com/catherinebb272/blair-documents`
- This is storage — like a filing cabinet
- Files are safe here
- You can download anytime

**Netlify:** `https://app.netlify.com`
- This is the live website — like a storefront
- People visit this URL to see your app
- When you drag new files, it replaces the old app

**Your Computer:** Downloads folder
- This is temporary — like a shopping bag
- You can delete files here after uploading to Netlify

---

## ✏️ EXAMPLE MESSAGE TO SEND ME

> Hi Blair,
> 
> I uploaded a new CSV and 3 new pictures to GitHub:
> - New neighborhood: "Willow Bend Lakes"
> - Updated prices for Matthews and Croasdaile
> - New pictures for Hope Valley and Lochmere
> 
> Can you update the app and make a new ZIP file?
>
> Thanks!

**What I'll reply:**
> ✅ Done! ZIP file uploaded to:
> https://github.com/catherinebb272/blair-documents/blob/main/nc-neighborhoods-deploy.tar.gz
>
> Download → Unzip → Drag to Netlify!

---

## 🎯 QUICK REFERENCE

| Step | Action | Where |
|------|--------|-------|
| Upload files | GitHub → Add file → Upload | github.com |
| Tell Blair to update | Send me a message | Here (webchat) |
| Download ZIP | Click link → Download button | GitHub |
| Unzip file | Double-click or Extract | Your computer |
| Deploy app | Drag folder to box | netlify.com |

---

**Last updated:** March 20, 2026  
**Next review:** When you need to update the app again!
