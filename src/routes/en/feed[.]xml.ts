import { createFileRoute } from "@tanstack/react-router"

import { feedResponse } from "@/features/blog/api/feed-response"

/** The English blog's RSS feed: only the posts written in English. */
export const Route = createFileRoute("/en/feed.xml")({
  server: { handlers: { GET: () => feedResponse("technical", "en") } }
})
