import type { ComponentType, ReactNode, SVGProps } from "react"

import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

type ThemeAwareDualIconProps = {
	light: ComponentType<SVGProps<SVGSVGElement>>
	dark: ComponentType<SVGProps<SVGSVGElement>>
	className?: string
	label: string
}

export function ThemeAwareDualIcon({
	light: LightIcon,
	dark: DarkIcon,
	className,
	label
}: ThemeAwareDualIconProps): ReactNode {
	const { theme, isMounted } = useTheme()
	const iconClassName = cn(className)

	if (!isMounted) {
		return (
			<LightIcon className={iconClassName} role="img" aria-label={label} />
		)
	}

	if (theme === "dark") {
		return <DarkIcon className={iconClassName} role="img" aria-label={label} />
	}

	return <LightIcon className={iconClassName} role="img" aria-label={label} />
}
