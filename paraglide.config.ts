import type { paraglideVitePlugin } from "@inlang/paraglide-js"

/**
 * Paraglide's compiler options, shared by vite.config.ts and vitest.config.ts. `pnpm install`
 * compiles without them (no urlPatterns), so tests must compile with these too or English URLs
 * get a trailing slash.
 */
export const paraglideOptions: Parameters<typeof paraglideVitePlugin>[0] = {
  project: "./project.inlang",
  outdir: "./src/paraglide",
  // The URL alone decides the language: no redirect ever comes from a cookie or a header.
  strategy: ["url", "baseLocale"],
  urlPatterns: [
    // Without this entry, the English home page comes out as `/en/`, which the router redirects.
    {
      pattern: "/",
      localized: [
        ["en", "/en"],
        ["tr", "/"]
      ]
    },
    {
      pattern: "/:path(.*)?",
      localized: [
        ["en", "/en/:path(.*)?"],
        ["tr", "/:path(.*)?"]
      ]
    }
  ]
}
