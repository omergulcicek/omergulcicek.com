/**
 * Extracts an excerpt from markdown content
 * Removes markdown syntax and returns plain text
 */
export function extractExcerpt(
	content: string,
	maxLength: number = 160
): string {
	let text = content.replace(/```[\s\S]*?```/g, "")

	text = text.replace(/`[^`]+`/g, "")

	text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")

	text = text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, "")

	text = text.replace(/^#{1,6}\s+/gm, "")

	text = text.replace(/\*\*([^\*]+)\*\*/g, "$1")
	text = text.replace(/\*([^\*]+)\*/g, "$1")

	text = text.replace(/<[^>]+>/g, "")

	text = text.replace(/\s+/g, " ").trim()

	if (text.length <= maxLength) {
		return text
	}

	const truncated = text.substring(0, maxLength)
	const lastSpace = truncated.lastIndexOf(" ")

	if (lastSpace > 0) {
		return truncated.substring(0, lastSpace) + "..."
	}

	return truncated + "..."
}
