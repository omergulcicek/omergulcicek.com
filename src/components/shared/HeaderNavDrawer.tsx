import { lazy, Suspense, useState } from "react"

import { HeaderNavDrawerTriggerButton } from "@/components/shared/HeaderNavDrawerTriggerButton"

function preloadHeaderNavDrawerPanel() {
	return import("@/components/shared/HeaderNavDrawerPanel")
}

const HeaderNavDrawerPanel = lazy(async () => {
	const module = await preloadHeaderNavDrawerPanel()
	return { default: module.HeaderNavDrawerPanel }
})

/**
 * Renders a plain menu button until the first tap, then swaps in the vaul drawer,
 * so the drawer library stays out of the entry bundle.
 */
export function HeaderNavDrawer() {
	const [isLoaded, setIsLoaded] = useState(false)
	const [open, setOpen] = useState(false)

	const trigger = (
		<HeaderNavDrawerTriggerButton
			type="button"
			aria-expanded={false}
			onPointerEnter={preloadHeaderNavDrawerPanel}
			onFocus={preloadHeaderNavDrawerPanel}
			onClick={() => {
				setIsLoaded(true)
				setOpen(true)
			}}
		/>
	)

	if (!isLoaded) {
		return trigger
	}

	return (
		<Suspense fallback={trigger}>
			<HeaderNavDrawerPanel open={open} onOpenChange={setOpen} />
		</Suspense>
	)
}
