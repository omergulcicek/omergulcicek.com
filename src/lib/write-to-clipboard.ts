export async function writeToClipboard(text: string) {
	if (navigator.clipboard?.writeText) {
		await navigator.clipboard.writeText(text)
		return
	}

	const textarea = document.createElement("textarea")

	textarea.value = text
	textarea.setAttribute("readonly", "")
	textarea.style.position = "fixed"
	textarea.style.opacity = "0"
	textarea.style.pointerEvents = "none"
	document.body.appendChild(textarea)
	textarea.select()

	try {
		const copied = document.execCommand("copy")

		if (!copied) {
			throw new Error("Clipboard copy failed")
		}
	} finally {
		document.body.removeChild(textarea)
	}
}
