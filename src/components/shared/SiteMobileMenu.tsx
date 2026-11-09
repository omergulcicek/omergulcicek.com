import { useState } from "react"

import { MenuIcon } from "lucide-react"
import { cn } from "cn"

import { SiteNavLinks } from "@/components/shared/SiteNavLinks"
import { SiteNavSocialLinks } from "@/components/shared/SiteNavSocialLinks"
import { buttonVariants } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import * as m from "@/paraglide/messages.js"

const iconButtonClass = cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-8")

/**
 * The page links below md, where the sidebar is hidden: a menu button in the header opens
 * them in a drawer from the bottom, within thumb reach. Following a link closes it; focus
 * handling is the drawer's.
 */
export function SiteMobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen} showSwipeHandle>
      <DrawerTrigger aria-label={m.nav_menu_open()} className={cn(iconButtonClass, "md:hidden")}>
        <MenuIcon aria-hidden />
      </DrawerTrigger>
      <DrawerContent>
        {/* No visible header, as in shadcn's drawer; the title still names the dialog. */}
        <DrawerTitle className="sr-only">{m.nav_menu_title()}</DrawerTitle>
        <nav
          aria-label={m.nav_label()}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pt-2 pb-4"
        >
          <SiteNavLinks idPrefix="mobile-group" onNavigate={() => setOpen(false)} />
        </nav>
        {/* The footer stays put while the links scroll above it. */}
        <div className="shrink-0 border-t border-border px-3 pt-3 pb-[calc(2rem+env(safe-area-inset-bottom))]">
          <SiteNavSocialLinks />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
