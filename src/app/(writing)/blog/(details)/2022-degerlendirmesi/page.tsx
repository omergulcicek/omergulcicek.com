"use client"

import { useMemo } from "react"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"

export default function Page() {
	const pathname = usePathname()
	const slug = useMemo(() => pathname?.split("/").pop(), [pathname])

	const Details = useMemo(() => {
		if (slug) {
			return dynamic(() => import(`@/data/posts/${slug}/index.mdx`))
		}
		return null
	}, [slug])

	return Details ? <Details /> : <p>Yükleniyor...</p>
}
