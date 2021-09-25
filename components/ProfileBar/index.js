import React from "react"
import Link from "next/link"

export default function ProfileBar() {
  return (
    <section className="row row-cols-auto tab-wrapper mx-1 gap-4 my-5">
      <Link href="/profile">
        <a className="bar-active title-bar me-3">Information</a>
      </Link>
      <Link href="/profile/career">
        <a className="bar-nonactive title-bar">Career</a>
      </Link>
      <Link href="/profile/education">
        <a className="bar-nonactive title-bar">Education</a>
      </Link>
      <Link href="/profile/galery">
        <a className="bar-nonactive title-bar">Gallery</a>
      </Link>
    </section>
  )
}
