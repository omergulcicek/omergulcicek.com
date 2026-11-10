import { SiteNavLinks } from "@/components/shared/SiteNavLinks"
import { SiteNavSocialLinks } from "@/components/shared/SiteNavSocialLinks"
import * as m from "@/paraglide/messages.js"

/**
 * The page links on the left from md up, with the profile icons pinned to its footer; below
 * md, SiteMobileMenu takes over.
 */
export function SiteSidebar() {
  return (
    <div className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-60 shrink-0 flex-col border-r border-border md:flex">
      <nav
        aria-label={m.nav_label()}
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4"
      >
        <SiteNavLinks idPrefix="sidebar-group" />
      </nav>
      {/* h-16 like the header and the footer, so at the page's end its top line meets the footer's. */}
      <div className="flex h-16 shrink-0 items-center border-t border-border px-3">
        <SiteNavSocialLinks />
      </div>
    </div>
  )
}
