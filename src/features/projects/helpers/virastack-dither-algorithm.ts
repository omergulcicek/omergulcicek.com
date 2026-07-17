export function floydSteinbergDither(
	grayscale: Uint8Array,
	width: number,
	height: number,
	opts: { threshold: number; serpentine: boolean; errorStrength: number },
	alpha?: Uint8Array
): Float32Array {
	const errors = new Float32Array(width * height)

	for (let i = 0; i < grayscale.length; i++) {
		errors[i] = grayscale[i]
	}

	const positions: number[] = []
	const strength = opts.errorStrength
	const hasAlpha = Boolean(alpha && alpha.length === grayscale.length)

	for (let y = 0; y < height; y++) {
		const leftToRight = !opts.serpentine || y % 2 === 0
		const startX = leftToRight ? 0 : width - 1
		const endX = leftToRight ? width : -1
		const step = leftToRight ? 1 : -1

		for (let x = startX; x !== endX; x += step) {
			const idx = y * width + x

			if (hasAlpha && alpha![idx]! < 128) {
				continue
			}

			const oldVal = errors[idx]!
			const newVal = oldVal > opts.threshold ? 255 : 0
			const err = (oldVal - newVal) * strength

			if (newVal > 0) {
				positions.push(x, y)
			}

			const diffuse = (nx: number, ny: number, weight: number) => {
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) {
					return
				}

				const ni = ny * width + nx

				if (hasAlpha && alpha![ni]! < 128) {
					return
				}

				errors[ni]! += err * weight
			}

			diffuse(x + step, y, 7 / 16)
			diffuse(x - step, y + 1, 3 / 16)
			diffuse(x, y + 1, 5 / 16)
			diffuse(x + step, y + 1, 1 / 16)
		}
	}

	return new Float32Array(positions)
}

function roundedSquareMask(w: number, h: number, radiusPct: number): Set<number> {
	const r = Math.round(radiusPct * Math.min(w, h))
	const mask = new Set<number>()

	for (let y = 0; y < h; y++) {
		for (let x = 0; x < w; x++) {
			let inside = false

			if (x >= r && x < w - r) {
				inside = y >= 0 && y < h
			} else if (y >= r && y < h - r) {
				inside = x >= 0 && x < w
			} else {
				const cx = x < r ? r : w - r - 1
				const cy = y < r ? r : h - r - 1
				const dx = x - cx
				const dy = y - cy
				inside = dx * dx + dy * dy <= r * r
			}

			if (inside) {
				mask.add(y * w + x)
			}
		}
	}

	return mask
}

export function invertDitherWithMask(
	positions: Float32Array,
	gridW: number,
	gridH: number,
	radiusPct: number,
	alpha?: Uint8Array
): Float32Array {
	const mask = roundedSquareMask(gridW, gridH, radiusPct)
	const logoSet = new Set<number>()

	for (let i = 0; i < positions.length; i += 2) {
		logoSet.add(
			Math.round(positions[i + 1]!) * gridW + Math.round(positions[i]!)
		)
	}

	const inverted: number[] = []

	for (const idx of mask) {
		if (logoSet.has(idx)) {
			continue
		}

		if (alpha && alpha[idx]! < 128) {
			continue
		}

		inverted.push(idx % gridW, Math.floor(idx / gridW))
	}

	return new Float32Array(inverted)
}
