export function computeReadingTimeMinutes(content: string) {
	const plainText = content
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
		.replace(/\[[^\]]*\]\([^)]*\)/g, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/[#>*_`~-]/g, " ")
		.replace(/\s+/g, " ")
		.trim()

	const wordCount = plainText.length > 0 ? plainText.split(" ").length : 0

	return Math.max(1, Math.ceil(wordCount / 200))
}
