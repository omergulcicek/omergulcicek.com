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
