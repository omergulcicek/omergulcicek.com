import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import {
	listMdxFiles,
	parseFrontmatter
} from "./lib/blog-content-utils.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, "..")
const contentDir = path.join(rootDir, "src/content")
const outputPath = path.join(
	rootDir,
	"src/features/blog/constants/mock-blog-posts.constants.ts"
)

function escapeString(value) {
	return value
		.replace(/\\/g, "\\\\")
		.replace(/"/g, '\\"')
		.replace(/\n/g, " ")
}

function formatPostObject(post) {
	const optionalFields = []

	if (post.coverImage) {
		optionalFields.push(`\t\tcoverImage: "${escapeString(post.coverImage)}"`)
	}

	if (post.readingTimeMinutes) {
		optionalFields.push(`\t\treadingTimeMinutes: ${post.readingTimeMinutes}`)
	}

	if (post.canonicalUrl) {
		optionalFields.push(
			`\t\tcanonicalUrl: "${escapeString(post.canonicalUrl)}"`
		)
	}

	if (post.interactive) {
		optionalFields.push("\t\tinteractive: true")
	}

	if (post.featured) {
		optionalFields.push("\t\tfeatured: true")
	}

	if (post.mediumUrl) {
		optionalFields.push(
			`\t\tmediumUrl: "${escapeString(post.mediumUrl)}"`
		)
	}

	if (post.translationOf) {
		optionalFields.push(
			`\t\ttranslationOf: "${escapeString(post.translationOf)}"`
		)
	}

	if (post.translatedTo) {
		optionalFields.push(
			`\t\ttranslatedTo: "${escapeString(post.translatedTo)}"`
		)
	}

	if (post.series) {
		optionalFields.push(`\t\tseries: "${escapeString(post.series)}"`)
	}

	if (post.seriesOrder) {
		optionalFields.push(`\t\tseriesOrder: ${post.seriesOrder}`)
	}

	const optionalBlock =
		optionalFields.length > 0
			? `,\n${optionalFields.join(",\n")}`
			: ""

	const lines = [
		"\t{",
		`\t\tslug: "${escapeString(post.slug)}",`,
		`\t\ttitle: "${escapeString(post.title)}",`,
		`\t\tdescription: "${escapeString(post.description)}",`,
		`\t\tcategory: "${post.category}",`,
		`\t\ttags: [${post.tags.map((tag) => `"${escapeString(tag)}"`).join(", ")}],`,
		`\t\tlocale: "${post.locale}",`,
		`\t\tpublished: ${post.published},`,
		`\t\tpublishedAt: "${post.publishedAt}"${optionalBlock}`,
		"\t}"
	]

	return lines.join("\n")
}

const files = listMdxFiles(contentDir)

const posts = files.map((file) => {
	const filePath = path.join(contentDir, file)
	const { data } = parseFrontmatter(fs.readFileSync(filePath, "utf8"))

	return {
		slug: data.slug,
		title: data.title,
		description: data.description,
		category: data.category,
		tags: Array.isArray(data.tags) ? data.tags : [],
		locale: data.locale,
		published: data.published === true,
		publishedAt: data.publishedAt,
		coverImage: data.coverImage,
		readingTimeMinutes: data.readingTimeMinutes,
		canonicalUrl: data.canonicalUrl,
		interactive: data.interactive === true,
		featured: data.featured === true,
		mediumUrl: data.mediumUrl,
		translationOf: data.translationOf,
		translatedTo: data.translatedTo,
		series: data.series,
		seriesOrder: data.seriesOrder
	}
})

posts.sort(
	(left, right) =>
		new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
)

const output = `import type { BlogPost } from "@/features/blog/types/blog.types"

export const MOCK_BLOG_POSTS: BlogPost[] = [
${posts.map((post) => formatPostObject(post)).join(",\n")}
]
`

fs.writeFileSync(outputPath, output)

console.log(`Generated ${posts.length} mock blog posts.`)
