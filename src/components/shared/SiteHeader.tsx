import type { ReactNode } from "react"

import { Link } from "@tanstack/react-router"
import { PaletteIcon } from "lucide-react"

import { me } from "@/constants/me.constants"

import { getLangParam } from "@/helpers/localized-url"

import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher"
import { SiteMobileMenu } from "@/components/shared/SiteMobileMenu"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from "@/components/ui/context-menu"
import * as m from "@/paraglide/messages.js"

type SiteHeaderProps = {
  /** The search button, passed in by the root route since it reads the blog feature's posts. */
  search?: ReactNode
}

export function SiteHeader({ search }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="flex h-16 items-center justify-between gap-2 px-4 md:px-5">
        <div className="flex items-center gap-2">
          <SiteMobileMenu />
          {/* Right-clicking the logo, the usual place for a site's brand assets, opens the Brand page. */}
          <ContextMenu>
            <ContextMenuTrigger
              render={
                <Link
                  to="/{-$lang}"
                  params={{ lang: getLangParam() }}
                  className="flex items-center gap-2 rounded-md text-lg font-semibold outline-none select-auto focus-visible:ring-[3px] focus-visible:ring-ring/50"
                />
              }
            >
              {/* Decorative: the handle beside it already names the link. */}
              <img src="/favicon.svg" alt="" width={28} height={28} className="size-7 shrink-0" />
              {me.handle}
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem
                render={<Link to="/{-$lang}/brand" params={{ lang: getLangParam() }} />}
              >
                <PaletteIcon aria-hidden="true" />
                {m.nav_brand()}
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
        <div className="flex items-center gap-2">
          {search}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
