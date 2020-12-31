import React, { useEffect } from "react"
import { GetMyDesk } from "../components"
import { MyDeskGrid } from "../components/Styled"

import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/Seo"

export default function App() {
  return <Layout>
    <SEO title="Çalışma Masam" />

    <div className="container">
      <Title t1="Çalışma" t2="Masam" />

      <MyDeskGrid>
        <GetMyDesk />
      </MyDeskGrid>
    </div>
  </Layout>
}