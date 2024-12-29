import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { BookTypes } from "@/types"

// Blog sayfası için kategorilerin sıralanması
const customOrder = [
	"Kişisel",
	"Yazılım",
	"HTML",
	"CSS",
	"Tailwind CSS",
	"JavaScript",
	"React",
	"Next.js",
	"Yıl notları",
	"Kitap",
	"Dizi",
	"Film"
]

export function cn(...args: (string | undefined | false | null)[]) {
	return clsx(twMerge(...args))
}

export function formatDate(date: string, includeRelative = false) {
	let currentDate = new Date()
	if (!date.includes("T")) {
		date = `${date}T00:00:00`
	}
	let targetDate = new Date(date)

	let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
	let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
	let daysAgo = currentDate.getDate() - targetDate.getDate()

	let formattedDate = ""

	if (yearsAgo > 0) {
		formattedDate = `${yearsAgo} yıl önce`
	} else if (monthsAgo > 0) {
		formattedDate = `${monthsAgo} ay önce`
	} else if (daysAgo > 0) {
		formattedDate = `${daysAgo} gün önce`
	} else {
		formattedDate = "Bugün"
	}

	let fullDate = targetDate.toLocaleString("tr-TR", {
		month: "long",
		day: "numeric",
		year: "numeric"
	})

	if (!includeRelative) {
		return fullDate
	}

	return `${fullDate} (${formattedDate})`
}

export const sortBooks = (books: BookTypes[]): BookTypes[] => {
	return books.sort((a, b) => {
		if (a.description.toLowerCase() < b.description.toLowerCase()) return -1
		if (a.description.toLowerCase() > b.description.toLowerCase()) return 1

		if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
		if (a.title.toLowerCase() > b.title.toLowerCase()) return 1

		return 0
	})
}

export const sortTitle = (data: any[]): any[] => {
	return data.sort((a, b) => {
		if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
		if (a.title.toLowerCase() > b.title.toLowerCase()) return 1

		return 0
	})
}

export const resCategories = (data: any[]): string[] => {
	const categories = [...new Set(data.map((e: any) => e.category))]

	const subCategories = [
		...new Set(
			data.flatMap((e: any) =>
				e.subCategories ? e.subCategories.split(", ") : []
			)
		)
	].filter(
		(category): category is string =>
			category !== undefined && category !== null
	)

	return [...new Set([...categories, ...subCategories])].sort(
		(a, b) => customOrder.indexOf(a) - customOrder.indexOf(b)
	)
}
