import React from "react"

export default function SelectGender() {
  return (
    <div className="mb-3">
      <label className="form-label text-label">Gender</label>
      <select className=" form-control form-input">
        <option selected value="male">
          Male
        </option>
        <option value="female">Female</option>
      </select>
    </div>
  )
}
