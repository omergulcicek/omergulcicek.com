const NAMED_HTML_ENTITIES: Record<string, string> = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	nbsp: "\u00A0",
	quot: '"'
}

export function decodeHtmlEntities(value: string) {
	return value
		.replace(/&#(\d+);/g, (_match, code: string) =>
			String.fromCodePoint(Number(code))
		)
		.replace(/&#x([0-9a-f]+);/gi, (_match, code: string) =>
			String.fromCodePoint(Number.parseInt(code, 16))
		)
		.replace(/&([a-z]+);/gi, (match, name: string) => {
			const decoded = NAMED_HTML_ENTITIES[name.toLowerCase()]

			return decoded ?? match
		})
}
