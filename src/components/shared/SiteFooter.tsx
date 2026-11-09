import { MailIcon } from "lucide-react"
import { cn } from "cn"

import { me } from "@/constants/me.constants"
import { getSocialLinks } from "@/constants/social-links.constants"

import { ProseLink } from "@/components/shared/ProseLink"
import { RichMessage } from "@/components/shared/RichMessage"
import { buttonVariants } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"

const REPOSITORY_URL = "https://github.com/omergulcicek/omergulcicek.com"
const VIRASTACK_START_URL = `${me.links.virastack}/start`

const iconLinkClass = cn(
  buttonVariants({ variant: "ghost", size: "icon" }),
  "size-8 text-muted-foreground"
)

/**
 * Who made the site, how, and where to reach me. Navigation stays in the sidebar, so the
 * footer repeats none of it; the profile links are here because the home hero is their only
 * other place.
 */
const tags = {
  virastack: (chunk: string) => (
    <ProseLink href={VIRASTACK_START_URL} className="font-normal text-muted-foreground">
      {chunk}
    </ProseLink>
  ),
  source: (chunk: string) => (
    <ProseLink href={REPOSITORY_URL} className="font-normal text-muted-foreground">
      {chunk}
    </ProseLink>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10">
        <div className="flex flex-col gap-1">
          {/* Around midnight on New Year's Eve the server's year and the browser's can differ. */}
          <p className="text-foreground" suppressHydrationWarning>
            © <span className="tabular-nums">{new Date().getFullYear()}</span> {me.name}
          </p>
          <p className="text-xs text-pretty">
            <RichMessage message={m.footer_built_with()} tags={tags} />
            {/* Its own line, so the sentence never breaks mid-phrase at the end of the first. */}
            <span className="block">
              <RichMessage message={m.footer_source()} tags={tags} />
            </span>
          </p>
        </div>
        <ul
          aria-label={m.social_label()}
          className="-ml-2 flex items-center gap-1 sm:-mr-2 sm:ml-0"
        >
          <li>
            <a
              href={`mailto:${me.links.email}`}
              aria-label={m.social_email()}
              className={iconLinkClass}
            >
              <MailIcon aria-hidden className="size-4" />
            </a>
          </li>
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
      </div>
    </footer>
  )
}
