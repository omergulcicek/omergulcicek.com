import type { ReactNode } from "react"

import { Link } from "@tanstack/react-router"
import { cn } from "cn"

import { me } from "@/constants/me.constants"

import { getLangParam } from "@/helpers/localized-url"

import { emphasisTags } from "@/components/shared/emphasis-tags"
import { ProseLink } from "@/components/shared/ProseLink"
import { RichMessage } from "@/components/shared/RichMessage"
import { textLinkClass } from "@/components/shared/surface.styles"
import { AboutFigure } from "@/features/about/components/AboutFigure"
import { AboutHobby } from "@/features/about/components/AboutHobby"
import * as m from "@/paraglide/messages.js"

/** The post that lists the public Google Maps lists; it is written in Turkish only. */
const MAPS_POST_SLUG = "google-maps-kisisel-listelerim"

/**
 * Walking and photography in two paragraphs, each followed by photos: two tall street frames
 * after the walking, a wide one after the photography, so text and photos take turns.
 */
export function AboutWalks() {
  const tags: Record<string, (chunk: string) => ReactNode> = {
    ...emphasisTags,
    instagram: (chunk) => <ProseLink href={me.links.instagram}>{chunk}</ProseLink>,
    maps: (chunk) => (
      <Link
        to="/{-$lang}/notes/$slug"
        params={{ lang: getLangParam(), slug: MAPS_POST_SLUG }}
        className={cn(textLinkClass, "font-medium text-foreground")}
      >
        {chunk}
      </Link>
    )
  }

  return (
    <AboutHobby title={m.about_walks_title()}>
      <p>
        <RichMessage message={m.about_walks_body()} tags={tags} />
      </p>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-3">
          <AboutFigure
            src="/img/about/kuzguncuk.webp"
            alt={m.about_walks_photo_kuzguncuk()}
            width={800}
            height={1000}
            className="aspect-4/5"
          />
          <AboutFigure
            src="/img/about/cumalikizik.webp"
            alt={m.about_walks_photo_cumalikizik()}
            width={800}
            height={1000}
            className="aspect-4/5"
          />
        </div>
        <p className="text-center text-sm text-pretty text-muted-foreground">
          {m.about_walks_caption_streets()}
        </p>
      </div>
      <p>
        <RichMessage message={m.about_walks_body_photos()} tags={tags} />
      </p>
      <AboutFigure
        src="/img/about/balloons.webp"
        alt={m.about_walks_photo_balloons()}
        caption={m.about_walks_caption_balloons()}
        width={1280}
        height={720}
        className="aspect-video"
      />
    </AboutHobby>
  )
}
