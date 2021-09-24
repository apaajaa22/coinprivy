import React from "react"
import VerificationContent from "../../components/organism/VerificationContent"
import SideBar from "../../components/SideBar"

export default function Verification() {
  return (
    <section className="d-flex flex-row">
      <SideBar />
      <VerificationContent />
    </section>
  )
}
