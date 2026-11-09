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

const coverClass = cn(
  "aspect-[2/3] w-full bg-muted object-cover transition-[border-color] duration-150 ease-out",
  mediaFrameClass
)

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
      className={cn(coverClass, book.url && "group-hover:border-foreground/30")}
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
    <span className="flex flex-col gap-0.5">
      <span className="flex items-start gap-1 text-sm font-medium text-pretty">
        <span className="line-clamp-2">{book.title}</span>
        {book.url ? (
          <ArrowUpRightIcon
            aria-hidden
            className="mt-0.5 size-3.5 shrink-0 text-muted-foreground transition-colors duration-150 ease-out group-hover:text-foreground"
          />
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
          className="group flex flex-col gap-3 rounded-lg outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          {cover}
          {text}
        </a>
      ) : (
        <div className="flex flex-col gap-3">
          {cover}
          {text}
        </div>
      )}
    </li>
  )
}
