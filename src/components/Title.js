import React from "react"
import { Title } from "./Styled"

export default function App ({t1, t2}) {
  return <Title>{t1} <span>{t2}</span></Title>
}