import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { localize } from "@/helpers/localize"

import { mediaFrameClass, textLinkClass } from "@/components/shared/surface.styles"
import { JourneyProductsVisual } from "@/features/journey/components/JourneyProductsVisual"
import { journey } from "@/features/journey/constants/journey.constants"
import type { JourneyEntry } from "@/features/journey/schemas/journey.schema"

function groupByYear(entries: readonly JourneyEntry[]) {
  const groups = new Map<number, JourneyEntry[]>()
  for (const entry of entries) groups.set(entry.year, [...(groups.get(entry.year) ?? []), entry])
  return [...groups]
}

/**
 * Year by year down a line, like the experience timeline: the year sits on the line, its
 * moments beside it. Photos use the single media frame; the double frame stays for cards.
 */
export function JourneyTimeline() {
  const years = groupByYear(journey)
  // The first photo is usually the LCP, so it alone loads eagerly.
  const firstImageId = journey.find((entry) => entry.image)?.id

  return (
    <ol className="flex flex-col">
      {years.map(([year, entries], index) => (
        <li
          key={year}
          className="relative grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 pb-12 last:pb-0"
        >
          {index < years.length - 1 ? (
            <span
              aria-hidden
              className="absolute top-8 bottom-1 left-7 w-px -translate-x-1/2 bg-foreground/20"
            />
          ) : null}
          <h2 className="relative flex h-7 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-medium tabular-nums">
            {year}
          </h2>
          <ul className="flex flex-col gap-8 pt-0.5">
            {entries.map((entry) => (
              <JourneyItem key={entry.id} entry={entry} priority={entry.id === firstImageId} />
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}

function JourneyItem({ entry, priority }: { entry: JourneyEntry; priority: boolean }) {
  const title = localize(entry.title)

  return (
    <li className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-medium text-pretty">
          {entry.href ? (
            <a
              href={entry.href}
              target="_blank"
              rel="noreferrer"
              className={cn(textLinkClass, "inline-flex items-center gap-1")}
            >
              {title}
              <ArrowUpRightIcon aria-hidden className="size-3.5 text-muted-foreground" />
            </a>
          ) : (
            title
          )}
        </h3>
        {entry.description ? (
          <p className="text-sm text-pretty text-muted-foreground">{localize(entry.description)}</p>
        ) : null}
      </div>
      {entry.visual === "virastack-products" ? <JourneyProductsVisual /> : null}
      {entry.image ? (
        <img
          src={entry.image.src}
          alt={localize(entry.image.alt)}
          width={entry.image.width}
          height={entry.image.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          // Off-center subjects keep their framing in the fixed-ratio crop.
          style={entry.image.position ? { objectPosition: entry.image.position } : undefined}
          className={cn("aspect-[4/3] w-full max-w-md bg-muted object-cover", mediaFrameClass)}
        />
      ) : null}
    </li>
  )
}
