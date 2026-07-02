export function enhanceBlogProseCodeBlocks(container: HTMLElement) {
	const figures = container.querySelectorAll<HTMLElement>(
		"figure[data-rehype-pretty-code-figure]"
	)
	const standalonePres = Array.from(
		container.querySelectorAll<HTMLElement>("pre")
	).filter((pre) => !pre.closest("figure[data-rehype-pretty-code-figure]"))
	const blocks = [...figures, ...standalonePres]

	for (const block of blocks) {
		if (block.closest("[data-blog-code-block]")) {
			continue
		}

		const wrapper = document.createElement("div")

		wrapper.className = "blog-code-block"
		wrapper.dataset.blogCodeBlock = ""

		const toolbar = document.createElement("div")

		toolbar.className = "blog-code-block__toolbar"
		toolbar.dataset.blogCodeCopySlot = ""

		block.parentNode?.insertBefore(wrapper, block)
		wrapper.appendChild(toolbar)
		wrapper.appendChild(block)
	}
}
