import { describe, expect, it } from "vitest"

import { formatExperiencePeriod } from "@/features/experiences/helpers/format-experience-period"

describe("formatExperiencePeriod", () => {
	it("formats a closed range", () => {
		expect(formatExperiencePeriod("2025-08", "2025-11")).toBe("Ağu 25 – Kas 25")
	})

	it("formats an open range", () => {
		expect(formatExperiencePeriod("2025-12", null)).toBe("Ara 25 –")
	})
})
