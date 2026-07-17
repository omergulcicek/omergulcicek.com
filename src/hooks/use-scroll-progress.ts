import { useEffect, useState } from "react"

function readScrollProgress(): number {
	const scrollTop = window.scrollY
	const maxScroll =
		document.documentElement.scrollHeight - window.innerHeight

	if (maxScroll <= 0) {
		return 0
	}

	return Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100))
}

export function useScrollProgress() {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		let frameId = 0

		const update = () => {
			cancelAnimationFrame(frameId)
			frameId = requestAnimationFrame(() => {
				setProgress(readScrollProgress())
			})
		}

		update()
		window.addEventListener("scroll", update, { passive: true })
		window.addEventListener("resize", update)

		return () => {
			cancelAnimationFrame(frameId)
			window.removeEventListener("scroll", update)
			window.removeEventListener("resize", update)
		}
	}, [])

	return progress
}
