import Balancer from "react-wrap-balancer"

import { cn } from "@/utils"

import { TitleProps } from "@/types"

export default function Title({
	tag: Tag = "h1",
	children,
	className,
	...props
}: TitleProps) {
	const tagClassNames: { [key: string]: string } = {
		h1: "text-3xl md:text-6xl font-bold leading-normal",
		h2: "text-lg md:text-3xl font-light leading-normal text-tertiary-foreground",
		h3: "text-base md:text-lg font-medium leading-normal text-tertiary-foreground"
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
