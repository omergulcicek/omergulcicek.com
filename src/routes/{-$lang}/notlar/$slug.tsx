import { createFileRoute, redirect } from "@tanstack/react-router"

// v10's Turkish address of a note; the notes route then handles `.md` and retired slugs.
export const Route = createFileRoute("/{-$lang}/notlar/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/{-$lang}/notes/$slug", params, statusCode: 301 })
  }
})
