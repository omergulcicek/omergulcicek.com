import type { ReactNode } from "react"

import { Link } from "@tanstack/react-router"
import { cn } from "cn"

import { me } from "@/constants/me.constants"

import { getLangParam } from "@/helpers/localized-url"

import { emphasisTags } from "@/components/shared/emphasis-tags"
import { ProseLink } from "@/components/shared/ProseLink"
import { RichMessage } from "@/components/shared/RichMessage"
import { surfaceDoubleFrameClass, textLinkClass } from "@/components/shared/surface.styles"
import * as m from "@/paraglide/messages.js"

const TURKUAZ_URL = "https://github.com/omergulcicek/turkuaz"

/**
 * The site's mark at full size, then what the çintemani means, why a tile and why turquoise. The
 * image is drawn by `pnpm favicon` beside the favicon, so the two never drift apart.
 */
export function BrandStory() {
  const tags: Record<string, (chunk: string) => ReactNode> = {
    ...emphasisTags,
    about: (chunk) => (
      <Link
        to="/{-$lang}/about"
        params={{ lang: getLangParam() }}
        className={cn(textLinkClass, "font-medium text-foreground")}
      >
        {chunk}
      </Link>
    ),
    virastack: (chunk) => <ProseLink href={me.links.virastack}>{chunk}</ProseLink>,
    turkuaz: (chunk) => <ProseLink href={TURKUAZ_URL}>{chunk}</ProseLink>
  }

  return (
    <section className="flex flex-col gap-8">
      {/* The page's first image and its LCP: eager, with high priority. */}
      <img
        src="/img/brand/cintemani.svg"
        alt={m.brand_tile_alt()}
        width={500}
        height={500}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className={cn("aspect-square w-full", surfaceDoubleFrameClass)}
      />
      <div className="flex flex-col gap-4 text-base leading-7 text-pretty text-foreground/80">
        <p>
          <RichMessage message={m.brand_body_motif()} tags={tags} />
        </p>
        <p>
          <RichMessage message={m.brand_body_culture()} tags={tags} />
        </p>
        <p>
          <RichMessage message={m.brand_body_color()} tags={tags} />
        </p>
      </div>
    </section>
  )
}
