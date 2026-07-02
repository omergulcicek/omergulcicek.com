const BLOG_IMAGE_BLEED_MIN_WIDTH = 480
const BLOG_IMAGE_BLEED_MIN_ASPECT_RATIO = 1.25
const BLOG_IMAGE_FULL_MIN_WIDTH = 720
const BLOG_IMAGE_FULL_MIN_ASPECT_RATIO = 1.85

function isBlogImageWideEnough(naturalWidth: number, naturalHeight: number) {
	if (naturalWidth < BLOG_IMAGE_BLEED_MIN_WIDTH) {
		return false
	}

	return naturalWidth / naturalHeight >= BLOG_IMAGE_BLEED_MIN_ASPECT_RATIO
}

function isBlogImageFullBleed(naturalWidth: number, naturalHeight: number) {
	if (naturalWidth < BLOG_IMAGE_FULL_MIN_WIDTH) {
		return false
	}

	return naturalWidth / naturalHeight >= BLOG_IMAGE_FULL_MIN_ASPECT_RATIO
}

export function enhanceBlogProseImages(container: HTMLElement) {
	const images = Array.from(container.querySelectorAll<HTMLImageElement>("img"))

	for (const image of images) {
		image.dataset.zoomable = ""

		const applyBleed = () => {
			const { naturalWidth, naturalHeight } = image

			if (naturalWidth <= 0 || naturalHeight <= 0) {
				return
			}

			if (isBlogImageFullBleed(naturalWidth, naturalHeight)) {
				image.dataset.bleed = "full"
				return
			}

			if (isBlogImageWideEnough(naturalWidth, naturalHeight)) {
				image.dataset.bleed = "wide"
			}
		}

		if (image.complete && image.naturalWidth > 0) {
			applyBleed()
			continue
		}

		image.addEventListener("load", applyBleed, { once: true })
	}

	return images
}
