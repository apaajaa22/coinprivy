import React from "react"
import ProfileInfo from "../../components/organism/ProfileInfo"
import SideBarProfile from "../../components/SideBarProfile"

export default function Profile() {
  return (
    <section className="d-flex flex-row">
      <SideBarProfile />
      <ProfileInfo />
    </section>
  )
}
