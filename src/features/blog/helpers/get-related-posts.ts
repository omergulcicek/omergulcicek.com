type TaggedPost = { slug: string; tags: readonly string[] }

/**
 * Up to `limit` posts sharing the most tags with the current one, newest first on a tie (the
 * list is newest first, and the sort is stable). Posts in `exclude`, such as the previous and
 * next links already on the page, are skipped. Slugs are compared without their leading slash.
 */
export function getRelatedPosts<T extends TaggedPost>(
  posts: readonly T[],
  current: { slug: string; tags: readonly string[] },
  exclude: readonly string[] = [],
  limit = 3
) {
  const bare = (slug: string) => slug.replace(/^\//, "")
  const skipped = new Set([bare(current.slug), ...exclude.map(bare)])
  const tags = new Set(current.tags)

  return posts
    .map((post) => ({ post, shared: post.tags.filter((tag) => tags.has(tag)).length }))
    .filter(({ post, shared }) => shared > 0 && !skipped.has(bare(post.slug)))
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit)
    .map(({ post }) => post)
}
