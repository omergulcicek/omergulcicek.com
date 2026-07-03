import type { BlogHeading, BlogHeadingLevel } from "@/features/blog/types/blog-heading.types"
import { decodeHtmlEntities } from "@/lib/decode-html-entities"
import { resolveBlogImageSrc } from "@/lib/media/resolve-blog-media-url"
import { slugifyHeading } from "@/lib/slugify-heading"

function stripHtmlTags(value: string) {
	return value.replace(/<[^>]+>/g, "").trim()
}

function extractHeadingText(innerHtml: string) {
	return decodeHtmlEntities(stripHtmlTags(innerHtml))
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

const reactPreloadLinkPattern =
	/<link\b[^>]*\brel=["']preload["'][^>]*\/?>/gi

function stripReactPreloadLinks(html: string) {
	return html.replace(reactPreloadLinkPattern, "")
}

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

function rewriteBlogImageSources(html: string) {
	return html.replace(
		/<img([^>]*?\bsrc=)(["'])([^"']+)\2([^>]*)>/gi,
		(_match, prefix: string, quote: string, src: string, suffix: string) => {
			const resolvedSrc = resolveBlogImageSrc(src)
			return `<img${prefix}${quote}${resolvedSrc}${quote}${suffix}>`
		}
	)
}

export function enrichBlogContentHtml(html: string) {
	const headings: BlogHeading[] = []
	const usedIds = new Set<string>()
	const sanitizedHtml = stripReactPreloadLinks(html)
	const htmlWithFigures = wrapBlogImagesWithCaptions(sanitizedHtml)
	const htmlWithMediaUrls = rewriteBlogImageSources(htmlWithFigures)

	const enrichedHtml = htmlWithMediaUrls.replace(
		/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
		(match, levelValue, attributes, innerHtml) => {
			if (!isBlogHeadingLevel(levelValue)) {
				return match
			}

			const level = Number(levelValue) as BlogHeadingLevel
			const text = extractHeadingText(innerHtml)

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
