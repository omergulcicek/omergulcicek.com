import { Link } from "@tanstack/react-router"
import { cn } from "cn"

import { localize } from "@/helpers/localize"
import { getLangParam } from "@/helpers/localized-url"

import { cardFrameClass, titleLinkClass } from "@/components/shared/surface.styles"
import { BLOG_SERIES_LABELS } from "@/features/blog/constants/blog-series.constants"
import { getSeriesPosts } from "@/features/blog/helpers/get-series-posts"
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"

type BlogPostSeriesProps = { category: BlogCategory; slug: string }

/**
 * Every post of the series this one belongs to, in series order, with this post marked as the
 * current one. Renders nothing outside a series or when the series has a single post here.
 */
export function BlogPostSeries({ category, slug }: BlogPostSeriesProps) {
  const { data: posts } = useBlogPosts(category)
  const result = getSeriesPosts(posts, slug)
  if (!result) return null

  const label = BLOG_SERIES_LABELS[result.series]
  const lang = getLangParam()

  return (
    <nav aria-labelledby="post-series" className={cn("flex flex-col gap-4 p-5", cardFrameClass)}>
      <div className="flex flex-col gap-1">
        <h2 id="post-series" className="text-base font-medium">
          {m.post_series_title({ series: label ? localize(label) : result.series })}
        </h2>
        <p className="font-mono text-sm text-muted-foreground tabular-nums">
          {m.post_series_position({ position: result.position, total: result.posts.length })}
        </p>
      </div>
      <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm marker:font-mono marker:text-muted-foreground">
        {result.posts.map((post, index) => {
          const params = { lang, slug: post.slug.replace(/^\//, "") }
          if (index + 1 === result.position) {
            return (
              <li key={post.slug} aria-current="page" className="font-medium text-foreground">
                {post.title}
              </li>
            )
          }
          return (
            <li key={post.slug} className="text-foreground/80">
              {category === "technical" ? (
                <Link to="/{-$lang}/blog/$slug" params={params} className={titleLinkClass}>
                  {post.title}
                </Link>
              ) : (
                <Link to="/{-$lang}/notes/$slug" params={params} className={titleLinkClass}>
                  {post.title}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
