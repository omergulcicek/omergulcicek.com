import { useEffect, useRef } from "react"
import mediumZoom from "medium-zoom"

import { blogProseClass } from "@/components/shared/prose.styles"
import { enhanceBlogProseHeadings } from "@/features/blog/helpers/enhance-blog-prose-headings"
import { enhanceBlogProseImages } from "@/features/blog/helpers/enhance-blog-prose-images"
import { cn } from "@/lib/utils"

import "@/styles/blog-prose.css"
import "medium-zoom/dist/style.css"

type BlogProseProps = {
	html: string
	className?: string
}

export function BlogProse({ html, className }: BlogProseProps) {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}

		enhanceBlogProseImages(container)
		enhanceBlogProseHeadings(container)

		const zoom = mediumZoom(
			container.querySelectorAll<HTMLImageElement>("img[data-zoomable]"),
			{
				margin: 24,
				background: "rgba(0,0,0,0.8)",
				scrollOffset: 0
			}
		)

		return () => {
			zoom.detach()
		}
	}, [html])

	return (
		<div
			ref={containerRef}
			className={cn(blogProseClass, className)}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	)
}
