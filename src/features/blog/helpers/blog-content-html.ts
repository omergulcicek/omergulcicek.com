import type { BlogHeading, BlogHeadingLevel } from "@/features/blog/types/blog-heading.types"
import { decodeHtmlEntities } from "@/lib/decode-html-entities"
import { isExternalHref } from "@/lib/is-external-href"
import { buildBlogProseResponsiveImage } from "@/lib/media/build-blog-responsive-image"
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

function stripImageResponsiveAttributes(attributes: string) {
	return attributes
		.replace(/\s*\bsrcset=(["'])[^"']*\1/gi, "")
		.replace(/\s*\bsizes=(["'])[^"']*\1/gi, "")
}

function extractSrcFromAttributes(attributes: string) {
	return attributes.match(/\bsrc=(["'])([^"']+)\1/i)?.[2] ?? null
}

function replaceSrcInAttributes(attributes: string, src: string) {
	if (/\bsrc=(["'])/i.test(attributes)) {
		return attributes.replace(/\bsrc=(["'])[^"']*\1/i, `src="${src}"`)
	}

	return `${attributes} src="${src}"`
}

function appendResponsiveImageAttributes(
	attributes: string,
	srcSet?: string,
	sizes?: string
) {
	if (!srcSet || !sizes) {
		return attributes
	}

	return `${attributes} srcset="${srcSet}" sizes="${sizes}"`
}

function hasImageAttribute(attributes: string, name: string) {
	return new RegExp(`\\b${name}\\s*=`, "i").test(attributes)
}

function appendProseImageLoadingAttributes(attributes: string) {
	let nextAttributes = attributes

	if (!hasImageAttribute(nextAttributes, "loading")) {
		nextAttributes = `${nextAttributes} loading="lazy"`
	}

	if (!hasImageAttribute(nextAttributes, "decoding")) {
		nextAttributes = `${nextAttributes} decoding="async"`
	}

	return nextAttributes
}

function rewriteBlogImageSources(html: string) {
	return html.replace(/<img([^>]*?)>/gi, (_match, attributes: string) => {
		const originalSrc = extractSrcFromAttributes(attributes)

		if (!originalSrc) {
			return _match
		}

		const responsive = buildBlogProseResponsiveImage(originalSrc)
		let nextAttributes = stripImageResponsiveAttributes(attributes)
		nextAttributes = replaceSrcInAttributes(nextAttributes, responsive.src)
		nextAttributes = appendResponsiveImageAttributes(
			nextAttributes,
			responsive.srcSet,
			responsive.sizes
		)
		nextAttributes = appendProseImageLoadingAttributes(nextAttributes)

		return `<img${nextAttributes}>`
	})
}

function hasAnchorAttribute(attributes: string, name: string) {
	return new RegExp(`\\b${name}\\s*=`, "i").test(attributes)
}

function appendAnchorAttribute(
	attributes: string,
	name: string,
	value: string
) {
	if (hasAnchorAttribute(attributes, name)) {
		return attributes
	}

	return `${attributes} ${name}="${value}"`
}

function ensureAnchorNoopenerRel(attributes: string) {
	const relMatch = attributes.match(/\brel=(["'])([^"']*)\1/i)

	if (!relMatch) {
		return `${attributes} rel="noopener noreferrer"`
	}

	const relValue = relMatch[2]
	const tokens = relValue.split(/\s+/).filter(Boolean)
	const normalizedTokens = new Set(tokens.map((token) => token.toLowerCase()))

	if (normalizedTokens.has("noopener") && normalizedTokens.has("noreferrer")) {
		return attributes
	}

	if (!normalizedTokens.has("noopener")) {
		tokens.push("noopener")
	}

	if (!normalizedTokens.has("noreferrer")) {
		tokens.push("noreferrer")
	}

	return attributes.replace(relMatch[0], `rel="${tokens.join(" ")}"`)
}

function enrichExternalLinksInHtml(html: string) {
	return html.replace(/<a\b([^>]*?)>/gi, (match, attributes: string) => {
		const href = attributes.match(/\bhref=(["'])([^"']*)\1/i)?.[2]

		if (!href || !isExternalHref(href)) {
			return match
		}

		let nextAttributes = attributes
		nextAttributes = appendAnchorAttribute(nextAttributes, "target", "_blank")
		nextAttributes = ensureAnchorNoopenerRel(nextAttributes)

		return `<a${nextAttributes}>`
	})
}

export function enrichBlogContentHtml(html: string) {
	const headings: BlogHeading[] = []
	const usedIds = new Set<string>()
	const sanitizedHtml = stripReactPreloadLinks(html)
	const htmlWithFigures = wrapBlogImagesWithCaptions(sanitizedHtml)
	const htmlWithMediaUrls = rewriteBlogImageSources(htmlWithFigures)
	const htmlWithExternalLinks = enrichExternalLinksInHtml(htmlWithMediaUrls)

	const enrichedHtml = htmlWithExternalLinks.replace(
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
