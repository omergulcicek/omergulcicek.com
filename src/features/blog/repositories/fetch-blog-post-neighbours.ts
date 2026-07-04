import type { SupabaseClient } from "@supabase/supabase-js"

import { resolveBlogNeighboursFromAnchor } from "@/features/blog/helpers/resolve-blog-neighbours"
import type { BlogPostNeighbours } from "@/features/blog/helpers/resolve-blog-neighbours"

const NEIGHBOUR_COLUMNS = "slug, title"

type BlogPostOrderAnchor = {
	slug: string
	published_at: string | null
}

type FetchBlogPostNeighboursOptions = {
	supabase: SupabaseClient
	slug: string
	isDev: boolean
}

function createNeighbourQuery(supabase: SupabaseClient, isDev: boolean) {
	let query = supabase.from("blog_posts").select(NEIGHBOUR_COLUMNS)

	if (!isDev) {
		query = query.eq("published", true)
	}

	return query
}

async function fetchAnchor({
	supabase,
	slug,
	isDev
}: FetchBlogPostNeighboursOptions): Promise<BlogPostOrderAnchor | null> {
	let query = supabase
		.from("blog_posts")
		.select("slug, published_at")
		.eq("slug", slug)

	if (!isDev) {
		query = query.eq("published", true)
	}

	const { data, error } = await query.maybeSingle()

	if (error) {
		throw new Error(`Failed to fetch blog post anchor: ${error.message}`)
	}

	return data
}

async function fetchPreviousNeighbour(
	supabase: SupabaseClient,
	anchor: BlogPostOrderAnchor,
	isDev: boolean
) {
	if (anchor.published_at) {
		const newerByDate = await createNeighbourQuery(supabase, isDev)
			.gt("published_at", anchor.published_at)
			.order("published_at", { ascending: true, nullsFirst: false })
			.order("slug", { ascending: true })
			.limit(1)
			.maybeSingle()

		if (newerByDate.error) {
			throw new Error(
				`Failed to fetch previous blog neighbour: ${newerByDate.error.message}`
			)
		}

		if (newerByDate.data) {
			return newerByDate.data
		}

		const newerBySlug = await createNeighbourQuery(supabase, isDev)
			.eq("published_at", anchor.published_at)
			.gt("slug", anchor.slug)
			.order("slug", { ascending: true })
			.limit(1)
			.maybeSingle()

		if (newerBySlug.error) {
			throw new Error(
				`Failed to fetch previous blog neighbour: ${newerBySlug.error.message}`
			)
		}

		return newerBySlug.data
	}

	const newerAmongNullDates = await createNeighbourQuery(supabase, isDev)
		.is("published_at", null)
		.gt("slug", anchor.slug)
		.order("slug", { ascending: true })
		.limit(1)
		.maybeSingle()

	if (newerAmongNullDates.error) {
		throw new Error(
			`Failed to fetch previous blog neighbour: ${newerAmongNullDates.error.message}`
		)
	}

	return newerAmongNullDates.data
}

async function fetchNextNeighbour(
	supabase: SupabaseClient,
	anchor: BlogPostOrderAnchor,
	isDev: boolean
) {
	if (anchor.published_at) {
		const olderByDate = await createNeighbourQuery(supabase, isDev)
			.lt("published_at", anchor.published_at)
			.order("published_at", { ascending: false, nullsFirst: false })
			.order("slug", { ascending: false })
			.limit(1)
			.maybeSingle()

		if (olderByDate.error) {
			throw new Error(
				`Failed to fetch next blog neighbour: ${olderByDate.error.message}`
			)
		}

		if (olderByDate.data) {
			return olderByDate.data
		}

		const olderBySlug = await createNeighbourQuery(supabase, isDev)
			.eq("published_at", anchor.published_at)
			.lt("slug", anchor.slug)
			.order("slug", { ascending: false })
			.limit(1)
			.maybeSingle()

		if (olderBySlug.error) {
			throw new Error(
				`Failed to fetch next blog neighbour: ${olderBySlug.error.message}`
			)
		}

		return olderBySlug.data
	}

	const olderAmongNullDates = await createNeighbourQuery(supabase, isDev)
		.is("published_at", null)
		.lt("slug", anchor.slug)
		.order("slug", { ascending: false })
		.limit(1)
		.maybeSingle()

	if (olderAmongNullDates.error) {
		throw new Error(
			`Failed to fetch next blog neighbour: ${olderAmongNullDates.error.message}`
		)
	}

	return olderAmongNullDates.data
}

export async function fetchBlogPostNeighbours({
	supabase,
	slug,
	isDev
}: FetchBlogPostNeighboursOptions): Promise<BlogPostNeighbours> {
	const anchor = await fetchAnchor({ supabase, slug, isDev })

	if (!anchor) {
		return { previous: null, next: null }
	}

	const [previousRow, nextRow] = await Promise.all([
		fetchPreviousNeighbour(supabase, anchor, isDev),
		fetchNextNeighbour(supabase, anchor, isDev)
	])

	return resolveBlogNeighboursFromAnchor(previousRow, nextRow)
}
