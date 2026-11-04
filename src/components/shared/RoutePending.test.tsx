import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { RoutePending } from "@/components/shared/RoutePending"

it("announces the loading state to assistive technology", () => {
	render(<RoutePending />)

	expect(screen.getByRole("status")).toHaveAttribute("aria-busy", "true")
	expect(screen.getByText(SITE_CONTENT.routePendingLabel)).toBeInTheDocument()
})
