import Hero from "components/hero"
import Box from "components/box"

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container mt-4">
        <div class="grid grid-cols-2 gap-4">
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </>
  )
}
