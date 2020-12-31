import React from "react"
import { Header, Footer } from "./../components"
import { Main } from "./Styled"

import "./layout.css"

export default function App ({ children }) {
  return <>
    <Header />

    <Main>
      <section>
        { children }
      </section>
    </Main>

    <Footer />
  </>
}