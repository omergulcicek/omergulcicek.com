import { navigateToHeading } from "@/lib/navigate-to-heading"

const HEADING_ANCHOR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`

function createHeadingAnchor(id: string, label: string) {
	const anchor = document.createElement("a")

	anchor.href = `#${id}`
	anchor.dataset.headingAnchor = ""
	anchor.className = "heading-anchor"
	anchor.setAttribute("aria-label", label)
	anchor.innerHTML = HEADING_ANCHOR_ICON

	anchor.addEventListener("click", (event) => {
		if (
			event.metaKey ||
			event.ctrlKey ||
			event.shiftKey ||
			event.altKey ||
			event.button !== 0
		) {
			return
		}

		event.preventDefault()
		navigateToHeading(id)
	})

	return anchor
}

export function enhanceBlogProseHeadings(container: HTMLElement) {
	const headings = container.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]")

	for (const heading of headings) {
		if (heading.querySelector("[data-heading-anchor]")) {
			continue
		}

		const wrapper = document.createElement("span")

		wrapper.className = "heading-anchor-wrap"

		while (heading.firstChild) {
			wrapper.appendChild(heading.firstChild)
		}

		const label =
			heading.textContent?.trim() ?
				`${heading.textContent.trim()} bölümüne git`
			:	"Bu bölüme link"

		wrapper.appendChild(createHeadingAnchor(heading.id, label))
		heading.appendChild(wrapper)
	}
}
