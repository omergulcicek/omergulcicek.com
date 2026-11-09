import { Fragment, useRef } from "react"

import { Link } from "@tanstack/react-router"

import { getLangParam, localizedUrl } from "@/helpers/localized-url"

import { PageToc } from "@/components/shared/PageToc"
import { titleLinkClass } from "@/components/shared/surface.styles"
import { BlogMobileToc } from "@/features/blog/components/BlogMobileToc"
import { BlogPostNeighbors } from "@/features/blog/components/BlogPostNeighbors"
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
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {post.published_at ? (
              <time dateTime={post.published_at} className="font-mono">
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
          {post.headings.length > 1 ? (
            <BlogMobileToc headings={post.headings} lang={post.locale} />
          ) : null}
        </header>
        {/* Rendered on the server from our own MDX in Supabase; never visitor input. */}
        <div
          ref={contentRef}
          className="prose max-w-none prose-neutral dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:font-medium prose-a:decoration-current/30 prose-a:underline-offset-4 prose-a:transition-[text-decoration-color] prose-a:duration-150 prose-a:hover:decoration-current prose-figcaption:text-center prose-code:rounded-sm prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-img:mx-auto prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
      {/* Outside the article: these are the site's own controls, in the page's language. */}
      <footer className="flex flex-col gap-6 border-t border-border pt-6">
        <BlogShareActions title={post.title} url={url} />
        <BlogPostNeighbors category={category} slug={slug} />
      </footer>
      <BlogRelatedPosts category={category} slug={slug} tags={post.tags} />
    </div>
  )
}
