import * as React from "react"
import type { SVGProps } from "react"

export const Zod = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width="1em"
		height="1em"
		viewBox="0 0 256 203"
		{...props}
	>
		<defs>
			<filter
				id="zod__a"
				width="105.2%"
				height="106.5%"
				x="-2.2%"
				y="-2.8%"
				filterUnits="objectBoundingBox"
			>
				<feOffset dx={1} dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
				<feGaussianBlur
					in="shadowOffsetOuter1"
					result="shadowBlurOuter1"
					stdDeviation={2}
				/>
				<feColorMatrix
					in="shadowBlurOuter1"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
				/>
			</filter>
			<path
				id="zod__b"
				d="M200.42 0H53.63L0 53.355l121.76 146.624 9.714-10.9L252 53.857 200.42 0Zm-5.362 12.562 39.84 41.6-112.8 126.558L17 54.162l41.815-41.6h136.243Z"
			/>
		</defs>
		<path
			fill="#18253F"
			d="M60.816 14.033h136.278l39.933 41.69-112.989 126.554L18.957 55.724z"
		/>
		<path
			fill="#274D82"
			d="M151.427 152.386H98.013l-24.124-29.534 68.364-.002.002-4.19h39.078z"
		/>
		<path
			fill="#274D82"
			d="m225.56 43.834-147.382 85.09-19.226-24.051 114.099-65.877-2.096-3.631 30.391-17.546zM146.596 14.075 35.93 77.968 18.719 56.483l74.095-42.78z"
		/>
		<g transform="translate(2 1.51)">
			<use xlinkHref="#zod__b" filter="url(#zod__a)" />
			<use xlinkHref="#zod__b" fill="#3068B7" />
		</g>
	</svg>
)
