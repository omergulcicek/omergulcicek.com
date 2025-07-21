"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { Container } from "@/shared"

import { NAV_ITEMS } from "@/data"

export function Header() {
	const pathname = usePathname()

	return (
		<header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<Container className="py-4">
				<div className="flex items-center justify-between">
					<Link href="/">
						<Image
							src="/omergulcicek.png"
							alt="Ömer Gülçiçek"
							width={32}
							height={32}
						/>
					</Link>

					<nav className="flex items-center gap-4 text-sm font-medium">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"text-sm font-medium transition-all duration-300",
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
				</div>
			</Container>
		</header>
	)
}
