export type ProjectDescriptionSegment = {
	text: string
	style: "plain" | "bold" | "italic" | "code"
}

const MARKUP_PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/

/** Splits a description written with `**bold**`, `*italic*` and `` `code` `` markers. */
export function parseProjectDescription(
	description: string
): ProjectDescriptionSegment[] {
	return description
		.split(MARKUP_PATTERN)
		.filter(Boolean)
		.map((part): ProjectDescriptionSegment => {
			if (part.startsWith("**")) {
				return { text: part.slice(2, -2), style: "bold" }
			}

			if (part.startsWith("*")) {
				return { text: part.slice(1, -1), style: "italic" }
			}

			if (part.startsWith("`")) {
				return { text: part.slice(1, -1), style: "code" }
			}

			return { text: part, style: "plain" }
		})
}

/** The description without markers, for search values and other plain-text spots. */
export function getProjectDescriptionText(description: string): string {
	return parseProjectDescription(description)
		.map((segment) => segment.text)
		.join("")
}
