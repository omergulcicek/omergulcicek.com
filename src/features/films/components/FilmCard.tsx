import { ArrowUpRightIcon, StarIcon } from "lucide-react"
import { cn } from "cn"

import { localize } from "@/helpers/localize"

import { mediaFrameClass } from "@/components/shared/surface.styles"
import type { Film } from "@/features/films/schemas/film.schema"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

type FilmCardProps = { film: Film }

/** A poster (or a video thumbnail) with the title, then the rating or channel and a line on it. */
export function FilmCard({ film }: FilmCardProps) {
  const video = film.kind === "video"
  const rating = film.rating?.toLocaleString(getLocale(), { minimumFractionDigits: 1 })

  return (
    <li>
      <a
        href={film.url}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col gap-3 rounded-lg outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <img
          src={film.image}
          alt=""
          width={368}
          height={video ? 207 : 552}
          loading="lazy"
          decoding="async"
          className={cn(
            "w-full bg-muted object-cover transition-[border-color] duration-150 ease-out group-hover:border-foreground/30",
            video ? "aspect-video" : "aspect-[2/3]",
            mediaFrameClass
          )}
        />
        <span className="flex flex-col gap-1">
          <span className="flex items-start gap-1 text-sm font-medium text-pretty">
            <span className="line-clamp-2">{film.title}</span>
            <ArrowUpRightIcon
              aria-hidden
              className="mt-0.5 size-3.5 shrink-0 text-muted-foreground transition-colors duration-150 ease-out group-hover:text-foreground"
            />
          </span>
          {rating ? (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <StarIcon aria-hidden className="size-3" />
              <span className="sr-only">{m.films_rating({ rating })}</span>
              <span aria-hidden className="tabular-nums">
                {rating}
              </span>
            </span>
          ) : null}
          {film.channel ? (
            <span className="line-clamp-1 text-xs text-muted-foreground">{film.channel}</span>
          ) : null}
          {film.description ? (
            <span className="line-clamp-3 text-xs text-pretty text-muted-foreground">
              {localize(film.description)}
            </span>
          ) : null}
        </span>
      </a>
    </li>
  )
}
