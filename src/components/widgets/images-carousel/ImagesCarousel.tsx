"use client"

import React from "react"
import Image from "next/image"

import Autoplay from "embla-carousel-autoplay"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/ui"

interface CarouselImageItem {
	src: string
	alt: string
}

interface ImagesCarouselProps {
	images: CarouselImageItem[]
}

export function ImagesCarousel({ images }: ImagesCarouselProps) {
	const autoplayPlugin = React.useRef(
		Autoplay({
			delay: 2500,
			stopOnInteraction: true
		})
	)

	return (
		<>
			<Carousel
				opts={{
					align: "start",
					loop: true
				}}
				plugins={[autoplayPlugin.current]}
				className="w-full max-w-3xl mx-auto"
				onMouseEnter={autoplayPlugin.current.stop}
				onMouseLeave={autoplayPlugin.current.reset}
			>
				<CarouselContent>
					{images?.map((image) => (
						<CarouselItem key={image.src} className="md:basis-1/2 lg:basis-1/3">
							<Image
								src={image.src}
								alt={image.alt}
								width={664}
								height={384}
								className="h-96 w-[664px] object-contain !my-0"
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</>
	)
}
