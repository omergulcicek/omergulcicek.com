import { cn } from "cn"

import { PageRail } from "@/components/shared/PageRail"
import { pageRailLinkClass } from "@/components/shared/surface.styles"
import * as m from "@/paraglide/messages.js"

export type PageTocItem = {
  id: string
  label: string
  /** 3 for a subsection, indented under its section; sections are 2, the default. */
  level?: 2 | 3
}

type PageTocProps = {
  items: readonly PageTocItem[]
  /** The language of the labels when it differs from the page's, such as a post's headings. */
  lang?: string
}

/** "On this page" links in the right rail. Smaller screens read the headings in place. */
export function PageToc({ items, lang }: PageTocProps) {
  return (
    <PageRail title={m.toc_title()}>
      <ul lang={lang} className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.id} className={cn(item.level === 3 && "pl-3")}>
            <a href={`#${item.id}`} className={cn(pageRailLinkClass, "text-pretty")}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </PageRail>
  )
}
