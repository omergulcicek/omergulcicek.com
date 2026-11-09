import { useId } from "react"
import type { ReactNode } from "react"

type PageRailProps = { title: string; children: ReactNode }

/**
 * The right rail: a titled nav fixed to the window's right edge from xl, so on wide screens it
 * stays at the edge instead of beside the content. Every rail (TOC, blog tags) shares this width.
 * Reading pages are left-aligned (`readingWidthClass`), which keeps the text clear of it.
 */
export function PageRail({ title, children }: PageRailProps) {
  const titleId = useId()

  return (
    <nav
      aria-labelledby={titleId}
      // The page entrance only fades blocks that hold the rail (see tailwind.css).
      data-page-rail=""
      // Long lists (19 book genres) scroll inside the rail instead of running off the window.
      className="fixed top-28 right-10 hidden max-h-[calc(100dvh-9rem)] w-56 flex-col gap-3 overflow-y-auto text-sm xl:flex"
    >
      <p id={titleId} className="font-medium">
        {title}
      </p>
      {children}
    </nav>
  )
}
