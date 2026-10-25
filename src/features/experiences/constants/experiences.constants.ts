import { ME } from "@/constants/me.constants"
import { formatExperiencePeriod } from "@/features/experiences/helpers/format-experience-period"

export type Experience = {
	id: string
	company: string
	icon: string
	role: string
	period: string
	summary: string
	technologies: string[]
}

export const EXPERIENCES: Experience[] = ME.experiences.map((experience) => ({
	id: experience.id,
	company: experience.company,
	icon: experience.id,
	role: experience.role,
	period: formatExperiencePeriod(experience.startDate, experience.endDate),
	summary: experience.summary,
	technologies: experience.technologies
}))

function toCvFile(href: string) {
	return { href, downloadName: href.slice(href.lastIndexOf("/") + 1) }
}

export const CV_FILES = {
	tr: toCvFile(ME.contact.resume.tr),
	en: toCvFile(ME.contact.resume.en)
} as const

export type CvLocale = keyof typeof CV_FILES

export const DEFAULT_CV_LOCALE: CvLocale = "tr"

export function getHomeExperiences() {
	return EXPERIENCES.slice(0, 3)
}
