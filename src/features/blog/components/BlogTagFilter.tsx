import { FilterRail } from "@/components/shared/FilterRail"
import { getBlogTags, getFilterTags } from "@/features/blog/helpers/blog-tags"
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts"
import { useBlogTagFilter } from "@/features/blog/hooks/use-blog-tag-filter"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

type BlogTagFilterProps = { category: BlogCategory }

export function BlogTagFilter({ category }: BlogTagFilterProps) {
  const { data: posts } = useBlogPosts(category)
  const current = useBlogTagFilter()
  const items = getFilterTags(getBlogTags(posts, getLocale()), current).map(
    ({ tag, slug, count }) => ({
      value: slug,
      label: tag,
      count
    })
  )

  return (
    <FilterRail
      title={m.blog_tags_title()}
      param="tag"
      items={items}
      total={posts.length}
      current={current}
    />
  )
}
