import { Container } from "@/shared/container"

export default function WithoutSubmenuLayout({ children }) {
  return (
    <>
      <div className="flex-1">
        <Container>{children}</Container>
      </div>
    </>
  )
}
