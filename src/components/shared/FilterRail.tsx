import { Link } from "@tanstack/react-router"
import { cn } from "cn"

import { PageRail } from "@/components/shared/PageRail"
import { pageRailLinkClass } from "@/components/shared/surface.styles"
import * as m from "@/paraglide/messages.js"

type FilterRailItem = { value: string; label: string; count: number }

type FilterRailProps = {
  title: string
  /** The search param the filter writes, such as `tag` in `?tag=css`. */
  param: string
  items: readonly FilterRailItem[]
  /** Shown first as "All"; its count is every entry. */
  total: number
  /** The current value; undefined (or unknown) means "All". */
  current?: string
}

// Link sets aria-current="page" itself; exact keeps "All" ({} search) from matching every value.
const exactSearch = { exact: true } as const

const chipClass =
  "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border px-3 text-sm whitespace-nowrap transition-colors duration-150 ease-out outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"

/**
 * A single-choice list filter kept in the URL: a list in the right rail from xl, a row of chips
 * above the content below it. Only one is displayed at a time, so assistive tech meets one filter.
 */
export function FilterRail({ title, param, items, total, current }: FilterRailProps) {
  const currentValue = items.some((item) => item.value === current) ? current : undefined
  const entries = [{ value: undefined, label: m.filter_all(), count: total }, ...items]

  return (
    <>
      <PageRail title={title}>
        <ul className="flex flex-col gap-2">
          {entries.map(({ value, label, count }) => (
            <li key={value ?? "all"}>
              <Link
                to="."
                search={{ [param]: value }}
                activeOptions={exactSearch}
                className={cn(
                  pageRailLinkClass,
                  "flex items-baseline justify-between gap-3",
                  value === currentValue && "font-medium text-foreground"
                )}
              >
                {label}
                <span className="text-xs text-muted-foreground tabular-nums">{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </PageRail>
      {/* py/px-1 keep the focus ring inside the scrolling row. */}
      <nav aria-label={title} className="-mx-1 overflow-x-auto px-1 py-1 xl:hidden">
        <ul className="flex gap-2">
          {entries.map(({ value, label, count }) => {
            const selected = value === currentValue

            return (
              <li key={value ?? "all"}>
                <Link
                  to="."
                  search={{ [param]: value }}
                  activeOptions={exactSearch}
                  className={cn(
                    chipClass,
                    selected
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                  <span
                    className={cn(
                      "text-xs tabular-nums",
                      selected ? "text-background/70" : "text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
