import type { ReactNode } from "react"

import type { BlogCssInteractiveWidget } from "@/features/blog/types/blog-css-interactive.types"

type CssDemoMountProps = {
	widget: BlogCssInteractiveWidget
	children: ReactNode
}

/** SSR placeholder that the blog prose hydrator replaces with the interactive client demo. */
export function CssDemoMount({ widget, children }: CssDemoMountProps) {
	return (
		<div
			className="blog-widget-mount blog-css-interactive-mount not-prose"
			data-blog-widget={widget}
		>
			{children}
		</div>
	)
}
