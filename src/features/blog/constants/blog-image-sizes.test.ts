import { readdirSync } from "node:fs"
import { join, relative } from "node:path"

import { describe, expect, it } from "vitest"

import sizes from "@/features/blog/constants/blog-image-sizes.json"

describe("blog-image-sizes.json", () => {
  it("lists every image in public/blog; run `pnpm blog:image-sizes` if this fails", () => {
    const files = readdirSync("public/blog", { recursive: true, withFileTypes: true })
      .filter((entry) => entry.isFile() && /\.(png|jpe?g|webp|gif)$/i.test(entry.name))
      .map((entry) => `/${relative("public", join(entry.parentPath, entry.name))}`)
      .sort()

    expect(Object.keys(sizes).sort()).toEqual(files)
  })
})
