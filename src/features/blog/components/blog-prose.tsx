import { memo, useLayoutEffect, useRef } from "react"
import { createRoot, type Root } from "react-dom/client"
import type { Zoom } from "medium-zoom"

import { blogProseClass } from "@/components/shared/prose.styles"
import { BlogCodeCopyButton } from "@/features/blog/components/blog-code-copy-button"
import { enhanceBlogProseCodeBlocks } from "@/features/blog/helpers/enhance-blog-prose-code-blocks"
import { enhanceBlogProseHeadings } from "@/features/blog/helpers/enhance-blog-prose-headings"
import { enhanceBlogProseImages } from "@/features/blog/helpers/enhance-blog-prose-images"
import {
	ensureBlogProseImageZoom,
	scheduleBlogProseImageZoomSync,
	teardownBlogProseImageZoom
} from "@/features/blog/helpers/blog-prose-image-zoom"
import { getBlogCodeBlockText } from "@/features/blog/helpers/get-blog-code-block-text"
import { cn } from "@/lib/utils"

import "@/styles/blog-prose.css"
import "medium-zoom/dist/style.css"

type BlogProseProps = {
	html: string
	className?: string
}

type BlogProseWidgetRoot = {
	root: Root
	mount: HTMLElement
}

export const BlogProse = memo(function BlogProse({
	html,
	className
}: BlogProseProps) {
	const containerRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}

		enhanceBlogProseHeadings(container)
		enhanceBlogProseCodeBlocks(container)

		const copyRoots: Root[] = []
		const copySlots = container.querySelectorAll<HTMLElement>(
			"[data-blog-code-copy-slot]"
		)

		for (const slot of copySlots) {
			const block = slot.closest<HTMLElement>("[data-blog-code-block]")

			if (!block) {
				continue
			}

			const root = createRoot(slot)

			root.render(
				<BlogCodeCopyButton
					getCode={() => getBlogCodeBlockText(block)}
				/>
			)
			copyRoots.push(root)
		}

		let widgetRoots: BlogProseWidgetRoot[] = []
		let cancelled = false
		let unmountWidgets: ((roots: BlogProseWidgetRoot[]) => void) | null =
			null
		const zoomRef: { current: Zoom | null } = { current: null }

		void import("@/features/blog/helpers/hydrate-blog-prose-widgets.client").then(
			({ hydrateBlogProseWidgets, unmountBlogProseWidgets }) => {
				unmountWidgets = unmountBlogProseWidgets

				if (cancelled) {
					return
				}

				void hydrateBlogProseWidgets(container).then((roots) => {
					if (cancelled) {
						unmountBlogProseWidgets(roots)
						return
					}

					widgetRoots = roots
					enhanceBlogProseImages(container)
					scheduleBlogProseImageZoomSync(container, zoomRef)
				})
			}
		)

		const frameId = requestAnimationFrame(() => {
			enhanceBlogProseImages(container)
			ensureBlogProseImageZoom(zoomRef, container)
		})

		return () => {
			cancelled = true
			cancelAnimationFrame(frameId)

			for (const root of copyRoots) {
				root.unmount()
			}

			unmountWidgets?.(widgetRoots)

			teardownBlogProseImageZoom()
			zoomRef.current = null
		}
	}, [html])

	return (
		<div
			ref={containerRef}
			className={cn(blogProseClass, className)}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	)
})
