import { createFileRoute, redirect } from "@tanstack/react-router"

// v10's services page was folded into the about page, which also has the contact paragraph.
export const Route = createFileRoute("/{-$lang}/services")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/{-$lang}/about", params, statusCode: 301 })
  }
})
