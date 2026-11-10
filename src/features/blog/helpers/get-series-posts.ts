type SeriesPost = { slug: string; series: string | null; series_order: number | null }

/**
 * The series the current post belongs to, with its posts in series order (posts without an
 * order go last, keeping the list's order). Null when the post is in no series or is the only
 * post of its series in the list. Slugs are compared without their leading slash.
 */
export function getSeriesPosts<T extends SeriesPost>(posts: readonly T[], slug: string) {
  const bare = (value: string) => value.replace(/^\//, "")
  const current = posts.find((post) => bare(post.slug) === bare(slug))
  if (!current?.series) return null

  const series = current.series
  // filter() returns a new array, so the in-place sort leaves `posts` untouched.
  const members = posts
    .filter((post) => post.series === series)
    .sort(
      (a, b) =>
        (a.series_order ?? Number.POSITIVE_INFINITY) - (b.series_order ?? Number.POSITIVE_INFINITY)
    )
  if (members.length < 2) return null

  return {
    series,
    posts: members,
    position: members.findIndex((post) => bare(post.slug) === bare(slug)) + 1
  }
}
