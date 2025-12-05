import type { EmblaCarouselType, EmblaPluginType } from "embla-carousel"

declare global {
	interface Window {
		gtag: (
			command: "event",
			eventName: string,
			parameters: {
				value?: number
				event_label?: string
				non_interaction?: boolean
				[key: string]: unknown
			}
		) => void
	}
}

declare module "embla-carousel-autoplay" {
	interface AutoplayOptionsType {
		delay?: number
		stopOnInteraction?: boolean | "reset"
		stopOnMouseEnter?: boolean
		stopOnFocusIn?: boolean
		playOnInit?: boolean
		stopOnInteractionCallback?: (emblaApi: EmblaCarouselType) => void
	}

	interface AutoplayPluginType extends EmblaPluginType {
		play: (jump?: boolean) => void
		stop: () => void
		reset: () => void
		isPlaying: () => boolean
	}

	const Autoplay: (options?: AutoplayOptionsType) => AutoplayPluginType

	export default Autoplay
}

export {}
