import React from "react"
import projects from "../assets/projects"
import { ProjectItem } from "../components/Styled"
import "isomorphic-fetch"

export default function App({total}) {
  let result = []

  projects() !== null &&
  projects().slice(0, total).map(({ link, img, title, subtitle, desc, tags }, i) => {
  
  let tagsDiv = []
  tags &&
  tags.forEach(e => {
    tagsDiv.push(<span className="tag">{e}</span>)
  })

  result.push(
    <ProjectItem key={i}>
      <figure>
        {
          img &&
          <img src={require(`./../assets/img/project/${img}.jpg`)} alt={title} loading="lazy" height="auto" width="600" />
        }
      </figure>

      <div>
        <a href={link} title={title} target="_blank" rel="noopener noreferrer">{title}</a>
        <p>
          {subtitle}
        </p>

        <aside>
          <small>
            {desc}
          </small>

          {
            tagsDiv.length > 0 &&
            <div className="tags">
              {tagsDiv}
            </div>
          }
        </aside>

        <a href={link} className="button" title={title} target="_blank" rel="noopener noreferrer">
          <span>Projeyi İncele</span>
          <svg width="14" height="10"><g stroke="currentColor" fill="none" fill-rule="evenodd"><path d="M8.5.964L13.036 5.5 8.5 10.036"></path><path d="M12.5 5.5H.5" stroke-linecap="square"></path></g></svg>
        </a>
      </div>
    </ProjectItem>
    )}
  )

  return result
}