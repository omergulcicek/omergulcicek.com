import type { ReactNode } from "react"

import { Link } from "@tanstack/react-router"
import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { localize } from "@/helpers/localize"
import { getLangParam } from "@/helpers/localized-url"

import { linkedCardClass, surfaceDoubleFrameClass } from "@/components/shared/surface.styles"
import { INTERESTS } from "@/features/about/constants/about.constants"
import type { Interest } from "@/features/about/constants/about.constants"
import * as m from "@/paraglide/messages.js"

const cardClass = cn(
  "flex h-full items-start gap-3 bg-background p-4",
  surfaceDoubleFrameClass,
  linkedCardClass
)

function InterestLink({ interest, children }: { interest: Interest; children: ReactNode }) {
  if (interest.to) {
    const params = { lang: getLangParam(), ...(interest.slug ? { slug: interest.slug } : {}) }
    return (
      <Link to={interest.to} params={params} className={cardClass}>
        {children}
      </Link>
    )
  }

  return (
    <a href={interest.href} target="_blank" rel="noreferrer" className={cardClass}>
      {children}
    </a>
  )
}

/** Hobbies as linked cards, the same card as projects: each opens where that hobby lives. */
export function AboutInterests() {
  return (
    <section aria-labelledby="about-interests" className="flex flex-col gap-4">
      <h2 id="about-interests" className="text-sm font-medium text-muted-foreground">
        {m.about_interests_title()}
      </h2>
      {/* p-1 keeps the outer ring of each card inside the grid. */}
      <ul className="grid gap-5 sm:grid-cols-2">
        {INTERESTS.map((interest) => (
          <li key={interest.id} className="p-1">
            <InterestLink interest={interest}>
              <interest.Icon
                aria-hidden
                strokeWidth={1.75}
                className="mt-0.5 size-5 shrink-0 text-muted-foreground"
              />
              <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="text-base font-medium">{localize(interest.title)}</span>
                <span className="text-sm text-muted-foreground">{localize(interest.text)}</span>
              </span>
              <ArrowUpRightIcon
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground transition-[color,translate] duration-150 ease-out group-hover:text-foreground motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
              />
            </InterestLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
