import { createElement } from "react"
import { createRoot, type Root } from "react-dom/client"

import { parseBlogWidgetProps } from "@/features/blog/helpers/blog-widget-props"
import type { BlogCssInteractiveWidget } from "@/features/blog/types/blog-css-interactive.types"
import type { BlogChartAreaLinearProps } from "@/features/blog/types/chart-area-linear.types"
import type { BlogImagesCarouselProps } from "@/features/blog/types/images-carousel.types"
import type { BlogLinksReviewProps } from "@/features/blog/types/links-review.types"

type BlogProseWidgetRoot = {
	root: Root
	mount: HTMLElement
}

async function hydrateCssInteractiveWidget(
	mount: HTMLElement,
	widget: BlogCssInteractiveWidget
) {
	const clientModule = await import(
		"@/features/blog/components/blog-css-interactive.client"
	)

	const clientByWidget = {
		"corner-shape": clientModule.BlogCornerShapeClient,
		"clip-path": clientModule.BlogClipPathClient,
		"picker-icon": clientModule.BlogPickerIconClient,
		stretch: clientModule.BlogStretchClient,
		"text-box": clientModule.BlogTextBoxClient,
		"sibling-index": clientModule.BlogSiblingIndexClient
	} as const

	const Client = clientByWidget[widget]
	const root = createRoot(mount)

	root.render(createElement(Client))

	return { root, mount }
}

async function hydrateChartAreaLinear(mount: HTMLElement) {
	const props = parseBlogWidgetProps<BlogChartAreaLinearProps>(
		mount.dataset.blogWidgetProps
	)

	if (!props) {
		return null
	}

	const { BlogChartAreaLinearClient } = await import(
		"@/features/blog/components/blog-chart-area-linear.client"
	)
	const root = createRoot(mount)

	root.render(createElement(BlogChartAreaLinearClient, props))

	return { root, mount }
}

async function hydrateImagesCarousel(mount: HTMLElement) {
	const props = parseBlogWidgetProps<BlogImagesCarouselProps>(
		mount.dataset.blogWidgetProps
	)

	if (!props) {
		return null
	}

	const { BlogImagesCarouselClient } = await import(
		"@/features/blog/components/blog-images-carousel.client"
	)
	const root = createRoot(mount)

	root.render(createElement(BlogImagesCarouselClient, props))

	return { root, mount }
}

async function hydrateLinksReview(mount: HTMLElement) {
	const props = parseBlogWidgetProps<BlogLinksReviewProps>(
		mount.dataset.blogWidgetProps
	)

	if (!props) {
		return null
	}

	const { BlogLinksReviewClient } = await import(
		"@/features/blog/components/blog-links-review.client"
	)
	const root = createRoot(mount)

	root.render(createElement(BlogLinksReviewClient, props))

	return { root, mount }
}

export async function hydrateBlogProseWidgets(container: HTMLElement) {
	const widgetRoots: BlogProseWidgetRoot[] = []
	const mounts = container.querySelectorAll<HTMLElement>("[data-blog-widget]")

	for (const mount of mounts) {
		if (mount.dataset.blogWidgetHydrated === "true") {
			continue
		}

		let hydrated: BlogProseWidgetRoot | null = null

		switch (mount.dataset.blogWidget) {
			case "chart-area-linear":
				hydrated = await hydrateChartAreaLinear(mount)
				break
			case "images-carousel":
				hydrated = await hydrateImagesCarousel(mount)
				break
			case "links-review":
				hydrated = await hydrateLinksReview(mount)
				break
			case "corner-shape":
			case "clip-path":
			case "picker-icon":
			case "stretch":
			case "text-box":
			case "sibling-index":
				hydrated = await hydrateCssInteractiveWidget(
					mount,
					mount.dataset.blogWidget
				)
				break
			default:
				break
		}

		if (hydrated) {
			mount.dataset.blogWidgetHydrated = "true"
			widgetRoots.push(hydrated)
		}
	}

	return widgetRoots
}

export function unmountBlogProseWidgets(widgetRoots: BlogProseWidgetRoot[]) {
	for (const { root } of widgetRoots) {
		root.unmount()
	}
}
