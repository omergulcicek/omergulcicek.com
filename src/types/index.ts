type HeroTypes = {
	hi: string
	name: string
	strong: string
	desc: string
}

type NavMenuTypes = {
	title: string
	href: string
	description: string
	soon?: boolean
}[]

type TweetTypes = { id: string }[]

type TitleProps = {
	tag?: "h1" | "h2" | "h3" | "h4"
	children: React.ReactNode
	className?: string
} & React.HTMLAttributes<HTMLDivElement>

type AnimationListTypes = {
	img: string
	title: string
	description?: string
	url: string
	isExternal?: boolean
	detail?: string
}[]

type BlogPostTypes = {
	folder?: string
	title: string
	date: string
	category: string
	subCategories?: string
	medium: string
	path: string
}

type BookTypes = {
	img: string
	title: string
	description: string
	url: string
}

export type {
	AnimationListTypes,
	BookTypes,
	HeroTypes,
	NavMenuTypes,
	TweetTypes,
	TitleProps,
	BlogPostTypes
}
