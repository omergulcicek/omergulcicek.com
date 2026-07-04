import { Link } from "@tanstack/react-router"
import { flowerRose } from "@lucide/lab"
import { Icon } from "lucide-react"

import { HEADER_BRAND } from "@/constants/header-nav.constants"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { HERO_IMAGE } from "@/features/home/constants/hero-image.constants"
import { clearedRouteSearch } from "@/lib/router/cleared-route-search"
import { cn } from "@/lib/utils"

type BrandMarkProps = {
	className?: string
	variant?: "icon" | "profile"
}

export function BrandMark({ className, variant = "icon" }: BrandMarkProps) {
	return (
		<Link
			to={HEADER_BRAND.href}
			search={clearedRouteSearch}
			aria-label={variant === "icon" ? HEADER_BRAND.ariaLabel : undefined}
			className={cn(
				"text-foreground hover:text-foreground/80 transition-colors",
				variant === "profile" && "inline-flex items-center gap-2",
				className
			)}
		>
			{variant === "profile" ? (
				<>
					<img
						src={HERO_IMAGE.sources.jpeg}
						alt=""
						width={28}
						height={28}
						loading="lazy"
						decoding="async"
						className="size-7 shrink-0 rounded object-cover object-bottom ring-1 ring-border"
					/>
					<span className="text-sm">{SITE_CONTENT.displayName}</span>
				</>
			) : (
				<Icon iconNode={flowerRose} className="size-5" strokeWidth={1.75} />
			)}
		</Link>
	)
}
