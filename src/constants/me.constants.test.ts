import { describe, expect, it } from "vitest"

import { ME, getMeProject } from "@/constants/me.constants"
import meJson from "@/constants/me.json"
import { STACK_ITEMS } from "@/constants/stack.constants"
import { meSchema } from "@/schemas/me.schema"

describe("ME", () => {
	it("matches the schema", () => {
		expect(() => meSchema.parse(meJson)).not.toThrow()
	})

	it("uses December 2025 as the ViraStack start in experiences and journey", () => {
		const virastack = ME.experiences.find((item) => item.id === "virastack")
		const journey2025 = ME.journey.find((group) => group.year === 2025)

		expect(virastack?.startDate).toBe("2025-12")
		expect(journey2025?.entries.map((entry) => entry.id)).toContain(
			"2025-virastack"
		)
	})

	it("keeps removed entries out of the journey", () => {
		const entryIds = ME.journey.flatMap((group) =>
			group.entries.map((entry) => entry.id)
		)

		expect(entryIds).not.toContain("2020-polo")
		expect(entryIds).not.toContain("2022-ilk-ev")
	})

	it("lists ViraStack Academy first among ViraStack projects", () => {
		const virastackProjects = ME.projects.filter(
			(project) => project.group === "virastack"
		)

		expect(virastackProjects[0]).toMatchObject({
			id: "academy",
			href: "https://virastack.com/academy",
			color: "text-green-500"
		})
	})

	it("throws for an unknown project id", () => {
		expect(getMeProject("academy").title).toBe("ViraStack Academy")
		expect(() => getMeProject("missing")).toThrow()
	})

	it("only references known stack items", () => {
		const knownIds = new Set(STACK_ITEMS.map((item) => item.id))
		const referencedIds = [
			...ME.stack.home,
			...ME.stack.categories.flatMap((category) => category.itemIds)
		]

		expect(referencedIds.filter((id) => !knownIds.has(id))).toEqual([])
	})

	it("uses the raindrop.page address", () => {
		expect(ME.contact.raindrop).toBe("https://omergulcicek.raindrop.page/")
	})
})
