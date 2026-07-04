import { env } from "@/env"
import { getMediaSrcSet, getMediaUrl } from "@/lib/media/get-media-url"

export const BLOG_PROSE_IMAGE_SIZES =
	"(max-width: 768px) 100vw, (max-width: 1280px) min(80rem, 100vw - 2rem), 1280px"

export const BLOG_CAROUSEL_IMAGE_SIZES =
	"(max-width: 640px) 88vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 33vw"

const BLOG_PROSE_IMAGE_WIDTHS = [640, 960, 1280, 1600, 1920, 2560] as const
const BLOG_CAROUSEL_IMAGE_WIDTHS = [480, 640, 768, 960, 1280] as const

export type BlogResponsiveImage = {
	src: string
	srcSet?: string
	sizes?: string
}

function isExternalOrInlineSrc(src: string): boolean {
	return (
		src.startsWith("http://") ||
		src.startsWith("https://") ||
		src.startsWith("data:")
	)
}

function normalizeBlogImagePath(src: string): string {
	return src.startsWith("/") ? src.slice(1) : src
}

function canUseResponsiveTransforms(): boolean {
	return env.VITE_MEDIA_PROVIDER !== "local"
}

function buildResponsiveImage(
	src: string,
	widths: readonly number[],
	sizes: string,
	defaultWidth: number
): BlogResponsiveImage {
	if (isExternalOrInlineSrc(src)) {
		return { src }
	}

	const path = normalizeBlogImagePath(src)

	if (!canUseResponsiveTransforms()) {
		return { src: getMediaUrl(path) }
	}

	const srcSet = getMediaSrcSet(path, {
		widths: widths.map((width) => ({ width }))
	})

	if (!srcSet) {
		return { src: getMediaUrl(path) }
	}

	return {
		src: getMediaUrl(path, { transform: { width: defaultWidth } }),
		srcSet,
		sizes
	}
}

export function buildBlogProseResponsiveImage(src: string): BlogResponsiveImage {
	return buildResponsiveImage(
		src,
		BLOG_PROSE_IMAGE_WIDTHS,
		BLOG_PROSE_IMAGE_SIZES,
		1280
	)
}

export function buildBlogCarouselResponsiveImage(
	src: string
): BlogResponsiveImage {
	return buildResponsiveImage(
		src,
		BLOG_CAROUSEL_IMAGE_WIDTHS,
		BLOG_CAROUSEL_IMAGE_SIZES,
		960
	)
}
