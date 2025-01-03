"use client"

import { cn } from "@/utils"
import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import { Title } from "@/ui/title"

export const BookmarksLayout = ({
	children
}: {
	children: React.ReactNode
}) => {
	return <section className="mt-10 md:mt-24">{children}</section>
}

export const PageTitle = ({
	children,
	className,
	...props
}: {
	children: React.ReactNode
	className?: string
	props?: React.HTMLProps<HTMLHeadingElement>
}) => {
	return (
		<Container className="max-w-2xl">
			<motion.h2
				initial={{ opacity: 0, translateY: "100px" }}
				animate={{ opacity: 1, translateY: "0px" }}
				className={cn(className)}
				{...props}
			>
				<Title tag="h1">{children}</Title>
			</motion.h2>
		</Container>
	)
}

export const PageSubTitle = ({
	children,
	className,
	...props
}: {
	children: React.ReactNode
	className?: string
	props?: React.HTMLProps<HTMLHeadingElement>
}) => {
	return (
		<Container className="max-w-2xl">
			<motion.h2
				initial={{ opacity: 0, translateY: "100px" }}
				animate={{ opacity: 1, translateY: "0px" }}
				className={cn(className)}
				{...props}
			>
				<Title tag="h3" className="text-neutral-500">
					{children}
				</Title>
			</motion.h2>
		</Container>
	)
}

export const PageContent = ({
	children,
	className,
	...props
}: {
	children: React.ReactNode
	className?: string
	props?: React.HTMLProps<HTMLHeadingElement>
}) => {
	return (
		<Container className={cn("mt-6 md:mt-24 max-w-6xl", className)} {...props}>
			{children}
		</Container>
	)
}

BookmarksLayout.PageTitle = PageTitle
BookmarksLayout.PageSubTitle = PageSubTitle
BookmarksLayout.PageContent = PageContent

export default BookmarksLayout
