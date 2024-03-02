import { Container } from "@/shared/container"

export default function WithSubmenuLayout({ children }) {
  return (
    <>
      <nav className="w-80 bg-blue-500">Ara menü</nav>
      <div className="flex-1 bg-red-300">
        <Container>{children}</Container>
      </div>
    </>
  )
}
