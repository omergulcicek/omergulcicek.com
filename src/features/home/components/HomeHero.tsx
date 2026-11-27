import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { me } from "@/constants/me.constants"

import { localize } from "@/helpers/localize"

import { emphasisTags } from "@/components/shared/emphasis-tags"
import { ProseLink } from "@/components/shared/ProseLink"
import { RichMessage } from "@/components/shared/RichMessage"
import { buttonVariants } from "@/components/ui/button"
import { HomeCtaButton } from "@/features/home/components/HomeCtaButton"
import { HomeSocialLinks } from "@/features/home/components/HomeSocialLinks"
import * as m from "@/paraglide/messages.js"

// Made from the 640 × 960 Gitscout card; it shows 256 px wide below md and 320 px from md up.
const CARD_WIDTHS = [320, 480, 640] as const
const CARD_SIZES = "(min-width: 768px) 320px, 256px"

function cardSrcSet(format: "avif" | "webp") {
  return CARD_WIDTHS.map((width) => `/img/gitscout-card-${width}.${format} ${width}w`).join(", ")
}

export function HomeHero() {
  const { links, hero } = me

  return (
    <section className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-balance">{me.name}</h1>
          <p className="text-base text-muted-foreground">{localize(me.title)}</p>
        </div>
        <div className="flex flex-col gap-4 text-base text-pretty text-foreground">
          <p>
            <RichMessage
              message={localize(hero.intro)}
              tags={{
                ...emphasisTags,
                virastack: (chunk) => <ProseLink href={links.virastack}>{chunk}</ProseLink>
              }}
            />
          </p>
        </div>
        {/* Below md the two labeled buttons share a row and the profile icons center under them. */}
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:items-center">
          <HomeCtaButton />
          <HomeSocialLinks />
        </div>
      </div>
      <div className="flex shrink-0 flex-col items-center gap-3">
        {/* The card is the LCP image: load it eagerly with high priority, and no async
            decoding, which may paint it a frame later. AVIF first, WebP as the fallback; the
            sizes cover 1x to 2x screens at both widths. The card draws its own rounded frame. */}
        <picture>
          <source type="image/avif" srcSet={cardSrcSet("avif")} sizes={CARD_SIZES} />
          <img
            src="/img/gitscout-card-640.webp"
            srcSet={cardSrcSet("webp")}
            sizes={CARD_SIZES}
            alt={m.hero_gitscout_card_alt()}
            width={320}
            height={480}
            loading="eager"
            fetchPriority="high"
            className="card-lift aspect-2/3 w-64 md:w-80"
          />
        </picture>
        <a
          href={links.gitscout}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "group text-xs text-muted-foreground"
          )}
        >
          gitscout.io
          <ArrowUpRightIcon
            aria-hidden
            className="transition-[translate] duration-150 ease-out motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </section>
  )
}
