import { BlogPostItem } from "@/features/blog/components/BlogPostItem"
import { filterPostsByTag } from "@/features/blog/helpers/blog-tags"
import { groupPostsByYear } from "@/features/blog/helpers/group-posts-by-year"
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts"
import { useBlogTagFilter } from "@/features/blog/hooks/use-blog-tag-filter"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"

type BlogPostListProps = { category: BlogCategory }

export function BlogPostList({ category }: BlogPostListProps) {
  const { data: posts } = useBlogPosts(category)
  const tag = useBlogTagFilter()
  const filtered = filterPostsByTag(posts, tag)
  // An unknown tag would empty the page; showing every post is the friendlier fallback.
  const visible = filtered.length > 0 ? filtered : posts

  return (
    <div className="flex flex-col gap-12">
      {groupPostsByYear(visible).map(({ year, posts: yearPosts }) => (
        <section key={year ?? "undated"} className="flex flex-col gap-4">
          {year ? (
            <h2 className="font-mono text-sm font-medium text-muted-foreground">{year}</h2>
          ) : null}
          <ul className="flex flex-col gap-5">
            {yearPosts.map((post) => (
              <BlogPostItem key={post.slug} post={post} category={category} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
