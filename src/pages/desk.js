import React from "react"
import { H2Title, DeskFigure, MyDeskGrid } from "../components/Styled"
import myDesk from "../assets/desk"

import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/Seo"

export default function App() {
  let desk = []

  myDesk() !== null &&
  myDesk().map(({ img, title, desc, disabled }, i) =>
  desk.push(
    <article className={disabled ? "disabled" : ""} key={i}>
      <figure>
        <img src={require(`./../assets/img/desk/${img}.png`)} alt={title} loading="lazy" />

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

    <section className="desk">
      <Title t1="Çalışma" t2="Masam" />
      
      <DeskFigure>
        <img src="" alt="" loading="lazy" />
      </DeskFigure>

      <H2Title>
        <div>Kullandığım <span>Ekipmanlar</span></div>
      </H2Title>

      <MyDeskGrid>
        {desk}
      </MyDeskGrid>
    </section>
  </Layout>
}