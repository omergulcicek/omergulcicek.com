import { createFileRoute } from "@tanstack/react-router"

import { canonicalLink, hreflangLinks } from "@/helpers/localized-url"

import { PageHeader } from "@/components/shared/PageHeader"
import { MusicGroups } from "@/features/music/components/MusicGroups"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/music")({
  head: () => ({
    meta: [{ title: m.music_title() }, { name: "description", content: m.music_description() }],
    links: [canonicalLink("/music"), ...hreflangLinks("/music")]
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
