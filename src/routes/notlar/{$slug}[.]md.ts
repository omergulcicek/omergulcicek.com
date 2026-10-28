import { createFileRoute } from "@tanstack/react-router"

import { getBlogPostMarkdownResponse } from "@/features/blog"

export const Route = createFileRoute("/notlar/{$slug}.md")({
	server: {
		handlers: {
			GET: ({ params }) =>
				getBlogPostMarkdownResponse({
					routeSlug: params.slug,
					category: "personal"
				})
		}
	}
})
