import type { BlogHeading, BlogHeadingLevel } from "@/features/blog/types/blog-heading.types"
import { slugifyHeading } from "@/lib/slugify-heading"

function stripHtmlTags(value: string) {
	return value.replace(/<[^>]+>/g, "").trim()
}

export function slugifyBlogHeading(value: string) {
	return slugifyHeading(value)
}

function isBlogHeadingLevel(value: string): value is `${BlogHeadingLevel}` {
	return value === "2" || value === "3"
}

function getImgAltText(attributes: string) {
	return attributes.match(/\balt=["']([^"']*)["']/i)?.[1]?.trim() ?? ""
}

function buildBlogImageFigure(attributes: string) {
	const alt = getImgAltText(attributes)
	const caption = alt ? `<figcaption>${alt}</figcaption>` : ""

	return `<figure class="blog-image-figure"><img${attributes} />${caption}</figure>`
}

const blogParagraphImagePattern =
	/<p>((?:(?!<\/p>)[\s\S])*?)<img([^>]*?)\/?>((?:(?!<\/p>)[\s\S])*?)<\/p>/i

function wrapBlogImagesWithCaptions(html: string) {
	let result = html
	let previous = ""

	while (result !== previous) {
		previous = result
		result = result.replace(
			blogParagraphImagePattern,
			(_match, before: string, attributes: string, after: string) => {
				const figure = buildBlogImageFigure(attributes)
				const beforeTrim = before.trim()
				const afterTrim = after.trim()

				if (!beforeTrim && !afterTrim) {
					return figure
				}

				const parts: string[] = []

				if (beforeTrim) {
					parts.push(`<p>${beforeTrim}</p>`)
				}

				parts.push(figure)

				if (afterTrim) {
					parts.push(`<p>${afterTrim}</p>`)
				}

				return parts.join("")
			}
		)
	}

	return result
}

export function enrichBlogContentHtml(html: string) {
	const headings: BlogHeading[] = []
	const usedIds = new Set<string>()
	const htmlWithFigures = wrapBlogImagesWithCaptions(html)

	const enrichedHtml = htmlWithFigures.replace(
		/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
		(match, levelValue, attributes, innerHtml) => {
			if (!isBlogHeadingLevel(levelValue)) {
				return match
			}

			const level = Number(levelValue) as BlogHeadingLevel
			const text = stripHtmlTags(innerHtml)

			if (!text) {
				return match
			}

			const existingId = attributes.match(/\bid=["']([^"']+)["']/i)?.[1]
			let id = existingId ?? slugifyBlogHeading(text)

			if (!id) {
				id = `heading-${headings.length + 1}`
			}

			while (usedIds.has(id)) {
				id = `${id}-${headings.length + 1}`
			}

			usedIds.add(id)
			headings.push({ id, text, level })

			if (existingId) {
				return match
			}

			return `<h${levelValue}${attributes} id="${id}">${innerHtml}</h${levelValue}>`
		}
	)

	return {
		contentHtml: enrichedHtml,
		headings
	}
}
