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

type PrerenderRoutesOptions = {
	/** A production build must fail rather than ship without the post pages. */
	strict: boolean
}

function handleQueryFailure(
	routes: string[],
	reason: unknown,
	{ strict }: PrerenderRoutesOptions
) {
	if (strict) {
		throw new Error("Could not list blog posts for prerendering", {
			cause: reason
		})
	}

	console.warn("Skipping blog post prerendering:", reason)

	return routes
}

export async function getBlogPrerenderRoutes(
	options: PrerenderRoutesOptions
): Promise<string[]> {
	const routes = ["/blog/", "/notlar/"]

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
			.select("slug, category")
			.eq("published", true)

		if (error || !data) {
			return handleQueryFailure(routes, error ?? "empty response", options)
		}

		for (const row of data) {
			if (typeof row.slug !== "string" || row.slug.length === 0) {
				continue
			}

			const section = row.category === "personal" ? "/notlar" : "/blog"
			routes.push(`${section}/${slugToRouteParam(row.slug)}`)
		}
	} catch (error) {
		return handleQueryFailure(routes, error, options)
	}

	return routes
}
