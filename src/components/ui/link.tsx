import Link from "next/link"

import { cn } from "@/utils"

export const LinkHover = ({
	href,
	children,
	rel,
	target,
	className,
	...props
}: {
	href: string
	rel?: string
	target?: string
	children: React.ReactNode
	className?: string
	props?: React.HTMLProps<HTMLHeadingElement>
}) => {
	return (
		<Link
			href={href}
			rel={rel}
			target={target}
			className={cn(
				"inline-flex cursor-pointer items-center gap-1 transition hover:text-black",
				className
			)}
			{...props}
		>
			{children}
		</Link>
	)
}
