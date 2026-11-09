import { Link } from "@tanstack/react-router"

import { getLangParam } from "@/helpers/localized-url"

import { titleLinkClass } from "@/components/shared/surface.styles"
import { tagLabel } from "@/features/blog/helpers/blog-tags"
import { formatPostDate } from "@/features/blog/helpers/format-post-date"
import type { BlogCategory, BlogPostListItem } from "@/features/blog/schemas/blog-post.schema"
import { getLocale } from "@/paraglide/runtime.js"

type BlogPostItemProps = { post: BlogPostListItem; category: BlogCategory }

export function BlogPostItem({ post, category }: BlogPostItemProps) {
  const locale = getLocale()
  const date = post.published_at ? formatPostDate(post.published_at, locale, "short") : null
  const tags = post.tags.map((tag) => tagLabel(tag, locale)).join(", ")
  // Slugs are stored with a leading slash; the route param is the rest.
  const params = { lang: getLangParam(), slug: post.slug.replace(/^\//, "") }

  return (
    <li className="flex flex-col gap-1">
      <p className="flex items-baseline gap-2 text-base font-medium text-pretty">
        {category === "technical" ? (
          <Link to="/{-$lang}/blog/$slug" params={params} className={titleLinkClass}>
            {post.title}
          </Link>
        ) : (
          <Link to="/{-$lang}/notes/$slug" params={params} className={titleLinkClass}>
            {post.title}
          </Link>
        )}
        {/* Only posts in another language get a label. */}
        {post.locale !== locale ? (
          <span
            lang={post.locale}
            className="shrink-0 rounded-sm border border-border px-1 font-mono text-xs text-muted-foreground"
          >
            {post.locale.toLocaleUpperCase(locale)}
          </span>
        ) : null}
      </p>
      {/* Mono for the date only: tags are words and read better in the body font. */}
      <p className="text-sm text-muted-foreground">
        {date && post.published_at ? (
          <time dateTime={post.published_at} className="font-mono">
            {date}
          </time>
        ) : null}
        {date && tags ? " · " : null}
        {tags}
      </p>
    </li>
  )
}
