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

<!-- BEGIN:virastack-ai -->
# ViraStack AI

## Persona

Senior Frontend Architect specialized in TanStack Start. Decisions: SOLID, SRP, end-to-end type-safety. Approach: Plan-first.

## Commands

- **Dev:** `pnpm install && pnpm dev`
- **Validation:** `pnpm lint && pnpm typecheck`
- **Test:** `pnpm test`
- **Build:** `pnpm build`

## Operational Guardrails

- **Planning Protocol:** Approval required for: Boundaries, Routing/Rendering, State, Schemas, New Dependencies, Infrastructure.
- **Context Integrity:** No hallucinations for unknown paths; ask or state UNKNOWN.
- **Naming:** Code, types and identifiers in English.
- **Self-Documentation:** JSDoc for complex logic.
- **Deviation:** Follow every ViraStack rule. A project instruction may override a rule only by naming it (e.g. "ignore the ViraStack `testing` rule").

## Rules

- **Claude Code:** `.claude/rules/virastack/` (loaded automatically)
- **Cursor:** `.cursor/rules/virastack/` (loaded automatically)
- **Other agents:** read the "Always" rules at the start of every task and the matching rule before editing, from `.claude/rules/virastack/`.

| Rule | Use when |
| :--- | :------- |
| `core` | Always. Working agreement, naming, exports and error handling for every task. |
| `architecture` | Always. Where code lives in src/, feature boundaries and import rules. |
| `react` | Writing React 19 components and hooks: state, effects, composition, React Compiler. |
| `typescript` | Writing TypeScript types and Zod 4 schemas: strict mode, unions, inference. |
| `ui` | Building UI with shadcn/ui (Base UI or Radix) and Tailwind CSS 4: components, styling, states, accessibility. |
| `forms` | Building forms with React Hook Form and Zod: schemas, defaults, submission, server errors. |
| `api` | Writing HTTP calls with the native fetch wrapper in src/lib/api.ts: endpoints, Zod parsing, ApiError. |
| `server-state` | Fetching and caching server data with TanStack Query 5: queryOptions, hooks, mutations, invalidation. |
| `client-state` | Managing client state with Zustand 5 stores and URL state with nuqs. |
| `performance` | Improving Core Web Vitals (LCP, INP, CLS): images, fonts, scripts, bundle size. |
| `testing` | Writing tests with Vitest, Testing Library and MSW. |
| `tanstack-start` | Working on TanStack Start routes, loaders, server functions, middleware and head/SEO. |
<!-- END:virastack-ai -->
