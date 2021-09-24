import React, {useState} from "react"
import Image from "next/image"
import {useRouter} from "next/router"
import SelectZodiak from "../../SelectZodiak"
import SelectGender from "../../SelectGender"
import SelectDate from "../../SelectDate"
import TextName from "../../TextName"
import ProfileBar from "../../ProfileBar"
import TextArea from "../../TextArea"
import Button from "../../Button"
export default function ProfileInfo() {
  const router = useRouter()
  return (
    <section className="profile-page">
      <Image
        src="/img/Bg.png"
        layout="responsive"
        height={293}
        width={880}
        alt="background"
        className="image-bg"
      />
      <section className="wrapper-profile-content mb-4">
        <p className="text-white title mb-1">Wong Fei Hung</p>
        <p className="subtitle">Level 1 - #SG769891</p>
        <ProfileBar />
        <section className="info-user d-flex flex-row">
          <div className="px-3">
            <p className="title-label mb-1">Profile Information</p>
            <p className="subtitle">Your personal data</p>
            <p className="title-label mt-4">Profile Detail</p>
            <TextName />
            <SelectGender />
            <SelectDate />
            <SelectZodiak />
            <TextArea title="Bio" />
            <section className="mt-3 d-flex flex-row justify-content-between">
              <Button title="Discard" type="primary" />
              <Button title="Update" type="secondary" />
            </section>
          </div>
          <div className="content-right-info mt-5 ">
            <p className="title-label mt-4 mb-4">Profile Picture</p>
            <Image
              src="/img/user.png"
              width={224}
              height={224}
              alt="img user"
              className="rounded"
            />
            <a onClick={() => console.log("a")} className="btn btn-custom">
              Upload Media
            </a>
            <p className="text-warn">PNG, JPG or MP4 up to 50MB</p>
            <TextArea title="Address" />
          </div>
        </section>
      </section>
    </section>
  )
}
