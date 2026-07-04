export function getDiagonalGridStaggerStep(index: number, columnCount: number): number {
	const column = index % columnCount
	const row = Math.floor(index / columnCount)

	return column + row
}

export function getDiagonalGridStaggerDelay(
	index: number,
	columnCount: number,
	stepDuration: number
): number {
	return getDiagonalGridStaggerStep(index, columnCount) * stepDuration
}
