import { describe, expect, it } from "vitest"

import {
	applyBookmarkFilters,
	areBookmarkTagsEqual,
	getBookmarkAllTagLabel,
	getAvailableBookmarkSubtags,
	getAvailableBookmarkTags,
	getBookmarkSubtagCounts,
	getBookmarkTagCounts,
	getBookmarkTagLabel,
	getBookmarkAuthorCredit,
	getBookmarkDisplayTitle,
	isBookmarkSortVisible,
	normalizeBookmarkTagUrlValue,
	resolveBookmarkCategoryId,
	resolveBookmarkSort,
	resolveBookmarkTag
} from "@/features/bookmarks/helpers/bookmark-helpers"
import type { Bookmark } from "@/features/bookmarks/types/bookmarks.types"

const sampleBookmarks: Bookmark[] = [
	{
		id: "1",
		title: "Overreacted",
		url: "https://overreacted.io",
		categoryId: "frontend",
		tags: ["npm"]
	},
	{
		id: "2",
		title: "CSS-Tricks",
		url: "https://css-tricks.com",
		categoryId: "frontend",
		tags: ["Siteler"]
	},
	{
		id: "3",
		title: "Daily.dev",
		url: "https://daily.dev",
		categoryId: "frontend",
		tags: ["npm"]
	},
	{
		id: "4",
		title: "ESLint",
		url: "https://marketplace.cursorapi.com/items?itemName=dbaeumer.vscode-eslint",
		categoryId: "media",
		tags: ["Film"]
	}
]

describe("bookmark helpers", () => {
	it("falls back to the default category for invalid values", () => {
		expect(resolveBookmarkCategoryId("invalid")).toBe("blog")
		expect(resolveBookmarkCategoryId(null)).toBe("blog")
	})

	it("maps the legacy personal category to media", () => {
		expect(resolveBookmarkCategoryId("personal")).toBe("media")
	})

	it("returns sorted tags for the selected category", () => {
		expect(getAvailableBookmarkTags(sampleBookmarks, "frontend")).toEqual([
			"npm",
			"Siteler"
		])
	})

	it("returns library tags in the configured order", () => {
		const libraryBookmarks: Bookmark[] = [
			{
				id: "library-1",
				title: "Book 1",
				url: "https://example.com/1",
				categoryId: "library",
				tags: ["Edebiyat"]
			},
			{
				id: "library-2",
				title: "Book 2",
				url: "https://example.com/2",
				categoryId: "library",
				tags: ["İslam"]
			},
			{
				id: "library-3",
				title: "Book 3",
				url: "https://example.com/3",
				categoryId: "library",
				tags: ["Osmanlı"]
			},
			{
				id: "library-4",
				title: "Book 4",
				url: "https://example.com/4",
				categoryId: "library",
				tags: ["Cumhuriyet"]
			},
			{
				id: "library-5",
				title: "Book 5",
				url: "https://example.com/5",
				categoryId: "library",
				tags: ["Dünya Tarihi"]
			}
		]

		expect(getAvailableBookmarkTags(libraryBookmarks, "library")).toEqual([
			"Dünya Tarihi",
			"İslam",
			"Osmanlı",
			"Cumhuriyet",
			"Edebiyat"
		])
	})

	it("returns blog tags in the configured order", () => {
		const blogBookmarks: Bookmark[] = [
			{
				id: "blog-kurum",
				title: "Upstash Blog",
				url: "https://upstash.com/blog",
				categoryId: "blog",
				tags: ["Kurum"]
			},
			{
				id: "blog-kisi",
				title: "TkDodo",
				url: "https://tkdodo.eu/blog/all",
				categoryId: "blog",
				tags: ["Kişi"]
			},
			{
				id: "blog-yayin",
				title: "CSS-Tricks",
				url: "https://css-tricks.com/",
				categoryId: "blog",
				tags: ["Yayın"]
			}
		]

		expect(getAvailableBookmarkTags(blogBookmarks, "blog")).toEqual([
			"Kişi",
			"Yayın",
			"Kurum"
		])
	})

	it("resolves to all when the current tag is missing", () => {
		expect(resolveBookmarkTag(["npm", "Siteler"], null)).toBeNull()
		expect(resolveBookmarkTag(["npm", "Siteler"], "missing")).toBeNull()
	})

	it("resolves tags case-insensitively from the url", () => {
		expect(resolveBookmarkTag(["npm", "Siteler"], "siteler")).toBe("Siteler")
		expect(resolveBookmarkTag(["Film", "Dizi"], "film")).toBe("Film")
	})

	it("normalizes turkish tags for urls without combining marks", () => {
		expect(normalizeBookmarkTagUrlValue("İslam")).toBe("islam")
		expect(normalizeBookmarkTagUrlValue("İngilizce")).toBe("ingilizce")
		expect(normalizeBookmarkTagUrlValue("İslam".toLowerCase())).toBe("islam")
	})

	it("matches turkish tags from legacy broken url values", () => {
		expect(resolveBookmarkTag(["İslam", "Osmanlı"], "islam")).toBe("İslam")
		expect(resolveBookmarkTag(["İslam", "Osmanlı"], "İslam".toLowerCase())).toBe(
			"İslam"
		)
		expect(areBookmarkTagsEqual("islam", "İslam")).toBe(true)
		expect(areBookmarkTagsEqual("İslam".toLowerCase(), "İslam")).toBe(true)
	})

	it("filters bookmarks by category and tag", () => {
		expect(
			applyBookmarkFilters(sampleBookmarks, {
				categoryId: "frontend",
				tag: null
			}).map((bookmark) => bookmark.title)
		).toEqual(["CSS-Tricks", "Daily.dev", "Overreacted"])

		expect(
			applyBookmarkFilters(sampleBookmarks, {
				categoryId: "frontend",
				tag: "Siteler"
			})
		).toEqual([sampleBookmarks[1]])

		expect(
			applyBookmarkFilters(sampleBookmarks, {
				categoryId: "media",
				tag: "Film"
			})
		).toEqual([sampleBookmarks[3]])
	})

	it("sorts bookmarks alphabetically by title", () => {
		const libraryBookmarks: Bookmark[] = [
			{
				id: "library-z",
				title: "Zeytin Dağı",
				url: "https://example.com/z",
				categoryId: "library",
				tags: ["Osmanlı"]
			},
			{
				id: "library-a",
				title: "Ayasofya'nın Gizli Tarihi",
				url: "https://example.com/a",
				categoryId: "library",
				tags: ["Osmanlı"]
			},
			{
				id: "library-i",
				title: "İslam Düşüncesi",
				url: "https://example.com/i",
				categoryId: "library",
				tags: ["Osmanlı"]
			}
		]

		expect(
			applyBookmarkFilters(libraryBookmarks, {
				categoryId: "library",
				tag: "Osmanlı"
			}).map((bookmark) => bookmark.title)
		).toEqual([
			"Ayasofya'nın Gizli Tarihi",
			"İslam Düşüncesi",
			"Zeytin Dağı"
		])
	})

	it("sorts library bookmarks by author", () => {
		const libraryBookmarks: Bookmark[] = [
			{
				id: "library-z",
				title: "Zeytin Dağı",
				url: "https://example.com/z",
				author: "Ziya Gökalp",
				categoryId: "library",
				tags: ["Osmanlı"]
			},
			{
				id: "library-a",
				title: "Ayasofya'nın Gizli Tarihi",
				url: "https://example.com/a",
				author: "Ahmet Kaya",
				categoryId: "library",
				tags: ["Osmanlı"]
			},
			{
				id: "library-i",
				title: "İslam Düşüncesi",
				url: "https://example.com/i",
				author: "Mehmet Akif",
				categoryId: "library",
				tags: ["Osmanlı"]
			}
		]

		expect(
			applyBookmarkFilters(libraryBookmarks, {
				categoryId: "library",
				tag: "Osmanlı",
				sort: "author"
			}).map((bookmark) => bookmark.author)
		).toEqual(["Ahmet Kaya", "Mehmet Akif", "Ziya Gökalp"])
	})

	it("sorts media bookmarks by imdb rating", () => {
		const mediaBookmarks: Bookmark[] = [
			{
				id: "media-low",
				title: "Low Rated",
				url: "https://example.com/low",
				imdbRating: "7.0",
				categoryId: "media",
				tags: ["Film"]
			},
			{
				id: "media-high",
				title: "High Rated",
				url: "https://example.com/high",
				imdbRating: "9.1",
				categoryId: "media",
				tags: ["Film"]
			},
			{
				id: "media-mid",
				title: "Mid Rated",
				url: "https://example.com/mid",
				imdbRating: "8.4",
				categoryId: "media",
				tags: ["Film"]
			}
		]

		expect(
			applyBookmarkFilters(mediaBookmarks, {
				categoryId: "media",
				tag: "Film",
				sort: "rating-desc"
			}).map((bookmark) => bookmark.title)
		).toEqual(["High Rated", "Mid Rated", "Low Rated"])

		expect(
			applyBookmarkFilters(mediaBookmarks, {
				categoryId: "media",
				tag: "Film",
				sort: "rating-asc"
			}).map((bookmark) => bookmark.title)
		).toEqual(["Low Rated", "Mid Rated", "High Rated"])
	})

	it("controls bookmark sort visibility by category and tag", () => {
		expect(isBookmarkSortVisible("frontend", null)).toBe(false)
		expect(isBookmarkSortVisible("frontend", "npm")).toBe(false)
		expect(isBookmarkSortVisible("library", null)).toBe(true)
		expect(isBookmarkSortVisible("library", "Osmanlı")).toBe(true)
		expect(isBookmarkSortVisible("media", null)).toBe(false)
		expect(isBookmarkSortVisible("media", "Youtube")).toBe(false)
		expect(isBookmarkSortVisible("media", "Film")).toBe(true)
		expect(isBookmarkSortVisible("media", "Dizi")).toBe(true)
	})

	it("resolves bookmark sort for the active filter context", () => {
		expect(resolveBookmarkSort(null, "library", null)).toBe("title")
		expect(resolveBookmarkSort("author", "library", null)).toBe("author")
		expect(resolveBookmarkSort("rating-desc", "library", null)).toBe("title")
		expect(resolveBookmarkSort(null, "media", "Film")).toBe("rating-desc")
		expect(resolveBookmarkSort("rating-asc", "media", "Dizi")).toBe("rating-asc")
		expect(resolveBookmarkSort("title", "media", "Youtube")).toBeNull()
		expect(resolveBookmarkSort("title", "frontend", null)).toBeNull()
	})

	it("adds flag emojis to language tag labels", () => {
		expect(getBookmarkTagLabel("Türkçe")).toBe("🇹🇷 Türkçe")
		expect(getBookmarkTagLabel("İngilizce")).toBe("🇬🇧 İngilizce")
		expect(getBookmarkTagLabel("Chrome")).toBe("Chrome")
	})

	it("formats all-tag labels as Tümü", () => {
		expect(getBookmarkAllTagLabel()).toBe("Tümü")
	})

	it("formats bookmark display titles with subtitles", () => {
		expect(
			getBookmarkDisplayTitle({
				id: "library-timur",
				title: "Timur",
				subtitle: "Yıldızların Bahtına Hükmeden Son Cihangir",
				url: "https://example.com",
				categoryId: "library",
				tags: ["Dünya Tarihi"]
			})
		).toBe("Timur • Yıldızların Bahtına Hükmeden Son Cihangir")

		expect(
			getBookmarkDisplayTitle({
				id: "library-spqr",
				title: "SPQR",
				url: "https://example.com",
				categoryId: "library",
				tags: ["Dünya Tarihi"]
			})
		).toBe("SPQR")
	})

	it("formats library author credits", () => {
		expect(
			getBookmarkAuthorCredit({
				id: "library-spqr",
				title: "SPQR",
				url: "https://example.com",
				author: "Mary Beard",
				categoryId: "library",
				tags: ["Dünya Tarihi"]
			})
		).toBe("Mary Beard")

		expect(
			getBookmarkAuthorCredit({
				id: "library-spqr-tr",
				title: "SPQR",
				url: "https://example.com",
				author: "Mary Beard",
				translator: "İrem Sağlamer",
				categoryId: "library",
				tags: ["Dünya Tarihi"]
			})
		).toBe("Mary Beard (Çevirmen: İrem Sağlamer)")
	})

	it("counts bookmarks per tag in the selected category", () => {
		expect(Object.fromEntries(getBookmarkTagCounts(sampleBookmarks, "frontend"))).toEqual({
			npm: 2,
			Siteler: 1
		})
	})

	it("lists library authors alphabetically with counts", () => {
		const libraryBookmarks: Bookmark[] = [
			{
				id: "library-z",
				title: "Zeytin Dağı",
				url: "https://example.com/z",
				author: "Ziya Gökalp",
				categoryId: "library",
				tags: ["Osmanlı"]
			},
			{
				id: "library-a1",
				title: "Ayasofya",
				url: "https://example.com/a1",
				author: "Ahmet Kaya",
				categoryId: "library",
				tags: ["Osmanlı"]
			},
			{
				id: "library-a2",
				title: "İkinci Kitap",
				url: "https://example.com/a2",
				author: "Ahmet Kaya",
				categoryId: "library",
				tags: ["Edebiyat"]
			},
			{
				id: "library-i",
				title: "İslam Düşüncesi",
				url: "https://example.com/i",
				author: "Mehmet Akif",
				categoryId: "library",
				tags: ["Osmanlı"]
			}
		]

		expect(getAvailableBookmarkSubtags(libraryBookmarks, "library", null)).toEqual([
			"Ahmet Kaya",
			"Mehmet Akif",
			"Ziya Gökalp"
		])
		expect(Object.fromEntries(getBookmarkSubtagCounts(libraryBookmarks, "library", null))).toEqual({
			"Ahmet Kaya": 2,
			"Mehmet Akif": 1,
			"Ziya Gökalp": 1
		})
		expect(getAvailableBookmarkSubtags(libraryBookmarks, "library", "Osmanlı")).toEqual([
			"Ahmet Kaya",
			"Mehmet Akif",
			"Ziya Gökalp"
		])
		expect(
			applyBookmarkFilters(libraryBookmarks, {
				categoryId: "library",
				tag: null,
				subtag: "Ahmet Kaya"
			}).map((bookmark) => bookmark.title)
		).toEqual(["Ayasofya", "İkinci Kitap"])
	})

	it("groups youtube bookmarks into shared subtags", () => {
		const mediaBookmarks: Bookmark[] = [
			{
				id: "media-youtube-ijbde6pkw2o",
				title: "Liverpool - Milan",
				url: "https://example.com/liverpool",
				categoryId: "media",
				tags: ["Youtube"]
			},
			{
				id: "media-youtube-lmwpop3pulg",
				title: "Barcelona - Real Madrid",
				url: "https://example.com/elclasico",
				categoryId: "media",
				tags: ["Youtube"]
			},
			{
				id: "media-youtube-g-swvee9him",
				title: "Eternal Fire - Spirit",
				url: "https://example.com/cs",
				categoryId: "media",
				tags: ["Youtube"]
			},
			{
				id: "media-youtube-fexzy4evllo",
				title: "Kobe Bryant: 81 Sayı",
				url: "https://example.com/kobe",
				categoryId: "media",
				tags: ["Youtube"]
			},
			{
				id: "media-youtube-5x2yp2wm16i",
				title: "Mehmed: Fetihler Sultanı 59. Bölüm",
				url: "https://example.com/mehmed",
				categoryId: "media",
				tags: ["Youtube"]
			},
			{
				id: "media-youtube-4rpm6g6odvg",
				title: "Hedef Kızılelma Belgeseli",
				url: "https://example.com/kizilelma",
				categoryId: "media",
				tags: ["Youtube"]
			},
			{
				id: "media-film",
				title: "The Dark Knight",
				url: "https://example.com/film",
				categoryId: "media",
				tags: ["Film"]
			}
		]

		expect(getAvailableBookmarkSubtags(mediaBookmarks, "media", null)).toEqual([])
		expect(getAvailableBookmarkSubtags(mediaBookmarks, "media", "Youtube")).toEqual([
			"Futbol",
			"Oyun",
			"Spor",
			"Dizi ve Belgesel"
		])
		expect(
			Object.fromEntries(getBookmarkSubtagCounts(mediaBookmarks, "media", "Youtube"))
		).toEqual({
			Futbol: 2,
			Oyun: 1,
			Spor: 1,
			"Dizi ve Belgesel": 2
		})
		expect(
			applyBookmarkFilters(mediaBookmarks, {
				categoryId: "media",
				tag: "Youtube",
				subtag: "Futbol"
			}).map((bookmark) => bookmark.title)
		).toEqual(["Barcelona - Real Madrid", "Liverpool - Milan"])
		expect(
			applyBookmarkFilters(mediaBookmarks, {
				categoryId: "media",
				tag: "Youtube",
				subtag: "Spor"
			}).map((bookmark) => bookmark.title)
		).toEqual(["Kobe Bryant: 81 Sayı"])
		expect(
			applyBookmarkFilters(mediaBookmarks, {
				categoryId: "media",
				tag: "Youtube",
				subtag: "Dizi ve Belgesel"
			}).map((bookmark) => bookmark.title)
		).toEqual(["Hedef Kızılelma Belgeseli", "Mehmed: Fetihler Sultanı 59. Bölüm"])
	})
})
