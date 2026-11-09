import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { me } from "@/constants/me.constants"

import { buttonVariants } from "@/components/ui/button"
import { VIRASTACK_GITHUB } from "@/features/virastack/constants/virastack.constants"
import * as m from "@/paraglide/messages.js"

const iconClass =
  "transition-[translate] duration-150 ease-out motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"

/** The site and the GitHub organization, right under the page header. */
export function ViraStackLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={me.links.virastack}
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ size: "sm" }), "group")}
      >
        {m.virastack_link_site()}
        <ArrowUpRightIcon aria-hidden className={iconClass} />
      </a>
      <a
        href={VIRASTACK_GITHUB}
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ size: "sm", variant: "outline" }), "group")}
      >
        {m.virastack_link_github()}
        <ArrowUpRightIcon aria-hidden className={iconClass} />
      </a>
    </div>
  )
}
