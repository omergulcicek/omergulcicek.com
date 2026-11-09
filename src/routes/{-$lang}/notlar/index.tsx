import { createFileRoute, redirect } from "@tanstack/react-router"

// v10's Turkish address of the notes list.
export const Route = createFileRoute("/{-$lang}/notlar/")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/{-$lang}/notes", params, statusCode: 301 })
  }
})
