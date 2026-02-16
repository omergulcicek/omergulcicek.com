import dayjs from "dayjs"

import "dayjs/locale/tr"

dayjs.locale("tr")

export function dateFormat(
	date: string,
	format: string = "DD MMMM YYYY"
): string {
	return dayjs(date).locale("tr").format(format)
}

export function groupPostsByYear<
	T extends {
		metadata: { createdAt: string; title: string; description?: string }
		slug: string
		content: string
	}
>(posts: T[]) {
	const grouped = posts.reduce<Record<number, T[]>>((acc, post) => {
		const year = new Date(post.metadata.createdAt).getFullYear()
		if (!acc[year]) {
			acc[year] = []
		}
		acc[year].push(post)
		return acc
	}, {})

	return Object.entries(grouped)
		.sort(([a], [b]) => Number(b) - Number(a))
		.reduce<Record<number, T[]>>((acc, [year, posts]) => {
			acc[Number(year)] = posts
			return acc
		}, {})
}
