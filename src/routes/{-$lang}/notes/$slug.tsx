import { createFileRoute, notFound, redirect } from "@tanstack/react-router"
import { cn } from "cn"

import { NotFound } from "@/components/shared/NotFound"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { blogPostQueryOptions, blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { BlogPostArticle } from "@/features/blog/components/BlogPostArticle"
import { postHead } from "@/features/blog/helpers/post-head"
import { resolvePostRedirect } from "@/features/blog/helpers/resolve-post-redirect"

export const Route = createFileRoute("/{-$lang}/notes/$slug")({
  // Retired posts and v10's `.md` addresses move with a 301; impossible slugs are a 404, not a 500.
  beforeLoad: ({ params }) => {
    const next = resolvePostRedirect(params.slug)
    if (next.kind === "not-found") throw notFound()
    if (next.kind === "redirect") {
      throw redirect({
        to: "/{-$lang}/notes/$slug",
        params: { ...params, slug: next.slug },
        statusCode: 301
      })
    }
  },
  // The list comes along for the previous and next links; it is cached for the list page too.
  loader: async ({ context, params }) => {
    const [post] = await Promise.all([
      context.queryClient.query({
        ...blogPostQueryOptions("personal", params.slug),
        staleTime: "static"
      }),
      context.queryClient.query({ ...blogPostsQueryOptions("personal"), staleTime: "static" })
    ])
    return post
  },
  head: ({ loaderData, params }) =>
    loaderData ? postHead(`/notes/${params.slug}`, loaderData) : {},
  notFoundComponent: () => <NotFound />,
  component: NotePage
})

function NotePage() {
  const { slug } = Route.useParams()

  return (
    <div className={cn(readingWidthClass)}>
      <BlogPostArticle category="personal" slug={slug} />
    </div>
  )
}
