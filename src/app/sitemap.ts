import type { MetadataRoute } from "next"

import { SITE } from "@/constants/site.constants"

import { getAllPosts } from "@/lib/blog-posts"

import { navItemsData } from "@/data"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = SITE.url

	const staticPages = navItemsData.map((item) => ({
		url: `${baseUrl}${item.href}`,
		lastModified: new Date(),
		changeFrequency: (item.href === "/" ? "daily" : "weekly") as
			| "daily"
			| "weekly",
		priority: item.href === "/" ? 1 : 0.8
	}))

	const blogPosts = getAllPosts().map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(post.metadata.createdAt),
		changeFrequency: "monthly" as const,
		priority: 0.6
	}))

	return [...staticPages, ...blogPosts]
}
