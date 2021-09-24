import React from "react"
import Link from "next/link"
import Button from "../../Button"
import SelectCountry from "../../SelectCountry"
import Image from "next/image"
import {useRouter} from "next/router"
export default function RegisterContent() {
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
  const router = useRouter()
  const onRegister = () => {
    router.push("/")
  }
  return (
    <section className="auth-content ">
      <p className="date mb-5">{`Today ${month} ${day}, ${year}`}</p>
      <section className="row row-cols-auto tab-wrapper mx-1">
        <Link href="/">
          <a className="bar-nonactive title me-3">Login</a>
        </Link>
        <Link href="/register">
          <a className="bar-active title">Registration</a>
        </Link>
      </section>

      <form className="form-auth">
        <div className="mb-3">
          <p className="text-white fw-bold mb-1">Create New Account</p>
          <p className="text-white-50 fw-light mb-4 fs-6">
            Before you can invest here, please create new account
          </p>
          <label className="form-label text-white">Select Country</label>
          <div className="row mx-0">
            <SelectCountry />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Phone Number</label>
          <input
            type="text"
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
      <a className="terms" href="#">
        <Image src="/img/terms.svg" alt="logo" width={24} height={24} />
        Terms and conditions
      </a>
      <section className="mt-3 d-flex flex-row gap-3">
        <Button title="Reset" type="primary" />
        <Button onClick={onRegister} title="Register" type="secondary" />
      </section>
    </section>
  )
}
