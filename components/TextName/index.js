import React from "react"

export default function TextName() {
  return (
    <div className="mb-3">
      <label className="form-label text-label">Name *</label>
      <input
        type="text"
        className="form-control form-input"
        placeholder="Input your name"
      />
    </div>
  )
}
