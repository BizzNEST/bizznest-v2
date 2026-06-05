# Agency Website Redesign

## Project Overview
This is a collaborative agency website redesign. Two contributors are working on this repo, so consistency and communication matter throughout.

## Tech Stack

### Frontend
- React 19 — component-based UI
- Vite 6 — build tool and dev server
- Plain CSS — per-component `.css` files plus a shared `global.css`
- Lucide React — icon library only; no other icon packages
- No router — single-page, no React Router
- No state management — no Redux, no Zustand
- No TypeScript — all files are `.jsx`

## File and Folder Conventions
- Component files: `PascalCase.jsx` (e.g., `HeroSection.jsx`, `NavBar.jsx`)
- Stylesheet files: match the component name exactly (e.g., `HeroSection.css`)
- Asset files: `kebab-case` (e.g., `hero-bg.jpg`, `logo-dark.svg`)
- Keep components in `src/components/`, pages or sections in `src/sections/`, and global styles in `src/styles/`
- One component per file — no bundling multiple exports into a single file

## Design Tokens
- All brand colors, type sizes, spacing values, and border radii live in `global.css` as CSS custom properties
- Never hardcode color values, font sizes, or spacing inline — always reference a token
- If a new token is needed, add it to `global.css` first and note it in the PR or commit message

## Communication Preferences
- Keep responses concise and focused
- No emojis unless asked
- When something is unclear, ask rather than assume

---

## Workflow Rules

### Think Before Coding
Before writing any code for a feature or fix, always present a brief plan that covers:
1. What the change does and why
2. Which files will be affected
3. Any edge cases or risks to flag

Then explicitly ask: **"Does this plan work for you?"** and wait for a clear yes before proceeding.

This applies to new features, refactors, and anything that touches more than one file.

### Ask Before Installing
Never install a new package without asking first. State:
- What the package is
- Why it is needed
- Whether something already in the project could handle it instead

This applies to dev dependencies too.

### Stay in Scope
Do not refactor, rename, or restructure anything outside the scope of the current task. If a refactor opportunity is spotted, flag it separately rather than bundling it in.

### Never Delete Without Confirmation
No files, folders, or assets should be deleted without explicit confirmation. If something seems unused, flag it — do not remove it unilaterally.

---

## Git Workflow
- Always work on a feature branch — never commit directly to `main`
- Branch naming: `feature/<short-description>` (e.g., `feature/contact-section`)
- Commit at meaningful checkpoints — when scaffolding is done, a component works, or a section is complete
- Always show the proposed commit message and ask for approval before committing
- Write commit messages that explain what changed and why, not just what the file is
- Never squash or amend commits — preserve the full history
- Flag when a feature is ready to merge — never merge without confirmation from both contributors

## Session Notes
- After every working session, create a markdown file in `sessionNotes/`
- Name it using the format: `YYYY-MM-DD.md`
- Each file should include:
  1. What was worked on or discussed
  2. Any decisions made and why
  3. Open questions or next steps

---

## Security
- Never commit `.env` files or any file containing API keys, tokens, or credentials
- If an `.env.example` is needed, include only variable names with no values
- Always check `.gitignore` before staging files

---

## What to Avoid
- Adding Tailwind, CSS-in-JS, or any additional styling system — the project uses plain CSS only
- Installing icon libraries beyond Lucide React
- Introducing TypeScript or `.ts`/`.tsx` files
- Adding a router or state management library without a conversation first
- Hardcoding any value that should be a design token
- Pushing to a staging or production URL without a review pass from both contributors
