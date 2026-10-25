import { resolveCarouselImages } from "@/features/blog/helpers/resolve-carousel-images"
import type { BlogImagesCarouselProps } from "@/features/blog/types/images-carousel.types"

export function ImagesCarouselFallback({ images }: BlogImagesCarouselProps) {
	const resolvedImages = resolveCarouselImages(images)

	return (
		<div className="blog-images-carousel__fallback">
			{resolvedImages.map((image) => (
				<img
					key={image.src}
					src={image.src}
					srcSet={image.srcSet}
					sizes={image.sizes}
					alt={image.alt}
					loading="lazy"
					decoding="async"
					className="blog-images-carousel__fallback-image"
				/>
			))}
		</div>
	)
}
