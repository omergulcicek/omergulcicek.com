/**
 * Extracts an excerpt from markdown content
 * Removes markdown syntax and returns plain text
 */
export function extractExcerpt(content: string, maxLength: number = 160): string {
	// Remove code blocks
	let text = content.replace(/```[\s\S]*?```/g, "")
	
	// Remove inline code
	text = text.replace(/`[^`]+`/g, "")
	
	// Remove links but keep text
	text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
	
	// Remove images
	text = text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, "")
	
	// Remove headers
	text = text.replace(/^#{1,6}\s+/gm, "")
	
	// Remove bold/italic
	text = text.replace(/\*\*([^\*]+)\*\*/g, "$1")
	text = text.replace(/\*([^\*]+)\*/g, "$1")
	
	// Remove HTML tags
	text = text.replace(/<[^>]+>/g, "")
	
	// Remove extra whitespace
	text = text.replace(/\s+/g, " ").trim()
	
	// Truncate to max length
	if (text.length <= maxLength) {
		return text
	}
	
	// Truncate at word boundary
	const truncated = text.substring(0, maxLength)
	const lastSpace = truncated.lastIndexOf(" ")
	
	if (lastSpace > 0) {
		return truncated.substring(0, lastSpace) + "..."
	}
	
	return truncated + "..."
}

