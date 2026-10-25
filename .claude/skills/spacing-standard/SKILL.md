---
name: spacing-standard
description: Spacing standard for omergulcicek.com. Use whenever you create or edit a page, section, card, grid, list or panel, or touch padding/margin/gap classes in src/. Maps every layout level to a token in src/components/shared/prose.styles.ts so spacing stays consistent across the site.
---

# Spacing standard

Spacing in this site is a fixed 6-level scale. Levels 1–5 come from tokens; never hand-write their Tailwind values in feature code. Level 6 (inside small components) is free.

Tokens live in `src/components/shared/prose.styles.ts` (and `interactive-card.styles.ts` for card surfaces). Import them; do not copy their class strings.

| Level | Mobile / desktop | Token | Use for |
| --- | --- | --- | --- |
| 1. Page vertical padding | 32 / 64px | `pageShellClass` | Root `StaggerContainer` (or wrapper) of every page. Includes level 2 gap. |
| 2. Between sections | 48 / 64px | `pageStackGapClass` | Gap between page header and sections, between sections, between year groups. |
| 3. Inside a section | 16 / 24px | `pageSectionClass` (`gap-4 md:gap-6`) | Section heading → content, rows of a list, stacked blocks in one section. |
| 4. Card grids | 12 / 20px | `cardGridClass` (2 columns) or `cardGridGapClass` | Any grid of cards. Pick your own `grid-cols-*`, always use `cardGridGapClass` for the gap. |
| 5. Inside cards and panels | 12 / 16px | `cardPaddingClass` | Cards, panels, TOC boxes, list rows that act as cards. `getInteractiveCardClassName()` already includes it. |
| 6. Inside small components | 4–8px | free (`gap-1`, `gap-1.5`, `gap-2`) | Chips, badges, icon + label, meta rows. |

Horizontal page gutters come from `Container` (`px-4 sm:px-6`, max `max-w-2xl`) and `bleedSectionClass` (`max-w-5xl`). Do not add extra page-level horizontal padding.

Section headings that follow other content use `sectionHeadingSpacingClass` (`mt-8 md:mt-12`) instead of a hand-written margin.

## Rules

- New page: wrap content in `StaggerContainer className={pageShellClass}`; put `PageHeader` and each section in its own `StaggerItem`. Do not add `mt-*` between them — the shell gap handles it.
- New section: `<section className={pageSectionClass}>` with a `SectionHeading` first.
- New card or panel: build on `getInteractiveCardClassName()` / `surfacePanelClass` + `cardPaddingClass`. Never `p-4 md:p-5`, `p-2`, etc.
- New grid of cards: `cn("grid grid-cols-…", cardGridGapClass)`.
- Responsive values must move together: if mobile uses the level's mobile value, desktop uses the level's desktop value. Do not mix levels (e.g. `gap-5 md:gap-4`).
- If a design needs a value outside the scale, stop and ask before adding it; if approved, add a named token to `prose.styles.ts` and use the token.

## Known exceptions (leave as is)

- Footer (`Footer.tsx`): its own rhythm, separate from page content.
- Dialogs and modals (e.g. `resume-modal.tsx`): `p-4 md:p-6`.
- Blog prose internals (tables, notices, MDX widgets in `blog-prose.css` and `blog-mdx-*`): part of article typography.
- Bookmark tile grid (`bookmarks-list-grid.tsx`): image tiles with captions need a larger row gap.
- GitHub activity widget (`github-activity.tsx`): padding is tuned to absolutely positioned content.
- Blog list rows (`gap-3` between rows): rows carry their own hover padding via `interactiveListRowBleedClass`.

## Review checklist

Before finishing a UI change, search the diff for `gap-`, `p-`, `px-`, `py-`, `mt-`, `mb-`:

1. Page, section, grid and card spacing uses a token from the table.
2. No new hand-written value duplicates a token (`gap-12 md:gap-16`, `gap-4 md:gap-6`, `p-3 md:p-4`, `gap-3 md:gap-5`).
3. Anything outside the scale is a listed exception or was approved and tokenized.
