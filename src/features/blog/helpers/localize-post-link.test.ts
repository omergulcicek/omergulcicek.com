import { describe, expect, it } from "vitest"

import { localizePostLink } from "@/features/blog/helpers/localize-post-link"

describe("localizePostLink", () => {
  it("moves internal links under the post's language", () => {
    expect(localizePostLink("/blog/virastack-ai-architecture-rules-for-agents", "en")).toBe(
      "/en/blog/virastack-ai-architecture-rules-for-agents"
    )
    expect(localizePostLink("/blog/virastack-ai", "tr")).toBe("/blog/virastack-ai")
  })

  it("keeps external links, anchors and files as written", () => {
    expect(localizePostLink("https://virastack.com/mask", "en")).toBe("https://virastack.com/mask")
    expect(localizePostLink("#install", "en")).toBe("#install")
    expect(localizePostLink("/blog/2026/07-28/virastack-start-intro.mp4", "en")).toBe(
      "/blog/2026/07-28/virastack-start-intro.mp4"
    )
  })
})
