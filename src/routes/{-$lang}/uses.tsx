import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { canonicalLink, hreflangLinks } from "@/helpers/localized-url"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { UsesSections } from "@/features/uses/components/UsesSections"
import { UsesUpdated } from "@/features/uses/components/UsesUpdated"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/uses")({
  head: () => ({
    meta: [{ title: m.uses_title() }, { name: "description", content: m.uses_description() }],
    links: [canonicalLink("/uses"), ...hreflangLinks("/uses")]
  }),
  component: UsesPage
})

function UsesPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <div className="flex flex-col gap-3">
        <PageHeader title={m.uses_title()} description={m.uses_description()} />
        <UsesUpdated />
      </div>
      <UsesSections />
    </div>
  )
}
