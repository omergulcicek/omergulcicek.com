# AGENTS.md

## Project: omergulcicek.com

Personal site and blog of Ömer Gülçiçek. Turkish-only site; code, types and naming in English.

- **Commands:** `pnpm lint && pnpm typecheck && pnpm test:run` after every change (`typecheck` = `check-types`).
- **Chat:** Reply to the user in Turkish.
- **Content SSOT:** facts in `src/constants/me.json` (validated by `src/schemas/me.schema.ts`), page copy in `src/constants/site-copy.constants.ts`. Components never hard-code user-facing text.
- **UI SSOT:** prose links → `ProseLink` / `ProseIconLink` / `ProseRouterLink` (`src/components/shared/prose-link.tsx`); typography and spacing tokens → `src/components/shared/prose.styles.ts`; card surfaces → `getInteractiveCardClassName` (`src/components/shared/interactive-card.styles.ts`).
- **Skills (always use when relevant):**
  - `writing-voice` — any Turkish text a reader sees.
  - `blog-post` — new posts and notes, Supabase rows, post images.
  - `spacing-standard` — padding, margin and gap in `src/`.
  - `better-ui`, `better-accessibility`, `emil-design-eng` — UI polish, accessibility and design review.
- **Supabase:** never write without showing the SQL first and getting explicit approval.
- **Decisions:** `docs/MEMORIES.md`.
- **ViraStack overrides (named, per the Precedence section):**
  - Ignore the ViraStack `react` rule on URL state: blog and bookmarks filters stay on `nuqs` (`createStandardSchemaV1` in `validateSearch`).
  - Ignore the ViraStack `ui` rule on semantic colors for brand and tag color maps in `*.constants.ts` (`bookmark-tag-icons`, `blog-tag-icons`, `interest-styles`, `virastack-colors`); components use tokens.
  - Ignore the ViraStack `api` rule on parsing every response with Zod where it would ship Zod to the client: only the GitHub responses in `features/projects` are parsed in the browser (`docs/MEMORIES.md`).
  - `src/components/ui` is shadcn output: never edited by hand, and exempt from the `react` and `ui` rules.

<!-- BEGIN:virastack-ai -->
# ViraStack AI

## Commands

- **Install:** `pnpm install`
- **Dev:** `pnpm dev`
- **Validate:** `pnpm lint && pnpm typecheck`
- **Test:** `pnpm test`
- **Test one file:** `pnpm vitest run <path>`
- **Build:** `pnpm build`

## Precedence

- Your project's own instructions override ViraStack rules; mention any conflict.
- Framework docs decide API facts.

## Rules

- **Claude Code:** `.claude/rules/virastack/` (loaded automatically)
- **Other agents:** read the "Always" rules at the start of every task and the matching rule before editing, from `.claude/rules/virastack/`.

| Rule | Use when |
| :--- | :------- |
| `core` | Always. Working agreement, naming, exports and error handling for every task. |
| `architecture` | Always. Where code lives in src/, feature boundaries and import rules. |
| `typescript` | Writing TypeScript types and Zod 4 schemas: strict mode, unions, inference. |
| `react` | Writing React 19 components and hooks: state, effects, composition, React Compiler. |
| `tanstack-start` | Working on TanStack Start routes, loaders, server functions, middleware and head/SEO. |
| `ui` | Building UI with shadcn/ui and Tailwind CSS 4: components, styling, states, accessibility. |
| `forms` | Building forms with React Hook Form and Zod: schemas, defaults, submission, server errors. |
| `api` | Writing HTTP calls with the native fetch wrapper in src/lib/api.ts: endpoints, Zod parsing, ApiError. |
| `server-state` | Fetching and caching server data with TanStack Query 5: queryOptions, hooks, mutations, invalidation. |
| `client-state` | Writing Zustand 5 stores: placement, actions, server rendering and persist. |
| `testing` | Writing tests with Vitest, Testing Library and MSW. |
| `performance` | Improving Core Web Vitals (LCP, INP, CLS): images, fonts, scripts, bundle size. |
<!-- END:virastack-ai -->
