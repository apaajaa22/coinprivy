import React from "react"
import GaleryInfo from "../../components/organism/GaleryInfo"
import SideBarProfile from "../../components/SideBarProfile"

export default function Galery() {
  return (
    <section className="d-flex flex-row flex-grow-1">
      <SideBarProfile />
      <GaleryInfo />
    </section>
  )
}
