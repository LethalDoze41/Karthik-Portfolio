# Karthik Hegde Portfolio Website

A modern, responsive portfolio website built with React and deployed on GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Timeline**: Visual representation of professional experience
- **Skills Showcase**: Organized display of technical competencies
- **Contact Integration**: Easy-to-access contact information
- **Performance Optimized**: Fast loading with optimized assets

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🛠️ Setup Instructions

### 1. Clone or Download the Files

First, create a new GitHub repository for your portfolio, then:

```bash
# Create a new directory for your portfolio
mkdir karthik-portfolio
cd karthik-portfolio

# Initialize git
git init

# Copy all the provided files into this directory
```

### 2. Update package.json

Open `package.json` and update the homepage URL with your GitHub username and repository name:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME"
```

Example:
```json
"homepage": "https://karthikhegde.github.io/portfolio"
```

### 3. Install Dependencies

```bash
# Install all required packages
npm install

# or if using yarn
yarn install
```

### 4. Customize Content

The portfolio content is in `App.jsx`. You can update:
- Contact information
- LinkedIn profile URL
- Certification verification links
- Any other personal details

### 5. Test Locally

```bash
# Start the development server
npm start

# or
yarn start
```

Your portfolio will open at [http://localhost:3000](http://localhost:3000)

### 6. Build for Production

```bash
# Create optimized production build
npm run build

# or
yarn build
```

## 🚀 Deploy to GitHub Pages

### Initial Setup

1. **Create a GitHub repository** for your portfolio

2. **Connect your local repository to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

3. **Push your code**:
```bash
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git push -u origin main
```

### Deploy

```bash
# Deploy to GitHub Pages
npm run deploy

# or
yarn deploy
```

This command will:
1. Build your project
2. Create a `gh-pages` branch
3. Deploy the build folder to GitHub Pages

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, ensure **gh-pages** branch is selected
4. Your site will be available at the URL specified in your `homepage` field

## 📝 Updating Your Portfolio

To make updates:

1. Make changes to your files
2. Test locally with `npm start`
3. Commit changes:
```bash
git add .
git commit -m "Update description"
git push
```
4. Deploy updates:
```bash
npm run deploy
```

## 🎨 Customization

### Colors
Edit the CSS variables in `App.css`:
```css
:root {
  --primary: #0A0E27;
  --accent: #3B82F6;
  /* ... other colors */
}
```

### Fonts
The portfolio uses Google Fonts (Syne and IBM Plex Sans). You can change these in the `@import` statement in `App.css`.

### Content Structure
- **Hero Section**: Introduction and key stats
- **About**: Professional summary
- **Experience**: Timeline of work history
- **Skills**: Technical competencies
- **Education**: Academic background and certifications
- **Contact**: Contact information

## 📱 Mobile Responsiveness

The portfolio is fully responsive with breakpoints at:
- 1024px (Tablet landscape)
- 768px (Tablet portrait)
- 480px (Mobile)

## 🔧 Troubleshooting

### Deploy Issues
- Ensure your `homepage` field in `package.json` is correct
- Check that gh-pages package is installed: `npm install --save-dev gh-pages`
- Clear cache and retry: `rm -rf node_modules/.cache && npm run deploy`

### 404 Error on GitHub Pages
- Wait a few minutes for GitHub Pages to update
- Check repository Settings → Pages to ensure it's enabled
- Verify the URL matches your homepage setting

## 📄 Additional Files Needed

### Create these files in your public folder:

1. **public/manifest.json**:
```json
{
  "short_name": "KH Portfolio",
  "name": "Karthik Hegde Portfolio",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#0A0E27",
  "background_color": "#030712"
}
```

2. **public/robots.txt**:
```
User-agent: *
Disallow:
```

## 🤝 Support

If you encounter any issues or need assistance, please feel free to:
1. Check the [React documentation](https://reactjs.org/)
2. Review [GitHub Pages documentation](https://pages.github.com/)
3. Check [Create React App documentation](https://create-react-app.dev/)

## 📜 License

This portfolio template is available for personal use. Feel free to customize it for your needs!

---

**Note**: Remember to update the following with your actual information:
- GitHub username in package.json
- Contact information in App.jsx
- LinkedIn profile URL
- Certification verification links
- Resume download link (you'll need to add your resume PDF to the public folder)

Good luck with your portfolio! 🎉
