import { QueryClient } from "@tanstack/react-query"
import { isNotFound, isRedirect } from "@tanstack/react-router"
import { describe, expect, it } from "vitest"

import { listPost, postDetail, seedBlog } from "@/features/blog/helpers/blog-test-fixtures"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"
import { Route as LangRoute } from "@/routes/{-$lang}"
import { Route as BlogPostRoute } from "@/routes/{-$lang}/blog/$slug"
import { Route as NotePostRoute } from "@/routes/{-$lang}/notes/$slug"
import { Route as LegacyNoteRoute } from "@/routes/{-$lang}/notlar/$slug"
import { Route as LegacyNotesRoute } from "@/routes/{-$lang}/notlar/index"

/*
 * The route hooks are called directly with the few arguments they read: the generated route tree
 * needs the whole Start runtime, while these checks only need what each hook throws.
 */
type Hook = (args: unknown) => unknown

function hook(fn: unknown) {
  if (typeof fn !== "function") throw new Error("The route has no such hook")
  return fn as Hook
}

/** What a hook threw, or undefined when it returned normally. */
async function thrownBy(run: () => unknown) {
  try {
    await run()
  } catch (error) {
    return error
  }
  return undefined
}

function expectRedirect(error: unknown) {
  if (!isRedirect(error)) throw new Error(`Expected a redirect, got ${String(error)}`)
  expect(error.status).toBe(301)
  return error.options
}

describe("/{-$lang}", () => {
  const beforeLoad = hook(LangRoute.options.beforeLoad)
  const run = (lang: string | undefined, href: string) =>
    thrownBy(() => beforeLoad({ params: { lang }, location: { href } }))

  it("serves the base locale without a prefix", async () => {
    expect(await run(undefined, "/blog")).toBeUndefined()
  })

  it("serves English under /en", async () => {
    expect(await run("en", "/en/blog")).toBeUndefined()
  })

  it("answers an unknown language segment with a 404, not a page", async () => {
    expect(isNotFound(await run("de", "/de/blog"))).toBe(true)
  })

  it("moves /tr/... to the unprefixed URL with a 301, keeping the search", async () => {
    const options = expectRedirect(await run("tr", "/tr/blog?tag=react"))
    expect(options.href).toBe("/blog?tag=react")
  })

  it("moves /tr itself to the home page", async () => {
    expect(expectRedirect(await run("tr", "/tr")).href).toBe("/")
  })

  it("does not treat a page that starts with the locale code as the locale", async () => {
    // `/tr` followed by `?x` still lands on the home page, not on `?x` without a path.
    expect(expectRedirect(await run("tr", "/tr?ref=x")).href).toBe("/?ref=x")
  })
})

describe.each([
  ["technical", BlogPostRoute, "/{-$lang}/blog/$slug"],
  ["personal", NotePostRoute, "/{-$lang}/notes/$slug"]
] as const)("%s post route", (category: BlogCategory, route, to) => {
  const beforeLoad = hook(route.options.beforeLoad)
  const loader = hook(route.options.loader)

  it("renders a normal slug", async () => {
    expect(await thrownBy(() => beforeLoad({ params: { slug: "barrel-file" } }))).toBeUndefined()
  })

  it("answers a slug that cannot exist with a 404 instead of querying", async () => {
    for (const slug of ["Barrel-File", "a b", "../etc", "slug.md"]) {
      expect(isNotFound(await thrownBy(() => beforeLoad({ params: { slug } })))).toBe(true)
    }
  })

  it("moves a retired post to its replacement with a 301, keeping the language", async () => {
    const options = expectRedirect(
      await thrownBy(() =>
        beforeLoad({ params: { lang: "en", slug: "kaide-ai-native-architecture-kit" } })
      )
    )
    expect(options.to).toBe(to)
    expect(options.params).toEqual({
      lang: "en",
      slug: "virastack-ai-architecture-rules-for-agents"
    })
  })

  function loadPost(
    lang: string | undefined,
    detail: ReturnType<typeof postDetail>
  ): Promise<unknown> {
    const queryClient = new QueryClient()
    seedBlog(queryClient, category, [listPost({ slug: detail.slug })], detail)
    const slug = detail.slug.replace(/^\//, "")
    return Promise.resolve(loader({ context: { queryClient }, params: { lang, slug } }))
  }

  it("returns the post when it is read in its own language", async () => {
    const detail = postDetail({ locale: "tr" })

    await expect(loadPost(undefined, detail)).resolves.toEqual(detail)
  })

  it("moves a post read under the other language to its translation", async () => {
    const detail = postDetail({
      slug: "/turkce-yazi",
      locale: "tr",
      translation_slug: "/english-post"
    })

    const options = expectRedirect(await thrownBy(() => loadPost("en", detail)))
    expect(options.to).toBe(to)
    expect(options.params).toEqual({ lang: "en", slug: "english-post" })
  })

  it("shows a post without a translation under either language", async () => {
    const detail = postDetail({ locale: "en", translation_slug: null })

    await expect(loadPost(undefined, detail)).resolves.toEqual(detail)
  })
})

describe("v10 note addresses", () => {
  it("moves /notlar to /notes with a 301", async () => {
    const options = expectRedirect(
      await thrownBy(() => hook(LegacyNotesRoute.options.beforeLoad)({ params: {} }))
    )
    expect(options.to).toBe("/{-$lang}/notes")
  })

  it("moves /notlar/slug to /notes/slug with a 301, keeping the slug", async () => {
    const options = expectRedirect(
      await thrownBy(() =>
        hook(LegacyNoteRoute.options.beforeLoad)({ params: { slug: "kitap-notlari" } })
      )
    )
    expect(options.to).toBe("/{-$lang}/notes/$slug")
    expect(options.params).toEqual({ slug: "kitap-notlari" })
  })
})
