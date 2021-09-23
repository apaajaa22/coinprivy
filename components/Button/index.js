import React from "react"

export default function Button({type, title}) {
  switch (type) {
    case "primary":
      return <button className="btn btn-primary">{title}</button>
    case "secondary":
      return <button className="btn btn-secondary">{title}</button>
    default:
      return <button className="btn btn-primary">{title}</button>
  }
}
