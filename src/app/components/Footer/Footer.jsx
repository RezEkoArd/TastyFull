"use client"
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="w-full min-h-[100px] bg-color-accent text-color-primary flex flex-row justify-between items-center px-5">
        <div className="">
          <Link href={"/"} className="text-white text-2xl font-medium">
            TASTYFULL
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <h5>Follow Us</h5>
          <div className="flex flex-row items-center justify-center gap-5">
            <Link href="/">
              <InstagramLogo size={32} weight="duotone" />
            </Link>
            <Link href="/https://github.com/RezEkoArd">
              <GithubLogo size={32} weight="duotone" />
            </Link>
            <Link href="/">
              <LinkedinLogo size={32} weight="duotone" />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Footer