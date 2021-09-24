import React from "react"

export default function TextArea({title}) {
  return (
    <div className="mb-3">
      <label className="form-label text-label">{title}</label>
      <textarea
        type="text"
        className="form-control form-input text-area"
        placeholder={`Write your ${title} here`}
      />
    </div>
  )
}
