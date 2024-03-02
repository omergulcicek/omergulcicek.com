import { Container } from "@/shared/container"

export default function WithoutSubmenuLayout({ children }) {
  return (
    <>
      <div className="flex-1 bg-green-300">
        <Container>{children}</Container>
      </div>
    </>
  )
}
