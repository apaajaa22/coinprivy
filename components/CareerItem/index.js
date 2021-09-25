import React from "react"

export default function CareerItem({title, subtitle}) {
  return (
    <section className="my-career mt-3">
      <p className="m-0 mb-2 text-white fw-normal">{title}</p>
      <p className="m-0 subtitle">{subtitle}</p>
    </section>
  )
}
