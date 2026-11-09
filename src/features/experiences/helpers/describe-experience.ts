import type { Me } from "@/schemas/me.schema"

import { formatYearMonth } from "@/helpers/format-year-month"
import { localize } from "@/helpers/localize"

import { countMonths, formatDuration } from "@/features/experiences/helpers/experience-duration"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

type Experience = Me["experiences"][number]

// me.json types the mode as a plain string; the schema test pins it to these three values.
function getWorkModeLabel(workMode: string) {
  if (workMode === "remote") return m.work_mode_remote()
  if (workMode === "hybrid") return m.work_mode_hybrid()
  return m.work_mode_onsite()
}

/** The display strings of one experience in the current locale. Call it during render. */
export function describeExperience(experience: Experience) {
  const locale = getLocale()
  const { city, workMode } = experience.location

  return {
    role: localize(experience.role),
    summary: localize(experience.summary),
    start: formatYearMonth(experience.startDate, locale),
    end: experience.endDate ? formatYearMonth(experience.endDate, locale) : m.experiences_present(),
    location: [city ? localize(city) : null, getWorkModeLabel(workMode)]
      .filter(Boolean)
      .join(" · "),
    duration: formatDuration(
      countMonths(experience.startDate, experience.endDate, new Date()),
      locale
    ),
    parent: experience.parent ? m.experiences_parent({ parent: experience.parent }) : null
  }
}
