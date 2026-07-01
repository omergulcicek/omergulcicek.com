import { lazy, Suspense, type ReactNode } from "react"

import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { TooltipProvider } from "@/components/ui/tooltip"
import { CommandPaletteProvider } from "@/features/search/components/command-palette-provider"

const CommandPaletteDialog = lazy(async () => {
	const module = await import("@/features/search/components/CommandPalette")
	return { default: module.CommandPaletteDialog }
})

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
					<Suspense fallback={null}>
						<CommandPaletteDialog />
					</Suspense>
				</div>
			</TooltipProvider>
		</CommandPaletteProvider>
	)
}
