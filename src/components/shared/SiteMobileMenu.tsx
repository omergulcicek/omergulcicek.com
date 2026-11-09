import { useState } from "react"

import { MenuIcon, XIcon } from "lucide-react"
import { cn } from "cn"

import { SiteNavLinks } from "@/components/shared/SiteNavLinks"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import * as m from "@/paraglide/messages.js"

const iconButtonClass = cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-8")

/**
 * The page links below md, where the sidebar is hidden: a menu button in the header opens
 * them in a sheet from the left. Following a link closes it; focus handling is the sheet's.
 */
export function SiteMobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label={m.nav_menu_open()} className={cn(iconButtonClass, "md:hidden")}>
        <MenuIcon aria-hidden />
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false} className="w-72 gap-0 p-0">
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <SheetTitle className="text-sm">{m.nav_menu_title()}</SheetTitle>
          <SheetClose aria-label={m.nav_menu_close()} className={iconButtonClass}>
            <XIcon aria-hidden />
          </SheetClose>
        </div>
        <nav
          aria-label={m.nav_label()}
          className="flex-1 overflow-y-auto overscroll-contain px-3 py-4"
        >
          <SiteNavLinks idPrefix="mobile-group" onNavigate={() => setOpen(false)} />
        </nav>
      </SheetContent>
    </Sheet>
  )
}
