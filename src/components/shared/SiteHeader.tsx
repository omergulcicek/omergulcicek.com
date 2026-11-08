import { Link } from "@tanstack/react-router"

import { siteConfig } from "@/config/site.config"

import { getLangParam } from "@/helpers/localized-url"

import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher"
import { ThemeToggle } from "@/components/shared/ThemeToggle"

export function SiteHeader() {
  return (
    <header>
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link
          to="/{-$lang}"
          params={{ lang: getLangParam() }}
          className="rounded-md text-lg font-semibold outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          {siteConfig.handle}
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
