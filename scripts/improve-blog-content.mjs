import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import {
	FILE_RENAMES,
	PLACEHOLDER_MEDIUM_PATTERN,
	SERIES_RENAMES,
	SLUG_FIXES,
	TITLE_FIXES,
	addMissingCodeBlockLanguages,
	buildCanonicalUrl,
	computeContentHash,
	computeReadingTimeMinutes,
	convertHtmlAnchorsToMarkdown,
	extractCoverImage,
	listMdxFiles,
	normalizeDescription,
	normalizeInternalBlogLinks,
	normalizeRelAttributes,
	parseFrontmatter,
	removeLocaleSwitcher,
	serializeFrontmatter,
	simplifyLegacyHtml
} from "./lib/blog-content-utils.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, "..")
const contentDir = path.join(rootDir, "src/content")

function assignSeriesOrders(posts) {
	const seriesGroups = new Map()

	for (const post of posts) {
		if (!post.data.series) {
			continue
		}

		const group = seriesGroups.get(post.data.series) ?? []
		group.push(post)
		seriesGroups.set(post.data.series, group)
	}

	for (const group of seriesGroups.values()) {
		group.sort(
			(left, right) =>
				new Date(left.data.publishedAt).getTime() -
				new Date(right.data.publishedAt).getTime()
		)

		group.forEach((post, index) => {
			post.data.seriesOrder = index + 1
		})
	}
}

function assignTranslatedTo(posts) {
	const translationTargets = new Map()

	for (const post of posts) {
		if (post.data.translationOf) {
			translationTargets.set(post.data.translationOf, post.data.slug)
		}
	}

	for (const post of posts) {
		const translatedTo = translationTargets.get(post.data.slug)

		if (translatedTo) {
			post.data.translatedTo = translatedTo
		}
	}
}

function inferTagsFromCategory(data) {
	if (Array.isArray(data.tags) && data.tags.length > 0) {
		return data.tags
	}

	if (data.series === "yillik-degerlendirme") {
		return ["Yıl Değerlendirmesi"]
	}

	if (data.category === "personal") {
		return ["Deneyim"]
	}

	return data.tags ?? []
}

function improvePostBody(content, { hasTranslationLink }) {
	let next = content

	if (hasTranslationLink) {
		next = removeLocaleSwitcher(next)
	}

	next = convertHtmlAnchorsToMarkdown(next)
	next = simplifyLegacyHtml(next)
	next = normalizeRelAttributes(next)
	next = normalizeInternalBlogLinks(next)
	next = addMissingCodeBlockLanguages(next)

	return next.trim()
}

function improveFrontmatter(data, content, fileName) {
	const next = { ...data }

	if (next.slug && SLUG_FIXES[next.slug]) {
		next.slug = SLUG_FIXES[next.slug]
	}

	if (next.slug && TITLE_FIXES[next.slug]) {
		next.title = TITLE_FIXES[next.slug]
	}

	if (next.series && SERIES_RENAMES[next.series]) {
		next.series = SERIES_RENAMES[next.series]
	}

	next.tags = inferTagsFromCategory(next)

	if (next.mediumUrl && PLACEHOLDER_MEDIUM_PATTERN.test(next.mediumUrl)) {
		delete next.mediumUrl
	}

	if (next.description) {
		next.description = normalizeDescription(next.description, next.title ?? "")
	}

	const coverImage = extractCoverImage(content)

	if (coverImage) {
		next.coverImage = coverImage
	}

	next.readingTimeMinutes = computeReadingTimeMinutes(content)
	next.contentHash = computeContentHash(content)

	if (next.slug) {
		next.canonicalUrl = buildCanonicalUrl(next.slug)
	}

	const expectedSlug = `/${fileName.replace(/\.mdx$/, "")}`

	if (!next.slug) {
		next.slug = expectedSlug
	}

	return next
}

for (const [from, to] of Object.entries(FILE_RENAMES)) {
	const fromPath = path.join(contentDir, from)
	const toPath = path.join(contentDir, to)

	if (fs.existsSync(fromPath) && !fs.existsSync(toPath)) {
		fs.renameSync(fromPath, toPath)
	}
}

const files = listMdxFiles(contentDir)
const parsedPosts = files.map((file) => {
	const filePath = path.join(contentDir, file)
	const source = fs.readFileSync(filePath, "utf8")
	const { data, content } = parseFrontmatter(source)

	return {
		file,
		filePath,
		data,
		content
	}
})

for (const post of parsedPosts) {
	if (post.data.series && SERIES_RENAMES[post.data.series]) {
		post.data.series = SERIES_RENAMES[post.data.series]
	}
}

assignSeriesOrders(parsedPosts)
assignTranslatedTo(parsedPosts)

let updatedCount = 0

for (const post of parsedPosts) {
	const improvedContent = improvePostBody(post.content, {
		hasTranslationLink: Boolean(
			post.data.translationOf || post.data.translatedTo
		)
	})
	const improvedData = improveFrontmatter(
		post.data,
		improvedContent,
		post.file
	)
	const nextSource = `${serializeFrontmatter(improvedData)}\n\n${improvedContent}\n`

	if (nextSource !== fs.readFileSync(post.filePath, "utf8")) {
		fs.writeFileSync(post.filePath, nextSource)
		updatedCount += 1
	}
}

console.log(`Improved ${updatedCount} of ${parsedPosts.length} MDX files.`)
