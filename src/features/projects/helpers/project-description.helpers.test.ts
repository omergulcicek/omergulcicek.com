import { describe, expect, it } from "vitest"

import {
	getProjectDescriptionText,
	parseProjectDescription
} from "@/features/projects/helpers/project-description.helpers"

describe("parseProjectDescription", () => {
	it("splits markers into styled segments with unique source offsets", () => {
		expect(
			parseProjectDescription("Bir **kalın** ve `kod` ile *vurgu*")
		).toEqual([
			{ key: 0, text: "Bir ", style: "plain" },
			{ key: 4, text: "kalın", style: "bold" },
			{ key: 13, text: " ve ", style: "plain" },
			{ key: 17, text: "kod", style: "code" },
			{ key: 22, text: " ile ", style: "plain" },
			{ key: 27, text: "vurgu", style: "italic" }
		])
	})

	it("returns plain text without markers", () => {
		expect(getProjectDescriptionText("Bir **kalın** `kod`")).toBe(
			"Bir kalın kod"
		)
	})
})
