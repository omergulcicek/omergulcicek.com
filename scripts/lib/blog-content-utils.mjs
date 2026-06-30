import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"

export const SITE_URL = "https://omergulcicek.com"

export const BLOG_TAG_POOL = [
	"React",
	"Next.js",
	"TanStack",
	"ViraStack",
	"TypeScript",
	"Yapay Zekâ",
	"Frontend",
	"CSS",
	"JavaScript",
	"HTML",
	"Tailwind CSS",
	"shadcn/ui",
	"Supabase",
	"Vite",
	"npm",
	"GitHub",
	"Site Yenileme",
	"Yıl Değerlendirmesi",
	"Kitap",
	"Dizi",
	"Film",
	"Seyahat",
	"Deneyim",
	"Düşünce",
	"Proje"
]

export const SLUG_REDIRECTS = {
	"/2025ten-2026ya-degerlendirme-ve-Yıl Değerlendirmesi":
		"/2025ten-2026ya-degerlendirme-ve-hedefler",
	"/google-maps-listelerim": "/google-harita-listelerim"
}

export const SLUG_FIXES = Object.fromEntries(
	Object.entries(SLUG_REDIRECTS).map(([from, to]) => [from, to])
)

export const FILE_RENAMES = {
	"kateliteli-yazilimci-nasil-olunur.mdx": "kaliteli-yazilimci-nasil-olunur.mdx"
}

export const TITLE_FIXES = {
	"/2025ten-2026ya-degerlendirme-ve-hedefler":
		"2025'ten 2026'ya: Değerlendirme ve Hedefler"
}

export const SERIES_RENAMES = {
	yillik: "yillik-degerlendirme"
}

export const PLACEHOLDER_MEDIUM_PATTERN = /8c8c8c8c8c8c/

export const LOCALE_SWITCHER_PATTERN =
	/^🇹🇷 \*\*\[.+?\]\(\/blog\/.+?\)\*\*\s*\n+|^🇬🇧 \*\*\[.+?\]\(\/blog\/.+?\)\*\*\s*\n+/m

export function parseFrontmatter(fileContent) {
	if (!fileContent.startsWith("---")) {
		return { data: {}, content: fileContent, rawFrontmatter: "" }
	}

	const endIndex = fileContent.indexOf("---", 3)

	if (endIndex === -1) {
		return { data: {}, content: fileContent, rawFrontmatter: "" }
	}

	const rawFrontmatter = fileContent.slice(3, endIndex).trim()
	const content = fileContent.slice(endIndex + 3).trim()
	const data = {}

	for (const line of rawFrontmatter.split("\n")) {
		const separatorIndex = line.indexOf(":")

		if (separatorIndex === -1) {
			continue
		}

		const key = line.slice(0, separatorIndex).trim()
		const rawValue = line.slice(separatorIndex + 1).trim()

		if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
			data[key] = rawValue
				.slice(1, -1)
				.split(",")
				.map((value) => value.trim().replace(/^["']|["']$/g, ""))
				.filter(Boolean)
			continue
		}

		if (rawValue === "true") {
			data[key] = true
			continue
		}

		if (rawValue === "false") {
			data[key] = false
			continue
		}

		if (/^\d+$/.test(rawValue)) {
			data[key] = Number(rawValue)
			continue
		}

		data[key] = rawValue.replace(/^["']|["']$/g, "")
	}

	return { data, content, rawFrontmatter }
}

export function serializeFrontmatter(data) {
	const fieldOrder = [
		"locale",
		"publishedAt",
		"updatedAt",
		"published",
		"slug",
		"title",
		"description",
		"category",
		"tags",
		"series",
		"seriesOrder",
		"coverImage",
		"readingTimeMinutes",
		"canonicalUrl",
		"featured",
		"interactive",
		"mediumUrl",
		"translationOf",
		"translatedTo",
		"contentHash"
	]

	const lines = ["---"]

	for (const key of fieldOrder) {
		if (!(key in data) || data[key] === undefined || data[key] === null) {
			continue
		}

		const value = data[key]

		if (key === "tags" && Array.isArray(value)) {
			if (value.length === 0) {
				lines.push("tags: []")
				continue
			}

			lines.push(
				`tags: [${value.map((tag) => `"${String(tag).replace(/"/g, '\\"')}"`).join(", ")}]`
			)
			continue
		}

		if (typeof value === "boolean") {
			lines.push(`${key}: ${value}`)
			continue
		}

		if (typeof value === "number") {
			lines.push(`${key}: ${value}`)
			continue
		}

		lines.push(`${key}: "${String(value).replace(/"/g, '\\"')}"`)
	}

	lines.push("---")
	return lines.join("\n")
}

export function slugToPath(slug) {
	return slug.replace(/^\//, "")
}

export function buildCanonicalUrl(slug) {
	return `${SITE_URL}/blog/${slugToPath(slug)}`
}

export function computeReadingTimeMinutes(content) {
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

export function computeContentHash(content) {
	return crypto.createHash("sha256").update(content).digest("hex").slice(0, 16)
}

export function extractCoverImage(content) {
	const match = content.match(/!\[[^\]]*\]\((\/blog\/[^)]+)\)/)

	return match?.[1]
}

export function normalizeDescription(description, title) {
	let normalized = description.trim()

	if (normalized === title.trim()) {
		normalized = `${normalized}.`
	}

	if (normalized.length <= 160) {
		return normalized
	}

	const truncated = normalized.slice(0, 157)
	const lastSpace = truncated.lastIndexOf(" ")

	if (lastSpace > 120) {
		return `${truncated.slice(0, lastSpace)}...`
	}

	return `${truncated}...`
}

export function convertHtmlAnchorsToMarkdown(content) {
	return content.replace(
		/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
		(_match, href, text) => {
			const label = text.replace(/<[^>]+>/g, "").trim()

			if (!label) {
				return href
			}

			return `[${label}](${href})`
		}
	)
}


export function simplifyLegacyHtml(content) {
	let next = content

	next = next.replace(
		/<p className="[^"]*">\s*((?:<a className="[^"]*">[\s\S]*?<\/a>\s*)+)<\/p>/g,
		(_match, anchorsBlock) => {
			const buttons = [
				...anchorsBlock.matchAll(/<a className="([^"]*)">([\s\S]*?)<\/a>/g)
			]

			if (buttons.length === 0) {
				return anchorsBlock.trim()
			}

			const html = buttons
				.map(
					([, className, label]) =>
						`<a class="${className}">${label.trim()}</a>`
				)
				.join("\n")

			return `\`\`\`html\n${html}\n\`\`\``
		}
	)

	next = next.replace(
		/<p className="[^"]*">\s*<a className="[^"]*" href="([^"]+)">\s*([\s\S]*?)\s*<\/a>\s*<\/p>/g,
		"[$2]($1)"
	)

	next = next.replace(
		/<p className="[^"]*">\s*(\[[^\]]+\]\([^)]+\))\s*<\/p>/g,
		"$1"
	)

	next = next.replace(
		/<p className="[^"]*">\s*<a className="[^"]*">([\s\S]*?)<\/a>\s*<\/p>/g,
		"$1"
	)

	next = next.replace(/<nav className="[^"]*">([\s\S]*?)<\/nav>/g, (_match, inner) => {
		const links = [...inner.matchAll(/<a[^>]*>([\s\S]*?)<\/a>/g)].map((linkMatch) =>
			linkMatch[1].trim()
		)

		if (links.length === 0) {
			return ""
		}

		return `\`\`\`html\n<nav class="menu">\n${links.map((label) => `\t<a>${label}</a>`).join("\n")}\n</nav>\n\`\`\``
	})

	next = next.replace(
		/<div className="[^"]*">([\s\S]*?)<\/div>/g,
		(_match, inner) => inner.trim()
	)

	return next
}

export function removeLocaleSwitcher(content) {
	return content.replace(LOCALE_SWITCHER_PATTERN, "")
}

export function inferCodeBlockLanguage(code) {
	const sample = code.trim().slice(0, 500)

	if (/<[a-z][\s\S]*>/i.test(sample)) {
		return "html"
	}

	if (/import\s.+from\s+['"]/.test(sample) || /export\s+(default\s+)?(function|const)/.test(sample)) {
		return "tsx"
	}

	if (/console\.(log|error)|const\s+\w+\s*=|function\s+\w+/.test(sample)) {
		return "javascript"
	}

	if (/[.#][\w-]+\s*\{/.test(sample) || /@media/.test(sample)) {
		return "css"
	}

	if (/^\{\s*"/.test(sample) || /^\[\s*\{/.test(sample)) {
		return "json"
	}

	if (/^<\?xml|^<svg/.test(sample)) {
		return "xml"
	}

	return null
}

export function addMissingCodeBlockLanguages(content) {
	return content.replace(/```\n([\s\S]*?)```/g, (match, code) => {
		const language = inferCodeBlockLanguage(code)

		if (!language) {
			return match
		}

		return `\`\`\`${language}\n${code}\`\`\``
	})
}

export function normalizeRelAttributes(content) {
	return content
		.replace(/rel="noreferrer noopener"/g, 'rel="noopener noreferrer"')
		.replace(/rel='noreferrer noopener'/g, 'rel="noopener noreferrer"')
		.replace(/rel="noopener"/g, 'rel="noopener noreferrer"')
}

export function normalizeInternalBlogLinks(content) {
	return content.replace(/\]\(\/blog\/([^/)]+)\)/g, (_match, slugPath) => {
		const normalizedSlug = slugPath.replace(/^\/+/, "")
		return `](/blog/${normalizedSlug})`
	})
}

export function imageExists(rootDir, imagePath) {
	const relativePath = imagePath.replace(/^\//, "")
	const candidates = [
		path.join(rootDir, "public", relativePath),
		path.join(rootDir, "_legacy/public", relativePath)
	]

	return candidates.some((candidate) => fs.existsSync(candidate))
}

export function listMdxFiles(contentDir) {
	return fs
		.readdirSync(contentDir)
		.filter((file) => file.endsWith(".mdx"))
		.sort((left, right) => left.localeCompare(right, "tr"))
}
