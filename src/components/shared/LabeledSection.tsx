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
 * A home section: a real h2 on top and the content under it, so the heading outranks the item
 * titles it labels.
 */
export function LabeledSection({ id, title, link, children }: LabeledSectionProps) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-6">
      <h2 id={id} className="text-xl font-semibold text-foreground">
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
              className="size-4 transition-[translate] duration-150 ease-out motion-safe:group-hover:translate-x-1"
            />
          </Link>
        ) : null}
      </div>
    </section>
  )
}
