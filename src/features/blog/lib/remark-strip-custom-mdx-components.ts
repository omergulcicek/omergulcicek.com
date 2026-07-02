import type { Nodes, Parent, Root } from "mdast"

import { blogMdxComponentNames } from "@/features/blog/constants/blog-mdx-component-names.constants"

const allowedMdxComponents = new Set<string>(blogMdxComponentNames)

function isCustomMdxComponent(name: string | null | undefined) {
	return typeof name === "string" && /^[A-Z]/.test(name)
}

function shouldStripCustomMdxComponent(name: string | null | undefined) {
	return isCustomMdxComponent(name) && !allowedMdxComponents.has(name ?? "")
}

function stripCustomMdxComponents(node: Parent) {
	node.children = node.children.filter((child: Nodes) => {
		if (
			child.type === "mdxJsxFlowElement" ||
			child.type === "mdxJsxTextElement"
		) {
			const name = "name" in child ? child.name : null
			return !shouldStripCustomMdxComponent(name)
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
