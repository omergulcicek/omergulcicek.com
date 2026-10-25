import { cn } from "@/lib/utils"

import { VIRASTACK_DITHER_DISPLAY_PX } from "@/features/projects/constants/virastack-dither.constants"
import { useVirastackDither } from "@/features/projects/hooks/use-virastack-dither"

type VirastackDitherProps = {
	className?: string
}

export function VirastackDither({ className }: VirastackDitherProps) {
	const canvasRef = useVirastackDither()

	return (
		<canvas
			ref={canvasRef}
			className={cn("touch-none cursor-default", className)}
			style={{
				width: VIRASTACK_DITHER_DISPLAY_PX,
				height: VIRASTACK_DITHER_DISPLAY_PX
			}}
			width={VIRASTACK_DITHER_DISPLAY_PX}
			height={VIRASTACK_DITHER_DISPLAY_PX}
			aria-hidden
		/>
	)
}
