# GitHub Pages Deployment Guide

## Quick Start Deployment Steps

Follow these steps to deploy your portfolio to GitHub Pages:

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in top right → **New repository**
3. Name it (e.g., "portfolio" or "my-portfolio")
4. Keep it **Public** (required for free GitHub Pages)
5. Don't initialize with README (you already have one)
6. Click **Create repository**

### Step 2: Prepare Your Files

1. **Update package.json**:
   - Change the homepage URL:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME"
   ```
   - Example: If your GitHub username is "karthikhegde" and repo is "portfolio":
   ```json
   "homepage": "https://karthikhegde.github.io/portfolio"
   ```

2. **Update App.jsx**:
   - Line 298: Update LinkedIn URL
   - Add your actual certification verification URLs
   - Update any placeholder text

### Step 3: Initial Setup Commands

Open terminal in your project folder and run:

```bash
# Install dependencies
npm install

# Install gh-pages for deployment
npm install --save-dev gh-pages

# Test locally first
npm start
# (Check everything looks good at http://localhost:3000)
# Press Ctrl+C to stop
```

### Step 4: Connect to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"

# Connect to your GitHub repository
# Replace with your actual repository URL:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Deploy to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

This will:
- Build your project
- Create a gh-pages branch
- Push the build to that branch
- Make it live on GitHub Pages

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, you should see:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save** if needed
6. You'll see a message: "Your site is live at https://..."

**Note**: It may take 5-10 minutes for your site to go live initially.

### Step 7: Verify Deployment

1. Visit your portfolio URL: `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`
2. If you see a 404, wait a few more minutes
3. Hard refresh with Ctrl+Shift+R (or Cmd+Shift+R on Mac)

## Updating Your Portfolio

When you make changes:

```bash
# 1. Make your changes in the code

# 2. Test locally
npm start

# 3. Save changes to git
git add .
git commit -m "Update: description of changes"
git push

# 4. Deploy updates
npm run deploy
```

## Common Issues & Solutions

### Issue: 404 Error
**Solution**: 
- Wait 10 minutes after deployment
- Check your homepage URL in package.json
- Ensure gh-pages branch exists in your repo

### Issue: Deploy command fails
**Solution**:
```bash
# Clear cache and retry
rm -rf node_modules/.cache
npm run deploy
```

### Issue: Changes not showing
**Solution**:
- Clear browser cache (Ctrl+Shift+R)
- Check you ran `npm run deploy` after changes
- Verify changes are in the gh-pages branch on GitHub

### Issue: "Failed to get remote.origin.url"
**Solution**:
```bash
# Set the remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

## Adding a Custom Domain (Optional)

If you have a custom domain:

1. Create a file named `CNAME` in your public folder
2. Add your domain (e.g., `www.karthikhegde.com`)
3. Update package.json homepage:
   ```json
   "homepage": "https://www.yourdomain.com"
   ```
4. Configure DNS settings with your domain provider

## Final Checklist

Before sharing your portfolio:

- [ ] All links work correctly
- [ ] Contact information is accurate
- [ ] LinkedIn profile link is updated
- [ ] Responsive design works on mobile
- [ ] No placeholder text remains
- [ ] Loading speed is acceptable
- [ ] All sections have content
- [ ] Favicon appears in browser tab

## Need Help?

- [Create React App Deployment](https://create-react-app.dev/docs/deployment/#github-pages)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Documentation](https://reactjs.org/docs)

---

**Pro Tips**:
1. Always test locally before deploying
2. Keep your commits descriptive
3. Regular small updates are better than large changes
4. Consider adding Google Analytics for traffic insights
5. Add a custom favicon to stand out

Good luck with your portfolio! 🚀
