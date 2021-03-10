import React from "react"
import { H2Title, DeskFigure, MyDeskGrid } from "../components/Styled"
import myDesk from "../assets/desk"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

export default function App() {
  let desk = []

  myDesk() !== null &&
  myDesk().map(({ img, title, desc, done }, i) =>
  desk.push(
    <article className={done ? "" : "disabled"} key={i}>
      <figure>
        <img src={require(`./../assets/img/desk/${img}.png`)} alt={title} loading="lazy" width="100%" height="240" />

        <figcaption>
          <b>{title}</b>
          <span>{desc}</span>
        </figcaption>
      </figure>
    </article>
    )
  )

  return <Layout>
    <SEO title="Çalışma Masam" />

    <section className="desk">
      <DeskFigure>
        {/* <img src="" alt="" loading="lazy" /> */}
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