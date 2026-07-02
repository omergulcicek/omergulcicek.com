import {
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useState,
	type ComponentProps,
	type HTMLAttributes
} from "react"

import type {
	EmblaCarouselType,
	EmblaOptionsType,
	EmblaPluginType
} from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

type CarouselOrientation = "horizontal" | "vertical"

type CarouselProps = HTMLAttributes<HTMLDivElement> & {
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

const CarouselContext = createContext<CarouselContextType | null>(null)

function useCarouselContext() {
	const context = useContext(CarouselContext)

	if (!context) {
		throw new Error("useCarouselContext must be used within <Carousel>")
	}

	return context
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
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

		const [canScrollPrev, setCanScrollPrev] = useState(false)
		const [canScrollNext, setCanScrollNext] = useState(false)

		const onSelect = useCallback(() => {
			if (!emblaApi) {
				return
			}

			setCanScrollPrev(emblaApi.canScrollPrev())
			setCanScrollNext(emblaApi.canScrollNext())
		}, [emblaApi])

		const scrollPrev = useCallback(() => {
			emblaApi?.scrollPrev()
		}, [emblaApi])

		const scrollNext = useCallback(() => {
			emblaApi?.scrollNext()
		}, [emblaApi])

		useEffect(() => {
			if (!emblaApi) {
				return
			}

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

const CarouselContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
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
				{children}
			</div>
		)
	}
)
CarouselContent.displayName = "CarouselContent"

const CarouselItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { orientation } = useCarouselContext()

		return (
			<div
				ref={ref}
				role="group"
				aria-roledescription="slide"
				className={cn(
					"min-w-0 shrink-0 grow-0 basis-full",
					orientation === "horizontal" ? "pl-4" : "pb-4",
					className
				)}
				{...props}
			/>
		)
	}
)
CarouselItem.displayName = "CarouselItem"

const carouselButtonClass =
	"inline-flex size-8 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-[box-shadow,transform,background-color,color] duration-150 ease-out hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.96]"

const CarouselPrevious = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
	({ className, ...props }, ref) => {
		const { scrollPrev, canScrollPrev } = useCarouselContext()

		return (
			<button
				ref={ref}
				type="button"
				onClick={scrollPrev}
				disabled={!canScrollPrev}
				className={cn(
					carouselButtonClass,
					"absolute top-1/2 left-2 -translate-y-1/2",
					className
				)}
				aria-label="Previous slide"
				{...props}
			>
				<ChevronLeft className="size-4" />
			</button>
		)
	}
)
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
	({ className, ...props }, ref) => {
		const { scrollNext, canScrollNext } = useCarouselContext()

		return (
			<button
				ref={ref}
				type="button"
				onClick={scrollNext}
				disabled={!canScrollNext}
				className={cn(
					carouselButtonClass,
					"absolute top-1/2 right-2 -translate-y-1/2",
					className
				)}
				aria-label="Next slide"
				{...props}
			>
				<ChevronRight className="size-4" />
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
	CarouselPrevious
}
