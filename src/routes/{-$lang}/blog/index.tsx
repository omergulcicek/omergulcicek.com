import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { pageHead } from "@/config/seo.config"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { BlogPostList } from "@/features/blog/components/BlogPostList"
import { BlogTagFilter } from "@/features/blog/components/BlogTagFilter"
import { blogListSearchSchema } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/blog/")({
  head: () => pageHead({ path: "/blog", title: m.blog_title(), description: m.blog_description() }),
  validateSearch: blogListSearchSchema,
  loader: ({ context }) =>
    context.queryClient.query({ ...blogPostsQueryOptions("technical"), staleTime: "static" }),
  component: BlogPage
})

function BlogPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <PageHeader title={m.blog_title()} description={m.blog_description()} />
      <BlogTagFilter category="technical" />
      <BlogPostList category="technical" />
    </div>
  )
}
