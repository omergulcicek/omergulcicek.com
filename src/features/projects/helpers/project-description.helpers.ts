export type ProjectDescriptionSegment = {
	/** Offset of the segment in the source text: unique and stable, so usable as a list key. */
	key: number
	text: string
	style: "plain" | "bold" | "italic" | "code"
}

const MARKUP_PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/

/** Splits a description written with `**bold**`, `*italic*` and `` `code` `` markers. */
export function parseProjectDescription(
	description: string
): ProjectDescriptionSegment[] {
	const segments: ProjectDescriptionSegment[] = []
	let offset = 0

	for (const part of description.split(MARKUP_PATTERN)) {
		const key = offset
		offset += part.length

		if (!part) {
			continue
		}

		if (part.startsWith("**")) {
			segments.push({ key, text: part.slice(2, -2), style: "bold" })
		} else if (part.startsWith("*")) {
			segments.push({ key, text: part.slice(1, -1), style: "italic" })
		} else if (part.startsWith("`")) {
			segments.push({ key, text: part.slice(1, -1), style: "code" })
		} else {
			segments.push({ key, text: part, style: "plain" })
		}
	}

	return segments
}

/** The description without markers, for search values and other plain-text spots. */
export function getProjectDescriptionText(description: string): string {
	return parseProjectDescription(description)
		.map((segment) => segment.text)
		.join("")
}
