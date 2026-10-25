import type { SITE_COPY } from "@/constants/site-copy.constants"

export type AboutParagraphSegment =
	(typeof SITE_COPY)["about"]["paragraphs"][number][number]

export function getAboutSegmentText(segment: AboutParagraphSegment) {
	if (typeof segment === "string") {
		return segment
	}

	return "emphasis" in segment ? segment.emphasis : segment.text
}

/** Stable key for a paragraph: its plain text. */
export function getAboutParagraphKey(
	segments: readonly AboutParagraphSegment[]
) {
	return segments.map(getAboutSegmentText).join("")
}
