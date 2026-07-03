import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { createClient } from "@supabase/supabase-js"

import {
	listMdxFiles,
	parseFrontmatter
} from "./lib/blog-content-utils.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, "..")
const contentDir = path.join(rootDir, "src/content")

function readRequiredEnv(name) {
	const value = process.env[name]

	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`)
	}

	return value
}

function toPublishedAt(value) {
	if (!value) {
		return null
	}

	return `${value}T12:00:00.000Z`
}

function mapPostToRow(data, content) {
	return {
		slug: data.slug,
		title: data.title,
		description: data.description,
		content: content.trim(),
		category: data.category,
		tags: data.tags ?? [],
		locale: data.locale ?? "tr",
		medium_url: data.mediumUrl ?? null,
		interactive: data.interactive ?? false,
		featured: data.featured ?? false,
		published: data.published ?? true,
		published_at: toPublishedAt(data.publishedAt),
		og_image_path: data.coverImage ?? null,
		series: data.series ?? null,
		series_order: data.seriesOrder ?? null
	}
}

async function main() {
	const supabaseUrl =
		process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL ?? readRequiredEnv("SUPABASE_URL")
	const serviceRoleKey = readRequiredEnv("SUPABASE_SERVICE_ROLE_KEY")

	const supabase = createClient(supabaseUrl, serviceRoleKey, {
		auth: {
			autoRefreshToken: false,
			persistSession: false
		}
	})

	const files = listMdxFiles(contentDir)
	const rows = files.map((fileName) => {
		const source = fs.readFileSync(path.join(contentDir, fileName), "utf8")
		const { data, content } = parseFrontmatter(source)

		if (!data.slug || !data.title || !data.description || !data.category) {
			throw new Error(`Missing required frontmatter in ${fileName}`)
		}

		return mapPostToRow(data, content)
	})

	const batchSize = 20
	let imported = 0

	for (let index = 0; index < rows.length; index += batchSize) {
		const batch = rows.slice(index, index + batchSize)
		const { error } = await supabase.from("blog_posts").upsert(batch, {
			onConflict: "slug"
		})

		if (error) {
			throw new Error(`Import failed at batch ${index / batchSize + 1}: ${error.message}`)
		}

		imported += batch.length
		console.log(`Imported ${imported}/${rows.length}`)
	}

	console.log(`Successfully imported ${imported} blog posts to Supabase`)
}

main().catch((error) => {
	console.error(error instanceof Error ? error.message : error)
	process.exit(1)
})
