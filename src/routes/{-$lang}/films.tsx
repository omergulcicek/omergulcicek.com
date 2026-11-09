import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { pageHead } from "@/config/seo.config"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { FilmSections } from "@/features/films/components/FilmSections"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/films")({
  head: () =>
    pageHead({ path: "/films", title: m.films_title(), description: m.films_description() }),
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
