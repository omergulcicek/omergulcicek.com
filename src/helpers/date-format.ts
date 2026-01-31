import dayjs from "dayjs"

import "dayjs/locale/tr"

dayjs.locale("tr")

export function dateFormat(date: string, format: string = "DD MMMM YYYY") {
	return dayjs(date).locale("tr").format(format)
}

export function groupPostsByYear<
	T extends {
		metadata: { createdAt: string; title: string; description?: string }
		slug: string
		content: string
	}
>(posts: T[]) {
	const grouped = posts.reduce(
		(acc, post) => {
			const year = new Date(post.metadata.createdAt).getFullYear()
			if (!acc[year]) {
				acc[year] = []
			}
			acc[year].push(post)
			return acc
		},
		{} as Record<number, T[]>
	)

	return Object.entries(grouped)
		.sort(([a], [b]) => Number(b) - Number(a))
		.reduce(
			(acc, [year, posts]) => {
				acc[Number(year)] = posts
				return acc
			},
			{} as Record<number, T[]>
		)
}
