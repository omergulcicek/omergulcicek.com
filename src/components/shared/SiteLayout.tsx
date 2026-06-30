import type { ReactNode } from "react"

import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { CommandPaletteDialog } from "@/features/search/components/CommandPalette"
import { CommandPaletteProvider } from "@/features/search/components/command-palette-provider"

type SiteLayoutProps = {
	children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
	return (
		<CommandPaletteProvider>
			<div className="flex min-h-screen flex-col">
				<Header />
				<main id="main-content" className="flex-1">
					{children}
				</main>
				<Footer />
				<CommandPaletteDialog />
			</div>
		</CommandPaletteProvider>
	)
}
