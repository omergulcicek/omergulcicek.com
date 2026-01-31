import type { SVGProps } from "react"

const DEFAULT_SIZE = 80

export const TanStack = (props: SVGProps<SVGSVGElement>) => {
	const width = props.width != null ? Number(props.width) : DEFAULT_SIZE
	const height = props.height != null ? Number(props.height) : DEFAULT_SIZE

	return (
		<figure>
			<img src="/logo/tanstack.png" alt="TanStack" width={width} height={height} />
		</figure>
	)
}
