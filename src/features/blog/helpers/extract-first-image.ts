/**
 * Blog içeriğinden ilk görseli çıkarır
 * @param content Blog içeriği (MDX)
 * @returns İlk görselin URL'si veya null
 */

export function extractFirstImage(content: string): string | null {
	const imageRegex = /!\[.*?\]\((.*?)\)/g
	const match = imageRegex.exec(content)

	if (match && match[1]) {
		return match[1]
	}

	const imgTagRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i
	const imgMatch = imgTagRegex.exec(content)

	if (imgMatch && imgMatch[1]) {
		return imgMatch[1]
	}

	return null
}
