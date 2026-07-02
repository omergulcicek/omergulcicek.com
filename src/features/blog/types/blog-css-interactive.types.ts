import type { CSSProperties, ReactNode } from "react"

import type { blogCssInteractiveWidgetNames } from "@/features/blog/constants/blog-css-interactive.constants"

export type BlogCssInteractiveWidget =
	(typeof blogCssInteractiveWidgetNames)[number]

export type BlogCssInteractiveDemoProps = {
	controls: ReactNode
	preview: ReactNode
	code: ReactNode
	caniuseHref: string
}

export type BlogCssCustomProperties = CSSProperties & {
	cornerShape?: string
	textBox?: string
}
