const turkishCharMap: Record<string, string> = {
	ç: "c",
	Ç: "c",
	ğ: "g",
	Ğ: "g",
	ş: "s",
	Ş: "s",
	ü: "u",
	Ü: "u",
	ı: "i",
	İ: "i",
	ö: "o",
	Ö: "o"
}

export const slugify = (text: string): string => {
	return text
		.replace(/[çÇğĞşŞüÜıİöÖ]/g, (match) => turkishCharMap[match])
		.replace(/[^-a-zA-Z0-9\s]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-+|-+$/g, "")
		.toLowerCase()
}
