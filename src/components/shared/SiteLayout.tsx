import type { ReactNode } from "react"

import { MotionEnvironmentBoot } from "@/lib/motion/motion-environment-boot"
import { MotionProvider } from "@/lib/motion/motion-provider"

import { CommandPaletteDialogLoader } from "@/components/shared/command-palette/CommandPaletteDialogLoader"
import { CommandPaletteProvider } from "@/components/shared/command-palette/CommandPaletteProvider"
import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { ScrollToTopIndicator } from "@/components/shared/ScrollToTopIndicator"
import { TooltipProvider } from "@/components/ui/tooltip"

type SiteLayoutProps = {
	children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
	return (
		<MotionProvider>
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
						<CommandPaletteDialogLoader />
					</div>
					<MotionEnvironmentBoot />
				</TooltipProvider>
			</CommandPaletteProvider>
		</MotionProvider>
	)
}
