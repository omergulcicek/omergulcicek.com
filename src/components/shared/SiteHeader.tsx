import type { ReactNode } from "react"

import { Link } from "@tanstack/react-router"

import { me } from "@/constants/me.constants"

import { getLangParam } from "@/helpers/localized-url"

import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher"
import { SiteMobileMenu } from "@/components/shared/SiteMobileMenu"
import { ThemeToggle } from "@/components/shared/ThemeToggle"

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
          <Link
            to="/{-$lang}"
            params={{ lang: getLangParam() }}
            className="rounded-md text-lg font-semibold outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {me.handle}
          </Link>
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
