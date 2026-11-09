import { BlogPostItem } from "@/features/blog/components/BlogPostItem"
import { getAdjacentPosts } from "@/features/blog/helpers/get-adjacent-posts"
import { getRelatedPosts } from "@/features/blog/helpers/get-related-posts"
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"

type BlogRelatedPostsProps = { category: BlogCategory; slug: string; tags: readonly string[] }

/**
 * Up to three posts sharing tags with this one, as the same rows the blog list uses. The
 * previous and next posts are left out, since their cards are right above.
 */
export function BlogRelatedPosts({ category, slug, tags }: BlogRelatedPostsProps) {
  const { data: posts } = useBlogPosts(category)
  const { previous, next } = getAdjacentPosts(posts, slug)
  const neighbors = [previous?.slug, next?.slug].filter((value) => value !== undefined)
  const related = getRelatedPosts(posts, { slug, tags }, neighbors)
  if (related.length === 0) return null

  return (
    <section aria-labelledby="related-posts" className="flex flex-col gap-4">
      <h2 id="related-posts" className="text-sm font-medium text-muted-foreground">
        {m.post_related()}
      </h2>
      <ul className="flex flex-col gap-5">
        {related.map((post) => (
          <BlogPostItem key={post.slug} post={post} category={category} />
        ))}
      </ul>
    </section>
  )
}
