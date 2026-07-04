import { useCallback, useEffect, useState, useSyncExternalStore } from "react"

import { persistThemePreference } from "@/lib/theme/persist-theme-preference"
import { resolveDocumentTheme } from "@/lib/theme/resolve-document-theme"
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme/theme.types"

type ThemeListener = () => void

let currentTheme: Theme = "light"
let isThemeInitialized = false
const listeners = new Set<ThemeListener>()

function getPreferredTheme(): Theme {
	if (typeof window === "undefined") {
		return "light"
	}

	const stored = window.localStorage.getItem(THEME_STORAGE_KEY)

	if (stored === "dark" || stored === "light") {
		return stored
	}

	return "light"
}

function applyTheme(theme: Theme) {
	document.documentElement.classList.toggle("dark", theme === "dark")
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
	currentTheme = getPreferredTheme()
	persistThemePreference(currentTheme)
	applyTheme(currentTheme)
	emitThemeChange()
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
