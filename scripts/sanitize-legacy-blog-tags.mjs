import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contentDir = path.join(__dirname, "../src/content")

const REMOVED_TAGS = new Set([
	"2017",
	"2018",
	"30'dan önce 30",
	"Anket",
	"API",
	"Arneca",
	"bind",
	"Bootstrap",
	"box-shadow",
	"Chrome",
	"CodePen",
	"Debug",
	"DevTools",
	"DOM",
	"filter",
	"GitStats",
	"Hemdem",
	"jQuery",
	"Kartaca",
	"Kartvizit",
	"Lazy loading",
	"MJML",
	"Mockup",
	"Nuevo",
	"Open Source",
	"Photopea",
	"Photoshop",
	"PHP",
	"Redux",
	"Sait Köşk",
	"State",
	"Styled Components",
	"Tasarım",
	"Teknoloji",
	"Turkuaz",
	"Ziraat Teknoloji"
])

function parseTagsBlock(rawTags) {
	return rawTags
		.split(",")
		.map((tag) => tag.trim().replace(/^["']|["']$/g, ""))
		.filter(Boolean)
}

function normalizeTags(tags) {
	const normalized = []

	for (const tag of tags) {
		const nextTag = tag === "GitHub REST API" ? "GitHub" : tag

		if (REMOVED_TAGS.has(nextTag)) {
			continue
		}

		if (!normalized.includes(nextTag)) {
			normalized.push(nextTag)
		}
	}

	return normalized
}

function formatTagsLine(tags) {
	if (tags.length === 0) {
		return "tags: []"
	}

	return `tags: [${tags.map((tag) => `"${tag.replace(/"/g, '\\"')}"`).join(", ")}]`
}

function updateMdxTags(filePath) {
	const source = fs.readFileSync(filePath, "utf8")
	const tagsMatch = source.match(/^tags:\s*(?:\[(.*?)\]|\[\s*[\s\S]*?\])/m)

	if (!tagsMatch) {
		return false
	}

	const rawTags = tagsMatch[0].includes("[\n")
		? tagsMatch[0]
				.replace(/^tags:\s*\[\s*/m, "")
				.replace(/\s*\]$/m, "")
		: tagsMatch[1]

	const nextTags = normalizeTags(parseTagsBlock(rawTags))
	const nextTagsLine = formatTagsLine(nextTags)

	if (nextTagsLine === tagsMatch[0].trim()) {
		return false
	}

	const updated = source.replace(/^tags:\s*(?:\[(.*?)\]|\[\s*[\s\S]*?\])/m, nextTagsLine)
	fs.writeFileSync(filePath, updated)

	return true
}

const files = fs
	.readdirSync(contentDir)
	.filter((file) => file.endsWith(".mdx"))

for (const file of files) {
	updateMdxTags(path.join(contentDir, file))
}
