import React from "react"
import Link from "next/link"
export default function LoginContent() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const date = new Date()
  const day = date.getDate()
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()
  return (
    <section className="login-content">
      <p className="date mb-5">{`Today ${month} ${day}, ${year}`}</p>
      <section className="row row-cols-auto tab-wrapper mb-5 mx-1">
        <Link href="/">
          <a className="bar-active title me-3">Login</a>
        </Link>
        <Link href="/register">
          <a className="bar-nonactive title">Registration</a>
        </Link>
      </section>

      <form className="form-login">
        <div className="mb-3">
          <p className="text-white fw-bold mb-4">Login Account</p>
          <label className="form-label text-white">Phone Number</label>
          <input
            type="email"
            className="form-control form-input"
            placeholder="Input your phone number"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Password</label>
          <input
            type="password"
            className="form-control form-input"
            placeholder="Input your password"
          />
        </div>
      </form>
      <section className="mt-5">
        <button className="btn btn-primary me-3">Reset</button>
        <button className="btn btn-secondary">Login</button>
      </section>
    </section>
  )
}
