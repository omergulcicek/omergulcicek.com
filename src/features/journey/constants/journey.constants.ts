import { ME } from "@/constants/me.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"
import type { JourneyYearGroup } from "@/features/journey/types/journey.types"

export const JOURNEY_CONTENT = {
	pageTitle: SITE_COPY.journey.title,
	pageDescription: SITE_COPY.journey.intro
} as const

export const JOURNEY_TIMELINE: JourneyYearGroup[] = ME.journey
