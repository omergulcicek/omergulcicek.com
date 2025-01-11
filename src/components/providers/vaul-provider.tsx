import { ReactNode } from "react"

export const DrawerCSSProvider = ({ children }: { children: ReactNode }) => {
	return (
		<div
			className="relative flex min-h-screen flex-col bg-background"
			vaul-drawer-wrapper=""
		>
			{children}
		</div>
	)
}
