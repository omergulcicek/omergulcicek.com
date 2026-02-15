# Project Memories & Context

This file serves as a persistent memory bank for the project. It documents key decisions, context, and evolution of the codebase that might not be obvious from the code itself.

## Context
- **Project Goal:** Personal website and blog of Ömer Gülçiçek.
- **Core Domain:** Personal branding, blog, portfolio.

## Key Decisions
- **Kaide Compliance:** The project follows the [Kaide](https://github.com/omergulcicek/kaide) architecture rules.
  - **Features:** `home`, `blog`, `bookmarks`, `about`, `projects`, `experience`.
  - **Content:** `src/content/` is kept global as an exception for this content-driven site.
  - **Stack Exceptions:** TanStack Query, Zustand, Axios, and i18n are NOT currently used in this project, although mentioned in Kaide rules. These rules serve as reference for future scalability.
- **Widgets Removal:** The `widgets` folder was removed and components were distributed to `features` or `components/shared` based on usage.

## Evolution
- [2026-02-15] - **Kaide Refactor:** Full refactor to align with Kaide architecture. Moved to `features/` structure, updated naming conventions, and cleaned up `widgets`.
