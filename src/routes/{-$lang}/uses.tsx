import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { pageHead } from "@/config/seo.config"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { UsesSections } from "@/features/uses/components/UsesSections"
import { UsesUpdated } from "@/features/uses/components/UsesUpdated"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/uses")({
  head: () => pageHead({ path: "/uses", title: m.uses_title(), description: m.uses_description() }),
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
