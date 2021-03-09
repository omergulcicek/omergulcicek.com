import React from "react"
import { Link } from "gatsby"

export default function Brand () {
  return <div className="brand">
    <Link to="/" style={{"color": "var(--c-text)", "letterSpacing": "0.2px", "textDecoration": "none"}}>
      <span style={{"color": "var(--c-theme)"}}>omergulcicek</span>.com
    </Link>
  </div>
}