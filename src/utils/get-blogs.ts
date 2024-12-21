import fs from "fs"

import matter from "gray-matter"

export default function getPostMetadata() {
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
			subCategories: matterResult.data.subCategories,
			medium: matterResult.data.medium
		}
	})
	return posts
}

export function getPostContent(slug: string) {
	const basePath = "src/data/posts"
	const file = basePath + `/${slug}.md`
	const content = fs.readFileSync(file, "utf8")
	const matterResult = matter(content)

	return {
		title: matterResult.data.title,
		path: matterResult.data.path,
		date: matterResult.data.date,
		category: matterResult.data.category,
		subCategories: matterResult.data.subCategories,
		medium: matterResult.data.medium,
		content: matterResult.content
	}
}
