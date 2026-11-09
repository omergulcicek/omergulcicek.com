import { RETIRED_POSTS } from "@/features/blog/constants/retired-posts.constants"

const SLUG_PATTERN = /^[a-z0-9-]+$/

/**
 * What an incoming post slug should do: render, move to another slug (301) or not exist.
 * A post's Markdown version (`slug.md`) has its own route and never reaches this.
 */
export function resolvePostRedirect(
  slug: string
): { kind: "render" } | { kind: "redirect"; slug: string } | { kind: "not-found" } {
  if (!SLUG_PATTERN.test(slug)) return { kind: "not-found" }

  const target = RETIRED_POSTS[slug] ?? slug
  return target === slug ? { kind: "render" } : { kind: "redirect", slug: target }
}
