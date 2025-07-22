export interface BlogPost {
	metadata: {
		title: string
		createdAt: string
		description?: string
		keywords?: string[]
		tags?: string[]
		[key: string]: unknown
	}
	slug: string
	content: string
}

export interface BlogProps {
	posts: BlogPost[]
}
