import React from "react"
import myDesk from "../assets/my-desk"

export default function App () {
  let desk = []

  myDesk() !== null &&
  myDesk().map(({ img, title, desc, disabled }, i) =>
  desk.push(
    <article className={disabled && "disabled"}>
      <figure>
        <img src={require(`./../assets/img/my-desk/${img}.png`)} alt={title} />

        <figcaption>
          <h5>{title}</h5>
          <span>{desc}</span>
        </figcaption>
      </figure>
    </article>
    )
  )

  return desk
}