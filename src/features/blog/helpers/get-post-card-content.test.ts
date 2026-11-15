// @vitest-environment node
import { http, HttpResponse } from "msw"
import { describe, expect, it, vi } from "vitest"

import { getPostCardContent } from "@/features/blog/helpers/get-post-card-content"
import { server } from "@/test/server"

// env.ts reads these once on import, so they are set before any module loads.
vi.hoisted(() => {
  process.env.SUPABASE_URL = "https://supabase.test"
  process.env.SUPABASE_ANON_KEY = "anon-key"
})

const POSTS_URL = "https://supabase.test/rest/v1/blog_posts"

describe("getPostCardContent", () => {
  it.each(["/", "/blog", "/notes", "/projects", "/blog/a/b", "/notlar/x"])(
    "leaves %s to the page cards without asking Supabase",
    async (path) => {
      // No handler: a request here would fail the test.
      await expect(getPostCardContent(path)).resolves.toBeUndefined()
    }
  )

  it("asks for the published post of the folder's category", async () => {
    let query: URLSearchParams | undefined
    server.use(
      http.get(POSTS_URL, ({ request }) => {
        query = new URL(request.url).searchParams
        return HttpResponse.json([])
      })
    )

    await getPostCardContent("/notes/kitap-notlari")

    expect(query?.get("slug")).toBe("eq./kitap-notlari")
    expect(query?.get("category")).toBe("eq.personal")
    expect(query?.get("published")).toBe("eq.true")
  })

  it("returns null for a post that does not exist", async () => {
    server.use(http.get(POSTS_URL, () => HttpResponse.json([])))

    await expect(getPostCardContent("/blog/yok")).resolves.toBeNull()
  })

  it("writes the date and first tag in the post's own language", async () => {
    server.use(
      http.get(POSTS_URL, () =>
        HttpResponse.json([
          {
            title: "Agents",
            description: "On agents",
            // Stored in Turkish; sorted, so the first tag is the one the order puts first.
            tags: ["Yapay Zekâ"],
            locale: "en",
            published_at: "2026-11-04T22:30:00Z"
          }
        ])
      )
    )

    const card = await getPostCardContent("/blog/agents")

    expect(card).toEqual({
      locale: "en",
      title: "Agents",
      description: "On agents",
      // 22:30 UTC is already the 5th in Istanbul.
      meta: "November 5, 2026 · AI"
    })
  })

  it("shows no separator for an undated post without tags", async () => {
    server.use(
      http.get(POSTS_URL, () =>
        HttpResponse.json([
          { title: "T", description: "D", tags: [], locale: "tr", published_at: null }
        ])
      )
    )

    expect((await getPostCardContent("/blog/t"))?.meta).toBe("")
  })

  it("fails loudly when Supabase errors, instead of drawing an empty card", async () => {
    server.use(http.get(POSTS_URL, () => HttpResponse.json(null, { status: 500 })))

    await expect(getPostCardContent("/blog/x")).rejects.toThrow()
  })
})
