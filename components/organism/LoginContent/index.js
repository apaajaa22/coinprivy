import React from "react"
import Link from "next/link"
import Button from "../../Button"
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
    <section className="auth-content ">
      <p className="date mb-5">{`Today ${month} ${day}, ${year}`}</p>
      <section className="row row-cols-auto tab-wrapper mx-1">
        <Link href="/">
          <a className="bar-active title me-3">Login</a>
        </Link>
        <Link href="/register">
          <a className="bar-nonactive title">Registration</a>
        </Link>
      </section>

      <form className="form-auth">
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
      <section className="mt-3 row">
        <div className="col flex-grow-0">
          <Button title="Reset" type="primary" />
        </div>
        <div className="col">
          <Button title="Login" type="secondary" />
        </div>
      </section>
    </section>
  )
}
