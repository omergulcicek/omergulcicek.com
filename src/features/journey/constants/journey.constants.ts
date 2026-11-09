import data from "@/features/journey/constants/journey.json"
import type { JourneyEntry } from "@/features/journey/schemas/journey.schema"

/** Newest first, validated against journeySchema in tests, not at runtime. */
export const journey: JourneyEntry[] = data
