# Matthew Cantor — Portfolio

Personal portfolio for an aspiring product manager. Built with **Vite + React + Tailwind v4**, deployed to **GitHub Pages**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

## Where to edit content

Everything you'll touch lives in `src/content/` — no component code needed.

| File | What's in it |
| --- | --- |
| `src/content/site.js` | Your name, role, email, social links, bio, skills |
| `src/content/projects.js` | The three projects (and any you add later) |

**Pages:** Home, Projects, About. Each project links to its own project page
at `/projects/<slug>`.

- **Add a project:** copy a block in `projects.js`, give it a unique `slug`. It automatically appears on `/projects` and gets a page at `/projects/<slug>`.
- **Images:** drop files in `public/projects/` and point a project's `cover` at them (e.g. `/projects/proptera.png`). Headshot → `public/portrait.jpg`. Missing files fall back gracefully.

## Deploy to GitHub Pages

Two paths — pick one:

**A. Automatic (recommended).** Push to `main`. The workflow in
`.github/workflows/deploy.yml` builds and deploys. In your repo:
Settings → Pages → Build and deployment → Source = **GitHub Actions**.

**B. Manual.** `npm run deploy` (uses the `gh-pages` package).

### User page vs project page

- **User page** (`https://mattcantor.github.io`): repo named `mattcantor.github.io`.
  Keep `base: "/"` in `vite.config.js` and `pathSegmentsToKeep = 0` in `public/404.html`. (Current defaults.)
- **Project page** (`https://mattcantor.github.io/portfolio`): any other repo name.
  Set `base: "/portfolio/"` in `vite.config.js` **and** `pathSegmentsToKeep = 1` in `public/404.html`.

The `404.html` + `index.html` redirect pair makes deep links (e.g. `/work/proptera`)
work on GitHub Pages, which otherwise has no server-side routing.

## Design

"Modern & Technical" direction — deep-ink canvas, electric-lime signal accent,
Bricolage Grotesque (display) / Hanken Grotesk (body) / JetBrains Mono (labels),
with film grain and a drifting hero glow.
