import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { canonicalLink, hreflangLinks } from "@/helpers/localized-url"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { JourneyTimeline } from "@/features/journey/components/JourneyTimeline"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/journey")({
  head: () => ({
    meta: [{ title: m.journey_title() }, { name: "description", content: m.journey_description() }],
    links: [canonicalLink("/journey"), ...hreflangLinks("/journey")]
  }),
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
