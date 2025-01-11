import React from "react"

import BlurFade from "@/ui/blur-fade"

import { cn } from "@/utils"

import heroData from "@/data/hero-data"

export const Hero = ({ children }: { children: React.ReactNode }) => {
	return <>{children}</>
}

export const Hello = ({
	className,
	...props
}: {
	className?: string
	props?: React.HTMLProps<HTMLHeadingElement>
}) => {
	const { hi } = heroData

	return (
		<BlurFade delay={0.1} inView>
			<span
				className={cn(
					"block text-base md:text-2xl font-light leading-7 text-secondary-foreground",
					className
				)}
				{...props}
			>
				{hi}
			</span>
		</BlurFade>
	)
}

export const Name = ({
	className,
	...props
}: {
	className?: string
	props?: React.HTMLProps<HTMLHeadingElement>
}) => {
	const { name } = heroData

	return (
		<BlurFade delay={0.25} inView>
			<h1
				className={cn(
					"text-xl md:text-[40px] font-semibold md:leading-[48px]",
					className
				)}
				{...props}
			>
				{name}
			</h1>
		</BlurFade>
	)
}

export const Strong = ({
	className,
	...props
}: {
	className?: string
	props?: React.HTMLProps<HTMLHeadingElement>
}) => {
	const { strong } = heroData

	return (
		<BlurFade delay={0.5} inView>
			<strong className={cn("font-semibold underline", className)} {...props}>
				{strong}
			</strong>
		</BlurFade>
	)
}

export const Desc = ({
	className,
	...props
}: {
	className?: string
	props?: React.HTMLProps<HTMLHeadingElement>
}) => {
	const { desc } = heroData

	return (
		<BlurFade delay={0.5} inView>
			<span className={cn("font-light", className)} {...props}>
				{desc}
			</span>
		</BlurFade>
	)
}

Hero.Hello = Hello
Hero.Name = Name
Hero.Strong = Strong
Hero.Desc = Desc

export default Hero
