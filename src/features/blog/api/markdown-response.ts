import { siteConfig } from "@/config/site.config"

import { localizedUrl } from "@/helpers/localized-url"

import { getFullTextPost } from "@/features/blog/api/get-feed-posts.api"
import { convertMdxToMarkdown } from "@/features/blog/api/mdx-to-markdown"
import { RETIRED_POSTS } from "@/features/blog/constants/retired-posts.constants"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"

const SLUG_PATTERN = /^[a-z0-9-]+$/

const FOLDERS: Record<BlogCategory, string> = { technical: "/blog", personal: "/notes" }

/**
 * A post as plain Markdown at `/blog/slug.md` and `/notes/slug.md`, for agents and readers that
 * want the text without the page, as v10 offered. Search engines are pointed at the HTML page:
 * `noindex`, and a canonical Link header. Server only.
 */
export async function postMarkdownResponse(category: BlogCategory, slug: string) {
  const folder = FOLDERS[category]
  if (!SLUG_PATTERN.test(slug)) return new Response("Not found", { status: 404 })

  const retiredTarget = RETIRED_POSTS[slug]
  if (retiredTarget) {
    return new Response(null, {
      status: 301,
      headers: { Location: `${folder}/${retiredTarget}.md` }
    })
  }

  const [post] = await getFullTextPost(category, slug)
  if (!post) return new Response("Not found", { status: 404 })

  const pageUrl = localizedUrl(`${folder}/${slug}`, post.locale)
  const body = [
    `# ${post.title}`,
    `> ${post.description}`,
    `Source: ${pageUrl}`,
    convertMdxToMarkdown(post.content, siteConfig.url)
  ].join("\n\n")

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Robots-Tag": "noindex",
      Link: `<${pageUrl}>; rel="canonical"`
    }
  })
}
