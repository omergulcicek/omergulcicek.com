import { getPostCard } from "@/features/blog/api/get-post-card.api"
import { formatPostDate } from "@/features/blog/helpers/format-post-date"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"

const POST_FOLDERS: Record<string, BlogCategory> = { blog: "technical", notes: "personal" }

/**
 * A post's share card text for a path like `/blog/barrel-file`: title, description and
 * "date · first tag" in the post's own language. Undefined when the path is not a post, null
 * when no published post has that slug. Server only.
 */
export async function getPostCardContent(path: string) {
  const [, folder, slug, ...rest] = path.split("/")
  const category = folder ? POST_FOLDERS[folder] : undefined
  if (!category || !slug || rest.length > 0) return undefined

  const post = await getPostCard(category, slug)
  if (!post) return null

  const date = post.published_at ? formatPostDate(post.published_at, post.locale, "long") : null
  return {
    locale: post.locale,
    title: post.title,
    description: post.description,
    meta: [date, post.tags[0]].filter(Boolean).join(" · ")
  }
}
