import { describe, expect, it } from "vitest"

import { formatYearMonth } from "@/helpers/format-year-month"

describe("formatYearMonth", () => {
  it("formats a YYYY-MM string in the given locale", () => {
    expect(formatYearMonth("2025-12", "tr")).toBe("Ara 2025")
    expect(formatYearMonth("2025-12", "en")).toBe("Dec 2025")
  })
})
