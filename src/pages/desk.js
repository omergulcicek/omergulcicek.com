import React from "react"
import { DeskFigure, MyDeskGrid } from "../components/Styled"
import myDesk from "../assets/desk"

import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/Seo"

export default function App() {
  let desk = []

  myDesk() !== null &&
  myDesk().map(({ img, title, desc, disabled }, i) =>
  desk.push(
    <article className={disabled && "disabled"}>
      <figure>
        <img src={require(`./../assets/img/desk/${img}.png`)} alt={title} />

        <figcaption>
          <h5>{title}</h5>
          <span>{desc}</span>
        </figcaption>
      </figure>
    </article>
    )
  )

  return <Layout>
    <SEO title="Çalışma Masam" />

    <div className="container">
      <Title t1="Çalışma" t2="Masam" />
      
      <DeskFigure>
        <img src="" alt="" />
      </DeskFigure>

      <MyDeskGrid>
        {desk}
      </MyDeskGrid>
    </div>
  </Layout>
}