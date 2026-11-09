import { readFileSync } from "node:fs"

import { describe, expect, it } from "vitest"

import { readImageSize } from "@/features/blog/helpers/read-image-size"

// Real post images, one per format; sizes checked against macOS `sips`.
const samples = [
  ["public/blog/2019/12-31/calendar.png", "PNG"],
  ["public/blog/2017/07-22/sait-kosk-hemdem.jpg", "JPEG"],
  ["public/blog/2026/04-05/virastack-logo.webp", "WebP"],
  ["public/blog/2025/01-06/optimistic-ui.gif", "GIF"]
] as const

describe("readImageSize", () => {
  it.each(samples)("reads %s (%s)", (path) => {
    const size = readImageSize(new Uint8Array(readFileSync(path)))

    expect(size?.width).toBeGreaterThan(0)
    expect(size?.height).toBeGreaterThan(0)
  })

  it("reads the GIF header exactly", () => {
    const bytes = new Uint8Array(readFileSync("public/blog/2025/01-06/optimistic-ui.gif"))

    expect(readImageSize(bytes)).toEqual({ width: 569, height: 276 })
  })

  it("returns null for bytes that are not an image", () => {
    expect(readImageSize(new TextEncoder().encode("not an image, just some plain text"))).toBeNull()
  })
})
