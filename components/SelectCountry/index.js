import React from "react"

export default function SelectCountry() {
  return (
    <select className=" form-control form-input">
      <option value="Afghanistan">Afghanistan (+93)</option>
      <option value="Brazil">Brazil (+55)</option>
      <option selected value="Indonesia">
        Indonesia (+62)
      </option>
      <option value="Italy">Italy (+39)</option>
      <option value="Jordan">Jordan (+962)</option>
      <option value="Korea">Korea (+82)</option>
    </select>
  )
}
