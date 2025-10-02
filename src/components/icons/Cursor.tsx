import * as React from "react"
import { SVGProps } from "react"

export const Cursor = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		style={{ flex: "none", lineHeight: "1" }}
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="url(#lobe-icons-cursorundefined-fill-0)"
			d="m11.925 24 10.425-6-10.425-6L1.5 18z"
		></path>
		<path
			fill="url(#lobe-icons-cursorundefined-fill-1)"
			d="M22.35 18V6L11.925 0v12z"
		></path>
		<path
			fill="url(#lobe-icons-cursorundefined-fill-2)"
			d="M11.925 0 1.5 6v12l10.425-6z"
		></path>
		<path fill="#555" d="M22.35 6 11.925 24V12z"></path>
		<path d="m22.35 6-10.425 6L1.5 6z"></path>
		<defs>
			<linearGradient
				id="lobe-icons-cursorundefined-fill-0"
				x1="11.925"
				x2="11.925"
				y1="12"
				y2="24"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0.16" stopOpacity="0.39"></stop>
				<stop offset="0.658" stopOpacity="0.8"></stop>
			</linearGradient>
			<linearGradient
				id="lobe-icons-cursorundefined-fill-1"
				x1="22.35"
				x2="11.925"
				y1="6.037"
				y2="12.15"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0.182" stopOpacity="0.31"></stop>
				<stop offset="0.715" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="lobe-icons-cursorundefined-fill-2"
				x1="11.925"
				x2="1.5"
				y1="0"
				y2="18"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopOpacity="0.6"></stop>
				<stop offset="0.667" stopOpacity="0.22"></stop>
			</linearGradient>
		</defs>
	</svg>
)
