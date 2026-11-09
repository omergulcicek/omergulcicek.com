import { LabeledSection } from "@/components/shared/LabeledSection"
import { BlogPostItem } from "@/features/blog/components/BlogPostItem"
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts"
import * as m from "@/paraglide/messages.js"

/** Reads the same cached query as /blog, so opening the blog page needs no new request. */
const LATEST_POST_COUNT = 5

export function BlogLatestPosts() {
  const { data: posts } = useBlogPosts("technical")

  return (
    <LabeledSection
      id="latest-posts-heading"
      title={m.latest_posts_title()}
      link={{ to: "/{-$lang}/blog", label: m.latest_posts_all() }}
    >
      <ul className="flex flex-col gap-5">
        {posts.slice(0, LATEST_POST_COUNT).map((post) => (
          <BlogPostItem key={post.slug} post={post} category="technical" />
        ))}
      </ul>
    </LabeledSection>
  )
}
