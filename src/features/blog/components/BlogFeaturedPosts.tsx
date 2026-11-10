import { BlogPostItem } from "@/features/blog/components/BlogPostItem"
import type { BlogCategory, BlogListPost } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"

type BlogFeaturedPostsProps = { posts: readonly BlogListPost[]; category: BlogCategory }

/** The posts marked `featured` in Supabase, newest first, above the list; nothing when none are. */
export function BlogFeaturedPosts({ posts, category }: BlogFeaturedPostsProps) {
  const featured = posts.filter((post) => post.featured)
  if (featured.length === 0) return null

  return (
    <section aria-labelledby="featured-posts" className="flex flex-col gap-4">
      <h2 id="featured-posts" className="text-sm font-medium text-muted-foreground">
        {m.blog_featured()}
      </h2>
      <ul className="flex flex-col gap-5">
        {featured.map((post) => (
          <BlogPostItem key={post.slug} post={post} category={category} />
        ))}
      </ul>
    </section>
  )
}
