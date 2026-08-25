# BizzNEST

Marketing site for BizzNEST — software development, design, and marketing studio.

## Stack

- **React 19** with **Vite 6**
- **React Router 7** — client-side routing, page components lazy-loaded
- **Plain CSS** — one `.css` file per component, shared tokens in `src/styles/global.css`
- **Lucide React** — the only icon library

No TypeScript, no CSS framework, no state management library.

## Getting started

```bash
npm install
npm run dev      # dev server with HMR
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Project structure

```
public/              Static assets (images, icons, videos) — served from /
src/
  components/        Reusable components + homepage sections, one per file
  sections/          Page-level components (Home, CaseStudyPage, ServicePage, ContactPage)
  data/
    caseStudies/     One file per case study + index.js registry
    services/        One file per service + index.js registry
  lib/               Small shared helpers (introGate, toolIcons)
  styles/global.css  Design tokens, resets, shared utility classes
```

## Routes

| Path | Component |
|---|---|
| `/` | `Home` |
| `/work/:slug` | `CaseStudyPage` |
| `/services/:slug` | `ServicePage` |
| `/contact` | `ContactPage` |

## Adding content

**A case study:** add a file to `src/data/caseStudies/`, then register it in
`src/data/caseStudies/index.js` as `'url-slug': importedData`. Use
`template.js` as the starting point — it documents every supported section and
which ones are optional. To surface it on the homepage, add an entry to the
`projects` array in `src/components/SelectedWork.jsx` with a matching `slug`.

**A service:** same pattern in `src/data/services/`, registered in that
folder's `index.js`. Service links live in `Header.jsx` and `Footer.jsx`.

Any case study section is omitted from the page if its key is absent from the
data file — except `client`, `date`, `tools`, and `goalsAndObjectives`, which
are always rendered and must be present.

## Conventions

See `CLAUDE.md` for the full working agreement — file naming, design tokens,
git workflow, and review expectations. The short version:

- Components are `PascalCase.jsx`; stylesheets match the component name exactly
- Assets are `kebab-case`
- Never hardcode a color, font size, spacing value, or radius that could be a
  token — add the token to `global.css` first and note it in the commit
- Work on a feature branch, never commit directly to `main`
