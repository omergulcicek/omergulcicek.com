import { MasonryGrid as CardList } from "@/widgets/card-list"
import { Title } from "@/ui/title"

import { booksData } from "@/data/bookmarks/booksData"

export default function Books() {
  return (
    <main className="md:container flex flex-col gap-10 mt-10 min-h-screen">
      <Title>Kitap</Title>

      <CardList data={booksData} />
    </main>
  )
}
