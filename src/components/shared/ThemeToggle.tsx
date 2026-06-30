import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
	const { theme, isMounted, toggleTheme } = useTheme()

	if (!isMounted) {
		return (
			<Button
				variant="ghost"
				size="icon-sm"
				aria-label="Tema yükleniyor"
				disabled
			>
				<Moon className="size-4" />
			</Button>
		)
	}

	const isDark = theme === "dark"

	return (
		<Button
			type="button"
			variant="ghost"
			size="icon-sm"
			onClick={toggleTheme}
			aria-label={isDark ? "Aydınlık temaya geç" : "Karanlık temaya geç"}
		>
			{isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
		</Button>
	)
}
