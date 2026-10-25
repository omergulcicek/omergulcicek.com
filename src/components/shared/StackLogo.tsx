import { STACK_LOGOS } from "@/constants/stack-logos.constants"

import { cn } from "@/lib/utils"

import { OptimizedImage } from "@/components/shared/OptimizedImage"
import { ThemeAwareDualIcon } from "@/components/shared/ThemeAwareDualIcon"

type StackLogoProps = {
	stackId: string
	label: string
	className?: string
}

export function StackLogo({ stackId, label, className }: StackLogoProps) {
	const logo = STACK_LOGOS[stackId]
	const iconClassName = cn(
		"size-full max-h-full max-w-full object-contain",
		className
	)

	if (!logo) {
		return (
			<span
				className={cn(
					"text-muted-foreground flex size-full items-center justify-center text-[10px] font-medium",
					className
				)}
				role="img"
				aria-label={label}
			>
				{label.slice(0, 2).toUpperCase()}
			</span>
		)
	}

	if (logo.kind === "theme") {
		return (
			<ThemeAwareDualIcon
				light={logo.light}
				dark={logo.dark}
				className={iconClassName}
				label={label}
			/>
		)
	}

	if (logo.kind === "image") {
		return (
			<OptimizedImage
				src={logo.src}
				alt={label}
				width={logo.width}
				height={logo.height}
				loading="eager"
				decoding="async"
				sources={
					logo.srcSet
						? [{ type: "image/webp", srcSet: logo.srcSet }]
						: undefined
				}
				className={iconClassName}
			/>
		)
	}

	const Icon = logo.icon

	return (
		<Icon
			className={cn(iconClassName, logo.invertOnDark && "dark:invert")}
			role="img"
			aria-label={label}
		/>
	)
}
