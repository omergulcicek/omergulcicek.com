import { Link, useRouterState } from "@tanstack/react-router"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from "@/components/ui/drawer"
import { MOBILE_DRAWER_NAV } from "@/constants/header-nav.constants"
import { cn } from "@/lib/utils"

function isNavItemActive(
	pathname: string,
	href: string,
	exact?: boolean
) {
	if (exact) {
		return pathname === href
	}

	return pathname === href || (href !== "/" && pathname.startsWith(href))
}

export function HeaderNavDrawer() {
	const pathname = useRouterState({ select: (state) => state.location.pathname })

	return (
		<Drawer shouldScaleBackground setBackgroundColorOnScale>
			<DrawerTrigger asChild>
				<Button
					variant="ghost"
					size="sm"
					className="size-8 p-0"
					aria-label="Menüyü aç"
				>
					<Menu className="size-4" aria-hidden />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Menü</DrawerTitle>
				</DrawerHeader>
				<nav
					aria-label="Mobil menü"
					className="flex flex-col gap-1 px-4 pb-6"
				>
					{MOBILE_DRAWER_NAV.map((item) => {
						const isActive = isNavItemActive(
							pathname,
							item.href,
							item.exact
						)
						const Icon = item.icon

						return (
							<DrawerClose asChild key={item.href}>
								<Link
									to={item.href}
									className={cn(
										"focus-link flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
										isActive
											? "bg-accent text-accent-foreground"
											: "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
									)}
									aria-current={isActive ? "page" : undefined}
								>
									<Icon className="size-4 shrink-0" aria-hidden />
									{item.label}
								</Link>
							</DrawerClose>
						)
					})}
				</nav>
			</DrawerContent>
		</Drawer>
	)
}
