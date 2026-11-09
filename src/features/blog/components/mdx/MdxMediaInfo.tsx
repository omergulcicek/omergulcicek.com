import { MdxDetailCard } from "@/features/blog/components/mdx/MdxDetailCard"
import type { MdxDetailRow } from "@/features/blog/components/mdx/MdxDetailCard"
import { MdxScore } from "@/features/blog/components/mdx/MdxScore"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type MdxMediaInfoProps = {
  locale: Locale
  title: string
  link?: string
  /** "Film" or "Dizi", as the post writes it. */
  type?: string
  year?: number
  imdbRating?: string
  director?: string
  directorLink?: string
  /** Out of 5, halves allowed. */
  myRating?: number
  isFavorite?: boolean
}

/** `<MediaInfo>`: the film or series a review post is about. */
export function MdxMediaInfo({ locale, ...media }: MdxMediaInfoProps) {
  const rows: MdxDetailRow[] = []
  if (media.director)
    rows.push({
      label: m.mdx_director({}, { locale }),
      value: media.director,
      href: media.directorLink
    })
  if (media.imdbRating)
    rows.push({
      label: m.mdx_imdb({}, { locale }),
      value: <span className="tabular-nums">{media.imdbRating}</span>
    })

  const kicker = [media.type, media.year].filter(Boolean).join(" · ")

  return (
    <MdxDetailCard
      title={media.title}
      href={media.link}
      kicker={kicker || undefined}
      rows={rows}
      footer={
        media.myRating === undefined ? null : (
          <span className="flex items-center justify-between gap-3 text-sm">
            <span className="text-muted-foreground">{m.mdx_my_score({}, { locale })}</span>
            <MdxScore score={media.myRating} favorite={media.isFavorite} locale={locale} />
          </span>
        )
      }
    />
  )
}
