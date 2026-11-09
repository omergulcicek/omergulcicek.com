import { createFileRoute, redirect } from "@tanstack/react-router"

// The old address of the uses page; a permanent redirect keeps links and search results working.
export const Route = createFileRoute("/{-$lang}/workspace")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/{-$lang}/uses", params, statusCode: 301, replace: true })
  }
})
