# Student Portfolio PWA

A Vite + React + Tailwind personal portfolio that includes:

- Hero/About, Skills, Projects, and Contact sections
- Client-side PDF export
- Responsive design
- PWA install support
- GitHub Pages deployment support

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a GitHub repository for this project.
2. Push this code to the `main` branch.
3. In GitHub repository settings, enable Pages and choose **GitHub Actions** as the source.
4. The included workflow in `.github/workflows/deploy.yml` will deploy automatically.

## Manual deployment option

If you prefer the `gh-pages` package script, run:

```bash
npm run build
npm run deploy
```

If needed, set `BASE_PATH=/<your-repo-name>/` before building for project pages.

## Customization

Edit the data in `src/App.jsx`:

- `portfolio`
- `skills`
- `projects`

Update the PDF file name in `handleDownloadPdf()`.
