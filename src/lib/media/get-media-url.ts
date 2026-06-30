import { env } from "@/env"

import type { GetMediaSrcSetOptions, GetMediaUrlOptions } from "./media.types"

function normalizeStoragePath(path: string): string {
	return path.replace(/^\/+/, "")
}

function toPublicPath(path: string): string {
	const normalized = normalizeStoragePath(path)
	return `/${normalized}`
}

function getSupabaseObjectUrl(path: string): string {
	const baseUrl = env.VITE_SUPABASE_URL

	if (!baseUrl) {
		throw new Error("VITE_SUPABASE_URL is required for Supabase media providers")
	}

	return `${baseUrl}/storage/v1/object/public/media/${normalizeStoragePath(path)}`
}

function getSupabaseTransformUrl(
	path: string,
	transform?: GetMediaUrlOptions["transform"]
): string {
	const baseUrl = env.VITE_SUPABASE_URL

	if (!baseUrl) {
		throw new Error("VITE_SUPABASE_URL is required for Supabase media providers")
	}

	const params = new URLSearchParams()

	if (transform?.width) {
		params.set("width", String(transform.width))
	}

	params.set("quality", String(transform?.quality ?? 80))

	const query = params.toString()

	return `${baseUrl}/storage/v1/render/image/public/media/${normalizeStoragePath(path)}${query ? `?${query}` : ""}`
}

export function getMediaUrl(
	path: string,
	options?: GetMediaUrlOptions
): string {
	const provider = env.VITE_MEDIA_PROVIDER

	if (provider === "local") {
		return toPublicPath(path)
	}

	if (options?.transform?.format === "origin") {
		return getSupabaseObjectUrl(path)
	}

	if (provider === "supabase-transform") {
		return getSupabaseTransformUrl(path, options?.transform)
	}

	return getSupabaseObjectUrl(path)
}

export function getMediaSrcSet(
	path: string,
	options: GetMediaSrcSetOptions
): string {
	if (env.VITE_MEDIA_PROVIDER !== "supabase-transform") {
		return ""
	}

	return options.widths
		.map(({ width, quality }) => {
			const url = getMediaUrl(path, { transform: { width, quality } })
			return `${url} ${width}w`
		})
		.join(", ")
}
