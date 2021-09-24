import React, {useState} from "react"
import Button from "../../Button"
import OtpInput from "react-otp-input"
import Image from "next/image"
import {useRouter} from "next/router"
export default function VerificationContent() {
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
  const [otp, setOtp] = useState("")
  const router = useRouter()
  const onVerify = () => {
    console.log("ok")
    router.push("/profile")
  }
  return (
    <section className="auth-content">
      <p className="date mb-5">{`Today ${month} ${day}, ${year}`}</p>
      <form className="form-auth mb-4">
        <div>
          <p className="text-white fw-bold mb-1">OTP Verification</p>
          <p className="text-white-50 fw-light mb-4 fs-6">
            Insert OTP code sent to your phone{" "}
          </p>
        </div>
        <div className="d-flex flex-row mb-2">
          <OtpInput
            value={otp}
            onChange={(e) => setOtp(e)}
            numInputs={4}
            separator={<span></span>}
            inputStyle="inputOtp"
          />
          <Button onClick={onVerify} type="secondary" title="Verify" />
        </div>
      </form>
      <a className="d-flex flex-row  align-items-center gap-2 anchor-ver">
        <Image
          src="/img/ReqOTP.svg"
          width={24}
          height={24}
          alt="logo request"
        />
        <label>Resend OTP Code</label>
      </a>
    </section>
  )
}
