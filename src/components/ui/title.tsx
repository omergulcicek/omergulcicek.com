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
		h1: "text-2xl md:text-4xl xl:text-6xl font-semibold mb-6 md:mb-10",
		h2: "text-xl md:text-3xl xl:text-4xl font-semibold my-3 xl:mt-8",
		h3: "text-base md:text-xl xl:text-2xl font-semibold my-2 md:mb-4 xl:mt-5"
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
