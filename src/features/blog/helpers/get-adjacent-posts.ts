type ListedPost = { slug: string }

/**
 * The posts around one in a newest-first list: `previous` is the older one, `next` the newer.
 * `slug` is the route param, without the leading slash the database keeps.
 */
export function getAdjacentPosts<T extends ListedPost>(posts: readonly T[], slug: string) {
  const index = posts.findIndex((post) => post.slug.replace(/^\//, "") === slug)
  if (index === -1) return { previous: undefined, next: undefined }

  return { previous: posts[index + 1], next: index > 0 ? posts[index - 1] : undefined }
}
