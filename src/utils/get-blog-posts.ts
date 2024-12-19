import fs from "fs"
import path from "path"

type Metadata = {
	category: string
	date: string
	medium: string
	title: string
	path: string
}

function parseFrontmatter(fileContent: string) {
	let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
	let match = frontmatterRegex.exec(fileContent)
	let frontMatterBlock = match![1]
	let content = fileContent.replace(frontmatterRegex, "").trim()
	let frontMatterLines = frontMatterBlock.trim().split("\n")
	let metadata: Partial<Metadata> = {}

	frontMatterLines.forEach((line) => {
		let [key, ...valueArr] = line.split(": ")
		let value = valueArr.join(": ").trim()
		value = value.replace(/^['"](.*)['"]$/, "$1") // Remove quotes
		metadata[key.trim() as keyof Metadata] = value
	})

	return { metadata: metadata as Metadata, content }
}

function getDirectories(dir: string) {
	return fs
		.readdirSync(dir, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name)
}

function readMDXFile(filePath: string) {
	let rawContent = fs.readFileSync(filePath, "utf-8")
	return parseFrontmatter(rawContent)
}

function getMDXDataFromFolders(dir: string) {
	let folders = getDirectories(dir)
	return folders
		.map((folder) => {
			let indexMdFilePath = path.join(dir, folder, "index.md")
			let indexMdxFilePath = path.join(dir, folder, "index.mdx")
			let indexFilePath = fs.existsSync(indexMdFilePath)
				? indexMdFilePath
				: indexMdxFilePath

			if (fs.existsSync(indexFilePath)) {
				let { metadata, content } = readMDXFile(indexFilePath)
				return {
					folder,
					metadata,
					content
				}
			} else {
				console.warn(`No index.mdx found in folder: ${folder}`)
				return null
			}
		})
		.filter(Boolean) // Filter out null values for folders without index.mdx
}

export function getBlogPosts() {
	return getMDXDataFromFolders(path.join(process.cwd(), "src", "data", "posts"))
		.sort((a, b) => {
			if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
				return -1
			}
			return 1
		})
		.filter((post): post is NonNullable<typeof post> => post !== null)
		.map((post) => ({
			folder: post.folder,
			title: post.metadata.title,
			category: post.metadata.category,
			date: post.metadata.date,
			medium: post.metadata.medium,
			path: post.metadata.path
		}))
}
