import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import {
	BLOG_TAG_POOL,
	PLACEHOLDER_MEDIUM_PATTERN,
	buildCanonicalUrl,
	imageExists,
	listMdxFiles,
	parseFrontmatter
} from "./lib/blog-content-utils.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, "..")
const contentDir = path.join(rootDir, "src/content")

const SLUG_PATTERN = /^\/[a-z0-9]+(?:-[a-z0-9]+)*$/

const errors = []
const warnings = []

function report(level, file, message) {
	const entry = `${file}: ${message}`

	if (level === "error") {
		errors.push(entry)
		return
	}

	warnings.push(entry)
}

const files = listMdxFiles(contentDir)
const posts = files.map((file) => {
	const source = fs.readFileSync(path.join(contentDir, file), "utf8")
	const { data, content } = parseFrontmatter(source)

	return { file, data, content }
})

const slugOwners = new Map()

for (const post of posts) {
	if (post.data.slug) {
		slugOwners.set(post.data.slug, post.file)
	}
}

for (const post of posts) {
	const slug = post.data.slug

	if (!slug) {
		report("error", post.file, "Missing slug")
		continue
	}

	if (!SLUG_PATTERN.test(slug)) {
		report("error", post.file, `Invalid slug format: ${slug}`)
	}

	const fileSlug = `/${post.file.replace(/\.mdx$/, "")}`

	if (slug !== fileSlug) {
		report(
			"warning",
			post.file,
			`Filename slug mismatch: file implies ${fileSlug}, frontmatter has ${slug}`
		)
	}

	for (const field of [
		"title",
		"description",
		"category",
		"locale",
		"publishedAt"
	]) {
		if (!post.data[field]) {
			report("error", post.file, `Missing required field: ${field}`)
		}
	}

	if (!["technical", "personal"].includes(post.data.category)) {
		report("error", post.file, `Invalid category: ${post.data.category}`)
	}

	if (!["tr", "en"].includes(post.data.locale)) {
		report("error", post.file, `Invalid locale: ${post.data.locale}`)
	}

	if (post.data.description && post.data.description.length > 165) {
		report("warning", post.file, "Description exceeds 165 characters")
	}

	if (Array.isArray(post.data.tags)) {
		for (const tag of post.data.tags) {
			if (!BLOG_TAG_POOL.includes(tag)) {
				report("error", post.file, `Tag outside pool: ${tag}`)
			}
		}

		if (post.data.tags.length === 0) {
			report("warning", post.file, "Empty tags array")
		}
	}

	if (post.data.mediumUrl && PLACEHOLDER_MEDIUM_PATTERN.test(post.data.mediumUrl)) {
		report("error", post.file, "Placeholder mediumUrl detected")
	}

	if (post.data.translationOf && !slugOwners.has(post.data.translationOf)) {
		report(
			"error",
			post.file,
			`translationOf target not found: ${post.data.translationOf}`
		)
	}

	if (post.data.translatedTo && !slugOwners.has(post.data.translatedTo)) {
		report(
			"error",
			post.file,
			`translatedTo target not found: ${post.data.translatedTo}`
		)
	}

	if (post.data.coverImage && !imageExists(rootDir, post.data.coverImage)) {
		report("warning", post.file, `Missing cover image: ${post.data.coverImage}`)
	}

	const imageMatches = [...post.content.matchAll(/!\[[^\]]*\]\((\/blog\/[^)]+)\)/g)]

	for (const match of imageMatches) {
		if (!imageExists(rootDir, match[1])) {
			report("warning", post.file, `Missing image asset: ${match[1]}`)
		}
	}

	if (post.data.canonicalUrl !== buildCanonicalUrl(post.data.slug)) {
		report("warning", post.file, "canonicalUrl does not match slug")
	}

	if (/^#\s/m.test(post.content.replace(/```[\s\S]*?```/g, ""))) {
		report("warning", post.file, "Body contains H1 heading")
	}

	if (/<a\s[^>]*href=/i.test(post.content)) {
		report("warning", post.file, "Body still contains raw HTML anchor tags")
	}
}

for (const post of posts) {
	if (!post.data.translationOf) {
		continue
	}

	const source = posts.find((candidate) => candidate.data.slug === post.data.translationOf)

	if (!source) {
		continue
	}

	if (source.data.translatedTo !== post.data.slug) {
		report(
			"warning",
			source.file,
			`Missing translatedTo backlink to ${post.data.slug}`
		)
	}
}

console.log(`Validated ${posts.length} MDX files.`)

if (warnings.length > 0) {
	console.log(`\nWarnings (${warnings.length}):`)
	console.log(warnings.map((entry) => `  - ${entry}`).join("\n"))
}

if (errors.length > 0) {
	console.error(`\nErrors (${errors.length}):`)
	console.error(errors.map((entry) => `  - ${entry}`).join("\n"))
	process.exit(1)
}

console.log("\nValidation passed.")
