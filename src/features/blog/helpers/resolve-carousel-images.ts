import { buildBlogCarouselResponsiveImage } from "@/lib/media/build-blog-responsive-image"
import type { BlogImagesCarouselProps } from "@/features/blog/types/images-carousel.types"

export function resolveCarouselImages(images: BlogImagesCarouselProps["images"]) {
	return images.map((image) => {
		const responsive = buildBlogCarouselResponsiveImage(image.src)

		return {
			...image,
			...responsive
		}
	})
}
