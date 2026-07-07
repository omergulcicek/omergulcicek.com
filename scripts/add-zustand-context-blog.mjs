import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { createClient } from "@supabase/supabase-js"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const articlePath = path.join(
	__dirname,
	"content",
	"zustand-ve-react-context.md"
)

function readRequiredEnv(name) {
	const value = process.env[name]

	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`)
	}

	return value
}

function normalizeBlogDashes(text) {
	return text.replace(/[\u2013\u2014\u2015]/g, "-")
}

const blogPost = {
	slug: "/zustand-ve-react-context",
	title: "Zustand ve React Context",
	description:
		"Global Zustand store'larının sınırlamalarını aşmak için React Context ile entegrasyonu ve encapsulated state yönetimi.",
	content: fs.readFileSync(articlePath, "utf8"),
	category: "technical",
	tags: ["React", "Zustand", "TypeScript"],
	locale: "tr",
	medium_url: null,
	interactive: false,
	featured: false,
	published: false,
	published_at: "2026-07-07T12:00:00.000Z",
	og_image_path: "/blog/2026/07-07/react-context.webp",
	series: null,
	series_order: null
}

async function main() {
	const supabaseUrl =
		process.env.SUPABASE_URL ??
		process.env.VITE_SUPABASE_URL ??
		readRequiredEnv("SUPABASE_URL")
	const serviceRoleKey = readRequiredEnv("SUPABASE_SERVICE_ROLE_KEY")

	const supabase = createClient(supabaseUrl, serviceRoleKey, {
		auth: {
			autoRefreshToken: false,
			persistSession: false
		}
	})

	const { error } = await supabase.from("blog_posts").upsert(
		[
			{
				...blogPost,
				title: normalizeBlogDashes(blogPost.title),
				description: normalizeBlogDashes(blogPost.description),
				content: normalizeBlogDashes(blogPost.content)
			}
		],
		{
			onConflict: "slug"
		}
	)

	if (error) {
		throw new Error(`Failed to add blog post: ${error.message}`)
	}

	console.log(`✅ Successfully added blog post: ${blogPost.title}`)
	console.log(`   Slug: ${blogPost.slug}`)
	console.log(`   Published: ${blogPost.published}`)
}

main().catch((error) => {
	console.error(error instanceof Error ? error.message : error)
	process.exit(1)
})
