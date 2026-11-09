import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { pageHead } from "@/config/seo.config"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { CvPreview } from "@/features/experiences/components/CvPreview"
import { ExperienceList } from "@/features/experiences/components/ExperienceList"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/experiences")({
  head: () =>
    pageHead({
      path: "/experiences",
      title: m.experiences_title(),
      description: m.experiences_description()
    }),
  component: ExperiencesPage
})

function ExperiencesPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <div className="flex flex-col gap-5">
        <PageHeader title={m.experiences_title()} description={m.experiences_description()} />
        <CvPreview />
      </div>
      <ExperienceList />
    </div>
  )
}
