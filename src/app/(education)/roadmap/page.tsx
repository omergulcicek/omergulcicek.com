import { Roadmap } from "@/widgets/roadmap"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Frontend yol haritası| Ömer Gülçiçek",
  alternates: {
		canonical: 'https://omergulcicek.com/roadmap/',
	}
}

export default function RoadmapPage() {
	return (
		<>
			<Roadmap />
		</>
	)
}
