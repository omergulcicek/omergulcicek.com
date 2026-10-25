import { useEffect, useLayoutEffect, useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

import { cn } from "@/lib/utils"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import { resolveCarouselImages } from "@/features/blog/helpers/resolve-carousel-images"
import {
	openBlogProseImageZoom,
	registerBlogProseZoomableRoot
} from "@/features/blog/lib/blog-prose-image-zoom"
import type { BlogImagesCarouselProps } from "@/features/blog/types/images-carousel.types"

export function BlogImagesCarouselClient({ images }: BlogImagesCarouselProps) {
	const resolvedImages = resolveCarouselImages(images)
	const figureRef = useRef<HTMLElement>(null)
	const autoplayPlugin = useRef(
		Autoplay({
			delay: 2800,
			stopOnInteraction: true
		})
	)

	useLayoutEffect(() => {
		const figure = figureRef.current

		if (!figure) {
			return
		}

		registerBlogProseZoomableRoot(figure)
	}, [images])

	useEffect(() => {
		const plugin = autoplayPlugin.current

		return () => {
			plugin.stop()
		}
	}, [])

	return (
		<figure ref={figureRef} className="blog-images-carousel not-prose">
			<Carousel
				opts={{
					align: "start",
					loop: resolvedImages.length > 1
				}}
				plugins={[autoplayPlugin.current]}
				className="blog-images-carousel__viewport"
				onMouseEnter={autoplayPlugin.current.stop}
				onMouseLeave={autoplayPlugin.current.reset}
			>
				<CarouselContent className="-ml-3 md:-ml-4">
					{resolvedImages.map((image) => (
						<CarouselItem
							key={image.src}
							className="basis-[88%] pl-3 sm:basis-[70%] md:basis-1/2 md:pl-4 lg:basis-1/3"
						>
							<div className="blog-images-carousel__slide">
								<img
									src={image.src}
									srcSet={image.srcSet}
									sizes={image.sizes}
									alt={image.alt}
									loading="lazy"
									decoding="async"
									data-zoomable=""
									onClick={(event) => {
										event.stopPropagation()
										openBlogProseImageZoom(event.currentTarget)
									}}
									className={cn(
										"blog-images-carousel__image",
										"my-0 h-auto max-h-96 w-full rounded-xl object-contain"
									)}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				{resolvedImages.length > 1 ? (
					<>
						<CarouselPrevious aria-label={BLOG_UI.carouselPrevious} />
						<CarouselNext aria-label={BLOG_UI.carouselNext} />
					</>
				) : null}
			</Carousel>
		</figure>
	)
}
