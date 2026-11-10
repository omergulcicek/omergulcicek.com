import { Link } from "@tanstack/react-router"
import { cn } from "cn"

import { me } from "@/constants/me.constants"

import { getLangParam } from "@/helpers/localized-url"

import * as m from "@/paraglide/messages.js"
import { localizeHref } from "@/paraglide/runtime.js"

const REPOSITORY_URL = "https://github.com/omergulcicek/omergulcicek.com"

const footerLinkClass = cn(
  "rounded-sm transition-colors duration-150 ease-out hover:text-foreground",
  "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
)

/**
 * The copyright, the Brand page (the one page outside the sidebar menu that lives here), plus
 * the machine-readable ways in: the feed, llms.txt and the source.
 * Navigation and the profile icons stay in the sidebar, so the footer repeats neither.
 */
export function SiteFooter() {
  // Plain links: the feed and llms.txt are server routes, not router pages.
  const links = [
    { href: localizeHref("/feed.xml"), label: "RSS" },
    { href: "/llms.txt", label: "llms.txt" },
    { href: REPOSITORY_URL, label: m.footer_source_code(), external: true }
  ]

  return (
    // From md, h-16 (border included) like the header and the sidebar's icon row, so their top lines meet.
    <footer className="border-t border-border md:h-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-start sm:justify-between md:h-full md:items-center md:px-10 md:py-0">
        {/* Around midnight on New Year's Eve the server's year and the browser's can differ. */}
        <p className="text-foreground" suppressHydrationWarning>
          © <span className="tabular-nums">{new Date().getFullYear()}</span> {me.name}
        </p>
        <ul aria-label={m.footer_links_label()} className="flex items-center gap-4">
          <li>
            <Link
              to="/{-$lang}/brand"
              params={{ lang: getLangParam() }}
              className={footerLinkClass}
            >
              {m.nav_brand()}
            </Link>
          </li>
          {links.map(({ href, label, external }) => (
            <li key={href}>
              <a
                href={href}
                className={footerLinkClass}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
