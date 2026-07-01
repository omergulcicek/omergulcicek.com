export function navigateToHeading(id: string) {
	const element = document.getElementById(id)

	if (!element) {
		return
	}

	element.scrollIntoView({ behavior: "smooth", block: "start" })

	const url = new URL(window.location.href)
	url.hash = id
	window.history.pushState(null, "", url)
}
