import { About } from "@/widgets/about"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Hakkında | Ömer Gülçiçek",
  description: "Yazılım mühendisiyim, Frontend Developer olarak çalışıyorum. React/NextJS ve CSS alanlarında uzmanım.",
}

export default function AboutPage() {
	return <About />
}
