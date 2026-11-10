import { BlogPostItem } from "@/features/blog/components/BlogPostItem"
import { filterPostsByTag } from "@/features/blog/helpers/blog-tags"
import { groupPostsByYear } from "@/features/blog/helpers/group-posts-by-year"
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts"
import { useBlogTagFilter } from "@/features/blog/hooks/use-blog-tag-filter"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

type BlogPostListProps = { category: BlogCategory }

export function BlogPostList({ category }: BlogPostListProps) {
  const { data: posts } = useBlogPosts(category)
  const tag = useBlogTagFilter()
  const filtered = filterPostsByTag(posts, tag, getLocale())
  // An unknown tag would empty the page; showing every post is the friendlier fallback.
  const visible = filtered.length > 0 ? filtered : posts

  return (
    <div className="flex flex-col gap-12">
      {groupPostsByYear(visible).map(({ year, posts: yearPosts }) => (
        <section key={year ?? "undated"} className="flex flex-col gap-4">
          {year ? (
            <h2 className="font-mono text-sm font-medium text-muted-foreground tabular-nums">
              {year}
              {/* The dot is decoration; the count reads as words, so it needs no screen-reader copy. */}
              <span aria-hidden> · </span>
              <span className="sr-only">, </span>
              {m.blog_year_count({ count: yearPosts.length })}
            </h2>
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
