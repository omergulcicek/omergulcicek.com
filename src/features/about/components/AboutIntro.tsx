import type { ReactNode } from "react"

import { Link } from "@tanstack/react-router"
import { cn } from "cn"

import { me } from "@/constants/me.constants"

import { localize } from "@/helpers/localize"
import { getLangParam } from "@/helpers/localized-url"

import { ProseLink } from "@/components/shared/ProseLink"
import { RichMessage } from "@/components/shared/RichMessage"
import { surfaceDoubleFrameClass, textLinkClass } from "@/components/shared/surface.styles"
import * as m from "@/paraglide/messages.js"

const internalLinkClass = cn(textLinkClass, "font-medium text-foreground")

/** Who I am in three short paragraphs, beside the photo; career detail stays on its own pages. */
export function AboutIntro() {
  const lang = getLangParam()
  const tags: Record<string, (chunk: string) => ReactNode> = {
    experiences: (chunk) => (
      <Link to="/{-$lang}/experiences" params={{ lang }} className={internalLinkClass}>
        {chunk}
      </Link>
    ),
    blog: (chunk) => (
      <Link to="/{-$lang}/blog" params={{ lang }} className={internalLinkClass}>
        {chunk}
      </Link>
    ),
    virastack: (chunk) => <ProseLink href={me.links.virastack}>{chunk}</ProseLink>,
    mail: (chunk) => <ProseLink href={`mailto:${me.links.email}`}>{chunk}</ProseLink>
  }

  return (
    <section className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:gap-8">
      <div className="flex min-w-0 flex-1 flex-col gap-4 text-base leading-7 text-pretty text-foreground/80">
        <p>{m.about_intro_origin()}</p>
        <p>
          <RichMessage message={m.about_intro_work()} tags={tags} />
        </p>
        <p>
          <RichMessage message={m.about_intro_contact()} tags={tags} />
        </p>
      </div>
      {/* The home hero photo for now; a more casual one can replace it later. */}
      <img
        src={me.photo.src}
        alt={localize(me.photo.alt)}
        width={320}
        height={320}
        loading="eager"
        decoding="async"
        className={cn("aspect-square w-40 shrink-0 object-cover", surfaceDoubleFrameClass)}
      />
    </section>
  )
}
