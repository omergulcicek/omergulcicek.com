import { Rss } from "lucide-react"

import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseIconLink } from "@/components/shared/prose-link"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion"
import {
	pageShellClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { BlogList } from "@/features/blog/components/blog-list"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogSection } from "@/features/blog/constants/blog.constants"
import type { BlogPost } from "@/features/blog/types/blog.types"

type BlogPageProps = {
	section: BlogSection
	posts: BlogPost[]
	isDev: boolean
}

export function BlogPage({ section, posts, isDev }: BlogPageProps) {
	return (
		<Container>
			<StaggerContainer className={pageShellClass}>
				<StaggerItem>
					<PageHeader title={section.title}>
						<p className={proseParagraphClass}>
							{section.description}{" "}
							<ProseIconLink
								href={section.feedPath}
								icon={<Rss className="size-3.5 shrink-0" aria-hidden />}
							>
								{BLOG_UI.rssLabel}
							</ProseIconLink>
						</p>
					</PageHeader>
				</StaggerItem>
				<StaggerItem>
					<BlogList
						section={section}
						posts={posts}
						isDev={isDev}
					/>
				</StaggerItem>
			</StaggerContainer>
		</Container>
	)
}
