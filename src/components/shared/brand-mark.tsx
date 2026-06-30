import { Link } from "@tanstack/react-router"
import { flowerRose } from "@lucide/lab"
import { Icon } from "lucide-react"

import { HEADER_BRAND } from "@/constants/header-nav.constants"
import { cn } from "@/lib/utils"

type BrandMarkProps = {
	className?: string
}

export function BrandMark({ className }: BrandMarkProps) {
	return (
		<Link
			to={HEADER_BRAND.href}
			aria-label={HEADER_BRAND.ariaLabel}
			className={cn(
				"text-foreground hover:text-foreground/80 transition-colors",
				className
			)}
		>
			<Icon iconNode={flowerRose} className="size-5" strokeWidth={1.75} />
		</Link>
	)
}
