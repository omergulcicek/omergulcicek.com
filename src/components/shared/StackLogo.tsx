import { STACK_LOGOS } from "@/constants/stack-logos.constants"

import { cn } from "@/lib/utils"

import { OptimizedImage } from "@/components/shared/OptimizedImage"

type StackLogoProps = {
	stackId: string
	label: string
	className?: string
}

const LOGO_SIZE = 56

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
		// Both variants are in the HTML and CSS picks one, so the right logo shows before hydration.
		return (
			<>
				<OptimizedImage
					src={logo.light}
					alt={label}
					width={LOGO_SIZE}
					height={LOGO_SIZE}
					loading="eager"
					className={cn(iconClassName, "dark:hidden")}
				/>
				<OptimizedImage
					src={logo.dark}
					alt={label}
					width={LOGO_SIZE}
					height={LOGO_SIZE}
					loading="eager"
					className={cn(iconClassName, "hidden dark:block")}
				/>
			</>
		)
	}

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
			className={cn(
				iconClassName,
				logo.round && "rounded-full object-cover",
				logo.invertOnDark && "dark:invert"
			)}
		/>
	)
}
