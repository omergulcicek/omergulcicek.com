import type { ComponentType, SVGProps } from "react"

import { me } from "@/constants/me.constants"

import { GithubLight } from "@/components/ui/svgs/githubLight"
import { Linkedin } from "@/components/ui/svgs/linkedin"
import { Npm } from "@/components/ui/svgs/npm"
import { X } from "@/components/ui/svgs/x"
import * as m from "@/paraglide/messages.js"

type SocialLink = {
  href: string
  label: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

/** Profiles in display order: code first, then social, as in v10. A function, so labels follow the locale. */
export function getSocialLinks(): SocialLink[] {
  const { links } = me

  return [
    { href: links.github, label: m.social_github(), Icon: GithubLight },
    { href: links.npm, label: m.social_npm(), Icon: Npm },
    { href: links.linkedin, label: m.social_linkedin(), Icon: Linkedin },
    { href: links.x, label: m.social_x(), Icon: X }
  ]
}
