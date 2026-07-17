import type { ReactNode } from "react"

import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { SiteDock } from "@/components/shared/site-dock"
import { MotionEnvironmentBoot } from "@/lib/motion/motion-environment-boot.client"
import { TooltipProvider } from "@/components/ui/tooltip"
import { CommandPaletteProvider } from "@/features/search/components/command-palette-provider"
import { CommandPaletteDialog } from "@/features/search/components/CommandPalette"

type SiteLayoutProps = {
	children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
	return (
		<CommandPaletteProvider>
			<TooltipProvider>
				<div
					data-vaul-drawer-wrapper=""
					className="relative flex min-h-dvh min-h-screen flex-col bg-background pb-[calc(3.5rem+env(safe-area-inset-bottom))]"
				>
					<Header />
					<main id="main-content" className="flex-1">
						{children}
					</main>
					<Footer />
					<SiteDock />
					<CommandPaletteDialog />
				</div>
				<MotionEnvironmentBoot />
			</TooltipProvider>
		</CommandPaletteProvider>
	)
}
