import { createFileRoute } from "@tanstack/react-router"

import { hreflangLinks } from "@/helpers/localized-url"

import { Pending } from "@/components/shared/Pending"

export const Route = createFileRoute("/{-$lang}/")({
  head: () => ({ links: hreflangLinks("/") }),
  pendingComponent: Pending,
  component: Home
})

function Home() {
  return <main className="flex-1" />
}
