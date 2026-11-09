import { createFileRoute, redirect } from "@tanstack/react-router"

// An older address of the uses page (v10 sent it to /setup, which now moves to /uses too).
export const Route = createFileRoute("/{-$lang}/stack")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/{-$lang}/uses", params, statusCode: 301 })
  }
})
