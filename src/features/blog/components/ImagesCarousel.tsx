import { ImagesCarouselFallback } from "@/features/blog/components/ImagesCarouselFallback"
import { serializeBlogWidgetProps } from "@/features/blog/helpers/blog-widget-props"
import type { BlogImagesCarouselProps } from "@/features/blog/types/images-carousel.types"

export function ImagesCarousel(props: BlogImagesCarouselProps) {
	return (
		<div
			className="blog-widget-mount blog-images-carousel-mount not-prose"
			data-blog-widget="images-carousel"
			data-blog-widget-props={serializeBlogWidgetProps(props)}
		>
			<ImagesCarouselFallback {...props} />
		</div>
	)
}
