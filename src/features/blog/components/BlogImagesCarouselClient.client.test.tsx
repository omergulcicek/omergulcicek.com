import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, it, vi } from "vitest"

import { BlogImagesCarouselClient } from "@/features/blog/components/BlogImagesCarouselClient.client"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"

const images = [
	{ src: "/blog/2026/01-01/a.webp", alt: "Birinci görsel" },
	{ src: "/blog/2026/01-01/b.webp", alt: "İkinci görsel" }
]

function stubBrowserApis() {
	vi.stubGlobal(
		"matchMedia",
		vi.fn().mockReturnValue({
			matches: false,
			addEventListener: vi.fn(),
			removeEventListener: vi.fn()
		})
	)
	vi.stubGlobal(
		"IntersectionObserver",
		class {
			observe() {}
			unobserve() {}
			disconnect() {}
		}
	)
}

it("renders every image with its alt text and navigation buttons", () => {
	stubBrowserApis()
	render(<BlogImagesCarouselClient images={images} />)

	expect(screen.getAllByRole("img")).toHaveLength(2)
	expect(screen.getByAltText("Birinci görsel")).toBeInTheDocument()
	expect(
		screen.getByRole("button", { name: BLOG_UI.carouselPrevious })
	).toBeInTheDocument()
	expect(
		screen.getByRole("button", { name: BLOG_UI.carouselNext })
	).toBeInTheDocument()
})

it("lets the next button be pressed without errors", async () => {
	stubBrowserApis()
	const user = userEvent.setup()
	render(<BlogImagesCarouselClient images={images} />)

	await user.click(screen.getByRole("button", { name: BLOG_UI.carouselNext }))

	expect(screen.getByAltText("İkinci görsel")).toBeInTheDocument()
})

it("hides the buttons for a single image", () => {
	stubBrowserApis()
	render(<BlogImagesCarouselClient images={images.slice(0, 1)} />)

	expect(screen.queryByRole("button")).not.toBeInTheDocument()
})
