import Balancer from "react-wrap-balancer"

import { cn } from "@/utils"

import { TitleProps } from "@/types"

export function Title({
	tag: Tag = "h1",
	children,
	className,
	...props
}: TitleProps) {
	const tagClassNames: { [key: string]: string } = {
		h1: "text-2xl md:text-6xl font-bold leading-normal",
		h2: "text-base md:text-3xl font-light leading-normal",
		h3: "text-sm md:text-lg font-medium leading-normal"
	}

	const classes = cn(tagClassNames[Tag], className)

	return (
		<Balancer>
			<Tag className={classes} {...props}>
				{children}
			</Tag>
		</Balancer>
	)
}
