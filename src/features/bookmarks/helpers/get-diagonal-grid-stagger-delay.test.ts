import { describe, expect, it } from "vitest"

import {
	getDiagonalGridStaggerDelay,
	getDiagonalGridStaggerStep
} from "@/features/bookmarks/helpers/get-diagonal-grid-stagger-delay"

describe("getDiagonalGridStaggerStep", () => {
	it("returns diagonal wave indices for a five-column grid", () => {
		expect(getDiagonalGridStaggerStep(0, 5)).toBe(0)
		expect(getDiagonalGridStaggerStep(1, 5)).toBe(1)
		expect(getDiagonalGridStaggerStep(5, 5)).toBe(1)
		expect(getDiagonalGridStaggerStep(2, 5)).toBe(2)
		expect(getDiagonalGridStaggerStep(6, 5)).toBe(2)
		expect(getDiagonalGridStaggerStep(10, 5)).toBe(2)
		expect(getDiagonalGridStaggerStep(3, 5)).toBe(3)
		expect(getDiagonalGridStaggerStep(7, 5)).toBe(3)
		expect(getDiagonalGridStaggerStep(11, 5)).toBe(3)
	})
})

describe("getDiagonalGridStaggerDelay", () => {
	it("multiplies the diagonal step by the configured duration", () => {
		expect(getDiagonalGridStaggerDelay(6, 5, 0.04)).toBe(0.08)
	})
})
