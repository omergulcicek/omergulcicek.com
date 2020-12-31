import React from "react"
import styled from "styled-components"

function App({t1, t2}) {
  return (
    <>
      <Title>{t1} <span>{t2}</span></Title>
    </>
  )
}

export default App

const Title = styled.h1`
  color: var(--c-theme);
  font-size: 32px;
  margin-bottom: 32px;

  @media (min-width: 992px) {
    font-size: 40px;
    margin-bottom: 64px;
  }

  span {
    color: var(--c-text)
  }
`