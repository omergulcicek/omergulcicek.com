import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const inputPath = process.argv[2] ?? path.join(process.env.HOME ?? "", "Downloads/Kitapligim.txt")
const outputPath = path.join(rootDir, "scripts/library-books.data.json")

const tagByProductId = {
	106298: "Osmanlı",
	460636: "Osmanlı",
	701864: "Osmanlı",
	80245: "Osmanlı",
	582119: "Osmanlı",
	715169: "Osmanlı",
	324084: "Osmanlı",
	415302: "Osmanlı",
	710982: "Osmanlı",
	487377: "İslam",
	620987: "İslam",
	641708: "Edebiyat",
	721477: "Osmanlı",
	689752: "Osmanlı",
	371513: "Dünya Tarihi",
	449296: "Dünya Tarihi",
	668164: "Edebiyat",
	524510: "Cumhuriyet",
	150920: "Edebiyat",
	631391: "Edebiyat",
	374330: "Osmanlı",
	106297: "Osmanlı",
	401713: "Osmanlı",
	595100: "Edebiyat",
	642279: "Dünya Tarihi",
	705347: "Dünya Tarihi",
	701428: "İslam",
	461625: "İslam",
	691634: "Osmanlı",
	509826: "Osmanlı",
	599358: "İslam",
	396401: "Edebiyat",
	717193: "Osmanlı",
	471959: "Cumhuriyet",
	58230: "Cumhuriyet",
	551964: "İslam",
	467400: "İslam",
	461827: "Dünya Tarihi",
	572093: "Edebiyat",
	549240: "Edebiyat",
	386572: "Osmanlı",
	455566: "Osmanlı",
	459664: "Dünya Tarihi",
	88173: "Edebiyat",
	75913: "Edebiyat",
	618603: "Edebiyat",
	18263: "Edebiyat",
	4787: "Edebiyat",
	727: "Edebiyat",
	488: "Edebiyat",
	4879: "Edebiyat",
	495562: "İslam",
	4798: "Edebiyat",
	4801: "Edebiyat",
	4775: "Edebiyat",
	19088: "Edebiyat",
	4776: "Edebiyat",
	6522: "Edebiyat",
	6384: "İslam",
	1099: "İslam",
	1102: "İslam",
	663010: "Edebiyat",
	607691: "İslam",
	305588: "İslam",
	408175: "İslam",
	408363: "İslam",
	240852: "İslam",
	42711: "Edebiyat",
	321683: "Edebiyat",
	261783: "Edebiyat",
	311263: "İslam",
	130135: "Edebiyat",
	81650: "İslam",
	677801: "Edebiyat",
	416958: "Dünya Tarihi",
	457862: "Edebiyat",
	528784: "Edebiyat",
	499470: "Edebiyat",
	6514: "İslam",
	6385: "İslam",
	335517: "Osmanlı",
	430261: "Osmanlı",
	311444: "Osmanlı",
	342725: "Osmanlı",
	13641: "Cumhuriyet",
	243385: "Edebiyat",
	251503: "Cumhuriyet",
	246740: "Cumhuriyet",
	595418: "Edebiyat",
	251501: "Cumhuriyet",
	243383: "Edebiyat",
	588450: "Edebiyat",
	452636: "Edebiyat"
}

function cleanUrl(rawLine) {
	const trimmed = rawLine.trim()
	if (!trimmed) {
		return null
	}

	const withoutQuery = trimmed.split("&")[0]
	return withoutQuery.replace(/\/+$/, "")
}

function productIdFromUrl(url) {
	const match = url.match(/\/(\d+)\.html$/)
	if (!match) {
		throw new Error(`Could not parse product id from ${url}`)
	}

	return match[1]
}

function slugFromUrl(url) {
	const match = url.match(/\/kitap\/([^/]+)\/\d+\.html$/)
	if (!match) {
		throw new Error(`Could not parse slug from ${url}`)
	}

	return match[1]
}

function bookmarkIdFromUrl(url) {
	const slug = slugFromUrl(url)
	const productId = productIdFromUrl(url)
	return `library-${slug}-${productId}`.replace(/-+/g, "-")
}

function decodeHtml(value) {
	return value
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#039;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/\s+/g, " ")
		.trim()
}

function cleanTitle(rawTitle) {
	let title = decodeHtml(rawTitle)
	title = title.replace(/\s*\((Ciltli|Karton Kapak|kod\d+|Günümüz Türkçesiyle)\)\s*/gi, " ")
	title = title.replace(/\s+/g, " ").trim()
	return title
}

function cleanSubtitle(rawSubtitle) {
	let subtitle = decodeHtml(rawSubtitle)
	subtitle = subtitle.replace(/\s*\((Ciltli|Karton Kapak|kod\d+|Günümüz Türkçesiyle)\)\s*/gi, " ")
	subtitle = subtitle.replace(/\s+/g, " ").trim()
	return subtitle
}

function extractTitleParts(html) {
	const headingMatch = html.match(/<h1 class="pr_header__heading">([\s\S]*?)<\/h1>/)
	if (headingMatch) {
		const headingHtml = headingMatch[1]
		const stripTags = (value) => decodeHtml(value.replace(/<[^>]+>/g, ""))
		const spanTitles = [...headingHtml.matchAll(/<span[^>]*>([\s\S]*?)<\/span>/gi)]
			.map((match) => cleanSubtitle(stripTags(match[1])))
			.filter(Boolean)
		let mainHtml = headingHtml.replace(/<span[^>]*>[\s\S]*?<\/span>/gi, "")
		mainHtml = mainHtml.replace(/<\/?span[^>]*>/gi, "")
		const mainTitle = cleanTitle(stripTags(mainHtml))

		if (mainTitle && spanTitles.length > 0) {
			return {
				title: mainTitle,
				subtitle: spanTitles.join(" / ")
			}
		}

		if (mainTitle) {
			return { title: mainTitle }
		}
	}

	const fallback =
		extractMatch(html, /<meta property="og:title" content="([^"]+)"/) ??
		extractMatch(html, /<title>([^<(]+)/)

	return fallback ? { title: cleanTitle(fallback) } : null
}

function splitLibraryTitleHeuristic(title) {
	if (title.includes(" & ")) {
		const index = title.indexOf(" & ")
		return {
			title: title.slice(0, index),
			subtitle: title.slice(index + 3)
		}
	}

	if (title.includes(" / ")) {
		const index = title.indexOf(" / ")
		return {
			title: title.slice(0, index),
			subtitle: title.slice(index + 3)
		}
	}

	const slashMatch = title.match(/^([^/]+)\/(.+)$/)
	if (slashMatch) {
		return {
			title: slashMatch[1].trim(),
			subtitle: slashMatch[2].trim()
		}
	}

	const dashMatch = title.match(/^(.+?) - (.+)$/)
	if (dashMatch) {
		return {
			title: dashMatch[1].trim(),
			subtitle: dashMatch[2].trim()
		}
	}

	const colonMatch = title.match(/^(.+?): (.+)$/)
	if (colonMatch) {
		return {
			title: colonMatch[1].trim(),
			subtitle: colonMatch[2].trim()
		}
	}

	const parenMatch = title.match(/^(.+?) \((.+)\)$/)
	if (parenMatch) {
		return {
			title: parenMatch[1].trim(),
			subtitle: parenMatch[2].trim()
		}
	}

	return { title }
}

function extractTitle(html) {
	const titleParts = extractTitleParts(html)
	if (!titleParts) {
		return null
	}

	if (titleParts.subtitle) {
		return titleParts
	}

	return splitLibraryTitleHeuristic(titleParts.title)
}

function extractMatch(html, pattern) {
	const match = html.match(pattern)
	return match ? decodeHtml(match[1]) : null
}

function extractAttributeAuthors(html, labels) {
	const authors = []

	for (const label of labels) {
		const pattern = new RegExp(
			`<td>\\s*${label}:?\\s*<\\/td>\\s*<td>\\s*<a[^>]*>([^<]+)<\\/a>`,
			"g"
		)

		for (const match of html.matchAll(pattern)) {
			const value = decodeHtml(match[1])
			if (value && !authors.includes(value)) {
				authors.push(value)
			}
		}
	}

	return authors
}

function extractAuthor(html) {
	const manufacturerAuthor = extractMatch(
		html,
		/<div class="pr_producers__manufacturer">[\s\S]*?<a class="pr_producers__link"[^>]*>([^<]+)<\/a>/
	)

	if (manufacturerAuthor) {
		return manufacturerAuthor
	}

	const attributeAuthors = extractAttributeAuthors(html, [
		"Yazar",
		"Derleyici",
		"Editör",
		"Hazırlayan"
	])

	if (attributeAuthors.length > 0) {
		return attributeAuthors.join(" · ")
	}

	return extractMatch(html, /<title>[^<(]+\(([^)]+)\)\s*Fiyat/i)
}

async function fetchBook(url) {
	const response = await fetch(url, {
		headers: {
			"User-Agent": "omergulcicek.com library bookmark sync",
			Accept: "text/html"
		},
		redirect: "follow"
	})

	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.status}`)
	}

	return response.text()
}

function parseBookPage(html, url) {
	const productId = Number(productIdFromUrl(url))
	const titleParts = extractTitle(html)

	const author = extractAuthor(html)

	const translatorAuthors = extractAttributeAuthors(html, ["Çevirmen"])
	const translator = translatorAuthors.length > 0 ? translatorAuthors.join(" · ") : null

	const imageUrl =
		extractMatch(html, /<meta property="og:image" content="([^"]+)"/) ??
		extractMatch(html, /https:\/\/img\.kitapyurdu\.com\/v1\/getImage\/fn:\d+[^"'\s]*/)

	const tag = tagByProductId[productId]
	if (!tag) {
		throw new Error(`Missing tag mapping for product ${productId} (${url})`)
	}

	if (!titleParts?.title) {
		throw new Error(`Missing title for ${url}`)
	}

	if (!author) {
		throw new Error(`Missing author for ${url}`)
	}

	return {
		id: bookmarkIdFromUrl(url),
		title: titleParts.title,
		subtitle: titleParts.subtitle,
		url,
		author: author.replace(/\s+/g, " ").trim(),
		translator: translator ? translator.replace(/\s+/g, " ").trim() : undefined,
		imageUrl,
		imageId: bookmarkIdFromUrl(url),
		categoryId: "library",
		tag
	}
}

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

async function main() {
	const raw = await readFile(inputPath, "utf8")
	const urls = raw
		.split("\n")
		.map(cleanUrl)
		.filter(Boolean)

	const books = []

	for (const [index, url] of urls.entries()) {
		process.stderr.write(`[${index + 1}/${urls.length}] ${url}\n`)
		const html = await fetchBook(url)
		books.push(parseBookPage(html, url))
		await sleep(350)
	}

	await writeFile(outputPath, `${JSON.stringify(books, null, 2)}\n`, "utf8")
	process.stderr.write(`Wrote ${books.length} books to ${outputPath}\n`)
}

main().catch((error) => {
	console.error(error)
	process.exit(1)
})
