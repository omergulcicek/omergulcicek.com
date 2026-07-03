import { serializeBlogWidgetProps } from "@/features/blog/helpers/blog-widget-props"
import { resolveBlogImageSrc } from "@/lib/media/resolve-blog-media-url"
import type { BlogImagesCarouselProps } from "@/features/blog/types/images-carousel.types"

function resolveCarouselImages(images: BlogImagesCarouselProps["images"]) {
	return images.map((image) => ({
		...image,
		src: resolveBlogImageSrc(image.src)
	}))
}

function BlogImagesCarouselFallback({ images }: BlogImagesCarouselProps) {
	const resolvedImages = resolveCarouselImages(images)

	return (
		<div className="blog-images-carousel__fallback">
			{resolvedImages.map((image) => (
				<img
					key={image.src}
					src={image.src}
					alt={image.alt}
					loading="lazy"
					decoding="async"
					className="blog-images-carousel__fallback-image"
				/>
			))}
		</div>
	)
}

export function ImagesCarousel(props: BlogImagesCarouselProps) {
	return (
		<div
			className="blog-widget-mount blog-images-carousel-mount not-prose"
			data-blog-widget="images-carousel"
			data-blog-widget-props={serializeBlogWidgetProps(props)}
		>
			<BlogImagesCarouselFallback {...props} />
		</div>
	)
}
