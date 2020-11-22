import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Brand = () => {
  return (
    <Logo className="brand">
      <Link to="/">
        <span>omergulcicek</span>.com
      </Link>
    </Logo>
  )
}

export default Brand

const Logo = styled.div`
  a {
    color: var(--c-text);
    font-size: 24px;
    letter-spacing: 0.2px;
    line-height: 1;
    text-decoration: none;
  }

  span {
    color: var(--c-theme)
  }
`