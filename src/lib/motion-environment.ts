"use client"

import { useEffect, useMemo, useState } from "react"

import { useReducedMotion } from "framer-motion"

type BatteryEventName = "chargingchange" | "levelchange"

interface BatteryManagerLike {
	charging: boolean
	level: number
	addEventListener: (type: BatteryEventName, listener: () => void) => void
	removeEventListener: (type: BatteryEventName, listener: () => void) => void
}

interface NavigatorWithPowerHints extends Navigator {
	connection?: {
		saveData?: boolean
	}
	getBattery?: () => Promise<BatteryManagerLike>
}

function isLowBatteryState(battery: BatteryManagerLike) {
	return !battery.charging && battery.level <= 0.2
}

export function useMotionEnvironment() {
	const prefersReducedMotion = useReducedMotion() === true
	const [isLowPowerMode, setIsLowPowerMode] = useState(false)
	const [supportsViewTransitions, setSupportsViewTransitions] = useState(false)

	useEffect(() => {
		setSupportsViewTransitions(
			typeof document !== "undefined" && "startViewTransition" in document
		)
	}, [])

	useEffect(() => {
		const poweredNavigator = navigator as NavigatorWithPowerHints
		const saveData = poweredNavigator.connection?.saveData === true
		let stop = () => {}
		let isDisposed = false

		if (!poweredNavigator.getBattery) {
			setIsLowPowerMode(saveData)
			return
		}

		void poweredNavigator
			.getBattery()
			.then((battery) => {
				if (isDisposed) {
					return
				}

				const sync = () => {
					setIsLowPowerMode(saveData || isLowBatteryState(battery))
				}

				sync()
				battery.addEventListener("chargingchange", sync)
				battery.addEventListener("levelchange", sync)

				stop = () => {
					battery.removeEventListener("chargingchange", sync)
					battery.removeEventListener("levelchange", sync)
				}
			})
			.catch(() => {
				setIsLowPowerMode(saveData)
			})

		return () => {
			isDisposed = true
			stop()
		}
	}, [])

	const shouldUseSoftMotion = useMemo(
		() => prefersReducedMotion || isLowPowerMode,
		[prefersReducedMotion, isLowPowerMode]
	)

	useEffect(() => {
		const root = document.documentElement
		root.dataset.energySave = shouldUseSoftMotion ? "true" : "false"
		root.dataset.viewTransitions = supportsViewTransitions ? "true" : "false"
	}, [shouldUseSoftMotion, supportsViewTransitions])

	return {
		shouldUseSoftMotion,
		supportsViewTransitions
	}
}
