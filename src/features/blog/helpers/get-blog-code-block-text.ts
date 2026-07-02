export function getBlogCodeBlockText(block: HTMLElement) {
	const pre =
		block.matches("pre") ? block : block.querySelector<HTMLElement>("pre")
	const code = pre?.querySelector("code") ?? pre

	return code?.textContent?.replace(/\n$/, "") ?? ""
}
