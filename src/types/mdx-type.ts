import React from "react"

export interface PreProps {
	children: React.ReactNode
	className?: string
	[key: string]: unknown
}

export interface CodeProps {
	children: React.ReactNode
	className?: string
	[key: string]: unknown
}

export interface LinkProps {
	href?: string
	children: React.ReactNode
	className?: string
	[key: string]: unknown
}

export interface ImageProps {
	src?: string
	alt?: string
	className?: string
	[key: string]: unknown
}

export interface MdxContentProps {
	content: string
}
