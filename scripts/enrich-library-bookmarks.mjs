import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dataPath = path.join(rootDir, "src/features/bookmarks/data/library-bookmarks.data.ts")
const syncScriptPath = path.join(rootDir, "scripts/sync-bookmark-images.mjs")
const cachePath = path.join(rootDir, "scripts/output/library-kitapyurdu-cache.json")

const SEARCH_DELAY_MS = 350
const SEARCH_LIMIT = 10
const USER_AGENT =
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"

function decodeHtml(value) {
	return value
		.replaceAll("&amp;", "&")
		.replaceAll("&quot;", '"')
		.replaceAll("&#039;", "'")
		.replaceAll("&apos;", "'")
		.replaceAll("&lt;", "<")
		.replaceAll("&gt;", ">")
		.replaceAll("&nbsp;", " ")
		.trim()
}

function normalizeText(value) {
	return value
		.replace(/[''`´]/g, "")
		.normalize("NFD")
		.replace(/\p{M}/gu, "")
		.replaceAll("ı", "i")
		.replaceAll("İ", "i")
		.toLocaleLowerCase("tr")
		.replace(/[^a-z0-9]+/g, " ")
		.trim()
}

function editDistance(left, right) {
	if (Math.abs(left.length - right.length) > 1) {
		return 99
	}

	const rows = left.length + 1
	const cols = right.length + 1
	const matrix = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0))

	for (let row = 0; row < rows; row += 1) {
		matrix[row][0] = row
	}

	for (let col = 0; col < cols; col += 1) {
		matrix[0][col] = col
	}

	for (let row = 1; row < rows; row += 1) {
		for (let col = 1; col < cols; col += 1) {
			const cost = left[row - 1] === right[col - 1] ? 0 : 1
			matrix[row][col] = Math.min(
				matrix[row - 1][col] + 1,
				matrix[row][col - 1] + 1,
				matrix[row - 1][col - 1] + cost
			)
		}
	}

	return matrix[left.length][right.length]
}

function stripAuthorTitles(value) {
	return normalizeText(value)
		.replace(/\bprof dr\b/g, "")
		.replace(/\bdr\b/g, "")
		.replace(/\bseyyid\b/g, "")
		.trim()
}

function splitAuthors(author) {
	return author
		.split(/\s*[·,;/]\s*|\s+ve\s+/)
		.map((item) => item.trim())
		.filter(Boolean)
}

function authorsMatch(leftAuthor, rightAuthor) {
	const left = splitAuthors(leftAuthor).map(stripAuthorTitles)
	const right = splitAuthors(rightAuthor).map(stripAuthorTitles)

	return left.some((leftName) =>
		right.some((rightName) => {
			if (
				leftName.includes(rightName) ||
				rightName.includes(leftName) ||
				editDistance(leftName, rightName) <= 1
			) {
				return true
			}

			const leftTokens = leftName.split(" ").filter(Boolean)
			const rightTokens = rightName.split(" ").filter(Boolean)

			if (leftTokens.length === 0 || rightTokens.length === 0) {
				return false
			}

			const shorter = leftTokens.length <= rightTokens.length ? leftTokens : rightTokens
			const longer = leftTokens.length <= rightTokens.length ? rightTokens : leftTokens

			if (shorter.every((token) => longer.includes(token))) {
				return true
			}

			const leftLast = leftTokens.at(-1)
			const rightLast = rightTokens.at(-1)

			return Boolean(leftLast && rightLast && leftLast === rightLast && leftLast.length >= 5)
		})
	)
}

function normalizeVolumeTokens(value) {
	return value
		.replace(/\biii\b/g, "3")
		.replace(/\bii\b/g, "2")
		.replace(/\bi\b/g, "1")
}

function titleCore(value) {
	return normalizeVolumeTokens(normalizeText(value))
		.replace(
			/\b(ciltli|karton kapak|ciltsiz|tam metin|butun eserleri|kisaltilmis metin)\b/g,
			""
		)
		.replace(/\b\d+\b/g, "")
		.replace(/\s+/g, " ")
		.trim()
}

function titlesMatch(leftTitle, rightTitle) {
	const left = normalizeVolumeTokens(normalizeText(leftTitle))
	const right = normalizeVolumeTokens(normalizeText(rightTitle))

	if (!left || !right) {
		return false
	}

	if (left === right) {
		return true
	}

	if (left.length >= 8 && right.length >= 8 && (left.includes(right) || right.includes(left))) {
		return true
	}

	const leftTokens = left.split(" ").filter((token) => token.length > 2)
	const rightTokens = new Set(right.split(" ").filter((token) => token.length > 2))

	if (leftTokens.length >= 3) {
		const overlap = leftTokens.filter((token) => rightTokens.has(token)).length
		return overlap / leftTokens.length >= 0.7
	}

	const leftCore = titleCore(leftTitle)
	const rightCore = titleCore(rightTitle)

	if (leftCore && leftCore === rightCore) {
		return true
	}

	if (
		leftCore.length >= 4 &&
		rightCore.length >= 4 &&
		(rightCore.startsWith(`${leftCore} `) || leftCore.startsWith(`${rightCore} `))
	) {
		return true
	}

	return false
}

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

function toFullCoverUrl(imageUrl) {
	const fileId = imageUrl.match(/fn:(\d+)/)?.[1]

	if (!fileId) {
		return imageUrl
	}

	return `https://img.kitapyurdu.com/v1/getImage/fn:${fileId}`
}

function toProductUrl(href) {
	const url = new URL(href.replaceAll("&amp;", "&"), "https://www.kitapyurdu.com/")
	return `${url.origin}${url.pathname}`
}

function extractLibraryBookmarks(source) {
	const start = source.indexOf("export const LIBRARY_BOOKMARKS")

	if (start === -1) {
		throw new Error("Could not find LIBRARY_BOOKMARKS")
	}

	const assignment = source.indexOf("=", start)
	const bracketStart = source.indexOf("[", assignment)
	let depth = 0
	let end = -1

	for (let index = bracketStart; index < source.length; index += 1) {
		const char = source[index]

		if (char === "[") {
			depth += 1
		} else if (char === "]") {
			depth -= 1

			if (depth === 0) {
				end = index
				break
			}
		}
	}

	if (end === -1) {
		throw new Error("Could not close LIBRARY_BOOKMARKS")
	}

	const snippet = source
		.slice(bracketStart, end + 1)
		.replaceAll(/imageUrl: bookmarkImage\("([^"]+)"\)/g, 'imageUrl: "/img/bookmarks/$1.webp"')

	return new Function(`return ${snippet}`)()
}

function extractExistingCoverUrls(syncSource) {
	const covers = new Map()
	const pattern = /id:\s*"((?:library-)[^"]+)"\s*,\s*url:\s*"([^"]+)"/g

	for (const match of syncSource.matchAll(pattern)) {
		covers.set(match[1], match[2])
	}

	return covers
}

function parseProducts(html) {
	return html
		.split(/<div\s+class="ky-product"/)
		.slice(1)
		.map((chunk) => {
			const productId = chunk.match(/data-product-id="(\d+)"/)?.[1]
			const href = chunk.match(
				/href="(https:\/\/www\.kitapyurdu\.com\/kitap\/[^"]+)"/
			)?.[1]
			const title = chunk.match(/class="ky-product-title"[^>]*>([^<]+)/)?.[1]
			const authors = [
				...chunk.matchAll(/\/yazar\/[^"]+"[^>]*>([^<]+)/g)
			].map((match) => decodeHtml(match[1]))
			const imageUrl = chunk.match(
				/src="(https:\/\/img\.kitapyurdu\.com\/v1\/getImage\/fn:\d+[^"]*)"/
			)?.[1]

			if (!href || !title) {
				return null
			}

			return {
				productId,
				url: toProductUrl(href),
				title: decodeHtml(title),
				author: authors.join(" · "),
				imageUrl: imageUrl ? toFullCoverUrl(imageUrl) : null
			}
		})
		.filter(Boolean)
}

function pickProduct(book, products) {
	const titleCandidates = book.subtitle
		? [book.title, `${book.title} ${book.subtitle}`]
		: [book.title]

	return (
		products.find((product) => {
			const titleMatched = titleCandidates.some((title) => titlesMatch(title, product.title))

			if (!titleMatched) {
				return false
			}

			if (!product.author) {
				return normalizeText(book.title).length >= 12
			}

			return authorsMatch(book.author, product.author)
		}) ?? null
	)
}

async function fetchSearchHtml(query) {
	const url = new URL("https://www.kitapyurdu.com/index.php")
	url.searchParams.set("route", "product/list")
	url.searchParams.set("filter_name", query)
	url.searchParams.set("limit", String(SEARCH_LIMIT))

	const response = await fetch(url, {
		headers: {
			"User-Agent": USER_AGENT,
			Accept: "text/html,application/xhtml+xml",
			"Accept-Language": "tr-TR,tr;q=0.9,en;q=0.8"
		},
		redirect: "follow"
	})

	if (!response.ok) {
		throw new Error(`Kitapyurdu search failed (${response.status}) for ${query}`)
	}

	return response.text()
}

function foldForSearch(value) {
	return value
		.replaceAll("â", "a")
		.replaceAll("î", "i")
		.replaceAll("û", "u")
		.replaceAll("Â", "A")
		.replaceAll("Î", "I")
		.replaceAll("Û", "U")
}

function searchQueries(book) {
	const lastName = splitAuthors(book.author).at(-1)?.split(/\s+/).at(-1) ?? book.author
	const withoutVolume = book.title.replace(/\s*[-–:/]?\s*(III|II|I|3|2|1)\s*$/i, "").trim()
	const foldedTitle = foldForSearch(withoutVolume || book.title)
	const queries = [
		`${book.title} ${book.author}`,
		`${withoutVolume} ${lastName}`,
		`${foldedTitle} ${lastName}`,
		withoutVolume,
		foldedTitle,
		book.title
	]

	return [...new Set(queries.filter((query) => query && query.length >= 2))]
}

async function searchKitapyurdu(book) {
	const queries = searchQueries(book)

	for (const query of queries) {
		const html = await fetchSearchHtml(query)
		const match = pickProduct(book, parseProducts(html))

		if (match) {
			return match
		}
	}

	return null
}

function escapeString(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
}

function formatBookmark(bookmark) {
	const lines = [
		"\t{",
		`\t\tid: "${escapeString(bookmark.id)}",`,
		`\t\ttitle: "${escapeString(bookmark.title)}",`
	]

	if (bookmark.subtitle) {
		lines.push(`\t\tsubtitle: "${escapeString(bookmark.subtitle)}",`)
	}

	if (bookmark.url) {
		lines.push(`\t\turl: "${escapeString(bookmark.url)}",`)
	}

	lines.push(`\t\tauthor: "${escapeString(bookmark.author)}",`)

	if (bookmark.translator) {
		lines.push(`\t\ttranslator: "${escapeString(bookmark.translator)}",`)
	}

	if (bookmark.imageUrl) {
		const imageId = bookmark.imageUrl.replace("/img/bookmarks/", "").replace(".webp", "")
		lines.push(`\t\timageUrl: bookmarkImage("${escapeString(imageId)}"),`)
	}

	lines.push(`\t\tcategoryId: "library",`)
	lines.push(`\t\ttags: ["${escapeString(bookmark.tags[0])}"],`)
	lines.push(`\t\tgenre: "${escapeString(bookmark.genre)}"`)
	lines.push("\t}")

	return lines.join("\n")
}

function formatImageEntry(id, imageUrl) {
	return `\t{\n\t\tid: "${escapeString(id)}",\n\t\turl: "${escapeString(imageUrl)}"\n\t}`
}

function replaceLibraryImageEntries(syncSource, entries) {
	const start = syncSource.indexOf('\n\t{\n\t\tid: "library-')

	if (start === -1) {
		throw new Error("Could not find library image entries")
	}

	const mediaStart = syncSource.indexOf('\n\t{\n\t\t\tid: "media-', start)
	const end = mediaStart === -1 ? syncSource.indexOf("\n]", start) : mediaStart

	return `${syncSource.slice(0, start)}\n${entries.join(",\n")},${syncSource.slice(end)}`
}

async function loadCache() {
	try {
		return JSON.parse(await readFile(cachePath, "utf8"))
	} catch {
		return {}
	}
}

async function saveCache(cache) {
	await mkdir(path.dirname(cachePath), { recursive: true })
	await writeFile(cachePath, `${JSON.stringify(cache, null, 2)}\n`, "utf8")
}

async function main() {
	const limitArg = process.argv.find((value) => value.startsWith("--limit="))
	const limit = limitArg ? Number.parseInt(limitArg.slice("--limit=".length), 10) : null
	const dataSource = await readFile(dataPath, "utf8")
	const syncSource = await readFile(syncScriptPath, "utf8")
	const books = extractLibraryBookmarks(dataSource)
	if (books.length === 0) {
		throw new Error("Refusing to write an empty LIBRARY_BOOKMARKS array")
	}

	const existingCovers = extractExistingCoverUrls(syncSource)
	const cache = await loadCache()
	const missing = books.filter((book) => !book.url || !book.imageUrl)
	const toSearch = Number.isFinite(limit) ? missing.slice(0, limit) : missing
	const unmatched = []

	process.stdout.write(`Searching ${toSearch.length} of ${missing.length} missing books\n`)

	for (const [index, book] of toSearch.entries()) {
		const cached = cache[book.id]

		if (cached?.status === "matched" && cached.url && cached.imageUrl) {
			book.url = cached.url
			book.imageUrl = `/img/bookmarks/${book.id}.webp`
			existingCovers.set(book.id, cached.imageUrl)
			continue
		}

		if (cached?.status === "unmatched") {
			delete cache[book.id]
		}

		try {
			const match = await searchKitapyurdu(book)

			if (match?.url && match.imageUrl) {
				book.url = match.url
				book.imageUrl = `/img/bookmarks/${book.id}.webp`
				existingCovers.set(book.id, match.imageUrl)
				cache[book.id] = {
					status: "matched",
					url: match.url,
					imageUrl: match.imageUrl,
					matchedTitle: match.title,
					matchedAuthor: match.author
				}
				process.stdout.write(
					`[${index + 1}/${toSearch.length}] ${book.title} → ${match.url}\n`
				)
			} else {
				cache[book.id] = { status: "unmatched" }
				unmatched.push(book)
				process.stdout.write(
					`[${index + 1}/${toSearch.length}] ${book.title} — no match\n`
				)
			}
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error)
			unmatched.push(book)
			process.stdout.write(
				`[${index + 1}/${toSearch.length}] ${book.title} — ${message}\n`
			)
		}

		if ((index + 1) % 10 === 0) {
			await saveCache(cache)
		}

		await sleep(SEARCH_DELAY_MS)
	}

	await saveCache(cache)

	for (const book of books) {
		if (book.url && !book.imageUrl && existingCovers.has(book.id)) {
			book.imageUrl = `/img/bookmarks/${book.id}.webp`
		}
	}

	const dataFile = `import type { Bookmark } from "@/features/bookmarks/types/bookmarks.types"

function bookmarkImage(id: string) {
	return \`/img/bookmarks/\${id}.webp\`
}

export const LIBRARY_BOOKMARKS: Bookmark[] = [
${books.map(formatBookmark).join(",\n")}
]
`

	await writeFile(dataPath, dataFile, "utf8")

	const imageEntries = [...existingCovers.entries()].map(([id, imageUrl]) =>
		formatImageEntry(id, toFullCoverUrl(imageUrl))
	)
	await writeFile(syncScriptPath, replaceLibraryImageEntries(syncSource, imageEntries), "utf8")

	const withUrl = books.filter((book) => book.url).length
	const withImage = books.filter((book) => book.imageUrl).length

	process.stdout.write(
		`Updated ${books.length} books (${withUrl} urls, ${withImage} images)\nUnmatched:\n${unmatched
			.map((book) => `- ${book.title} (${book.author})`)
			.join("\n")}\n`
	)
}

main().catch((error) => {
	console.error(error)
	process.exit(1)
})
