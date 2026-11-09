import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { canonicalLink, hreflangLinks } from "@/helpers/localized-url"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { BookmarkList } from "@/features/bookmarks/components/BookmarkList"
import { bookmarksSearchSchema } from "@/features/bookmarks/schemas/bookmark.schema"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/bookmarks")({
  head: () => ({
    meta: [
      { title: m.bookmarks_title() },
      { name: "description", content: m.bookmarks_description() }
    ],
    links: [canonicalLink("/bookmarks"), ...hreflangLinks("/bookmarks")]
  }),
  validateSearch: bookmarksSearchSchema,
  component: BookmarksPage
})

function BookmarksPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <PageHeader title={m.bookmarks_title()} description={m.bookmarks_description()} />
      <BookmarkList />
    </div>
  )
}
