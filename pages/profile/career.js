import React from "react"
import CareerInfo from "../../components/organism/CareerInfo"
import SideBarProfile from "../../components/SideBarProfile"

export default function Career() {
  return (
    <section className="d-flex flex-row flex-grow-1">
      <SideBarProfile />
      <CareerInfo />
    </section>
  )
}
