import type { ReactNode } from "react"

import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"

type SiteLayoutProps = {
	children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{children}
			</main>
			<Footer />
		</div>
	)
}
