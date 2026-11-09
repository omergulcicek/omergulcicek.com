import { describe, expect, it } from "vitest"

import { npmRange, npmRangesSince } from "@/features/projects/api/get-npm-downloads.api"

describe("npmRange", () => {
  it("covers the given number of days, ending yesterday", () => {
    expect(npmRange(90, new Date("2026-11-09T12:00:00Z"))).toBe("2026-08-11:2026-11-08")
  })
})

describe("npmRangesSince", () => {
  const now = new Date("2026-11-09T12:00:00Z")

  it("returns one range when the start is within 540 days", () => {
    expect(npmRangesSince(new Date("2026-07-21T21:16:58Z"), now)).toEqual(["2026-07-21:2026-11-08"])
  })

  it("splits longer spans into back-to-back ranges of at most 540 days", () => {
    expect(npmRangesSince(new Date("2024-01-01T00:00:00Z"), now)).toEqual([
      "2024-01-01:2025-06-23",
      "2025-06-24:2026-11-08"
    ])
  })

  it("counts yesterday for a package published late yesterday", () => {
    expect(npmRangesSince(new Date("2026-11-08T23:30:00Z"), now)).toEqual(["2026-11-08:2026-11-08"])
  })

  it("returns nothing for a package published today", () => {
    expect(npmRangesSince(new Date("2026-11-09T08:00:00Z"), now)).toEqual([])
  })
})
