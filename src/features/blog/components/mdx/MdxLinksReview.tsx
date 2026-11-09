import { ChevronDownIcon } from "lucide-react"

import { titleLinkClass } from "@/components/shared/surface.styles"

type MdxLinksReviewProps = { title: string; links: readonly { href: string; label: string }[] }

/** `<LinksReview>`: a closed list of links, such as a year's posts. Native `details`, no JS. */
export function MdxLinksReview({ title, links }: MdxLinksReviewProps) {
  return (
    <details className="group/links not-prose my-6 rounded-xl border border-border text-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 font-medium outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
        <span className="text-pretty">{title}</span>
        <span className="flex shrink-0 items-center gap-2 text-xs font-normal text-muted-foreground tabular-nums">
          {links.length}
          <ChevronDownIcon
            aria-hidden
            className="size-4 transition-[rotate] duration-150 ease-out group-open/links:rotate-180 motion-reduce:transition-none"
          />
        </span>
      </summary>
      <ol className="flex list-decimal flex-col gap-2 border-t border-border py-3 pr-4 pl-9 marker:text-muted-foreground">
        {links.map(({ href, label }) => {
          const external = href.startsWith("http")

          return (
            <li key={href} className="pl-1">
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={titleLinkClass}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ol>
    </details>
  )
}
