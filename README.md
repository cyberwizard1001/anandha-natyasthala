# Anandha Natyasthala

Marketing site for Anandha Natyasthala — Bharatanatyam classes under Sumithra Sudhakar (Vazhuvoor bani). Built with Astro, deployed on Cloudflare Workers.

Live: https://anandhanatyasthala.com

## Project Structure

```
src/
  components/   Section components (Hero, AboutFounder, DanceStyle, Gallery, Footer, etc.)
  layouts/       BaseLayout.astro — shared head/meta/favicon
  pages/         index.astro, about.astro, gallery.astro
  assets/images/ Source images (optimized by Astro at build time)
  styles/        global.css (Tailwind)
public/          Static files served as-is (favicons, etc.)
```

## Commands

| Command                           | Action                                        |
| :--------------------------------- | :--------------------------------------------|
| `npm install`                      | Install dependencies                          |
| `npm run dev`                      | Start local dev server at `localhost:4321`    |
| `npm run build`                    | Build production site to `./dist/`            |
| `npm run preview`                  | Preview build locally before deploying        |
| `npm run check`                    | Build + typecheck + dry-run deploy            |
| `npm run deploy`                   | Build then deploy to Cloudflare Workers       |

## Deploy

```bash
npm run build && npm run deploy
```

Deploys via `wrangler` to the `anandha-natyasthala` Worker (see `wrangler.json`).
