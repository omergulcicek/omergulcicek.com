import React from "react"
import projects from "../assets/projects"
import { ProjectWrap, ProjectItem } from "./Styled"

export default function App () {
  let blog = []

  projects() !== null &&
  projects().map(({ link, resim, baslik, aciklama }, i) =>
    blog.push(
    <ProjectWrap href={link} target="_blank" rel="noopener noreferrer" key={i}>
      <ProjectItem>
        <figure>
          <img src={resim} alt={baslik} loading="lazy" width="32" />
        </figure>
        <div>
          <h2>{baslik}</h2>
          <p>
            {aciklama}
          </p>
        </div>
      </ProjectItem>
    </ProjectWrap>
    )
  )

  return blog
}