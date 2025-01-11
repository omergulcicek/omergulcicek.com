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
		h1: "text-2xl md:text-4xl xl:text-6xl font-semibold",
		h2: "text-xl md:text-3xl xl:text-4xl font-semibold",
		h3: "text-base md:text-xl xl:text-2xl font-semibold"
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
