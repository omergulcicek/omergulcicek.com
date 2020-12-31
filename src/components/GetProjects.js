import React from "react"
import projects from "../assets/projects"
import { ProjectWrap, ProjectItem } from "./Styled"

export default function App () {
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

  return blog
}