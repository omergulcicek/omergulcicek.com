import type { SVGProps } from "react"

import { cn } from "@/lib/utils"

export function TurkuazLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 109 162"
			aria-hidden="true"
			className={cn("shrink-0", className)}
			{...props}
		>
			<g
				transform="translate(0 162) scale(0.1 -0.1)"
				stroke="none"
				fill="currentColor"
			>
				<path d="M20 1083 c0 -570 2 -588 61 -706 65 -128 168 -231 295 -295 110 -55 156 -62 433 -62 l251 0 0 38 c0 104 -61 202 -153 245 -44 21 -72 26 -180 30 -106 5 -136 10 -180 30 -76 35 -122 79 -159 155 l-33 67 -5 410 -5 410 -27 47 c-54 91 -152 148 -254 148 l-44 0 0 -517z" />
				<path d="M490 1048 c-91 -63 -93 -204 -3 -264 69 -46 223 -38 302 16 25 18 58 49 73 70 27 37 58 132 58 177 l0 23 -199 0 c-189 0 -200 -1 -231 -22z" />
			</g>
		</svg>
	)
}
