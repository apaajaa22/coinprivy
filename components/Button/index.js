import React from "react"

export default function Button({type, title, onClick}) {
  switch (type) {
    case "primary":
      return (
        <a onClick={onClick} className="btn btn-primary">
          {title}
        </a>
      )
    case "secondary":
      return (
        <a onClick={onClick} className="btn btn-secondary">
          {title}
        </a>
      )
    default:
      return (
        <a onClick={onClick} className="btn btn-primary">
          {title}
        </a>
      )
  }
}
