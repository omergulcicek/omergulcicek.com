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
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </>
  )
}
