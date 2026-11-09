import { RETIRED_POSTS } from "@/features/blog/constants/retired-posts.constants"

const SLUG_PATTERN = /^[a-z0-9-]+$/

/**
 * What an incoming post slug should do: render, move to another slug (301) or not exist.
 * v10 also served every post as Markdown at `slug.md`; those move to the page itself.
 */
export function resolvePostRedirect(
  slug: string
): { kind: "render" } | { kind: "redirect"; slug: string } | { kind: "not-found" } {
  const bare = slug.endsWith(".md") ? slug.slice(0, -".md".length) : slug
  if (!SLUG_PATTERN.test(bare)) return { kind: "not-found" }

  const target = RETIRED_POSTS[bare] ?? bare
  return target === slug ? { kind: "render" } : { kind: "redirect", slug: target }
}
