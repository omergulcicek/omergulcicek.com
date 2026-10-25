import { useSyncExternalStore } from "react"

function subscribe(): () => void {
	return () => {}
}

/**
 * Returns true while a component is rendered on the server or hydrated (in any Suspense boundary),
 * so SSR content stays visible without JavaScript; components mounted later may animate in.
 */
export function useSkipInitialMotion(): boolean {
	return useSyncExternalStore(
		subscribe,
		() => false,
		() => true
	)
}
