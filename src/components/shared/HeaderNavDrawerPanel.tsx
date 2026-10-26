import { Link, useRouterState } from "@tanstack/react-router"

import { HeaderNavDrawerTriggerButton } from "@/components/shared/HeaderNavDrawerTriggerButton"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger
} from "@/components/ui/drawer"
import { MOBILE_DRAWER_NAV } from "@/constants/header-nav.constants"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { clearedRouteSearch } from "@/lib/router/cleared-route-search"
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

type HeaderNavDrawerPanelProps = {
	open: boolean
	onOpenChange: (open: boolean) => void
}

export function HeaderNavDrawerPanel({
	open,
	onOpenChange
}: HeaderNavDrawerPanelProps) {
	const pathname = useRouterState({ select: (state) => state.location.pathname })

	return (
		<Drawer
			open={open}
			onOpenChange={onOpenChange}
			shouldScaleBackground
			setBackgroundColorOnScale
		>
			<DrawerTrigger asChild>
				<HeaderNavDrawerTriggerButton />
			</DrawerTrigger>
			<DrawerContent>
				<DrawerTitle className="sr-only">{SITE_CONTENT.mobileNavTitle}</DrawerTitle>
				<nav
					aria-label={SITE_CONTENT.mobileNavAria}
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
									search={clearedRouteSearch}
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
