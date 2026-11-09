import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { pageHead } from "@/config/seo.config"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { BlogLocaleNotice } from "@/features/blog/components/BlogLocaleNotice"
import { BlogPostList } from "@/features/blog/components/BlogPostList"
import { BlogTagFilter } from "@/features/blog/components/BlogTagFilter"
import { blogListSearchSchema } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/notes/")({
  head: () =>
    pageHead({ path: "/notes", title: m.notes_title(), description: m.notes_description() }),
  validateSearch: blogListSearchSchema,
  loader: ({ context }) =>
    context.queryClient.query({ ...blogPostsQueryOptions("personal"), staleTime: "static" }),
  component: NotesPage
})

function NotesPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <PageHeader title={m.notes_title()} description={m.notes_description()} />
      <BlogLocaleNotice category="personal" />
      <BlogTagFilter category="personal" />
      <BlogPostList category="personal" />
    </div>
  )
}
