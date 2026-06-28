import React from "react"

import type { MdxComponentsMapType } from "@/types/mdx-components.types"
import { MdxContentProps } from "@/types/mdx.types"

import { processMdxContent } from "@/lib/process-mdx-content"

import { components } from "./mdx-components"
import { MdxZoomProvider } from "./mdx-zoom-provider"

export async function MDX({ content }: MdxContentProps) {
	const processedContent = await processMdxContent(
		content,
		components as unknown as MdxComponentsMapType
	)
	return <MdxZoomProvider>{processedContent}</MdxZoomProvider>
}

export { components }
