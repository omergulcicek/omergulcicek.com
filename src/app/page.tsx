import { Home } from "@/widgets/home"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ana Sayfa | Ömer Gülçiçek",
  description: "Yazılım mühendisiyim, Frontend Developer olarak çalışıyorum. React/NextJS ve CSS alanlarında uzmanım.",
}

export default function HomePage() {
	return (
		<>
			<Home />
		</>
	)
}
