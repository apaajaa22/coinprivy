import React from "react"
import EducationInfo from "../../components/organism/EducationInfo"
import SideBarProfile from "../../components/SideBarProfile"

export default function Education() {
  return (
    <section className="d-flex flex-row flex-grow-1">
      <SideBarProfile />
      <EducationInfo />
    </section>
  )
}
