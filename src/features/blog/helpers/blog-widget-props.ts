import type { BlogChartAreaLinearProps } from "@/features/blog/types/chart-area-linear.types"
import type { BlogImagesCarouselProps } from "@/features/blog/types/images-carousel.types"
import type { BlogLinksReviewProps } from "@/features/blog/types/links-review.types"

export function serializeBlogWidgetProps<T>(props: T) {
	return JSON.stringify(props)
}

/**
 * Reads props serialized by `serializeBlogWidgetProps`. `isProps` re-checks the shape
 * because the value comes back from a DOM attribute as plain JSON.
 */
export function parseBlogWidgetProps<T>(
	value: string | undefined,
	isProps: (parsed: unknown) => parsed is T
): T | null {
	if (!value) {
		return null
	}

	try {
		const parsed: unknown = JSON.parse(value)

		return isProps(parsed) ? parsed : null
	} catch {
		return null
	}
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null
}

export function isChartAreaLinearProps(
	value: unknown
): value is BlogChartAreaLinearProps {
	return (
		isRecord(value) &&
		typeof value.title === "string" &&
		typeof value.description === "string" &&
		Array.isArray(value.data) &&
		isRecord(value.config)
	)
}

export function isImagesCarouselProps(
	value: unknown
): value is BlogImagesCarouselProps {
	return isRecord(value) && Array.isArray(value.images)
}

export function isLinksReviewProps(
	value: unknown
): value is BlogLinksReviewProps {
	return (
		isRecord(value) &&
		typeof value.title === "string" &&
		Array.isArray(value.links)
	)
}
