import React, { useEffect } from "react"

export default function ReactCirclePageBar ({ options }) {
  useEffect(
    () => {
      pageProgress()

      let ls = 0;
      const acn = "is-active";

      document.addEventListener("scroll", () => {
        const progressBar = document.getElementById("circle-page-bar-wrap").classList
        const body = document.body

        pageProgress()

        const cs = window.pageYOffset
        
        if (cs <= 0) { body.classList.remove(acn); return }

        if (cs > ls && body.className.indexOf(acn) == -1) {
          progressBar.add("is-active")
          body.classList.add(acn)
        }
        else if (cs < ls && body.className.indexOf(acn) != -1) {
          if (obj.hidden) {
            progressBar.remove("is-active")
          }

          body.classList.remove(acn)
        }

        ls = cs
      });
    }
  )

  const defaultOptions = {
    "color": "#1b1b1b",
    "size": "48px",
    "strokeWidth": "5",
    "arrowColor": "#1b1b1b",
    "hidden": true,
    "top": "auto",
    "bottom": "100px",
    "left": "auto",
    "right": "40px"
  }

  const obj = Object.assign(defaultOptions, options)

  return (
    <div id="circle-page-bar-wrap" style={{ "border": "none", "borderRadius": "100%", "bottom": obj.bottom, "boxShadow": "inset 0 0 0 2px rgba(0, 0, 0, .1)", "cursor": "pointer", "height": obj.size, "left": obj.left, "opacity": 0, "pointerEvents": "none", "position": "fixed", "right": obj.right, "top": obj.top, "transform": "slace(0.8)", "transition": "240ms", "width": obj.size, "zIndex": "10" }} onClick={() => window.scrollTo(0, 0)}>
      <svg id="circle-page-bar" viewBox="-1 -1 102 102" fill="transparent" style={{ "fill": "transparent" }}>
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{"fil": "none", "stroke": obj.color, "strokeWidth": obj.strokeWidth, "transition": "strokeDashoffset 10ms linear 0s", "strokeDasharray": "307.919, 307.919"}}></path>
      </svg>

      <svg id="circle-page-bar-arrow" viewBox="0 0 448 512" style={{ "height": "32%", "left": "50%", "position": "absolute", "top": "50%", "transform": "translate(-50%, -50%)" }}>
        <path fill={obj.arrowColor} d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
      </svg>
    </div>
  )
}

export function pageProgress () {
  var e = document.getElementById("circle-page-bar").children[0]
  var l = e.getTotalLength()
  e.style.strokeDashoffset = l - (window.pageYOffset * l / (document.body.clientHeight - window.innerHeight))
}