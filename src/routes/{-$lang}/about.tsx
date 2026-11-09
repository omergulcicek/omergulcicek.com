import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { pageHead } from "@/config/seo.config"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { AboutFavorites } from "@/features/about/components/AboutFavorites"
import { AboutInterests } from "@/features/about/components/AboutInterests"
import { AboutIntro } from "@/features/about/components/AboutIntro"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/about")({
  head: () =>
    pageHead({ path: "/about", title: m.about_title(), description: m.about_description() }),
  component: AboutPage
})

function AboutPage() {
  return (
    <div className={cn("flex flex-col gap-12", readingWidthClass)}>
      <PageHeader title={m.about_title()} description={m.about_description()} />
      <AboutIntro />
      <AboutInterests />
      <AboutFavorites />
    </div>
  )
}
