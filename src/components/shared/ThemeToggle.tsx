import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

type ThemeToggleProps = {
	size?: "icon-xs" | "icon-sm"
}

export function ThemeToggle({ size = "icon-sm" }: ThemeToggleProps) {
	const { theme, isMounted, toggleTheme } = useTheme()
	const iconClassName = size === "icon-xs" ? "size-3.5" : "size-4"

	if (!isMounted) {
		return (
			<Button
				variant="ghost"
				size={size}
				aria-label="Tema yükleniyor"
				disabled
			>
				<Moon className={iconClassName} />
			</Button>
		)
	}

	const isDark = theme === "dark"

	return (
		<Button
			type="button"
			variant="ghost"
			size={size}
			onClick={toggleTheme}
			aria-label={isDark ? "Aydınlık temaya geç" : "Karanlık temaya geç"}
		>
			{isDark ? (
				<Sun className={iconClassName} />
			) : (
				<Moon className={iconClassName} />
			)}
		</Button>
	)
}
