import { useCallback, useEffect, useState, useSyncExternalStore } from "react"

export type ProjectViewMode = "grid" | "list"
const VIEW_MODE_STORAGE_KEY = "project-view-mode"

type ViewModeListener = () => void

let currentViewMode: ProjectViewMode = "grid"
let isViewModeInitialized = false
const listeners = new Set<ViewModeListener>()

function getPreferredViewMode(): ProjectViewMode {
	if (typeof window === "undefined") {
		return "grid"
	}

	const stored = window.localStorage.getItem(VIEW_MODE_STORAGE_KEY)

	if (stored === "grid" || stored === "list") {
		return stored
	}

	return "grid"
}

function emitViewModeChange() {
	listeners.forEach((listener) => listener())
}

function subscribe(listener: ViewModeListener) {
	listeners.add(listener)
	return () => listeners.delete(listener)
}

function getViewModeSnapshot(): ProjectViewMode {
	return currentViewMode
}

function getServerViewModeSnapshot(): ProjectViewMode {
	return "grid"
}

function setSharedViewMode(nextMode: ProjectViewMode) {
	currentViewMode = nextMode

	if (typeof window !== "undefined") {
		window.localStorage.setItem(VIEW_MODE_STORAGE_KEY, nextMode)
	}

	emitViewModeChange()
}

function initializeViewMode() {
	if (isViewModeInitialized || typeof window === "undefined") {
		return
	}

	isViewModeInitialized = true
	currentViewMode = getPreferredViewMode()
	emitViewModeChange()
}

export function useProjectViewMode() {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		initializeViewMode()
		setIsMounted(true)
	}, [])

	const viewMode = useSyncExternalStore(
		subscribe,
		getViewModeSnapshot,
		getServerViewModeSnapshot
	)

	const setViewMode = useCallback((nextMode: ProjectViewMode) => {
		setSharedViewMode(nextMode)
	}, [])

	return {
		viewMode: isMounted ? viewMode : "grid",
		setViewMode
	}
}
