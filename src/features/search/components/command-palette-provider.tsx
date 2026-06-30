import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode
} from "react"

type CommandPaletteContextValue = {
	open: boolean
	setOpen: (open: boolean) => void
}

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(
	null
)

export function CommandPaletteProvider({
	children
}: Readonly<{ children: ReactNode }>) {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setOpen((current) => !current)
			}
		}

		document.addEventListener("keydown", onKeyDown)
		return () => document.removeEventListener("keydown", onKeyDown)
	}, [])

	return (
		<CommandPaletteContext.Provider value={{ open, setOpen }}>
			{children}
		</CommandPaletteContext.Provider>
	)
}

export function useCommandPalette() {
	const context = useContext(CommandPaletteContext)

	if (!context) {
		throw new Error(
			"useCommandPalette must be used within CommandPaletteProvider"
		)
	}

	return context
}
