import { GitHubIcon } from "@/components/icons"
import { BrandMark } from "@/components/shared/brand-mark"
import { Container } from "@/components/shared/Container"
import { HeaderNavDrawer } from "@/components/shared/header-nav-drawer"
import { IconLinkButton } from "@/components/shared/icon-link-button"
import { SiteNavLink } from "@/components/shared/site-nav-link"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { Separator } from "@/components/ui/separator"
import { HEADER_NAV } from "@/constants/header-nav.constants"
import { EXTERNAL_LINKS, SITE_CONTENT } from "@/constants/site-content.constants"
import { CommandPaletteTrigger } from "@/features/search/components/CommandPalette"

const headerActionSeparatorClassName =
	"mx-0.5 h-5 shrink-0 self-center data-[orientation=vertical]:h-5"

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
				<Container className="py-3 md:py-4">
					<div className="flex items-center justify-between gap-3 md:gap-4">
						<div className="flex items-center gap-3 md:gap-6">
							<div className="md:hidden">
								<HeaderNavDrawer />
							</div>
							<BrandMark className="hidden md:flex" />
							<nav
								className="hidden items-center gap-4 md:flex"
								aria-label="Ana menü"
							>
								{HEADER_NAV.map((item) => (
									<SiteNavLink
										key={item.href}
										href={item.href}
										label={item.label}
										exact={"exact" in item ? item.exact : undefined}
									/>
								))}
							</nav>
						</div>
						<div className="flex h-8 items-center gap-1">
							<CommandPaletteTrigger />
							<Separator
								orientation="vertical"
								className={headerActionSeparatorClassName}
							/>
							<IconLinkButton
								href={EXTERNAL_LINKS.github}
								ariaLabel="GitHub profilini ziyaret et"
								tooltipSide="bottom"
							>
								<GitHubIcon className="size-4 text-[#181717] dark:text-[#f0f6fc]" />
							</IconLinkButton>
							<Separator
								orientation="vertical"
								className={headerActionSeparatorClassName}
							/>
							<ThemeToggle />
						</div>
					</div>
				</Container>
			</header>
		</>
	)
}
