import type { SVGProps } from "react"

const DEFAULT_SIZE = 16

export const TanStack = (props: SVGProps<SVGSVGElement>) => {
	const width = props.width != null ? Number(props.width) : DEFAULT_SIZE
	const height = props.height != null ? Number(props.height) : DEFAULT_SIZE

	return (
		<figure
			className="inline-flex shrink-0 items-center justify-center"
			style={{ width, height }}
		>
			<img
				src="/logo/tanstack.png"
				alt="TanStack"
				width={width}
				height={height}
				className="size-full object-contain"
			/>
		</figure>
	)
}
