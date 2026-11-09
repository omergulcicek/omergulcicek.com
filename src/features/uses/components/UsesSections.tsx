import { Fragment } from "react"

import { Link } from "@tanstack/react-router"
import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { localize } from "@/helpers/localize"
import { getLangParam } from "@/helpers/localized-url"

import { PageToc } from "@/components/shared/PageToc"
import { titleLinkClass } from "@/components/shared/surface.styles"
import { USES_LOGOS } from "@/features/uses/constants/uses-logos.constants"
import { USES_SECTIONS } from "@/features/uses/constants/uses.constants"
import type { UsesItem } from "@/features/uses/constants/uses.constants"

function ItemName({ item }: { item: UsesItem }) {
  const name = typeof item.name === "string" ? item.name : localize(item.name)

  if (item.to) {
    return (
      <Link to={item.to} params={{ lang: getLangParam() }} className={titleLinkClass}>
        {name}
      </Link>
    )
  }
  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={cn(titleLinkClass, "inline-flex items-center gap-1")}
      >
        {name}
        <ArrowUpRightIcon aria-hidden className="size-3.5 text-muted-foreground" />
      </a>
    )
  }
  return name
}

/** The uses page: short sections of "what I use and why", each with its own anchor. */
export function UsesSections() {
  const sections = USES_SECTIONS.map((section) => ({ ...section, id: `uses-${section.id}` }))

  return (
    <>
      <PageToc items={sections.map(({ id, title }) => ({ id, label: localize(title) }))} />
      <div className="flex flex-col gap-12">
        {sections.map(({ id, title, items }) => (
          <section key={id} aria-labelledby={id} className="flex flex-col gap-4">
            <h2 id={id} className="scroll-mt-24 text-sm font-medium text-muted-foreground">
              {localize(title)}
            </h2>
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={typeof item.name === "string" ? item.name : item.name.en}
                  className="flex items-center gap-3"
                >
                  {/* One logo per row, in a fixed column so the names line up; centered on the title and
                      its note together, which reads as aligned better than the title line. */}
                  <span className="flex w-5 shrink-0 items-center">
                    {item.logos.map((logo) => (
                      <Fragment key={logo}>{USES_LOGOS[logo]}</Fragment>
                    ))}
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className="text-base font-medium">
                      <ItemName item={item} />
                    </span>
                    <span className="text-sm text-pretty text-muted-foreground">
                      {localize(item.note)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}
