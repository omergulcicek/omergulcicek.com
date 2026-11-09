import { AboutBooks } from "@/features/about/components/AboutBooks"
import { AboutChess } from "@/features/about/components/AboutChess"
import { AboutWalks } from "@/features/about/components/AboutWalks"

/** Life away from work: one section per hobby, each with its own heading, as in a photo essay. */
export function AboutInterests() {
  return (
    <div className="flex flex-col gap-16">
      <AboutWalks />
      <AboutBooks />
      <AboutChess />
    </div>
  )
}
