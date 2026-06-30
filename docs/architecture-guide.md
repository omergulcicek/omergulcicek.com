# Architecture Constitution

## Technical Stack (SSOT)

| Layer | Technology | Authority (Rule Ref) |
| :--- | :--- | :--- |
| **Server State** | TanStack Query | `tanstack-query.mdc` |
| **Client State** | Zustand | `state-management.mdc` |
| **Validation** | Zod | `typescript.mdc` |
| **UI / Styling** | shadcn/ui + Tailwind | `ui-components.mdc` |
| **API Client** | Axios (Centralized) | `api.mdc` |

## Framework Isolation Boundary

Implementation details for Next.js and TanStack Start are strictly segregated. Framework-specific patterns are delegated to their respective .mdc rules.

- **Next.js 16:** See `.cursor/rules/nextjs.mdc`
- **TanStack Start:** See `.cursor/rules/tanstack-start.mdc`

**Shared Layer:** Reserved strictly for framework-agnostic code (`shared/schemas`, `ui-primitives`).

## Global Directory Hierarchy

Adhere strictly to the following tree structure. Creating arbitrary folders is FORBIDDEN:

```text
src/
├── app/ | routes/
├── features/
│   └── [feature-name]/
│       ├── api/
│       ├── components/
│       ├── constants/
│       ├── data/
│       ├── helpers/
│       ├── hooks/
│       ├── schemas/
│       ├── stores/
│       ├── types/
│       └── index.ts
├── components/
│   ├── icons/
│   ├── layout/
│   ├── shared/
│   └── ui/
├── config/
├── constants/
├── helpers/
├── hooks/
├── i18n/
├── lib/
├── messages/
├── providers/
├── schemas/
├── stores/
├── styles/
├── types/
└── env.ts
```

## Shared vs. Feature Matrix (The Rule of Three)

Apply the following metric hierarchy to determine code location:

- **Default Scope:** All logic and components originate within `features/[feature]/`.
- **Promotion:** Any logic or component requested by 2 different features MUST be moved to the global `src/` (shared) layer.
- **Cross-Import Ban:** Direct imports between features are FORBIDDEN. Communication is restricted to the `src/shared` layer or via prop-drilling at the Page level.
- **Helpers:** Pure TypeScript functions that strictly transform input to output without side effects. MUST NOT contain any package imports. (e.g., `isBrowser()`).
- **Data:** Feature-specific static data (lists, config objects, constants). ONLY allowed within `features/[feature]/data/`.
- **Lib:** Contains project-specific configured instances of external libraries (axios, date-fns, js-cookie, etc.). Files containing package imports MUST be placed here. Pure TS functions without package imports belong in `helpers`. (e.g., `isToday()` using date-fns goes to `lib`, `isBrowser()` goes to `helpers`).
- **Media URLs:** Blog image paths resolve at render time via `src/lib/media/get-media-url.ts` (`getMediaUrl`). Provider is controlled by `VITE_MEDIA_PROVIDER` — see `docs/supabase-migration.md` → Medya sağlayıcı.
- **Zod Schemas:** All feature-related schemas MUST be stored in `features/[feature]/schemas/`. API functions and UI components MUST import from this single source to prevent duplication.

## Imports

- **Path Aliases:** Usage of path aliases is MANDATORY.
- **Parent-Relative:** Parent-relative imports (`../`, `../../`) are FORBIDDEN. Use absolute path aliases.

## Server State & Ownership

Server state is global, but access is hierarchical:

- **Ownership:** Every API hook belongs to its respective feature. Promote to `src/hooks/api` only if shared.
- **Invalidation:** Cross-feature cache invalidation is permitted only via the global `Query Key Factory`.
- **Defaults:** StaleTime: ~60s (Lists), ~5m (Details). Centralized management: `src/providers/query-provider.tsx`.

## Rendering & Access Control

Rendering strategies (RSC vs Client) and Data Fetching patterns are governed by the active framework's specific rule file.

- **No HTTP in UI:** UI layer is FORBIDDEN from using `axios` or `fetch` directly. Consume only `features/api` functions.
- **Insecure Scripts:** All content MUST adhere to the project's Content Security Policy; `unsafe-inline` and `unsafe-eval` are strictly forbidden.

## UI Patterns (Links & Cards)

Prose links and interactive project cards have a single implementation — do not duplicate Tailwind class strings in features.

| Pattern | SSOT | Doc |
| --- | --- | --- |
| Prose typography | `proseParagraphClass`, `ProseEmphasis`, `SectionHeading`, `PageHeader` | `docs/UI-PATTERNS.md` |
| Inline / prose links | `ProseLink`, `ProseIconLink`, `ProseRouterLink` → `src/components/shared/prose-link.tsx` | `docs/UI-PATTERNS.md` |
| Project card surface | `getInteractiveCardClassName` → `src/components/shared/interactive-card.styles.ts` | `docs/UI-PATTERNS.md` |
| Project card component | `FeaturedProjectCard` → `src/features/projects/components/featured-project-card.tsx` | `docs/PROJECTS.md` |

Home (`FeaturedProjects`) and `/projects` share `FeaturedProjectCard` — no forked card markup.

## Canonical Rules (MDC Refs)

This document is the architectural map. Enforceable laws are located in:

- `Ref: .cursor/rules/api.mdc`
- `Ref: .cursor/rules/core-principles.mdc`
- `Ref: .cursor/rules/forms.mdc`
- `Ref: .cursor/rules/i18n.mdc`
- `Ref: .cursor/rules/nextjs.mdc`
- `Ref: .cursor/rules/performance.mdc`
- `Ref: .cursor/rules/react-best-practices.mdc`
- `Ref: .cursor/rules/state-management.mdc`
- `Ref: .cursor/rules/tanstack-query.mdc`
- `Ref: .cursor/rules/tanstack-start.mdc`
- `Ref: .cursor/rules/testing.mdc`
- `Ref: .cursor/rules/typescript.mdc`
- `Ref: .cursor/rules/ui-components.mdc`
