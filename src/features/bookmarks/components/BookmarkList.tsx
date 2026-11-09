import { getRouteApi } from "@tanstack/react-router"

import { FilterRail } from "@/components/shared/FilterRail"
import { BookmarkItem } from "@/features/bookmarks/components/BookmarkItem"
import { bookmarks } from "@/features/bookmarks/constants/bookmarks.constants"
import { BOOKMARK_CATEGORIES } from "@/features/bookmarks/schemas/bookmark.schema"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

const route = getRouteApi("/{-$lang}/bookmarks")

function getCategoryLabel(category: (typeof BOOKMARK_CATEGORIES)[number]) {
  if (category === "blogs") return m.bookmark_category_blogs()
  if (category === "packages") return m.bookmark_category_packages()
  return m.bookmark_category_sites()
}

export function BookmarkList() {
  const { category } = route.useSearch()
  // Alphabetical, case-insensitive and in the locale's order ("Ç" right after "C"): visitors scan for a name.
  const collator = new Intl.Collator(getLocale(), { sensitivity: "base" })
  const visible = (
    category ? bookmarks.filter((item) => item.category === category) : [...bookmarks]
  ).sort((a, b) => collator.compare(a.title, b.title))
  const filters = BOOKMARK_CATEGORIES.map((value) => ({
    value,
    label: getCategoryLabel(value),
    count: bookmarks.filter((item) => item.category === value).length
  }))

  return (
    <>
      <FilterRail
        title={m.bookmarks_filter_title()}
        param="category"
        items={filters}
        total={bookmarks.length}
        current={category}
      />
      <ul className="flex flex-col gap-6">
        {visible.map((bookmark) => (
          <BookmarkItem key={bookmark.id} bookmark={bookmark} />
        ))}
      </ul>
    </>
  )
}
