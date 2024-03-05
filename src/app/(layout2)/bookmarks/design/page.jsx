import { MasonryGrid as CardList } from "@/widgets/card-list"
import { Title } from "@/ui/title"

import { designData } from "@/data/bookmarks/designData"

export default function Desing() {
  return (
    <main className="md:container flex flex-col gap-10 mt-10 min-h-screen">
      <Title>Tasarım</Title>

      <CardList data={designData} />
    </main>
  )
}
