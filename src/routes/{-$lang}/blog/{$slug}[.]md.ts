import { createFileRoute } from "@tanstack/react-router"

import { postMarkdownResponse } from "@/features/blog/api/markdown-response"

/** A technical post as plain Markdown; the language prefix is optional, the slug decides. */
export const Route = createFileRoute("/{-$lang}/blog/{$slug}.md")({
  server: {
    handlers: { GET: ({ params }) => postMarkdownResponse("technical", params.slug) }
  }
})
