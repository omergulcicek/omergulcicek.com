type HomePost = { slug: string; featured_rank: number | null }

/**
 * The two lists of the home page from one newest-first list: up to `featuredCount` featured
 * posts in their `featured_rank` order, then the latest posts that are not featured, so no
 * post shows twice. Together they fill `total` rows: with fewer featured posts (as on the
 * English site), the latest list grows.
 */
export function getHomePosts<T extends HomePost>(
  posts: readonly T[],
  { featuredCount = 3, total = 5 } = {}
) {
  // filter returns a new array, so sorting it leaves `posts` untouched.
  const featured = posts
    .filter((post) => post.featured_rank !== null)
    .sort((a, b) => (a.featured_rank ?? 0) - (b.featured_rank ?? 0))
    .slice(0, featuredCount)
  const latest = posts
    .filter((post) => post.featured_rank === null)
    .slice(0, total - featured.length)

  return { featured, latest }
}
