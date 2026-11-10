type HomePost = { slug: string; featured: boolean }

/** With no featured post (as on the English site), the latest list keeps its old length. */
const LATEST_WITHOUT_FEATURED = 5

/**
 * The two lists of the home page from one newest-first list: up to `featuredCount` featured
 * posts, and the latest posts that are not featured, so no post shows twice.
 */
export function getHomePosts<T extends HomePost>(
  posts: readonly T[],
  { featuredCount = 3, latestCount = 2 } = {}
) {
  const featured = posts.filter((post) => post.featured).slice(0, featuredCount)
  const latest = posts
    .filter((post) => !post.featured)
    .slice(0, featured.length > 0 ? latestCount : LATEST_WITHOUT_FEATURED)

  return { featured, latest }
}
