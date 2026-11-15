import { Fragment, useRef } from "react"

import { Link } from "@tanstack/react-router"
import { cn } from "cn"

import { getLangParam, localizedUrl } from "@/helpers/localized-url"

import { PageToc } from "@/components/shared/PageToc"
import { titleLinkClass } from "@/components/shared/surface.styles"
import { BlogMobileToc } from "@/features/blog/components/BlogMobileToc"
import { BlogPostNeighbors } from "@/features/blog/components/BlogPostNeighbors"
import { BlogPostSeries } from "@/features/blog/components/BlogPostSeries"
import { BlogRelatedPosts } from "@/features/blog/components/BlogRelatedPosts"
import { BlogShareActions } from "@/features/blog/components/BlogShareActions"
import { tagLabel, tagSlug } from "@/features/blog/helpers/blog-tags"
import { formatPostDate } from "@/features/blog/helpers/format-post-date"
import { useBlogPost } from "@/features/blog/hooks/use-blog-post"
import { useCodeBlockActions } from "@/features/blog/hooks/use-code-block-actions"
import { useImageZoom } from "@/features/blog/hooks/use-image-zoom"
import { useMdxIslands } from "@/features/blog/hooks/use-mdx-islands"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

/**
 * The typography plugin, pinned to the site's tokens and type scale: its gray palette and em-based
 * sizes would otherwise add colors and steps the rest of the site does not use.
 */
const proseClass = cn(
  "prose max-w-none",
  // Colors: reading text in foreground, secondary text in muted-foreground, every line in border.
  "[--tw-prose-body:var(--foreground)] [--tw-prose-bold:var(--foreground)] [--tw-prose-bullets:var(--muted-foreground)] [--tw-prose-captions:var(--muted-foreground)] [--tw-prose-code:var(--foreground)] [--tw-prose-counters:var(--muted-foreground)] [--tw-prose-headings:var(--foreground)] [--tw-prose-hr:var(--border)] [--tw-prose-kbd-shadows:var(--border)] [--tw-prose-kbd:var(--foreground)] [--tw-prose-lead:var(--muted-foreground)] [--tw-prose-links:var(--foreground)] [--tw-prose-pre-bg:var(--muted)] [--tw-prose-pre-code:var(--foreground)] [--tw-prose-quote-borders:var(--border)] [--tw-prose-quotes:var(--foreground)] [--tw-prose-td-borders:var(--border)] [--tw-prose-th-borders:var(--border)]",
  // Type: body 16/28 from the plugin; headings and small text from the scale.
  "prose-headings:font-semibold prose-h2:text-xl prose-h3:text-base prose-h4:text-base prose-figcaption:text-sm prose-table:text-sm",
  // Rhythm: paragraphs 16px, 48px before h2, 32px before h3, 24px around figures and blocks.
  "prose-h2:mt-12 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-2 prose-h4:mt-6 prose-h4:mb-2 prose-p:my-4 prose-blockquote:my-6 prose-figure:my-6 prose-figcaption:mt-2 prose-pre:my-6 prose-ol:my-4 prose-ul:my-4 prose-li:my-2 prose-table:my-6 prose-th:p-2 prose-td:p-2 prose-img:my-6 prose-video:my-6 prose-hr:my-12",
  // Links: the site's text-link underline in brand.
  "prose-a:font-medium prose-a:decoration-brand/50 prose-a:underline-offset-4 prose-a:transition-[text-decoration-color] prose-a:duration-150 prose-a:hover:decoration-brand",
  "prose-figcaption:text-center prose-img:mx-auto prose-img:rounded-lg",
  "prose-code:rounded-sm prose-code:bg-muted prose-code:px-1 prose-code:font-mono prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
  "[&_[data-footnote-ref]]:no-underline [&_[data-footnotes]]:text-sm [&_[data-footnotes]_li]:my-1 [&_[data-footnotes]_li>p]:my-0"
)

type BlogPostArticleProps = { category: BlogCategory; slug: string }

export function BlogPostArticle({ category, slug }: BlogPostArticleProps) {
  const { data: post } = useBlogPost(category, slug)
  const locale = getLocale()
  const lang = getLangParam()
  const contentRef = useRef<HTMLDivElement>(null)
  useCodeBlockActions(contentRef)
  useImageZoom(contentRef)
  useMdxIslands(contentRef)

  const basePath = category === "technical" ? "/blog" : "/notes"
  const url = localizedUrl(`${basePath}/${slug}`, locale)

  return (
    <div className="flex flex-col gap-12">
      {/* Short posts with one heading or none need no outline. */}
      {post.headings.length > 1 ? (
        <PageToc
          lang={post.locale}
          items={post.headings.map(({ id, text, level }) => ({ id, label: text, level }))}
        />
      ) : null}
      {/* lang follows the post, so an English post on the Turkish site is read in English. */}
      <article lang={post.locale} className="flex flex-col gap-8">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold tracking-tight text-balance">{post.title}</h1>
            <p className="text-sm text-muted-foreground">
              {post.published_at ? (
                <time dateTime={post.published_at} className="tabular-nums">
                  {formatPostDate(post.published_at, locale, "long")}
                </time>
              ) : null}
              {post.published_at ? " · " : null}
              {/* Site wording in the page's language, though the post may be in another. */}
              <span lang={locale}>{m.post_reading_time({ minutes: post.readingMinutes })}</span>
              {post.tags.length > 0 ? " · " : null}
              {/* Each tag opens the list filtered by it, the same filter as the list page. */}
              {post.tags.map((tag, index) => (
                <Fragment key={tag}>
                  {index > 0 ? ", " : null}
                  {category === "technical" ? (
                    <Link
                      to="/{-$lang}/blog"
                      params={{ lang }}
                      search={{ tag: tagSlug(tag, locale) }}
                      className={titleLinkClass}
                    >
                      {tagLabel(tag, locale)}
                    </Link>
                  ) : (
                    <Link
                      to="/{-$lang}/notes"
                      params={{ lang }}
                      search={{ tag: tagSlug(tag, locale) }}
                      className={titleLinkClass}
                    >
                      {tagLabel(tag, locale)}
                    </Link>
                  )}
                </Fragment>
              ))}
            </p>
          </div>
          {post.headings.length > 1 ? (
            <BlogMobileToc headings={post.headings} lang={post.locale} />
          ) : null}
        </header>
        {/* Rendered on the server from our own MDX in Supabase; never visitor input. */}
        <div
          ref={contentRef}
          className={proseClass}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
      <BlogPostSeries category={category} slug={slug} />
      {/* Outside the article: these are the site's own controls, in the page's language. */}
      {/* No rule above: the section gap already ends the article. */}
      <footer className="flex flex-col gap-6">
        <BlogShareActions title={post.title} url={url} />
        <BlogPostNeighbors category={category} slug={slug} />
      </footer>
      <BlogRelatedPosts category={category} slug={slug} tags={post.tags} />
    </div>
  )
}
