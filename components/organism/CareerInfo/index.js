import React, {useState} from "react"
import Image from "next/image"
import {useRouter} from "next/router"
import Link from "next/link"
import TextInput from "../../TextInput"
import SelectDate from "../../SelectDate"
import Button from "../../Button"
import CareerItem from "../../CareerItem"
export default function CareerInfo() {
  const [disabled, setDisabled] = useState(true)
  const [company, setCompany] = useState("")
  const router = useRouter()
  const onDiscard = () => {
    setCompany("")
    setDisabled(true)
  }
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
        <section className="row row-cols-auto tab-wrapper mx-1 gap-4 my-5">
          <Link href="/profile">
            <a className="bar-nonactive title-bar me-3">Information</a>
          </Link>
          <Link href="/profile/career">
            <a className="bar-active title-bar">Career</a>
          </Link>
          <Link href="/profile/education">
            <a className="bar-nonactive title-bar">Education</a>
          </Link>
          <Link href="/profile/galery">
            <a className="bar-nonactive title-bar">Gallery</a>
          </Link>
        </section>
        <section className="info-user">
          <div className="px-3">
            <div className="d-flex flex-row ">
              <div className="flex-grow-1">
                <p className="title-label mb-1">Career Information</p>
                <p className="subtitle">Information about your career</p>
              </div>
              <button
                onClick={() => setDisabled(false)}
                className="float-end btn-add"
              >
                <Image
                  src="/img/Btn-add.svg"
                  alt="add btn"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <TextInput
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              disabled={disabled}
              title="Company Name"
            />
            <SelectDate title="Start From" />
            <SelectDate title="Ending In" />
            <section className="mt-4 d-flex flex-row gap-3 mb-5">
              <Button onClick={onDiscard} title="Discard" type="primary" />
              <Button title="Add Career" type="secondary" />
            </section>
            <CareerItem
              title="PT Erkananta"
              subtitle="Jul 7, 2020 - Jul 7, 2021"
            />
            <CareerItem
              title="PT Erkananta"
              subtitle="Jul 7, 2020 - Jul 7, 2021"
            />
            <CareerItem
              title="PT Erkananta"
              subtitle="Jul 7, 2020 - Jul 7, 2021"
            />
          </div>
        </section>
      </section>
    </section>
  )
}
