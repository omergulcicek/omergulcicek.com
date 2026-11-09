import { ChevronDownIcon } from "lucide-react"
import { cn } from "cn"

import { pageRailLinkClass } from "@/components/shared/surface.styles"
import type { PostHeading } from "@/features/blog/helpers/rehype-heading-ids"
import * as m from "@/paraglide/messages.js"

type BlogMobileTocProps = { headings: readonly PostHeading[]; lang: string }

/**
 * The table of contents below xl, where the right rail is hidden: a closed `details` box at
 * the top of the post. Native, so it opens by keyboard and without JavaScript.
 */
export function BlogMobileToc({ headings, lang }: BlogMobileTocProps) {
  return (
    <details className="group/toc rounded-xl border border-border text-sm xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-xl px-4 py-3 font-medium outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
        {m.toc_title()}
        <ChevronDownIcon
          aria-hidden
          className="size-4 text-muted-foreground transition-transform duration-150 ease-out group-open/toc:rotate-180"
        />
      </summary>
      <ul lang={lang} className="flex flex-col gap-2 border-t border-border px-4 py-3">
        {headings.map(({ id, text, level }) => (
          <li key={id} className={cn(level === 3 && "pl-3")}>
            <a href={`#${id}`} className={cn(pageRailLinkClass, "text-pretty")}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </details>
  )
}
