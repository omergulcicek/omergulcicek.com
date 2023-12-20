import { useMediaQuery } from "usehooks-ts"

import { cn } from "lib/utils"

import Header from "./header"
import HeaderMobile from "components/menu/swipeMenu"
import Footer from "./footer"

export default function Layout({ className, children }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <>
      <main
        vaul-drawer-wrapper=""
        className={cn("flex flex-col gap-12 min-h-screen bg-white", className)}
      >
        {isDesktop ? <Header /> : <HeaderMobile />}

        <section>{children}</section>

        <Footer />
      </main>
    </>
  )
}
