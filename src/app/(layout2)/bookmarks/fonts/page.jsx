import { MasonryGrid as CardList } from "@/widgets/card-list"
import { Title } from "@/ui/title"

import { fontsData } from "@/data/bookmarks/fontsData"

export default function Fonts() {
  return (
    <main className="md:container flex flex-col gap-10 mt-10 min-h-screen">
      <Title>Yazı Stilleri</Title>

      <CardList data={fontsData} />
    </main>
  )
}
