import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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
