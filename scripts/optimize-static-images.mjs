import { readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import sharp from "sharp"

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const publicDir = path.join(rootDir, "public")

async function writeWebp(relativePath, pipeline) {
	const outputPath = path.join(publicDir, relativePath)
	await pipeline.webp({ quality: 82, effort: 4 }).toFile(outputPath)
	const { size } = await readFile(outputPath).then((buffer) => ({
		size: buffer.byteLength
	}))
	console.log(`${relativePath} (${size} bytes)`)
}

async function optimizeVirastackLogo() {
	const inputPath = path.join(publicDir, "logos/virastack.png")

	await writeWebp(
		"logos/virastack-56.webp",
		sharp(inputPath).resize(56, 56, {
			fit: "contain",
			background: { r: 0, g: 0, b: 0, alpha: 0 }
		})
	)
	await writeWebp(
		"logos/virastack-112.webp",
		sharp(inputPath).resize(112, 112, {
			fit: "contain",
			background: { r: 0, g: 0, b: 0, alpha: 0 }
		})
	)
}

async function main() {
	await optimizeVirastackLogo()
}

main().catch((error) => {
	console.error(error)
	process.exit(1)
})
