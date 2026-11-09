import { useState } from "react"

import { useQuery } from "@tanstack/react-query"

import { getSitePages } from "@/constants/site-nav.constants"

import { CommandPalette } from "@/components/shared/CommandPalette"
import type { CommandPaletteGroup } from "@/components/shared/CommandPaletteDialog"
import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { postsForLocale } from "@/features/blog/helpers/posts-for-locale"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"
import { getLocale, localizeHref } from "@/paraglide/runtime.js"

const FOLDERS: Record<BlogCategory, string> = { technical: "/blog", personal: "/notes" }

/**
 * The header's search, composed here because it joins the site's pages with the blog feature's
 * posts. The posts load only once the palette opens, then come from the query cache.
 */
export function SiteSearch() {
  const [open, setOpen] = useState(false)
  const locale = getLocale()

  const usePostsWhenOpen = (category: BlogCategory) =>
    useQuery({
      ...blogPostsQueryOptions(category),
      enabled: open,
      select: (posts) => postsForLocale(posts, category, locale)
    })
  const technical = usePostsWhenOpen("technical")
  const personal = usePostsWhenOpen("personal")

  const postItems = (category: BlogCategory, posts: typeof technical.data) =>
    (posts ?? []).map((post) => ({
      id: `${category}:${post.slug}`,
      label: post.title,
      href: localizeHref(`${FOLDERS[category]}${post.slug}`),
      keywords: post.tags
    }))

  const groups: CommandPaletteGroup[] = [
    {
      heading: m.search_group_pages(),
      items: getSitePages().map((page) => ({
        id: `page:${page.path}`,
        label: page.title,
        href: localizeHref(page.path)
      }))
    },
    { heading: m.nav_blog(), items: postItems("technical", technical.data) },
    { heading: m.nav_notes(), items: postItems("personal", personal.data) }
  ]

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      groups={groups}
      loading={technical.isPending || personal.isPending}
    />
  )
}
