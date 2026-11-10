import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { pageHead } from "@/config/seo.config"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { BrandStory } from "@/features/brand/components/BrandStory"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/brand")({
  head: () =>
    pageHead({ path: "/brand", title: m.brand_title(), description: m.brand_description() }),
  component: BrandPage
})

function BrandPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <PageHeader title={m.brand_title()} description={m.brand_description()} />
      <BrandStory />
    </div>
  )
}
