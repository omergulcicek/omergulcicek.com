import { createFileRoute } from "@tanstack/react-router"

import { getBlogPostMarkdownResponse } from "@/features/blog/api/blog-text-exports.api"

export const Route = createFileRoute("/blog/{$slug}.md")({
	server: {
		handlers: {
			GET: ({ params }) =>
				getBlogPostMarkdownResponse({
					routeSlug: params.slug,
					category: "technical"
				})
		}
	}
})
