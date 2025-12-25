"use client"

import * as React from "react"

import type {
	EmblaCarouselType,
	EmblaOptionsType,
	EmblaPluginType
} from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

type CarouselOrientation = "horizontal" | "vertical"

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	opts?: EmblaOptionsType
	plugins?: EmblaPluginType[]
	orientation?: CarouselOrientation
	setApi?: (api: EmblaCarouselType) => void
}

type CarouselContextType = {
	api: EmblaCarouselType | undefined
	scrollPrev: () => void
	scrollNext: () => void
	canScrollPrev: boolean
	canScrollNext: boolean
	orientation: CarouselOrientation
}

const CarouselContext = React.createContext<CarouselContextType | null>(null)

function useCarouselContext() {
	const context = React.useContext(CarouselContext)

	if (!context) {
		throw new Error("useCarouselContext must be used within <Carousel>")
	}

	return context
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
	(
		{
			orientation = "horizontal",
			opts,
			setApi,
			plugins,
			className,
			children,
			...props
		},
		ref
	) => {
		const [emblaRef, emblaApi] = useEmblaCarousel(
			{
				axis: orientation === "horizontal" ? "x" : "y",
				...opts
			},
			plugins
		)

		const [canScrollPrev, setCanScrollPrev] = React.useState(false)
		const [canScrollNext, setCanScrollNext] = React.useState(false)

		const onSelect = React.useCallback(() => {
			if (!emblaApi) return

			setCanScrollPrev(emblaApi.canScrollPrev())
			setCanScrollNext(emblaApi.canScrollNext())
		}, [emblaApi])

		const scrollPrev = React.useCallback(() => {
			emblaApi?.scrollPrev()
		}, [emblaApi])

		const scrollNext = React.useCallback(() => {
			emblaApi?.scrollNext()
		}, [emblaApi])

		React.useEffect(() => {
			if (!emblaApi) return

			onSelect()
			emblaApi.on("select", onSelect)
			emblaApi.on("reInit", onSelect)

			if (setApi) {
				setApi(emblaApi)
			}
		}, [emblaApi, onSelect, setApi])

		return (
			<div ref={ref} className={cn("relative", className)} {...props}>
				<div ref={emblaRef} className="overflow-hidden">
					<CarouselContext.Provider
						value={{
							api: emblaApi ?? undefined,
							scrollPrev,
							scrollNext,
							canScrollPrev,
							canScrollNext,
							orientation
						}}
					>
						{children}
					</CarouselContext.Provider>
				</div>
			</div>
		)
	}
)
Carousel.displayName = "Carousel"

interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
	({ className, children, ...props }, ref) => {
		const { orientation } = useCarouselContext()

		return (
			<div
				ref={ref}
				className={cn(
					"flex",
					orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
					className
				)}
				{...props}
			>
				{React.Children.map(children, (child) => {
					if (!React.isValidElement(child)) return child
					return React.cloneElement(child, {
						// @ts-ignore
						className: cn("pl-4", child.props.className)
					})
				})}
			</div>
		)
	}
)
CarouselContent.displayName = "CarouselContent"

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
	({ className, ...props }, ref) => {
		const { orientation } = useCarouselContext()

		return (
			<div
				ref={ref}
				role="group"
				aria-roledescription="slide"
				className={cn(
					"min-w-0 shrink-0 grow-0 basis-full",
					orientation === "horizontal" ? "pr-4" : "pb-4",
					className
				)}
				{...props}
			/>
		)
	}
)
CarouselItem.displayName = "CarouselItem"

interface CarouselButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const baseButtonClasses =
	"inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"

const CarouselPrevious = React.forwardRef<
	HTMLButtonElement,
	CarouselButtonProps
>(({ className, ...props }, ref) => {
	const { scrollPrev, canScrollPrev } = useCarouselContext()

	return (
		<button
			ref={ref}
			type="button"
			onClick={scrollPrev}
			disabled={!canScrollPrev}
			className={cn(
				baseButtonClasses,
				"absolute left-2 top-1/2 -translate-y-1/2",
				className
			)}
			aria-label="Previous slide"
			{...props}
		>
			<ChevronLeft className="h-4 w-4" />
		</button>
	)
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselButtonProps>(
	({ className, ...props }, ref) => {
		const { scrollNext, canScrollNext } = useCarouselContext()

		return (
			<button
				ref={ref}
				type="button"
				onClick={scrollNext}
				disabled={!canScrollNext}
				className={cn(
					baseButtonClasses,
					"absolute right-2 top-1/2 -translate-y-1/2",
					className
				)}
				aria-label="Next slide"
				{...props}
			>
				<ChevronRight className="h-4 w-4" />
			</button>
		)
	}
)
CarouselNext.displayName = "CarouselNext"

export {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselContextType
}
