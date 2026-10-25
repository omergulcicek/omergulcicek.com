import { Link, useRouterState } from "@tanstack/react-router"
import { ChevronDown } from "lucide-react"

import {
	siteNavLinkActiveClass,
	siteNavLinkBaseClass,
	siteNavLinkInactiveClass
} from "@/components/shared/site-nav-link"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { EXPLORE_NAV, EXPLORE_NAV_LABEL } from "@/constants/header-nav.constants"
import { getNavPageIcon } from "@/constants/nav-icons.constants"
import { clearedRouteSearch } from "@/lib/router/cleared-route-search"
import { cn } from "@/lib/utils"

function isExplorePath(pathname: string, href: string) {
	return pathname === href || pathname.startsWith(`${href}/`)
}

export function ExploreNavMenu() {
	const pathname = useRouterState({ select: (state) => state.location.pathname })
	const isActive = EXPLORE_NAV.some((item) => isExplorePath(pathname, item.href))

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger
				className={cn(
					siteNavLinkBaseClass,
					"group cursor-pointer gap-1",
					isActive ? siteNavLinkActiveClass : siteNavLinkInactiveClass
				)}
			>
				{EXPLORE_NAV_LABEL}
				<ChevronDown
					className="size-3.5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 motion-reduce:transition-none"
					aria-hidden
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" sideOffset={8} className="min-w-44">
				{EXPLORE_NAV.map((item) => {
					const Icon = getNavPageIcon(item.href)
					const isItemActive = isExplorePath(pathname, item.href)

					return (
						<DropdownMenuItem
							key={item.href}
							asChild
							className={cn(
								"cursor-pointer",
								isItemActive && "text-foreground font-medium"
							)}
						>
							<Link
								to={item.href}
								search={clearedRouteSearch}
								aria-current={isItemActive ? "page" : undefined}
							>
								<Icon aria-hidden />
								{item.label}
							</Link>
						</DropdownMenuItem>
					)
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
