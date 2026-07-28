# Prangan Nandy Portfolio Website

This folder contains a complete static portfolio website for GitHub Pages.

## Files

- `index.html` - all website text and page structure
- `style.css` - layout, colors, responsive design, and animation
- `script.js` - mobile menu, theme toggle, scroll effects, and automatic footer year
- `favicon.svg` - the PN browser-tab icon
- `Prangan_Nandy_CV.pdf` - the academic CV opened by every CV button
- `Prangan_Nandy_Resume.pdf` - the one-page resume

## Publish through GitHub's website

1. Open `https://github.com/prangan-nandy/prangan-nandy.github.io`.
2. Open the existing `index.html`, click the pencil icon, select all old code, replace it with the new `index.html` code, and commit the change.
3. Repeat the same process for `style.css`.
4. Return to the repository's main page.
5. Click **Add file > Upload files**.
6. Upload `script.js`, `favicon.svg`, `Prangan_Nandy_CV.pdf`, and `Prangan_Nandy_Resume.pdf`.
7. Commit the uploaded files to the `main` branch.
8. Check **Settings > Pages** and confirm: **Deploy from a branch**, branch **main**, folder **/(root)**.
9. Wait for GitHub Pages to redeploy, then open `https://prangan-nandy.github.io/`.

## Keep the CV link permanently up to date

All CV buttons point to this exact filename:

`Prangan_Nandy_CV.pdf`

When the CV changes, replace the PDF in the repository with the new version but keep the filename exactly the same. No HTML edit is required, and every CV button will continue to open the latest uploaded file.

Use the same method for `Prangan_Nandy_Resume.pdf`.

## Safe edits

Open `index.html` and search for the text you want to change. Editing visible sentences normally does not require changing CSS or JavaScript.

Do not rename files unless you also update every matching filename inside `index.html`.
