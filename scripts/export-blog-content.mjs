import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import {
	SLUG_REDIRECTS,
	listMdxFiles,
	parseFrontmatter
} from "./lib/blog-content-utils.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, "..")
const contentDir = path.join(rootDir, "src/content")
const outputPath = path.join(rootDir, "scripts/output/blog-content-export.json")

const files = listMdxFiles(contentDir)

const posts = files.map((file) => {
	const source = fs.readFileSync(path.join(contentDir, file), "utf8")
	const { data, content } = parseFrontmatter(source)

	return {
		fileName: file,
		...data,
		body: content
	}
})

posts.sort(
	(left, right) =>
		new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
)

const exportPayload = {
	exportedAt: new Date().toISOString(),
	postCount: posts.length,
	redirects: SLUG_REDIRECTS,
	posts
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, `${JSON.stringify(exportPayload, null, 2)}\n`)

console.log(`Exported ${posts.length} posts to ${outputPath}`)
