import fs from "fs"
import path from "path"

import matter from "gray-matter"

import type { BlogPost } from "@/types/blog-type"

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

function getMDXData(dir: string): BlogPost[] {
	const mdxFiles = getMDXFiles(dir)

	return mdxFiles.map((file) => {
		const { metadata, content } = readMDXFile(path.join(dir, file))

		const slug = path.basename(file, path.extname(file))

		return {
			metadata: metadata as BlogPost["metadata"],
			slug,
			content
		}
	})
}

export function getAllPosts(): BlogPost[] {
	const today = new Date()
	today.setHours(23, 59, 59, 999)

	return getMDXData(path.join(process.cwd(), "src", "content"))
		.filter((post) => {
			const postDate = new Date(post.metadata.createdAt)
			return postDate <= today
		})
		.sort(
			(a, b) =>
				new Date(b.metadata.createdAt).getTime() -
				new Date(a.metadata.createdAt).getTime()
		)
}

export function getLastNewestPosts(): BlogPost[] {
	return getAllPosts().slice(0, 3)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
	return (
		getAllPosts().find((post) => post.slug === slug) ||
		getFuturePosts().find((post) => post.slug === slug)
	)
}

export function getPostsByCategory(category: string): BlogPost[] {
	return getAllPosts().filter((post) => post.metadata?.category === category)
}

export function findNeighbour(
	posts: { slug: string; metadata: Record<string, unknown> }[],
	slug: string
) {
	const len = posts.length

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

export function getFuturePosts(): BlogPost[] {
	return getMDXData(path.join(process.cwd(), "src", "content"))
		.filter((post) => String(post.metadata.createdAt).toLowerCase() === "soon")
		.sort((a, b) =>
			a.metadata.title
				.trim()
				.localeCompare(b.metadata.title.trim(), "tr", { sensitivity: "base" })
		)
}
