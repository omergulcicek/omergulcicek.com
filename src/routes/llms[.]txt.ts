import { createFileRoute } from "@tanstack/react-router"

import { llmsTxtResponse } from "@/features/blog/api/llms-response"

/** An index of the site for language models (https://llmstxt.org). */
export const Route = createFileRoute("/llms.txt")({
  server: { handlers: { GET: () => llmsTxtResponse() } }
})
