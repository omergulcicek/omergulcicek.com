import { ThemeProvider } from "./theme-provider"
import { DrawerCSSProvider } from "./vaul-provider"

export const Providers = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<DrawerCSSProvider>{children}</DrawerCSSProvider>
			</ThemeProvider>
		</>
	)
}
