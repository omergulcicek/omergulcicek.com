import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { canonicalLink, hreflangLinks } from "@/helpers/localized-url"

import { PageHeader } from "@/components/shared/PageHeader"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { BlogPostList } from "@/features/blog/components/BlogPostList"
import { BlogTagFilter } from "@/features/blog/components/BlogTagFilter"
import { blogListSearchSchema } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/notes/")({
  head: () => ({
    meta: [{ title: m.notes_title() }, { name: "description", content: m.notes_description() }],
    links: [canonicalLink("/notes"), ...hreflangLinks("/notes")]
  }),
  validateSearch: blogListSearchSchema,
  loader: ({ context }) =>
    context.queryClient.query({ ...blogPostsQueryOptions("personal"), staleTime: "static" }),
  component: NotesPage
})

function NotesPage() {
  return (
    <div className={cn("flex flex-col gap-8", readingWidthClass)}>
      <PageHeader title={m.notes_title()} description={m.notes_description()} />
      <BlogTagFilter category="personal" />
      <BlogPostList category="personal" />
    </div>
  )
}
