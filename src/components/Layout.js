import React from "react"
import { Header, Footer } from "../components"
import { Main } from "./Styled"

import "../assets/css/style.css"

export default function App ({ children }) {
  return <>
    <Header />

    <Main>
      {children}
    </Main>

    <Footer />
  </>
}