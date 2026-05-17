# Otti

A clickable prototype of the **Otti** mobile app — a gentle companion for parents of children with cochlear implants, built for SJID.

Implemented from the design handoff in `design_package/` as a React web app. No build step: open `otti-app/index.html` in a browser to run.

## Repository layout

- `otti-app/` — the clickable prototype (React + Babel-standalone via CDN)
  - `index.html` — entry, with all JSX inlined
  - `src/` — source `.jsx` modules (tokens, iOS frame, screens, router)
  - `assets/` — original mascot SVG (also inlined in code as a safety net)
- `design_package/` — the original Claude Design handoff (HTML/CSS/JS prototypes, transcripts)

## Running

```
# Just open in a browser — no install, no build:
otti-app/index.html
```

The prototype renders one iPhone frame at a time with state-driven navigation across 25 screens. Use the **All screens** drawer (top-left) to jump anywhere, or click through realistic flows (Splash → Sign in → Onboarding → Home, etc.).

## Stack

- React 18 (UMD via unpkg)
- Babel-standalone (in-browser JSX transform)
- Plus Jakarta Sans (Google Fonts)
- No bundler, no Node, no install
