import { createFileRoute } from "@tanstack/react-router"

import { llmsFullTxtResponse } from "@/features/blog/api/llms-response"

/** Every technical post as Markdown in one file, for language models. */
export const Route = createFileRoute("/llms-full.txt")({
  server: { handlers: { GET: () => llmsFullTxtResponse() } }
})
