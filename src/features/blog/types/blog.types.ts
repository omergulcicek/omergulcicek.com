export interface BlogPostType {
	metadata: {
		title: string
		createdAt: string
		description?: string
		keywords?: string[]
		tags?: string[]
		interactive?: boolean
		languages?: string[]
		[key: string]: unknown
	}
	slug: string
	content: string
}

export interface BlogPropsType {
	posts: BlogPostType[]
}
