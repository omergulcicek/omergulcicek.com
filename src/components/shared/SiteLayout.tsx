import type { ReactNode } from "react"

import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { ScrollToTopIndicator } from "@/components/shared/ScrollToTopIndicator"
import { MotionEnvironmentBoot } from "@/lib/motion/motion-environment-boot"
import { TooltipProvider } from "@/components/ui/tooltip"
import { CommandPaletteProvider } from "@/components/shared/command-palette/CommandPaletteProvider"
import { CommandPaletteDialog } from "@/components/shared/command-palette/CommandPaletteDialog"

type SiteLayoutProps = {
	children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
	return (
		<CommandPaletteProvider>
			<TooltipProvider>
				<div
					data-vaul-drawer-wrapper=""
					className="relative flex min-h-dvh min-h-screen flex-col bg-background"
				>
					<Header />
					<main id="main-content" className="flex-1">
						{children}
					</main>
					<Footer />
					<ScrollToTopIndicator />
					<CommandPaletteDialog />
				</div>
				<MotionEnvironmentBoot />
			</TooltipProvider>
		</CommandPaletteProvider>
	)
}
