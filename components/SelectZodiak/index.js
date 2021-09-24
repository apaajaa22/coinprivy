import React from "react"
import DataZodiak from "../dataZodiak.json"

export default function SelectZodiak() {
  return (
    <div className="mb-3">
      <label className="form-label text-label">Wethon</label>
      <select className=" form-control form-input">
        {DataZodiak.map((e) => {
          return (
            <option key={e.name} value={e}>
              {e.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
