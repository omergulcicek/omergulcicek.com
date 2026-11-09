import { SiteNavLinks } from "@/components/shared/SiteNavLinks"
import * as m from "@/paraglide/messages.js"

/** The page links on the left from md up; below that, SiteMobileMenu takes over. */
export function SiteSidebar() {
  return (
    <nav
      aria-label={m.nav_label()}
      className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-60 shrink-0 overflow-y-auto overscroll-contain border-r border-border px-3 py-4 md:block"
    >
      <SiteNavLinks idPrefix="sidebar-group" />
    </nav>
  )
}
