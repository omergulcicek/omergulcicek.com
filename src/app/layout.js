import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Header, Container } from "@/components"

const fontFamily = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Ömer Gülçiçek | Senior Frontend Developer",
  description: "Senior Frontend Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={fontFamily.className}>
        <main vaul-drawer-wrapper="true" className="min-h-screen bg-white">
          <Header />

          <section className="py-8 px-6">
            <Container>{children}</Container>
          </section>
        </main>
      </body>
    </html>
  )
}
