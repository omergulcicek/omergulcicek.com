import { OptimizedImage } from "@/components/shared/OptimizedImage"
import { ViraStackProductsVisual } from "@/features/journey/components/ViraStackProductsVisual"
import type { JourneyEntry } from "@/features/journey/types/journey.types"

const journeyImageFrameClassName =
	"mt-3 overflow-hidden rounded-xl border border-border ring-1 ring-border ring-offset-3 ring-offset-background md:mt-4"

export function JourneyEntryImage({ entry }: { entry: JourneyEntry }) {
	if (entry.visual === "virastack-products") {
		return (
			<figure className={journeyImageFrameClassName}>
				<ViraStackProductsVisual />
			</figure>
		)
	}

	if (!entry.imageSrc) {
		return null
	}

	return (
		<figure className={journeyImageFrameClassName}>
			<OptimizedImage
				src={entry.imageSrc}
				alt={entry.imageAlt ?? entry.title}
				width={672}
				height={378}
				loading="lazy"
				decoding="async"
				className="image-outline block aspect-video size-full object-cover"
				style={
					entry.imageObjectPosition
						? { objectPosition: entry.imageObjectPosition }
						: undefined
				}
			/>
		</figure>
	)
}
