import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { localize } from "@/helpers/localize"

import { mediaFrameClass } from "@/components/shared/surface.styles"
import type { Bookmark } from "@/features/bookmarks/schemas/bookmark.schema"

type BookmarkItemProps = { bookmark: Bookmark }

/** One row: a 16:9 preview, then the title, what it is and where it lives. */
export function BookmarkItem({ bookmark }: BookmarkItemProps) {
  const host = new URL(bookmark.url).hostname.replace(/^www\./, "")

  return (
    <li>
      <a
        href={bookmark.url}
        target="_blank"
        rel="noreferrer"
        className="group flex items-start gap-4 rounded-lg outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <img
          src={bookmark.image}
          alt=""
          width={640}
          height={360}
          loading="lazy"
          decoding="async"
          className={cn(
            "aspect-video w-28 shrink-0 bg-muted object-cover transition-[border-color] duration-150 ease-out group-hover:border-foreground/30",
            mediaFrameClass
          )}
        />
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="flex items-center gap-1.5 text-base font-medium">
            <span className="truncate">{bookmark.title}</span>
            <ArrowUpRightIcon
              aria-hidden
              className="size-3.5 shrink-0 text-muted-foreground transition-[color,translate] duration-150 ease-out group-hover:text-foreground motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            />
          </span>
          <span className="text-sm text-pretty text-muted-foreground">
            {localize(bookmark.description)}
          </span>
          <span className="truncate text-xs text-muted-foreground">{host}</span>
        </span>
      </a>
    </li>
  )
}
