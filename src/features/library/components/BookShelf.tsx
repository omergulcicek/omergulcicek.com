import { getRouteApi } from "@tanstack/react-router"

import { localize } from "@/helpers/localize"

import { FilterRail } from "@/components/shared/FilterRail"
import { BookCard } from "@/features/library/components/BookCard"
import { bookGenres, books } from "@/features/library/constants/library.constants"
import { sortBooks } from "@/features/library/helpers/sort-books"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

const route = getRouteApi("/{-$lang}/library")

export function BookShelf() {
  const { genre } = route.useSearch()
  const locale = getLocale()
  const filters = bookGenres
    .map(({ id, label }) => ({
      value: id,
      label: localize(label),
      count: books.filter((book) => book.genre === id).length
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count)
  // An unknown genre would empty the shelf, so it shows every book instead.
  const known = filters.some((item) => item.value === genre)
  const visible = sortBooks(known ? books.filter((book) => book.genre === genre) : books, locale)

  return (
    <>
      <FilterRail
        title={m.library_filter_title()}
        param="genre"
        items={filters}
        total={books.length}
        current={genre}
      />
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        {visible.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </>
  )
}
