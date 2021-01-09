import React from "react"
import projects from "../assets/projects"
import { ProjectWrap, ProjectItem } from "../components/Styled"
import "isomorphic-fetch"

export default function App({total}) {
  let result = []

  projects() !== null &&
  projects().slice(0, total).map(({ link, img, title, desc }, i) =>
  result.push(
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

  return result
}