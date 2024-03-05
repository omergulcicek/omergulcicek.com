import Link from "next/link"
import { Link2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"

export const CardList = ({ data }) => {
  return (
    <>
      <div className="grid gap-4 place-content-start">
        {data.map(({ id, title, desc, img, url }) => (
          <article key={id}>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-auto"
            >
              <Card className="bg-white hover:bg-zinc-50 transition">
                <CardHeader>
                  <figure className="flex rounded-lg items-center min-h-24 justify-center mb-8 overflow-hidden bg-white ">
                    <img src={img} width={344} height={180} alt={title} />
                  </figure>

                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription className="flex gap-1 items-center">
                    <Link2 size="16" />
                    <span>{desc}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </article>
        ))}
      </div>
    </>
  )
}

const MasonryGrid = ({ data }) => {
  if (!data?.length) return null

  const data1 = data.filter((e, i) => i % 3 === 0)
  const data2 = data.filter((e, i) => i % 3 === 1)
  const data3 = data.filter((e, i) => i % 3 === 2)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <CardList data={data1} />
        <CardList data={data2} />
        <CardList data={data3} />
      </div>
    </>
  )
}

export { MasonryGrid }
