import type { ReactNode } from "react"

import { Link } from "@tanstack/react-router"
import { cn } from "cn"

import { me } from "@/constants/me.constants"

import { getLangParam } from "@/helpers/localized-url"

import { emphasisTags } from "@/components/shared/emphasis-tags"
import { ProseLink } from "@/components/shared/ProseLink"
import { RichMessage } from "@/components/shared/RichMessage"
import {
  cardFrameClass,
  surfaceDoubleFrameClass,
  textLinkClass
} from "@/components/shared/surface.styles"
import * as m from "@/paraglide/messages.js"

const TURKUAZ_URL = "https://github.com/omergulcicek/turkuaz"

// The tab icon's own sizes: 16 and 32 in browser tabs, 64 to show its shapes.
const SMALL_ICON_SIZES = [16, 32, 64] as const

/**
 * The site's mark at full size, then what the çintemani means, why a tile and why turquoise, and
 * last the simpler favicon at its real sizes. Both images are drawn by `pnpm favicon`, so they
 * never drift apart.
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
        <p>
          <RichMessage message={m.brand_body_small()} tags={tags} />
        </p>
      </div>
      <figure className="flex flex-col gap-3">
        <div className={cn("flex items-end gap-8 p-6", cardFrameClass)}>
          {SMALL_ICON_SIZES.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              {/* One image carries the description; the other two repeat it at other sizes. */}
              <img
                src="/favicon.svg"
                alt={size === 64 ? m.brand_small_alt() : ""}
                width={size}
                height={size}
                loading="lazy"
                decoding="async"
              />
              <span className="text-xs text-muted-foreground tabular-nums">{size} px</span>
            </div>
          ))}
        </div>
        <figcaption className="text-sm text-muted-foreground">{m.brand_small_label()}</figcaption>
      </figure>
    </section>
  )
}
