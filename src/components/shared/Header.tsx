import { Link } from "@tanstack/react-router"

import { BrandMark } from "@/components/shared/brand-mark"
import { Container } from "@/components/shared/Container"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { HEADER_NAV } from "@/constants/header-nav.constants"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { CommandPalette } from "@/features/search/components/CommandPalette"
import { Separator } from "@/components/ui/separator"

function NavLink({
	href,
	label,
	exact
}: {
	href: string
	label: string
	exact?: boolean
}) {
	return (
		<Link
			to={href}
			className="text-muted-foreground hover:text-foreground text-sm transition-colors"
			activeOptions={exact ? { exact: true } : undefined}
			activeProps={{
				className: "text-foreground font-medium"
			}}
		>
			{label}
		</Link>
	)
}

export function Header() {
	return (
		<>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:ring-2 focus:ring-ring focus:outline-none"
			>
				{SITE_CONTENT.skipToContent}
			</a>
			<header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 backdrop-blur">
				<Container className="py-4">
					<div className="flex items-center justify-between gap-4">
						<div className="flex flex-wrap items-center gap-4 sm:gap-6">
							<BrandMark />
							<nav
								className="flex flex-wrap items-center gap-4"
								aria-label="Ana menü"
							>
								{HEADER_NAV.map((item) => (
									<NavLink
										key={item.href}
										href={item.href}
										label={item.label}
										exact={"exact" in item ? item.exact : undefined}
									/>
								))}
							</nav>
						</div>
						<div className="flex items-center gap-1.5">
							<CommandPalette />
							<Separator orientation="vertical" className="mx-1 h-4" />
							<ThemeToggle />
						</div>
					</div>
				</Container>
			</header>
		</>
	)
}
