import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function SideBar() {
  return (
    <section className="sidebar">
      <Link href="/">
        <a>
          <Image src="/img/Logo.svg" width={131} height={24} alt="logo" />
        </a>
      </Link>
      <div className="wrapper-content">
        <div className="wrapper-title">
          <h3 className="text-white title">Welcome to</h3>
          <h3 className="text-white title">Coinprivy</h3>
        </div>
        <p className="description">
          is a secure platform that makes it easy to buy, sell, and store
          cryptocurrency like Bitcoin,
          <br /> Ethereum, and more. Based in the USA
        </p>
      </div>
    </section>
  )
}
