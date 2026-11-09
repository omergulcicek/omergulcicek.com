import { MailIcon } from "lucide-react"
import { cn } from "cn"

import { me } from "@/constants/me.constants"
import { getSocialLinks } from "@/constants/social-links.constants"

import { buttonVariants } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"

const iconClass = "size-4"

export function HomeSocialLinks() {
  const { links } = me
  const items = getSocialLinks()

  // Mail is a labeled button of its own; the profile icons sit together as one tight group.
  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={`mailto:${links.email}`}
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "font-normal text-muted-foreground"
        )}
      >
        <MailIcon aria-hidden className={iconClass} />
        {m.social_email()}
      </a>
      <ul aria-label={m.social_label()} className="flex items-center">
        {items.map(({ href, label, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-8 text-muted-foreground"
              )}
            >
              <Icon aria-hidden className={iconClass} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
