import { OptimizedImage } from "@/components/shared/optimized-image"
import { VIRASTACK_LOGO } from "@/lib/media/build-static-thumb-image"
import { cn } from "@/lib/utils"

type VirastackLogoProps = {
	className?: string
	label?: string
}

export function VirastackLogo({
	className,
	label = "ViraStack"
}: VirastackLogoProps) {
	return (
		<OptimizedImage
			src={VIRASTACK_LOGO.src}
			alt={label}
			width={VIRASTACK_LOGO.width}
			height={VIRASTACK_LOGO.height}
			loading="lazy"
			decoding="async"
			sources={[
				{
					type: "image/webp",
					srcSet: VIRASTACK_LOGO.srcSet
				}
			]}
			className={cn("object-contain", className)}
		/>
	)
}
