import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { pageHead } from "@/config/seo.config"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { JourneyTimeline } from "@/features/journey/components/JourneyTimeline"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/journey")({
  head: () =>
    pageHead({ path: "/journey", title: m.journey_title(), description: m.journey_description() }),
  component: JourneyPage
})

function JourneyPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <PageHeader title={m.journey_title()} description={m.journey_description()} />
      <JourneyTimeline />
    </div>
  )
}
