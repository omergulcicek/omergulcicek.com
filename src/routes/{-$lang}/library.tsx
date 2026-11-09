import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { canonicalLink, hreflangLinks } from "@/helpers/localized-url"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { BookShelf } from "@/features/library/components/BookShelf"
import { librarySearchSchema } from "@/features/library/schemas/book.schema"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/library")({
  head: () => ({
    meta: [{ title: m.library_title() }, { name: "description", content: m.library_description() }],
    links: [canonicalLink("/library"), ...hreflangLinks("/library")]
  }),
  validateSearch: librarySearchSchema,
  component: LibraryPage
})

function LibraryPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <PageHeader title={m.library_title()} description={m.library_description()} />
      <BookShelf />
    </div>
  )
}
