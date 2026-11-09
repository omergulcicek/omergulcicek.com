import { createFileRoute } from "@tanstack/react-router"

import { postMarkdownResponse } from "@/features/blog/api/markdown-response"

/** A personal post as plain Markdown. */
export const Route = createFileRoute("/{-$lang}/notes/{$slug}.md")({
  server: {
    handlers: { GET: ({ params }) => postMarkdownResponse("personal", params.slug) }
  }
})
