import { me } from "@/constants/me.constants"
import { siteConfig } from "@/config/site.config"

import { buildLlmsFullTxt, buildLlmsTxt } from "@/helpers/build-llms-txt"
import { localizedUrl } from "@/helpers/localized-url"

import { FEED_PATHS } from "@/features/blog/api/feed-response"
import { getFeedPosts, getFullTextPosts } from "@/features/blog/api/get-feed-posts.api"
import { convertMdxToMarkdown } from "@/features/blog/api/mdx-to-markdown"
import type { FeedPost } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"

const tr = { locale: "tr" } as const

const TEXT_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=3600"
}

const REPOSITORY_URL = "https://github.com/omergulcicek/omergulcicek.com"

const postUrl = (list: string, post: Pick<FeedPost, "slug" | "locale">) =>
  localizedUrl(`${list}${post.slug}`, post.locale)

function toLlmsPost(list: string) {
  return (post: FeedPost) => ({
    title: post.title,
    url: postUrl(list, post),
    description: post.description,
    date: post.published_at,
    locale: post.locale,
    tags: post.tags
  })
}

/** /llms.txt. Server only: it reads Supabase. */
export async function llmsTxtResponse() {
  const [posts, notes] = await Promise.all([getFeedPosts("technical"), getFeedPosts("personal")])
  const page = (path: string, title: string, description: string) => ({
    title,
    url: localizedUrl(path, "tr"),
    description
  })

  const text = buildLlmsTxt({
    name: me.name,
    role: me.title.tr,
    summary: m.site_description({}, tr),
    contact: [
      `Full text of every technical post: ${siteConfig.url}/llms-full.txt`,
      `Contact: ${me.links.email} · [GitHub](${me.links.github}) · [LinkedIn](${me.links.linkedin}) · [X](${me.links.x})`
    ],
    pages: [
      page("/about", m.about_title({}, tr), m.about_description({}, tr)),
      page("/virastack", m.virastack_title({}, tr), m.virastack_description({}, tr)),
      page("/projects", m.projects_title({}, tr), m.projects_description({}, tr)),
      page("/experiences", m.experiences_title({}, tr), m.experiences_description({}, tr)),
      page("/journey", m.journey_title({}, tr), m.journey_description({}, tr)),
      page("/uses", m.uses_title({}, tr), m.uses_description({}, tr)),
      page("/bookmarks", m.bookmarks_title({}, tr), m.bookmarks_description({}, tr))
    ],
    posts: posts.filter((post) => post.locale === "tr").map(toLlmsPost(FEED_PATHS.technical.list)),
    englishPosts: posts
      .filter((post) => post.locale === "en")
      .map(toLlmsPost(FEED_PATHS.technical.list)),
    notes: notes.map(toLlmsPost(FEED_PATHS.personal.list)),
    projects: me.projects.flatMap((project) =>
      project.href
        ? [
            {
              title: project.title,
              url: project.href,
              // Descriptions mark commands as <code>; backticks read better in plain text.
              description: project.description.tr.replace(/<\/?code>/g, "`")
            }
          ]
        : []
    ),
    links: [
      {
        title: "RSS: Blog",
        url: `${siteConfig.url}${FEED_PATHS.technical.feed}`,
        description: "Technical posts"
      },
      {
        title: "RSS: Notlar",
        url: `${siteConfig.url}${FEED_PATHS.personal.feed}`,
        description: "Personal posts"
      },
      { title: "Source code", url: REPOSITORY_URL, description: "This site" }
    ]
  })

  return new Response(text, { headers: TEXT_HEADERS })
}

const HOUR_MS = 60 * 60 * 1000

/*
 * Converting ~70 posts is the slow part, so the file is kept for an hour per server instance;
 * a failed refresh serves the last good copy instead of an error.
 */
let fullTextCache: { builtAt: number; text: string } | null = null

/** /llms-full.txt. Server only: it reads every technical post's MDX from Supabase. */
export async function llmsFullTxtResponse() {
  if (fullTextCache && Date.now() - fullTextCache.builtAt < HOUR_MS) {
    return new Response(fullTextCache.text, { headers: TEXT_HEADERS })
  }

  try {
    fullTextCache = { builtAt: Date.now(), text: await buildFullText() }
  } catch (error) {
    if (!fullTextCache) throw new Error("Could not build llms-full.txt", { cause: error })
    console.warn("llms-full.txt refresh failed; serving the last copy:", error)
  }

  return new Response(fullTextCache.text, { headers: TEXT_HEADERS })
}

async function buildFullText() {
  // Turkish posts first, then the English ones; each post's header names its language.
  const posts = [...(await getFullTextPosts("technical"))].sort(
    (a, b) => Number(a.locale === "en") - Number(b.locale === "en")
  )

  // One post that fails to convert is left out instead of taking the whole file down.
  const entries = posts.flatMap((post) => {
    try {
      return [
        {
          ...toLlmsPost(FEED_PATHS.technical.list)(post),
          body: convertMdxToMarkdown(post.content, siteConfig.url)
        }
      ]
    } catch (error) {
      console.error(`Could not convert post ${post.slug} to Markdown`, error)
      return []
    }
  })

  return buildLlmsFullTxt(
    { title: `${m.blog_title({}, tr)} · ${me.name}`, summary: m.blog_description({}, tr) },
    entries
  )
}
