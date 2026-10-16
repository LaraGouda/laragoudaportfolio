# Lara Gouda’s little world

A cozy, Minecraft-inspired personal portfolio made with **HTML, CSS, and vanilla JavaScript**. No npm packages, framework, build process, account, or backend is needed. The artwork is decorative; every heading, paragraph, label, link, and button is a real HTML element.

## Preview

Open `index.html` directly in a browser. All images and fonts are local, and the JavaScript does not fetch data, so the page also works offline. External organization and project links need an internet connection.

For an optional local server, run this from the portfolio folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with Ctrl+C.

## Files

```text
index.html                       Semantic content, navigation, and image paths
style.css                        Palette, typography, PNG frames, responsive layout
script.js                        Editable project data and lightweight interactions
assets/
  headshot.png                    Current portfolio portrait
  LaraGoudaSWE -portfolio.pdf     Resume opened by the navigation button
  bluenile.png                   Blue Nile Catering website image
  wallsense.png                  WallSense project image
  followup.png                   FollowUp results image
  cookstack.png                  Original supplied artwork, kept as an unused asset
  profile-placeholder.svg        Optional original pixel adventurer placeholder
  portrait-frame.png             Your supplied decorative portrait overlay
  inventory-slot.png             Your supplied skill and achievement borders
  quest-panel.png                Your supplied detailed experience borders
  grass-divider.png              Your supplied repeating section transitions
  project-frame.png.png          Your supplied project card borders (actual filename)
  fonts/                         Bundled fonts and their open-source licenses
  other-original-artwork/        Original landscape and project illustrations
.openai/hosting.json             Optional Sites hosting identity and configuration
README.md
```

## Replace the profile picture

The hero currently uses `assets/headshot.png`. To update your photo, replace that file while keeping its name, or change the `profile-image` element’s `src` in `index.html` to another image path. The `<!-- PHOTO: ... -->` comment marks the customization point. Keep its `alt` text appropriate for the new image.

The photo uses its original resolution, with `object-fit: cover` and `scale(1.24)` for a gently zoomed crop. Adjust `.profile-image` in `style.css` to change the zoom or `object-position`. The `.portrait-photo` container extends slightly behind the frame to cover its irregular opening completely. The decorative PNG is a separate overlay; the photo has no pixel filter or canvas effect.

## Update the resume

The navigation's **Resume** button links to `assets/LaraGoudaSWE -portfolio.pdf`. Replace that PDF to update the resume, or edit the `.nav-resume` link in `index.html` if its filename changes. The link uses `target="_blank"` and has no `download` attribute so the browser can display it in another tab.

## Edit text, skills, and experience

Edit the clearly named sections in `index.html`: `home`, `about`, `experience`, `projects`, and `contact`. The About section uses your supplied short bio. Main experience bullets are visible without expanding anything, and their `<strong>` emphasis matches the supplied resume. The four additional campus roles include your detailed bullet points; roles without supplied dates deliberately have no invented dates.

The hero has a greeting on one line and one combined exploration button that starts at About Me. GitHub and LinkedIn sit below it with matching button widths, controlled by `--hero-button-width`. The About section places the journal above an eight-card **A Quick Glance** grid containing your university information and seven campus roles. Roles or degree information appear first, with organizations underneath. The degree and four current roles come first and have a **Present** label in the upper right. On desktop, the degree, Secretary, IT Support, and Research cards share the top row; Orientation Leader starts the second row. The degree's label reverses the role labels' background and text colors in both themes. This grid uses four columns on desktop and two on smaller screens, with extra spacing above and below it.

The Experience section uses compact frames, gaps, and line spacing to shorten the page while keeping every bullet visible.

Skills are ordinary list items inside `.skill-tiles`. Add or remove an `<li>` to update your inventory. The graduation label and footer year are deliberately editable text.

## Update or add a project

Edit the `PROJECTS` array at the top of `script.js`. Each object contains the name, optional date, image, description, full accomplishments, technology list, and links. Copy an existing object to add another project; the build count updates automatically. Use `compact: true` to place a project in the smaller cards below the three main builds. CookStack and World Happiness use this layout. No dates were supplied for these two projects, so their cards omit dates.

Set `image`, `imageAlt`, `imageWidth`, and `imageHeight` to match your local project image. `imageType: 'screenshot'` preserves a screenshot's normal rendering; `'artwork'` uses pixel-art styling. Images keep their proportions and open at full size in a new tab. The site uses your supplied Blue Nile, Wallsense, and FollowUp images. CookStack uses an original pixel recipe-book illustration in `assets/other-original-artwork/recipe-book.svg`.

World Happiness currently uses an original pixel globe as an illustration, not a fabricated screenshot. When your screenshot is ready, update its `image` path, dimensions, and alt text in `PROJECTS`, then set `imageType` to `'screenshot'`.

Set `liveUrl` or `githubUrl` to a confirmed `https://` destination. Use `null` when there is no confirmed URL: no broken or placeholder button will appear. All five projects have the GitHub URLs you supplied. The research model integration is explicitly described as research in progress, and the SBUHacks $20K+ amount remains a fundraising goal.

## Change external links

Personal and organization links live in `index.html`. Project links live in `PROJECTS` in `script.js`. External web links use `target="_blank" rel="noopener noreferrer"`. The email links use `mailto:laragoudaw@gmail.com` and open the visitor’s email application.

No dedicated research lab URL has been confirmed, so its campus badge is an informational element rather than a fabricated link.

## Palette, custom PNGs, and night mode

Edit the CSS variables in `:root` and `:root[data-theme='night']` at the top of `style.css`. The asset path variables are grouped there too. Your original PNG files are preserved without modification.

Grass dividers separate the main sections. Backgrounds alternate blue for Home, green for About, blue for Experience, green for Projects, and blue for Contact. Edit `--land-blue` and `--land-green` for the content colors; night mode has corresponding darker versions. The footer retains its dark brown background.

- `portrait-frame.png` is an independent decorative overlay with its original square proportions.
- `quest-panel.png` and `project-frame.png.png` use nine-slice `border-image` on pseudo-elements. Corners keep fixed dimensions at each breakpoint; edge strips repeat with `round`. The artwork’s center is omitted so the CSS surface and real HTML remain legible in both themes.
- `inventory-slot.png` supplies reusable nine-slice borders for skill tiles and the Wallsense achievement.
- `grass-divider.png` repeats horizontally at a fixed, uniformly scaled size. A short viewport clips its transparent margins; it is never stretched to fill the screen.
- PNG decoration uses `image-rendering: pixelated`. Night-mode filters affect the decorative layers rather than text or controls. Text remains selectable and accessible.

The actual supplied project filename is **`project-frame.png.png`**. If you rename it to `project-frame.png`, update only `--project-art` in `style.css`.

The theme switch remembers `day` or `night` under `lara-portfolio-theme` in `localStorage`. If storage is unavailable, switching still works for the current visit. A first visit defaults to day mode.

## Interactions and accessibility

The site includes a sticky navigation bar with current-section highlighting, a mobile menu with Escape support, visible keyboard focus, a skip link, reduced-motion support, and subtle card entrances. The dark brown footer centers the copyright and keeps a back-to-top link. The mobile navigation remains usable if JavaScript is disabled; project rendering requires JavaScript, with a basic `noscript` fallback.

Small original SVG cursors supply the regular pixel arrow and the hand used on links and buttons, both sized at 24 × 24 pixels. Their paths and hotspots are set in the `--cursor-default` and `--cursor-pointer` CSS variables. Standard browser cursors are provided as fallbacks.

## Deploy to GitHub Pages

1. Commit `index.html`, `style.css`, `script.js`, `assets/`, and this README to your GitHub repository.
2. Open the repository’s **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose your branch (usually `main`) and the **/ (root)** folder, then save.
5. GitHub will show the published URL after deployment completes.

All site asset paths are relative, so they work under a repository subpath. No build command or GitHub Actions workflow is necessary. `.openai/hosting.json` is for the optional Sites deployment and is not required by GitHub Pages.

Before sharing your GitHub Pages link, update `og:url` and `og:image` in `index.html` to your final public URL. The current values refer to the private Sites preview; they can also be removed until you choose a public hosting address. For broad social-card compatibility, you may later replace the SVG `og:image` with a public PNG screenshot of your own site.

## Artwork and fonts

The five decorative PNGs, headshot, and four project images were supplied by Lara. Additional SVG illustrations were created for this portfolio. No Minecraft textures, logos, or character assets are used. Press Start 2P and DM Sans are bundled under their SIL Open Font Licenses; the license files are in `assets/fonts/`.
