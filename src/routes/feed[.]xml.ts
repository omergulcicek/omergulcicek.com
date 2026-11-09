import { createFileRoute } from "@tanstack/react-router"

import { feedResponse } from "@/features/blog/api/feed-response"

/** The blog's RSS feed, at v10's address so existing subscriptions keep working. */
export const Route = createFileRoute("/feed.xml")({
  server: { handlers: { GET: () => feedResponse("technical") } }
})
