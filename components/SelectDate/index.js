import React from "react"

export default function SelectDate({title}) {
  return (
    <div className="mb-3">
      <label className="form-label text-label">{title}</label>
      <input type="date" className="form-control form-input" />
    </div>
  )
}
