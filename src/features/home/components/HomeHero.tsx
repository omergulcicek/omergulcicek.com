import { cn } from "cn"

import { me } from "@/constants/me.constants"

import { localize } from "@/helpers/localize"

import { ProseLink } from "@/components/shared/ProseLink"
import { RichMessage } from "@/components/shared/RichMessage"
import { surfaceDoubleFrameClass } from "@/components/shared/surface.styles"
import { HomeCtaButton } from "@/features/home/components/HomeCtaButton"
import { HomeSocialLinks } from "@/features/home/components/HomeSocialLinks"

export function HomeHero() {
  const { links, hero } = me

  return (
    <section className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold tracking-tight text-balance">{me.name}</h1>
          <p className="text-base text-muted-foreground">{localize(me.title)}</p>
        </div>
        <div className="flex flex-col gap-4 text-base leading-7 text-pretty text-foreground/80">
          <p>
            <RichMessage
              message={localize(hero.intro)}
              tags={{ virastack: (chunk) => <ProseLink href={links.virastack}>{chunk}</ProseLink> }}
            />
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <HomeCtaButton />
          <HomeSocialLinks />
        </div>
      </div>
      {/* The hero photo is the LCP image: load it eagerly with high priority. */}
      <img
        src={me.photo.src}
        alt={localize(me.photo.alt)}
        width={320}
        height={320}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className={cn(
          "aspect-square w-full max-w-80 shrink-0 object-cover",
          surfaceDoubleFrameClass
        )}
      />
    </section>
  )
}
