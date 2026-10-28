import { GitHubIcon } from "@/components/shared/icons"
import { BrandMark } from "@/components/shared/BrandMark"
import { Container } from "@/components/shared/Container"
import { ExploreNavMenu } from "@/components/shared/ExploreNavMenu"
import { HeaderNavDrawer } from "@/components/shared/HeaderNavDrawer"
import { IconLinkButton } from "@/components/shared/IconLinkButton"
import { SiteNavLink } from "@/components/shared/SiteNavLink"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { HEADER_NAV } from "@/constants/header-nav.constants"
import { EXTERNAL_LINKS, SITE_CONTENT } from "@/constants/site-content.constants"
import { CommandPaletteTrigger } from "@/components/shared/command-palette/CommandPaletteTrigger"

export function Header() {
	return (
		<>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:ring-2 focus:ring-ring focus:outline-none"
			>
				{SITE_CONTENT.skipToContent}
			</a>
			<header className="vt-header-shell bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 backdrop-blur">
				<Container className="max-w-3xl py-3 md:py-4">
					<div className="flex items-center justify-between gap-3 md:gap-4">
						<div className="flex items-center gap-3 md:gap-6">
							<div className="md:hidden">
								<HeaderNavDrawer />
							</div>
							<BrandMark className="hidden md:flex" />
							<nav
								className="hidden items-center gap-4 md:flex"
								aria-label={SITE_CONTENT.mainNavAria}
							>
								{HEADER_NAV.map((item) => (
									<SiteNavLink
										key={item.href}
										href={item.href}
										label={item.label}
										exact={item.exact}
									/>
								))}
								<ExploreNavMenu />
							</nav>
						</div>
						<div className="flex items-center gap-1">
							<CommandPaletteTrigger />
							<ThemeToggle />
							<IconLinkButton
								href={EXTERNAL_LINKS.github}
								ariaLabel={SITE_CONTENT.githubProfileAria}
								tooltipSide="bottom"
							>
								<GitHubIcon className="size-4 text-brand-github" />
							</IconLinkButton>
						</div>
					</div>
				</Container>
			</header>
		</>
	)
}
