import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const booksPath =
	"/Users/omergulcicek/Projeler/mervegulcicek.com/src/features/library/data/books.data.ts"
const constantsPath =
	process.env.LIBRARY_EXISTING_CONSTANTS ??
	path.join(rootDir, "src/features/bookmarks/constants/bookmarks.constants.ts")
const outputPath = path.join(
	rootDir,
	"src/features/bookmarks/data/library-bookmarks.data.ts"
)

const CATEGORY_LABELS = {
	edebiyat: "Edebiyat",
	"felsefe-ve-dusunce": "Felsefe ve Düşünce",
	islam: "İslam",
	"tarih-ve-kultur": "Tarih",
	bilim: "Bilim",
	"ani-ve-biyografi": "Anı ve Biyografi",
	"kisisel-gelisim": "Kişisel Gelişim"
}

const DIGERLERI_CATEGORY_IDS = new Set([
	"edebiyat",
	"felsefe-ve-dusunce",
	"bilim",
	"ani-ve-biyografi",
	"kisisel-gelisim"
])

const SUBCATEGORY_LABELS = {
	roman: "Roman",
	oyku: "Öykü",
	siir: "Şiir",
	deneme: "Deneme",
	"roman-ve-oyku": "Dünya Edebiyatı",
	felsefe: "Felsefe",
	"siyaset-ve-toplum": "Siyaset ve Toplum",
	dusunce: "Düşünce",
	tasavvuf: "Tasavvuf",
	siyer: "Siyer",
	"ilmihal-ve-dua": "İlmihal ve Dua",
	"genel-turk-tarihi": "Genel Türk Tarihi",
	"osmanli-tarihi": "Osmanlı Tarihi",
	"hatirat-ve-ani": "Hatırat ve Anı",
	roma: "Roma",
	cumhuriyet: "Cumhuriyet",
	"sehir-tarihi": "Şehir Tarihi",
	"kultur-mitoloji-ve-dunya-medeniyetleri":
		"Kültür, Mitoloji ve Dünya Medeniyetleri",
	tarih: "Genel Türk Tarihi",
	osmanli: "Osmanlı Tarihi",
	"cumhuriyet-ve-yakin-tarih": "Cumhuriyet",
	"roma-ve-bizans": "Roma",
	kultur: "Kültür, Mitoloji ve Dünya Medeniyetleri",
	"bilim-felsefesi": "Bilim Felsefesi",
	bulmaca: "Bulmaca",
	ani: "Anı",
	biyografi: "Biyografi",
	"kisisel-gelisim": "Kişisel Gelişim"
}

function resolveLibraryTaxonomy(categoryId, subcategoryId) {
	if (DIGERLERI_CATEGORY_IDS.has(categoryId)) {
		return {
			tags: ["Diğerleri"],
			genre: CATEGORY_LABELS[categoryId]
		}
	}

	if (categoryId === "islam") {
		const islamGenre =
			{
				"kuran-i-kerim-ve-meal": "Kur'an-ı Kerim ve Meal",
				"kuran-i-kerim": "Kur'an-ı Kerim ve Meal",
				meal: "Kur'an-ı Kerim ve Meal",
				tefsir: "Tefsir",
				"akaid-ve-ilmihal": "Akaid ve İlmihal",
				akaid: "Akaid ve İlmihal",
				ilmihal: "Akaid ve İlmihal",
				"hadis-ve-sunnet": "Hadis ve Sünnet",
				"hadis-edep-ahlak": "Hadis ve Sünnet",
				siyer: "Siyer",
				"ahlak-tasavvuf": "Tasavvuf",
				"islam-dusuncesi": "İslam Düşüncesi",
				"islam-dusuncesi-fikriyat": "İslam Düşüncesi",
				dusunce: "İslam Düşüncesi",
				tasavvuf: "Tasavvuf",
				"ilmihal-ve-dua": "Akaid ve İlmihal"
			}[subcategoryId] ?? "İslam Düşüncesi"

		return {
			tags: ["İslam"],
			genre: islamGenre
		}
	}

	return {
		tags: [CATEGORY_LABELS[categoryId]],
		genre: SUBCATEGORY_LABELS[subcategoryId]
	}
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
	if (Array.isArray(author)) {
		return author.flatMap((item) => splitAuthors(item))
	}

	return author
		.split(/\s*[·,;/]\s*|\s+ve\s+/)
		.map((item) => item.trim())
		.filter(Boolean)
}

function authorsMatch(existingAuthor, incomingAuthor) {
	const existing = splitAuthors(existingAuthor).map(stripAuthorTitles)
	const incoming = splitAuthors(incomingAuthor).map(stripAuthorTitles)

	return incoming.some((left) =>
		existing.some(
			(right) =>
				left.includes(right) || right.includes(left) || editDistance(left, right) <= 1
		)
	)
}

function titlesMatch(existing, incoming) {
	const left = normalizeText(existing)
	const right = normalizeText(incoming)

	if (left === right) {
		return true
	}

	if (left.length >= 8 && right.length >= 8 && (left.includes(right) || right.includes(left))) {
		return true
	}

	return false
}

const MANUAL_MATCHES = {
	"inazo-nitobe-busido-japon-savasci-yolu": "library-japon-savas-sanati-busido-396401",
	"erhan-ciftci-kutul-amare-kahramani-halil-kut-pasanin-hatiralari":
		"library-kutulamare-kahramani-halil-kut-pasanin-hatiralari-374330",
	"mehmet-ali-kaya-turkiye-tarihi-ve-uygarliklari-1":
		"library-turkiye-tarihi-ve-uygarliklari-seti"
}

const SKIP_SOURCE_IDS = new Set([
	"mehmet-ali-kaya-turkiye-tarihi-ve-uygarliklari-2",
	"m-ali-erdogru-turkiye-tarihi-ve-uygarliklari-3",
	"m-ali-erdogru-turkiye-tarihi-ve-uygarliklari-4",
	"sabri-surgevil-turkiye-tarihi-ve-uygarliklari-5",
	"sabri-surgevil-turkiye-tarihi-ve-uygarliklari-6"
])

const BOOK_OVERRIDES = {
	"sezai-karakoc-islamin-vadettikleri": {
		author: "Roger Garaudy"
	},
	"m-yusuf-kadioglu-musluman-muhendisin-yol-haritasi": {
		tags: ["İslam"],
		genre: "İslam Düşüncesi"
	},
	"ismail-hakki-aydin-homo-deyyus": {
		tags: ["Diğerleri"],
		genre: "Bilim"
	},
	"ismail-hakki-aydin-vecizelerim": {
		tags: ["Diğerleri"],
		genre: "Felsefe ve Düşünce"
	},
	"ismail-hakki-aydin-yasam-5-0-kuantik-dusunce-sarmali": {
		tags: ["Diğerleri"],
		genre: "Bilim"
	},
	"ismail-hakki-aydin-insan-endiseli-bir-damla-hem-parcacik-hem-dalga": {
		tags: ["Diğerleri"],
		genre: "Bilim"
	},
	"virginia-woolf-kendine-ait-bir-oda": {
		tags: ["Diğerleri"],
		genre: "Edebiyat"
	},
	"rasim-ozdenoren-muslumanca-dusunme-uzerine-denemeler": {
		tags: ["İslam"],
		genre: "İslam Düşüncesi"
	},
	"ali-hammuda-40-pratik-sunnet": {
		tags: ["İslam"],
		genre: "Hadis ve Sünnet"
	},
	"mehmet-ali-kaya-turkiye-tarihi-ve-uygarliklari-1": {
		id: "library-turkiye-tarihi-ve-uygarliklari-seti",
		title: "Türkiye Tarihi ve Uygarlıkları Seti",
		author: ["Mehmet Ali Kaya", "M. Ali Erdoğru", "Sabri Sürgevil"]
	}
}

const AUTHOR_CATEGORY_OVERRIDES = {}

function extractObjectArray(source, marker) {
	const start = source.indexOf(marker)

	if (start === -1) {
		throw new Error(`Could not find ${marker}`)
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
		throw new Error(`Could not close array for ${marker}`)
	}

	return new Function(`return ${source.slice(bracketStart, end + 1)}`)()
}

function extractLibraryBookmarks(source) {
	const start = source.indexOf('\n\t{\n\t\t\tid: "library-')

	if (start === -1) {
		throw new Error("Could not find library bookmarks")
	}

	const arrayEnd = source.indexOf("\n]", start)
	const snippet = `[${source.slice(start + 1, arrayEnd)}]`
		.replaceAll(/imageUrl: bookmarkImage\("([^"]+)"\)/g, 'imageUrl: "/img/bookmarks/$1.webp"')

	return new Function(`return ${snippet}`)()
}

function formatAuthors(author) {
	const authors = splitAuthors(author)

	if (authors.length === 1) {
		return authors[0]
	}

	return authors
}

function formatAuthorLiteral(author) {
	if (Array.isArray(author)) {
		return `[${author.map((name) => `"${escapeString(name)}"`).join(", ")}]`
	}

	return `"${escapeString(author)}"`
}

function formatAuthorLog(author) {
	if (Array.isArray(author)) {
		return author.join(" · ")
	}

	return author
}

function escapeString(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
}

function formatBookmark(bookmark) {
	const lines = ["\t{", `\t\tid: "${escapeString(bookmark.id)}",`, `\t\ttitle: "${escapeString(bookmark.title)}",`]

	if (bookmark.subtitle) {
		lines.push(`\t\tsubtitle: "${escapeString(bookmark.subtitle)}",`)
	}

	if (bookmark.url) {
		lines.push(`\t\turl: "${escapeString(bookmark.url)}",`)
	}

	lines.push(`\t\tauthor: ${formatAuthorLiteral(bookmark.author)},`)

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

function existingSearchKeys(existing) {
	const title = existing.title
	const withSubtitle = existing.subtitle ? `${existing.title} ${existing.subtitle}` : existing.title

	return [title, withSubtitle]
}

async function main() {
	const booksSource = await readFile(booksPath, "utf8")
	const constantsSource = await readFile(constantsPath, "utf8")
	const incomingBooks = extractObjectArray(booksSource, "const books: Book[] =")
	const existingBooks = extractLibraryBookmarks(constantsSource)
	const usedExistingIds = new Set()

	const libraryBookmarks = incomingBooks.flatMap((book) => {
		if (SKIP_SOURCE_IDS.has(book.id)) {
			return []
		}

		const incomingTitle = book.subtitle ? `${book.title} ${book.subtitle}` : book.title
		const manualMatchId = MANUAL_MATCHES[book.id]
		const match = existingBooks.find((existing) => {
			if (usedExistingIds.has(existing.id)) {
				return false
			}

			if (manualMatchId) {
				return existing.id === manualMatchId
			}

			const titleMatched = existingSearchKeys(existing).some(
				(key) => titlesMatch(key, book.title) || titlesMatch(key, incomingTitle)
			)

			if (!titleMatched) {
				return false
			}

			return authorsMatch(existing.author, book.author)
		})

		if (match) {
			usedExistingIds.add(match.id)
		}

		const bookOverride = BOOK_OVERRIDES[book.id]
		const author = bookOverride?.author ?? formatAuthors(book.author)
		const authors = splitAuthors(author)
		const categoryOverride = authors
			.map((name) => AUTHOR_CATEGORY_OVERRIDES[normalizeText(name)])
			.find(Boolean)

		const taxonomy = resolveLibraryTaxonomy(book.categoryId, book.subcategoryId)

		return {
			id: bookOverride?.id ?? match?.id ?? `library-${book.id}`,
			title: bookOverride?.title ?? book.title,
			subtitle: book.subtitle,
			url: match?.url,
			author,
			translator: book.translator ?? match?.translator,
			imageUrl: match?.imageUrl,
			tags: bookOverride?.tags ?? categoryOverride?.tags ?? taxonomy.tags,
			genre: bookOverride?.genre ?? categoryOverride?.genre ?? taxonomy.genre
		}
	})

	const matchedCount = libraryBookmarks.filter((book) => book.imageUrl).length
	const unmatchedExisting = existingBooks.filter((book) => !usedExistingIds.has(book.id))

	const file = `import type { Bookmark } from "@/features/bookmarks/types/bookmarks.types"

function bookmarkImage(id: string) {
	return \`/img/bookmarks/\${id}.webp\`
}

export const LIBRARY_BOOKMARKS: Bookmark[] = [
${libraryBookmarks.map(formatBookmark).join(",\n")}
]
`

	await writeFile(outputPath, file, "utf8")

	process.stdout.write(
		`Wrote ${libraryBookmarks.length} books (${matchedCount} with images)\nUnmatched existing:\n${unmatchedExisting
			.map((book) => `- ${book.title} (${formatAuthorLog(book.author)}) [${book.id}]`)
			.join("\n")}\n`
	)
}

main().catch((error) => {
	console.error(error)
	process.exit(1)
})
