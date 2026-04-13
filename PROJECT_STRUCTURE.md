# Project Structure

Your React portfolio project should have the following structure:

```
portfolio/
│
├── node_modules/          (created after npm install)
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── favicon.ico        (you need to add this)
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
├── README.md
└── DEPLOYMENT_GUIDE.md

```

## Setting Up the Folder Structure

1. Create a new folder for your project
2. Create `src` and `public` folders inside it
3. Move the files to their correct locations:
   - `App.jsx` and `App.css` → `src/` folder
   - `index.js` and `index.css` → `src/` folder  
   - `index.html`, `manifest.json`, `robots.txt` → `public/` folder
   - Other files stay in the root directory

## Important Notes

- The `node_modules` folder will be created automatically when you run `npm install`
- The `build` folder will be created when you run `npm run build`
- You need to add a favicon.ico file in the public folder (you can use any icon generator online)
- Optionally add logo192.png and logo512.png for better PWA support

## Adding Your Resume

To add a downloadable resume:

1. Save your resume as a PDF file (e.g., `Karthik_Hegde_Resume.pdf`)
2. Place it in the `public` folder
3. Update the download button in App.jsx:
   ```jsx
   <a href="/Karthik_Hegde_Resume.pdf" download>
     <button className="btn-download">
       Download Resume
     </button>
   </a>
   ```

This structure follows Create React App conventions and ensures smooth deployment to GitHub Pages.
