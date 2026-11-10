# koul1sh.github.io

Blog built with [Astro](https://astro.build) and the [AstroSage](https://github.com/chintak/astro-sage) theme, deployed to GitHub Pages.

## Layout

| Path | What it is |
|---|---|
| `src/content/posts/` | Posts (`.md` or `.mdx`; a folder with `index.mdx` also works) |
| `src/content/pages/about.md` | The About page |
| `sage.config.ts` | Site settings: title, author, socials, theme options |
| `public/` | Static files (favicon, images served as-is) |
| `astro.config.ts`, `src/content.config.ts` | Wiring for the theme |

The theme itself is the `astro-sage` npm package. No theme code lives in this repo.

## Commands

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # type-check, build to dist/, build search index
pnpm preview
```

## New post

```yaml
---
title: "Post title"
description: "One-line summary."
pubDatetime: 2026-11-10T12:00:00Z
tags: ["tag"]
draft: false
math: false   # set true only when the post uses $...$ math
---
```

Pushing to `main` deploys via `.github/workflows/deploy.yml`.
