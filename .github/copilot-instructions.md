<!-- Copilot instructions for contributors and AI agents working on L-square-QTify -->

# L-square-QTify — AI Agent Instructions

This repository contains a Create React App based frontend located inside the `qtify/` folder. The instructions below are concise, actionable, and specific to patterns and files actually used in this project.

- **Project root**: The runnable app lives in `qtify/` (run commands there).
- **Start locally**: `cd qtify` then `npm start` (CRA dev server).
- **Build**: `cd qtify` then `npm run build`.
- **Tests**: `cd qtify` then `npm test` (uses CRA test runner).

**Big picture / architecture**

- **Single-page React app (Create React App)**: code under `qtify/src/` — entry is `qtify/src/index.js` and main component `qtify/src/App.js`.
- **Component structure**: UI components are organised under `qtify/src/Components/<Name>/` with the component file and a CSS module (e.g., `Navbar/Navbar.jsx` + `Navbar.module.css`). Follow this pattern for new components.
- **Styling**: CSS Modules are used (`*.module.css`) alongside global `index.css` and `App.css`.
- **State / routing**: `react-router-dom` is used for navigation; examples: `Navbar` + `Search` use `useNavigate` to route to `/album/{slug}`.
- **UI library**: Material UI v7 is used (`@mui/material`, `@mui/system`) and `@mui/icons-material`.

**Important files / places to inspect**

- `qtify/package.json` — project dependencies and scripts.
- `qtify/src/Components/Search/Search.jsx` — shows data-shape expectations, usage of `useAutocomplete`, and how selection navigates to an album.
- `qtify/src/Components/Navbar/Navbar.jsx` — example of wiring `Search` into the header and using a CSS module.
- `qtify/src/helpers/helpers.js` — lightweight helpers used across components (e.g., `truncate`).
- `qtify/src/assets/` — images and SVGs used by components.

**Data shapes & component contracts (practical examples)**

- `Search` expects `searchData` to be an array of objects with at least: `title` (string), `slug` (string), and `songs` (array). Each `song` should have an `artists` array. Example usage in code:

  getOptionLabel: (option) => option.title

  When rendering the list, the code does:

  - `const artists = option.songs.reduce(...);` then `artists.join(", ")` and `truncate(...)` — preserve this shape when providing mock or real data.

**Conventions & patterns to follow**

- One component per folder: `<ComponentName>/<ComponentName>.jsx` (or `.jsx`) plus `<ComponentName>.module.css`.
- Default exports for components (see `Logo.jsx`, `Hero.jsx`).
- Prefer relative imports within `qtify/src` (e.g., `../../helpers/helpers`).
- Keep presentation separated from data loading: components like `Search` accept props (`searchData`) rather than fetching themselves.
- Use MUI styled components where already used (`styled('ul')` pattern in `Search.jsx`).

**Editing and PR guidance for AI code edits**

- Limit changes to `qtify/src` unless updating repo-level config.
- When adding a component, create a folder under `qtify/src/Components/<Name>/` with the `.jsx` and CSS module, and export as default.
- If altering `searchData` shape, update `Search.jsx` accordingly and add unit tests if behavior changes.

**Build, test, and debug steps (Windows `cmd.exe`)**

```
cd qtify
npm install         # if dependencies not installed
npm start           # run dev server
npm test            # run tests
npm run build       # production build
```

**What to avoid / watch out for**

- Do not move the CRA app out of `qtify/` or change `react-scripts` unless you know the implications for the build chain.
- Be careful with image imports: some files use `require('../../assets/..')` and others use static imports — keep imports consistent per-file.

If any section here is unclear or you want the instructions tightened for a specific task (tests, routing changes, backend API integration), tell me which area to expand and I'll iterate.
