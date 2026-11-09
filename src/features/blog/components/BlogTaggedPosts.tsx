import { toSlug } from "@/helpers/to-slug"

import { LabeledSection } from "@/components/shared/LabeledSection"
import { BlogPostItem } from "@/features/blog/components/BlogPostItem"
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts"

type BlogTaggedPostsProps = {
  /** The heading id, so a page TOC can link to the section. */
  id: string
  title: string
  tag: string
}

/** Technical posts with one tag, newest first; renders nothing when none has it. */
export function BlogTaggedPosts({ id, title, tag }: BlogTaggedPostsProps) {
  const { data: posts } = useBlogPosts("technical")
  const slug = toSlug(tag)
  const tagged = posts.filter((post) => post.tags.some((item) => toSlug(item) === slug))

  if (tagged.length === 0) return null

  return (
    <LabeledSection id={id} title={title}>
      <ul className="flex flex-col gap-5">
        {tagged.map((post) => (
          <BlogPostItem key={post.slug} post={post} category="technical" />
        ))}
      </ul>
    </LabeledSection>
  )
}
