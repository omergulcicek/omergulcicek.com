"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { navItemsData } from "@/data"

export function HeaderNavDesktop() {
	const pathname = usePathname()

	return (
		<nav
			role="navigation"
			aria-label="Ana navigasyon"
			className="flex items-center"
		>
			{navItemsData.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						"cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium rounded-md transition-all hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 px-3 h-8",
						pathname === item.href ||
							(pathname.startsWith(item.href) && item.href !== "/")
							? "text-foreground"
							: "text-muted-foreground"
					)}
				>
					{item.label}
				</Link>
			))}
		</nav>
	)
}
