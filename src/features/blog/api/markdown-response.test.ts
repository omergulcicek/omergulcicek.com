import { describe, expect, it } from "vitest"

import { postMarkdownResponse } from "@/features/blog/api/markdown-response"

describe("postMarkdownResponse", () => {
  it("moves a retired post's Markdown to its replacement's Markdown", async () => {
    const response = await postMarkdownResponse("technical", "kaide-yapay-zeka-odakli-mimari-kit")

    expect(response.status).toBe(301)
    expect(response.headers.get("Location")).toBe("/blog/virastack-ai.md")
  })

  it("answers 404 for a slug that cannot exist, without a request", async () => {
    const response = await postMarkdownResponse("personal", "Not_A_Slug")

    expect(response.status).toBe(404)
  })
})
