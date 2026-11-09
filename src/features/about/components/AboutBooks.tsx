import type { ReactNode } from "react"

import { Link } from "@tanstack/react-router"
import { cn } from "cn"

import { getLangParam } from "@/helpers/localized-url"

import { emphasisTags } from "@/components/shared/emphasis-tags"
import { RichMessage } from "@/components/shared/RichMessage"
import { textLinkClass } from "@/components/shared/surface.styles"
import { AboutFigure } from "@/features/about/components/AboutFigure"
import { AboutHobby } from "@/features/about/components/AboutHobby"
import * as m from "@/paraglide/messages.js"

/** Books: a photo of me reading, then the paragraph. */
export function AboutBooks() {
  const tags: Record<string, (chunk: string) => ReactNode> = {
    ...emphasisTags,
    library: (chunk) => (
      <Link
        to="/{-$lang}/library"
        params={{ lang: getLangParam() }}
        className={cn(textLinkClass, "font-medium text-foreground")}
      >
        {chunk}
      </Link>
    )
  }

  return (
    <AboutHobby title={m.about_books_title()}>
      <AboutFigure
        src="/img/about/reading.webp"
        alt={m.about_books_reading_alt()}
        caption={m.about_books_caption_reading()}
        width={1280}
        height={960}
        className="aspect-4/3"
      />
      <p>
        <RichMessage message={m.about_books_body()} tags={tags} />
      </p>
    </AboutHobby>
  )
}
