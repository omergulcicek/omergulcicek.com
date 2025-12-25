export interface BlogPostType {
	metadata: {
		title: string
		createdAt: string
		description?: string
		keywords?: string[]
		tags?: string[]
		interactive?: boolean
		[key: string]: unknown
	}
	slug: string
	content: string
}

export interface BlogPropsType {
	posts: BlogPostType[]
}
