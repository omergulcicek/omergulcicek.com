import { createClient } from "@supabase/supabase-js"

import { compileMdxToHtml } from "../src/features/blog/lib/compile-mdx-content"
import { enrichBlogContentHtml } from "../src/features/blog/helpers/blog-content-html"

const supabaseUrl = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
	console.error("Missing Supabase credentials")
	process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function migrate() {
	console.log("Fetching all blog posts...")
	const { data: posts, error } = await supabase
		.from("blog_posts")
		.select("id, slug, content")

	if (error) {
		console.error("Error fetching posts:", error)
		process.exit(1)
	}

	console.log(`Found ${posts.length} posts. Starting compilation...`)

	for (const post of posts) {
		console.log(`Compiling post: ${post.slug}`)
		try {
			const html = await compileMdxToHtml(post.content)
			const enriched = enrichBlogContentHtml(html)

			const { error: updateError } = await supabase
				.from("blog_posts")
				.update({
					content_html: enriched.contentHtml,
					headings: enriched.headings
				})
				.eq("id", post.id)

			if (updateError) {
				console.error(`Error updating post ${post.slug}:`, updateError)
			} else {
				console.log(`Successfully updated post: ${post.slug}`)
			}
		} catch (err) {
			console.error(`Failed to compile post ${post.slug}:`, err)
		}
	}

	console.log("Migration complete!")
}

migrate().catch(console.error)
