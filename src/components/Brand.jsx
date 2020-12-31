import React from "react"
import { Link } from "gatsby"
import { Logo } from "./Styled"

export default function Brand () {
  return <Logo className="brand">
    <Link to="/">
      <span>omergulcicek</span>.com
    </Link>
  </Logo>
}