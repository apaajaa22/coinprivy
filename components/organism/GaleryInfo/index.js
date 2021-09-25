import React, {useState} from "react"
import Image from "next/image"
import {useRouter} from "next/router"
import Link from "next/link"
export default function GaleryInfo() {
  const router = useRouter()
  const onDiscard = () => {
    setSchool("")
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
            <a className="bar-nonactive title-bar">Career</a>
          </Link>
          <Link href="/profile/education">
            <a className="bar-nonactive title-bar">Education</a>
          </Link>
          <Link href="/profile/galery">
            <a className="bar-active title-bar">Gallery</a>
          </Link>
        </section>
        <section className="info-user">
          <div className="px-3">
            <div className="d-flex flex-row ">
              <div className="flex-grow-1">
                <p className="title-label mb-1">Gallery</p>
                <p className="subtitle">Upload your special moment</p>
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
            <section className="row pb-2">
              <div className="col-4 mt-4">
                <Image
                  src="/img/ImgDummy.png"
                  width={166}
                  height={260}
                  alt="img-upload"
                  className="image-upload"
                />
              </div>
            </section>
          </div>
        </section>
      </section>
    </section>
  )
}
