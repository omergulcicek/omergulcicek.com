import { cn } from "cn"

import { me } from "@/constants/me.constants"
import type { Me } from "@/schemas/me.schema"

import { localize } from "@/helpers/localize"

import { surfaceDoubleFrameSmClass } from "@/components/shared/surface.styles"
import { ExperienceCompany } from "@/features/experiences/components/ExperienceCompany"
import { ExperiencePeriod } from "@/features/experiences/components/ExperiencePeriod"
import { describeExperience } from "@/features/experiences/helpers/describe-experience"
import * as m from "@/paraglide/messages.js"

type Experience = Me["experiences"][number]

/*
 * A timeline instead of cards: one line down the left, each company's logo sitting on it.
 * Roles with highlights (from the CV) get the full entry; the early ones, without, sit under
 * "Earlier" on one compact line each, so the recent work carries the page.
 */
export function ExperienceList() {
  const featured = me.experiences.filter((experience) => experience.highlights.length > 0)
  const earlier = me.experiences.filter((experience) => experience.highlights.length === 0)

  return (
    <div className="flex flex-col gap-12">
      <ol className="flex flex-col">
        {featured.map((experience, index) => (
          <FeaturedEntry
            key={experience.id}
            experience={experience}
            last={index === featured.length - 1}
          />
        ))}
      </ol>
      {earlier.length > 0 ? (
        <section aria-labelledby="experiences-earlier" className="flex flex-col gap-4">
          <h2 id="experiences-earlier" className="text-sm font-medium text-muted-foreground">
            {m.experiences_earlier()}
          </h2>
          <ol className="flex flex-col">
            {earlier.map((experience, index) => (
              <CompactEntry
                key={experience.id}
                experience={experience}
                last={index === earlier.length - 1}
              />
            ))}
          </ol>
        </section>
      ) : null}
    </div>
  )
}

type EntryProps = { experience: Experience; last: boolean }

/**
 * The line segment from one logo to the next; the last entry of each list has none.
 * Stronger than `border`, which reads as a hairline at 12% on the dark theme.
 */
function TimelineLine({ last, top }: { last: boolean; top: string }) {
  if (last) return null

  return (
    <span
      aria-hidden
      className={cn("absolute bottom-1 left-5 w-px -translate-x-1/2 bg-foreground/20", top)}
    />
  )
}

function FeaturedEntry({ experience, last }: EntryProps) {
  const text = describeExperience(experience)

  return (
    <li className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 pb-10 last:pb-0">
      <TimelineLine last={last} top="top-12" />
      <img
        src={experience.logo}
        alt=""
        width={40}
        height={40}
        loading="lazy"
        decoding="async"
        className={cn("relative size-10 bg-background object-cover", surfaceDoubleFrameSmClass)}
      />
      <article className="flex flex-col gap-3">
        <header className="flex flex-col gap-1">
          <div className="flex flex-col gap-x-4 gap-y-0.5 sm:flex-row sm:items-baseline sm:justify-between">
            <ExperienceCompany as="h2" company={experience.company} parent={text.parent} />
            <span className="shrink-0 text-sm text-muted-foreground">
              <ExperiencePeriod
                startDate={experience.startDate}
                endDate={experience.endDate}
                start={text.start}
                end={text.end}
              />
            </span>
          </div>
          <p className="text-sm">
            <span className="font-medium">{text.role}</span>
            <span className="text-muted-foreground">
              {" · "}
              {text.duration} · {text.location}
            </span>
          </p>
        </header>
        <ul className="flex list-disc flex-col gap-1.5 pl-4 text-sm leading-6 text-pretty text-foreground/80 marker:text-muted-foreground">
          {experience.highlights.map((highlight) => (
            <li key={highlight.en}>{localize(highlight)}</li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground">{experience.technologies.join(" · ")}</p>
      </article>
    </li>
  )
}

function CompactEntry({ experience, last }: EntryProps) {
  const text = describeExperience(experience)

  return (
    <li className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 pb-6 last:pb-0">
      <TimelineLine last={last} top="top-9" />
      {/* A smaller logo, centered on the same line as the featured ones. */}
      <img
        src={experience.logo}
        alt=""
        width={32}
        height={32}
        loading="lazy"
        decoding="async"
        className={cn(
          "relative mx-auto size-8 bg-background object-cover",
          surfaceDoubleFrameSmClass
        )}
      />
      <article className="flex flex-col gap-0.5">
        <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
          <ExperienceCompany as="h3" company={experience.company} parent={text.parent} />
          <span className="shrink-0 text-sm text-muted-foreground">
            <ExperiencePeriod
              startDate={experience.startDate}
              endDate={experience.endDate}
              start={text.start}
              end={text.end}
            />
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{text.role}</span> · {text.summary}
        </p>
      </article>
    </li>
  )
}
