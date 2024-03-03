"use client"

import { usePathname } from "next/navigation"
import { useMediaQuery } from "@uidotdev/usehooks"

import { Navigation } from "@/features/navigation"
import { blogData } from "@/data/blogData"
import { bookmarksData } from "@/data/bookmarksData"
import { educationData } from "@/data/educationData"

const Submenu = () => {
  const pathname = usePathname()
  const isDesktop = useMediaQuery("only screen and (min-width : 1228px)")

  let data = null

  if (pathname.includes("/blog")) {
    data = blogData
  } else if (pathname.includes("/bookmarks")) {
    data = bookmarksData
  } else if (pathname.includes("/education")) {
    data = educationData
  }

  if (!isDesktop) return null

  return (
    <>
      <aside className="flex h-full max-h-dvh min-h-dvh w-64 flex-col gap-4 overflow-auto border-r bg-zinc-50 p-3">
        <Navigation data={data} />
      </aside>
    </>
  )
}

export { Submenu }
