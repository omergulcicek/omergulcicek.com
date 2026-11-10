type HomePost = { slug: string; featured: boolean }

/**
 * The two lists of the home page from one newest-first list: up to `featuredCount` featured
 * posts, then the latest posts that are not featured, so no post shows twice. Together they
 * fill `total` rows: with fewer featured posts (as on the English site), the latest list grows.
 */
export function getHomePosts<T extends HomePost>(
  posts: readonly T[],
  { featuredCount = 3, total = 5 } = {}
) {
  const featured = posts.filter((post) => post.featured).slice(0, featuredCount)
  const latest = posts.filter((post) => !post.featured).slice(0, total - featured.length)

  return { featured, latest }
}
