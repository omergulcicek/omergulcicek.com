import { me } from "@/constants/me.constants"

import { emphasisTags } from "@/components/shared/emphasis-tags"
import { ProseLink } from "@/components/shared/ProseLink"
import { RichMessage } from "@/components/shared/RichMessage"
import { AboutFigure } from "@/features/about/components/AboutFigure"
import * as m from "@/paraglide/messages.js"

const tags = {
  ...emphasisTags,
  mail: (chunk: string) => <ProseLink href={`mailto:${me.links.email}`}>{chunk}</ProseLink>
}

/**
 * A personal welcome: where I live, who I am and where I come from, then a photo. Work stays on
 * the home page and its own pages.
 */
export function AboutIntro() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 text-base leading-7 text-pretty text-foreground/80">
        <p>
          <RichMessage message={m.about_intro_place()} tags={tags} />
        </p>
        <p>
          <RichMessage message={m.about_intro_character()} tags={tags} />
        </p>
        <p>
          <RichMessage message={m.about_intro_roots()} tags={tags} />
        </p>
        <p>
          <RichMessage message={m.about_intro_contact()} tags={tags} />
        </p>
      </div>
      {/* The page's first photo and likely its LCP: eager, with high priority. */}
      <AboutFigure
        src="/img/about/about.webp"
        alt={m.about_photo_alt()}
        caption={m.about_photo_caption()}
        width={1008}
        height={672}
        loading="eager"
        fetchPriority="high"
        className="aspect-3/2"
      />
    </section>
  )
}
