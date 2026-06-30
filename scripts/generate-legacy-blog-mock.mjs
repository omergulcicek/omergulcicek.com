import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, "..")
const contentDir = path.join(rootDir, "src/content")
const outputPath = path.join(
	rootDir,
	"src/features/blog/constants/mock-blog-posts.constants.ts"
)

function parseFrontmatter(fileContent) {
	if (!fileContent.startsWith("---")) {
		return { data: {}, content: fileContent }
	}

	const endIndex = fileContent.indexOf("---", 3)

	if (endIndex === -1) {
		return { data: {}, content: fileContent }
	}

	const frontmatter = fileContent.slice(3, endIndex).trim()
	const content = fileContent.slice(endIndex + 3).trim()
	const data = {}

	for (const line of frontmatter.split("\n")) {
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

		data[key] = rawValue.replace(/^["']|["']$/g, "")
	}

	return { data, content }
}

function escapeString(value) {
	return value
		.replace(/\\/g, "\\\\")
		.replace(/"/g, '\\"')
		.replace(/\n/g, " ")
}

function formatPostObject(post) {
	const optionalFields = []

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

	if (post.series) {
		optionalFields.push(`\t\tseries: "${escapeString(post.series)}"`)
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

const files = fs
	.readdirSync(contentDir)
	.filter((file) => file.endsWith(".mdx"))
	.sort((left, right) => left.localeCompare(right, "tr"))

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
		interactive: data.interactive === true,
		featured: data.featured === true,
		mediumUrl: data.mediumUrl,
		translationOf: data.translationOf,
		series: data.series
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