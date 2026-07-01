const TURKISH_CHAR_MAP: Record<string, string> = {
	ç: "c",
	ğ: "g",
	ı: "i",
	ö: "o",
	ş: "s",
	ü: "u",
	Ç: "c",
	Ğ: "g",
	İ: "i",
	Ö: "o",
	Ş: "s",
	Ü: "u"
}

export function slugifyHeading(value: string) {
	const normalized = value
		.split("")
		.map((character) => TURKISH_CHAR_MAP[character] ?? character)
		.join("")
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")

	return normalized
		.replace(/[^a-z0-9\s-]/g, "")
		.trim()
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
}
