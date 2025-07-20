import fs from "fs"
import path from "path"

import matter from "gray-matter"

function parseFrontmatter(fileContent: string) {
	const file = matter(fileContent)

	return {
		metadata: file.data,
		content: file.content
	}
}

function getMDXFiles(dir: string) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: string) {
	const rawContent = fs.readFileSync(filePath, "utf-8")
	return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
	const mdxFiles = getMDXFiles(dir)

	return mdxFiles.map((file) => {
		const { metadata, content } = readMDXFile(path.join(dir, file))

		const slug = path.basename(file, path.extname(file))

		return {
			metadata,
			slug,
			content
		}
	})
}

export function getAllPosts() {
	return getMDXData(path.join(process.cwd(), "src", "content")).sort(
		(a, b) =>
			new Date(b.metadata.createdAt).getTime() -
			new Date(a.metadata.createdAt).getTime()
	)
}

export function getPostBySlug(slug: string) {
	return getAllPosts().find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string) {
	return getAllPosts().filter((post) => post.metadata?.category === category)
}

export function findNeighbour(
	posts: { slug: string; metadata: Record<string, unknown> }[],
	slug: string
) {
	const len = posts.length

	console.log(posts)

	for (let i = 0; i < len; ++i) {
		if (posts[i].slug === slug) {
			return {
				previous: i > 0 ? posts[i - 1] : null,
				next: i < len - 1 ? posts[i + 1] : null
			}
		}
	}

	return { previous: null, next: null }
}
