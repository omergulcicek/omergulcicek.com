import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { canonicalLink, hreflangLinks } from "@/helpers/localized-url"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { FilmSections } from "@/features/films/components/FilmSections"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/films")({
  head: () => ({
    meta: [{ title: m.films_title() }, { name: "description", content: m.films_description() }],
    links: [canonicalLink("/films"), ...hreflangLinks("/films")]
  }),
  component: FilmsPage
})

function FilmsPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <PageHeader title={m.films_title()} description={m.films_description()} />
      <FilmSections />
    </div>
  )
}
