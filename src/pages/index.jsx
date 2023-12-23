import Hero from "components/hero"
import Box from "components/box"

export default function Home() {
  return (
    <>
      <div className="container px-4">
        <Hero />
      </div>

      <div className="container mt-4 px-4">
        <div className="grid grid-cols-2 gap-4">
          <Box className="bg-blue-50 border-blue-100 dark:bg-neutral-900 dark:border-black" />
          <Box className="bg-blue-50 border-blue-100 dark:bg-neutral-900 dark:border-black" />
          <Box className="bg-blue-50 border-blue-100 dark:bg-neutral-900 dark:border-black" />
          <Box className="bg-blue-50 border-blue-100 dark:bg-neutral-900 dark:border-black" />
        </div>
      </div>
    </>
  )
}
