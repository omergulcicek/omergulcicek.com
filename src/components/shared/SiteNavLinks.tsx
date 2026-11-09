import { Link } from "@tanstack/react-router"

import { getSiteNav } from "@/constants/site-nav.constants"

import { getLangParam } from "@/helpers/localized-url"

type SiteNavLinksProps = {
  /** Called after a link is followed; the mobile menu closes itself with it. */
  onNavigate?: () => void
  /** Keeps group label ids unique when the sidebar and the mobile menu are both in the page. */
  idPrefix: string
}

/** The site's grouped page links, shared by the desktop sidebar and the mobile menu. */
export function SiteNavLinks({ onNavigate, idPrefix }: SiteNavLinksProps) {
  const lang = getLangParam()

  return (
    <div className="flex flex-col gap-6">
      {getSiteNav().map((group) => {
        const labelId = `${idPrefix}-${group.id}`

        return (
          <div key={group.id} className="flex flex-col gap-1">
            {group.label ? (
              <p id={labelId} className="px-2 pb-1 text-xs font-medium text-muted-foreground">
                {group.label}
              </p>
            ) : null}
            <ul
              aria-labelledby={group.label ? labelId : undefined}
              className="flex flex-col gap-0.5"
            >
              {group.links.map(({ to, label, icon: Icon, exact }) => (
                <li key={to}>
                  <Link
                    to={to}
                    params={{ lang }}
                    activeOptions={{ exact }}
                    onClick={onNavigate}
                    className="flex h-9 items-center gap-2 rounded-md px-2 text-sm text-muted-foreground transition-colors duration-150 ease-out outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-[current=page]:bg-accent aria-[current=page]:font-medium aria-[current=page]:text-foreground md:h-8"
                  >
                    <Icon aria-hidden className="size-4" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
