import { useCallback, useEffect, useState, useSyncExternalStore } from "react"

import { persistThemePreference } from "@/lib/theme/persist-theme-preference"
import { resolveDocumentTheme } from "@/lib/theme/resolve-document-theme"
import {
	THEME_DARK_CLASS,
	THEME_STORAGE_KEY,
	THEME_SYSTEM_DARK_QUERY,
	type Theme
} from "@/lib/theme/theme.types"

type ThemeListener = () => void

let currentTheme: Theme = "light"
let isThemeInitialized = false
const listeners = new Set<ThemeListener>()

/** The inline boot script already applied the saved or OS theme before the first paint. */
function readDocumentTheme(): Theme {
	return document.documentElement.classList.contains(THEME_DARK_CLASS)
		? "dark"
		: "light"
}

function hasSavedThemePreference(): boolean {
	try {
		const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
		return stored === "dark" || stored === "light"
	} catch {
		// Storage is blocked (privacy mode): no saved choice, so the OS theme applies.
		return false
	}
}

function applyTheme(theme: Theme) {
	document.documentElement.classList.toggle(THEME_DARK_CLASS, theme === "dark")
}

function emitThemeChange() {
	listeners.forEach((listener) => listener())
}

function subscribe(listener: ThemeListener) {
	listeners.add(listener)
	return () => listeners.delete(listener)
}

function getThemeSnapshot(): Theme {
	return currentTheme
}

function getServerThemeSnapshot(): Theme {
	return resolveDocumentTheme()
}

function setSharedTheme(nextTheme: Theme) {
	currentTheme = nextTheme

	if (typeof window !== "undefined") {
		persistThemePreference(nextTheme)
	}

	applyTheme(nextTheme)
	emitThemeChange()
}

function initializeTheme() {
	if (isThemeInitialized || typeof window === "undefined") {
		return
	}

	isThemeInitialized = true
	currentTheme = readDocumentTheme()
	emitThemeChange()

	// Until the visitor picks a theme, follow OS changes (e.g. automatic dark mode at night).
	window.matchMedia(THEME_SYSTEM_DARK_QUERY).addEventListener("change", (event) => {
		if (hasSavedThemePreference()) {
			return
		}

		currentTheme = event.matches ? "dark" : "light"
		applyTheme(currentTheme)
		emitThemeChange()
	})
}

export function useTheme() {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		initializeTheme()
		setIsMounted(true)
	}, [])

	const theme = useSyncExternalStore(
		subscribe,
		getThemeSnapshot,
		getServerThemeSnapshot
	)

	const setTheme = useCallback((nextTheme: Theme) => {
		setSharedTheme(nextTheme)
	}, [])

	const toggleTheme = useCallback(() => {
		setSharedTheme(theme === "dark" ? "light" : "dark")
	}, [theme])

	return {
		theme,
		isMounted,
		setTheme,
		toggleTheme
	}
}
