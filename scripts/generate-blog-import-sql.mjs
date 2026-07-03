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
const outputDir = path.join(rootDir, "scripts/output/supabase-import")

function escapeSql(value) {
	if (value === null || value === undefined) {
		return "NULL"
	}

	return `'${String(value).replace(/'/g, "''")}'`
}

function escapeArray(values) {
	if (!values || values.length === 0) {
		return "ARRAY[]::text[]"
	}

	return `ARRAY[${values.map((value) => escapeSql(value)).join(", ")}]::text[]`
}

function toPublishedAt(value) {
	if (!value) {
		return "NULL"
	}

	return `${escapeSql(`${value}T12:00:00.000Z`)}::timestamptz`
}

function mapRow(data, content) {
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
		published_at: data.publishedAt ?? null,
		og_image_path: data.coverImage ?? null,
		series: data.series ?? null,
		series_order: data.seriesOrder ?? null
	}
}

function buildInsert(row) {
	return `INSERT INTO blog_posts (
  slug, title, description, content, category, tags, locale,
  medium_url, interactive, featured, published, published_at,
  og_image_path, series, series_order
) VALUES (
  ${escapeSql(row.slug)},
  ${escapeSql(row.title)},
  ${escapeSql(row.description)},
  ${escapeSql(row.content)},
  ${escapeSql(row.category)}::post_category,
  ${escapeArray(row.tags)},
  ${escapeSql(row.locale)}::post_locale,
  ${row.medium_url ? escapeSql(row.medium_url) : "NULL"},
  ${row.interactive},
  ${row.featured},
  ${row.published},
  ${toPublishedAt(row.published_at)},
  ${row.og_image_path ? escapeSql(row.og_image_path) : "NULL"},
  ${row.series ? escapeSql(row.series) : "NULL"},
  ${row.series_order ?? "NULL"}
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  locale = EXCLUDED.locale,
  medium_url = EXCLUDED.medium_url,
  interactive = EXCLUDED.interactive,
  featured = EXCLUDED.featured,
  published = EXCLUDED.published,
  published_at = EXCLUDED.published_at,
  og_image_path = EXCLUDED.og_image_path,
  series = EXCLUDED.series,
  series_order = EXCLUDED.series_order;`
}

const files = listMdxFiles(contentDir)
const rows = files.map((fileName) => {
	const source = fs.readFileSync(path.join(contentDir, fileName), "utf8")
	const { data, content } = parseFrontmatter(source)

	return mapRow(data, content)
})

fs.mkdirSync(outputDir, { recursive: true })

const batchSize = 5
let batchCount = 0

for (let index = 0; index < rows.length; index += batchSize) {
	const batch = rows.slice(index, index + batchSize)
	const sql = batch.map(buildInsert).join("\n")

	fs.writeFileSync(path.join(outputDir, `batch-${batchCount}.sql`), `${sql}\n`)
	batchCount += 1
}

console.log(`Generated ${batchCount} SQL batches for ${rows.length} posts in ${outputDir}`)
