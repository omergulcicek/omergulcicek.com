import { describe, expect, it } from "vitest"

import { countMonths, formatDuration } from "@/features/experiences/helpers/experience-duration"

describe("countMonths", () => {
  it("counts both the first and the last month", () => {
    expect(countMonths("2024-03", "2025-06", new Date())).toBe(16)
    expect(countMonths("2025-08", "2025-11", new Date())).toBe(4)
  })

  it("counts a current role up to now", () => {
    expect(countMonths("2025-12", null, new Date(Date.UTC(2026, 10, 9)))).toBe(12)
  })
})

describe("formatDuration", () => {
  it("formats years and months in each locale", () => {
    expect(formatDuration(16, "tr")).toBe("1 yıl 4 ay")
    expect(formatDuration(16, "en")).toBe("1 year 4 months")
    expect(formatDuration(24, "en")).toBe("2 years")
    expect(formatDuration(1, "en")).toBe("1 month")
  })
})
