import { BlogShareActions } from "@/features/blog/components/blog-share-actions.client"

type BlogShareActionsBarProps = {
	path: string
	title: string
	className?: string
}

export function BlogShareActionsBar({
	path,
	title,
	className
}: BlogShareActionsBarProps) {
	return (
		<BlogShareActions path={path} title={title} className={className} />
	)
}
