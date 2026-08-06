import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

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
				<span className={cn("relative", iconClassName)} aria-hidden="true">
					<Moon className={cn("absolute inset-0", iconClassName)} />
				</span>
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
			<span className={cn("relative", iconClassName)} aria-hidden="true">
				<Sun
					className={cn(
						"absolute inset-0 transition-[opacity,transform,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none",
						iconClassName,
						isDark
							? "scale-100 opacity-100 blur-0"
							: "pointer-events-none scale-[0.25] opacity-0 blur-[4px]"
					)}
				/>
				<Moon
					className={cn(
						"absolute inset-0 transition-[opacity,transform,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none",
						iconClassName,
						isDark
							? "pointer-events-none scale-[0.25] opacity-0 blur-[4px]"
							: "scale-100 opacity-100 blur-0"
					)}
				/>
			</span>
		</Button>
	)
}
