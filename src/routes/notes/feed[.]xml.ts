import { createFileRoute } from "@tanstack/react-router"

import { feedResponse } from "@/features/blog/api/feed-response"

/** The notes' RSS feed; v10's /notlar/feed.xml moves here through the notlar redirect. */
export const Route = createFileRoute("/notes/feed.xml")({
  server: { handlers: { GET: () => feedResponse("personal") } }
})
