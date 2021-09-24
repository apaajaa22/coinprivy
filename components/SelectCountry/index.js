import React from "react"
import DataCountry from "../dataCountry.json"

export default function SelectCountry() {
  return (
    <select className=" form-control form-input">
      {DataCountry.map((data) => {
        return (
          <option
            selected={data.name === "Indonesia"}
            key={data.name}
            value={data.name}
          >
            {data.name} ({data.dial_code})
          </option>
        )
      })}
    </select>
  )
}
