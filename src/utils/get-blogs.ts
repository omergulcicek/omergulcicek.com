import fs from "fs"

import matter from "gray-matter"

export default async function getPostMetadata() {
	const basePath = "src/data/posts"
	const files = fs.readdirSync(basePath).filter((file) => file !== ".DS_Store")
	const markdownPosts = files.filter((file) => file.endsWith(".md"))

	const posts = markdownPosts.map((filename) => {
		const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8")
		const matterResult = matter(fileContents)

		return {
			title: matterResult.data.title,
			path: matterResult.data.path,
			date: matterResult.data.date,
			category: matterResult.data.category,
			keywords: matterResult.data.keywords,
			medium: matterResult.data.medium,
			hidden: matterResult.data.hidden
		}
	})

	return posts
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.filter((post) => !post.hidden)
}

export async function getPostContent(slug: string) {
	const basePath = "src/data/posts"

	const decodedSlug = decodeURIComponent(slug)

	const file = `${basePath}/${decodedSlug}.md`

	if (!fs.existsSync(file)) {
		throw new Error(`File not found: ${file}`)
	}

	const content = fs.readFileSync(file, "utf8")
	const matterResult = matter(content)

	return {
		title: matterResult.data.title,
		path: matterResult.data.path,
		date: matterResult.data.date,
		category: matterResult.data.category,
		keywords: matterResult.data.keywords,
		medium: matterResult.data.medium,
		content: matterResult.content
	}
}
