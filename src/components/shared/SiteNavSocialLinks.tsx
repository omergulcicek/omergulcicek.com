import { cn } from "cn"

import { getSocialLinks } from "@/constants/social-links.constants"

import { buttonVariants } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"

const iconLinkClass = cn(
  buttonVariants({ variant: "ghost", size: "icon" }),
  "size-8 text-muted-foreground"
)

/** The profile icons in the footer of the sidebar and the mobile menu. */
export function SiteNavSocialLinks() {
  return (
    <ul aria-label={m.social_label()} className="flex items-center gap-1">
      {getSocialLinks().map(({ href, label, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={iconLinkClass}
          >
            <Icon aria-hidden className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  )
}
