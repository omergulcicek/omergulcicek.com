import { describe, expect, it } from "vitest"

import { resolvePostRedirect } from "@/features/blog/helpers/resolve-post-redirect"

describe("resolvePostRedirect", () => {
  it("renders a normal post", () => {
    expect(resolvePostRedirect("barrel-file")).toEqual({ kind: "render" })
  })

  it("moves a retired post to the post that replaces it", () => {
    expect(resolvePostRedirect("kaide-yapay-zeka-odakli-mimari-kit")).toEqual({
      kind: "redirect",
      slug: "virastack-ai"
    })
  })

  it("moves v10's Markdown address to the page, retired or not", () => {
    expect(resolvePostRedirect("barrel-file.md")).toEqual({ kind: "redirect", slug: "barrel-file" })
    expect(resolvePostRedirect("nizam-nextjs-16-boilerplate.md")).toEqual({
      kind: "redirect",
      slug: "virastack-start"
    })
  })

  it("rejects slugs that cannot exist instead of erroring", () => {
    expect(resolvePostRedirect("Bad Slug")).toEqual({ kind: "not-found" })
  })
})
