import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Brand } from "../components"
import { Header, Menu } from "./Styled"

export default function App() {
  useEffect(
    () => {
      let lastScroll = 0
      const headerActiveClass = "is-active"

      document.addEventListener("scroll", () => {
        console.clear()

        const header = document.getElementsByTagName("header")[0]
        const currentScroll = window.pageYOffset

        if (currentScroll <= 0) {
          header.classList.remove(headerActiveClass)
          return
        }

        if(currentScroll > lastScroll && header.className.indexOf(headerActiveClass) == -1) {
          header.classList.add(headerActiveClass)
        }
        else if (currentScroll < lastScroll && header.className.indexOf(headerActiveClass) != -1) {
          header.classList.remove(headerActiveClass)
        }

        lastScroll = currentScroll
      });
    }
  )

  return <Header>
    <section>
      <Brand />

      <div>
        <Menu>
          <Link to="/">Blog</Link>
          <Link to="/projects/">Projeler</Link>
          <Link to="/about/">Hakkımda</Link>
        </Menu>
      </div>
    </section>
  </Header>
}