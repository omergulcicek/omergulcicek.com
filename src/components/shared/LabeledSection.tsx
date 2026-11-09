import type { ReactNode } from "react"

import { Link } from "@tanstack/react-router"
import { ArrowRightIcon } from "lucide-react"

import { getLangParam } from "@/helpers/localized-url"

import type { FileRouteTypes } from "@/routeTree.gen"

type LabeledSectionProps = {
  /** Set as the heading's id, so the section can point `aria-labelledby` at it. */
  id: string
  title: string
  /** An optional "see all" link under the content. */
  link?: { to: FileRouteTypes["to"]; label: string }
  children: ReactNode
}

/**
 * A section with its heading in a 160px column on the left and the content beside it,
 * so the heading takes no row of its own. Below md the heading sits on top.
 */
export function LabeledSection({ id, title, link, children }: LabeledSectionProps) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-4 md:flex-row md:gap-10">
      {/* scroll-mt clears the sticky header when a page TOC jumps here. */}
      <h2
        id={id}
        className="scroll-mt-24 text-sm font-medium text-muted-foreground md:w-40 md:shrink-0"
      >
        {title}
      </h2>
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        {children}
        {link ? (
          <Link
            to={link.to}
            params={{ lang: getLangParam() }}
            className="group inline-flex items-center gap-1 self-start rounded-sm text-sm text-muted-foreground transition-colors duration-150 ease-out outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {link.label}
            <ArrowRightIcon
              aria-hidden
              className="size-3.5 transition-transform duration-150 ease-out motion-safe:group-hover:translate-x-0.5"
            />
          </Link>
        ) : null}
      </div>
    </section>
  )
}
