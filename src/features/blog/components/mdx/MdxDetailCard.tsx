import type { ReactNode } from "react"

import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { cardFrameClass, textLinkClass } from "@/components/shared/surface.styles"

export type MdxDetailRow = { label: string; value: ReactNode; href?: string }

type MdxDetailCardProps = {
  title: string
  href?: string
  /** A short line under the title, such as "Dizi · 2020". */
  kicker?: string
  rows: readonly MdxDetailRow[]
  footer?: ReactNode
}

/**
 * The fact sheet behind `<BookInfo>` and `<MediaInfo>`: a titled card with label and value
 * rows, in the same single frame as the site's other cards.
 */
export function MdxDetailCard({ title, href, kicker, rows, footer }: MdxDetailCardProps) {
  return (
    <aside className="not-prose my-8 p-1">
      <div className={cn("flex flex-col gap-4 p-5", cardFrameClass)}>
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold text-pretty">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={cn(textLinkClass, "inline-flex items-center gap-1")}
              >
                {title}
                <ArrowUpRightIcon aria-hidden className="size-3.5 text-muted-foreground" />
              </a>
            ) : (
              title
            )}
          </p>
          {kicker ? <p className="text-sm text-muted-foreground">{kicker}</p> : null}
        </div>
        <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-2 text-sm">
          {rows.map(({ label, value, href: rowHref }) => (
            <div key={label} className="contents">
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="text-foreground">
                {rowHref ? (
                  <a href={rowHref} target="_blank" rel="noreferrer" className={textLinkClass}>
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>
        {footer ? <div className="border-t border-border pt-3">{footer}</div> : null}
      </div>
    </aside>
  )
}
