import { Link } from "@tanstack/react-router"
import { ArrowRightIcon } from "lucide-react"
import { cn } from "cn"

import { getLangParam } from "@/helpers/localized-url"

import { buttonVariants } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"

export function HomeCtaButton() {
  return (
    <Link
      to="/{-$lang}/virastack"
      params={{ lang: getLangParam() }}
      className={cn(buttonVariants({ size: "sm" }), "group")}
    >
      {m.hero_cta()}
      <ArrowRightIcon
        aria-hidden
        className="transition-transform duration-150 ease-out motion-safe:group-hover:translate-x-0.5"
      />
    </Link>
  )
}
