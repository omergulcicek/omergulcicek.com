"use client"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import { Title } from "@/ui/title"

import { cn } from "@/utils"

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
				<Title tag="h1" className="md:mb-4">
					{children}
				</Title>
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
			<motion.p
				initial={{ opacity: 0, translateY: "100px" }}
				animate={{ opacity: 1, translateY: "0px" }}
				className={cn(className)}
				{...props}
			>
				<p className="text-base md:text-2xl text-neutral-500">{children}</p>
			</motion.p>
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
