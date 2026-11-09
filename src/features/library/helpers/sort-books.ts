type SortableBook = { title: string; authors: readonly string[] }

/** Shelf order: by first author, then title; books without an author go last. */
export function sortBooks<T extends SortableBook>(books: readonly T[], locale: string) {
  const collator = new Intl.Collator(locale)

  return [...books].sort((a, b) => {
    const authorA = a.authors[0]
    const authorB = b.authors[0]
    if (authorA === undefined || authorB === undefined) {
      if (authorA !== authorB) return authorA === undefined ? 1 : -1
    } else {
      const byAuthor = collator.compare(authorA, authorB)
      if (byAuthor !== 0) return byAuthor
    }

    return collator.compare(a.title, b.title)
  })
}
