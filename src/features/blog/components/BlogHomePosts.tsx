import { LabeledSection } from "@/components/shared/LabeledSection"
import { BlogPostItem } from "@/features/blog/components/BlogPostItem"
import { getHomePosts } from "@/features/blog/helpers/get-home-posts"
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts"
import * as m from "@/paraglide/messages.js"

/**
 * The home page's writing: the featured picks first, then the latest posts that are not among
 * them. Reads the same cached query as /blog, so opening the blog page needs no new request.
 */
export function BlogHomePosts() {
  const { data: posts } = useBlogPosts("technical")
  const { featured, latest } = getHomePosts(posts)

  return (
    <div className="flex flex-col gap-10">
      {featured.length > 0 ? (
        <LabeledSection id="featured-posts-heading" title={m.blog_featured()}>
          <ul className="flex flex-col gap-5">
            {featured.map((post) => (
              <BlogPostItem key={post.slug} post={post} category="technical" />
            ))}
          </ul>
        </LabeledSection>
      ) : null}
      <LabeledSection
        id="latest-posts-heading"
        title={m.latest_posts_title()}
        link={{ to: "/{-$lang}/blog", label: m.latest_posts_all() }}
      >
        <ul className="flex flex-col gap-5">
          {latest.map((post) => (
            <BlogPostItem key={post.slug} post={post} category="technical" />
          ))}
        </ul>
      </LabeledSection>
    </div>
  )
}
