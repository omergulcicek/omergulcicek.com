import { useMediaQuery } from "usehooks-ts"

import Header from "./headerDesktop"
import HeaderMobile from "./headerMobile"
import Footer from "./footer"

export default function Layout({ children }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <>
      <main vaul-drawer-wrapper="" className="min-h-screen bg-white">
        {isDesktop ? <Header /> : <HeaderMobile />}

        <section>{children}</section>
      </main>
      <Footer />
    </>
  )
}
