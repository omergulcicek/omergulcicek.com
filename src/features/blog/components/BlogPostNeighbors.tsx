import { Link } from "@tanstack/react-router"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { cn } from "cn"

import { getLangParam } from "@/helpers/localized-url"

import { cardFrameClass, linkedCardClass } from "@/components/shared/surface.styles"
import { getAdjacentPosts } from "@/features/blog/helpers/get-adjacent-posts"
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts"
import type { BlogCategory, BlogPostListItem } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"

type BlogPostNeighborsProps = { category: BlogCategory; slug: string }

// The same linked card as projects and the CV.
const cardClass = cn("flex flex-col gap-1.5 p-4", cardFrameClass, linkedCardClass)

/** Links to the older and newer post of the same list, at the end of a post. */
export function BlogPostNeighbors({ category, slug }: BlogPostNeighborsProps) {
  const { data: posts } = useBlogPosts(category)
  const { previous, next } = getAdjacentPosts(posts, slug)
  if (!previous && !next) return null

  return (
    <nav aria-label={m.post_nav_label()} className="grid gap-5 sm:grid-cols-2">
      {previous ? <NeighborLink category={category} post={previous} direction="previous" /> : null}
      {next ? <NeighborLink category={category} post={next} direction="next" /> : null}
    </nav>
  )
}

type NeighborLinkProps = {
  category: BlogCategory
  post: BlogPostListItem
  direction: "previous" | "next"
}

function NeighborLink({ category, post, direction }: NeighborLinkProps) {
  const isNext = direction === "next"
  const params = { lang: getLangParam(), slug: post.slug.replace(/^\//, "") }
  const className = cn(cardClass, isNext && "items-end text-right sm:col-start-2")
  const arrowClass =
    "size-3.5 transition-[translate] duration-150 ease-out motion-safe:group-hover:translate-x-0.5"

  const content = (
    <>
      <span className="flex items-center gap-1 text-xs text-muted-foreground">
        {isNext ? null : (
          <ArrowLeftIcon
            aria-hidden
            className={cn(arrowClass, "motion-safe:group-hover:-translate-x-0.5")}
          />
        )}
        {isNext ? m.post_next() : m.post_previous()}
        {isNext ? <ArrowRightIcon aria-hidden className={arrowClass} /> : null}
      </span>
      {/* The title is in the post's language, which may differ from the page's. */}
      <span lang={post.locale} className="line-clamp-2 text-sm font-medium text-pretty">
        {post.title}
      </span>
    </>
  )

  return category === "technical" ? (
    <Link to="/{-$lang}/blog/$slug" params={params} className={className}>
      {content}
    </Link>
  ) : (
    <Link to="/{-$lang}/notes/$slug" params={params} className={className}>
      {content}
    </Link>
  )
}
