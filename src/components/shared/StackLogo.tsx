import { STACK_LOGOS } from "@/constants/stack-logos.constants"

import { cn } from "@/lib/utils"

import { OptimizedImage } from "@/components/shared/OptimizedImage"

type StackLogoProps = {
	stackId: string
	label: string
	className?: string
	/** The logo sits next to its visible name (tag badges), so it gets an empty alt. */
	decorative?: boolean
}

const LOGO_SIZE = 56

/**
 * Logos load lazily: no logo is an LCP element, and eager images make React emit a
 * <link rel="preload"> for each one, which competes with the page's critical requests.
 */
export function StackLogo({
	stackId,
	label,
	className,
	decorative = false
}: StackLogoProps) {
	const logo = STACK_LOGOS[stackId]
	const alt = decorative ? "" : label
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
				role={decorative ? undefined : "img"}
				aria-label={decorative ? undefined : label}
				aria-hidden={decorative || undefined}
			>
				{label.slice(0, 2).toUpperCase()}
			</span>
		)
	}

	if (logo.kind === "theme") {
		// Both variants are in the HTML and CSS picks one, so the right logo shows before
		// hydration; a lazy image hidden with display: none is never downloaded.
		return (
			<>
				<OptimizedImage
					src={logo.light}
					alt={alt}
					width={LOGO_SIZE}
					height={LOGO_SIZE}
					className={cn(iconClassName, "dark:hidden")}
				/>
				<OptimizedImage
					src={logo.dark}
					alt={alt}
					width={LOGO_SIZE}
					height={LOGO_SIZE}
					className={cn(iconClassName, "hidden dark:block")}
				/>
			</>
		)
	}

	return (
		<OptimizedImage
			src={logo.src}
			alt={alt}
			width={logo.width}
			height={logo.height}
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
