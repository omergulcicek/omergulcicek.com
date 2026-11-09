import { createFileRoute } from "@tanstack/react-router"

import { pageHead } from "@/config/seo.config"

import { PageHeader } from "@/components/shared/PageHeader"
import { MusicGroups } from "@/features/music/components/MusicGroups"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/music")({
  // Draft track lists: out of search results until the page is final.
  head: () =>
    pageHead({
      path: "/music",
      title: m.music_title(),
      description: m.music_description(),
      noindex: true
    }),
  component: MusicPage
})

function MusicPage() {
  return (
    // Full width, like home: a visual page, with no TOC rail beside it.
    <div className="flex flex-col gap-8">
      <PageHeader title={m.music_title()} description={m.music_description()} />
      <MusicGroups />
    </div>
  )
}
