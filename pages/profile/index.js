import React from "react"
import ProfileInfo from "../../components/organism/ProfileInfo"
import SideBarProfile from "../../components/SideBarProfile"

export default function Profile({stars}) {
  return (
    <section className="d-flex flex-row flex-grow-1">
      <SideBarProfile />
      <ProfileInfo />
    </section>
  )
}
