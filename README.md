<div align="center">

<a href="https://omergulcicek.com" target="_blank" rel="noreferrer">
  <img src="public/favicon.svg" alt="omergulcicek.com" height="96" />
</a>

# omergulcicek.com

Personal website of Ömer Gülçiçek: blog, notes, projects, experiences and the things I use.

[omergulcicek.com](https://omergulcicek.com)

</div>

---

## Tech stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (SSR, file-based TanStack Router, server functions)
- **UI:** [React 19](https://react.dev) with React Compiler, [Tailwind CSS 4](https://tailwindcss.com), [Base UI](https://base-ui.com) primitives in the shadcn/ui style, [Lucide](https://lucide.dev) icons, [Geist](https://vercel.com/font) font
- **Language:** TypeScript (strict), [Zod 4](https://zod.dev)
- **Data:** [TanStack Query](https://tanstack.com/query), [Zustand](https://zustand.docs.pmnd.rs), [Supabase](https://supabase.com) for blog posts
- **Content:** [MDX](https://mdxjs.com) with [Shiki](https://shiki.style) code highlighting and GitHub Flavored Markdown
- **i18n:** [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs), English at `/` and Turkish at `/tr`
- **Extras:** command palette with [cmdk](https://cmdk.paco.me), Open Graph images with [@vercel/og](https://vercel.com/docs/og-image-generation), RSS feeds, sitemap and `llms.txt`
- **Tooling:** [Vite](https://vite.dev), [Vitest](https://vitest.dev) + Testing Library + MSW, ESLint, Prettier, Knip, Husky, Commitlint
- **Hosting:** [Vercel](https://vercel.com)

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Built with ViraStack Start

This site is bootstrapped with [**ViraStack Start**](https://github.com/virastack/start), a TanStack Start boilerplate with a feature-based architecture and the [ViraStack AI](https://github.com/virastack/ai) rules for coding agents. See [virastack.com](https://virastack.com) for more.

## License

[MIT](LICENSE) © Ömer Gülçiçek
