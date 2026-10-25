import { createElement, type ComponentType } from "react"
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

/** Each CSS demo is its own chunk, loaded only when its widget is on the page. */
const CSS_DEMO_LOADERS = {
	"corner-shape": async () =>
		(
			await import("@/features/blog/components/css-demos/CornerShapeDemo.client")
		).CornerShapeDemo,
	"clip-path": async () =>
		(await import("@/features/blog/components/css-demos/ClipPathDemo.client"))
			.ClipPathDemo,
	"picker-icon": async () =>
		(await import("@/features/blog/components/css-demos/PickerIconDemo.client"))
			.PickerIconDemo,
	stretch: async () =>
		(await import("@/features/blog/components/css-demos/StretchDemo.client"))
			.StretchDemo,
	"text-box": async () =>
		(await import("@/features/blog/components/css-demos/TextBoxDemo.client"))
			.TextBoxDemo,
	"sibling-index": async () =>
		(
			await import("@/features/blog/components/css-demos/SiblingIndexDemo.client")
		).SiblingIndexDemo
} satisfies Record<BlogCssInteractiveWidget, () => Promise<ComponentType>>

async function hydrateCssInteractiveWidget(
	mount: HTMLElement,
	widget: BlogCssInteractiveWidget
) {
	const Client = await CSS_DEMO_LOADERS[widget]()
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

	const { BlogChartAreaLinearClient } =
		await import("@/features/blog/components/BlogChartAreaLinearClient.client")
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

	const { BlogImagesCarouselClient } =
		await import("@/features/blog/components/BlogImagesCarouselClient.client")
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

	const { BlogLinksReviewClient } =
		await import("@/features/blog/components/BlogLinksReviewClient.client")
	const root = createRoot(mount)

	root.render(createElement(BlogLinksReviewClient, props))

	return { root, mount }
}

async function hydrateViraMaskDemo(mount: HTMLElement) {
	const { BlogViraMaskDemoClient } =
		await import("@/features/blog/components/BlogViraMaskDemoClient.client")
	const root = createRoot(mount)

	root.render(createElement(BlogViraMaskDemoClient))

	return { root, mount }
}

async function hydrateViraPasswordDemo(mount: HTMLElement) {
	const { BlogViraPasswordDemoClient } =
		await import("@/features/blog/components/BlogViraPasswordDemoClient.client")
	const root = createRoot(mount)

	root.render(createElement(BlogViraPasswordDemoClient))

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
			case "vira-mask-demo":
				hydrated = await hydrateViraMaskDemo(mount)
				break
			case "vira-password-demo":
				hydrated = await hydrateViraPasswordDemo(mount)
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
