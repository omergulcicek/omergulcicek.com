import React, { useEffect } from "react"
import projects from "../assets/projects"
import { ProjectWrap, ProjectItem, ProjectDesc, Svg } from "../components/Styled"
import "isomorphic-fetch"

import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/Seo"

export default function App() {
  let blog = []
  projects() !== null &&
  projects().map(({ link, img, title, desc }, i) =>
    blog.push(
    <ProjectWrap href={link} target="_blank" rel="noopener noreferrer" key={i}>
      <ProjectItem>
        <figure>
          <img src={img} alt={title} loading="lazy" width="32" />
        </figure>
        <div>
          <h2>{title}</h2>
          <p>
            {desc}
          </p>
        </div>
      </ProjectItem>
    </ProjectWrap>
    )
  )

  useEffect(
    () => {
      document.querySelectorAll("main .container")[0].classList.add("projects")
    }
  )

  return <Layout>
    <SEO title="Projelerim" />

    <div className="container">
      <Title t1="En İyi" t2="Projelerim" />

      {blog}

      <ProjectDesc>
        Diğer projelerim için <a href="https://github.com/omergulcicek" target="_blank" rel="noopener noreferrer">GitHub profilimi</a> ziyaret edebilirsin.
      </ProjectDesc>

      <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--c-theme)" d="M51.6,-57.2C64.9,-50.4,72.2,-32.2,70.1,-16.5C67.9,-0.8,56.2,12.5,45,20.5C33.9,28.5,23.1,31.4,10.3,42C-2.6,52.6,-17.6,71.1,-32.3,72.7C-47.1,74.3,-61.7,59.2,-69.8,41.9C-77.9,24.6,-79.5,5.1,-75.1,-12.1C-70.7,-29.3,-60.3,-44.4,-46.7,-51.2C-33.2,-58,-16.6,-56.6,1.3,-58.1C19.2,-59.6,38.3,-64.1,51.6,-57.2Z" transform="translate(100 100)" />
      </Svg>
    </div>
  </Layout>
}