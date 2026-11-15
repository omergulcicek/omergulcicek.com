import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { mediaFrameClass } from "@/components/shared/surface.styles"
import type { Book } from "@/features/library/schemas/book.schema"
import * as m from "@/paraglide/messages.js"

type BookCardProps = {
  book: Book
  /** The first row, which is on screen at load: loaded eagerly so the LCP cover is not late. */
  priority?: boolean
}

const coverClass = cn("aspect-[2/3] w-full bg-muted object-cover", mediaFrameClass)

/** A cover with its title and author. Linked books open their store page. */
export function BookCard({ book, priority = false }: BookCardProps) {
  const cover = book.image ? (
    <img
      src={book.image}
      alt=""
      width={360}
      height={540}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={coverClass}
    />
  ) : (
    // A set without a single cover: its title stands in, so the grid keeps its rhythm.
    <span
      aria-hidden
      className={cn(
        coverClass,
        "flex items-center justify-center p-3 text-center text-sm text-muted-foreground"
      )}
    >
      {book.title}
    </span>
  )

  const text = (
    <span className="flex flex-col gap-1">
      <span className="flex items-start gap-1 text-sm font-medium text-pretty text-foreground">
        <span className="line-clamp-2">{book.title}</span>
        {book.url ? (
          // A line-high box centers the icon on the first line of a wrapped title.
          <span aria-hidden className="flex h-5 shrink-0 items-center">
            <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-colors duration-150 ease-out group-hover:text-foreground" />
          </span>
        ) : null}
      </span>
      {book.authors.length > 0 ? (
        <span className="line-clamp-1 text-xs text-muted-foreground">
          {book.authors.join(", ")}
        </span>
      ) : null}
      {book.translator ? (
        <span className="line-clamp-1 text-xs text-muted-foreground">
          {m.library_translator({ name: book.translator })}
        </span>
      ) : null}
    </span>
  )

  return (
    <li>
      {book.url ? (
        <a
          href={book.url}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col gap-2 rounded-lg outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          {cover}
          {text}
        </a>
      ) : (
        <div className="flex flex-col gap-2">
          {cover}
          {text}
        </div>
      )}
    </li>
  )
}
