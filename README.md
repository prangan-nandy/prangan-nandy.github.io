# Prangan Nandy Portfolio Website

This folder contains the complete static website for:

`https://prangan-nandy.github.io/`

The site uses only HTML, CSS, and JavaScript. There is no installation, build command, paid hosting, database, or framework.

## Files in this folder

- `index.html` — all website text and page structure
- `style.css` — colors, spacing, responsive layout, animations, portrait design, and mobile menu
- `script.js` — menu behavior, theme switch, active navigation, and scroll animations
- `profile-photo.jpg` — the image displayed in the hero section
- `profile-placeholder.svg` — backup image if `profile-photo.jpg` cannot load
- `Prangan_Nandy_CV.pdf` — the PDF opened by every CV button
- `Prangan_Nandy_Resume.pdf` — the one-page resume
- `favicon.svg` — the small PN icon shown in the browser tab

## A. Publish the redesigned website through GitHub

### 1. Download and unzip the package

Download the ZIP package from ChatGPT and extract it on your computer.

Open the extracted folder. You should see the files listed above. Do not upload the ZIP file itself.

### 2. Open the GitHub repository

Go to:

`https://github.com/prangan-nandy/prangan-nandy.github.io`

Make sure you are signed in to the `prangan-nandy` GitHub account.

### 3. Upload the replacement files

On the main repository page:

1. Click **Add file**.
2. Click **Upload files**.
3. Drag these files from the extracted folder into the upload area:
   - `index.html`
   - `style.css`
   - `script.js`
   - `profile-photo.jpg`
   - `profile-placeholder.svg`
   - `favicon.svg`
   - `Prangan_Nandy_CV.pdf`
   - `Prangan_Nandy_Resume.pdf`
4. GitHub may warn that some files already exist. That is expected: the upload will replace their contents after the commit.
5. In the commit-message box, enter: `Update portfolio design and content`
6. Choose **Commit directly to the main branch**.
7. Click **Commit changes**.

You do not need to upload `README.md`, but keeping it in the repository is useful for future reference.

### 4. Check GitHub Pages

Open **Settings → Pages** and confirm:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

The site should update after GitHub completes the deployment. Refresh:

`https://prangan-nandy.github.io/`

Use a hard refresh if the old design is cached:

- Windows/Linux: `Ctrl + Shift + R`
- macOS: `Command + Shift + R`
- Mobile: close the browser tab, reopen the site, or clear the browser cache for the page

## B. Add your real photo

The package currently contains a polished placeholder because no personal photo was supplied with the CV or resume. You do not need to edit any code to add your photo.

### Recommended photo

Use one of these:

- A professional portrait with a simple background
- A conference presentation photo cropped around you
- A laboratory photo where you are clearly visible
- A clean outdoor portrait with natural light

A vertical image works best. Recommended dimensions are approximately `1200 × 1500` pixels, using a 4:5 portrait ratio.

### Replace the placeholder

1. Choose the photo on your computer.
2. Crop it vertically if needed.
3. Export it as a JPG.
4. Rename the file exactly: `profile-photo.jpg`
5. Open the GitHub repository.
6. Click **Add file → Upload files**.
7. Upload the new `profile-photo.jpg`.
8. Commit with: `Replace profile photo`

The hero section will display the new image automatically. Do not change the spelling, capitalization, extension, or location of the filename.

If your image is a PNG instead, either convert it to JPG or change this line in `index.html`:

`src="profile-photo.jpg"`

to:

`src="profile-photo.png"`

Using the JPG filename is easier because no code change is required.

## C. Keep the CV button permanently updated

Every CV button points to:

`Prangan_Nandy_CV.pdf`

Whenever the CV changes:

1. Export the updated CV as PDF.
2. Rename it exactly: `Prangan_Nandy_CV.pdf`
3. Upload it to the repository root through **Add file → Upload files**.
4. Replace the existing file.
5. Commit with: `Update academic CV`

All CV buttons will immediately point to the new document after deployment. You never need to edit the buttons as long as the filename remains identical.

The resume works the same way. Replace:

`Prangan_Nandy_Resume.pdf`

with an updated PDF using the same filename.

## D. Edit text in the future

All visible text is in `index.html`.

1. Open `index.html` in the GitHub repository.
2. Click the pencil icon.
3. Use `Ctrl + F` or `Command + F` to find the exact sentence, project title, employer, or section heading.
4. Edit only the words between the HTML tags.
5. Commit the change.

Example:

```html
<h3>Unravelling the Coupled Physics of Piezoelectric Materials and Plasma Behavior</h3>
```

Only replace the words between `<h3>` and `</h3>`. Keep the angle-bracket tags intact.

## E. Add a new publication

In `index.html`, find the section beginning with:

```html
<section class="section section-tinted" id="publications">
```

Copy one complete published-paper block and paste it below the last paper. Then update:

- publication year
- title
- journal and citation details
- DOI URL in both `href` locations

A DOI link should look like:

`https://doi.org/10.xxxx/xxxxx`

Keep `target="_blank"` and `rel="noopener"` so the paper opens safely in a new tab.

## F. Edit the Beyond the Lab section

Search `index.html` for:

```html
<section class="section beyond-section" id="beyond">
```

The section currently includes gaming, travel, and soccer. You can change the descriptions or game names without touching the CSS.

To add personal photos later, the simplest next improvement is a small travel/gallery section. Keep image files compressed for fast mobile loading; JPG or WebP images around 200–500 KB each are ideal.

## G. Mobile menu behavior

The mobile menu uses a fully opaque full-screen background. Its behavior is controlled by:

- mobile styles near the end of `style.css`
- menu open/close logic near the top of `script.js`

It closes when:

- a navigation link is selected
- the Escape key is pressed
- the browser is resized to desktop width

Avoid deleting the `body.menu-open`, `.nav-links.open`, or `aria-expanded` code when making future edits.

## H. Important privacy reminder

Everything in this public GitHub repository can be viewed and downloaded by anyone. Do not upload:

- passwords
- API keys
- private identification documents
- private home-address information
- files containing confidential research data

The public contact section currently shows the work and personal email addresses supplied in the CV.
