import * as React from "react"
import type { SVGProps } from "react"

export const Turkiye = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1200"
		height="800"
		viewBox="0 -30000 90000 60000"
		{...props}
	>
		<path fill="#e30a17" d="m0-30000h90000v60000H0z" />
		<path
			fill="#fff"
			d="m41750 0 13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 1 1 0-16042 12000 12000 0 1 0 0 16042z"
		/>
	</svg>
)
