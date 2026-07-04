import { describe, expect, it } from "vitest"

import {
	applyBookmarkFilters,
	areBookmarkTagsEqual,
	getBookmarkAllTagLabel,
	getAvailableBookmarkTags,
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
		expect(resolveBookmarkCategoryId("invalid")).toBe("frontend")
		expect(resolveBookmarkCategoryId(null)).toBe("frontend")
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

	it("formats all-tag labels per category", () => {
		expect(getBookmarkAllTagLabel("media")).toBe("Tüm medya")
		expect(getBookmarkAllTagLabel("library")).toBe("Tüm kitaplık")
		expect(getBookmarkAllTagLabel("frontend")).toBe("Tüm frontend")
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
})
