import { createClient } from "@supabase/supabase-js"

function slugToRouteParam(slug: string) {
	return slug.replace(/^\//, "")
}

function readSupabaseConfig() {
	const url = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL
	const apiKey =
		process.env.SUPABASE_SERVICE_ROLE_KEY ??
		process.env.SUPABASE_ANON_KEY ??
		process.env.VITE_SUPABASE_ANON_KEY

	return { url, apiKey }
}

function canQuerySupabase() {
	const { url, apiKey } = readSupabaseConfig()
	return Boolean(url && apiKey)
}

export async function getBlogPrerenderRoutes(): Promise<string[]> {
	const routes = ["/blog/"]

	if (!canQuerySupabase()) {
		return routes
	}

	const { url, apiKey } = readSupabaseConfig()

	if (!url || !apiKey) {
		return routes
	}

	try {
		const supabase = createClient(url, apiKey, {
			auth: {
				autoRefreshToken: false,
				persistSession: false
			}
		})

		const { data, error } = await supabase
			.from("blog_posts")
			.select("slug")
			.eq("published", true)

		if (error || !data) {
			return routes
		}

		for (const row of data) {
			if (typeof row.slug !== "string" || row.slug.length === 0) {
				continue
			}

			routes.push(`/blog/${slugToRouteParam(row.slug)}`)
		}
	} catch {
		return routes
	}

	return routes
}
