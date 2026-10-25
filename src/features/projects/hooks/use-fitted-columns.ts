import { useEffect, useLayoutEffect, useRef, useState } from "react"

const useIsomorphicLayoutEffect =
	typeof window === "undefined" ? useEffect : useLayoutEffect

/** Measures how many grid columns of `cellSize` fit in the container (ResizeObserver). */
export function useFittedColumns(cellSize: number, gap: number) {
	const ref = useRef<HTMLDivElement>(null)
	const [columns, setColumns] = useState<number>()

	useIsomorphicLayoutEffect(() => {
		const element = ref.current
		if (!element) return

		const measure = () =>
			setColumns(
				Math.max(1, Math.floor((element.clientWidth + gap) / (cellSize + gap)))
			)

		measure()
		const observer = new ResizeObserver(measure)
		observer.observe(element)

		return () => observer.disconnect()
	}, [cellSize, gap])

	return [ref, columns] as const
}
