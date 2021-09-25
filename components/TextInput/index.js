import React from "react"

export default function TextInput({title, onChange, value, disabled}) {
  return (
    <div className="mb-3">
      <label className="form-label text-label">{title}</label>
      <input
        type="text"
        className="form-control form-input"
        placeholder={`Input your ${title}`}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
