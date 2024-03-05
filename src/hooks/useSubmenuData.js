import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { blogData } from "@/data/blogData"
import { bookmarksData } from "@/data/bookmarksData"
import { educationData } from "@/data/educationData"

export function useSubmenuData() {
  const [data, setData] = useState([])
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.includes("/blog")) {
      setData(blogData)
    } else if (pathname.includes("/bookmarks")) {
      setData(bookmarksData)
    } else if (pathname.includes("/education")) {
      setData(educationData)
    }
  }, [pathname])

  return data
}
