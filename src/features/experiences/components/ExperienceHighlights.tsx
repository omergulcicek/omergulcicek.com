import { cn } from "cn"

import { me } from "@/constants/me.constants"

import { LabeledSection } from "@/components/shared/LabeledSection"
import { surfaceDoubleFrameSmClass } from "@/components/shared/surface.styles"
import { ExperienceCompany } from "@/features/experiences/components/ExperienceCompany"
import { ExperiencePeriod } from "@/features/experiences/components/ExperiencePeriod"
import { describeExperience } from "@/features/experiences/helpers/describe-experience"
import * as m from "@/paraglide/messages.js"

const RECENT_COUNT = 3

/** Home page summary: the latest roles in full rows, the earlier ones as a row of logos. */
export function ExperienceHighlights() {
  const recent = me.experiences.slice(0, RECENT_COUNT)
  const earlier = me.experiences.slice(RECENT_COUNT)

  return (
    <LabeledSection
      id="experience-heading"
      title={m.experiences_title()}
      link={{ to: "/{-$lang}/experiences", label: m.experiences_all() }}
    >
      <ol className="flex flex-col gap-5">
        {recent.map((experience) => {
          const text = describeExperience(experience)

          return (
            <li key={experience.id} className="flex items-center gap-4">
              <img
                src={experience.logo}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className={cn("size-10 shrink-0 object-cover", surfaceDoubleFrameSmClass)}
              />
              <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="flex min-w-0 flex-col gap-0.5">
                  <ExperienceCompany as="h3" company={experience.company} parent={text.parent} />
                  <p className="text-sm text-muted-foreground">{text.role}</p>
                </div>
                <p className="shrink-0 text-sm text-muted-foreground">
                  <ExperiencePeriod
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    start={text.start}
                    end={text.end}
                  />
                </p>
              </div>
            </li>
          )
        })}
      </ol>
      {earlier.length > 0 ? (
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-muted-foreground">{m.experiences_earlier()}</h3>
          <ul className="flex flex-wrap gap-3">
            {earlier.map((experience) => (
              <li key={experience.id}>
                <img
                  src={experience.logo}
                  alt={experience.company}
                  title={experience.company}
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className={cn("size-8 object-cover", surfaceDoubleFrameSmClass)}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </LabeledSection>
  )
}
