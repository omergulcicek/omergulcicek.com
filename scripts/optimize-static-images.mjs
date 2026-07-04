import { mkdir, readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import sharp from "sharp"

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const legacyDir = path.join(rootDir, "_legacy/public")
const publicDir = path.join(rootDir, "public")

const avatarNames = [
	"photographer",
	"chess",
	"footballer",
	"walk",
	"book",
	"draw"
]

const companyIcons = [
	"machinarium",
	"alisgidis",
	"gordion",
	"hangikredi",
	"kodluyoruz",
	"turkcell",
	"akinon",
	"ziraat"
]

async function ensureDir(relativePath) {
	const dir = path.join(publicDir, relativePath)
	await mkdir(dir, { recursive: true })
	return dir
}

async function writeWebp(relativePath, pipeline) {
	const outputPath = path.join(publicDir, relativePath)
	await pipeline.webp({ quality: 82, effort: 4 }).toFile(outputPath)
	const { size } = await readFile(outputPath).then((buffer) => ({
		size: buffer.byteLength
	}))
	console.log(`${relativePath} (${size} bytes)`)
}

async function optimizeAvatars() {
	await ensureDir("media/avatars")

	for (const name of avatarNames) {
		const inputPath = path.join(legacyDir, "avatars", `${name}.webp`)
		await writeWebp(
			`media/avatars/${name}-96.webp`,
			sharp(inputPath).resize(96, 96, { fit: "cover" })
		)
	}
}

async function optimizeCompanyLogos() {
	await ensureDir("media/company")

	for (const icon of companyIcons) {
		const inputPath = path.join(legacyDir, "company", `${icon}.jpeg`)
		await writeWebp(
			`media/company/${icon}-48.webp`,
			sharp(inputPath).resize(48, 48, { fit: "cover" })
		)
	}
}

async function optimizeVirastackLogo() {
	const inputPath = path.join(publicDir, "logos/virastack.png")

	await writeWebp(
		"logos/virastack-56.webp",
		sharp(inputPath).resize(56, 56, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
	)
	await writeWebp(
		"logos/virastack-112.webp",
		sharp(inputPath).resize(112, 112, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
	)
}

async function main() {
	await optimizeAvatars()
	await optimizeCompanyLogos()
	await optimizeVirastackLogo()
}

main().catch((error) => {
	console.error(error)
	process.exit(1)
})
