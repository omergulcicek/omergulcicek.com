import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dataPath = path.join(rootDir, "scripts/library-books.data.json")
const constantsPath = path.join(rootDir, "src/features/bookmarks/constants/bookmarks.constants.ts")
const syncScriptPath = path.join(rootDir, "scripts/sync-bookmark-images.mjs")

function escapeString(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
}

function formatBookmarkEntry(book) {
	const lines = [
		"\t{",
		`\t\t\tid: "${escapeString(book.id)}",`,
		`\t\t\ttitle: "${escapeString(book.title)}",`
	]

	if (book.subtitle) {
		lines.push(`\t\t\tsubtitle: "${escapeString(book.subtitle)}",`)
	}

	lines.push(`\t\t\turl: "${escapeString(book.url)}",`)
	lines.push(`\t\t\tauthor: "${escapeString(book.author)}",`)

	if (book.translator) {
		lines.push(`\t\t\ttranslator: "${escapeString(book.translator)}",`)
	}

	lines.push(`\t\t\timageUrl: bookmarkImage("${escapeString(book.id)}"),`)
	lines.push(`\t\t\tcategoryId: "library",`)
	lines.push(`\t\t\ttags: ["${escapeString(book.tag)}"]`)
	lines.push("\t\t}")
	return lines.join("\n")
}

function formatImageEntry(book) {
	const imageUrl = book.imageUrl.replace(/\/miw:\d+\/mih:\d+/, "/miw:200/mih:200")
	return `\t{\n\t\tid: "${escapeString(book.id)}",\n\t\turl: "${escapeString(imageUrl)}"\n\t}`
}

async function main() {
	const books = JSON.parse(await readFile(dataPath, "utf8"))
	let constants = await readFile(constantsPath, "utf8")
	let syncScript = await readFile(syncScriptPath, "utf8")

	const libraryEntries = books.map(formatBookmarkEntry).join(",\n")
	const imageEntries = books.map(formatImageEntry).join(",\n")

	const libraryStart = constants.indexOf('\n\t{\n\t\t\tid: "library-')

	if (libraryStart === -1) {
		const updatedConstants = constants.replace(
			/(id: "personal-imdb-com-title-tt7949218"[\s\S]*?\n\t\t\})(\n])/,
			`$1,\n${libraryEntries}$2`
		)

		if (updatedConstants === constants) {
			throw new Error("Could not insert library bookmarks into constants file")
		}

		constants = updatedConstants
	} else {
		const arrayEnd = constants.indexOf("\n]", libraryStart)
		constants =
			constants.slice(0, libraryStart) +
			`,\n${libraryEntries}` +
			constants.slice(arrayEnd)
	}

	await writeFile(constantsPath, constants, "utf8")

	const syncStart = syncScript.indexOf('\n\t{\n\t\tid: "library-')

	if (syncStart === -1) {
		syncScript = syncScript.replace(
			/(id: "personal-imdb-com-title-tt7949218"[\s\S]*?\n\t\t\})(\n])/,
			`$1,\n${imageEntries}$2`
		)
	} else {
		const syncEnd = syncScript.indexOf("\n]", syncStart)
		syncScript =
			syncScript.slice(0, syncStart) + `,\n${imageEntries}` + syncScript.slice(syncEnd)
	}

	if (!syncScript.includes('id.startsWith("library-")')) {
		syncScript = syncScript.replace(
			/if \(\n\t\tid\.startsWith\("personal-imdb-com-title-"\)/,
			'if (\n\t\tid.startsWith("library-") ||\n\t\tid.startsWith("personal-imdb-com-title-")'
		)
	}

	await writeFile(syncScriptPath, syncScript, "utf8")

	process.stdout.write(`Added ${books.length} library bookmarks\n`)
}

main().catch((error) => {
	console.error(error)
	process.exit(1)
})
