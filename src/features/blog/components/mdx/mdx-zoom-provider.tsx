"use client"

import React from "react"

import mediumZoom, { Zoom } from "medium-zoom"

import { MdxZoomProviderPropsType } from "@/features/blog/types/mdx-zoom-provider.types"

export function MdxZoomProvider({ children }: MdxZoomProviderPropsType) {
	const containerRef = React.useRef<HTMLDivElement | null>(null)
	const zoomRef = React.useRef<Zoom | null>(null)

	React.useEffect(() => {
		const container = containerRef.current
		if (!container) return

		const images = Array.from(
			container.querySelectorAll("img[data-zoomable]")
		) as HTMLElement[]
		if (images.length === 0) return

		const zoom = mediumZoom(images, {
			margin: 24,
			background: "rgba(0,0,0,0.8)",
			scrollOffset: 0
		})
		zoomRef.current = zoom

		return () => {
			images.forEach((image) => {
				zoom.detach(image)
			})
			zoomRef.current = null
		}
	}, [children])

	return <div ref={containerRef}>{children}</div>
}
