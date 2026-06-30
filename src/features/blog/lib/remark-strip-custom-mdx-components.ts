import type { Nodes, Parent, Root } from "mdast"

function isCustomMdxComponent(name: string | null | undefined) {
	return typeof name === "string" && /^[A-Z]/.test(name)
}

function stripCustomMdxComponents(node: Parent) {
	node.children = node.children.filter((child: Nodes) => {
		if (
			child.type === "mdxJsxFlowElement" ||
			child.type === "mdxJsxTextElement"
		) {
			const name = "name" in child ? child.name : null
			return !isCustomMdxComponent(name)
		}

		return true
	})

	for (const child of node.children) {
		if ("children" in child && Array.isArray(child.children)) {
			stripCustomMdxComponents(child as Parent)
		}
	}
}

export function remarkStripCustomMdxComponents() {
	return (tree: Root) => {
		stripCustomMdxComponents(tree)
	}
}
